'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building,
  CheckCircle2,
  Headphones,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Sparkles,
  HelpCircle,
  FileText,
  Store,
} from 'lucide-react';

export default function ContactPage() {
  const [topic, setTopic] = useState('BUYBACK');
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    orderId: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const FAQS = [
    {
      q: 'How fast does the customer support team respond?',
      a: 'Our live chat and WhatsApp response time is under 15 minutes during operating hours (9:00 AM to 8:00 PM IST, Monday through Sunday). Email tickets submitted to support@sellbar.in are answered within 2 hours.',
    },
    {
      q: 'Where can I track my device buyback or refurbished product order?',
      a: 'You can track real-time status under the "Track Order" link in the top menu or by entering your 8-digit order ID (e.g., SB-ORD-XXXXXX) directly in your customer account dashboard.',
    },
    {
      q: 'Can I walk into an offline store for instant device cash pickup?',
      a: 'Yes! Sellbar operates over 200+ offline retail experience centers across major Indian metros where you can get immediate physical diagnostics, instant cash / UPI payouts, and explore certified refurbished tech.',
    },
    {
      q: 'How do I claim a warranty for a refurbished gadget or repaired screen?',
      a: 'Simply raise a ticket through this contact form selecting "Warranty Claim" or call our toll-free line 1800-SELLBAR. Our technician will schedule a free doorstep visit for inspection and replacement.',
    },
  ];

  const STORES = [
    {
      city: 'Delhi NCR (Headquarters)',
      address: 'Cyber City, Tower B, Sector 29, Gurgaon, Haryana – 122001',
      timings: '10:00 AM – 08:30 PM (Open All 7 Days)',
      phone: '+91 124 492 8800',
      badge: 'Main Experience Hub',
    },
    {
      city: 'Bengaluru',
      address: '80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka – 560034',
      timings: '10:00 AM – 08:30 PM (Open All 7 Days)',
      phone: '+91 80 4125 9900',
      badge: 'South India Regional Hub',
    },
    {
      city: 'Mumbai',
      address: 'Linking Road, Bandra West, Mumbai, Maharashtra – 400050',
      timings: '10:30 AM – 09:00 PM (Open All 7 Days)',
      phone: '+91 22 6150 4400',
      badge: 'Flagship Store',
    },
    {
      city: 'Hyderabad',
      address: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana – 500033',
      timings: '10:00 AM – 08:30 PM (Open All 7 Days)',
      phone: '+91 40 4850 7700',
      badge: 'Walk-in Diagnostic Center',
    },
  ];

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-20">
      {/* 1. HERO SECTION */}
      <section className="bg-linear-to-r from-[#0d8571] via-[#109f87] to-[#13b59b] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
            <Headphones className="w-3.5 h-3.5 text-amber-300" />
            24/7 Dedicated Assistance &amp; Grievance Support
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            We&apos;re Here to Help You Every Step of the Way
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            Have questions about device valuation, doorstep appointment timing, refurbished 12-month warranty, or partner onboarding? Connect with our dedicated support team.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="tel:18007355227"
              className="bg-white text-[#0d826e] hover:bg-slate-100 font-bold px-6 py-2.5 rounded-xl shadow-md text-xs transition flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#13b59b]" />
              Call Toll-Free: 1800-SELLBAR
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md text-xs transition flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Instant WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK CONTACT CHANNELS (4 CARDS GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#edf7f5] text-[#13b59b] flex items-center justify-center">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Toll-Free Helpline</h3>
            <p className="text-xs text-slate-500">1800-SELLBAR (1800-735-5227)</p>
            <span className="text-[11px] font-bold text-emerald-600 block">
              Mon – Sun: 9:00 AM – 8:00 PM IST
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Email Desks</h3>
            <p className="text-xs text-slate-500">support@sellbar.in</p>
            <span className="text-[11px] font-bold text-blue-600 block">
              Avg Response: Under 2 Hours
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Warranty &amp; Returns</h3>
            <p className="text-xs text-slate-500">warranty@sellbar.in</p>
            <span className="text-[11px] font-bold text-amber-600 block">
              7-Day Doorstep Replacement
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Store className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Offline Hubs</h3>
            <p className="text-xs text-slate-500">200+ Experience Centers</p>
            <span className="text-[11px] font-bold text-purple-600 block">
              Pan-India Metro Coverage
            </span>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SMART INQUIRY DESK & GRIEVANCE OFFICER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Inquiry Form (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
          <div>
            <span className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
              Smart Support Desk
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Select your inquiry category for prioritized routing to the specialized desk.
            </p>
          </div>

          {/* Topic Switcher Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { id: 'BUYBACK', label: '📱 Buyback / Selling' },
              { id: 'REFURBISHED', label: '🛍️ Refurbished Orders' },
              { id: 'REPAIRS', label: '🔧 Doorstep Repair' },
              { id: 'WARRANTY', label: '🛡️ Warranty Claim' },
              { id: 'PARTNER', label: '🤝 Retail Partner' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTopic(t.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  topic === t.id
                    ? 'bg-[#13b59b] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {sent ? (
            <div className="p-6 rounded-2xl bg-[#edf7f5] border border-[#d2f3ed] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Message Dispatched!</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you, <strong>{form.name}</strong>. Your ticket has been logged with reference{' '}
                <strong className="text-[#13b59b]">SB-TKT-{Math.floor(100000 + Math.random() * 900000)}</strong>. Our team will contact your email <strong>{form.email}</strong> within 2 hours.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-2 text-xs font-bold text-[#13b59b] hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ramesh@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Order / Tracking ID (Optional)</label>
                  <input
                    type="text"
                    value={form.orderId}
                    onChange={(e) => setForm({ ...form, orderId: e.target.value })}
                    placeholder="e.g. SB-ORD-894120"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Describe Your Issue or Question *</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Please provide details about your device model, appointment or inquiry..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#13b59b] hover:bg-[#0f957f] text-white font-bold rounded-xl shadow-md transition text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                Submit Message <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Right: Grievance Officer & Official Escalations (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Statutory Grievance Redressal Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#13b59b] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Consumer Protection Compliance
            </div>
            <h3 className="text-base font-black text-slate-900">
              Grievance Redressal Mechanism
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In accordance with the Information Technology Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020, our appointed Grievance Officer ensures fair and timely resolution.
            </p>

            <div className="bg-[#edf7f5] rounded-2xl p-4 border border-[#d2f3ed] text-xs space-y-2 text-slate-700">
              <div>
                <span className="text-slate-400 block text-[10px]">Grievance Officer:</span>
                <strong className="text-slate-900 font-bold">Mr. Ankit Saxena</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Designation:</span>
                <span className="text-slate-800">Head of Legal &amp; Compliance</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Email Desk:</span>
                <a href="mailto:grievance@sellbar.in" className="text-[#13b59b] font-bold hover:underline">
                  grievance@sellbar.in
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Response Timeline:</span>
                <span className="text-emerald-700 font-semibold">
                  Acknowledgment within 48 hours • Resolution within 30 days
                </span>
              </div>
            </div>
          </div>

          {/* Cashify Exact: Department Directory */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Department Contacts
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-slate-900">Customer Inquiry</div>
                <div className="text-[11px] text-slate-500 mb-1">For model, pricing or doorstep service assistance</div>
                <a href="mailto:support@sellbar.in" className="text-[#13b59b] font-bold hover:underline">support@sellbar.in</a>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-slate-900">Address to CEO</div>
                <div className="text-[11px] text-slate-500 mb-1">Direct feedback, suggestions or executive escalations</div>
                <a href="mailto:ceo@sellbar.in" className="text-[#13b59b] font-bold hover:underline">ceo@sellbar.in</a>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-slate-900">Bulk Selling (B2B)</div>
                <div className="text-[11px] text-slate-500 mb-1">Selling more than 4 corporate devices or enterprise liquidation</div>
                <a href="mailto:bulk@sellbar.in" className="text-[#13b59b] font-bold hover:underline">bulk@sellbar.in</a>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-slate-900">Partner Program</div>
                <div className="text-[11px] text-slate-500 mb-1">Retail store affiliation &amp; wholesale franchise inquiries</div>
                <a href="mailto:partner@sellbar.in" className="text-[#13b59b] font-bold hover:underline">partner@sellbar.in</a>
              </div>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Helpful Policy &amp; Tracking Shortcuts
            </h4>
            <div className="space-y-2 text-xs">
              <Link
                href="/warranty-policy"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition text-slate-700 font-medium"
              >
                <span>Warranty Policy &amp; Terms</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="/refund-policy"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition text-slate-700 font-medium"
              >
                <span>7-Day Replacement &amp; Refund</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="/faq"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition text-slate-700 font-medium"
              >
                <span>Complete Help Center &amp; FAQs</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. OFFLINE EXPERIENCE HUBS (4 MAJOR METROS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-6">
        <div>
          <span className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
            Walk-In Diagnostics &amp; Buyback
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            Major Retail Experience Centers
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Visit our state-of-the-art offline walk-in hubs for instant phone testing, spot cash payouts, and demo devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STORES.map((st, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:border-[#13b59b] hover:shadow-md transition space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-[#13b59b] bg-[#edf7f5] px-2 py-0.5 rounded-md uppercase">
                  {st.badge}
                </span>
                <h3 className="font-bold text-sm text-slate-900 mt-2">{st.city}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{st.address}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{st.timings}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-800 font-bold">
                  <PhoneCall className="w-3.5 h-3.5 text-[#13b59b]" />
                  <span>{st.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TOP CONTACT FAQS ACCORDION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#13b59b]" />
            <h2 className="text-lg font-black text-slate-900">
              Frequently Asked Questions Before Reaching Out
            </h2>
          </div>

          <div className="space-y-3 pt-2">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between hover:bg-slate-50 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#13b59b]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-[#f8fbfa]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
