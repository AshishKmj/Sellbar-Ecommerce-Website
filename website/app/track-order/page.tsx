'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Package, ArrowRightLeft, ShieldCheck, MapPin, Truck, CheckCircle2 } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderQuery, setOrderQuery] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    const q = orderQuery.trim().toUpperCase();

    try {
      if (q.includes('BUY') || q.startsWith('SB-BUY') || q.startsWith('BB-')) {
        // Buyback order search
        const res = await fetch(`/api/buyback/orders/${encodeURIComponent(q)}`);
        const data = await res.json();
        if (data.success && data.order) {
          setResult({ type: 'BUYBACK', order: data.order });
        } else {
          setError('No buyback order found with that reference.');
        }
      } else {
        // Store purchase search
        const res = await fetch('/api/checkout/orders');
        const data = await res.json();
        if (data.success && data.orders) {
          const match = data.orders.find(
            (o: any) => o.orderNumber.toUpperCase() === q || o.id === q || o.trackingNumber === q
          );
          if (match) {
            setResult({ type: 'STORE_ORDER', order: match });
          } else {
            // Check buyback just in case
            const bRes = await fetch(`/api/buyback/orders/${encodeURIComponent(q)}`);
            const bData = await bRes.json();
            if (bData.success && bData.order) {
              setResult({ type: 'BUYBACK', order: bData.order });
            } else {
              setError('No order found with this tracking or reference number.');
            }
          }
        }
      }
    } catch {
      setError('Error retrieving order status.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
          <Truck className="w-3.5 h-3.5" /> Real-time Logistics
        </div>
        <h1 className="text-3xl font-black text-white">Track Your Order or Pickup</h1>
        <p className="text-xs text-slate-400">
          Enter your Sellbar Store Order ID (<code className="text-emerald-400">SB-ORD-...</code>) or Buyback Reference (<code className="text-emerald-400">SB-BUY-...</code>)
        </p>
      </div>

      {/* Search Input */}
      <form onSubmit={handleTrack} className="max-w-lg mx-auto flex gap-2">
        <input
          type="text"
          value={orderQuery}
          onChange={(e) => setOrderQuery(e.target.value.toUpperCase())}
          placeholder="e.g. SB-ORD-2026-9821 or SB-BUY-2026-1042"
          className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl py-3 px-4 text-xs text-white uppercase focus:outline-none focus:border-emerald-500"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="py-3 px-6 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold rounded-2xl text-xs flex items-center gap-2 transition"
        >
          <Search className="w-4 h-4" />
          <span>{loading ? 'Searching...' : 'Track'}</span>
        </button>
      </form>

      {error && (
        <div className="max-w-md mx-auto p-4 bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs rounded-2xl text-center">
          {error}
        </div>
      )}

      {/* Result Card */}
      {result && result.type === 'STORE_ORDER' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                Refurbished Store Purchase
              </span>
              <h2 className="text-xl font-black text-white mt-1">Order {result.order.orderNumber}</h2>
              <p className="text-xs text-slate-400">Status: <strong className="text-white">{result.order.status}</strong></p>
            </div>
            <div className="sm:text-right text-xs">
              <div className="text-slate-400">Courier Tracking</div>
              <div className="font-bold text-emerald-400">{result.order.trackingNumber} ({result.order.courierPartner})</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
            <div>
              <div className="font-bold text-slate-400 uppercase text-[10px] mb-1">Delivering to:</div>
              <div className="font-semibold text-white">{result.order.customerName}</div>
              <div className="text-slate-400">{result.order.shippingAddress.streetAddress}, {result.order.shippingAddress.city} - {result.order.shippingAddress.pincode}</div>
            </div>
            <div className="sm:text-right">
              <div className="font-bold text-slate-400 uppercase text-[10px] mb-1">Order Amount:</div>
              <div className="text-lg font-black text-emerald-400">₹{result.order.totalAmount.toLocaleString('en-IN')}</div>
              <div className="text-[11px] text-slate-400">Payment: {result.order.paymentMethod} ({result.order.paymentStatus})</div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href={`/order-confirmation/${result.order.id}`}
              className="inline-block py-2.5 px-4 bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs rounded-xl"
            >
              View Full Tax Invoice
            </Link>
          </div>
        </div>
      )}

      {result && result.type === 'BUYBACK' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                Device Sell / Buyback Order
              </span>
              <h2 className="text-xl font-black text-white mt-1">{result.order.modelName} ({result.order.variantTitle})</h2>
              <p className="text-xs text-slate-400">Ref: <strong className="text-white">{result.order.orderNumber}</strong></p>
            </div>
            <div className="sm:text-right text-xs">
              <div className="text-slate-400">Pickup Status</div>
              <div className="font-bold text-emerald-400">{result.order.status}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
            <div>
              <div className="font-bold text-slate-400 uppercase text-[10px] mb-1">Assigned Technician:</div>
              <div className="font-semibold text-white">{result.order.assignedTechnicianName}</div>
              <div className="text-slate-400">Phone: {result.order.assignedTechnicianPhone}</div>
              <div className="text-slate-400 pt-1">Slot: {result.order.pickupDate} ({result.order.pickupTimeSlot})</div>
            </div>
            <div className="sm:text-right">
              <div className="font-bold text-slate-400 uppercase text-[10px] mb-1">Indicative Payout:</div>
              <div className="text-lg font-black text-emerald-400">₹{result.order.quotedPrice.toLocaleString('en-IN')}</div>
              <div className="text-[11px] text-slate-400">Payout Mode: {result.order.payoutMethod} ({result.order.payoutDetails})</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
