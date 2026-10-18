import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Car,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  ArrowRight,
  BadgeDollarSign,
  FileCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sell Used Car Online | Instant Quote & Free Doorstep Inspection',
  description:
    'Sell your used car at the best price with Sellbar. Free doorstep evaluation, instant payment, and hassle-free RC transfer assistance.',
};

export default function SellUsedCarPage() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen pb-16 font-sans">
      <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/20 text-xs font-bold">
            <Car className="w-3.5 h-3.5" /> Instant Car Valuation
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Sell Your Used Car for the <span className="text-[#13b59b]">Best Price</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Free doorstep car inspection, best market price offer in minutes, instant bank transfer before car handover, and free RC transfer.
          </p>

          <div className="flex flex-wrap gap-4 pt-3 text-xs font-semibold text-gray-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> 100% Free Doorstep Inspection
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> Same Day Payment
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> Free RC Ownership Transfer
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-xs max-w-3xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Enter Car Details for Free Price Estimation
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Car Brand &amp; Model
              </label>
              <input
                type="text"
                placeholder="e.g. Maruti Suzuki Swift, Hyundai Creta"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#13b59b] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Registration Year
              </label>
              <input
                type="text"
                placeholder="e.g. 2019, 2021"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#13b59b] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Fuel Type
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#13b59b] text-sm">
                <option>Petrol</option>
                <option>Diesel</option>
                <option>CNG</option>
                <option>Electric (EV)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Kilometres Driven
              </label>
              <input
                type="text"
                placeholder="e.g. 45,000 km"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#13b59b] text-sm"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#13b59b] hover:bg-[#0ea38a] text-white font-bold text-sm rounded-xl transition shadow-md cursor-pointer"
            >
              Get Instant Car Valuation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
