'use client';

import React from 'react';
import Link from 'next/link';
import { Wind, ShieldCheck, Zap, Truck, ChevronRight, Sparkles } from 'lucide-react';

export default function SellAirConditionerPage() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-16 antialiased">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/sell" className="hover:text-[#13b59b]">Sell Gadgets</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Sell Old Air Conditioner</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13b59b]/10 text-[#13b59b] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Doorstep AC Uninstallation &amp; Pickup</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Sell Old Air Conditioner Online For Instant Cash
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
              Split or Window AC? Get maximum cash value with free technician uninstallation and doorstep cash payout across India.
            </p>
            <div className="p-4 sm:p-5 rounded-2xl bg-linear-to-r from-emerald-50 to-[#f0faf8] border border-[#13b59b]/25 flex items-center justify-between max-w-lg">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase">Valuation Range</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#13b59b]">Up to ₹18,000</div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') window.dispatchEvent(new Event('open-login-modal'));
                }}
                className="bg-[#2bbb9e] hover:bg-[#23a58c] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase cursor-pointer"
              >
                Get AC Valuation →
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 rounded-2xl bg-white shadow-md flex items-center justify-center p-4">
              <Wind className="w-16 h-16 text-[#13b59b]" />
            </div>
            <div className="font-bold text-slate-900 mt-3">Split &amp; Window ACs</div>
            <div className="text-xs text-slate-500 mt-0.5">Voltas, Daikin, LG, Samsung, Blue Star</div>
          </div>
        </div>
      </div>
    </div>
  );
}
