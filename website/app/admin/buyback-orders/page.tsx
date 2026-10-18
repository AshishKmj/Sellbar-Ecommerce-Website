'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRightLeft,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Zap,
  Edit,
  Clock,
  MapPin,
  Check,
} from 'lucide-react';
import { BuybackOrder, BuybackStatus } from '@/lib/types';

export default function AdminBuybackOrdersPage() {
  const [orders, setOrders] = useState<BuybackOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<BuybackOrder | null>(null);

  // Edit fields
  const [editStatus, setEditStatus] = useState<BuybackStatus>('PICKUP_SCHEDULED');
  const [technicianNotes, setTechnicianNotes] = useState('');
  const [revisedPrice, setRevisedPrice] = useState<string>('');
  const [saving, setSaving] = useState(false);

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/admin/kpis');
      const data = await res.json();
      if (data.success && data.recentBuybacks) {
        setOrders(data.recentBuybacks);
        if (!selectedOrder && data.recentBuybacks.length > 0) {
          setSelectedOrder(data.recentBuybacks[0]);
          setEditStatus(data.recentBuybacks[0].status);
          setTechnicianNotes(data.recentBuybacks[0].technicianNotes || '');
          setRevisedPrice(data.recentBuybacks[0].revisedPrice?.toString() || '');
        }
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSelectOrder = (o: BuybackOrder) => {
    setSelectedOrder(o);
    setEditStatus(o.status);
    setTechnicianNotes(o.technicianNotes || '');
    setRevisedPrice(o.revisedPrice ? o.revisedPrice.toString() : '');
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/buyback/${selectedOrder.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: editStatus,
          technicianNotes,
          revisedPrice: revisedPrice ? Number(revisedPrice) : undefined,
          finalPayoutPrice: editStatus === 'PAID' ? (revisedPrice ? Number(revisedPrice) : selectedOrder.quotedPrice) : undefined,
        }),
      });

      const data = await res.json();
      if (data.success && data.order) {
        alert(`Order ${data.order.orderNumber} updated!`);
        fetchOrders();
      } else {
        alert(data.message || 'Update failed');
      }
    } catch {
      alert('Error updating order');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/admin" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Buyback & Trade-In Orders Management</h1>
          <p className="text-xs text-slate-400">Review device inspection reports, adjust offers, and release instant payouts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Orders List */}
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Incoming Orders ({orders.length})
          </h2>

          {orders.map((o) => (
            <button
              key={o.id}
              onClick={() => handleSelectOrder(o)}
              className={`w-full p-4 rounded-2xl border text-left transition flex items-center justify-between ${
                selectedOrder?.id === o.id
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-800 bg-slate-900 hover:border-slate-700'
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  {o.status}
                </span>
                <h3 className="text-sm font-bold text-white mt-1">{o.modelName} ({o.variantTitle})</h3>
                <div className="text-[11px] text-slate-400">
                  Customer: {o.userName} ({o.pickupCity})
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-black text-white">₹{o.quotedPrice.toLocaleString('en-IN')}</div>
                <div className="text-[10px] text-slate-500">{o.pickupDate}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Right: Active Order Inspection & Status Editor */}
        {selectedOrder && (
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="text-xs text-slate-400">Ref: <strong className="text-white">{selectedOrder.orderNumber}</strong></div>
                <h2 className="text-xl font-black text-white mt-0.5">{selectedOrder.modelName}</h2>
                <div className="text-xs text-emerald-400 font-bold">Variant: {selectedOrder.variantTitle}</div>
              </div>

              <div className="sm:text-right">
                <div className="text-xs text-slate-400">Indicative Quote:</div>
                <div className="text-2xl font-black text-emerald-400">₹{selectedOrder.quotedPrice.toLocaleString('en-IN')}</div>
              </div>
            </div>

            {/* Diagnostic Responses */}
            <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 space-y-2 text-xs">
              <h3 className="font-bold text-slate-300 uppercase text-[10px] tracking-wider mb-1">
                Customer Diagnostic Answers:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div>Powers On: <strong className="text-white">{selectedOrder.questionnaire.powersOn ? 'Yes' : 'No'}</strong></div>
                <div>Screen Condition: <strong className="text-white">{selectedOrder.questionnaire.screenCondition}</strong></div>
                <div>Body Condition: <strong className="text-white">{selectedOrder.questionnaire.bodyCondition}</strong></div>
                <div>Accessories: <strong className="text-white">{selectedOrder.questionnaire.accessories.join(', ') || 'None'}</strong></div>
              </div>
              {selectedOrder.questionnaire.functionalDefects.length > 0 && (
                <div className="text-amber-400 pt-1">
                  Reported Defects: <strong>{selectedOrder.questionnaire.functionalDefects.join(', ')}</strong>
                </div>
              )}
            </div>

            {/* Payout & Pickup info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">Customer & Address:</div>
                <div className="text-white font-bold">{selectedOrder.userName} (+91 {selectedOrder.userPhone})</div>
                <div className="text-slate-400">{selectedOrder.pickupAddress}</div>
              </div>

              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">Payout Destination:</div>
                <div className="text-white font-bold">{selectedOrder.payoutMethod}</div>
                <div className="text-emerald-400">{selectedOrder.payoutDetails}</div>
              </div>
            </div>

            {/* Status Update Form */}
            <form onSubmit={handleSave} className="space-y-4 pt-4 border-t border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1">
                    Update Order Status
                  </label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="PICKUP_SCHEDULED">PICKUP_SCHEDULED</option>
                    <option value="TECHNICIAN_ASSIGNED">TECHNICIAN_ASSIGNED</option>
                    <option value="PICKUP_OUT_FOR_COLLECTION">PICKUP_OUT_FOR_COLLECTION</option>
                    <option value="DEVICE_COLLECTED">DEVICE_COLLECTED</option>
                    <option value="INSPECTION_IN_PROGRESS">INSPECTION_IN_PROGRESS</option>
                    <option value="REVISED_OFFER_AVAILABLE">REVISED_OFFER_AVAILABLE</option>
                    <option value="ACCEPTED">ACCEPTED (Inspection Verified)</option>
                    <option value="PAID">PAID (Instant Payout Released)</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="CANCELLED">CANCELLED</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1">
                    Revised Price (If Physical Inspection Differs)
                  </label>
                  <input
                    type="number"
                    value={revisedPrice}
                    onChange={(e) => setRevisedPrice(e.target.value)}
                    placeholder="e.g. 32000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1">
                  Technician / Field Notes
                </label>
                <textarea
                  rows={2}
                  value={technicianNotes}
                  onChange={(e) => setTechnicianNotes(e.target.value)}
                  placeholder="Record physical inspection findings or reason for revised quote..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="py-3 px-6 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{saving ? 'Updating...' : 'Save & Publish Status'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
