import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Truck, CheckCircle2 } from 'lucide-react';

export default function AdminServiceAreasPage() {
  const hubs = [
    { city: 'Bengaluru', pincode: '560001 - 560100', tier: 'Tier 1 (Metro)', pickup: 'Same-Day / Next-Day', delivery: 'Next-Day Air' },
    { city: 'New Delhi & NCR', pincode: '110001 - 110096 / 122001', tier: 'Tier 1 (Metro)', pickup: 'Same-Day / Next-Day', delivery: 'Next-Day Air' },
    { city: 'Mumbai & MMR', pincode: '400001 - 400601', tier: 'Tier 1 (Metro)', pickup: 'Same-Day / Next-Day', delivery: 'Next-Day Air' },
    { city: 'Hyderabad', pincode: '500001 - 500081', tier: 'Tier 1 (Metro)', pickup: 'Next-Day', delivery: '1-2 Days Air' },
    { city: 'Pune', pincode: '411001 - 411057', tier: 'Tier 1 (Metro)', pickup: 'Next-Day', delivery: '1-2 Days Air' },
    { city: 'Chennai', pincode: '600001 - 600096', tier: 'Tier 1 (Metro)', pickup: 'Next-Day', delivery: '1-2 Days Air' },
    { city: 'Kolkata', pincode: '700001 - 700091', tier: 'Tier 1 (Metro)', pickup: '2-Day Doorstep', delivery: '2-3 Days Air' },
    { city: 'Ahmedabad & Jaipur', pincode: '380001 / 302001', tier: 'Tier 2 (Hub)', pickup: '2-Day Doorstep', delivery: '2-3 Days Air' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/admin" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Service Areas & PIN Code Logistics</h1>
          <p className="text-xs text-slate-400">Doorstep pickup coverage and delivery speed tiers across India</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/80 border-b border-slate-800 text-[10px] text-slate-400 uppercase font-bold">
            <tr>
              <th className="p-4">Metro / Service Hub</th>
              <th className="p-4">PIN Code Ranges</th>
              <th className="p-4">Tier Classification</th>
              <th className="p-4">Pickup SLA</th>
              <th className="p-4 text-right">Delivery SLA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-850">
            {hubs.map((h, i) => (
              <tr key={i} className="hover:bg-slate-850/40 transition">
                <td className="p-4 font-bold text-white flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{h.city}</span>
                </td>
                <td className="p-4 text-slate-300 font-mono">{h.pincode}</td>
                <td className="p-4 text-slate-400">{h.tier}</td>
                <td className="p-4 text-emerald-400 font-semibold">{h.pickup}</td>
                <td className="p-4 text-right text-cyan-400 font-semibold">{h.delivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
