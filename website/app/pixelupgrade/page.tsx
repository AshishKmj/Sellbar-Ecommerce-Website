'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ArrowRight,
  ChevronRight,
  CreditCard,
  Building2,
  Calendar,
  Smartphone,
  Check,
  HelpCircle,
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const PIXEL_MODELS = [
  {
    id: 'pixel-11',
    name: 'Google Pixel 11',
    mrp: 89999,
    effectiveWithUpgrade: 31000,
    monthlyEmi: 3750,
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    specs: ['Tensor G5 Processor', '6.3" Actua Display 120Hz', '50MP AI Dual Camera'],
  },
  {
    id: 'pixel-11-pro',
    name: 'Google Pixel 11 Pro',
    mrp: 119999,
    effectiveWithUpgrade: 49000,
    monthlyEmi: 5000,
    tag: 'Flagship',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    specs: ['Super Actua Display', 'Pro Triple Camera with 5x Telephoto', '16GB RAM + Tensor G5'],
  },
  {
    id: 'pixel-11-pro-xl',
    name: 'Google Pixel 11 Pro XL',
    mrp: 134999,
    effectiveWithUpgrade: 58000,
    monthlyEmi: 5625,
    tag: 'Ultimate',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80',
    specs: ['6.8" Immersive OLED', '5060 mAh Battery + 37W Fast Charge', 'Satellite SOS'],
  },
  {
    id: 'pixel-11-pro-fold',
    name: 'Google Pixel 11 Pro Fold',
    mrp: 186999,
    effectiveWithUpgrade: 82000,
    monthlyEmi: 7792,
    tag: 'Foldable',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    specs: ['8.0" Super Actua Flex Display', 'Ultra-thin Aerospace Aluminum', 'Multitasking Split Screen'],
  },
  {
    id: 'pixel-10a',
    name: 'Google Pixel 10a',
    mrp: 55999,
    effectiveWithUpgrade: 22000,
    monthlyEmi: 2333,
    tag: 'Value King',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    specs: ['Tensor G4 Chip', '64MP Main + Ultra-Wide', 'All-Day Adaptive Battery'],
  },
];

const BONUS_TIERS = [
  { device: 'All Google Pixel 11 series', oldVal: 'Above ₹20,000', bonus: '+ ₹9,000' },
  { device: 'All Google Pixel 11 series', oldVal: '₹15,000 - ₹20,000', bonus: '+ ₹7,000' },
  { device: 'All Google Pixel 11 series', oldVal: '₹10,000 - ₹15,000', bonus: '+ ₹4,000' },
  { device: 'All Google Pixel 11 series', oldVal: '₹3,000 - ₹10,000', bonus: '+ ₹3,000' },
  { device: 'Google Pixel 10a', oldVal: 'Above ₹3,000', bonus: '+ ₹1,000' },
];

export default function PixelUpgradePage() {
  const [selectedModel, setSelectedModel] = useState<string>('pixel-11');
  const [selectedCity, setSelectedCity] = useState('Delhi NCR');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeDevice = PIXEL_MODELS.find((m) => m.id === selectedModel) || PIXEL_MODELS[0];

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-gray-800 font-sans pb-20">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#13b59b] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium">Google Pixel Upgrade Program</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-linear-to-r from-gray-950 via-slate-900 to-teal-950 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#13b59b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#13b59b]/20 border border-[#13b59b]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#13b59b] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Official Sellbar × Google Assured Buyback</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Google Pixel Upgrade Program with Assured Buyback
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
              Get the latest Google Pixel flagship every single year. Seamlessly upgrade with <strong>62.5% assured buyback</strong> after 9 monthly EMI payments and get up to <strong>₹9,000 extra exchange bonus</strong>.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
                <span>62.5% Assured Buyback</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
                <span>Up to ₹9,000 Extra Exchange</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
                <span>Zero Downpayment 24M EMI</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#eligible-devices"
                className="bg-[#13b59b] hover:bg-[#0fa088] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <span>See Eligible Devices</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/20 transition"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Quick Highlight Card */}
          <div className="lg:col-span-5 bg-white text-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-100">
            <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-[#13b59b] px-2.5 py-1 rounded-md">
              Exclusive Buyback Guarantee
            </span>
            <div className="text-xl font-black mt-3 mb-1">
              Own a Pixel 10? Upgrade to Pixel 11
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Trade in your phone, claim ₹9,000 exchange bonus, and switch to Google Pixel 11 at just:
            </p>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-black text-[#13b59b]">₹31,000</span>
              <span className="text-base text-gray-400 line-through">₹89,999</span>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">-65% Off</span>
            </div>

            <div className="space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-3">
              <div className="flex items-center justify-between">
                <span>Monthly No Cost EMI:</span>
                <strong className="text-gray-900">₹3,750 / mo (24 Mo)</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Eligible Upgrade Window:</span>
                <strong className="text-emerald-600">Between 9th & 15th Month</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Accidental Damage Cover:</span>
                <strong className="text-gray-900">Included at Zero Cost</strong>
              </div>
            </div>

            <Link
              href="/sell-old-mobile-phone"
              className="mt-5 w-full block text-center py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs rounded-xl transition shadow-md"
            >
              Enroll into Pixel Upgrade &rarr;
            </Link>
          </div>

        </div>
      </div>

      {/* How To Enter Section */}
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            How to Enter the Google Pixel Upgrade Program
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            4 simple steps to get the newest Google Pixel every year
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Select Your Google Pixel',
              desc: 'Choose between Google Pixel 11, Pixel 11 Pro, XL or Foldable.',
            },
            {
              step: '02',
              title: 'Visit Nearest Partner Store',
              desc: 'Walk into any Sellbar Experience Center or authorized Google Retailer.',
            },
            {
              step: '03',
              title: 'Opt for 24M No-Cost EMI',
              desc: 'Swipe with HDFC, ICICI, SBI or Bajaj Finserv with zero interest cost.',
            },
            {
              step: '04',
              title: 'Upgrade after 9 Payments',
              desc: 'Trade in your device after 9 EMIs and switch to the next Pixel with 62.5% value.',
            },
          ].map((s) => (
            <div
              key={s.step}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:border-[#13b59b] hover:shadow-md transition relative"
            >
              <div className="text-3xl font-black text-[#13b59b]/25 mb-3">{s.step}</div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">{s.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eligible Devices Grid */}
      <div id="eligible-devices" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Eligible Pixel Models
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">Low monthly installments with guaranteed assured buyback</p>
          </div>
          <span className="text-xs font-bold text-[#13b59b] bg-teal-50 px-3 py-1 rounded-full">
            Starting from ₹2,333/mo
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PIXEL_MODELS.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#13b59b] hover:shadow-xl transition p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-[#13b59b] px-2 py-0.5 rounded">
                    {p.tag}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">24M No Cost EMI</span>
                </div>

                <div className="relative w-full h-44 mb-4">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>

                <h3 className="text-lg font-black text-gray-900">{p.name}</h3>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-gray-900">
                    ₹{p.mrp.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-emerald-600 font-bold">
                    Effective: ₹{p.effectiveWithUpgrade.toLocaleString('en-IN')}*
                  </span>
                </div>

                <div className="mt-1 text-xs text-gray-600 flex items-center gap-1 font-semibold">
                  <CreditCard className="w-3.5 h-3.5 text-[#13b59b]" />
                  <span>₹{p.monthlyEmi.toLocaleString('en-IN')} / month</span>
                </div>

                <div className="mt-4 space-y-1.5 border-t border-gray-100 pt-3">
                  {p.specs.map((spec, i) => (
                    <div key={i} className="text-xs text-gray-500 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#13b59b] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100">
                <Link
                  href="/offline-stores"
                  className="w-full py-2.5 bg-[#13b59b] hover:bg-[#0fa088] text-white font-bold text-xs rounded-xl transition text-center block shadow-xs"
                >
                  Locate Store to Upgrade &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exchange Bonus Tiers Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
          <div className="max-w-2xl mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              Get Up to ₹9,000 Additional Exchange Bonus
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Extra credit added on top of your old device resale value when enrolling in the Pixel Upgrade Program.
            </p>
          </div>

          <div className="overflow-hidden border border-gray-200 rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Target Device</th>
                  <th className="py-3 px-4 sm:px-6">Old Device Resale Value</th>
                  <th className="py-3 px-4 sm:px-6 text-emerald-600">Extra Exchange Bonus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {BONUS_TIERS.map((tier, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-gray-900">{tier.device}</td>
                    <td className="py-3.5 px-4 sm:px-6 text-gray-600">{tier.oldVal}</td>
                    <td className="py-3.5 px-4 sm:px-6 font-black text-[#13b59b]">{tier.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Terms & Conditions Accordion */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-4">
            Program Terms & Eligibility
          </h2>

          <div className="space-y-3">
            {[
              {
                q: 'What is the Google Pixel Upgrade Program?',
                a: 'The program allows customers to purchase an eligible Google Pixel phone on a 24-month monthly installment plan with select banking partners, with an assured option to upgrade to the latest Pixel after completing at least nine (9) monthly EMI payments.',
              },
              {
                q: 'What is the Assured Buyback Value?',
                a: 'Members receive up to 62.5% of the original invoice value as guaranteed buyback when upgrading between the 9th and 15th month, regardless of normal cosmetic wear.',
              },
              {
                q: 'Is accidental damage protection included?',
                a: 'Yes, your device is protected against drops and liquid spills under Sellbar Care during the upgrade evaluation window at zero additional cost.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-gray-900 bg-white hover:bg-gray-50 transition cursor-pointer"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#13b59b]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed bg-[#fbfcfc] border-t border-gray-100">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
