import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Gamepad2,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rent PS5 Console | PlayStation 5 Rentals from ₹99/day',
  description:
    'Rent Sony PlayStation 5 consoles, DualSense controllers, and latest PS5 game titles with doorstep delivery and zero hassle returns.',
};

export default function RentPs5Page() {
  const plans = [
    { duration: 'Weekend Pass (3 Days)', price: '₹999', perDay: '₹333/day', popular: false },
    { duration: 'Weekly Plan (7 Days)', price: '₹1,799', perDay: '₹257/day', popular: true },
    { duration: 'Monthly Plan (30 Days)', price: '₹3,999', perDay: '₹133/day', popular: false },
  ];

  return (
    <div className="bg-[#f7f9fa] min-h-screen pb-16 font-sans">
      <div className="bg-linear-to-r from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-bold">
            <Gamepad2 className="w-3.5 h-3.5" /> Next-Gen Gaming On Demand
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Rent a <span className="text-[#13b59b]">Sony PS5</span> at Your Doorstep
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Experience 4K HDR gaming, ray tracing and ultra-high-speed SSD thrills. Comes with 2 DualSense wireless controllers and top AAA games pre-installed.
          </p>

          <div className="flex flex-wrap gap-4 pt-3 text-xs font-semibold text-gray-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> 2 Controllers Included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> Free Doorstep Delivery &amp; Setup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> Zero Security Deposit on KYC
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
          Choose Your Rental Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border ${
                p.popular
                  ? 'bg-white border-[#13b59b] shadow-xl ring-2 ring-[#13b59b]'
                  : 'bg-white border-gray-200 shadow-xs'
              }`}
            >
              <div>
                {p.popular && (
                  <span className="inline-block bg-[#13b59b] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-base font-bold text-gray-900 mb-1">{p.duration}</h3>
                <div className="text-3xl font-black text-gray-950 my-2">{p.price}</div>
                <div className="text-xs text-gray-500 font-semibold mb-4">{p.perDay}</div>
                <div className="space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#13b59b]" />
                    <span>PS5 Disc Edition Console (4K 120Hz)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#13b59b]" />
                    <span>2x DualSense Wireless Controllers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#13b59b]" />
                    <span>HDMI 2.1 Cable + Power Cables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#13b59b]" />
                    <span>Choice of 2 Free Game Discs</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center py-3 rounded-xl font-bold text-xs transition ${
                    p.popular
                      ? 'bg-[#13b59b] hover:bg-[#0ea38a] text-white shadow-md'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Book Console Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
