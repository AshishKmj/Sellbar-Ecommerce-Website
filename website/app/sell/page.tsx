import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  Zap,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Star,
  BadgeCheck,
  ChevronRight,
} from 'lucide-react';
import { db } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Sell Old Gadgets Online & Get Instant Cash At Doorstep | Sellbar.in',
  description:
    'Sell used phones, laptops, smartwatches, tablets, gaming consoles, and smart TVs online for the highest cash price. Instant AI valuation and free doorstep pickup on Sellbar.',
  keywords: 'sell old phone, sell used electronics, cash for used gadgets, sell old laptop, sell old smartwatch',
};

export default function SellLandingPage() {
  const popularPhones = db.getDeviceModels({ categoryId: 'cat-phones' });
  const popularLaptops = db.getDeviceModels({ categoryId: 'cat-laptops' });

  const categories = [
    {
      title: 'Sell Phone',
      slug: 'sell-old-mobile-phone',
      desc: 'iPhones, Samsung & more',
      iconImg: '/sell-icons/sell-phone.webp',
    },
    {
      title: 'Sell Laptop',
      slug: 'sell-old-laptop',
      desc: 'MacBooks, Dell, HP & Lenovo',
      iconImg: '/sell-icons/sell-laptop.webp',
    },
    {
      title: 'Sell TV',
      slug: 'sell-old-television',
      desc: 'Smart 4K, OLED & QLED',
      iconImg: '/sell-icons/sell-tv.webp',
    },
    {
      title: 'Sell Tablet',
      slug: 'sell-old-tablet',
      desc: 'iPads & Galaxy Tabs',
      iconImg: '/sell-icons/sell-tablet.webp',
    },
    {
      title: 'Sell Smartwatch',
      slug: 'sell-old-smart-watch',
      desc: 'Apple Watch & Galaxy Watch',
      iconImg: '/sell-icons/sell-smartwatch.webp',
    },
    {
      title: 'Sell Gaming Consoles',
      slug: 'sell-old-gaming-consoles',
      desc: 'PS5, Xbox & Switch',
      iconImg: '/sell-icons/sell-gaming.webp',
    },
    {
      title: 'Sell Smart Speakers',
      slug: 'sell-old-smart-speaker',
      desc: 'HomePod, Echo & Nest',
      iconImg: '/sell-icons/sell-smart-speaker.webp',
    },
    {
      title: 'Sell More',
      slug: 'sell-old-dslr-camera',
      desc: 'DSLR, Earbuds & iMac',
      iconImg: '/sell-icons/sell-more.webp',
    },
  ];

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-gray-900 pb-20 antialiased selection:bg-[#13b59b]/20 selection:text-[#13b59b]">
      {/* Hero Header with Cashify Split Layout */}
      <section className="bg-white border-b border-gray-200 pt-10 pb-14 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13b59b]/10 text-[#13b59b] text-xs font-bold">
                <Zap className="w-3.5 h-3.5 fill-current" />
                India&apos;s #1 Recommerce Network
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Sell Used Gadgets for <span className="text-[#13b59b]">Best Market Price</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                Get an instant algorithmic valuation and free doorstep pickup with immediate cash or UPI
                payout across 1500+ Indian cities.
              </p>

              {/* 4 Trust Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#f8fbfa] border border-[#d2f3ed] rounded-2xl p-3.5 text-center">
                  <p className="text-xs text-gray-500 font-medium">Cities Covered</p>
                  <p className="text-base font-black text-gray-900 mt-0.5">1500+ Across India</p>
                </div>
                <div className="bg-[#f8fbfa] border border-[#d2f3ed] rounded-2xl p-3.5 text-center">
                  <p className="text-xs text-gray-500 font-medium">Gadgets Bought</p>
                  <p className="text-base font-black text-gray-900 mt-0.5">60 Lakh+ Devices</p>
                </div>
                <div className="bg-[#f8fbfa] border border-[#d2f3ed] rounded-2xl p-3.5 text-center">
                  <p className="text-xs text-gray-500 font-medium">Cash Disbursed</p>
                  <p className="text-base font-black text-[#13b59b] mt-0.5">₹1,200+ Crore</p>
                </div>
                <div className="bg-[#f8fbfa] border border-[#d2f3ed] rounded-2xl p-3.5 text-center">
                  <p className="text-xs text-gray-500 font-medium">Customer Rating</p>
                  <p className="text-base font-black text-amber-500 mt-0.5">4.8 / 5 Stars</p>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Illustration Graphic (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                <div className="absolute w-64 h-64 rounded-full bg-[#13b59b]/15 blur-3xl -z-10" />
                <img
                  src="https://s3ng.cashify.in/cashify/web/1bf13dcba9414a7ebe6e7a7afdc10f41.webp"
                  alt="Sell Used Electronics Online"
                  className="max-h-72 w-auto object-contain drop-shadow-xl animate-float"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Categories Row: Mint Rounded Boxes matching Cashify */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                Select Your Device Category
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Choose a category below to check instant market resale quotes
              </p>
            </div>
          </div>

          {/* 8 Cashify-style Mint Tiles */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={`/${cat.slug}`}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Mint Rounded Box with Subtle Drop Shadow */}
                <div className="w-full aspect-4/3 sm:aspect-square bg-[#edf7f5] border border-[#d8eee9] rounded-2xl flex items-center justify-center p-3 sm:p-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-[#13b59b]/50">
                  <img
                    src={cat.iconImg}
                    alt={cat.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-2 text-xs font-bold text-gray-800 group-hover:text-[#13b59b] transition-colors leading-tight">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* 3-Step Process with Cashify 3D Renders */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Sell on Sellbar in 3 Simple Steps
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Zero physical market hassle, zero bargaining, and 100% certified data safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8fbfa] border border-[#d2f3ed] rounded-2xl p-6 text-center space-y-4 hover:shadow-md transition-all duration-300">
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                <img
                  src="https://s3ng.cashify.in/estore/0cbe53723c3f453b9129991ca35df5f0.png"
                  alt="Step 1: Check Price"
                  className="w-18 h-18 object-contain"
                />
                <span className="absolute top-0 right-0 w-6 h-6 rounded-full bg-[#13b59b] text-white text-xs font-black flex items-center justify-center shadow-xs">
                  1
                </span>
              </div>
              <h3 className="text-sm font-bold text-gray-900">Instant AI Valuation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Choose your gadget model and specify its current physical condition to generate an instant quote.
              </p>
            </div>

            <div className="bg-[#f8fbfa] border border-[#d2f3ed] rounded-2xl p-6 text-center space-y-4 hover:shadow-md transition-all duration-300">
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                <img
                  src="https://s3ng.cashify.in/estore/11c121e3650747689b22301209b725a4.png"
                  alt="Step 2: Free Pickup"
                  className="w-18 h-18 object-contain"
                />
                <span className="absolute top-0 right-0 w-6 h-6 rounded-full bg-[#13b59b] text-white text-xs font-black flex items-center justify-center shadow-xs">
                  2
                </span>
              </div>
              <h3 className="text-sm font-bold text-gray-900">Free Doorstep Pickup</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pick your preferred time slot and address. Our certified technician visits you for free.
              </p>
            </div>

            <div className="bg-[#f8fbfa] border border-[#d2f3ed] rounded-2xl p-6 text-center space-y-4 hover:shadow-md transition-all duration-300">
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                <img
                  src="https://s3ng.cashify.in/estore/b9d74e87eedd4de3b47531e13a033fb2.png"
                  alt="Step 3: Get Paid"
                  className="w-18 h-18 object-contain"
                />
                <span className="absolute top-0 right-0 w-6 h-6 rounded-full bg-[#13b59b] text-white text-xs font-black flex items-center justify-center shadow-xs">
                  3
                </span>
              </div>
              <h3 className="text-sm font-bold text-gray-900">Instant Money in Hand</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Complete a transparent 5-minute spot audit and receive instant payment before handing over device.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Smartphones to Sell */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Popular Smartphones to Sell</h3>
            <Link
              href="/sell-old-mobile-phone"
              className="text-xs font-bold text-[#13b59b] hover:underline flex items-center gap-1"
            >
              View All Phones <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {popularPhones.slice(0, 4).map((m) => (
              <Link
                key={m.id}
                href={`/sell/device/${m.slug}`}
                className="group bg-white border border-gray-200 hover:border-[#13b59b] rounded-3xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-32 flex items-center justify-center bg-[#f8fafc] rounded-2xl mb-3 p-3 group-hover:bg-[#f0faf8] transition-colors">
                  <img
                    src={m.imageUrl}
                    alt={m.name}
                    className="max-h-24 max-w-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-[#13b59b]">
                    {m.name}
                  </h4>
                  <div className="text-xs sm:text-sm text-[#13b59b] font-black mt-1">
                    Get up to ₹{m.baseResalePrice.toLocaleString('en-IN')}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Laptops to Sell */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Popular Laptops to Sell</h3>
            <Link
              href="/sell-old-laptop"
              className="text-xs font-bold text-[#13b59b] hover:underline flex items-center gap-1"
            >
              View All Laptops <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {popularLaptops.slice(0, 4).map((m) => (
              <Link
                key={m.id}
                href={`/sell/device/${m.slug}`}
                className="group bg-white border border-gray-200 hover:border-[#13b59b] rounded-3xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-32 flex items-center justify-center bg-[#f8fafc] rounded-2xl mb-3 p-3 group-hover:bg-[#f0faf8] transition-colors">
                  <img
                    src={m.imageUrl}
                    alt={m.name}
                    className="max-h-24 max-w-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-[#13b59b]">
                    {m.name}
                  </h4>
                  <div className="text-xs sm:text-sm text-[#13b59b] font-black mt-1">
                    Get up to ₹{m.baseResalePrice.toLocaleString('en-IN')}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 6 3D Feature Cards */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Why Sell to Sellbar?
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              India&apos;s leading re-commerce brand built on instant payout and absolute data privacy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100 bg-[#fbfdfc] flex items-start gap-4">
              <img
                src="https://s3ng.cashify.in/estore/99953fd419e2416ba7dc25e0164372c3.png"
                alt="Best Price"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">Best Price Guarantee</h4>
                <p className="text-xs text-gray-600">
                  Algorithmic pricing based on 200+ secondary hubs across India.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-[#fbfdfc] flex items-start gap-4">
              <img
                src="https://s3ng.cashify.in/estore/acef68f939a84a8884640ae56f70867f.png"
                alt="Instant Payment"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">Instant Direct Payout</h4>
                <p className="text-xs text-gray-600">
                  Direct credit to UPI, GPay, PhonePe, or bank account before handover.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-[#fbfdfc] flex items-start gap-4">
              <img
                src="https://s3ng.cashify.in/estore/7989ad6b9431414481a1e9dcda098d45.png"
                alt="Free Doorstep Pickup"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">Free Doorstep Pickup</h4>
                <p className="text-xs text-gray-600">
                  Zero delivery or convenience fee across 1500+ Indian cities and towns.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-[#fbfdfc] flex items-start gap-4">
              <img
                src="https://s3ng.cashify.in/estore/3c0a0e2e0f4945c09e941a10bcf66e83.png"
                alt="Data Wipe"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">Factory-Grade Data Wipe</h4>
                <p className="text-xs text-gray-600">
                  NIST 800-88 cryptographic wiping with a verified certificate.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-[#fbfdfc] flex items-start gap-4">
              <img
                src="https://s3ng.cashify.in/estore/09bf461127cd48acb409f207e1664438.png"
                alt="Invoice"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">Valid Transaction Bill</h4>
                <p className="text-xs text-gray-600">
                  Legally binding digital invoice confirming lawful ownership transfer.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-[#fbfdfc] flex items-start gap-4">
              <img
                src="https://s3ng.cashify.in/estore/4413e4f7e0e448f88a73bd4e6047e93d.png"
                alt="Hassle Free"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">100% Hassle-Free</h4>
                <p className="text-xs text-gray-600">
                  No endless negotiations, zero scam calls, and safe certified technicians.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
