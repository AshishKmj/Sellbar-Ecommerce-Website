'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Filter,
  Smartphone,
  Zap,
  Camera,
  Battery,
  Cpu,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  RotateCcw,
  Check,
  Star,
  Layers,
  ChevronRight,
  TrendingDown,
  ShieldCheck,
} from 'lucide-react';

interface PhoneSpec {
  id: string;
  name: string;
  brand: string;
  price: number;
  tradeInValue: number;
  imageUrl: string;
  display: string;
  processor: string;
  camera: string;
  battery: string;
  category: 'flagship' | 'gaming' | 'camera' | 'budget';
  rating: number;
  reviewsCount: number;
  tag?: string;
}

const PHONE_CATALOG: PhoneSpec[] = [
  {
    id: 'p-ip16pro',
    name: 'Apple iPhone 16 Pro',
    brand: 'Apple',
    price: 119900,
    tradeInValue: 46000,
    imageUrl: '/products/iphone-14.webp',
    display: '6.3" Super Retina XDR OLED 120Hz',
    processor: 'Apple A18 Pro (3nm)',
    camera: '48MP Fusion + 48MP Ultra-Wide + 12MP 5x',
    battery: '3582 mAh • 25W MagSafe',
    category: 'flagship',
    rating: 4.9,
    reviewsCount: 420,
    tag: '⚡ Latest Flagship',
  },
  {
    id: 'p-s24u',
    name: 'Samsung Galaxy S24 Ultra 5G',
    brand: 'Samsung',
    price: 129999,
    tradeInValue: 48000,
    imageUrl: '/cashify/phone-samsung-s24.jpg',
    display: '6.8" Dynamic AMOLED 2X 120Hz Gorilla Armor',
    processor: 'Snapdragon 8 Gen 3 for Galaxy',
    camera: '200MP Main + 50MP 5x Periscope + 12MP',
    battery: '5000 mAh • 45W Fast Charging',
    category: 'flagship',
    rating: 4.9,
    reviewsCount: 380,
    tag: '🔥 AI Flagship',
  },
  {
    id: 'p-op12',
    name: 'OnePlus 12 5G (16GB/512GB)',
    brand: 'OnePlus',
    price: 64999,
    tradeInValue: 26000,
    imageUrl: '/cashify/phone-oneplus-12.jpg',
    display: '6.82" 2K 120Hz ProXDR AMOLED',
    processor: 'Snapdragon 8 Gen 3',
    camera: '50MP Sony LYT-808 + 64MP 3x Hasselblad',
    battery: '5400 mAh • 100W SUPERVOOC',
    category: 'gaming',
    rating: 4.8,
    reviewsCount: 290,
    tag: '🚀 Speed Beast',
  },
  {
    id: 'p-ip15',
    name: 'Apple iPhone 15 (128GB)',
    brand: 'Apple',
    price: 69900,
    tradeInValue: 28000,
    imageUrl: '/products/iphone-13.webp',
    display: '6.1" Super Retina XDR Dynamic Island',
    processor: 'Apple A16 Bionic',
    camera: '48MP Main + 12MP Ultra-Wide',
    battery: '3349 mAh • USB-C Fast Charge',
    category: 'camera',
    rating: 4.8,
    reviewsCount: 650,
  },
  {
    id: 'p-pixel8',
    name: 'Google Pixel 8 5G (128GB)',
    brand: 'Google',
    price: 62999,
    tradeInValue: 24000,
    imageUrl: '/products/google-pixel-7.webp',
    display: '6.2" Actua OLED 120Hz',
    processor: 'Google Tensor G3 & Titan M2',
    camera: '50MP Octa PD + 12MP Ultra-Wide Real Tone',
    battery: '4575 mAh • 27W Fast Charge',
    category: 'camera',
    rating: 4.7,
    reviewsCount: 180,
    tag: '📸 Best Camera',
  },
  {
    id: 'p-s23',
    name: 'Samsung Galaxy S23 5G',
    brand: 'Samsung',
    price: 49999,
    tradeInValue: 21000,
    imageUrl: '/products/samsung-s23.webp',
    display: '6.1" FHD+ Dynamic AMOLED 2X 120Hz',
    processor: 'Snapdragon 8 Gen 2 for Galaxy',
    camera: '50MP OIS + 12MP Ultra-Wide + 10MP 3x',
    battery: '3900 mAh • 25W Fast Charge',
    category: 'budget',
    rating: 4.7,
    reviewsCount: 310,
    tag: 'Compact Flagship',
  },
  {
    id: 'p-reno15',
    name: 'Oppo Reno 15 Pro 5G',
    brand: 'Oppo',
    price: 39999,
    tradeInValue: 15000,
    imageUrl: '/cashify/phone-oppo-reno15.jpg',
    display: '6.7" 120Hz Curved AMOLED 1.5K',
    processor: 'MediaTek Dimensity 8200',
    camera: '50MP Sony IMX890 OIS + 32MP Telephoto',
    battery: '5000 mAh • 80W SUPERVOOC',
    category: 'camera',
    rating: 4.6,
    reviewsCount: 145,
  },
  {
    id: 'p-oneplus11r',
    name: 'OnePlus 11R 5G (8GB/128GB)',
    brand: 'OnePlus',
    price: 27999,
    tradeInValue: 12000,
    imageUrl: '/products/oneplus-11r.webp',
    display: '6.74" 120Hz Super Fluid AMOLED',
    processor: 'Snapdragon 8+ Gen 1',
    camera: '50MP Sony IMX890 OIS + 8MP Ultra-Wide',
    battery: '5000 mAh • 100W SUPERVOOC',
    category: 'budget',
    rating: 4.6,
    reviewsCount: 420,
    tag: '⚡ Value King',
  },
];

export default function FindNewPhonePage() {
  const [selectedBrand, setSelectedBrand] = useState('ALL');
  const [selectedBudget, setSelectedBudget] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [tradeInActive, setTradeInActive] = useState(true);

  const filteredPhones = PHONE_CATALOG.filter((phone) => {
    const matchesSearch =
      phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phone.brand.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBrand =
      selectedBrand === 'ALL' || phone.brand.toUpperCase() === selectedBrand;

    let matchesBudget = true;
    if (selectedBudget === 'UNDER_30K') matchesBudget = phone.price <= 30000;
    else if (selectedBudget === '30K_60K') matchesBudget = phone.price > 30000 && phone.price <= 60000;
    else if (selectedBudget === 'ABOVE_60K') matchesBudget = phone.price > 60000;

    let matchesCat = true;
    if (selectedCategory !== 'ALL') matchesCat = phone.category === selectedCategory;

    return matchesSearch && matchesBrand && matchesBudget && matchesCat;
  });

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Find New Phone &amp; Compare</span>
        </div>
      </div>

      {/* Hero Header with Cashify Theme */}
      <section className="bg-linear-to-r from-[#0d8571] via-[#109f87] to-[#13b59b] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
                <Smartphone className="w-3.5 h-3.5 text-amber-300" />
                Smart Smartphone Discovery
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Find Your Perfect Next Phone, <br className="hidden sm:inline" />
                <span className="text-amber-300">Upgrade for Thousands Less</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
                Compare official specs, benchmark ratings, and real camera performance. Switch on the Sellbar Exchange toggle to see how much your old device cuts off the retail sticker price!
              </p>

              {/* Search Bar Input */}
              <div className="pt-2 max-w-xl">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by phone name, brand (e.g. iPhone 16 Pro, S24 Ultra)..."
                    className="w-full bg-white text-slate-900 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>
              </div>
            </div>

            {/* 3D Visual Hero */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 aspect-square bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="relative w-44 h-44 mb-2">
                  <Image
                    src="/services/find-new-phone.webp"
                    alt="Find New Smartphone"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="200px"
                    priority
                  />
                </div>
                <div className="bg-white text-slate-900 rounded-2xl py-2 px-4 shadow-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-black text-slate-900">Exchange Trade-In Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
        {/* Filter Controls Bar */}
        <section className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <SlidersHorizontal className="w-4 h-4 text-[#13b59b]" />
              Filter by Brand &amp; Specs:
            </div>

            {/* Trade-In Toggle */}
            <button
              onClick={() => setTradeInActive(!tradeInActive)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                tradeInActive
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              <TrendingDown className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sellbar Exchange Deduction:</span>
              <span className="font-extrabold text-emerald-700">
                {tradeInActive ? 'ENABLED (Up to -₹48K)' : 'DISABLED'}
              </span>
            </button>
          </div>

          {/* Filter Chips */}
          <div className="space-y-3">
            {/* Brands */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] font-bold text-slate-400 shrink-0">Brand:</span>
              {['ALL', 'APPLE', 'SAMSUNG', 'ONEPLUS', 'GOOGLE', 'OPPO'].map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                    selectedBrand === b
                      ? 'bg-[#13b59b] text-white shadow-sm'
                      : 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {b === 'ALL' ? 'All Brands' : b}
                </button>
              ))}
            </div>

            {/* Budget */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] font-bold text-slate-400 shrink-0">Budget:</span>
              {[
                { label: 'All Budgets', value: 'ALL' },
                { label: 'Under ₹30,000', value: 'UNDER_30K' },
                { label: '₹30,000 - ₹60,000', value: '30K_60K' },
                { label: 'Above ₹60,000', value: 'ABOVE_60K' },
              ].map((b) => (
                <button
                  key={b.value}
                  onClick={() => setSelectedBudget(b.value)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                    selectedBudget === b.value
                      ? 'bg-[#13b59b] text-white shadow-sm'
                      : 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            {/* Use Case */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] font-bold text-slate-400 shrink-0">Focus:</span>
              {[
                { label: 'All Categories', value: 'ALL' },
                { label: '👑 Flagships', value: 'flagship' },
                { label: '📸 Camera Beasts', value: 'camera' },
                { label: '⚡ Gaming & Speed', value: 'gaming' },
                { label: '💰 Budget Kings', value: 'budget' },
              ].map((c) => (
                <button
                  key={c.value}
                  onClick={() => setSelectedCategory(c.value)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                    selectedCategory === c.value
                      ? 'bg-[#13b59b] text-white shadow-sm'
                      : 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Showing {filteredPhones.length} Verified Smartphone Models
            </h2>
            <Link
              href="/sell"
              className="text-xs font-bold text-[#13b59b] hover:underline flex items-center gap-1"
            >
              Check Your Old Phone Value <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhones.map((phone) => {
              const effectivePrice = tradeInActive
                ? phone.price - phone.tradeInValue
                : phone.price;

              return (
                <div
                  key={phone.id}
                  className="group bg-white rounded-3xl border border-slate-200 hover:border-[#13b59b] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Top Badge */}
                  <div className="p-3.5 pb-0 flex items-center justify-between z-10">
                    <span className="bg-[#13b59b] text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {phone.tag || phone.brand}
                    </span>
                    <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{phone.rating}</span>
                    </div>
                  </div>

                  {/* Device Image Container */}
                  <div className="px-6 py-4">
                    <div className="relative w-full h-44 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                      <Image
                        src={phone.imageUrl}
                        alt={phone.name}
                        fill
                        className="object-contain drop-shadow-md"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4 pt-0 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 line-clamp-1 group-hover:text-[#13b59b] transition">
                        {phone.name}
                      </h3>

                      {/* Specs Matrix */}
                      <div className="mt-2.5 space-y-1.5 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-1.5 line-clamp-1">
                          <Smartphone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{phone.display}</span>
                        </div>
                        <div className="flex items-center gap-1.5 line-clamp-1">
                          <Cpu className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{phone.processor}</span>
                        </div>
                        <div className="flex items-center gap-1.5 line-clamp-1">
                          <Camera className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{phone.camera}</span>
                        </div>
                        <div className="flex items-center gap-1.5 line-clamp-1">
                          <Battery className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{phone.battery}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="pt-2 border-t border-slate-100">
                      {tradeInActive ? (
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xs text-slate-400">Effective:</span>
                            <span className="text-lg font-black text-emerald-600">
                              ₹{effectivePrice.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs text-slate-400 line-through">
                              ₹{phone.price.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <p className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded mt-1">
                            With Sellbar Old Phone Trade-In: Save ₹{phone.tradeInValue.toLocaleString('en-IN')}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <span className="text-lg font-black text-slate-900">
                            ₹{phone.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      )}

                      <Link
                        href={`/sell?upgrade=${phone.id}`}
                        className="mt-3 w-full bg-[#13b59b] hover:bg-[#0f957f] text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1 transition shadow-sm"
                      >
                        Upgrade With Old Phone <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
