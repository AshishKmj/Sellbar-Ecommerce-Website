import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import BuyRefurbishedSmartWatchesClient from '@/components/BuyRefurbishedSmartWatchesClient';

export const metadata: Metadata = {
  title: "India's Largest Refurbished Smartwatch Store | Buy Refurbished Apple Watch, Galaxy Watch & Fitbit | Sellbar Assured",
  description:
    'Buy certified refurbished smartwatches in India at Sellbar.in. Apple Watch Ultra 2, Series 10, Series 9, SE, Samsung Galaxy Watch 7 & Fitbit with tested biometric sensors, SpO2, ECG, 85%+ battery health guarantee, 6 months warranty & 15-day refund.',
  keywords:
    'buy refurbished smart watches, renewed apple watch, galaxy watch refurbished, apple watch ultra refurbished, smart watch sale india, second hand smartwatch',
  openGraph: {
    title: "India's Largest Refurbished Smartwatch Store | Sellbar Assured",
    description:
      'Buy certified refurbished Apple Watch, Galaxy Watch & Fitbit with 32-point biometric inspection, 85%+ battery health, up to 6 months warranty and free delivery.',
    type: 'website',
  },
};

export default function BuyRefurbishedSmartWatchesPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-smartwatches' });

  return <BuyRefurbishedSmartWatchesClient initialProducts={products} />;
}
