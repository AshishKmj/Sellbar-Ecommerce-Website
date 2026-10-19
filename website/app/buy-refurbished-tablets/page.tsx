import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import BuyRefurbishedTabletsClient from '@/components/BuyRefurbishedTabletsClient';

export const metadata: Metadata = {
  title: "India's Largest Refurbished Tablet Store | Buy Refurbished Apple iPad Pro, iPad Air & Samsung Galaxy Tab | Sellbar Assured",
  description:
    'Buy certified refurbished tablets in India at Sellbar.in. Apple iPad Air M3, iPad Pro M2, iPad 9th Gen, iPad Mini & Samsung Galaxy Tab S9 with 32-point inspection, Apple Pencil support, 85%+ battery health guarantee, up to 6 months warranty & 15-day refund.',
  keywords:
    'buy refurbished tablets, refurbished ipad, renewed samsung galaxy tab, apple ipad pro sale india, refurbished ipad air, second hand ipad with warranty',
  openGraph: {
    title: "India's Largest Refurbished Tablet Store | Sellbar Assured",
    description:
      'Buy certified refurbished Apple iPad Pro, iPad Air, iPad Mini & Samsung Galaxy Tabs with 32-point inspection, 85%+ battery health, up to 6 months warranty and free delivery.',
    type: 'website',
  },
};

export default function BuyRefurbishedTabletsPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-tablets' });

  return <BuyRefurbishedTabletsClient initialProducts={products} />;
}
