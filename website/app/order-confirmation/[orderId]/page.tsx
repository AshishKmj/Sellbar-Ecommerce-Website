import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
import { notFound } from 'next/navigation';
import {
  CheckCircle2,
  Package,
  Truck,
  FileText,
  Printer,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Calendar,
} from 'lucide-react';
import { db } from '@/lib/db';

export default async function OrderConfirmationPage(props: {
  params: Promise<{ orderId: string }>;
}) {
  const params = await props.params;
  const order = db.getCustomerOrderById(params.orderId);

  if (!order) {
    notFound();
  }

  const cgst = Math.round(order.taxGstAmount / 2);
  const sgst = order.taxGstAmount - cgst;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Top Banner */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
          Order Confirmed & Payment Verified
        </div>
        <h1 className="text-3xl font-black text-white">Thank You For Your Order!</h1>
        <p className="text-xs text-slate-400">
          Order Reference: <strong className="text-white">{order.orderNumber}</strong> • Insured Shipping via {order.courierPartner || 'BlueDart'}
        </p>
      </div>

      {/* Tracking Tracker */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs text-slate-400">Waybill / Tracking No</div>
            <div className="text-sm font-black text-emerald-400">{order.trackingNumber}</div>
          </div>
          <div className="text-xs text-slate-400 sm:text-right">
            <div>Courier Partner: <strong className="text-white">{order.courierPartner}</strong></div>
            <div>Estimated Doorstep Delivery: <strong className="text-white">2-3 Business Days</strong></div>
          </div>
        </div>

        {/* 4 Status Steps */}
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div className="space-y-1.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center mx-auto text-xs">
              ✓
            </div>
            <div className="font-bold text-white text-[11px]">Order Placed</div>
          </div>
          <div className="space-y-1.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center mx-auto text-xs">
              ✓
            </div>
            <div className="font-bold text-white text-[11px]">Packed & Tested</div>
          </div>
          <div className="space-y-1.5">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-emerald-500/50 text-emerald-400 font-bold flex items-center justify-center mx-auto text-xs animate-pulse">
              3
            </div>
            <div className="font-semibold text-slate-300 text-[11px]">In Transit</div>
          </div>
          <div className="space-y-1.5">
            <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-500 font-bold flex items-center justify-center mx-auto text-xs">
              4
            </div>
            <div className="text-slate-500 text-[11px]">Delivered</div>
          </div>
        </div>
      </div>

      {/* Tax Invoice Breakdown (Printable GST Format) */}
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-xs text-slate-300">
        <div className="flex flex-col sm:flex-row justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="text-xl font-black text-white">
              Sell<span className="text-emerald-400">bar</span>.in
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Sellbar Technologies India Pvt. Ltd.<br />
              GSTIN: 29AABCU9603R1ZM<br />
              Koramangala, Bengaluru, Karnataka - 560034
            </div>
          </div>

          <div className="sm:text-right text-[11px] space-y-1 text-slate-400">
            <div className="text-sm font-bold text-white">Tax Invoice</div>
            <div>Invoice No: <strong>INV-{order.orderNumber}</strong></div>
            <div>Date: <strong>{new Date(order.createdAt).toLocaleDateString('en-IN')}</strong></div>
            <div>Place of Supply: <strong>{order.shippingAddress.state}</strong></div>
          </div>
        </div>

        {/* Bill to */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Billed To & Shipped To:</div>
            <div className="font-bold text-white text-sm">{order.customerName}</div>
            <div className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
              {order.shippingAddress.streetAddress}<br />
              {order.shippingAddress.landmark ? `Landmark: ${order.shippingAddress.landmark}, ` : ''}
              {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}<br />
              Mobile: +91 {order.customerPhone}
            </div>
          </div>

          <div className="sm:text-right space-y-1 text-[11px]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Payment Method:</div>
            <div className="font-bold text-white">{order.paymentMethod}</div>
            <div className="text-slate-400">Status: <strong className="text-emerald-400">{order.paymentStatus}</strong></div>
            {order.paymentId && <div className="text-slate-500">Ref: {order.paymentId}</div>}
          </div>
        </div>

        {/* Items Table */}
        <div className="space-y-3">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] text-slate-400 uppercase font-bold">
                <th className="py-2">Item Description</th>
                <th className="py-2">HSN</th>
                <th className="py-2 text-center">Qty</th>
                <th className="py-2 text-right">Unit Price</th>
                <th className="py-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850">
              {order.items.map((it, idx) => (
                <tr key={idx} className="text-xs">
                  <td className="py-3 pr-2">
                    <div className="font-bold text-white">{it.productTitle}</div>
                    <div className="text-[10px] text-emerald-400">Grade: {it.conditionGrade} • 12M Warranty</div>
                  </td>
                  <td className="py-3 text-slate-400">85171300</td>
                  <td className="py-3 text-center text-white">{it.quantity}</td>
                  <td className="py-3 text-right text-slate-300">₹{it.unitPrice.toLocaleString('en-IN')}</td>
                  <td className="py-3 text-right font-bold text-white">₹{it.totalPrice.toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* GST & Totals */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <div className="w-72 space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Subtotal:</span>
              <span className="text-white">₹{order.subtotal.toLocaleString('en-IN')}</span>
            </div>
            {order.discountAmount > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>Discount ({order.couponCode || 'Coupon'}):</span>
                <span>- ₹{order.discountAmount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>CGST (9%):</span>
              <span>₹{cgst.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>SGST (9%):</span>
              <span>₹{sgst.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Insured Shipping:</span>
              <span className="text-emerald-400 font-bold">FREE</span>
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-black text-white">
              <span>Grand Total:</span>
              <span className="text-emerald-400 text-lg">₹{order.totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/account/orders"
          className="w-full sm:w-auto py-3 px-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition"
        >
          <span>View In My Orders</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/buy-refurbished"
          className="w-full sm:w-auto py-3 px-6 bg-slate-800 hover:bg-slate-750 text-slate-300 font-semibold rounded-xl text-xs transition text-center"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
