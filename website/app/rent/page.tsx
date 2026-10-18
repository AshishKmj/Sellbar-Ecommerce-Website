'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Gamepad2,
  Camera,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Truck,
  RotateCcw,
  Zap,
  ArrowRight,
  ChevronDown,
  Star,
  Check,
  Flame,
  Plus,
} from 'lucide-react';

interface GameBundle {
  id: string;
  title: string;
  genre: string;
  image: string;
  badge?: string;
  popular?: boolean;
}

interface CameraItem {
  id: string;
  title: string;
  specs: string;
  dailyRate: number;
  image: string;
  tag: string;
}

export default function RentPage() {
  const [activeTab, setActiveTab] = useState<'console' | 'camera'>('console');
  const [selectedGame, setSelectedGame] = useState<string>('gta5');
  const [selectedDays, setSelectedDays] = useState<number>(3);
  const [extraController, setExtraController] = useState<boolean>(true);
  const [selectedCity, setSelectedCity] = useState<string>('Delhi NCR');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // PS5 Game bundles matching Cashify Play's catalog
  const gameBundles: GameBundle[] = [
    {
      id: 'gta5',
      title: 'PS5 + GTA 5',
      genre: 'Open World / Action',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80',
      badge: 'TOP CHOICE',
      popular: true,
    },
    {
      id: 'psplus100',
      title: 'PS5 with 100+ Games',
      genre: 'PlayStation Plus Extra Library',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80',
      badge: '100+ AAA GAMES',
      popular: true,
    },
    {
      id: 'spiderman2',
      title: 'PS5 + Spider-Man 2',
      genre: 'Superhero / Action Adventure',
      image: 'https://images.unsplash.com/photo-1612287233207-6f6874ebf4ff?auto=format&fit=crop&w=500&q=80',
      badge: 'EXCLUSIVE',
      popular: true,
    },
    {
      id: 'fc25',
      title: 'PS5 + FIFA / EA Sports FC 25',
      genre: 'Football / Multiplayer Co-Op',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80',
      badge: 'CO-OP FAVORITE',
      popular: true,
    },
    {
      id: 'wukong',
      title: 'PS5 + Black Myth: Wukong',
      genre: 'Action RPG / Mythological',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80',
      badge: 'BLOCKBUSTER',
      popular: true,
    },
    {
      id: 'gow_rag',
      title: 'PS5 + God of War Ragnarök',
      genre: 'Norse Action / Epic Saga',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=500&q=80',
      badge: 'GAME OF THE YEAR',
      popular: false,
    },
    {
      id: 'tekken8',
      title: 'PS5 + Tekken 8',
      genre: 'Arcade Fighting / 2-Player',
      image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=500&q=80',
      badge: 'VERSUS PVP',
      popular: false,
    },
    {
      id: 'cricket24',
      title: 'PS5 + Cricket 24',
      genre: 'Official Ashes / T20 Cricket',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=500&q=80',
      badge: 'CRICKET SEASON',
      popular: false,
    },
    {
      id: 'eldenring',
      title: 'PS5 + Elden Ring',
      genre: 'Dark Fantasy / Open World',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80',
      badge: 'MASTERPIECE',
      popular: false,
    },
    {
      id: 'nogame',
      title: 'PS5 with No Game (Console Only)',
      genre: 'Use your own PSN account & games',
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80',
      badge: 'LOWEST RENT',
      popular: false,
    },
  ];

  // Cameras Catalog
  const cameraItems: CameraItem[] = [
    {
      id: 'canon-1500d',
      title: 'Canon EOS 1500D DSLR with 18-55mm IS II Lens',
      specs: '24.1 MP APS-C Sensor • Full HD 1080p • Wi-Fi / NFC • Battery & 64GB Card Included',
      dailyRate: 449,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80',
      tag: 'EASY TO USE',
    },
    {
      id: 'canon-700d-dual',
      title: 'Canon EOS 700D Dual Lens Kit (18-55mm + 55-250mm)',
      specs: 'Touchscreen LCD • Dual Zoom Lenses • Creative Portrait & Wildlife Rig',
      dailyRate: 599,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=500&q=80',
      tag: 'DUAL LENS',
    },
    {
      id: 'nikon-d5300',
      title: 'Nikon D5300 with 18-140mm VR All-in-One Lens',
      specs: '24.2 MP DX-Format • 39-Point AF • Built-in GPS & Wi-Fi • High Dynamic Range',
      dailyRate: 649,
      image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=500&q=80',
      tag: 'TRAVEL ZOOMS',
    },
    {
      id: 'gopro-hero10',
      title: 'GoPro HERO 10 Black 5.3K Action Camera Kit',
      specs: 'HyperSmooth 4.0 • 23MP Photos • Waterproof 33ft • 2 Extra Batteries + Chest Mount',
      dailyRate: 499,
      image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=500&q=80',
      tag: 'ADVENTURE READY',
    },
    {
      id: 'insta360-x3',
      title: 'Insta360 X3 360-Degree Action Camera (Invisible Selfie Stick)',
      specs: '5.7K 360 Active HDR Video • 72MP 360 Photos • FlowState Stabilization • 3m Stick',
      dailyRate: 699,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80',
      tag: 'VIRAL 360°',
    },
  ];

  // Pricing calculation ladder
  const calculateTotal = () => {
    let ratePerDay = 599;
    if (selectedDays >= 30) ratePerDay = 299;
    else if (selectedDays >= 14) ratePerDay = 389;
    else if (selectedDays >= 7) ratePerDay = 469;
    else if (selectedDays >= 5) ratePerDay = 499;
    else ratePerDay = 599;

    let total = ratePerDay * selectedDays;
    if (extraController) {
      total += selectedDays * 99;
    }
    return {
      ratePerDay,
      total,
      extraControllerFee: extraController ? selectedDays * 99 : 0,
    };
  };

  const pricing = calculateTotal();

  const faqs = [
    {
      q: 'Is there really zero security deposit required?',
      a: 'Yes! Sellbar Play offers zero security deposit for all verified Indian residents. A quick, instant 2-minute online KYC via DigiLocker / Aadhaar allows you to rent high-end consoles and cameras without blocking your credit limit or savings.',
    },
    {
      q: 'Which cities are currently eligible for doorstep rental delivery?',
      a: 'We deliver within 2-4 hours across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, and Chandigarh. Same-day delivery is available for bookings confirmed before 4:00 PM.',
    },
    {
      q: 'What is included inside the PS5 rental bundle?',
      a: 'You receive a pristine Sony PlayStation 5 Disc Edition console, 1 or 2 official DualSense Wireless Controllers, high-speed HDMI 2.1 cable, AC power cable, USB-C fast charging cable, and physical game discs or active PS Plus Extra subscription with 100+ titles.',
    },
    {
      q: 'How does pickup work when my rental period concludes?',
      a: 'Pickup is 100% free. On the final day of your rental tenure, our technician will visit your doorstep at your selected convenient time slot, verify the console or camera accessories, and complete the return right in front of you.',
    },
    {
      q: 'Can I extend my rental duration if I am in the middle of a game campaign?',
      a: 'Yes! You can extend your rental anytime directly from your Sellbar Dashboard or by dropping a WhatsApp message to our concierge team. Extended days are billed at your existing discounted daily ladder rate.',
    },
    {
      q: 'What if a game disc or controller suffers accidental damage?',
      a: 'All Sellbar Play rentals come with complimentary Basic Peace-of-Mind Shield covering minor superficial scuffs and normal wear-and-tear. We do not penalize gamers for standard thumbstick friction or natural battery degradation.',
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-16">
      {/* 1. HERO HEADER */}
      <div className="bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#13b59b]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#13b59b] transition">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold">Rent PS5 &amp; Cameras</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#13b59b]/20 border border-[#13b59b]/40 text-[#13b59b] text-xs font-bold px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Zero Deposit • Free Express Delivery • 100+ Games
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Rent a <span className="text-[#13b59b]">PS5 Console</span> or Camera Online
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Play next-gen 4K 120Hz PlayStation 5 titles or shoot with professional DSLRs from just{' '}
              <strong className="text-white font-black">₹299/day</strong>. Sanitized, 100% tested gear
              delivered to your doorstep in Delhi NCR, Mumbai, Bengaluru, Hyderabad &amp; Pune.
            </p>

            <div className="flex flex-wrap gap-4 pt-5 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> Zero Security Deposit on KYC
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> 2 DualSense Controllers Included
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#13b59b]" /> Free Doorstep Delivery &amp; Setup
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* 2. CATEGORY SWITCHER & CITY PICKER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('console')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeTab === 'console'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-[#13b59b]" /> Rent a PS5
            </button>
            <button
              onClick={() => setActiveTab('camera')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeTab === 'camera'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Camera className="w-4 h-4 text-[#13b59b]" /> Pick Your Camera
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Deliver to:</span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="text-xs font-bold bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:border-[#13b59b]"
            >
              {['Delhi NCR', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Ahmedabad'].map(
                (c) => (
                  <option key={c} value={c}>
                    {c} (Free Express)
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* 3. DURATION LADDER SELECTOR */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-[10px] font-black uppercase text-[#13b59b] tracking-wider">
                Flexible Rental Plans
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                Select Your Rental Duration
              </h2>
              <p className="text-xs text-slate-500">
                Longer rental durations unlock bigger per-day discounts automatically
              </p>
            </div>
            <div className="text-xs font-bold bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto">
              ✓ Save up to 50% on 30-day passes
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { days: 3, label: 'Weekend Pass', perDay: '₹599/day', total: '₹1,797' },
              { days: 5, label: 'Work Week Pass', perDay: '₹499/day', total: '₹2,495', tag: 'POPULAR' },
              { days: 7, label: 'Full Week', perDay: '₹469/day', total: '₹3,283' },
              { days: 14, label: 'Fortnight', perDay: '₹389/day', total: '₹5,446' },
              { days: 30, label: 'Hardcore Month', perDay: '₹299/day', total: '₹8,970', tag: 'BEST VALUE' },
            ].map((plan) => {
              const active = selectedDays === plan.days;
              return (
                <button
                  key={plan.days}
                  onClick={() => setSelectedDays(plan.days)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between relative ${
                    active
                      ? 'bg-slate-900 border-slate-900 text-white shadow-lg ring-2 ring-[#13b59b]'
                      : 'bg-white border-slate-200 hover:border-[#13b59b] hover:shadow-sm'
                  }`}
                >
                  {plan.tag && (
                    <span
                      className={`absolute -top-2.5 right-3 text-[9px] font-black px-2 py-0.5 rounded-full uppercase ${
                        active ? 'bg-[#13b59b] text-white' : 'bg-rose-500 text-white'
                      }`}
                    >
                      {plan.tag}
                    </span>
                  )}
                  <div>
                    <span
                      className={`text-[10px] font-bold uppercase ${
                        active ? 'text-[#13b59b]' : 'text-slate-400'
                      }`}
                    >
                      {plan.days} Days
                    </span>
                    <div className="text-base font-black mt-0.5">{plan.perDay}</div>
                    <div
                      className={`text-xs font-semibold ${
                        active ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      Total: {plan.total}
                    </div>
                  </div>
                  <div
                    className={`mt-3 text-[10px] font-medium ${
                      active ? 'text-slate-300' : 'text-slate-400'
                    }`}
                  >
                    {plan.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Add-on controller toggle */}
          {activeTab === 'console' && (
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#13b59b] flex items-center justify-center font-bold">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Add 2nd DualSense Wireless Controller for Co-Op Gaming
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Perfect for 2-player matches in FIFA / FC 25, Tekken 8, WWE &amp; Mortal Kombat
                  </div>
                </div>
              </div>
              <button
                onClick={() => setExtraController(!extraController)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  extraController
                    ? 'bg-[#13b59b] text-white'
                    : 'bg-white border border-slate-200 text-slate-700'
                }`}
              >
                {extraController ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Added (+₹99/day)
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" /> Add Controller (+₹99/day)
                  </>
                )}
              </button>
            </div>
          )}
        </section>

        {/* 4. MAIN PRODUCT PICKER: GAME BUNDLES OR CAMERAS */}
        {activeTab === 'console' ? (
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-[#13b59b]" /> Pick Your Game Bundle
                </h2>
                <p className="text-xs text-slate-500">
                  Select your headline game disc or choose the 100+ Games PS Plus Extra bundle
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {gameBundles.map((bundle) => {
                const isSelected = selectedGame === bundle.id;
                return (
                  <div
                    key={bundle.id}
                    onClick={() => setSelectedGame(bundle.id)}
                    className={`bg-white rounded-2xl border p-4 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'border-[#13b59b] shadow-xl ring-2 ring-[#13b59b]/20 -translate-y-1'
                        : 'border-slate-200 hover:border-slate-400 hover:shadow-md'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        {bundle.badge ? (
                          <span
                            className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider ${
                              isSelected
                                ? 'bg-[#13b59b] text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {bundle.badge}
                          </span>
                        ) : <span />}
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-[#13b59b] text-white flex items-center justify-center text-xs">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>

                      <div className="relative w-full h-36 my-2 rounded-xl overflow-hidden">
                        <Image
                          src={bundle.image}
                          alt={bundle.title}
                          fill
                          className="object-cover"
                          sizes="180px"
                        />
                      </div>

                      <h3 className="font-bold text-xs text-slate-900 mt-2 leading-snug">
                        {bundle.title}
                      </h3>
                      <p className="text-[10px] text-slate-500 mt-0.5">{bundle.genre}</p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#13b59b]">PS5 Disc 4K</span>
                      <span className="text-xs font-black text-slate-900">
                        ₹{pricing.ratePerDay}/day
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ) : (
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-[#13b59b]" /> Pick Your Camera
                </h2>
                <p className="text-xs text-slate-500">
                  Professional DSLRs, action cams &amp; 360-degree cameras with battery &amp; memory card included
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {cameraItems.map((cam) => (
                <div
                  key={cam.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:border-[#13b59b] hover:shadow-lg transition group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] bg-teal-50 text-[#13b59b] font-extrabold px-2 py-0.5 rounded">
                        {cam.tag}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">Tested &amp; Sanitized</span>
                    </div>

                    <div className="relative w-full h-44 my-3">
                      <Image
                        src={cam.image}
                        alt={cam.title}
                        fill
                        className="object-contain group-hover:scale-105 transition"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#13b59b] transition">
                      {cam.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{cam.specs}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-black text-slate-900">
                        ₹{cam.dailyRate} <span className="text-xs text-slate-400 font-normal">/ day</span>
                      </div>
                      <div className="text-[10px] text-emerald-600 font-bold">Zero Security Deposit</div>
                    </div>
                    <button
                      onClick={() => setBookingConfirmed(true)}
                      className="bg-[#13b59b] hover:bg-[#0f957f] text-white text-xs font-bold px-4 py-2 rounded-xl transition flex items-center gap-1 cursor-pointer"
                    >
                      Rent Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. INSTANT BOOKING SUMMARY CARD */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#13b59b]/20 text-[#13b59b] text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Instant Doorstep Booking
            </div>
            <h3 className="text-2xl font-black">
              {activeTab === 'console'
                ? `${gameBundles.find((g) => g.id === selectedGame)?.title} (${selectedDays} Days)`
                : `Professional Camera Rental (${selectedDays} Days)`}
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Includes {selectedDays} days rental period • Delivery to {selectedCity} • Free return
              pickup • Zero deposit after paperless KYC
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-baseline sm:items-center gap-4 shrink-0">
            <div>
              <div className="text-xs text-slate-400 font-medium">Estimated Total</div>
              <div className="text-3xl font-black text-white">
                ₹{pricing.total.toLocaleString('en-IN')}
              </div>
              <div className="text-[10px] text-[#13b59b] font-bold">
                (₹{Math.round(pricing.total / selectedDays)} / day all-inclusive)
              </div>
            </div>

            <button
              onClick={() => setBookingConfirmed(true)}
              className="bg-[#13b59b] hover:bg-[#0f957f] text-white font-black text-sm px-6 py-3.5 rounded-2xl shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              Confirm Booking <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* BOOKING MODAL */}
        {bookingConfirmed && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 text-slate-900 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-black">Rental Booking Confirmed!</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Your console and games are reserved. Our logistics team will call you to verify your
                  delivery address in {selectedCity}.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl space-y-2 text-xs border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Item:</span>
                  <span className="font-bold">
                    {activeTab === 'console'
                      ? gameBundles.find((g) => g.id === selectedGame)?.title
                      : 'Camera Kit'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-bold">{selectedDays} Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Controllers:</span>
                  <span className="font-bold">
                    {extraController ? '2x DualSense Wireless' : '1x DualSense Wireless'}
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-sm">
                  <span>Pay on Delivery:</span>
                  <span className="text-[#13b59b]">₹{pricing.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => setBookingConfirmed(false)}
                className="w-full bg-[#13b59b] hover:bg-[#0f957f] text-white font-bold text-xs py-3 rounded-xl transition cursor-pointer"
              >
                Back to Rentals
              </button>
            </div>
          </div>
        )}

        {/* 6. RENTING IS THIS EASY (4 STEPS) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Renting is This Easy</h2>
            <p className="text-xs text-slate-500 mt-1">
              Zero complicated paperwork. Experience next-gen entertainment in under 4 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'Book & Verify',
                desc: 'Select your game bundle and complete instant paperless DigiLocker KYC.',
              },
              {
                step: '02',
                title: 'Free Doorstep Delivery',
                desc: 'Our technician delivers the sanitized console directly to your doorstep in 2-4 hours.',
              },
              {
                step: '03',
                title: 'Play or Shoot Away',
                desc: 'Immerse yourself in 4K 120Hz gaming or shoot 4K cinematography with zero stress.',
              },
              {
                step: '04',
                title: 'We Pick It Up Free',
                desc: 'When your tenure finishes, our executive collects the kit free of charge.',
              },
            ].map((st, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <span className="text-2xl font-black text-[#13b59b] block mb-2">{st.step}</span>
                <h4 className="font-bold text-sm text-slate-900">{st.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FAQS */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold text-[#13b59b] uppercase tracking-wider">
              Press Start on Your Questions
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mt-1">
              Everything you need to know about console and camera rentals at Sellbar Play
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
