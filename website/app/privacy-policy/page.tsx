import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Trash2,
  Mail,
  Scale,
} from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & Data Sanitization | Sellbar.in',
  description:
    'Learn how Sellbar Technologies India safeguards your personal information, performs NIST 800-88 device wiping, and adheres to DPDP Act regulations.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-gray-800 antialiased">
      {/* Header Banner */}
      <section className="bg-linear-to-r from-[#13b59b] via-[#0ea38a] to-[#0b826e] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase">
            <Lock className="w-3.5 h-3.5" />
            DPDP Act &amp; ISO 27001 Certified
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            Sellbar is committed to absolute data confidentiality, military-grade device sanitization, and responsible stewardship of your personal information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          
          <div className="flex justify-between items-center pb-4 border-b border-gray-200 text-xs text-gray-500">
            <span>Effective Date: October 2026</span>
            <span>Sellbar Technologies India Pvt. Ltd.</span>
          </div>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#13b59b]" />
              1. Information We Collect
            </h2>
            <p>
              To execute automated buyback price quotes, doorstep pickups, and refurbished e-commerce orders, Sellbar collects:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-gray-600">
              <li><strong>Contact Information:</strong> Name, phone number (OTP verified), email address, and doorstep postal address.</li>
              <li><strong>Device Telemetry:</strong> Device IMEI / Serial Number, model capacity, cosmetic condition responses, and diagnostic logs.</li>
              <li><strong>Payment Identifiers:</strong> UPI VPA ID or Bank Account Number &amp; IFSC exclusively to disburse upfront cash payouts on device handover.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-[#13b59b]" />
              2. Military-Grade NIST 800-88 Data Sanitization
            </h2>
            <p>
              When you sell a smartphone, laptop, or tablet to Sellbar, we perform certified binary data wiping in compliance with <strong>NIST 800-88 Revision 1 &amp; DoD 5220.22-M</strong> guidelines. All internal flash NAND cells are cryptographically sanitized to ensure zero personal photos, chats, credentials, or documents can ever be recovered.
            </p>
            <p className="text-xs text-gray-500 italic bg-gray-50 p-3.5 rounded-xl border border-gray-200">
              Customers are required to back up their data and sign out of Apple iCloud, Google, and Samsung accounts prior to handover.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#13b59b]" />
              3. Payment Security &amp; RBI Compliance
            </h2>
            <p>
              All online checkout transactions on Sellbar.in are processed through RBI-authorized payment aggregators utilizing 256-bit TLS encryption. Sellbar never stores CVV codes, net banking passwords, or full credit card numbers on our servers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#13b59b]" />
              4. Grievance Officer Details (IT Act 2000)
            </h2>
            <p>
              In accordance with the Information Technology Act, 2000 and Digital Personal Data Protection (DPDP) Act, 2023, the details of our Grievance Officer are:
            </p>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-1 text-xs">
              <div><strong>Name:</strong> Manoj Kumar Sharma (Chief Compliance Officer)</div>
              <div><strong>Email:</strong> grievance@sellbar.in</div>
              <div><strong>Address:</strong> Cyber City, Tower B, Sector 29, Gurgaon, Haryana – 122001, India</div>
              <div><strong>Response SLA:</strong> All grievances are acknowledged within 24 hours and resolved within 15 working days.</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
