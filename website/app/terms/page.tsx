import React from 'react';
import Link from 'next/link';
import {
  FileText,
  ShieldCheck,
  Scale,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | Sellbar.in',
  description:
    'Read the terms and conditions governing device buybacks, instant cash payouts, and refurbished orders on Sellbar Technologies India.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-gray-800 antialiased">
      {/* Header Banner */}
      <section className="bg-linear-to-r from-[#13b59b] via-[#0ea38a] to-[#0b826e] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase">
            <Scale className="w-3.5 h-3.5" />
            Sellbar User Agreement
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            These terms govern device buyback valuations, doorstep pickups, and purchases across Sellbar Technologies India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          
          <div className="flex justify-between items-center pb-4 border-b border-gray-200 text-xs text-gray-500">
            <span>Last Updated: October 2026</span>
            <span>Sellbar Technologies India Pvt. Ltd.</span>
          </div>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#13b59b]" />
              1. Ownership &amp; Device Declaration
            </h2>
            <p>
              By booking a sell-back appointment on Sellbar, you represent and warrant that you are the sole lawful owner of the device and that the device is free from any liens, stolen reports, police complaints, or active finance blocks (Knox / EMI locks). Valid government ID is mandatory at doorstep verification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#13b59b]" />
              2. Indicative Quote vs Physical Inspection
            </h2>
            <p>
              Online valuations generated on Sellbar.in are indicative based on user-submitted diagnostic answers. The final payout is confirmed after the field technician completes the physical 32-point inspection. If discrepancies are found, a revised offer is generated which the customer may accept or reject with zero cancellation fee.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
              3. Refurbished Warranty &amp; Replacement
            </h2>
            <p>
              Sellbar Certified Refurbished devices come with a 6 or 12-month doorstep warranty as explicitly stated on each product page, covering hardware and manufacturing defects. All refurbished purchases include an unconditional 7-day replacement guarantee.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <Link href="/terms-of-use" className="text-[#13b59b] font-semibold hover:underline">
              View Detailed Terms of Use
            </Link>
            <Link href="/privacy-policy" className="text-[#13b59b] font-semibold hover:underline">
              View Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
