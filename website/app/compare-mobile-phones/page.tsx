'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRightLeft, Smartphone, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export default function ComparePhonesPage() {
  const [deviceA, setDeviceA] = useState('Apple iPhone 15 Pro');
  const [deviceB, setDeviceB] = useState('Samsung Galaxy S24 Ultra');

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-16 antialiased">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/find-new-phone" className="hover:text-[#13b59b]">Find New Phone</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Compare Mobile Phones</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13b59b]/10 text-[#13b59b] text-xs font-bold uppercase tracking-wider">
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Side-by-Side Smartphone Comparison</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Compare Mobile Phones
          </h1>
          <p className="text-sm text-slate-600">
            Compare cameras, battery capacity, processors, display specs, and current price in India.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-8 border-b border-slate-100 pb-8">
            <div className="text-center space-y-3">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
                <Smartphone className="w-14 h-14 text-[#13b59b]" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{deviceA}</h3>
              <div className="text-xs text-slate-500">A17 Pro Chip • 48MP Triple Cam</div>
              <div className="text-lg font-extrabold text-[#13b59b]">₹1,19,900</div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
                <Smartphone className="w-14 h-14 text-cyan-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{deviceB}</h3>
              <div className="text-xs text-slate-500">Snapdragon 8 Gen 3 • 200MP Quad Cam</div>
              <div className="text-lg font-extrabold text-cyan-600">₹1,29,999</div>
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {[
              { spec: 'Display', a: '6.1-inch Super Retina XDR OLED 120Hz', b: '6.8-inch Dynamic AMOLED 2X 120Hz' },
              { spec: 'Processor', a: 'Apple A17 Pro (3nm)', b: 'Snapdragon 8 Gen 3 for Galaxy (4nm)' },
              { spec: 'Rear Camera', a: '48MP + 12MP + 12MP', b: '200MP + 50MP + 12MP + 10MP' },
              { spec: 'Front Camera', a: '12MP TrueDepth', b: '12MP Dual Pixel AF' },
              { spec: 'Battery & Charging', a: '3,274 mAh • 20W Fast Charging', b: '5,000 mAh • 45W Fast Charging' },
              { spec: 'OS & Updates', a: 'iOS 18 (5+ Years Support)', b: 'Android 15 (7 Years Support)' },
            ].map((row, i) => (
              <div key={i} className="py-4 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-4 sm:col-span-3 font-bold text-slate-500 uppercase tracking-wider text-[11px]">
                  {row.spec}
                </div>
                <div className="col-span-4 sm:col-span-4 font-semibold text-slate-800">
                  {row.a}
                </div>
                <div className="col-span-4 sm:col-span-5 font-semibold text-slate-800">
                  {row.b}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
