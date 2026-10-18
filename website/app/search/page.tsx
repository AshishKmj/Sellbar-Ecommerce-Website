import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
import { Search, Smartphone, ShoppingBag, ArrowRight } from 'lucide-react';
import { db } from '@/lib/db';
import RefurbishedProductCard from '@/components/RefurbishedProductCard';

export default async function SearchPage(props: {
  searchParams: Promise<{ q?: string }>;
}) {
  const searchParams = await props.searchParams;
  const q = searchParams.q || '';

  const matchedModels = db.getDeviceModels({ query: q });
  const matchedProducts = db.getRefurbishedProducts({ query: q });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Search Results</div>
        <h1 className="text-3xl font-black text-white">Results for &quot;{q}&quot;</h1>
        <p className="text-xs text-slate-400 mt-1">
          Found {matchedModels.length} models to sell and {matchedProducts.length} certified refurbished items
        </p>
      </div>

      {/* 1. Buyback models match */}
      {matchedModels.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">Sell These Devices for Instant Cash</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {matchedModels.map((m) => (
              <Link
                key={m.id}
                href={`/sell/device/${m.slug}`}
                className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-4 flex flex-col justify-between text-center transition group"
              >
                <div className="h-28 flex items-center justify-center p-2 mb-2 bg-slate-950/40 rounded-xl">
                  <img src={m.imageUrl} alt="" className="max-h-24 max-w-full object-contain group-hover:scale-105 transition" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white line-clamp-1">{m.name}</h3>
                  <div className="text-xs font-black text-emerald-400 mt-1">
                    Up to ₹{m.baseResalePrice.toLocaleString('en-IN')}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 2. Refurbished products match */}
      {matchedProducts.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <h2 className="text-lg font-bold text-white">Buy Refurbished Deals (with 12M Warranty)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {matchedProducts.map((p) => (
              <RefurbishedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {matchedModels.length === 0 && matchedProducts.length === 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-3 max-w-md mx-auto">
          <Search className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No results found for &quot;{q}&quot;</h3>
          <p className="text-xs text-slate-400">
            Try searching for &quot;iPhone 15&quot;, &quot;MacBook&quot;, &quot;Galaxy S24&quot;, or &quot;OnePlus&quot;.
          </p>
          <Link href="/" className="inline-block py-2.5 px-4 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl mt-2">
            Back to Homepage
          </Link>
        </div>
      )}
    </div>
  );
}
