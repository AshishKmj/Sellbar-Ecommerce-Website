'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, ChevronRight, Smartphone, ArrowRight } from 'lucide-react';

export default function NewLaunchesPage() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-16 antialiased">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/find-new-phone" className="hover:text-[#13b59b]">Find New Phone</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Latest Mobile Launches</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13b59b]/10 text-[#13b59b] text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Smartphone Launches</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900">Latest Smartphone Launches in India</h1>
          <p className="text-sm text-slate-600">Discover recently launched smartphones with prices, launch offers, and full hardware specs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Apple iPhone 16 Pro Max', price: '₹1,44,900', date: 'Launched Sept 2026', specs: 'A18 Pro • Camera Control • 48MP Fusion' },
            { name: 'Samsung Galaxy S24 Ultra', price: '₹1,29,999', date: 'Launched Jan 2026', specs: 'Snapdragon 8 Gen 3 • 200MP • Galaxy AI' },
            { name: 'OnePlus 12 5G', price: '₹64,999', date: 'Launched Feb 2026', specs: 'Snapdragon 8 Gen 3 • 50MP Sony LYT-808 • 100W' },
            { name: 'Google Pixel 9 Pro', price: '₹1,09,999', date: 'Launched Aug 2026', specs: 'Tensor G4 • Gemini Nano • 50MP Triple' },
            { name: 'Vivo X100 Pro', price: '₹89,999', date: 'Launched Jan 2026', specs: 'Dimensity 9300 • Zeiss APO Telephoto' },
            { name: 'Xiaomi 14 Ultra', price: '₹99,999', date: 'Launched Mar 2026', specs: 'Leica Quad Camera • 1-inch LYT-900' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#13b59b]" /> {item.date}</span>
                <span className="font-bold text-[#13b59b] text-sm">{item.price}</span>
              </div>
              <h3 className="font-bold text-base text-slate-900">{item.name}</h3>
              <p className="text-xs text-slate-500">{item.specs}</p>
              <Link href="/compare-mobile-phones" className="inline-flex items-center gap-1 text-xs font-bold text-[#13b59b] hover:underline pt-2">
                Compare Specs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
