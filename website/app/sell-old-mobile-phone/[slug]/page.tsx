'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Smartphone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Truck,
  ArrowRight,
  ChevronRight,
  Star,
  Sparkles,
  HelpCircle,
  FileCheck,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SellPhoneDynamicPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const isModel = slug.startsWith('used-');
  const isBrand = slug.startsWith('sell-') || !isModel;

  // Extract clean title
  const cleanName = slug
    .replace('used-', '')
    .replace('sell-', '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Estimated valuations based on model/brand
  const getEstimatedPrice = () => {
    const s = slug.toLowerCase();
    if (s.includes('iphone-12')) return '₹24,850';
    if (s.includes('iphone-11')) return '₹18,400';
    if (s.includes('iphone-6')) return '₹4,500';
    if (s.includes('note-20')) return '₹19,200';
    if (s.includes('oneplus-9')) return '₹17,800';
    if (s.includes('redmi-note-4')) return '₹2,900';
    if (s.includes('apple')) return 'Up to ₹82,000';
    if (s.includes('samsung')) return 'Up to ₹65,000';
    if (s.includes('oneplus')) return 'Up to ₹38,000';
    if (s.includes('xiaomi') || s.includes('poco')) return 'Up to ₹26,000';
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
          <Link href="/sell" className="hover:text-[#13b59b]">
            Sell Old Phone
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">{cleanName}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13b59b]/10 text-[#13b59b] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant AI Valuation Engine</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Sell Old {cleanName} For Instant Cash
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
              Get the highest resale value for your used {cleanName} with free doorstep evaluation, instant UPI or bank transfer payout, and 100% certified data wipe.
            </p>

            {/* Valuation Offer Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-linear-to-r from-emerald-50 via-teal-50 to-[#f0faf8] border border-[#13b59b]/25 flex items-center justify-between max-w-lg">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Maximum Resale Quote
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#13b59b] mt-0.5">
                  {getEstimatedPrice()}
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
                Get Exact Value →
              </button>
            </div>

            {/* 3 USPs */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#13b59b] shrink-0" />
                <span>Free Doorstep Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Instant UPI Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Data Security</span>
              </div>
            </div>
          </div>

          {/* Right Device Visual / Form Preview */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-32 h-32 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center p-4">
              <Smartphone className="w-20 h-20 text-[#13b59b]" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-base">{cleanName}</div>
              <div className="text-xs text-slate-500 mt-0.5">Tested across 32 Hardware Checkpoints</div>
            </div>

            <div className="w-full space-y-2 text-left pt-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select Your Variant
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                {['64 GB', '128 GB', '256 GB'].map((ram, i) => (
                  <button
                    key={i}
                    type="button"
                    className="p-2.5 rounded-lg border border-slate-200 bg-white hover:border-[#13b59b] hover:text-[#13b59b] text-center transition cursor-pointer"
                  >
                    {ram}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Step Process */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
            How to Sell Your {cleanName} on Sellbar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#13b59b]/10 text-[#13b59b] font-black flex items-center justify-center text-base">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base">Check Price Online</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select your device condition, screen status, and accessories to receive an instant transparent price quote.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 font-black flex items-center justify-center text-base">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base">Schedule Free Pickup</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Book a convenient doorstep pickup slot at your home or workplace across 1,500+ Indian cities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 font-black flex items-center justify-center text-base">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base">Instant Cash Payout</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our trained agent inspects the device at your doorstep and transfers payment directly to your UPI/Bank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
