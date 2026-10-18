import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
import { ArrowLeft, ArrowRightLeft, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export default async function CustomerSellOrdersPage() {
  const user = await getCurrentUser();
  const orders = user ? db.getBuybackOrdersByUser(user.id) : [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/account" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Device Sell / Buyback Orders</h1>
          <p className="text-xs text-slate-400">Track technician visits, diagnostic inspection, and instant payouts</p>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
          <ArrowRightLeft className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No device selling orders yet</h3>
          <p className="text-xs text-slate-400">Get an instant quote and free doorstep pickup for your old phone or laptop.</p>
          <Link href="/sell" className="inline-block py-2.5 px-5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl mt-2">
            Sell a Device Now
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
                  <h3 className="text-base font-bold text-white mt-1">
                    {order.modelName} ({order.variantTitle})
                  </h3>
                  <div className="text-xs text-slate-400">Order Reference: <strong className="text-white">{order.orderNumber}</strong></div>
                </div>

                <div className="sm:text-right">
                  <div className="text-xs text-slate-400">Guaranteed Quote</div>
                  <div className="text-xl font-black text-emerald-400">₹{order.quotedPrice.toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-slate-400">{order.payoutMethod} ({order.payoutDetails})</div>
                </div>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-0.5">Pickup Slot:</div>
                  <div>{order.pickupDate}</div>
                  <div className="text-slate-400">{order.pickupTimeSlot}</div>
                </div>

                <div>
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-0.5">Assigned Technician:</div>
                  <div className="text-white font-semibold">{order.assignedTechnicianName}</div>
                  <div className="text-slate-400">{order.assignedTechnicianPhone}</div>
                </div>

                <div>
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-0.5">Pickup Address:</div>
                  <div className="text-slate-300 line-clamp-2">{order.pickupAddress}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
