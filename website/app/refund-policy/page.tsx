import React from 'react';
import Link from 'next/link';
import {
  RotateCcw,
  Clock,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const metadata = {
  title: 'Refund & Return Policy | Sellbar.in',
  description:
    'Learn about Sellbar 7-Day Replacement Guarantee, refund processing timelines, inspection terms, and reversal payment channels.',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-gray-800 antialiased">
      {/* Header Banner */}
      <section className="bg-linear-to-r from-[#13b59b] via-[#0ea38a] to-[#0b826e] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase">
            <RotateCcw className="w-3.5 h-3.5" />
            Customer Protection
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Refund &amp; Return Policy
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            Sellbar’s refund policy defines the conditions and procedures for hassle-free returns and refunds for refurbished gadgets and repair services.
          </p>
        </div>
      </section>

      {/* Main Policy Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Core 7-Day Guarantee Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#13b59b]/10 text-[#13b59b] font-bold text-xs uppercase tracking-wider">
            7-Day Replacement &amp; Return Guarantee
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">
            Hassle-Free Returns on Refurbished Purchases
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            If a refurbished mobile phone, MacBook or gadget purchased from Sellbar arrives damaged, defective, or fails to function as promised during the first <strong>7 days from delivery</strong>, you are entitled to:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Option A: Free Express Replacement
              </div>
              <p className="text-xs text-emerald-800">
                A tested replacement unit of the exact same model, color, and storage tier will be dispatched to your doorstep within 48 hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-cyan-900 text-xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                Option B: 100% Full Refund
              </div>
              <p className="text-xs text-cyan-800">
                Complete reversal of your purchase price (including all taxes and shipping) directly back into your original payment source.
              </p>
            </div>
          </div>
        </div>

        {/* Repair Services Refund Clause */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-gray-900">
            Doorstep Phone Repair Refund Guidelines
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Sellbar Repair provides a 6-month warranty on screen replacements. If the replaced screen shows recurring touch ghosting, display lines, or discoloration within <strong>7 days of service completion</strong>, you can either:
          </p>
          <ul className="space-y-2 text-xs text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-200">
            <li className="flex items-start gap-2">
              <span className="text-[#13b59b] font-bold">1.</span>
              <span>Claim an immediate free replacement screen with a refreshed 6-month warranty period.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#13b59b] font-bold">2.</span>
              <span>Or opt for a complete refund of the screen part cost upon our technician retrieving the replaced screen.</span>
            </li>
          </ul>
        </div>

        {/* Refund Processing Timelines & Modes */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
          <h3 className="text-lg font-bold text-gray-900">
            Refund Channels &amp; Settlement Timelines
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl border border-gray-200 bg-[#fbfcfd] space-y-1">
              <div className="font-bold text-gray-900">UPI / Google Pay / PhonePe</div>
              <div className="text-emerald-600 font-extrabold text-sm">Instant to 24 Hours</div>
              <p className="text-[11px] text-gray-500">Credited directly to the linked VPA / Bank account.</p>
            </div>

            <div className="p-4 rounded-2xl border border-gray-200 bg-[#fbfcfd] space-y-1">
              <div className="font-bold text-gray-900">Credit / Debit Cards</div>
              <div className="text-cyan-600 font-extrabold text-sm">3 to 5 Business Days</div>
              <p className="text-[11px] text-gray-500">Subject to your card issuing bank’s clearing cycle.</p>
            </div>

            <div className="p-4 rounded-2xl border border-gray-200 bg-[#fbfcfd] space-y-1">
              <div className="font-bold text-gray-900">Cash on Delivery (COD)</div>
              <div className="text-amber-600 font-extrabold text-sm">24 to 48 Hours</div>
              <p className="text-[11px] text-gray-500">Transferred via Bank IMPS or UPI upon account verification.</p>
            </div>
          </div>
        </div>

        {/* Non-Refundable Scenarios */}
        <div className="bg-rose-50/70 border border-rose-200 p-6 rounded-3xl space-y-3 text-xs text-rose-950">
          <div className="flex items-center gap-2 font-bold text-sm text-rose-800">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            Non-Refundable Circumstances
          </div>
          <p className="leading-relaxed">
            Refunds will not be initiated if the returned unit shows customer-induced physical cracks, deep drops, water submersion, altered internal parts, or if the original manufacturer packaging and IMEI labels are missing.
          </p>
        </div>

        {/* Need Help CTA */}
        <div className="bg-[#111827] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold">Have Questions About a Refund?</h4>
            <p className="text-xs text-gray-400">Our customer dispute desk is available 7 days a week from 9 AM to 8 PM.</p>
          </div>
          <Link
            href="/contact"
            className="bg-[#13b59b] hover:bg-[#0ea38a] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition whitespace-nowrap"
          >
            Contact Support Desk
          </Link>
        </div>

      </div>
    </div>
  );
}
