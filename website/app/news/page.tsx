'use client';

import React from 'react';
import Link from 'next/link';
import { Newspaper, ChevronRight, ArrowRight, Calendar } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-16 antialiased">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/find-new-phone" className="hover:text-[#13b59b]">Find New Phone</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Tech News</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13b59b]/10 text-[#13b59b] text-xs font-bold uppercase">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Latest Industry Updates</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900">Mobile &amp; Technology News</h1>
          <p className="text-sm text-slate-600">Daily breaking tech news, firmware updates, processor releases, and smartphone leak rumors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Qualcomm Unveils Snapdragon 8 Gen 4 with Custom Oryon CPU Cores', date: 'October 17, 2026', tag: 'Processors' },
            { title: 'Apple iOS 18.2 Beta Introduces Visual Intelligence for iPhone 16 Models', date: 'October 16, 2026', tag: 'Apple' },
            { title: 'India 5G Smartphone Shipments Cross 100 Million Mark in 2026', date: 'October 15, 2026', tag: 'Market Report' },
            { title: 'Samsung One UI 7 Beta Rollout Schedule Leaked Ahead of Galaxy S25 Launch', date: 'October 14, 2026', tag: 'Samsung' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold">{item.tag}</span>
                <span className="text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 hover:text-[#13b59b] transition cursor-pointer">
                {item.title}
              </h3>
              <Link href="/articles" className="inline-flex items-center gap-1 text-xs font-bold text-[#13b59b] hover:underline">
                Read Full Story <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
