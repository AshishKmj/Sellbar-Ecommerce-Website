import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { db } from '@/lib/db';
import RefurbishedProductCard from '@/components/RefurbishedProductCard';

export default function WishlistPage() {
  const featured = db.getRefurbishedProducts({ featuredOnly: true }).slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/account" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">My Wishlist</h1>
          <p className="text-xs text-slate-400">Save certified refurbished products and get notified on price drops</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
          Recommended Deals For You
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featured.map((p) => (
            <RefurbishedProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
