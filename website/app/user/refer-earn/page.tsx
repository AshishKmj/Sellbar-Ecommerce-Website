import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Gift, Share2, Wallet, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refer & Earn | Invite Friends & Earn Up to ₹5,000 Cash - Sellbar',
  description:
    'Share your Sellbar referral link with friends. When they sell an old phone or buy a refurbished device, both of you earn instant cash vouchers directly to your bank account or wallet.',
};

export default function ReferEarnPage() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen pb-16 font-sans">
      <div className="bg-linear-to-r from-[#0d2a26] via-[#103a35] to-[#124942] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/20 text-xs font-bold">
            <Gift className="w-3.5 h-3.5" /> Unlimited Rewards
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Refer Friends &amp; <span className="text-[#2bbb9e]">Earn Instant Cash</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-200/90 max-w-2xl leading-relaxed">
            Invite your colleagues, family, and friends to Sellbar. Earn flat ₹250 on every completed buyback order and ₹500 on certified refurbished laptop purchases!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#e8f8f5] text-[#13b59b] flex items-center justify-center mx-auto">
              <Share2 className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase">Step 1</div>
            <h3 className="text-base font-bold text-gray-900">Share Your Link</h3>
            <p className="text-xs text-gray-500">Send your unique link via WhatsApp, Telegram, or email.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#e8f8f5] text-[#13b59b] flex items-center justify-center mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase">Step 2</div>
            <h3 className="text-base font-bold text-gray-900">Friend Completes Order</h3>
            <p className="text-xs text-gray-500">Friend sells an old gadget or buys certified refurbished tech.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#e8f8f5] text-[#13b59b] flex items-center justify-center mx-auto">
              <Wallet className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase">Step 3</div>
            <h3 className="text-base font-bold text-gray-900">Instant Cash in Bank</h3>
            <p className="text-xs text-gray-500">UPI transfer credited directly to your bank account.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-xs max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Your Personal Referral Link</h2>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              readOnly
              value="https://sellbar.in/ref/SELLBAR2026"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm font-mono text-gray-800 text-center sm:text-left focus:outline-none"
            />
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-[#13b59b] hover:bg-[#0ea38a] text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer shrink-0"
            >
              Copy Link
            </button>
          </div>
          <p className="text-xs text-gray-400">
            Terms &amp; conditions apply. Minimum order value of ₹2,000 for referral activation.
          </p>
        </div>
      </div>
    </div>
  );
}
