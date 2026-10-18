'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronRight, MessageSquare, ThumbsUp, ArrowRight } from 'lucide-react';

export default function QuestionsCommunityPage() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-16 antialiased">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/find-new-phone" className="hover:text-[#13b59b]">Find New Phone</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Community Q&amp;A</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13b59b]/10 text-[#13b59b] text-xs font-bold uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Community Knowledge Hub</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900">Smartphone &amp; Gadget Q&amp;A</h1>
          <p className="text-sm text-slate-600">Got questions about battery health, eSIM, 5G bands, or resale valuations? Ask our verified tech experts.</p>
        </div>

        <div className="space-y-4 max-w-4xl">
          {[
            { q: 'Is it safe to buy a refurbished iPhone from Sellbar in 2026?', ans: 'Yes! All Sellbar refurbished iPhones pass 32 rigorous hardware tests, come with minimum 85%+ verified battery health, 12 months comprehensive warranty, and 7-day hassle-free replacement.', votes: 142 },
            { q: 'How is Sellbar doorstep pickup valuation calculated?', ans: 'Our AI valuation algorithm assesses the exact model, storage variant, physical cosmetic grading, touch response, and battery health against live secondary Indian marketplace demand.', votes: 98 },
            { q: 'Can I exchange my old broken Android phone for a refurbished MacBook?', ans: 'Yes! Sellbar supports cross-category buyback and upgrades. You can sell any old smartphone and use the cash or instant voucher towards purchasing a certified refurbished MacBook.', votes: 85 },
            { q: 'Does screen repair come with warranty?', ans: 'All doorstep mobile screen repairs done by Sellbar come backed with a 6-month warranty covering touch sensitivity and display glass defects.', votes: 76 },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-2.5">
              <h3 className="font-bold text-base text-slate-900">{item.q}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.ans}</p>
              <div className="flex items-center justify-between text-xs pt-2 text-slate-400 border-t border-slate-50">
                <span className="flex items-center gap-1.5 text-[#13b59b] font-semibold">
                  <ThumbsUp className="w-3.5 h-3.5" /> {item.votes} people found this helpful
                </span>
                <span className="text-slate-400">Answered by Sellbar Tech Team</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
