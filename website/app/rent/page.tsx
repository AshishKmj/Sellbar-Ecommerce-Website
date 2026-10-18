'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Gamepad2,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Truck,
  RotateCcw,
  Zap,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  Check,
  Laptop,
  Glasses,
} from 'lucide-react';

interface RentProduct {
  id: string;
  title: string;
  category: 'console' | 'laptop' | 'vr';
  baseDailyRate: number;
  securityDeposit: number;
  image: string;
  tag: string;
  gamesIncluded: string[];
  specs: string[];
}

const RENT_CATALOG: RentProduct[] = [
  {
    id: 'rent-ps5-slim',
    title: 'Sony PlayStation 5 Slim (Disc Edition)',
    category: 'console',
    baseDailyRate: 599,
    securityDeposit: 6000,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80',
    tag: '🔥 Most Rented',
    gamesIncluded: ["Marvel's Spider-Man 2", 'FC 25 (FIFA)', 'God of War Ragnarök'],
    specs: ['1TB Ultra-high speed SSD', '2x DualSense Wireless Controllers', '4K 120Hz HDR Output'],
  },
  {
    id: 'rent-xbox-series-x',
    title: 'Microsoft Xbox Series X (1TB)',
    category: 'console',
    baseDailyRate: 549,
    securityDeposit: 5500,
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=80',
    tag: 'Game Pass Included',
    gamesIncluded: ['Forza Horizon 5', 'Halo Infinite', 'Call of Duty Black Ops 6'],
    specs: ['12 Teraflops GPU', 'Xbox Game Pass Ultimate Active', '2x Wireless Controllers'],
  },
  {
    id: 'rent-meta-quest-3',
    title: 'Meta Quest 3 VR Headset (128GB)',
    category: 'vr',
    baseDailyRate: 699,
    securityDeposit: 7000,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80',
    tag: 'Next-Gen VR',
    gamesIncluded: ['Beat Saber', 'Batman Arkham Shadow', 'Superhot VR'],
    specs: ['4K+ Infinite Display', 'Full Color Passthrough Mixed Reality', 'Touch Plus Controllers'],
  },
  {
    id: 'rent-nintendo-switch',
    title: 'Nintendo Switch OLED Model',
    category: 'console',
    baseDailyRate: 399,
    securityDeposit: 4000,
    image: 'https://images.unsplash.com/photo-1578303512597-8be9abb67ff8?auto=format&fit=crop&w=600&q=80',
    tag: 'Family Favorite',
    gamesIncluded: ['Mario Kart 8 Deluxe', 'Zelda: Tears of the Kingdom', 'Super Smash Bros'],
    specs: ['7-inch Vibrant OLED Screen', 'Joy-Con Pair + Grip', 'Dock with Wired LAN Port'],
  },
  {
    id: 'rent-rog-zephyrus',
    title: 'ASUS ROG Zephyrus G16 (RTX 4070)',
    category: 'laptop',
    baseDailyRate: 1199,
    securityDeposit: 12000,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80',
    tag: 'Heavy Gaming & AI',
    gamesIncluded: ['Cyberpunk 2077 Installed', 'Black Myth: Wukong Ready'],
    specs: ['Intel Core Ultra 9', 'NVIDIA GeForce RTX 4070 8GB', '32GB LPDDR5X + 2.5K OLED 240Hz'],
  },
  {
    id: 'rent-macbook-pro-m3',
    title: 'Apple MacBook Pro 14" (M3 Pro / 18GB)',
    category: 'laptop',
    baseDailyRate: 1299,
    securityDeposit: 14000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    tag: 'Creative Pro',
    gamesIncluded: ['Final Cut Pro Suite', 'Logic Pro Installed'],
    specs: ['Apple M3 Pro Chip 11-Core', '18GB Unified Memory + 512GB SSD', 'Liquid Retina XDR Display'],
  },
];

const RENTAL_TIERS = [
  { days: 3, label: '3 Days', discount: 0, tag: 'Short Trip' },
  { days: 5, label: '4 - 6 Days', discount: 10, tag: 'Weekend Special' },
  { days: 7, label: '7+ Days', discount: 15, tag: 'MOST POPULAR', isPopular: true },
  { days: 30, label: 'Monthly Pass', discount: 25, tag: 'Max Value' },
];

export default function RentPortalPage() {
  const [selectedProduct, setSelectedProduct] = useState<RentProduct>(RENT_CATALOG[0]);
  const [selectedTier, setSelectedTier] = useState(RENTAL_TIERS[2]);
  const [bookedToast, setBookedToast] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Pricing calculation
  const dailyRateAfterDiscount = Math.round(
    selectedProduct.baseDailyRate * (1 - selectedTier.discount / 100)
  );
  const totalRentalCost = dailyRateAfterDiscount * selectedTier.days;
  const totalAmountPayable = totalRentalCost + selectedProduct.securityDeposit;

  const handleBook = () => {
    setBookedToast(true);
    setTimeout(() => setBookedToast(false), 3000);
  };

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-gray-800 font-sans pb-20">
      
      {/* Toast */}
      {bookedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#13b59b]" />
          <div>
            <div className="text-sm font-bold">Rental Booking Initiated!</div>
            <div className="text-xs text-gray-300">
              {selectedProduct.title} for {selectedTier.label} reserved. Doorstep KYC link sent to mobile.
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#13b59b] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium">Gaming & Gadget Rentals</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-linear-to-r from-purple-950 via-slate-900 to-teal-950 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-purple-300 uppercase tracking-wider">
              <Gamepad2 className="w-4 h-4" />
              <span>Sellbar Gaming & Hardware Rental Hub</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Rent PS5, Laptops & VR Headsets from ₹349/day
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
              Experience the latest gaming consoles and high-performance machines with zero long-term commitment. Free doorstep delivery, included controllers, pre-loaded games, and 100% refundable security deposit.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
                <span>Rent Longer, Save More (Up to 25% Off)</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
                <span>Instant Deposit Refund in 2h</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" />
                <span>Sanitized & Tested Equipment</span>
              </div>
            </div>
          </div>

          {/* Interactive Live Calculator Card */}
          <div className="lg:col-span-5 bg-white text-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-extrabold uppercase bg-teal-50 text-[#13b59b] px-2.5 py-1 rounded-md">
                Fast Rental Calculator
              </span>
              <span className="text-xs text-gray-400">Doorstep Delivery</span>
            </div>

            <div className="text-lg font-black text-gray-900 truncate mb-1">
              {selectedProduct.title}
            </div>

            {/* Duration Ladder (Matching Cashify Pattern) */}
            <div className="mt-3 mb-2 text-xs font-bold text-gray-700">
              Select Rental Duration:
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {RENTAL_TIERS.map((tier) => {
                const isSelected = selectedTier.days === tier.days;
                const tierRate = Math.round(selectedProduct.baseDailyRate * (1 - tier.discount / 100));

                return (
                  <button
                    key={tier.days}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer relative ${
                      isSelected
                        ? 'border-purple-600 bg-purple-50/50 ring-1 ring-purple-600'
                        : 'border-gray-200 hover:border-gray-400 bg-white'
                    }`}
                  >
                    {tier.isPopular && (
                      <span className="absolute -top-2 right-2 bg-purple-600 text-white text-[8px] font-bold px-1.5 py-0.2 rounded-full uppercase">
                        POPULAR
                      </span>
                    )}
                    <div className="text-xs font-bold text-gray-900">{tier.label}</div>
                    <div className="text-xs font-extrabold text-purple-700">
                      ₹{tierRate}
                      <span className="text-[10px] text-gray-400 font-normal">/day</span>
                    </div>
                    {tier.discount > 0 && (
                      <div className="text-[10px] font-semibold text-emerald-600">
                        Save {tier.discount}%
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Calculation Breakdown */}
            <div className="space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-3">
              <div className="flex items-center justify-between">
                <span>Rental Charge ({selectedTier.days} Days):</span>
                <strong className="text-gray-900">₹{totalRentalCost.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Refundable Security Deposit:</span>
                <strong className="text-emerald-600">₹{selectedProduct.securityDeposit.toLocaleString('en-IN')} (Refundable)</strong>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-2 text-sm">
                <span className="font-bold text-gray-900">Total Payable Now:</span>
                <span className="font-black text-xl text-purple-700">₹{totalAmountPayable.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleBook}
              className="mt-5 w-full py-3 bg-purple-600 hover:bg-purple-700 active:scale-[0.99] text-white font-bold text-xs rounded-xl transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Reserve & Schedule Delivery &rarr;</span>
            </button>
          </div>

        </div>
      </div>

      {/* Available Rental Inventory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Featured Rental Devices
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">Pick any product to test, play, or work</p>
          </div>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
            Free Games & Accessories Included
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RENT_CATALOG.map((item) => {
            const isCurrent = selectedProduct.id === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                className={`bg-white rounded-2xl border transition p-6 flex flex-col justify-between cursor-pointer ${
                  isCurrent
                    ? 'border-purple-600 shadow-xl ring-1 ring-purple-600'
                    : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      Deposit: ₹{item.securityDeposit.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="relative w-full h-44 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  <h3 className="text-base font-black text-gray-900 leading-snug">{item.title}</h3>

                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-purple-700">
                      ₹{item.baseDailyRate}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">/ day</span>
                  </div>

                  {/* Included Games / Software */}
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="text-[11px] font-bold text-gray-700 mb-1.5">Pre-installed Titles:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.gamesIncluded.map((g, i) => (
                        <span key={i} className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hardware specs */}
                  <div className="mt-3 space-y-1">
                    {item.specs.map((s, i) => (
                      <div key={i} className="text-[11px] text-gray-500 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#13b59b] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(item);
                      handleBook();
                    }}
                    className={`w-full py-2.5 font-bold text-xs rounded-xl transition text-center shadow-xs ${
                      isCurrent
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-gray-100 hover:bg-purple-50 text-gray-900 hover:text-purple-700'
                    }`}
                  >
                    {isCurrent ? 'Selected (Rent Now) &rarr;' : 'Select Device'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4 Pillars of Sellbar Rental */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Doorstep Delivery</h3>
              <p className="text-xs text-gray-500 mt-1">Delivered to your house in tamper-proof protective casing.</p>
            </div>

            <div className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Sanitized & Tested</h3>
              <p className="text-xs text-gray-500 mt-1">Every console, cable, and controller undergoes hygienic UV sanitization.</p>
            </div>

            <div className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Fast 2h Deposit Refund</h3>
              <p className="text-xs text-gray-500 mt-1">Security deposit is credited right back to your UPI or bank within 2 hours.</p>
            </div>

            <div className="p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">2 Controllers Included</h3>
              <p className="text-xs text-gray-500 mt-1">Play multiplayer immediately with friends and family straight out of the box.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-4">
            Rental Questions & Answers
          </h2>

          <div className="space-y-3">
            {[
              {
                q: 'What documents are required to rent?',
                a: 'A simple digital KYC with Government ID (Aadhaar or Driving License) and proof of address completed in under 2 minutes.',
              },
              {
                q: 'How does the duration discount work?',
                a: 'The longer you rent, the lower your per-day fee. For example, 4-6 day rentals receive a 10% discount, while 7+ day rentals receive 15% off.',
              },
              {
                q: 'When do I get my security deposit back?',
                a: 'Upon return pickup, our agent runs a quick 2-minute diagnostic check on the console and controllers. Your deposit is instantly refunded to your UPI or source account.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-gray-900 bg-white hover:bg-gray-50 transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-purple-600" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed bg-[#fbfcfc] border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
