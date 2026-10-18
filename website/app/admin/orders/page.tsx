import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
import { ArrowLeft, ShoppingBag, Truck, FileText } from 'lucide-react';
import { db } from '@/lib/db';

export default function AdminOrdersPage() {
  const orders = db.getAllCustomerOrders();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/admin" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Store Customer Orders</h1>
          <p className="text-xs text-slate-400">Manage order fulfillment, tracking numbers, and delivery status</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-[10px] text-slate-400 uppercase font-bold">
              <tr>
                <th className="p-4">Order Number</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Total Amount</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Status</th>
                <th className="p-4">Tracking</th>
                <th className="p-4 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-850/40 transition">
                  <td className="p-4 font-bold text-white">
                    {o.orderNumber}
                  </td>
                  <td className="p-4">
                    <div className="text-white font-semibold">{o.customerName}</div>
                    <div className="text-[10px] text-slate-400">{o.shippingAddress.city}, {o.shippingAddress.state}</div>
                  </td>
                  <td className="p-4 font-black text-emerald-400">
                    ₹{o.totalAmount.toLocaleString('en-IN')}
                  </td>
                  <td className="p-4 text-slate-300">
                    {o.paymentMethod} ({o.paymentStatus})
                  </td>
                  <td className="p-4">
                    <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                      {o.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-300">
                    {o.trackingNumber} ({o.courierPartner})
                  </td>
                  <td className="p-4 text-right">
                    <Link
                      href={`/order-confirmation/${o.id}`}
                      className="text-emerald-400 hover:underline font-bold"
                    >
                      View Invoice
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
