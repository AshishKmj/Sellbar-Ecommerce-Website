import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wrench,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Laptop,
  ArrowRight,
  Zap,
  Cpu,
  HardDrive,
  Headphones,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Doorstep Laptop Repair Service | Screen, Battery, Keyboard & SSD Fix',
  description:
    'Affordable and certified laptop repairs at your doorstep. Apple MacBook, Dell, HP, Lenovo, Asus repair with 6 months warranty, OEM parts, and transparent pricing.',
};

export default function LaptopRepairPage() {
  const issues = [
    { title: 'Screen / Display Replacement', cost: 'From ₹2,499', icon: Laptop, desc: 'Cracked LCD, flicker, lines on screen or blank display' },
    { title: 'Battery Replacement', cost: 'From ₹1,899', icon: Zap, desc: 'Draining quickly, not charging, battery service notification' },
    { title: 'Keyboard & Trackpad Fix', cost: 'From ₹1,199', icon: Wrench, desc: 'Sticky keys, unresponsive touchpad, liquid damage' },
    { title: 'SSD & RAM Upgrade', cost: 'From ₹1,499', icon: HardDrive, desc: 'Speed up sluggish laptop with ultra-fast NVMe SSDs' },
    { title: 'Motherboard & Chip-Level Repair', cost: 'From ₹1,999', icon: Cpu, desc: 'No power, water damage, overheating, fan buzzing' },
    { title: 'Speaker, Mic & Webcam Fix', cost: 'From ₹899', icon: Headphones, desc: 'Muffled sound, webcam not detected, microphone failure' },
  ];

  const brands = ['Apple MacBook', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'MSI'];

  return (
    <div className="bg-[#f7f9fa] min-h-screen pb-16 font-sans">
      <div className="bg-linear-to-r from-[#0d2a26] via-[#103a35] to-[#124942] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/20 text-xs font-bold">
            <Clock className="w-3.5 h-3.5" /> Fast Doorstep Service
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Doorstep <span className="text-[#2bbb9e]">Laptop Repair</span> in 30 Minutes
          </h1>
          <p className="text-sm sm:text-base text-gray-200/90 max-w-2xl leading-relaxed">
            Expert technician arrives at your home or workplace with OEM parts. Live repair in front of you with up to 6 months comprehensive warranty.
          </p>

          <div className="flex flex-wrap gap-4 pt-3 text-xs font-semibold text-gray-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2bbb9e]" /> Free Doorstep Pickup &amp; Drop
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2bbb9e]" /> 6 Months Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2bbb9e]" /> 100% Genuine OEM Grade Spares
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Common Laptop Issues We Fix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#e8f8f5] flex items-center justify-center text-[#13b59b]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    <div className="text-sm font-extrabold text-[#13b59b] pt-1">{item.cost}</div>
                  </div>
                  <div className="pt-5 mt-4 border-t border-gray-100">
                    <Link
                      href="/repair"
                      className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-[#13b59b] text-white font-bold text-xs transition"
                    >
                      Book Repair Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          <h3 className="text-base font-bold text-gray-900 mb-4">Supported Laptop Brands</h3>
          <div className="flex flex-wrap gap-2">
            {brands.map((b, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
