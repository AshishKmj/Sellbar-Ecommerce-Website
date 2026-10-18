import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Zap,
  Headphones,
  Smartphone,
  CheckCircle2,
  Star,
  ShoppingBag,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Buy Mobile & Laptop Accessories | Chargers, Cables, Cases & Audio',
  description:
    'Shop premium certified smartphone and laptop accessories. Fast 65W GaN chargers, braided Type-C cables, MagSafe cases, tempered glass, and Bluetooth earbuds at best prices.',
};

const ACCESSORIES = [
  {
    id: 'acc-1',
    title: 'Sellbar 65W GaN Fast Charger (Type-C + USB-A)',
    category: 'Chargers',
    price: '₹1,299',
    mrp: '₹2,499',
    discount: '-48%',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'acc-2',
    title: 'Braided 100W USB-C to USB-C Fast Charging Cable (2M)',
    category: 'Cables',
    price: '₹499',
    mrp: '₹999',
    discount: '-50%',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1595079672139-545c02557110?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'acc-3',
    title: 'Magnetic Wireless Charging Power Bank 10,000mAh',
    category: 'Power Banks',
    price: '₹1,899',
    mrp: '₹3,499',
    discount: '-46%',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1609592426861-f3b7f1680d94?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'acc-4',
    title: 'Active Noise Cancelling True Wireless Earbuds',
    category: 'Audio',
    price: '₹1,999',
    mrp: '₹4,999',
    discount: '-60%',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'acc-5',
    title: '9H Tempered Glass Screen Protector with Easy Align Frame',
    category: 'Protection',
    price: '₹299',
    mrp: '₹799',
    discount: '-63%',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'acc-6',
    title: 'Military Grade Drop-Tested Shockproof iPhone Case',
    category: 'Cases',
    price: '₹699',
    mrp: '₹1,499',
    discount: '-53%',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=400&q=80',
  },
];

export default function BuyAccessoriesPage() {
  const categories = ['All', 'Chargers', 'Cables', 'Power Banks', 'Audio', 'Cases', 'Protection'];

  return (
    <div className="bg-[#f7f9fa] min-h-screen pb-16 font-sans">
      <div className="bg-white border-b border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f8f5] text-[#13b59b] text-xs font-bold">
            <Zap className="w-3.5 h-3.5" /> 6 Months Replacement Warranty
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Certified <span className="text-[#13b59b]">Tech Accessories</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
            High performance charging blocks, cables, protective covers and audio gear designed to pair seamlessly with your smartphones and laptops.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((c, idx) => (
              <button
                key={idx}
                type="button"
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  idx === 0
                    ? 'bg-[#13b59b] text-white shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ACCESSORIES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 p-3 sm:p-4 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="text-[10px] font-bold text-[#13b59b] uppercase tracking-wider mb-1">
                  {item.category}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 leading-snug mb-2 min-h-9">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-700 mb-2">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{item.rating}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-xs font-bold text-red-500">{item.discount}</span>
                  <span className="text-sm sm:text-base font-black text-gray-900">{item.price}</span>
                  <span className="text-[11px] text-gray-400 line-through">{item.mrp}</span>
                </div>
                <button
                  type="button"
                  className="w-full py-2 bg-gray-900 hover:bg-[#13b59b] text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
