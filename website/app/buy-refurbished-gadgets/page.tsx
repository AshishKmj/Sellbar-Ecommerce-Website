'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  CheckCircle2,
  Zap,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Star,
  Check,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones,
  Gamepad2,
  Tv,
  Camera,
  Heart,
  Percent,
  Truck,
  Layers,
  ChevronRight,
  Award,
} from 'lucide-react';

interface RefurbItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  href: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  grade: 'Flawless' | 'Superb' | 'Good';
  warranty: string;
  rating: number;
  reviewsCount: number;
  image: string;
  tag?: string;
  specs: string[];
}

const FEATURED_DEALS: RefurbItem[] = [
  {
    id: 'rf-ip14',
    name: 'Apple iPhone 14 (128 GB) - Midnight',
    brand: 'Apple',
    category: 'phones',
    href: '/buy-refurbished-mobile-phones/sellbar-certified-apple-iphone-14-128gb-midnight-like-new',
    originalPrice: 69900,
    salePrice: 38999,
    discount: 44,
    grade: 'Flawless',
    warranty: '12 Months Warranty',
    rating: 4.9,
    reviewsCount: 382,
    image: '/products/iphone-14.webp',
    tag: '⚡ Super Deal',
    specs: ['6.1" Super Retina OLED', 'A15 Bionic 5-Core GPU', '100% Battery Health'],
  },
  {
    id: 'rf-s24',
    name: 'Samsung Galaxy S24 5G (8GB/256GB)',
    brand: 'Samsung',
    category: 'phones',
    href: '/buy-refurbished-mobile-phones/sellbar-certified-samsung-s24-ultra-512gb-titanium-gray-flawless',
    originalPrice: 79999,
    salePrice: 48499,
    discount: 39,
    grade: 'Flawless',
    warranty: '12 Months Warranty',
    rating: 4.8,
    reviewsCount: 194,
    image: '/cashify/phone-samsung-s24.jpg',
    tag: '🔥 Best Seller',
    specs: ['6.2" Dynamic AMOLED 2X', 'Galaxy AI Features', 'Snapdragon 8 Gen 3'],
  },
  {
    id: 'rf-ip13',
    name: 'Apple iPhone 13 (128 GB) - Starlight',
    brand: 'Apple',
    category: 'phones',
    href: '/buy-refurbished-mobile-phones/sellbar-certified-apple-iphone-13-128gb-starlight',
    originalPrice: 59900,
    salePrice: 32999,
    discount: 45,
    grade: 'Superb',
    warranty: '12 Months Warranty',
    rating: 4.9,
    reviewsCount: 520,
    image: '/products/iphone-13.webp',
    tag: 'Top Pick',
    specs: ['Cinematic Mode 1080p', 'Ceramic Shield Front', 'Clean IMEIs Verified'],
  },
  {
    id: 'rf-op12',
    name: 'OnePlus 12 5G (16GB/512GB) - Silky Black',
    brand: 'OnePlus',
    category: 'phones',
    href: '/buy-refurbished-mobile-phones/sellbar-certified-oneplus-12-16gb-512gb-silky-black',
    originalPrice: 69999,
    salePrice: 44999,
    discount: 36,
    grade: 'Flawless',
    warranty: '12 Months Warranty',
    rating: 4.8,
    reviewsCount: 142,
    image: '/cashify/phone-oneplus-12.jpg',
    specs: ['Snapdragon 8 Gen 3', '5400mAh • 100W Fast', 'Hasselblad 4th Gen'],
  },
  {
    id: 'rf-fold5',
    name: 'Samsung Galaxy Z Fold 5 5G (512GB)',
    brand: 'Samsung',
    category: 'phones',
    href: '/buy-refurbished-mobile-phones/samsung-galaxy-z-fold5-5g-refurbished',
    originalPrice: 164999,
    salePrice: 79999,
    discount: 52,
    grade: 'Superb',
    warranty: '12 Months Warranty',
    rating: 4.7,
    reviewsCount: 88,
    image: '/cashify/phone-samsung-fold5.jpg',
    tag: 'Huge 52% Off',
    specs: ['7.6" Foldable AMOLED', 'Flex Hinge Dual Rail', 'S-Pen Support'],
  },
  {
    id: 'rf-macbook-m3',
    name: 'Apple MacBook Pro 2023 A2991 M3 Max (1TB SSD)',
    brand: 'Apple',
    category: 'laptops',
    href: '/buy-refurbished-laptops/apple-macbook-pro-2023-a2991-m3-max-16-inch-refurbished',
    originalPrice: 365399,
    salePrice: 218499,
    discount: 40,
    grade: 'Flawless',
    warranty: '12 Months Warranty',
    rating: 4.9,
    reviewsCount: 76,
    image: '/cashify/laptop-macbook-pro-m3.webp',
    tag: 'Pro Tech',
    specs: ['Apple M3 Max Chip', 'Liquid Retina XDR', '22-Hour Battery Life'],
  },
  {
    id: 'rf-dell-5320',
    name: 'Dell Latitude 5320 Core i5 11th Gen (16GB/512GB)',
    brand: 'Dell',
    category: 'laptops',
    href: '/buy-refurbished-laptops/dell-latitude-5000-series-5320-intel-core-i5-refurbished',
    originalPrice: 55000,
    salePrice: 34499,
    discount: 37,
    grade: 'Superb',
    warranty: '6 Months Warranty',
    rating: 4.7,
    reviewsCount: 119,
    image: '/cashify/laptop-dell-5320.png',
    tag: '⚡ 37% Off',
    specs: ['Intel Core i5 Quad-Core', 'FHD Touch Anti-Glare', 'Backlit Keyboard'],
  },
  {
    id: 'rf-pixel7',
    name: 'Google Pixel 7 5G (128GB) - Obsidian',
    brand: 'Google',
    category: 'phones',
    href: '/buy-refurbished-mobile-phones/samsung-galaxy-s21-ultra-5g-refurbished',
    originalPrice: 59999,
    salePrice: 26999,
    discount: 55,
    grade: 'Good',
    warranty: '12 Months Warranty',
    rating: 4.6,
    reviewsCount: 210,
    image: '/cashify/phone-samsung-s21.jpg',
    specs: ['Google Tensor G2', 'Real Tone 50MP Camera', 'Clean Stock Android'],
  },
];

const CATEGORIES = [
  {
    title: 'Refurbished Phones',
    sub: 'iPhones, Galaxy, OnePlus',
    href: '/buy-refurbished-mobile-phones',
    image: '/services/buy-phone.webp',
    discount: 'Up to 70% Off',
    badge: '120+ Models',
  },
  {
    title: 'Refurbished Laptops',
    sub: 'MacBooks, ThinkPad, Dell',
    href: '/buy-refurbished-laptops',
    image: '/services/buy-laptops.webp',
    discount: 'Starting ₹16,999',
    badge: '60+ Models',
  },
  {
    title: 'Refurbished Smartwatches',
    sub: 'Apple Watch, Galaxy Watch',
    href: '/buy-refurbished-smart-watches',
    image: '/services/buy-smartwatches.webp',
    discount: 'Up to 65% Off',
    badge: '40+ Models',
  },
  {
    title: 'Refurbished Tablets',
    sub: 'iPad Pro, Galaxy Tabs',
    href: '/buy-refurbished-tablets',
    image: '/services/buy-tablets.webp',
    discount: 'Starting ₹11,999',
    badge: '35+ Models',
  },
  {
    title: 'Gaming Consoles',
    sub: 'PS5, PS4 Pro, Xbox Series X',
    href: '/buy-refurbished-gaming-consoles',
    image: '/services/buy-gaming.webp',
    discount: 'Up to 45% Off',
    badge: '20+ Models',
  },
  {
    title: 'DSLR & Mirrorless',
    sub: 'Sony Alpha, Canon, Nikon',
    href: '/buy-refurbished-dslr-cameras',
    image: '/services/buy-cameras.webp',
    discount: 'Tested Optics',
    badge: '15+ Models',
  },
];

export default function BuyRefurbishedGadgetsPage() {
  const [selectedBrand, setSelectedBrand] = useState('ALL');
  const [selectedGrade, setSelectedGrade] = useState<'Flawless' | 'Superb' | 'Good'>('Flawless');
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredDeals = FEATURED_DEALS.filter((item) => {
    if (selectedBrand === 'ALL') return true;
    if (selectedBrand === 'LAPTOPS') return item.category === 'laptops';
    return item.brand.toUpperCase() === selectedBrand;
  });

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b] transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Buy Refurbished Gadgets</span>
        </div>
      </div>

      {/* Hero Banner Section with Cashify's Teal Split Layout */}
      <section className="bg-linear-to-r from-[#0d8571] via-[#109f87] to-[#13b59b] text-white py-10 sm:py-14 relative overflow-hidden shadow-sm">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 -bottom-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Sellbar Certified Re-Commerce
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Refurbished Tech That Feels Brand New. <br className="hidden sm:inline" />
                <span className="text-amber-300">Up to 70% Off</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
                Buy certified renewed smartphones, MacBooks, iPads and smartwatches with confidence. Every gadget undergoes our 32-point hardware inspection, sanitized factory packaging, and includes a comprehensive 12-month warranty with 7-day replacement.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">Warranty</p>
                    <p className="text-xs font-bold text-white">12 Months Full</p>
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">Testing</p>
                    <p className="text-xs font-bold text-white">32-Point Audit</p>
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <RotateCcw className="w-5 h-5 text-cyan-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">Return Policy</p>
                    <p className="text-xs font-bold text-white">7-Day Free Return</p>
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-yellow-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">Payment</p>
                    <p className="text-xs font-bold text-white">No-Cost EMI &amp; COD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual Display with Cashify 3D Assets */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-84 aspect-square bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="relative w-48 h-48 mb-2">
                  <Image
                    src="/services/buy-phone.webp"
                    alt="Refurbished Smartphone Showcase"
                    fill
                    className="object-contain drop-shadow-2xl animate-pulse"
                    sizes="200px"
                    priority
                  />
                </div>
                <div className="bg-white text-slate-900 rounded-2xl py-2 px-4 shadow-lg flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-black text-slate-900">Over 2.4 Million Gadgets Sold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        {/* Category Carousel / Grid with 3D Icons */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Explore Refurbished Categories
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Guaranteed working condition with genuine accessories &amp; box
              </p>
            </div>
            <Link
              href="/buy-refurbished"
              className="text-xs font-bold text-[#13b59b] hover:text-[#0f957f] flex items-center gap-1 group"
            >
              View All Categories{' '}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="group bg-white rounded-2xl p-4 border border-slate-200 hover:border-[#13b59b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 bg-emerald-50 text-emerald-700 font-bold text-[9px] px-1.5 py-0.5 rounded-full border border-emerald-200">
                  {cat.badge}
                </div>
                <div className="w-20 h-20 relative my-2 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#13b59b] transition line-clamp-1">
                  {cat.title}
                </h3>
                <span className="text-[11px] font-extrabold text-[#13b59b] mt-1">
                  {cat.discount}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Deals Grid with Filter Tabs */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#13b59b] mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Handpicked Inventory
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Trending Refurbished Deals
              </h2>
            </div>

            {/* Brand Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {[
                { label: 'All Gadgets', value: 'ALL' },
                { label: 'Apple iPhones', value: 'APPLE' },
                { label: 'Samsung Galaxy', value: 'SAMSUNG' },
                { label: 'OnePlus', value: 'ONEPLUS' },
                { label: 'Laptops', value: 'LAPTOPS' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedBrand(tab.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                    selectedBrand === tab.value
                      ? 'bg-[#13b59b] text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredDeals.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-[#13b59b] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Top Badges */}
                  <div className="p-3.5 pb-0 flex items-center justify-between z-10">
                    <span className="bg-[#13b59b] text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {product.tag || `${product.discount}% OFF`}
                    </span>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="w-8 h-8 rounded-full bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition flex items-center justify-center cursor-pointer"
                      aria-label="Wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? 'fill-rose-500 text-rose-500' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Device Image Container */}
                  <Link href={product.href || `/buy-refurbished?id=${product.id}`} className="px-6 py-4 block">
                    <div className="relative w-full h-44 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-md"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </Link>

                  {/* Device Details */}
                  <div className="p-4 pt-0 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating & Grade Strip */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                          <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                          <span>{product.rating}</span>
                          <span className="text-slate-400">({product.reviewsCount})</span>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            product.grade === 'Flawless'
                              ? 'bg-emerald-100 text-emerald-900 font-extrabold'
                              : product.grade === 'Superb'
                              ? 'bg-blue-100 text-blue-900'
                              : 'bg-amber-100 text-amber-900'
                          }`}
                        >
                          Grade: {product.grade}
                        </span>
                      </div>

                      <h3 className="font-bold text-sm text-slate-900 line-clamp-2 leading-snug group-hover:text-[#13b59b] transition">
                        <Link href={product.href || `/buy-refurbished?id=${product.id}`}>{product.name}</Link>
                      </h3>

                      {/* Specs pills */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.specs.slice(0, 2).map((sp, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded"
                          >
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and Action */}
                    <div className="pt-2 border-t border-slate-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-slate-900">
                          ₹{product.salePrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs font-bold text-emerald-600">
                          Save ₹{(product.originalPrice - product.salePrice).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium mt-0.5 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#13b59b]" />
                        {product.warranty} • Free Doorstep Delivery
                      </p>

                      <Link
                        href={product.href || `/buy-refurbished?id=${product.id}`}
                        className="mt-3 w-full bg-[#13b59b] hover:bg-[#0f957f] text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1 transition shadow-sm"
                      >
                        Buy Certified <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sellbar Grade Comparison Matrix (Cashify Style) */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#13b59b] tracking-wider uppercase">
              Transparent Refurbished Grading
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Understanding Sellbar Cosmetic Grades
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Every device is 100% functionally certified regardless of exterior cosmetics. We grade purely on external finish so you pick the price point that suits you best.
            </p>

            {/* Interactive Grade Tab Selector */}
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl gap-1 mt-4">
              {(['Flawless', 'Superb', 'Good'] as const).map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    selectedGrade === grade
                      ? 'bg-[#13b59b] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Grade {grade === 'Flawless' ? 'A' : grade === 'Superb' ? 'B' : 'C'}: {grade}
                </button>
              ))}
            </div>
          </div>

          {/* Active Grade Detailed Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div
              className={`rounded-2xl p-5 border transition-all ${
                selectedGrade === 'Flawless'
                  ? 'border-[#13b59b] bg-[#edf7f5] shadow-md ring-2 ring-[#13b59b]/20'
                  : 'border-slate-200 bg-white opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black">
                  Grade A: Flawless
                </span>
                <span className="text-xs font-bold text-emerald-800">Like New (99%)</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Zero Visible Scratches</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Looks and feels identical to a freshly unboxed device. Screen and body have no visible blemishes. Battery health is guaranteed 90%+.
              </p>
              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Pristine display with no pixel wear
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Full 12-Month Comprehensive Warranty
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Original brand accessories included
                </li>
              </ul>
            </div>

            <div
              className={`rounded-2xl p-5 border transition-all ${
                selectedGrade === 'Superb'
                  ? 'border-[#13b59b] bg-[#edf7f5] shadow-md ring-2 ring-[#13b59b]/20'
                  : 'border-slate-200 bg-white opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black">
                  Grade B: Superb
                </span>
                <span className="text-xs font-bold text-blue-800">Best Value (90%)</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Faint Hairline Marks Only</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Minimal micro-scratches on outer chassis that are invisible from arm’s length. Display glass is pristine with zero deep gouges or touch issues.
              </p>
              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" /> 100% factory hardware tested
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Up to 12 Months Warranty support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Save 40% to 55% over new retail
                </li>
              </ul>
            </div>

            <div
              className={`rounded-2xl p-5 border transition-all ${
                selectedGrade === 'Good'
                  ? 'border-[#13b59b] bg-[#edf7f5] shadow-md ring-2 ring-[#13b59b]/20'
                  : 'border-slate-200 bg-white opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-black">
                  Grade C: Good
                </span>
                <span className="text-xs font-bold text-amber-800">Pocket Saver (80%)</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Visible Scuffs, Heavy Savings</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Moderate cosmetic wear or body scuffs along edges, ideal if you use a case anyway! Fully certified motherboard, speakers, and cameras.
              </p>
              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Complete 32-point inspection passed
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 6 Months Comprehensive Warranty
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Maximum savings: up to 70% off
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 32-Point Quality Inspection Checklist */}
        <section className="bg-linear-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold mb-3">
              <Award className="w-3.5 h-3.5" /> Technical Precision
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              Sellbar 32-Point Technical Inspection
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Every gadget entering our refurbishing labs undergoes automated and manual diagnostic testing by certified hardware engineers before earning the Sellbar Assured badge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-3">
              <h3 className="font-bold text-sm text-emerald-400 flex items-center gap-2">
                <Smartphone className="w-4 h-4" /> Screen &amp; Touch
              </h3>
              <ul className="text-xs text-slate-200 space-y-1.5">
                <li>• Multi-touch response audit</li>
                <li>• Zero dead pixel verification</li>
                <li>• Backlight uniformity check</li>
                <li>• TrueTone &amp; 120Hz display refresh</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-3">
              <h3 className="font-bold text-sm text-cyan-400 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Battery &amp; Thermal
              </h3>
              <ul className="text-xs text-slate-200 space-y-1.5">
                <li>• Health capacity &gt; 85% guaranteed</li>
                <li>• Charge cycle &amp; fast charge input</li>
                <li>• Zero battery swelling check</li>
                <li>• Heat dissipation thermal stress</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-3">
              <h3 className="font-bold text-sm text-amber-400 flex items-center gap-2">
                <Camera className="w-4 h-4" /> Optics &amp; Audio
              </h3>
              <ul className="text-xs text-slate-200 space-y-1.5">
                <li>• Autofocus &amp; OIS stabilization</li>
                <li>• Front &amp; rear ultra-wide cameras</li>
                <li>• Stereo earpiece &amp; mic clarity</li>
                <li>• Zero audio crackling or distortion</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-3">
              <h3 className="font-bold text-sm text-rose-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Cellular &amp; Security
              </h3>
              <ul className="text-xs text-slate-200 space-y-1.5">
                <li>• 5G / 4G dual SIM VoLTE calling</li>
                <li>• Wi-Fi 6, Bluetooth &amp; GPS locking</li>
                <li>• Face ID &amp; Fingerprint biometrics</li>
                <li>• NIST 800-88 Clean IMEI certification</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Buy Refurbished Callout Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#13b59b]/15 text-[#13b59b] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Free Insured Doorstep Delivery</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Shipped in tamper-evident sealed packaging across 18,000+ pin codes in India with express dispatch.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">7-Day Hassle-Free Replacement</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Not fully satisfied with cosmetic look or feel? Enjoy a seamless 7-day doorstep replacement or refund.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Instant No-Cost EMI Options</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Avail 0% interest EMI on all major credit and debit cards, plus special cash exchange trade-in bonuses.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
