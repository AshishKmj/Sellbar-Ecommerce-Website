'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Laptop,
  ArrowRight,
  Zap,
  Cpu,
  HardDrive,
  Headphones,
  Check,
  Star,
  MapPin,
  Calendar,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

export default function LaptopRepairPage() {
  const [selectedBrand, setSelectedBrand] = useState('Apple');
  const [selectedIssue, setSelectedIssue] = useState('screen');
  const [selectedCity, setSelectedCity] = useState('Delhi NCR');
  const [isBooked, setIsBooked] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const brands = [
    { name: 'Apple', logo: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg' },
    { name: 'Dell', logo: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/d3b4fdda-2d57.jpg' },
    { name: 'HP/Compaq', logo: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/f78db5fb-857c.jpg' },
    { name: 'Lenovo', logo: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/4834825a-7f10.jpg' },
    { name: 'Asus', logo: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/bf25222a-a2a7.jpg' },
    { name: 'Acer', logo: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/2c350ab6-da4f.jpg' },
  ];

  const repairIssues = [
    {
      id: 'screen',
      title: 'Screen / Display Replacement',
      icon: Laptop,
      cost: 2999,
      originalCost: 4999,
      time: '30 Mins',
      desc: 'Fix cracked glass, black screen, vertical lines, flickering or dim backlight',
      popular: true,
    },
    {
      id: 'battery',
      title: 'Battery Replacement',
      icon: Zap,
      cost: 1999,
      originalCost: 3299,
      time: '25 Mins',
      desc: 'Fix fast battery drain, service battery warning, or swollen battery replacement',
      popular: true,
    },
    {
      id: 'keyboard',
      title: 'Keyboard & Trackpad Fix',
      icon: Wrench,
      cost: 1299,
      originalCost: 2199,
      time: '35 Mins',
      desc: 'Fix unresponsive keys, sticky keys from liquid spill, or erratic cursor drift',
      popular: false,
    },
    {
      id: 'ssd',
      title: 'High-Speed SSD & RAM Upgrade',
      icon: HardDrive,
      cost: 1499,
      originalCost: 2499,
      time: '20 Mins',
      desc: 'Upgrade from slow HDD to ultra-fast NVMe SSD and expand RAM to 16GB / 32GB',
      popular: true,
    },
    {
      id: 'motherboard',
      title: 'Motherboard & Chip-Level Repair',
      icon: Cpu,
      cost: 2499,
      originalCost: 4500,
      time: '48 Hours',
      desc: 'Expert micro-soldering, short-circuit diagnostics, power failure & liquid damage',
      popular: false,
    },
    {
      id: 'fan',
      title: 'Overheating & Thermal Servicing',
      icon: Clock,
      cost: 799,
      originalCost: 1499,
      time: '25 Mins',
      desc: 'Fix noisy fan buzzing, thermal throttling, deep heatsink cleaning & fresh paste',
      popular: false,
    },
  ];

  const activeIssue = repairIssues.find((i) => i.id === selectedIssue) || repairIssues[0];

  const faqs = [
    {
      q: 'Will my personal laptop data and files remain safe during repair?',
      a: '100% Yes! All repairs are performed live right in front of your eyes at your doorstep. You do not need to share passwords or PINs. Our technicians never access personal files.',
    },
    {
      q: 'What warranty is provided on replaced laptop spare parts?',
      a: 'Sellbar provides up to 6 months comprehensive warranty on all replaced spare parts (screens, batteries, keyboards, SSDs). If the replaced part exhibits any defect, our technician will replace it free of charge.',
    },
    {
      q: 'Can I visit an offline Sellbar store instead of doorstep repair?',
      a: 'Yes, you can walk into any of our 200+ Sellbar retail repair stores across India without prior appointment for on-the-spot hardware diagnostics and instant repair.',
    },
    {
      q: 'Do you use original OEM compatible spare parts?',
      a: 'Yes, all screens, batteries, and internal modules are sourced from tier-1 certified component manufacturers and meet strict OEM performance and safety standards.',
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-16 font-sans">
      {/* 1. HERO HEADER */}
      <div className="bg-linear-to-r from-slate-950 via-teal-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#13b59b]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#13b59b] transition">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold">Laptop Repair</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#13b59b]/20 border border-[#13b59b]/40 text-[#13b59b] text-xs font-bold px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Fast Doorstep Service • 6 Months Warranty
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Laptop Repair at <span className="text-[#13b59b]">Your Doorstep</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Certified technician arrives at your home or office with genuine spare parts. Repaired in front of you with up to 6 months warranty. Or visit your nearest Sellbar Store.
            </p>

            <div className="flex flex-wrap gap-4 pt-5 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> 30-Minute Doorstep Repair
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> 6 Months Spare Parts Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> 100% Data Security
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* 2. TOP BRANDS */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-[#13b59b]" /> Top Laptop Brands
              </h2>
              <p className="text-xs text-slate-500">Select your laptop brand to get an instant repair quote</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
            {brands.map((b) => {
              const isSelected = selectedBrand === b.name;
              return (
                <button
                  key={b.name}
                  onClick={() => setSelectedBrand(b.name)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-teal-50 border-[#13b59b] shadow-md ring-2 ring-[#13b59b]/20 scale-105'
                      : 'bg-white border-slate-200 hover:border-[#13b59b] hover:shadow-sm'
                  }`}
                >
                  <div className="relative w-12 h-12 mb-2 flex items-center justify-center">
                    <Image
                      src={b.logo}
                      alt={b.name}
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-900">{b.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 3. REPAIR SERVICES / ISSUES SELECTOR */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Services Available</h2>
              <p className="text-xs text-slate-500">Pick the problem you are experiencing with your {selectedBrand}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {repairIssues.map((issue) => {
              const Icon = issue.icon;
              const isSelected = selectedIssue === issue.id;
              return (
                <div
                  key={issue.id}
                  onClick={() => setSelectedIssue(issue.id)}
                  className={`bg-white rounded-2xl border p-5 flex flex-col justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#13b59b] shadow-xl ring-2 ring-[#13b59b]/20 -translate-y-1'
                      : 'border-slate-200 hover:border-slate-400 hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#13b59b] flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      {issue.popular && (
                        <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-700">
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 mb-1">{issue.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{issue.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-base font-black text-slate-900">
                        From ₹{issue.cost.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[10px] text-slate-400 line-through">
                        ₹{issue.originalCost.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#13b59b] flex items-center gap-1">
                      {issue.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. INSTANT BOOKING STRIP */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#13b59b]/20 text-[#13b59b] text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Live Technician Booking
            </div>
            <h3 className="text-2xl font-black">
              {selectedBrand} {activeIssue.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Estimated repair time: {activeIssue.time} • 6 Months doorstep warranty included • Doorstep service across {selectedCity}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-baseline sm:items-center gap-4 shrink-0">
            <div>
              <div className="text-xs text-slate-400 font-medium">Estimated Cost</div>
              <div className="text-3xl font-black text-white">
                ₹{activeIssue.cost.toLocaleString('en-IN')}
              </div>
              <div className="text-[10px] text-emerald-400 font-bold">
                (Save ₹{activeIssue.originalCost - activeIssue.cost})
              </div>
            </div>

            <button
              onClick={() => setIsBooked(true)}
              className="bg-[#13b59b] hover:bg-[#0f957f] text-white font-black text-sm px-6 py-3.5 rounded-2xl shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              Book Doorstep Repair <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* BOOKING MODAL */}
        {isBooked && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 text-slate-900 shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-3" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-black">Doorstep Repair Scheduled!</h3>
                <p className="text-xs text-slate-500 mt-1">
                  A certified Sellbar technician will arrive at your address with genuine OEM parts for your {selectedBrand} {activeIssue.title}.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl space-y-2 text-xs border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold">{activeIssue.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-bold">{activeIssue.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Warranty:</span>
                  <span className="font-bold text-emerald-600">6 Months Doorstep</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-sm">
                  <span>Pay after repair:</span>
                  <span className="text-[#13b59b]">₹{activeIssue.cost.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => setIsBooked(false)}
                className="w-full bg-[#13b59b] hover:bg-[#0f957f] text-white font-bold text-xs py-3 rounded-xl transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

        {/* 5. HOW IT WORKS */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
              3 Simple Steps
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">How It Works</h2>
            <p className="text-xs text-slate-500 mt-1">
              Convenient, transparent and reliable laptop servicing right at your home
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Check Price',
                desc: 'Select your laptop brand, model and problem to receive an instant transparent price quote.',
              },
              {
                step: '02',
                title: 'Book Doorstep Repair',
                desc: 'Pick your preferred date, time slot, and home or office address for technician visit.',
              },
              {
                step: '03',
                title: 'OR Visit Nearest Store',
                desc: 'Walk into any of our 200+ Sellbar retail repair stores across India for immediate on-spot servicing.',
              },
            ].map((st, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <span className="text-2xl font-black text-[#13b59b] block mb-2">{st.step}</span>
                <h4 className="font-bold text-sm text-slate-900">{st.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. FAQS */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
              Have Questions?
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mt-1">
              Common questions about doorstep laptop repairs and warranty terms
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#13b59b]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
