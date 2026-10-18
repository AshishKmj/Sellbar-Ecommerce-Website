import React from 'react';
import Link from 'next/link';
import {
  Leaf,
  Recycle,
  ShieldCheck,
  AlertOctagon,
  CheckCircle2,
  XCircle,
  Building,
  Users,
  Home,
  PhoneCall,
  Mail,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'E-Waste Management Policy & EPR Compliance | Sellbar.in',
  description:
    'Sellbar is committed to responsible electronic recycling under CPCB E-Waste Management Rules. Discover our Extended Producer Responsibility (EPR) initiatives.',
};

export default function EWastePolicyPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-gray-800 antialiased">
      {/* Header Banner */}
      <section className="bg-linear-to-r from-[#13b59b] via-[#0ea38a] to-[#0b826e] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase">
            <Leaf className="w-3.5 h-3.5 text-white" />
            CPCB Extended Producer Responsibility (EPR)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            E-Waste Management Policy
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            Committed to 100% scientific, zero-landfill electronic recycling. Protecting Bharat&apos;s soil and water from hazardous heavy metal contamination.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Core Statutory Declaration */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider border border-emerald-200">
            CPCB Authorised Recycling Framework
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">
            Recycle With Joy at Sellbar Technologies
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Sellbar Technologies India Pvt. Ltd. fulfills its statutory Extended Producer Responsibility (EPR) compliance under the <strong>E-Waste (Management) Rules, 2022</strong> as notified by the Ministry of Environment, Forest and Climate Change (MoEFCC) and Central Pollution Control Board (CPCB).
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            We partner with certified Producer Responsibility Organisations (PROs) and government-licensed R2v3 authorized recyclers to ensure non-repairable electronic components are shredded and recovered in sealed, zero-emission smelting facilities.
          </p>
        </div>

        {/* Do's and Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50/70 p-6 rounded-3xl border border-emerald-200 space-y-4">
            <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Do&apos;s: Responsible Disposal
            </div>
            <ul className="space-y-2.5 text-xs text-emerald-950 leading-relaxed">
              <li>• Hand over non-working phones, dead laptop batteries, and chargers to Sellbar doorstep executives.</li>
              <li>• Drop off end-of-life gadgets at any of our 200+ offline retail experience hubs across India.</li>
              <li>• Isolate swollen lithium-ion batteries in non-flammable containers before scheduling pickup.</li>
              <li>• Disconnect peripherals and cables before packaging for e-waste recycling.</li>
            </ul>
          </div>

          <div className="bg-rose-50/70 p-6 rounded-3xl border border-rose-200 space-y-4">
            <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
              <XCircle className="w-5 h-5 text-rose-600" />
              Don&apos;ts: Hazardous Mistakes
            </div>
            <ul className="space-y-2.5 text-xs text-rose-950 leading-relaxed">
              <li>• Do NOT mix dead electronics in household dustbins with municipal wet or dry waste.</li>
              <li>• Do NOT dismantle electronics, LCD screens or lithium batteries at home. Hazardous lead and mercury fumes can cause severe respiratory harm.</li>
              <li>• Do NOT sell unserviceable e-waste to unorganized scrap collectors (kabadiwalas) who burn circuit boards in open air.</li>
              <li>• Do NOT dispose of batteries into general open municipal garbage dumps or water bodies.</li>
            </ul>
          </div>
        </div>

        {/* 3 Specialized EPR Programs */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">
            Our Dedicated E-Waste Collection Drives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">Corporate Bulk Consumer</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Turnkey asset decommissioning for IT parks, banks, hospitals, and universities with green disposal certificates and NIST data wiping.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">Waste Collector Formalization</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We onboard informal waste pickers and aggregators into licensed CPCB supply chains with fair digital payments and safety gear.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <Home className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">RWA Community Collection</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Weekend electronic recycling drop-off kiosks in high-density residential apartment complexes across major Indian metros.
              </p>
            </div>
          </div>
        </div>

        {/* Schedule Pickup CTA */}
        <div className="bg-[#111827] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold">Have Dead Electronics Lying Idle?</h4>
            <p className="text-xs text-gray-400">Schedule a free doorstep e-waste pickup or request a corporate collection drive.</p>
          </div>
          <Link
            href="/recycle-old-mobile-phone"
            className="bg-[#13b59b] hover:bg-[#0ea38a] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition whitespace-nowrap"
          >
            Schedule Free E-Waste Pickup
          </Link>
        </div>

      </div>
    </div>
  );
}
