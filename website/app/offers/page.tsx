'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Tag,
  Percent,
  CreditCard,
  Sparkles,
  Copy,
  Check,
  Gift,
  ShieldCheck,
  Smartphone,
  Laptop,
  Watch,
  ChevronRight,
  Clock,
  ArrowRight
} from 'lucide-react';

const OFFERS = [
  {
    id: 'off-1',
    code: 'SELLBAR500',
    title: 'Flat ₹500 OFF on First Purchase',
    description: 'Applicable on any certified refurbished smartphone or laptop above ₹10,000.',
    discount: '₹500 OFF',
    minOrder: '₹10,000',
    expiresIn: 'Limited Period',
    category: 'Mobiles & Laptops',
    badge: 'Popular',
  },
  {
    id: 'off-2',
    code: 'FESTIVE1500',
    title: 'Mega Festive Bonanza: ₹1,500 Instant Discount',
    description: 'Get ₹1,500 instant discount on flagship models including iPhone 15, Galaxy S24, and MacBook Air.',
    discount: '₹1,500 OFF',
    minOrder: '₹35,000',
    expiresIn: 'Ending Soon',
    category: 'Flagship Store',
    badge: 'Best Value',
  },
  {
    id: 'off-3',
    code: 'EXCHANGE3000',
    title: 'Trade-in Upgrade Bonus',
    description: 'Sell your old phone on Sellbar and get an extra ₹3,000 exchange bonus when buying a refurbished phone.',
    discount: 'Extra ₹3,000 Bonus',
    minOrder: 'Old Device Resale',
    expiresIn: 'Ongoing',
    category: 'Trade-In',
    badge: 'Exchange Bonus',
  },
  {
    id: 'off-4',
    code: 'STUDENTPASS',
    title: 'Student Discount: 7% Extra Savings',
    description: 'Special student voucher on verified College IDs for study laptops and tablets.',
    discount: '7% OFF (Up to ₹2,500)',
    minOrder: '₹15,000',
    expiresIn: 'Valid through 2026',
    category: 'Laptops & Tablets',
    badge: 'Students Only',
  },
  {
    id: 'off-5',
    code: 'FREESHIP',
    title: 'Zero Shipping Fee Everywhere',
    description: 'Free express doorstep delivery across 19,000+ pincodes in India on all prepaid orders.',
    discount: 'FREE DELIVERY',
    minOrder: 'No Minimum',
    expiresIn: 'Always Active',
    category: 'All Products',
    badge: 'Express',
  },
  {
    id: 'off-6',
    code: 'HDFCSPECIAL',
    title: 'HDFC & ICICI Credit Card Cashback',
    description: 'Get up to 10% instant cashback on 6 & 12 months No-Cost EMI transactions.',
    discount: '10% Cashback',
    minOrder: '₹20,000',
    expiresIn: 'Monthly Offer',
    category: 'Bank Offer',
    badge: 'Bank Special',
  },
];

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2500);
    }
  };

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-gray-800 font-sans pb-20">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#13b59b] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium">Offers & Coupons</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-linear-to-r from-[#13b59b] to-[#0d8773] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Sellbar Verified Offers & Promo Codes
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Maximum Savings on Tech You Love
          </h1>
          <p className="text-sm sm:text-base text-teal-100 max-w-2xl mx-auto">
            Enjoy instant bank discounts, coupon codes, and trade-in upgrade bonuses on certified refurbished smartphones, laptops & accessories.
          </p>
        </div>
      </div>

      {/* Main Coupons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Active Promo Codes</h2>
            <p className="text-xs sm:text-sm text-gray-500">Copy code and apply at checkout to get instant discounts</p>
          </div>
          <span className="text-xs font-bold bg-[#e6f9f6] text-[#13b59b] px-3 py-1 rounded-full">
            {OFFERS.length} Offers Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERS.map((offer) => {
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={offer.id}
                className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#13b59b] hover:shadow-lg transition p-6 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-[#13b59b] px-2.5 py-0.5 rounded-md">
                    {offer.badge}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {offer.expiresIn}
                  </span>
                </div>

                {/* Offer Details */}
                <div className="space-y-2 mb-6">
                  <div className="text-2xl font-black text-[#13b59b] tracking-tight">
                    {offer.discount}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {offer.description}
                  </p>
                  <div className="text-[11px] text-gray-400 font-medium pt-1">
                    Min Order Value: <strong className="text-gray-700">{offer.minOrder}</strong>
                  </div>
                </div>

                {/* Copy Coupon Box */}
                <div className="pt-4 border-t border-dashed border-gray-200 flex items-center justify-between gap-3">
                  <div className="bg-gray-50 border border-gray-300 border-dashed rounded-lg px-3 py-1.5 font-mono text-sm font-bold text-gray-800 tracking-wider">
                    {offer.code}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(offer.code)}
                    className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition cursor-pointer ${
                      isCopied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#13b59b] hover:bg-[#0fa088] text-white shadow-xs'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bank & Financing Offers Section */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              Flexible Payment & Bank Partners
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Zero-interest EMI, instant cashback, and secure payments across all major networks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-gray-50/70 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#13b59b] flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">No Cost EMI</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Available for 3, 6, 9 & 12 months with Bajaj Finserv, Snapmint, Instacred and leading credit cards.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gray-50/70 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#13b59b] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">Cash on Delivery (COD)</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Pay at your doorstep with cash or UPI upon package inspection and OTP verification.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gray-50/70 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#13b59b] flex items-center justify-center shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">Refer & Earn ₹500</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Invite friends to buy or sell devices and both receive ₹500 Sellbar wallet credit.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/buy-refurbished-mobile-phones"
              className="inline-flex items-center gap-2 bg-[#13b59b] hover:bg-[#0fa088] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition"
            >
              <span>Start Shopping with Offers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
