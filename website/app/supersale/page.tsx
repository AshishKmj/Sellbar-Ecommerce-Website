'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Boxes,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  Truck,
  Headphones,
  CheckCircle2,
  Download,
  Smartphone,
  Laptop,
  ArrowRight,
  FileText,
  Building,
} from 'lucide-react';

export default function SupersalePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    gstin: '',
    city: '',
    monthlyVolume: '₹1 Lakh - ₹5 Lakhs',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-gray-800 antialiased">
      {/* B2B Hero Banner */}
      <section className="bg-linear-to-br from-[#0a2540] via-[#113255] to-[#13b59b] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase border border-white/20">
              <Boxes className="w-3.5 h-3.5 text-[#13b59b]" />
              Sellbar SuperSale B2B Wholesale
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Transform Your Retail Business with just ₹5,000
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Join India’s most transparent B2B re-commerce platform. Source graded, certified refurbished smartphones and MacBooks with verified warranties and up to 25% margins.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2 text-center">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                <div className="text-2xl sm:text-3xl font-black text-[#13b59b]">60+</div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">Top Brands</div>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">1,200+</div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">Device Models</div>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">19,000+</div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">Pincodes</div>
              </div>
            </div>
          </div>

          {/* Wholesale Registration Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 text-gray-800 shadow-2xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              B2B Partner Registration
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Instant access to wholesale catalog prices, bulk MOQs, and dedicated account managers.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">Application Approved for Verification</h4>
                <p className="text-xs text-emerald-700">
                  Welcome aboard, <strong>{form.businessName}</strong>. Our B2B relationship manager will verify your GSTIN/Udyog Aadhaar and unlock wholesale price tiers.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Business / Firm Name *</label>
                  <input
                    type="text"
                    required
                    value={form.businessName}
                    onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                    placeholder="e.g. Apex Telecom &amp; Gadgets"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={form.contactPerson}
                      onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="9876543210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">GSTIN or Udyog Aadhaar</label>
                    <input
                      type="text"
                      value={form.gstin}
                      onChange={(e) => setForm({ ...form, gstin: e.target.value })}
                      placeholder="07AAAAA0000A1Z5"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Expected Monthly Volume</label>
                    <select
                      value={form.monthlyVolume}
                      onChange={(e) => setForm({ ...form, monthlyVolume: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b] bg-white"
                    >
                      <option>₹5,000 - ₹50,000</option>
                      <option>₹50,000 - ₹1 Lakh</option>
                      <option>₹1 Lakh - ₹5 Lakhs</option>
                      <option>₹5 Lakhs - ₹25 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#13b59b] hover:bg-[#0ea38a] text-white font-bold rounded-xl shadow-md transition text-xs mt-2"
                >
                  Create B2B SuperSale Account
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6 Key SuperSale Advantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#13b59b] tracking-wider uppercase mb-1">
            B2B WHOLESALE BENEFITS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Why Retailers Source From SuperSale
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            The largest inventory of graded, tested pre-owned gadgets at true wholesale price points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">32-Point Certified Grading</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every unit is bench-tested by engineers for battery health, OEM display integrity, sensors, and IMEI verification.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold">
              <Boxes className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Multi-Grade Variety</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Choose from Open-Box, Like-New, Superb, and Good grades with complete clarity on cosmetic condition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">High Profit Margins</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Earn 15% to 25% gross margins on fast-moving iPhones, Samsung Galaxy flagships, and MacBooks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Flexible Payment &amp; Credit</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Support for UPI, NetBanking, Credit Cards, Cash on Delivery (COD), and working capital credit lines for top partners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Insured Pan-India Express Delivery</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Tamper-evident, fully insured doorstep delivery to your shop within 24 to 48 hours across 19,000+ pin codes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Dedicated Account Manager</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Personalized support for order reservations, reverse pickup returns, and seasonal wholesale deal allocations.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Step Onboarding */}
      <section className="bg-white border-y border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              How to Start Sourcing with SuperSale
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Three simple steps to transform your electronics store with certified pre-owned gadgets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#fbfcfd] border border-gray-200 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#13b59b] text-white font-bold flex items-center justify-center text-xs">
                1
              </div>
              <h4 className="text-sm font-bold text-gray-900">Submit Business Proof</h4>
              <p className="text-xs text-gray-600">
                Upload your GST Certificate or Udyog Aadhaar with shop address for instant KYC activation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfcfd] border border-gray-200 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#13b59b] text-white font-bold flex items-center justify-center text-xs">
                2
              </div>
              <h4 className="text-sm font-bold text-gray-900">Pick Lots &amp; Models</h4>
              <p className="text-xs text-gray-600">
                Browse real-time inventory of 1,200+ models. Order individual units or mixed grade lots starting from ₹5,000.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfcfd] border border-gray-200 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#13b59b] text-white font-bold flex items-center justify-center text-xs">
                3
              </div>
              <h4 className="text-sm font-bold text-gray-900">Receive &amp; Earn</h4>
              <p className="text-xs text-gray-600">
                Get express delivery with GST tax invoices and 7-day hassle-free replacement coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
