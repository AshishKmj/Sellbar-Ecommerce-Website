'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Wrench,
  Smartphone,
  Laptop,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Mail,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';

export default function WarrantyPolicyPage() {
  const [activeTab, setActiveTab] = useState<'refurbished' | 'repair'>('refurbished');

  return (
    <div className="bg-[#f8fafc] min-h-screen text-gray-800 antialiased">
      {/* Header Banner */}
      <section className="bg-linear-to-r from-[#13b59b] via-[#0ea38a] to-[#0b826e] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            Sellbar Peace of Mind Guarantee
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Comprehensive Warranty Policy
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transparent coverage details so you always know exactly how your refurbished devices and doorstep repairs are protected.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Tab Switcher */}
        <div className="flex p-1.5 rounded-2xl bg-gray-200/80 max-w-md mx-auto mb-10 text-xs font-bold">
          <button
            onClick={() => setActiveTab('refurbished')}
            className={`flex-1 py-3 rounded-xl transition flex items-center justify-center gap-2 ${
              activeTab === 'refurbished'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Smartphone className="w-4 h-4 text-[#13b59b]" />
            Refurbished Devices (12 Months)
          </button>
          <button
            onClick={() => setActiveTab('repair')}
            className={`flex-1 py-3 rounded-xl transition flex items-center justify-center gap-2 ${
              activeTab === 'repair'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Wrench className="w-4 h-4 text-[#13b59b]" />
            Doorstep Repair (6+1 Months)
          </button>
        </div>

        {/* Tab 1: Refurbished Devices Warranty */}
        {activeTab === 'refurbished' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold text-[#13b59b] tracking-wider uppercase">
                  CERTIFIED REFURBISHED WARRANTY
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
                  Up to 12 Months Comprehensive Coverage
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Every certified renewed mobile phone and laptop sold on Sellbar undergoes a 32-point diagnostic inspection. Your invoice serves as the primary warranty certificate starting from the date of delivery.
                </p>
              </div>

              {/* What is covered vs not covered grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    What is Covered
                  </div>
                  <ul className="space-y-2 text-xs text-emerald-950">
                    <li>• Motherboard functional failures and chip-level defects.</li>
                    <li>• Touch screen responsiveness and display touch digitizers.</li>
                    <li>• OEM camera modules, autofocus, and flash sensors.</li>
                    <li>• Battery performance degradation falling below 80% capacity.</li>
                    <li>• Wi-Fi, Bluetooth, mobile radio, and network reception modules.</li>
                    <li>• Charging port and earphone audio jack hardware defects.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    What is Not Covered
                  </div>
                  <ul className="space-y-2 text-xs text-rose-950">
                    <li>• Physical cracking, external glass shatter, or denting from drops.</li>
                    <li>• Liquid / water ingress, corrosion, or moisture exposure.</li>
                    <li>• Unauthorized third-party opening, repair, or OS jailbreaking/rooting.</li>
                    <li>• Normal cosmetic wear, minor bezel scuffs, or paint chipping over time.</li>
                    <li>• Devices where serial number / IMEI label is tampered or defaced.</li>
                  </ul>
                </div>
              </div>

              {/* 7-Day Replacement Guarantee */}
              <div className="p-5 rounded-2xl bg-[#f0fdfa] border border-[#13b59b]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
                    BONUS REPLACEMENT CLAUSE
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mt-0.5">
                    7-Day Hassle-Free Replacement Window
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    If your refurbished gadget develops any hardware defect within 7 days of delivery, we provide an immediate free doorstep replacement.
                  </p>
                </div>
                <Link
                  href="/refund-policy"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#13b59b] hover:underline whitespace-nowrap shrink-0"
                >
                  View Refund Policy <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Doorstep Repair Warranty */}
        {activeTab === 'repair' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold text-[#13b59b] tracking-wider uppercase">
                  DOORSTEP REPAIR WARRANTY
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
                  6 Months + 1 Month Screen Breakage Warranty
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Sellbar Repair offers an industry-leading 6 month warranty + 1 month complimentary accidental screen breakage warranty on every mobile screen replaced by our certified technicians.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
                  <div className="text-2xl font-black text-[#13b59b]">6+1 Mo</div>
                  <div className="text-xs font-bold text-gray-900">Mobile Screen</div>
                  <p className="text-[11px] text-gray-500">Touch issues, dead pixels, discoloration + 1 mo breakage</p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
                  <div className="text-2xl font-black text-cyan-600">3 Months</div>
                  <div className="text-xs font-bold text-gray-900">Battery &amp; Mic</div>
                  <p className="text-[11px] text-gray-500">Fast draining, OEM cell calibration, audio clarity</p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
                  <div className="text-2xl font-black text-amber-600">3 Months</div>
                  <div className="text-xs font-bold text-gray-900">Charging Jack &amp; Ports</div>
                  <p className="text-[11px] text-gray-500">Loose connector pins, fast-charge failure</p>
                </div>
              </div>

              <div className="text-xs text-gray-600 space-y-3 bg-amber-50/70 p-5 rounded-2xl border border-amber-200">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Important Repair Warranty Terms
                </div>
                <ul className="space-y-1.5 text-amber-950">
                  <li>• In case the damaged original screen of your device is not handed over to our technician upon replacement, the warranty is limited to 3 months.</li>
                  <li>• The warranty is valid only for the specific IMEI/serial number repaired and is non-transferable across individuals.</li>
                  <li>• Technician resolution turnaround: our team visits your location within 24 to 48 hours of warranty registration.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* How to Claim Warranty Card */}
        <div className="mt-8 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#13b59b]" />
            How to Claim Your Warranty
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Claiming your warranty is 100% online with doorstep pickup or technician visits:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <span className="font-bold text-[#13b59b]">Step 1: Contact Support</span>
              <p className="text-gray-600">Write to <strong>support@sellbar.in</strong> or call toll-free with your Order / Invoice reference.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <span className="font-bold text-[#13b59b]">Step 2: Video Diagnostic</span>
              <p className="text-gray-600">Share a brief 10-second video of the reported screen or hardware issue for instant pre-authorization.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <span className="font-bold text-[#13b59b]">Step 3: Doorstep Resolution</span>
              <p className="text-gray-600">Our engineer visits your doorstep to repair or pick up the unit for certified component replacement.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
