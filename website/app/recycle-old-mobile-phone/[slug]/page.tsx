'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { Recycle, ShieldCheck, Zap, Truck, ChevronRight, Leaf } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function RecyclePhoneDynamicPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const cleanName = slug
    .replace('recycle-', '')
    .replace('reuse-', '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-16 antialiased">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/recycle-old-mobile-phone" className="hover:text-[#13b59b]">Recycle</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">{cleanName}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero-Landfill E-Waste Program</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Recycle Old {cleanName} &amp; Get Cash
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dispose of your non-working, broken, or dead {cleanName} responsibly. Get paid instant scrap payout while saving the environment through government-authorized e-waste processing.
            </p>
            <div className="p-4 sm:p-5 rounded-2xl bg-linear-to-r from-emerald-50 to-[#f0faf8] border border-emerald-200 flex items-center justify-between max-w-lg">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase">Scrap Value Payout</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">Instant Cash Offer</div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') window.dispatchEvent(new Event('open-login-modal'));
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase cursor-pointer"
              >
                Schedule Pickup →
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 rounded-2xl bg-white shadow-md flex items-center justify-center p-4">
              <Recycle className="w-16 h-16 text-emerald-600" />
            </div>
            <div className="font-bold text-slate-900 mt-3">{cleanName} Recycling</div>
            <div className="text-xs text-emerald-700 font-semibold mt-1">CPCB Authorized Recycler</div>
          </div>
        </div>
      </div>
    </div>
  );
}
