import React from 'react';
import Link from 'next/link';
import {
  FileText,
  ShieldCheck,
  Scale,
  AlertCircle,
  CheckCircle2,
  Lock,
} from 'lucide-react';

export const metadata = {
  title: 'Terms of Use | Sellbar.in',
  description:
    'Read the website terms of use governing your access to Sellbar.in, buyback valuation tools, refurbished storefronts, and repair services.',
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-gray-800 antialiased">
      {/* Header Banner */}
      <section className="bg-linear-to-r from-[#13b59b] via-[#0ea38a] to-[#0b826e] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase">
            <Scale className="w-3.5 h-3.5" />
            Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Terms of Use
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before accessing or using Sellbar.in, our mobile applications, and automated device valuation tools.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium">
            <strong>Important Notice:</strong> These Terms of Use constitute a legally binding electronic contract between you (&quot;User&quot;) and Sellbar Technologies India Pvt. Ltd. under the Indian Information Technology Act, 2000. By using our website, ordering buybacks, or purchasing refurbished devices, you consent to these terms.
          </div>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              1. Platform Eligibility and Lawful Use
            </h2>
            <p>
              You must be at least 18 years of age and competent to enter into a legally enforceable contract under the Indian Contract Act, 1872. You agree to provide accurate, up-to-date, and complete information during order creation, OTP authentication, and device valuation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              2. Device Ownership &amp; Lawful Title Warranties
            </h2>
            <p>
              When selling a smartphone, laptop, tablet, or gadget to Sellbar:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-gray-600">
              <li>You warrant that you are the sole and lawful owner of the device, or duly authorized to transfer ownership.</li>
              <li>The device is free from all encumbrances, third-party liens, active EMI financing holds, or police reports of theft/loss.</li>
              <li>You agree to sign an electronic declaration of ownership and present valid government identification (Aadhaar, Voter ID, Driving License) upon doorstep handover.</li>
              <li>You are solely responsible for backing up your personal data and logging out of all cloud accounts (Apple iCloud, Google Account, Samsung Cloud, Mi Account). Sellbar performs certified NIST 800-88 data sanitization but accepts no liability for unbacked user data.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              3. Pricing, Algorithmic Quotes &amp; Doorstep Valuation
            </h2>
            <p>
              Indicative online price quotes provided by Sellbar&apos;s valuation algorithm are based on the functional questions answered by the user. If physical verification by our field executive reveals discrepancies (e.g. screen replacement, battery health degradation, water damage, or body bends), a revised offer will be shared. You reserve the complete right to accept or decline the revised offer without any cancellation penalty.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              4. Doorstep Repair Services Terms
            </h2>
            <p>
              Sellbar repair services are executed by trained technicians. Our replacement screens carry an industry-leading 6-month functional warranty + 1-month accidental breakage warranty. Spare parts carry a 3-month warranty. The warranty is strictly non-transferable and applies only to the original customer and repaired device IMEI.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              5. Intellectual Property Rights
            </h2>
            <p>
              All trademarks, software algorithms, logos, UI designs, and database models displayed on Sellbar.in are the exclusive proprietary property of Sellbar Technologies India Pvt. Ltd. Brand logos such as Apple, Samsung, OnePlus, Xiaomi, HP, and Dell are the property of their respective trademark holders and are used solely for model identification purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              6. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of India. Any legal dispute, controversy, or claim arising out of or relating to this platform shall be subject to the exclusive jurisdiction of the competent courts in Gurgaon, Haryana.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <span>Last Updated: October 2026</span>
            <Link href="/privacy-policy" className="text-[#13b59b] font-semibold hover:underline">
              Review Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
