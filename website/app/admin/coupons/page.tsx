import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Tag, Plus, CheckCircle2 } from 'lucide-react';
import { db } from '@/lib/db';

export default function AdminCouponsPage() {
  const coupons = db.getCoupons();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/admin" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Coupons & Promo Codes</h1>
          <p className="text-xs text-slate-400">Manage storefront discounts and buyback valuation boosts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {coupons.map((c) => (
          <div key={c.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3 relative">
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-full">
              ACTIVE PROMO
            </span>
            <div className="text-xl font-black font-mono text-white mt-1">{c.code}</div>
            <p className="text-xs text-slate-300">{c.description}</p>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              Min Cart Value: <strong className="text-white">₹{c.minOrderValue.toLocaleString('en-IN')}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
