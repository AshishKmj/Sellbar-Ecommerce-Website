'use client';

import React, { use } from 'react';
import Link from 'next/link';
import {
  Laptop,
  ShieldCheck,
  Zap,
  Truck,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SellLaptopDynamicPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const cleanName = slug
    .replace('used-', '')
    .replace('sell-', '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const getPrice = () => {
    const s = slug.toLowerCase();
    if (s.includes('macbook') || s.includes('apple')) return 'Up to ₹88,000';
    if (s.includes('pavilion')) return 'Up to ₹28,500';
    if (s.includes('vostro')) return 'Up to ₹26,000';
    if (s.includes('inspiron')) return 'Up to ₹24,000';
    if (s.includes('dell')) return 'Up to ₹45,000';
    if (s.includes('lenovo')) return 'Up to ₹42,000';
    if (s.includes('hp')) return 'Up to ₹40,000';
    return 'Up to ₹35,000';
  };

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-16 antialiased">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-[#13b59b]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/sell/laptops" className="hover:text-[#13b59b]">
            Sell Old Laptop
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">{cleanName}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13b59b]/10 text-[#13b59b] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Laptop Valuation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Sell Old {cleanName} For Best Price
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
              Get an instant quote for your pre-owned {cleanName} with free home pickup, verified data shredding, and fast instant cash payment.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-linear-to-r from-emerald-50 via-teal-50 to-[#f0faf8] border border-[#13b59b]/25 flex items-center justify-between max-w-lg">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Estimated Value
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#13b59b] mt-0.5">
                  {getPrice()}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new Event('open-login-modal'));
                  }
                }}
                className="bg-[#2bbb9e] hover:bg-[#23a58c] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition active:scale-95 cursor-pointer"
              >
                Calculate Price →
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#13b59b] shrink-0" />
                <span>Free Doorstep Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Instant Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Military-Grade Wipe</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-32 h-32 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center p-4">
              <Laptop className="w-20 h-20 text-[#13b59b]" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-base">{cleanName}</div>
              <div className="text-xs text-slate-500 mt-0.5">Corporate &amp; Personal Laptops Supported</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
