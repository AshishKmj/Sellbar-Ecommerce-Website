'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Watch,
  Search,
  Battery,
  Sparkles,
  Star,
  Activity,
  Heart,
  Wifi,
} from 'lucide-react';

interface WatchItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  display: string;
  batteryLife: string;
  sensors: string;
  connectivity: string;
  rating: number;
  tag: string;
}

const WATCHES: WatchItem[] = [
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2 (GPS + Cellular)',
    brand: 'Apple',
    price: 89900,
    display: '49mm Titanium Sapphire OLED (3000 nits)',
    batteryLife: '36-72 Hours',
    sensors: 'ECG, Blood Oxygen, Depth Gauge, Temp',
    connectivity: 'Cellular LTE, Dual-freq GPS',
    rating: 4.9,
    tag: 'Ultra Flagship',
  },
  {
    id: 'apple-watch-s10',
    name: 'Apple Watch Series 10',
    brand: 'Apple',
    price: 46900,
    display: '46mm Wide-Angle OLED',
    batteryLife: '18-36 Hours (Fast Charge)',
    sensors: 'ECG, Sleep Apnea Detection, SpO2',
    connectivity: 'GPS + Bluetooth 5.3',
    rating: 4.8,
    tag: 'Latest Apple',
  },
  {
    id: 'galaxy-watch-ultra',
    name: 'Samsung Galaxy Watch Ultra (LTE)',
    brand: 'Samsung',
    price: 59999,
    display: '47mm Titanium Cushion Design Super AMOLED',
    batteryLife: '100 Hours (Power Saving)',
    sensors: 'BioActive Sensor, Sleep Coaching, BP',
    connectivity: 'LTE + Dual GPS',
    rating: 4.8,
    tag: 'Android King',
  },
  {
    id: 'galaxy-watch-7',
    name: 'Samsung Galaxy Watch 7',
    brand: 'Samsung',
    price: 29999,
    display: '44mm Sapphire Crystal AMOLED',
    batteryLife: '40 Hours',
    sensors: 'BioActive 2, AGEs Index, Sleep Care',
    connectivity: 'Bluetooth + Dual GPS',
    rating: 4.7,
    tag: 'Best Android Daily',
  },
  {
    id: 'oneplus-watch-2',
    name: 'OnePlus Watch 2 (Dual Engine)',
    brand: 'OnePlus',
    price: 24999,
    display: '1.43" AMOLED 60Hz',
    batteryLife: '100 Hours Smart Mode',
    sensors: 'Heart Rate, SpO2, Dual Engine Architecture',
    connectivity: 'Wear OS 4 + Dual Band GPS',
    rating: 4.6,
    tag: 'Battery Beast',
  },
  {
    id: 'fitbit-sense-2',
    name: 'Google Fitbit Sense 2',
    brand: 'Fitbit',
    price: 19999,
    display: '1.58" Color AMOLED',
    batteryLife: '6+ Days',
    sensors: 'cEDA Stress, ECG, SpO2, Skin Temp',
    connectivity: 'Built-in GPS + Bluetooth',
    rating: 4.5,
    tag: 'Health Focus',
  },
];

export default function FindNewSmartwatchPage() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [search, setSearch] = useState('');

  const brands = ['All', 'Apple', 'Samsung', 'OnePlus', 'Fitbit'];

  const filtered = WATCHES.filter((item) => {
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
          <span className="text-gray-800 font-semibold">Find New Smartwatch</span>
        </div>

        {/* Header Hero */}
        <div className="bg-linear-to-r from-teal-900 via-teal-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white mb-8 shadow-xl">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-[#2bbb9e] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Smartwatch Finder & Spec Comparer
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Find New Smartwatches
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Explore the latest Apple Watches, Samsung Galaxy Watches, and fitness bands with battery benchmarks and health sensor features.
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
              placeholder="Search smartwatch..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#13b59b]"
            />
          </div>
        </div>

        {/* Watch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((watch) => (
            <div
              key={watch.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-[#13b59b]">
                    {watch.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{watch.rating}</span>
                  </div>
                </div>

                <div className="h-32 flex items-center justify-center bg-gray-50 rounded-xl mb-4 text-gray-400">
                  <Watch className="w-16 h-16 text-teal-600/70" />
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-1">
                  {watch.name}
                </h3>
                <div className="text-xl font-extrabold text-[#13b59b] mb-4">
                  ₹{watch.price.toLocaleString('en-IN')}
                </div>

                <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-gray-400" />
                    <span>{watch.display}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Battery className="w-3.5 h-3.5 text-gray-400" />
                    <span>{watch.batteryLife}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-3.5 h-3.5 text-gray-400" />
                    <span className="line-clamp-1">{watch.sensors}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                <Link
                  href="/sell-old-smart-watch"
                  className="flex-1 py-2.5 rounded-xl border border-[#13b59b] text-[#13b59b] text-center text-xs font-bold hover:bg-[#13b59b] hover:text-white transition"
                >
                  Sell Old Watch
                </Link>
                <Link
                  href="/buy-refurbished-smart-watches"
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
