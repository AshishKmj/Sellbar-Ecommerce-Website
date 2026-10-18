import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronRight, Zap } from 'lucide-react';
import { db } from '@/lib/db';

export default async function CategorySellPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const category = db.getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const brands = db.getBrands(category.id);
  const models = db.getDeviceModels({ categoryId: category.id });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link href="/sell" className="hover:text-white">Sell Old Device</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-emerald-400 font-semibold">{category.name}</span>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
          <Zap className="w-3.5 h-3.5" /> Select Model to Value
        </div>
        <h1 className="text-3xl font-black text-white">Sell Old {category.name}</h1>
        <p className="text-xs text-slate-400">
          Choose your exact model below for transparent doorstep price calculation
        </p>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {models.map((model) => (
          <Link
            key={model.id}
            href={`/sell/device/${model.slug}`}
            className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-4 flex flex-col justify-between text-center transition hover:shadow-xl hover:shadow-emerald-500/5"
          >
            <div className="h-36 flex items-center justify-center p-2 mb-2 bg-slate-950/40 rounded-xl">
              <img
                src={model.imageUrl}
                alt={model.name}
                className="max-h-32 max-w-full object-contain group-hover:scale-105 transition"
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-xs font-bold text-white line-clamp-2 group-hover:text-emerald-400 transition">
                {model.name}
              </h3>
              <div className="text-[10px] text-slate-400">Get up to</div>
              <div className="text-sm font-black text-emerald-400">
                ₹{model.baseResalePrice.toLocaleString('en-IN')}
              </div>
            </div>

            <div className="mt-3 py-1.5 px-2 bg-slate-800 group-hover:bg-emerald-500 group-hover:text-slate-950 text-slate-300 rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1">
              <span>Sell Now</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
