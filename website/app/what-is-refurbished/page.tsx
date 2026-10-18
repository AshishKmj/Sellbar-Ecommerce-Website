'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Leaf,
  Cpu,
  Smartphone,
  Laptop,
  ArrowRight,
  Award,
  Layers,
  HelpCircle,
  Check,
  Battery,
  Camera,
  Wifi,
  ChevronRight,
  TrendingDown,
} from 'lucide-react';

const COMPARISON = [
  {
    feature: 'Internal Quality Inspection',
    refurbished: 'Rigorous 32-point automated & manual hardware testing',
    used: 'Zero testing; prone to hidden motherboard & moisture faults',
  },
  {
    feature: 'Warranty Protection',
    refurbished: 'Up to 12 Months comprehensive doorstep repair warranty',
    used: 'Zero warranty; seller vanishes after cash handover',
  },
  {
    feature: 'Replacement / Return Policy',
    refurbished: '7-Day hassle-free return or replacement guarantee',
    used: 'No returns under any circumstances',
  },
  {
    feature: 'Battery Health Assurance',
    refurbished: 'Certified 85% to 100% capacity with fast-charge audit',
    used: 'Often worn out (<70%) or swollen counterfeit battery',
  },
  {
    feature: 'Data Security & Sanitization',
    refurbished: 'NIST 800-88 certified factory wipe & clean IMEI verified',
    used: 'Risk of stolen, blocked, or blacklisted IMEI',
  },
  {
    feature: 'Packaging & Accessories',
    refurbished: 'Sanitized Sellbar eco-box with certified charging cable',
    used: 'Loose device, often without original cable or adapter',
  },
];

const INSPECTION_TABS = [
  {
    key: 'display',
    title: 'Screen & Touch',
    icon: Smartphone,
    points: [
      'Multi-touch sampling rate & gesture latency',
      'True Tone sensor calibration & color gamut accuracy',
      'Zero dead pixel & backlight bleeding test',
      'Original OLED / IPS panel authenticity verification',
    ],
  },
  {
    key: 'battery',
    title: 'Battery & Thermals',
    icon: Battery,
    points: [
      'Minimum 85%+ battery health retention guaranteed',
      'Full fast-charge cycle curve & thermal dissipation audit',
      'Zero battery bulge or micro-swelling inspection',
      'Over-voltage and short-circuit protection testing',
    ],
  },
  {
    key: 'camera',
    title: 'Optics & Sensors',
    icon: Camera,
    points: [
      'Primary, Ultra-Wide & Telephoto autofocus locking',
      'Optical Image Stabilization (OIS) gyroscope check',
      'Selfie camera portrait depth & flash synchronization',
      'Zero lens dust, scratches, or moisture inside elements',
    ],
  },
  {
    key: 'connectivity',
    title: 'Network & Security',
    icon: Wifi,
    points: [
      '5G / 4G dual SIM VoLTE high-speed data test',
      'Wi-Fi 6, Bluetooth 5.3 & NFC contactless payment check',
      'Biometric Face ID & ultrasonic fingerprint scanner',
      'Clean IMEI non-blacklisted status verification',
    ],
  },
];

export default function WhatIsRefurbishedPage() {
  const [activeTab, setActiveTab] = useState('display');

  const selectedTab =
    INSPECTION_TABS.find((t) => t.key === activeTab) || INSPECTION_TABS[0];

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/buy-refurbished" className="hover:text-[#13b59b]">
            Buy Refurbished
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">What is a Refurbished Mobile Phone?</span>
        </div>
      </div>

      {/* Hero Header with Cashify Gradient */}
      <section className="bg-linear-to-r from-[#0d8571] via-[#109f87] to-[#13b59b] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Complete Refurbished Buying Guide
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                What is a Refurbished Phone? <br className="hidden sm:inline" />
                <span className="text-amber-300">How Does It Beat Second-Hand?</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
                Demystifying certified renewed electronics: how they are restored, tested, graded, and why buying certified refurbished from Sellbar saves you up to 70% while guaranteeing 12 months of worry-free warranty!
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/buy-refurbished-gadgets"
                  className="bg-white text-[#0d826e] hover:bg-slate-100 font-bold px-6 py-2.5 rounded-xl shadow-md text-xs transition flex items-center gap-1.5"
                >
                  Shop Certified Refurbished <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/sell"
                  className="bg-[#095f50] text-white hover:bg-[#074b3f] font-bold px-6 py-2.5 rounded-xl border border-white/20 text-xs transition"
                >
                  Sell Your Old Phone
                </Link>
              </div>
            </div>

            {/* 3D Visual Hero */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 aspect-square bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="relative w-44 h-44 mb-2">
                  <Image
                    src="/services/buy-gadgets.webp"
                    alt="Refurbished Devices"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="200px"
                    priority
                  />
                </div>
                <div className="bg-white text-slate-900 rounded-2xl py-2 px-4 shadow-lg flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-black text-slate-900">32-Point Rigorous Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        {/* Core Definition Banner */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="inline-block text-xs font-bold text-[#13b59b] uppercase tracking-wider">
            Clear Definition
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            A Refurbished Phone is NOT Just a &quot;Used Phone&quot;
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            A <strong>refurbished phone</strong> is a pre-owned, open-box, or display device that has been comprehensively inspected, cleaned, repaired with OEM certified parts, and functionally tested to match factory performance standards. Unlike ordinary second-hand phones sold peer-to-peer on classified sites, every Sellbar refurbished gadget comes with an official <strong>12-Month Doorstep Warranty</strong>, a <strong>7-Day Replacement Guarantee</strong>, and authentic brand accessories in sanitized sealed packaging.
          </p>
        </section>

        {/* Refurbished vs Second-Hand Comparison Table */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
              Feature-by-Feature Comparison
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Sellbar Refurbished vs Ordinary Second-Hand
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Why smart consumers choose certified re-commerce over risky classified listings
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <th className="py-3 px-4 w-1/4">Key Dimension</th>
                  <th className="py-3 px-4 w-3/8 text-emerald-700 bg-emerald-50/50 rounded-t-xl">
                    <div className="flex items-center gap-1.5 font-black text-sm text-[#13b59b]">
                      <CheckCircle2 className="w-4 h-4" /> Sellbar Certified Refurbished
                    </div>
                  </th>
                  <th className="py-3 px-4 w-3/8 text-rose-700 bg-rose-50/50 rounded-t-xl">
                    <div className="flex items-center gap-1.5 font-black text-sm text-rose-600">
                      <XCircle className="w-4 h-4" /> Uncertified Second-Hand (P2P)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-3.5 px-4 bg-emerald-50/30 text-slate-800 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.refurbished}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 bg-rose-50/30 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.used}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive 32-Point Inspection Tabs */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
                Engineering Integrity
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Inside the 32-Point Diagnostic Test
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-400">
              Interactive Test Modules
            </span>
          </div>

          {/* Tab Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-slate-100 pb-4">
            {INSPECTION_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`p-3 rounded-2xl flex items-center gap-2.5 font-bold text-xs transition cursor-pointer ${
                    isActive
                      ? 'bg-[#13b59b] text-white shadow-sm'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Points */}
          <div className="bg-[#edf7f5] rounded-2xl p-6 border border-[#d2f3ed]">
            <h3 className="font-bold text-sm text-[#13b59b] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              Verified Inspection Parameters for {selectedTab.title}:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {selectedTab.points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eco Impact Banner */}
        <section className="bg-linear-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="max-w-2xl space-y-3 relative z-10">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
              Circular Economy Champion
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Every Refurbished Phone Prevents 60kg of CO₂
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Manufacturing a single new smartphone generates over 80kg of carbon emissions and consumes over 12,000 liters of fresh water in lithium and rare earth metal mining. By buying refurbished, you extend gadget lifespan and save the planet.
            </p>
            <div className="pt-2">
              <Link
                href="/buy-refurbished"
                className="bg-white text-emerald-900 font-bold text-xs py-2.5 px-5 rounded-xl inline-flex items-center gap-1.5 shadow-md hover:bg-slate-100 transition"
              >
                Explore Certified Models <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
