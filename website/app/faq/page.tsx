'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ShieldCheck,
  Zap,
  RotateCcw,
  Smartphone,
  Wrench,
  CreditCard,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  Sparkles,
  Leaf,
  Layers,
  ThumbsUp,
  Check,
  Headphones,
} from 'lucide-react';

import { useParams } from 'next/navigation';

const CATEGORIES = [
  { id: 'all', name: 'All FAQs', icon: Layers, count: 18, href: '/faq' },
  { id: 'buyback', name: 'Buyback FAQs', icon: Smartphone, count: 5, href: '/faq/category/buyback' },
  { id: 'accessories', name: 'Mobile Accessories FAQs', icon: Headphones, count: 4, href: '/faq/category/accessories' },
  { id: 'exchange', name: 'Mobile Exchange FAQs', icon: RotateCcw, count: 4, href: '/faq/category/exchange' },
  { id: 'repairs', name: 'Mobile Repair FAQs', icon: Wrench, count: 3, href: '/faq/category/repairs' },
  { id: 'refurbished', name: 'Refurbished Mobiles FAQs', icon: ShieldCheck, count: 4, href: '/faq/category/refurbished' },
];

const FAQS = [
  {
    category: 'buyback',
    tag: 'Device Selling',
    q: 'How does Sellbar calculate my device resale value?',
    a: 'Our AI algorithmic valuation engine analyses your exact gadget model, memory variant, physical screen condition, battery health retention, and included accessories against real-time secondary marketplace demand trends in India to quote the highest transparent cash offer.',
  },
  {
    category: 'buyback',
    tag: 'Instant Cash',
    q: 'When and how do I receive payment for my sold gadget?',
    a: 'Payment is transferred directly into your bank account at your doorstep before you hand over the device. You can choose instant UPI (Google Pay, PhonePe, Paytm, BHIM), IMPS bank transfer, or cash on physical device validation.',
  },
  {
    category: 'buyback',
    tag: 'Fair Inspection',
    q: 'What happens if a discrepancy is found during the doorstep inspection?',
    a: 'If a cosmetic scratch or internal component issue differs from your self-assessment, our visiting technician generates a transparent updated quote on the spot using our diagnostic app. If you choose not to sell, the visit is 100% free with zero cancellation charges.',
  },
  {
    category: 'buyback',
    tag: 'Data Security',
    q: 'Is my personal data safe when I sell my device to Sellbar?',
    a: 'Yes, 100%! Sellbar performs DoD and NIST 800-88 compliant binary multi-pass data wiping on every purchased device. We also guide you through factory deregistration of Apple iCloud, Google FRP, and banking eSIM profiles before handover.',
  },
  {
    category: 'refurbished',
    tag: 'Quality Audit',
    q: 'What is Sellbar’s 32-point technical inspection process?',
    a: 'Every pre-owned smartphone and MacBook undergoes automated software diagnostics and bench testing for multi-touch screen digitizers, battery capacity (>85%), cameras, microphones, stereo speakers, Wi-Fi 6 radio, and thermal load stability before receiving the Sellbar Assured certification.',
  },
  {
    category: 'refurbished',
    tag: '12M Warranty',
    q: 'What warranty is included with refurbished tech on Sellbar?',
    a: 'Our certified refurbished smartphones and MacBooks come backed by an industry-leading 12-Month Comprehensive Doorstep Warranty along with an unconditional 7-Day Hassle-Free Replacement or Refund Guarantee.',
  },
  {
    category: 'refurbished',
    tag: 'Cosmetic Grades',
    q: 'What is the difference between Grade A (Flawless), Grade B (Superb), and Grade C (Good)?',
    a: 'All three grades are 100% functionally identical and fully tested. Grade A (Flawless) has zero visible blemishes (like brand-new). Grade B (Superb) has minimal micro-scratches invisible from arm’s length. Grade C (Good) shows visible everyday casing wear at maximum discounted savings of up to 70%.',
  },
  {
    category: 'refurbished',
    tag: 'Box & Accessories',
    q: 'Are charging cables and certified boxes included?',
    a: 'Yes. All refurbished products are delivered in tamper-evident branded Sellbar eco-packaging containing a certified fast-charging cable, SIM ejector tool, and your official 32-point inspection certificate.',
  },
  {
    category: 'repairs',
    tag: 'Fast 30-Mins',
    q: 'How does doorstep mobile screen and battery repair work?',
    a: 'Book your repair slot online by selecting your phone brand and the issue. A background-verified hardware engineer arrives at your home or office with specialized mobile lab tools and completes the repair in front of your eyes within 30 to 45 minutes.',
  },
  {
    category: 'repairs',
    tag: 'Screen Warranty',
    q: 'What warranty is provided on replacement screens and batteries?',
    a: 'We offer up to 6 months comprehensive warranty on replaced screens (covering touch digitizer unresponsiveness and display lines) plus a 7-day money-back refund guarantee if you face persistent technical issues.',
  },
  {
    category: 'repairs',
    tag: 'OEM Grade',
    q: 'Are replacement spare parts genuine and certified?',
    a: 'Yes. Sellbar uses Grade-A OEM certified parts tested for accurate color saturation, high refresh rate touch sampling, and thermal stability.',
  },
  {
    category: 'payments',
    tag: 'Flexible Pay',
    q: 'What payment modes are supported when purchasing refurbished gadgets?',
    a: 'We support all major payment modes: UPI (GPay, PhonePe, Paytm), Credit & Debit cards (Visa, MasterCard, RuPay), NetBanking, 0% No-Cost EMI across major banks, and Cash on Delivery (COD).',
  },
  {
    category: 'payments',
    tag: 'GST Invoicing',
    q: 'Can I claim GST input tax credit on refurbished electronics?',
    a: 'Yes! During checkout, enter your registered business name and 15-digit GSTIN number. We issue a tax-compliant commercial B2B tax invoice with 18% GST input credit eligible.',
  },
  {
    category: 'payments',
    tag: 'Free Delivery',
    q: 'Are there any shipping or delivery fees?',
    a: 'Standard insured doorstep delivery is 100% free across 18,000+ serviceable pin codes in India for all refurbished gadget purchases.',
  },
];

export default function FAQPage() {
  const params = useParams();
  const routeCat = (params?.category as string) || 'all';
  const [selectedCategory, setSelectedCategory] = useState(routeCat);
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [helpfulMap, setHelpfulMap] = useState<Record<number, boolean>>({});

  const filtered = FAQS.filter((f) => {
    const matchesCategory = selectedCategory === 'all' || f.category === selectedCategory;
    const matchesSearch =
      !search ||
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase()) ||
      f.tag.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleHelpful = (idx: number) => {
    setHelpfulMap((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-20">
      {/* 1. HERO SECTION WITH LIVE SEARCH */}
      <section className="bg-linear-to-r from-[#0d8571] via-[#109f87] to-[#13b59b] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
            <HelpCircle className="w-3.5 h-3.5 text-amber-300" />
            Sellbar Knowledge Base &amp; Help Desk
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            How Can We Help You Today?
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
            Find instant answers to questions regarding device valuation, doorstep pickup, refurbished warranty, and doorstep repairs.
          </p>

          {/* Search Box Input */}
          <div className="pt-2 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions (e.g. UPI payment, 12M warranty, inspection)..."
                className="w-full bg-white text-slate-900 rounded-2xl pl-12 pr-4 py-3.5 text-xs sm:text-sm font-medium shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            {/* Trending Query Tags */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3 text-[11px] text-white/90">
              <span className="font-bold text-amber-300">Trending:</span>
              {['Instant UPI', '12M Warranty', 'Screen Repair', '32-Point Test', 'Data Wipe'].map(
                (term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setSearch(term)}
                    className="bg-white/15 hover:bg-white/25 px-2.5 py-0.5 rounded-full backdrop-blur-sm transition cursor-pointer"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-bold text-xs transition shadow-sm cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#13b59b]' : 'text-slate-400'}`} />
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. MAIN ACCORDION SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
          <span className="font-bold text-slate-700">
            Showing {filtered.length} Answered Questions
          </span>
          {search && (
            <button
              onClick={() => setSearch('')}
              className="text-[#13b59b] font-bold hover:underline"
            >
              Clear search filter
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center space-y-3">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-bold text-sm text-slate-900">No questions matched your search</h3>
            <p className="text-xs text-slate-500">
              Try searching for something else or contact our 24/7 support desk directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#13b59b] text-white font-bold text-xs px-4 py-2 rounded-xl mt-2"
            >
              Ask Support Team <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            const isHelpful = helpfulMap[idx];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition hover:border-[#13b59b]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-bold text-[#13b59b] bg-[#edf7f5] px-2 py-0.5 rounded uppercase">
                      {item.tag}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900">{item.q}</h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 mt-1 transition-transform shrink-0 ${
                      isOpen ? 'rotate-180 text-[#13b59b]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-[#f8fbfa] space-y-3">
                    <p>{item.a}</p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[11px] text-slate-400">
                      <span>Was this answer helpful?</span>
                      <button
                        type="button"
                        onClick={() => toggleHelpful(idx)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                          isHelpful
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                            : 'border-slate-200 hover:bg-white text-slate-600'
                        }`}
                      >
                        {isHelpful ? <Check className="w-3 h-3 text-emerald-600" /> : <ThumbsUp className="w-3 h-3" />}
                        <span>{isHelpful ? 'Thank you!' : 'Yes, helpful'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* 4. QUICK ACTION SHORTCUTS (3 ACTION CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-4">
        <h2 className="text-xl font-black text-slate-900">
          Explore Related Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link
            href="/sell"
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#13b59b] shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#edf7f5] text-[#13b59b] flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#13b59b] transition">
                Sell Your Used Smartphone
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Get an instant quote and doorstep payout across 1,500+ cities in India.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-bold text-[#13b59b] gap-1">
              Check Resale Value <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/buy-refurbished-gadgets"
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#13b59b] shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#13b59b] transition">
                Buy Certified Refurbished
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Save up to 70% with 32-point tested hardware, 12M warranty &amp; 7-day replacement.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-bold text-[#13b59b] gap-1">
              Browse Devices <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/repair"
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#13b59b] shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#13b59b] transition">
                Doorstep Mobile Repair
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Screen and battery replacement in 30 minutes in front of your eyes with 6M warranty.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-bold text-[#13b59b] gap-1">
              Book Repair Slot <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* 5. STILL HAVE QUESTIONS? SUPPORT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-linear-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              24/7 Customer Care
            </span>
            <h2 className="text-xl sm:text-2xl font-black">
              Didn&apos;t Find the Answer You Were Looking For?
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Our customer success executives are ready to assist you via phone call, live WhatsApp chat, or email support ticket.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:+917717517777"
              className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm transition"
            >
              <PhoneCall className="w-4 h-4 text-[#13b59b]" />
              Call: +91 77175 17777
            </a>
            <a
              href="https://wa.me/917717517777?text=Hi%20Sellbar%2C%20I%20have%20a%20question%20regarding%20devices."
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm transition"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp: 7717517777
            </a>
            <Link
              href="/contact"
              className="bg-[#13b59b] hover:bg-[#0f957f] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm transition"
            >
              Contact Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
