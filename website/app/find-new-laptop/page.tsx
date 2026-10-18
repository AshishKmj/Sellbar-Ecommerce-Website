'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Laptop,
  Search,
  Filter,
  Cpu,
  Battery,
  HardDrive,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle2,
} from 'lucide-react';

interface LaptopItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  processor: string;
  ram: string;
  storage: string;
  display: string;
  rating: number;
  tag: string;
}

const LAPTOPS: LaptopItem[] = [
  {
    id: 'mb-air-m2',
    name: 'Apple MacBook Air M2 (16GB, 512GB)',
    brand: 'Apple',
    price: 104900,
    processor: 'Apple M2 8-core CPU',
    ram: '16GB Unified',
    storage: '512GB SSD',
    display: '13.6" Liquid Retina',
    rating: 4.9,
    tag: 'Best Seller',
  },
  {
    id: 'dell-xps-13',
    name: 'Dell XPS 13 Plus (Core i7 13th Gen)',
    brand: 'Dell',
    price: 139990,
    processor: 'Intel Core i7-1360P',
    ram: '16GB LPDDR5',
    storage: '1TB NVMe SSD',
    display: '13.4" 3.5K OLED Touch',
    rating: 4.8,
    tag: 'Premium Ultrabook',
  },
  {
    id: 'thinkpad-x1',
    name: 'Lenovo ThinkPad X1 Carbon Gen 11',
    brand: 'Lenovo',
    price: 154990,
    processor: 'Intel Core i7-1355U',
    ram: '16GB DDR5',
    storage: '512GB SSD',
    display: '14" 2.8K OLED',
    rating: 4.8,
    tag: 'Business Grade',
  },
  {
    id: 'hp-pavilion-plus',
    name: 'HP Pavilion Plus 14 (Ryzen 7 7840U)',
    brand: 'HP',
    price: 76990,
    processor: 'AMD Ryzen 7 7840U AI',
    ram: '16GB LPDDR5x',
    storage: '1TB SSD',
    display: '14" 2.8K 120Hz OLED',
    rating: 4.7,
    tag: 'Best Value',
  },
  {
    id: 'asus-zenbook-14',
    name: 'ASUS Zenbook 14 OLED (Core Ultra 7)',
    brand: 'Asus',
    price: 99990,
    processor: 'Intel Core Ultra 7 155H',
    ram: '16GB LPDDR5X',
    storage: '1TB PCIe 4.0',
    display: '14" 3K 120Hz OLED',
    rating: 4.8,
    tag: 'AI Powered',
  },
  {
    id: 'samsung-galaxy-book4',
    name: 'Samsung Galaxy Book4 Pro 360',
    brand: 'Samsung',
    price: 142990,
    processor: 'Intel Core Ultra 7',
    ram: '16GB LPDDR5X',
    storage: '512GB SSD',
    display: '16" 3K AMOLED 120Hz',
    rating: 4.7,
    tag: '2-in-1 Touch',
  },
];

export default function FindNewLaptopPage() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [search, setSearch] = useState('');

  const brands = ['All', 'Apple', 'Dell', 'HP', 'Lenovo', 'Asus', 'Samsung'];

  const filtered = LAPTOPS.filter((item) => {
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
          <span className="text-gray-800 font-semibold">Find New Laptop</span>
        </div>

        {/* Header Hero */}
        <div className="bg-linear-to-r from-teal-900 via-teal-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white mb-8 shadow-xl">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-[#2bbb9e] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Laptop Finder & Comparison
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Find Your Perfect Laptop
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Compare top laptop brands, specs, benchmarks, and prices. Sell your old laptop on Sellbar for instant cash and upgrade seamlessly.
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
              placeholder="Search laptop name..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#13b59b]"
            />
          </div>
        </div>

        {/* Laptop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((laptop) => (
            <div
              key={laptop.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-[#13b59b]">
                    {laptop.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{laptop.rating}</span>
                  </div>
                </div>

                <div className="h-32 flex items-center justify-center bg-gray-50 rounded-xl mb-4 text-gray-400">
                  <Laptop className="w-16 h-16 text-teal-600/70" />
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-1">
                  {laptop.name}
                </h3>
                <div className="text-xl font-extrabold text-[#13b59b] mb-4">
                  ₹{laptop.price.toLocaleString('en-IN')}
                </div>

                <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-gray-400" />
                    <span>{laptop.processor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-3.5 h-3.5 text-gray-400" />
                    <span>{laptop.ram} • {laptop.storage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Battery className="w-3.5 h-3.5 text-gray-400" />
                    <span>{laptop.display}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                <Link
                  href="/sell-old-laptop"
                  className="flex-1 py-2.5 rounded-xl border border-[#13b59b] text-[#13b59b] text-center text-xs font-bold hover:bg-[#13b59b] hover:text-white transition"
                >
                  Sell Old Laptop
                </Link>
                <Link
                  href="/buy-refurbished-laptops"
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
