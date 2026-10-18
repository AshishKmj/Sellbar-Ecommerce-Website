'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Recycle,
  TreePine,
  ShieldCheck,
  CheckCircle2,
  Leaf,
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
  Award,
  ChevronDown,
  Globe2,
  Cpu,
  FileCheck2,
  QrCode,
  Smartphone,
  AlertTriangle,
} from 'lucide-react';

export default function RecycleOldMobilePhonePage() {
  const [deviceModel, setDeviceModel] = useState('Dead / Broken Smartphone (Any Brand)');
  const [userName, setUserName] = useState('Rahul Sharma');
  const [city, setCity] = useState('Bengaluru');
  const [pincode, setPincode] = useState('560034');
  const [address, setAddress] = useState('Flat 304, Green Heights, HSR Layout');
  const [phone, setPhone] = useState('9876543210');
  const [pickupDate, setPickupDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Why should I recycle my dead or non-working phone instead of throwing it away?',
      a: 'Household trash ends up in unscientific landfills where lithium-ion batteries and lead-based solder leach toxic heavy metals into the soil and groundwater. By recycling through Sellbar’s CPCB-authorized downstream channels, precious materials like copper, cobalt, silver, and gold are responsibly reclaimed, eliminating pollution.',
    },
    {
      q: 'Is there any fee charged for the doorstep recycling pickup?',
      a: 'No, absolutely zero! Doorstep recycling pickup is 100% free across all our operational cities. In fact, Sellbar plants a tree sapling in your honor and emails you a digital Tree Planting Certificate with verified GPS coordinates.',
    },
    {
      q: 'Will my personal files or passwords remain safe on a dead phone?',
      a: 'Yes. Our CPCB authorized processing plant employs industrial mechanical shredding and magnetic degaussing compliant with NIST 800-88 standards, rendering all memory chips and NAND storage completely pulverized before metal smelting.',
    },
    {
      q: 'Can I recycle multiple old mobile phones, chargers, and dead tablets at once?',
      a: 'Yes! You can hand over multiple non-working smartphones, feature phones, adapters, dead power banks, and swollen lithium batteries to our visiting executive during the scheduled collection.',
    },
  ];

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#13b59b] font-semibold">Recycle Old Mobile Phone</span>
        </div>
      </div>

      {/* Hero Header with Eco Green / Teal Gradient */}
      <section className="bg-linear-to-r from-[#0b6b55] via-[#0d8569] to-[#13b59b] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
                <Leaf className="w-3.5 h-3.5 text-emerald-300" />
                Zero Landfill E-Waste Initiative
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Recycle Old Mobile Phone, <br className="hidden sm:inline" />
                <span className="text-emerald-300">Plant a Tree in Your Name</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
                Got a dead, liquid-damaged, or obsolete phone lying in your drawer? Book a 100% free doorstep pickup with Sellbar. We safely recycle toxic e-waste through CPCB-authorized channels and plant a geo-tagged sapling in your name.
              </p>

              {/* Eco Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <TreePine className="w-5 h-5 text-emerald-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">Trees Planted</p>
                    <p className="text-xs font-bold text-white">4.2M+ Geo-Tagged</p>
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <Recycle className="w-5 h-5 text-amber-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">CPCB Certified</p>
                    <p className="text-xs font-bold text-white">Zero Landfill</p>
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-cyan-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">Data Destruction</p>
                    <p className="text-xs font-bold text-white">NIST 800-88</p>
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-yellow-300 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/80 font-medium">Doorstep Pickup</p>
                    <p className="text-xs font-bold text-white">100% Free</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Visual Hero */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 aspect-square bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="relative w-44 h-44 mb-2">
                  <Image
                    src="/services/recycle.webp"
                    alt="E-Waste Recycling"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="200px"
                    priority
                  />
                </div>
                <div className="bg-white text-slate-900 rounded-2xl py-2 px-4 shadow-lg flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-black text-slate-900">Over 1,800 Tons E-Waste Recycled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        {/* Interactive Booking Form & Certificate Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pickup Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center space-y-5 py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                  <TreePine className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                    Doorstep Pickup Scheduled!
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    Thank You, {userName}!
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                    Our logistics executive will arrive at <strong>{address}</strong> on{' '}
                    <strong>{pickupDate}</strong> to collect your old device. Your geo-tagged Tree
                    Planting Certificate will be sent to WhatsApp number <strong>{phone}</strong>!
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#edf7f5] border border-[#d2f3ed] text-xs text-slate-700 max-w-sm mx-auto space-y-1">
                  <p className="font-bold text-[#13b59b]">What to do before pickup:</p>
                  <p>• Remove SIM and external memory cards if accessible.</p>
                  <p>• Keep chargers, adapters, or cables ready for recycling as well.</p>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#13b59b] hover:bg-[#0f957f] text-white font-bold py-2.5 px-6 rounded-xl text-xs transition"
                >
                  Schedule Another Device
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-[#13b59b] uppercase tracking-wider">
                    Free Doorstep Pickup
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Schedule E-Waste Recycling
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    We collect any brand, any condition — dead, water-damaged, broken, or scrap.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#13b59b] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number (For Certificate WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#13b59b] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Device Details / Condition *
                  </label>
                  <input
                    type="text"
                    required
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    placeholder="e.g. Broken Samsung J7 + 2 dead chargers"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#13b59b] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#13b59b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#13b59b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pickup Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#13b59b] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Complete address with landmark"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#13b59b] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#13b59b] hover:bg-[#0f957f] text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md cursor-pointer mt-2"
                >
                  Schedule 100% Free Pickup &amp; Plant a Tree <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  🌱 100% Free Doorstep Collection • No Hidden Costs • Official Green Certificate
                </p>
              </form>
            )}
          </div>

          {/* Interactive Live Tree Planting Certificate Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-linear-to-br from-emerald-900 to-slate-900 text-white p-6 sm:p-7 rounded-3xl border border-emerald-700/40 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-emerald-400">
                      Sellbar Green Initiative
                    </h3>
                    <p className="text-[10px] text-slate-300">Tree Planting Certificate</p>
                  </div>
                </div>
                <span className="text-[9px] bg-emerald-400/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-400/30">
                  CPCB Certified
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <p className="text-[11px] text-slate-300">
                  This certificate proudly honors:
                </p>
                <div className="text-xl font-black text-white tracking-wide border-b border-dashed border-emerald-500/40 pb-2">
                  {userName || 'Eco Champion'}
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed">
                  For championing environmental sustainability by responsibly recycling electronic waste and preventing hazardous heavy metals from polluting India’s soil.
                </p>

                <div className="bg-white/10 rounded-2xl p-3 grid grid-cols-2 gap-2 text-[10px] text-slate-200 border border-white/10">
                  <div>
                    <span className="text-slate-400 block">Tree Species:</span>
                    <strong className="text-emerald-300">Neem (Azadirachta indica)</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Eco Plantation Site:</span>
                    <strong className="text-white">Western Ghats Reforestation</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">GPS Coordinates:</span>
                    <strong className="text-cyan-300">12.9716° N, 77.5946° E</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Lifetime CO₂ Offset:</span>
                    <strong className="text-amber-300">~22 kg/Year</strong>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Serial: SB-ECO-{Math.abs(userName.length * 9481 + 10291)}</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <FileCheck2 className="w-3.5 h-3.5" /> Digitally Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Toxic Metals Prevented Callout */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 text-xs space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                What Happens If You Throw a Phone in the Trash?
              </h4>
              <p className="text-slate-500 leading-relaxed text-[11px]">
                A single smartphone battery contains enough cadmium and lithium to contaminate 600,000 liters of drinking water. Lead solder and mercury vaporize in open garbage burning, generating toxic air pollution. Sellbar ensures 100% closed-loop smelting.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Step Recycling Process */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#13b59b] tracking-wider uppercase">
              Simple 3-Step Journey
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">
              How Sellbar E-Waste Recycling Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Zero hassle, zero cost, maximum impact for our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-[#edf7f5] text-[#13b59b] flex items-center justify-center mb-1">
                <Smartphone className="w-10 h-10" />
              </div>
              <span className="w-7 h-7 rounded-full bg-[#13b59b] text-white font-black text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-sm text-slate-900">Book Free Pickup</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Fill the simple form above with your address and date. Any broken or dead tech qualifies.
              </p>
            </div>

            <div className="text-center space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
                <Recycle className="w-10 h-10" />
              </div>
              <span className="w-7 h-7 rounded-full bg-[#13b59b] text-white font-black text-xs flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-sm text-slate-900">Doorstep Collection</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Our logistics executive collects the device safely in anti-static eco-bins directly from your home.
              </p>
            </div>

            <div className="text-center space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-1">
                <TreePine className="w-10 h-10" />
              </div>
              <span className="w-7 h-7 rounded-full bg-[#13b59b] text-white font-black text-xs flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-sm text-slate-900">Plant a Tree &amp; Certificate</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                A geo-tagged sapling is planted, and you receive your personalized digital certificate on WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-xl font-black text-slate-900 mb-2">
            Frequently Asked Questions About E-Waste Recycling
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between hover:bg-slate-50 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#13b59b]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-[#f8fbfa]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
