'use client';

import React, { useState, useMemo } from 'react';
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
  ChevronDown,
  Sparkles,
  ArrowRight,
  Star,
} from 'lucide-react';

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
  services: string[];
  mapsUrl: string;
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
    services: ['Sell Phone', 'Buy Refurbished', '30-Min Repair'],
    mapsUrl: 'https://maps.google.com/?q=DLF+Galleria+Gurgaon',
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
    services: ['Sell Phone', 'Buy Refurbished', 'Screen Repair'],
    mapsUrl: 'https://maps.google.com/?q=Sector+14+Huda+Market+Gurgaon',
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
    services: ['Sell Phone', 'Buy Refurbished', 'Instant Repair', 'Console Exchange'],
    mapsUrl: 'https://maps.google.com/?q=Connaught+Place+Delhi',
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
    services: ['Sell Phone', 'Buy Refurbished', 'Battery Replacement'],
    mapsUrl: 'https://maps.google.com/?q=South+Extension+Delhi',
  },
  {
    id: 'delhi-rohini',
    name: 'Sellbar Store - Sector 7 Rohini',
    city: 'Delhi',
    area: 'Rohini',
    address: 'Shop No. 22, Aggarwal City Mall, Sector 7, Rohini, New Delhi 110085',
    phone: '+91 72900 68900',
    timings: '10:30 AM - 09:30 PM (All 7 Days)',
    rating: 4.7,
    reviewsCount: 1150,
    services: ['Sell Phone', 'Buy Refurbished', 'Screen Repair'],
    mapsUrl: 'https://maps.google.com/?q=Sector+7+Rohini+Delhi',
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
    services: ['Sell Phone', 'Buy Refurbished', '30-Min Repair'],
    mapsUrl: 'https://maps.google.com/?q=Sector+18+Noida',
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
    services: ['Sell Phone', 'Buy Refurbished', 'MacBook Repair', 'Accessories'],
    mapsUrl: 'https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru',
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
    services: ['Sell Phone', 'Buy Refurbished', 'Instant Repair'],
    mapsUrl: 'https://maps.google.com/?q=Koramangala+5th+Block+Bengaluru',
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
    services: ['Sell Phone', 'Buy Refurbished', 'Instant Cash Payout'],
    mapsUrl: 'https://maps.google.com/?q=Linking+Road+Bandra+Mumbai',
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
    services: ['Sell Phone', 'Buy Refurbished', '30-Min Repair'],
    mapsUrl: 'https://maps.google.com/?q=FC+Road+Pune',
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
    services: ['Sell Phone', 'Buy Refurbished', 'Screen Replacement'],
    mapsUrl: 'https://maps.google.com/?q=T+Nagar+Chennai',
  },
  {
    id: 'hyderabad-madhapur',
    name: 'Sellbar Store - Madhapur Hitec City',
    city: 'Hyderabad',
    area: 'Madhapur',
    address: 'Plot 45, Main Road, Beside Metro Station, Madhapur, Hyderabad, Telangana 500081',
    phone: '+91 72900 68900',
    timings: '10:30 AM - 09:30 PM (All 7 Days)',
    rating: 4.8,
    reviewsCount: 1750,
    services: ['Sell Phone', 'Buy Refurbished', 'Instant Repair'],
    mapsUrl: 'https://maps.google.com/?q=Madhapur+Hyderabad',
  },
];

export default function OfflineStoresPage() {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const cities = ['All', 'Delhi', 'Gurgaon', 'Noida', 'Bengaluru', 'Mumbai', 'Pune', 'Chennai', 'Hyderabad'];

  const filteredStores = useMemo(() => {
    return STORES.filter((store) => {
      if (selectedCity !== 'All' && store.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = store.name.toLowerCase().includes(q);
        const matchesAddress = store.address.toLowerCase().includes(q);
        const matchesArea = store.area.toLowerCase().includes(q);
        const matchesCity = store.city.toLowerCase().includes(q);
        if (!matchesName && !matchesAddress && !matchesArea && !matchesCity) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCity, searchQuery]);

  const faqs = [
    {
      q: 'Do I need an appointment before visiting a Sellbar store?',
      a: 'No prior appointment is needed! You can walk into any of our 200+ Sellbar stores during working hours (10:00 AM - 09:30 PM) for on-the-spot selling, refurbished gadget trials, or mobile repairs.',
    },
    {
      q: 'Can I get cash or instant UPI payout when selling my phone at the store?',
      a: 'Yes! Once our in-store technician completes the 2-minute diagnostic check, your valuation amount is transferred instantly to your bank account via UPI, IMPS, or paid in cash on the spot.',
    },
    {
      q: 'Can I test refurbished devices in person before purchasing?',
      a: 'Absolutely! Our stores carry live demonstration units of iPhones, Samsung Galaxy phones, MacBooks, and smartwatches. You can inspect screen quality, cosmetic grade, battery health, and test camera features before buying.',
    },
    {
      q: 'How fast are mobile repairs completed in-store?',
      a: 'Common repairs like screen replacement and battery replacement are completed in just 30 minutes right in front of you while you wait in our comfortable customer lounge.',
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-16 font-sans">
      {/* 1. HERO BREADCRUMB & HEADER */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <nav className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#13b59b] transition">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-semibold">Offline Stores</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-teal-50 text-[#13b59b] text-xs font-bold px-3 py-1 rounded-full mb-2">
                <StoreIcon className="w-3.5 h-3.5" /> 200+ Exclusive Experience Stores
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Find Our Offline Stores Near You
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Visit your nearest authorized Sellbar store to sell your old phone for instant cash, experience certified refurbished iPhones &amp; laptops, or get 30-minute doorstep repair.
              </p>
            </div>

            {/* Quick search input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, area or pincode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs font-medium pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-[#13b59b] focus:bg-white transition"
              />
            </div>
          </div>

          {/* City filter pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-400 font-semibold mr-1">City:</span>
            {cities.map((city) => {
              const active = selectedCity === city;
              return (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#13b59b] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {city}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* 2. STORES GRID */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {selectedCity === 'All' ? 'All Stores Across India' : `Stores in ${selectedCity}`}
              </h2>
              <p className="text-xs text-slate-500">
                {filteredStores.length} stores ready to serve you today
              </p>
            </div>
          </div>

          {filteredStores.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <StoreIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">No stores found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                We couldn&apos;t find any stores matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or switching cities.
              </p>
              <button
                onClick={() => {
                  setSelectedCity('All');
                  setSearchQuery('');
                }}
                className="mt-4 bg-[#13b59b] text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredStores.map((store) => (
                <div
                  key={store.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 leading-snug">
                          {store.name}
                        </h3>
                        <span className="inline-block mt-1 text-[10px] font-bold text-[#13b59b] bg-teal-50 px-2 py-0.5 rounded">
                          {store.area}, {store.city}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 text-xs font-bold px-2 py-1 rounded-md shrink-0">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{store.rating}</span>
                        <span className="text-[10px] text-amber-600">({store.reviewsCount})</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{store.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{store.timings}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{store.phone}</span>
                      </div>
                    </div>

                    {/* Services pills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {store.services.map((srv, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                        >
                          ✓ {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={store.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#13b59b] hover:bg-[#0f957f] text-white text-xs font-bold py-2 rounded-xl text-center transition flex items-center justify-center gap-1"
                    >
                      <Navigation className="w-3.5 h-3.5" /> Get Directions
                    </a>
                    <a
                      href={`tel:${store.phone.replace(/[^0-9]/g, '')}`}
                      className="px-3.5 py-2 border border-slate-200 text-slate-700 hover:border-slate-400 text-xs font-bold rounded-xl transition flex items-center gap-1"
                      aria-label="Call Store"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 3. WHY VISIT A STORE */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
              In-Store Experience
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Why Visit a Sellbar Store?</h2>
            <p className="text-xs text-slate-500 mt-1">
              Personalized guidance, live gadget trials, and instant cash settlements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: 'Live Device Touch & Feel',
                desc: 'Hold and test certified refurbished iPhones and MacBooks before deciding.',
              },
              {
                title: 'Instant Cash / UPI Payout',
                desc: 'Sell your device and receive 100% immediate payment in your bank or hands.',
              },
              {
                title: '30-Minute Live Repairs',
                desc: 'Watch our certified technician repair your screen or battery right in front of you.',
              },
              {
                title: 'Free Data Transfer',
                desc: 'Our staff helps you transfer your photos, contacts, and WhatsApp data securely.',
              },
            ].map((st, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-[#13b59b] font-black text-xs flex items-center justify-center mb-2">
                  ✓
                </div>
                <h4 className="font-bold text-sm text-slate-900">{st.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FAQS */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
              Store FAQs
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mt-1">
              Everything you need to know about visiting authorized Sellbar stores
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#13b59b]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
