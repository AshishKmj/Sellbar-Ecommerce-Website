'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Tablet,
  Search,
  Battery,
  Sparkles,
  Star,
  Cpu,
  Layers,
} from 'lucide-react';

interface TabItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  display: string;
  processor: string;
  battery: string;
  storage: string;
  rating: number;
  tag: string;
}

const TABLETS: TabItem[] = [
  {
    id: 'ipad-pro-m4',
    name: 'Apple iPad Pro 11" (M4 OLED, 256GB)',
    brand: 'Apple',
    price: 99900,
    display: '11" Ultra Retina Tandem OLED 120Hz',
    processor: 'Apple M4 Chip (3nm)',
    battery: '10 Hours Web / Video',
    storage: '256GB / 8GB RAM',
    rating: 4.9,
    tag: 'Pro Standard',
  },
  {
    id: 'ipad-air-m2',
    name: 'Apple iPad Air 11" (M2, 128GB)',
    brand: 'Apple',
    price: 59900,
    display: '11" Liquid Retina IPS Display',
    processor: 'Apple M2 Chip',
    battery: '10 Hours',
    storage: '128GB / 8GB RAM',
    rating: 4.8,
    tag: 'Most Popular',
  },
  {
    id: 'galaxy-tab-s9-ultra',
    name: 'Samsung Galaxy Tab S9 Ultra (5G)',
    brand: 'Samsung',
    price: 108999,
    display: '14.6" Dynamic AMOLED 2X 120Hz',
    processor: 'Snapdragon 8 Gen 2 for Galaxy',
    battery: '11,200 mAh • 45W Fast Charge',
    storage: '256GB / 12GB RAM (S-Pen Included)',
    rating: 4.8,
    tag: 'Giant Canvas',
  },
  {
    id: 'galaxy-tab-s9-fe',
    name: 'Samsung Galaxy Tab S9 FE (Wi-Fi)',
    brand: 'Samsung',
    price: 34999,
    display: '10.9" 90Hz WQXGA Display',
    processor: 'Exynos 1380',
    battery: '8,000 mAh',
    storage: '128GB / 6GB RAM',
    rating: 4.6,
    tag: 'Student Choice',
  },
  {
    id: 'lenovo-tab-p12',
    name: 'Lenovo Tab P12 Pro with Keyboard Pack',
    brand: 'Lenovo',
    price: 32999,
    display: '12.7" 3K LTPS Display',
    processor: 'MediaTek Dimensity 7050',
    battery: '10,200 mAh Quad JBL Speakers',
    storage: '256GB / 8GB RAM',
    rating: 4.5,
    tag: 'Productivity King',
  },
  {
    id: 'xiaomi-pad-6',
    name: 'Xiaomi Pad 6 (Snapdragon 870)',
    brand: 'Xiaomi',
    price: 24999,
    display: '11" 2.8K 144Hz Dolby Vision',
    processor: 'Snapdragon 870',
    battery: '8840 mAh • 33W Fast Charge',
    storage: '128GB / 8GB RAM',
    rating: 4.7,
    tag: 'Value Beast',
  },
];

export default function FindNewTabletPage() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [search, setSearch] = useState('');

  const brands = ['All', 'Apple', 'Samsung', 'Lenovo', 'Xiaomi'];

  const filtered = TABLETS.filter((item) => {
    const matchesBrand = selectedBrand === 'All' || item.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f7f9fa] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#13b59b]">Home</Link>
          <span>/</span>
          <span className="text-gray-800 font-semibold">Find New Tablet</span>
        </div>

        {/* Header Hero */}
        <div className="bg-linear-to-r from-teal-900 via-teal-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white mb-8 shadow-xl">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-[#2bbb9e] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Tablet Finder & Comparison
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Find New Tablets &amp; iPads
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Compare Apple iPads, Samsung Galaxy Tabs, and Lenovo Android tablets. Upgrade your workstation or entertainment setup today.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedBrand === b
                    ? 'bg-[#13b59b] text-white shadow-md shadow-[#13b59b]/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tablet..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#13b59b]"
            />
          </div>
        </div>

        {/* Tablet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tab) => (
            <div
              key={tab.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-[#13b59b]">
                    {tab.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{tab.rating}</span>
                  </div>
                </div>

                <div className="h-32 flex items-center justify-center bg-gray-50 rounded-xl mb-4 text-gray-400">
                  <Tablet className="w-16 h-16 text-teal-600/70" />
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-1">
                  {tab.name}
                </h3>
                <div className="text-xl font-extrabold text-[#13b59b] mb-4">
                  ₹{tab.price.toLocaleString('en-IN')}
                </div>

                <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-gray-400" />
                    <span>{tab.display}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-gray-400" />
                    <span>{tab.processor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Battery className="w-3.5 h-3.5 text-gray-400" />
                    <span>{tab.battery} • {tab.storage}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                <Link
                  href="/sell-old-tablet"
                  className="flex-1 py-2.5 rounded-xl border border-[#13b59b] text-[#13b59b] text-center text-xs font-bold hover:bg-[#13b59b] hover:text-white transition"
                >
                  Sell Old Tablet
                </Link>
                <Link
                  href="/buy-refurbished-tablets"
                  className="flex-1 py-2.5 rounded-xl bg-[#13b59b] text-white text-center text-xs font-bold hover:bg-[#0fa088] transition shadow-md shadow-[#13b59b]/20"
                >
                  Buy Refurbished
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
