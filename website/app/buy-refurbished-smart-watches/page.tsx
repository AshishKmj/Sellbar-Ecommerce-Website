import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import RefurbishedCategoryHub from '@/components/RefurbishedCategoryHub';

export const metadata: Metadata = {
  title: 'Buy Refurbished Smart Watches & Apple Watch | Sellbar Assured Up to 50% Off',
  description:
    'Buy certified refurbished smartwatches in India at Sellbar.in. Apple Watch Ultra, Series 9, SE, Samsung Galaxy Watch 6 & Fitbit with tested biometric sensors, battery warranty & 15-day refund.',
  keywords: 'buy refurbished smart watches, renewed apple watch, galaxy watch refurbished, smart watch sale india',
};

export default function BuyRefurbishedSmartWatchesPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-smartwatches' });

  const popularBrands = [
    { name: 'Apple Watch', slug: 'apple' },
    { name: 'Samsung Galaxy Watch', slug: 'samsung' },
    { name: 'OnePlus Watch', slug: 'oneplus' },
    { name: 'Fitbit', slug: 'fitbit' },
  ];

  const faqs = [
    {
      q: 'Are heart rate, SpO2 and ECG sensors tested on refurbished watches?',
      a: 'Yes, every smartwatch undergoes sensor calibration tests against clinical monitors. Heart rate, blood oxygen (SpO2), accelerometer, GPS, and ECG functions are verified for 100% accuracy before dispatch.',
    },
    {
      q: 'Do refurbished smartwatches include charging cables and straps?',
      a: 'Yes, all watches arrive with an official or certified magnetic fast charging cable and comfortable, sanitized premium silicone straps.',
    },
    {
      q: 'What is the battery health guarantee on refurbished smartwatches?',
      a: 'Sellbar guarantees minimum 85%+ battery health on all renewed smartwatches, ensuring full all-day battery performance with all health tracking features enabled.',
    },
  ];

  const buyingGuideContent = [
    'Track your fitness, stay connected on the go, and monitor vital health stats without paying brand-new flagship prices. Sellbar certified refurbished smartwatches include popular Apple Watch models (Ultra 2, Series 9, Series 8, SE) and Samsung Galaxy Watch (Watch 6, Watch 5 Pro) with seamless pairing for iOS and Android.',
    'Each watch is hygienically sanitized with hospital-grade UV light and backed by our hassle-free doorstep warranty.',
  ];

  return (
    <RefurbishedCategoryHub
      categorySlug="smartwatches"
      categoryTitle="Buy Certified Refurbished Smartwatches"
      categorySubtitle="Shop Apple Watch, Galaxy Watch, and premium fitness wearables with certified battery health, calibrated biometric sensors, and doorstep warranty."
      badgeText="Sellbar Assured Wearables"
      popularBrands={popularBrands}
      products={products}
      faqs={faqs}
      buyingGuideTitle="Guide to Buying Certified Refurbished Smartwatches"
      buyingGuideContent={buyingGuideContent}
    />
  );
}
