'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  TrendingUp,
  Boxes,
  Cpu,
  BadgePercent,
  CheckCircle2,
  ArrowRight,
  Send,
  Building2,
  Phone,
  Mail,
  MapPin,
  Star,
  Quote,
  Store,
  ChevronRight,
  Award,
  Zap,
} from 'lucide-react';

export default function PartnerWithUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    businessType: 'Mobile Retail Store',
    experienceYears: '1-3 years',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Partner With Us</span>
        </div>
      </div>

      {/* Hero Header with Cashify Split Teal Theme */}
      <section className="bg-linear-to-r from-[#0d8571] via-[#109f87] to-[#13b59b] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
                <Store className="w-3.5 h-3.5 text-amber-300" />
                Sellbar Business Partner Network
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Grow Your Retail Profits by 10X, <br className="hidden sm:inline" />
                <span className="text-amber-300">Zero Inventory Risk</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
                Join our family of over 800+ electronics retail partners across India. Get verified customer buyback leads in your pin codes, access high-margin certified pre-owned stock, and boost customer footfalls effortlessly.
              </p>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-amber-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">Daily Leads</p>
                    <p className="text-xs font-bold text-white">3,500+ Verified</p>
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-emerald-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">Active Partners</p>
                    <p className="text-xs font-bold text-white">800+ Stores</p>
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <TrendingUp className="w-5 h-5 text-cyan-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">Settlements</p>
                    <p className="text-xs font-bold text-white">Instant UPI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Visual Hero */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 aspect-square bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="relative w-44 h-44 mb-2">
                  <Image
                    src="/services/nearby-stores.webp"
                    alt="Nearby Retail Partner Stores"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="200px"
                    priority
                  />
                </div>
                <div className="bg-white text-slate-900 rounded-2xl py-2 px-4 shadow-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-black text-slate-900">Official Franchise &amp; Partner Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        {/* Onboarding Form & Partner Advantage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-black text-slate-900 mb-1">
              Apply to Become a Partner
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our regional onboarding manager will contact you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#edf7f5] border border-[#d2f3ed] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Application Received!</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our partner representative for <strong>{formData.city}</strong> will call your WhatsApp at <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-[#13b59b] hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Store / Business Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Electronics"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Mobile (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">City &amp; State *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Jaipur, Rajasthan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Business Type</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b] bg-white cursor-pointer"
                    >
                      <option>Mobile Retail Store</option>
                      <option>Repair Service Center</option>
                      <option>Wholesale Device Trader</option>
                      <option>Franchisee Investor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Experience</label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b] bg-white cursor-pointer"
                    >
                      <option>Less than 1 year</option>
                      <option>1-3 years</option>
                      <option>3-5 years</option>
                      <option>5+ years</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#13b59b] hover:bg-[#0f957f] text-white font-bold rounded-xl shadow-md transition text-xs mt-2 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Submit Partner Application <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Advantages Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-black text-slate-900">
              Why 800+ Retailers Trust Sellbar
            </h3>
            <p className="text-xs text-slate-500">
              Accelerate your retail revenue without costly advertising or inventory depreciation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#edf7f5] text-[#13b59b] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Localized Customer Leads</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Receive pre-qualified buyback leads strictly inside your chosen pin codes. Never chase cold customers.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Boxes className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Tested Stock Access</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Source refurbished iPhones, Galaxy flagships, and MacBooks with verified 32-point inspection certificates.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Zero Negotiation Stress</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our algorithmic pricing engine handles quotes and grading automatically. No customer bargaining friction.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <BadgePercent className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Healthy Margins</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Lowest transaction fees in the Indian re-commerce market with instant bank settlements within minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps How Fulfillment Works */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#13b59b] tracking-wider uppercase">
              Operational Flow
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">
              How Partner Fulfillment Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#edf7f5] border border-[#d2f3ed] space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#13b59b] text-white font-bold flex items-center justify-center text-xs">
                1
              </div>
              <h4 className="text-sm font-bold text-slate-900">Customer Requests Buyback</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customer places a device buyback order in your operational zip codes on Sellbar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#edf7f5] border border-[#d2f3ed] space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#13b59b] text-white font-bold flex items-center justify-center text-xs">
                2
              </div>
              <h4 className="text-sm font-bold text-slate-900">Assigned to Partner App</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lead notification with diagnostic details and price quote arrives on your merchant dashboard.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#edf7f5] border border-[#d2f3ed] space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#13b59b] text-white font-bold flex items-center justify-center text-xs">
                3
              </div>
              <h4 className="text-sm font-bold text-slate-900">Doorstep Verification</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your executive performs the quick 2-minute diagnostic check and collects the handset.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#edf7f5] border border-[#d2f3ed] space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#13b59b] text-white font-bold flex items-center justify-center text-xs">
                4
              </div>
              <h4 className="text-sm font-bold text-slate-900">Instant UPI &amp; Resale</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customer is paid on the spot. The device is yours to refurbish, resell, and earn high profit.
              </p>
            </div>
          </div>
        </section>

        {/* Real Testimonials */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900">
              Hear From Our Retail Partners
            </h2>
            <p className="text-xs text-slate-500 mt-1">Real merchants sharing their growth journey with Sellbar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <Quote className="w-6 h-6 text-[#13b59b]" />
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &quot;In the beginning, I got 100 leads per month. Now, this has increased to 500-600 leads every month. If you want to scale your retail store, partnering with Sellbar is the best decision.&quot;
              </p>
              <div className="border-t border-slate-100 pt-3">
                <div className="text-xs font-bold text-slate-900">Sayed Saif Ali</div>
                <div className="text-[11px] text-slate-400">Retail Partner, Bengaluru (Since 2021)</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <Quote className="w-6 h-6 text-[#13b59b]" />
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &quot;My business has grown multitudes. I started with just 2 executives to help me, but now we have 9 executives handling doorstep pickups and sales daily.&quot;
              </p>
              <div className="border-t border-slate-100 pt-3">
                <div className="text-xs font-bold text-slate-900">Manish Verma</div>
                <div className="text-[11px] text-slate-400">Store Partner, Delhi NCR (Since 2022)</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <Quote className="w-6 h-6 text-[#13b59b]" />
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &quot;Thanks to automated online payments and transparent algorithmic quotes, customer negotiations are completely eliminated.&quot;
              </p>
              <div className="border-t border-slate-100 pt-3">
                <div className="text-xs font-bold text-slate-900">Kiran Kumar Reddy</div>
                <div className="text-[11px] text-slate-400">Partner, Hyderabad (Since 2023)</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
