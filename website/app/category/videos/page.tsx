'use client';

import React from 'react';
import Link from 'next/link';
import { Play, ChevronRight, Sparkles } from 'lucide-react';

export default function CategoryVideosPage() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-16 antialiased">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/find-new-phone" className="hover:text-[#13b59b]">Find New Phone</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Tech &amp; Gadget Videos</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-black text-slate-900">Sellbar Tech Videos &amp; Unboxings</h1>
          <p className="text-sm text-slate-600">Watch hands-on reviews, teardowns, camera comparisons, and refurbishment stress tests.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'iPhone 16 Pro vs S24 Ultra Camera Shootout', duration: '14:20', views: '240K views' },
            { title: 'Inside Sellbar 32-Point Diagnostic Test Lab', duration: '08:45', views: '180K views' },
            { title: 'Top 5 Refurbished Laptops Under ₹30,000 in 2026', duration: '11:15', views: '310K views' },
            { title: 'Is Refurbished Worth It? Buying Guide Explained', duration: '09:30', views: '520K views' },
            { title: 'OnePlus 12 Real-World Battery Drain Test', duration: '16:05', views: '145K views' },
            { title: 'Doorstep Mobile Screen Replacement in 30 Mins Live', duration: '07:50', views: '95K views' },
          ].map((v, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs group cursor-pointer">
              <div className="aspect-video bg-slate-900 flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-full bg-[#13b59b] text-white flex items-center justify-center group-hover:scale-110 transition shadow-lg">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {v.duration}
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#13b59b] transition line-clamp-2">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-400">{v.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
