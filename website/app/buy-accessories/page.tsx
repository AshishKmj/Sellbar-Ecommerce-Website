'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Zap,
  Headphones,
  Smartphone,
  CheckCircle2,
  Star,
  ShoppingBag,
  ChevronRight,
  Truck,
  Sparkles,
} from 'lucide-react';
import { addToCart } from '@/lib/cart';

interface AccessoryItem {
  id: string;
  title: string;
  category: 'Chargers' | 'Cables' | 'Power Banks' | 'Audio' | 'Cases' | 'Protection';
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  image: string;
}

const ACCESSORIES: AccessoryItem[] = [
  {
    id: 'acc-65w-charger',
    title: 'Sellbar 65W GaN SuperVOOC Fast Charger (Type-C + USB-A)',
    category: 'Chargers',
    price: 1299,
    mrp: 2499,
    discount: 48,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-100w-cable',
    title: 'Braided 100W USB-C to USB-C Rapid Data Cable (2M)',
    category: 'Cables',
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1595079672139-545c02557110?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-magsafe-powerbank',
    title: 'Magnetic Wireless Power Bank 10,000mAh with Kickstand',
    category: 'Power Banks',
    price: 1899,
    mrp: 3499,
    discount: 46,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1609592426861-f3b7f1680d94?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-anc-earbuds',
    title: 'Sellbar SoundPro Active Noise Cancelling Wireless Earbuds',
    category: 'Audio',
    price: 1999,
    mrp: 4999,
    discount: 60,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-tempered-glass',
    title: '9H Diamond Hardness Tempered Glass with Alignment Tray',
    category: 'Protection',
    price: 299,
    mrp: 799,
    discount: 63,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-military-case',
    title: 'Military Drop-Tested MagSafe Armor Case (iPhone & Samsung)',
    category: 'Cases',
    price: 699,
    mrp: 1499,
    discount: 53,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-20w-apple-adapter',
    title: 'Apple 20W USB-C Power Adapter (Certified Compatible)',
    category: 'Chargers',
    price: 899,
    mrp: 1900,
    discount: 53,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-car-mount-charger',
    title: 'Auto-Clamping 15W Qi Fast Wireless Car Mount Charger',
    category: 'Chargers',
    price: 1199,
    mrp: 2299,
    discount: 48,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1609592426861-f3b7f1680d94?auto=format&fit=crop&w=600&q=80',
  },
];

export default function BuyAccessoriesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [addedToast, setAddedToast] = useState<string | null>(null);

  const categories = ['All', 'Chargers', 'Cables', 'Power Banks', 'Audio', 'Cases', 'Protection'];

  const filteredItems = activeCategory === 'All'
    ? ACCESSORIES
    : ACCESSORIES.filter((item) => item.category === activeCategory);

  const handleAdd = (item: AccessoryItem) => {
    addToCart(
      {
        id: item.id,
        slug: item.id,
        title: item.title,
        categoryId: 'cat-accessories',
        categoryName: 'Accessories',
        brandId: 'b-sellbar',
        brandName: 'Sellbar Care',
        mrpPrice: item.mrp,
        sellbarPrice: item.price,
        stockCount: 50,
        conditionGrade: 'FLAWLESS',
        batteryHealth: 100,
        color: 'Standard',
        storage: item.category,
        warrantyMonths: 6,
        inspectionScore: 32,
        images: [item.image],
        specifications: { Category: item.category },
        description: `${item.title} backed by 6 months replacement warranty.`,
        isFeatured: true,
        isActive: true,
        rating: item.rating,
        reviewsCount: 45,
        createdAt: new Date().toISOString(),
      },
      1
    );

    setAddedToast(item.title);
    setTimeout(() => setAddedToast(null), 2500);
  };

  return (
    <div className="bg-[#f7f9fa] min-h-screen pb-20 font-sans">
      
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#13b59b]" />
          <div>
            <div className="text-sm font-bold">Added to Cart!</div>
            <div className="text-xs text-gray-300 truncate max-w-xs">{addedToast}</div>
          </div>
          <Link href="/cart" className="ml-2 text-xs font-bold text-[#13b59b] hover:underline">
            View Bag &rarr;
          </Link>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#13b59b] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium">Buy Accessories</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f8f5] text-[#13b59b] text-xs font-bold">
            <Zap className="w-3.5 h-3.5" /> 6 Months Replacement Warranty
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Certified <span className="text-[#13b59b]">Tech Accessories</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
            High performance GaN chargers, braided high-wattage cables, protective cases, and audio gear engineered to pair seamlessly with your refurbished phones & laptops.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((c) => {
              const isActive = activeCategory === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#13b59b] text-white shadow-xs'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 p-4 shadow-2xs hover:shadow-xl hover:border-[#13b59b] transition flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center mb-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>

                <div className="text-[10px] font-bold text-[#13b59b] uppercase tracking-wider mb-1">
                  {item.category}
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 leading-snug mb-2 min-h-9 group-hover:text-[#13b59b] transition">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-700 mb-2">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{item.rating}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-xs font-bold text-rose-600">-{item.discount}%</span>
                  <span className="text-base sm:text-lg font-black text-gray-900">₹{item.price.toLocaleString('en-IN')}</span>
                  <span className="text-[11px] text-gray-400 line-through">₹{item.mrp.toLocaleString('en-IN')}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleAdd(item)}
                  className="w-full py-2.5 bg-gray-900 hover:bg-[#13b59b] text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
