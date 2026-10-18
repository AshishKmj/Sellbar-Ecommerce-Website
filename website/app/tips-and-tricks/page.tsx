'use client';

import React from 'react';
import Link from 'next/link';
import { Lightbulb, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const TIPS = [
  {
    id: 1,
    title: '10 Things to Check Before Selling Your Used Smartphone',
    desc: 'Back up data, sign out of iCloud/Google account, test cameras and battery health to get the maximum quote on Sellbar.',
    category: 'Guides',
    readTime: '4 min read',
    date: 'Oct 2026',
  },
  {
    id: 2,
    title: 'How to Calibrate and Maximize Battery Life on iPhone & Android',
    desc: 'Keep battery charging between 20% and 80%, turn on optimized battery charging, and disable background sync for rogue apps.',
    category: 'Optimization',
    readTime: '5 min read',
    date: 'Oct 2026',
  },
  {
    id: 3,
    title: 'Refurbished vs Brand New: How Much Money Can You Actually Save?',
    desc: 'Certified refurbished devices pass 32 quality checkpoints and come with 12 months comprehensive warranty for up to 60% less.',
    category: 'Smart Shopping',
    readTime: '6 min read',
    date: 'Oct 2026',
  },
  {
    id: 4,
    title: 'How to Safely Wipe All Data Before Handing Over Your Laptop',
    desc: 'Learn BitLocker disk wiping, Apple Secure Erase for MacBooks, and safe factory reset procedures.',
    category: 'Security',
    readTime: '3 min read',
    date: 'Oct 2026',
  },
];

export default function TipsAndTricksPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fa] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <span>/</span>
          <span className="text-gray-800 font-semibold">Tips and Tricks</span>
        </div>

        <div className="bg-linear-to-r from-teal-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white mb-10 shadow-xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-[#2bbb9e] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
            <Lightbulb className="w-3.5 h-3.5" /> Sellbar Tech Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Tips &amp; Tricks for Gadget Lovers
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Expert how-to guides, battery preservation secrets, gadget resale advice, and device buying tips curated by Sellbar engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TIPS.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3 font-semibold">
                  <span className="px-2.5 py-1 rounded-full bg-teal-50 text-[#13b59b] font-bold">
                    {tip.category}
                  </span>
                  <span>{tip.readTime} • {tip.date}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                  {tip.title}
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {tip.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#13b59b] hover:underline"
                >
                  Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
