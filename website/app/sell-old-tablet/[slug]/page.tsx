'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { Tablet, ShieldCheck, Zap, Truck, ChevronRight, Sparkles } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SellTabletDynamicPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const cleanName = slug
    .replace('sell-', '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-16 antialiased">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/sell" className="hover:text-[#13b59b]">Sell Tablet</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">{cleanName}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13b59b]/10 text-[#13b59b] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Tablet Valuation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Sell Old {cleanName} Tablet / iPad
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sell your pre-owned {cleanName} tablet with free doorstep pickup, certified data wipe, and instant bank or UPI transfer.
            </p>
            <div className="p-4 sm:p-5 rounded-2xl bg-linear-to-r from-emerald-50 to-[#f0faf8] border border-[#13b59b]/25 flex items-center justify-between max-w-lg">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase">Top Valuation</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#13b59b]">Up to ₹48,000</div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') window.dispatchEvent(new Event('open-login-modal'));
                }}
                className="bg-[#2bbb9e] hover:bg-[#23a58c] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase cursor-pointer"
              >
                Get Exact Quote →
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 rounded-2xl bg-white shadow-md flex items-center justify-center p-4">
              <Tablet className="w-16 h-16 text-[#13b59b]" />
            </div>
            <div className="font-bold text-slate-900 mt-3">{cleanName} Series</div>
          </div>
        </div>
      </div>
    </div>
  );
}
