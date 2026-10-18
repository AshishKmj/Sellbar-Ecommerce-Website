import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ShieldCheck,
  Search,
  Store as StoreIcon,
  Smartphone,
  Wrench,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sellbar Stores Near You | 200+ Offline Stores Pan India',
  description:
    'Find your nearest Sellbar store in Delhi, Gurgaon, Noida, Bengaluru, Mumbai, Pune and 70+ cities across India. Sell phone for instant cash, buy certified refurbished devices with warranty, or get doorstep phone repair.',
};

interface StoreLocation {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  timings: string;
  rating: number;
  reviewsCount: number;
}

const STORES: StoreLocation[] = [
  {
    id: 'gurgaon-galleria',
    name: 'Sellbar Store - DLF Galleria Gurgaon',
    city: 'Gurgaon',
    area: 'DLF Phase 4',
    address: 'SF-48, 1st Floor, Galleria Market, DLF Phase 4, Sector 28, Gurgaon, Haryana 122002',
    phone: '+91 72900 68900',
    timings: '10:30 AM - 09:30 PM (All 7 Days)',
    rating: 4.8,
    reviewsCount: 1420,
  },
  {
    id: 'gurgaon-sector-14',
    name: 'Sellbar Store - Sector 14 Gurgaon',
    city: 'Gurgaon',
    area: 'Sector 14',
    address: 'SCO-32, Ground Floor, Main Huda Market, Sector 14, Gurgaon, Haryana 122001',
    phone: '+91 72900 68900',
    timings: '10:30 AM - 09:30 PM (All 7 Days)',
    rating: 4.7,
    reviewsCount: 980,
  },
  {
    id: 'delhi-cp',
    name: 'Sellbar Store - Connaught Place Delhi',
    city: 'Delhi',
    area: 'Connaught Place',
    address: 'Shop No. 12, Ground Floor, Inner Circle, Block F, Connaught Place, New Delhi 110001',
    phone: '+91 72900 68900',
    timings: '10:00 AM - 09:00 PM (All 7 Days)',
    rating: 4.9,
    reviewsCount: 2310,
  },
  {
    id: 'delhi-south-ex',
    name: 'Sellbar Store - South Extension Delhi',
    city: 'Delhi',
    area: 'South Extension',
    address: 'G-14, Part 1, Main Market, South Extension, New Delhi 110049',
    phone: '+91 72900 68900',
    timings: '10:30 AM - 09:30 PM (All 7 Days)',
    rating: 4.8,
    reviewsCount: 1840,
  },
  {
    id: 'noida-sector-18',
    name: 'Sellbar Store - Sector 18 Noida',
    city: 'Noida',
    area: 'Sector 18',
    address: 'Shop No. 8, Ocean Heights, Pocket J, Sector 18, Noida, Uttar Pradesh 201301',
    phone: '+91 72900 68900',
    timings: '11:00 AM - 09:30 PM (All 7 Days)',
    rating: 4.8,
    reviewsCount: 1650,
  },
  {
    id: 'bengaluru-indiranagar',
    name: 'Sellbar Store - 100ft Road Indiranagar',
    city: 'Bengaluru',
    area: 'Indiranagar',
    address: '#548, 100 Feet Rd, Stage 1, Indiranagar, Bengaluru, Karnataka 560038',
    phone: '+91 72900 68900',
    timings: '10:30 AM - 09:30 PM (All 7 Days)',
    rating: 4.9,
    reviewsCount: 2890,
  },
  {
    id: 'bengaluru-koramangala',
    name: 'Sellbar Store - Koramangala 5th Block',
    city: 'Bengaluru',
    area: 'Koramangala',
    address: '80 Feet Road, 5th Block, Koramangala, Bengaluru, Karnataka 560095',
    phone: '+91 72900 68900',
    timings: '10:30 AM - 09:30 PM (All 7 Days)',
    rating: 4.8,
    reviewsCount: 2150,
  },
  {
    id: 'mumbai-bandra',
    name: 'Sellbar Store - Linking Road Bandra',
    city: 'Mumbai',
    area: 'Bandra West',
    address: 'Shop No. 4, Linking Road, Near KFC, Bandra West, Mumbai, Maharashtra 400050',
    phone: '+91 72900 68900',
    timings: '11:00 AM - 10:00 PM (All 7 Days)',
    rating: 4.8,
    reviewsCount: 1970,
  },
  {
    id: 'pune-fc-road',
    name: 'Sellbar Store - FC Road Pune',
    city: 'Pune',
    area: 'Shivajinagar',
    address: 'Ferguson College Road, Deccan Gymkhana, Shivajinagar, Pune, Maharashtra 411004',
    phone: '+91 72900 68900',
    timings: '10:30 AM - 09:30 PM (All 7 Days)',
    rating: 4.7,
    reviewsCount: 1320,
  },
  {
    id: 'chennai-t-nagar',
    name: 'Sellbar Store - T Nagar Chennai',
    city: 'Chennai',
    area: 'T Nagar',
    address: 'Usman Road, T. Nagar, Chennai, Tamil Nadu 600017',
    phone: '+91 72900 68900',
    timings: '10:00 AM - 09:00 PM (All 7 Days)',
    rating: 4.7,
    reviewsCount: 1120,
  },
];

export default function OfflineStoresPage() {
  const cities = ['All', 'Gurgaon', 'Delhi', 'Noida', 'Bengaluru', 'Mumbai', 'Pune', 'Chennai'];

  return (
    <div className="bg-[#f7f9fa] min-h-screen pb-16 font-sans">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f8f5] text-[#13b59b] text-xs font-bold">
            <StoreIcon className="w-3.5 h-3.5" /> 200+ Stores Across 70+ Cities
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Find a <span className="text-[#13b59b]">Sellbar Store</span> Near You
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
            Walk into any authorized Sellbar store to sell your old phone on the spot, test certified refurbished iPhones and MacBooks, or get instant screen and battery repairs by certified technicians.
          </p>

          {/* City Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {cities.map((city, idx) => (
              <button
                key={idx}
                type="button"
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  idx === 0
                    ? 'bg-[#13b59b] text-white shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORES.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 leading-snug">
                      {store.name}
                    </h3>
                    <span className="inline-block mt-1 text-xs font-semibold text-[#13b59b] bg-[#e8f8f5] px-2 py-0.5 rounded-sm">
                      {store.area}, {store.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold px-2 py-1 rounded-md shrink-0">
                    <span>★ {store.rating}</span>
                    <span className="text-[10px] text-amber-700">({store.reviewsCount})</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>{store.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>{store.timings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>{store.phone}</span>
                  </div>
                </div>

                {/* Services Available */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Services Available
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-gray-700">
                    <span className="bg-gray-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#13b59b]" /> Instant Buyback Cash
                    </span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#13b59b]" /> Refurbished Phones
                    </span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#13b59b]" /> 30-Min Live Repairs
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-4 border-t border-gray-100">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-gray-300 text-gray-800 font-bold text-xs hover:bg-gray-50 transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
                <Link
                  href="/sell"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#13b59b] hover:bg-[#0ea38a] text-white font-bold text-xs shadow-xs transition"
                >
                  <span>Book Visit</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
