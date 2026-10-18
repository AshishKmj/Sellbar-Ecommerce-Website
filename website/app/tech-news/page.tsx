'use client';

import React from 'react';
import Link from 'next/link';
import { Newspaper, Sparkles, ArrowRight, TrendingUp, Clock } from 'lucide-react';

const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Flagship Smartphone Trends 2026: Generative AI on Device & Periscope Zoom',
    desc: 'The latest developments in next-gen mobile processors, satellite messaging, and foldable OLED display durability.',
    category: 'Industry',
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'Sellbar Expands Express 2-Hour Doorstep Valuation & Cash Pickup to 50 New Cities',
    desc: 'Customers can now get guaranteed buyback pricing within 2 hours with instant UPI payments and complimentary data sanitization.',
    category: 'Sellbar News',
    time: '5 hours ago',
  },
  {
    id: 3,
    title: 'Circular Tech Economy: India Records 45% Jump in Refurbished Device Adoption',
    desc: 'Cost-conscious consumers and eco-conscious businesses drive massive surge in demand for warranty-backed laptops and phones.',
    category: 'Sustainability',
    time: '1 day ago',
  },
];

export default function TechNewsPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fa] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <span>/</span>
          <span className="text-gray-800 font-semibold">Tech News</span>
        </div>

        <div className="bg-linear-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white mb-10 shadow-xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-[#2bbb9e] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
            <Newspaper className="w-3.5 h-3.5" /> Live Technology Feed
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Latest Tech &amp; Gadget News
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Stay ahead with breaking headlines on smartphones, laptops, electronics resale markets, and circular economy updates.
          </p>
        </div>

        <div className="space-y-4">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-xs mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-teal-50 text-[#13b59b] font-bold">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-3 h-3" /> {item.time}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-snug">
                  {item.title}
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 hover:bg-[#13b59b] hover:text-white text-xs font-bold text-gray-700 transition"
                >
                  Read Story <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
