'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ChevronRight, ArrowRight, Smartphone, ThumbsUp } from 'lucide-react';

export default function SmartphoneReviewsPage() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-16 antialiased">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/find-new-phone" className="hover:text-[#13b59b]">Find New Phone</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Smartphone Reviews</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-black text-slate-900">In-Depth Smartphone Reviews</h1>
          <p className="text-sm text-slate-600">Unbiased, comprehensive ratings on cameras, gaming performance, display, and battery endurance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'iPhone 16 Pro Review', score: '9.2 / 10', verdict: 'Superb A18 Pro silicon & Camera Control with titanium durability.', pros: 'Incredible video, all-day battery' },
            { name: 'Samsung Galaxy S24 Ultra Review', score: '9.4 / 10', verdict: 'The pinnacle of Android productivity with flat titanium display & Galaxy AI.', pros: 'Best display, 7 years OS updates' },
            { name: 'OnePlus 12 5G Review', score: '9.0 / 10', verdict: 'Flagship killer performance with 100W SuperVOOC & Hasselblad optics.', pros: 'Insane charging speed, fluid OxygenOS' },
            { name: 'Vivo X100 Pro Review', score: '9.1 / 10', verdict: 'Industry-leading low light telephoto portrait photography.', pros: 'Zeiss APO lens, Zeiss T* coating' },
            { name: 'Google Pixel 9 Review', score: '8.8 / 10', verdict: 'Clean software experience with AI photo editing magic.', pros: 'Tensor G4, 7-year update guarantee' },
            { name: 'Xiaomi 14 Review', score: '8.9 / 10', verdict: 'Compact flagship powerhouse with Leica 75mm floating telephoto.', pros: 'Ergonomic size, Snapdragon 8 Gen 3' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase">Expert Score</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs">
                  <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" /> {item.score}
                </span>
              </div>
              <h3 className="font-bold text-base text-slate-900">{item.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.verdict}</p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{item.pros}</span>
                <Link href="/articles" className="font-bold text-[#13b59b] hover:underline">
                  Full Review →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
