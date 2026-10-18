import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Store as StoreIcon,
  CheckCircle2,
  ChevronLeft,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cityName = slug.replace(/^(cashify-store-|sellbar-store-)/i, '').replace(/-/g, ' ');
  const formattedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  return {
    title: `Sellbar Store in ${formattedCity} | Sell Phone, Buy Refurbished & Repair`,
    description: `Visit our authorized Sellbar store in ${formattedCity}. Instant cash for old gadgets, certified refurbished phones with 6-12 month warranty, and 30-min doorstep repair service.`,
  };
}

export default async function StoreCityPage({ params }: PageProps) {
  const { slug } = await params;
  const cityName = slug.replace(/^(cashify-store-|sellbar-store-)/i, '').replace(/-/g, ' ');
  const formattedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  return (
    <div className="bg-[#f7f9fa] min-h-screen pb-16 font-sans">
      <div className="bg-white border-b border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <Link
            href="/offline-stores"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#13b59b] hover:underline mb-2"
          >
            <ChevronLeft className="w-4 h-4" /> All Sellbar Stores
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f8f5] text-[#13b59b] text-xs font-bold">
            <StoreIcon className="w-3.5 h-3.5" /> Authorized Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Sellbar Stores in <span className="text-[#13b59b]">{formattedCity}</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
            Welcome to Sellbar {formattedCity}. Walk in today to evaluate your old smartphone or laptop, get spot payment via UPI or bank transfer, and explore certified refurbished electronics with 1-year warranty.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs max-w-3xl space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Sellbar Flagship Store - {formattedCity} Central
              </h2>
              <span className="inline-block mt-1 text-xs font-semibold text-[#13b59b] bg-[#e8f8f5] px-2.5 py-0.5 rounded-sm">
                Open Today • Walk-ins Welcome
              </span>
            </div>
            <div className="bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-lg shrink-0">
              ★ 4.9 (1,240+ reviews)
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600 border-y border-gray-100 py-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
              <span>Main High Street, Near Central Metro/Market, {formattedCity}, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-400 shrink-0" />
              <span>10:30 AM - 09:30 PM (Monday - Sunday)</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400 shrink-0" />
              <span>+91 72900 68900 / 1800-123-4567</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Available Store Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-gray-700">
              <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
                <span>Instant Sell Phone & Laptop Buyback</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
                <span>Refurbished iPhone & Android Devices</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
                <span>Instant Screen & Battery Replacement</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
                <span>Mobile Accessories, Chargers & Cases</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/sell"
              className="px-6 py-3 rounded-xl bg-[#13b59b] hover:bg-[#0ea38a] text-white font-bold text-sm shadow-xs transition"
            >
              Sell Device Online First
            </Link>
            <Link
              href="/buy-refurbished"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-sm transition"
            >
              View Refurbished Catalog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
