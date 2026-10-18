import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Wrench, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { db } from '@/lib/db';

export default function AdminServicesQueuePage() {
  const bookings = db.getServiceBookings();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/admin" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Repair Appointments Queue</h1>
          <p className="text-xs text-slate-400">Manage field hardware technician assignments and spare parts allocation</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/80 border-b border-slate-800 text-[10px] text-slate-400 uppercase font-bold">
            <tr>
              <th className="p-4">Booking Ref</th>
              <th className="p-4">Customer & Phone</th>
              <th className="p-4">Service Type</th>
              <th className="p-4">Device Model</th>
              <th className="p-4">Scheduled Slot</th>
              <th className="p-4">Est. Cost</th>
              <th className="p-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-850">
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-slate-850/40 transition">
                <td className="p-4 font-mono font-bold text-white">{b.bookingNumber}</td>
                <td className="p-4">
                  <div className="text-white font-bold">{b.customerName}</div>
                  <div className="text-[10px] text-slate-400">+91 {b.customerPhone}</div>
                </td>
                <td className="p-4 text-emerald-400 font-semibold">{b.serviceType}</td>
                <td className="p-4 text-slate-300">{b.deviceDetails}</td>
                <td className="p-4 text-slate-300">
                  <div>{b.scheduledDate}</div>
                  <div className="text-[10px] text-slate-400">{b.scheduledSlot}</div>
                </td>
                <td className="p-4 font-black text-white">₹{b.estimatedCost.toLocaleString('en-IN')}</td>
                <td className="p-4 text-right">
                  <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full">
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
