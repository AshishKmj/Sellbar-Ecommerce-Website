import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { db } from '@/lib/db';
import BuybackWizard from '@/components/BuybackWizard';

export default async function DeviceBuybackPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const model = db.getDeviceModelBySlug(params.slug);

  if (!model) {
    notFound();
  }

  const category = db.getCategories().find((c) => c.id === model.categoryId);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link href="/sell" className="hover:text-white">Sell Device</Link>
        {category && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href={`/sell/${category.slug}`} className="hover:text-white">{category.name}</Link>
          </>
        )}
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-emerald-400 font-semibold">{model.name}</span>
      </div>

      {/* Main Wizard */}
      <BuybackWizard model={model} />
    </div>
  );
}
