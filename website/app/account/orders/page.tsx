import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
import { ArrowLeft, ShoppingBag, Truck, FileText, ChevronRight } from 'lucide-react';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export default async function CustomerStoreOrdersPage() {
  const user = await getCurrentUser();
  const orders = user ? db.getCustomerOrdersByUser(user.id) : [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/account" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Refurbished Store Purchases</h1>
          <p className="text-xs text-slate-400">View orders, courier tracking, and printable GST invoices</p>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
          <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No store purchases yet</h3>
          <p className="text-xs text-slate-400">Discover certified refurbished tech with 12 months doorstep warranty.</p>
          <Link href="/buy-refurbished" className="inline-block py-2.5 px-5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl mt-2">
            Explore Refurbished Deals
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    {order.status}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">Order {order.orderNumber}</h3>
                  <div className="text-xs text-slate-400">
                    Placed on {new Date(order.createdAt).toLocaleDateString('en-IN')} • {order.items.length} items
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-xl font-black text-emerald-400">₹{order.totalAmount.toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-slate-400">
                    {order.paymentMethod} ({order.paymentStatus})
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-2">
                {order.items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-950 rounded-xl p-1 flex items-center justify-center border border-slate-800 shrink-0">
                        <img src={it.productImage} alt="" className="max-h-8 max-w-full object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{it.productTitle}</div>
                        <div className="text-[10px] text-slate-400">Qty: {it.quantity} • Grade: {it.conditionGrade}</div>
                      </div>
                    </div>
                    <div className="font-bold text-white">₹{it.totalPrice.toLocaleString('en-IN')}</div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  Tracking: <strong className="text-white">{order.trackingNumber}</strong> ({order.courierPartner})
                </div>
                <Link
                  href={`/order-confirmation/${order.id}`}
                  className="py-2 px-4 bg-slate-800 hover:bg-slate-750 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Tax Invoice</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
