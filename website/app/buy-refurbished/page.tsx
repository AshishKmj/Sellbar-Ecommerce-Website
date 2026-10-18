import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
import {
  ShoppingBag,
  Filter,
  ShieldCheck,
  ChevronRight,
  BatteryCharging,
  SlidersHorizontal,
} from 'lucide-react';
import { db } from '@/lib/db';
import RefurbishedProductCard from '@/components/RefurbishedProductCard';

export default async function BuyRefurbishedPage(props: {
  searchParams: Promise<{
    category?: string;
    brand?: string;
    grade?: string;
    sort?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const categories = db.getCategories();
  const brands = db.getBrands();

  let categoryId: string | undefined;
  if (searchParams.category) {
    const cat = db.getCategoryBySlug(searchParams.category);
    if (cat) categoryId = cat.id;
  }

  let brandId: string | undefined;
  if (searchParams.brand) {
    const br = brands.find((b) => b.slug.toLowerCase() === searchParams.brand?.toLowerCase());
    if (br) brandId = br.id;
  }

  const products = db.getRefurbishedProducts({
    categoryId,
    brandId,
    conditionGrade: searchParams.grade,
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    sortBy: (searchParams.sort as any) || 'popular',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-amber-400 font-semibold">Certified Refurbished Store</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> 32-Point Quality Certified
          </div>
          <h1 className="text-3xl font-black text-white">Buy Refurbished Electronics</h1>
          <p className="text-xs text-slate-400 mt-1">
            Up to 50% cheaper than brand new. Certified battery health, 12 months warranty & 7-day replacement.
          </p>
        </div>

        <div className="text-xs text-slate-400">
          Showing <strong className="text-white">{products.length}</strong> certified devices
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Link
          href="/buy-refurbished"
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            !searchParams.category ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/10' : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          All Tech
        </Link>
        <Link
          href="/buy-refurbished?category=phones"
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            searchParams.category === 'phones' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          Smartphones
        </Link>
        <Link
          href="/buy-refurbished?category=laptops"
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            searchParams.category === 'laptops' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          Laptops & MacBooks
        </Link>
        <Link
          href="/buy-refurbished?category=tablets"
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            searchParams.category === 'tablets' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          Tablets & iPads
        </Link>
        <Link
          href="/buy-refurbished?category=smartwatches"
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            searchParams.category === 'smartwatches' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          Smartwatches
        </Link>
      </div>

      {/* Main Grid with Sidebar Filter */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1 space-y-6 bg-slate-900/60 p-5 rounded-3xl border border-slate-800 h-fit">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" /> Filters
            </span>
            <Link href="/buy-refurbished" className="text-[11px] text-slate-400 hover:text-white">
              Reset All
            </Link>
          </div>

          {/* Condition Grade Filter */}
          <div className="space-y-2 text-xs">
            <label className="font-bold text-slate-300 uppercase text-[10px] tracking-wider block">
              Condition Grade
            </label>
            <div className="space-y-1.5">
              <Link
                href="/buy-refurbished?grade=FLAWLESS"
                className={`block p-2 rounded-lg transition ${
                  searchParams.grade === 'FLAWLESS' ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                Flawless (Grade A+) • 12M Warranty
              </Link>
              <Link
                href="/buy-refurbished?grade=LIKE_NEW"
                className={`block p-2 rounded-lg transition ${
                  searchParams.grade === 'LIKE_NEW' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                Like New (Grade A) • 6M Warranty
              </Link>
              <Link
                href="/buy-refurbished?grade=SMART_VALUE"
                className={`block p-2 rounded-lg transition ${
                  searchParams.grade === 'SMART_VALUE' ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                Smart Value (Grade B) • Max Savings
              </Link>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="space-y-2 text-xs pt-3 border-t border-slate-800">
            <label className="font-bold text-slate-300 uppercase text-[10px] tracking-wider block">
              Brand
            </label>
            <div className="flex flex-wrap gap-1.5">
              {['Apple', 'Samsung', 'OnePlus', 'Dell', 'Lenovo'].map((b) => (
                <Link
                  key={b}
                  href={`/buy-refurbished?brand=${b.toLowerCase()}`}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition ${
                    searchParams.brand?.toLowerCase() === b.toLowerCase()
                      ? 'bg-amber-500 text-slate-950 border-amber-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {b}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Catalog Grid */}
        <div className="lg:col-span-3">
          {products.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-white">No products match your filters</h3>
              <p className="text-xs text-slate-400">Try selecting a different brand or condition grade.</p>
              <Link
                href="/buy-refurbished"
                className="inline-block mt-2 py-2 px-4 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
              >
                Clear Filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => (
                <RefurbishedProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
