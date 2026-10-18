import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import RefurbishedCategoryHub from '@/components/RefurbishedCategoryHub';

export const metadata: Metadata = {
  title: 'Buy Refurbished Mobile Phones | Sellbar Assured Up to 60% Off',
  description:
    'Buy certified refurbished mobile phones in India at Sellbar.in. Best deals on refurbished iPhones, Samsung Galaxy, OnePlus, Xiaomi & OPPO with 32-point inspection, up to 12 months warranty & 15-day refund.',
  keywords: 'buy refurbished mobile phones, refurbished iphone, renewed samsung phone, sellbar assured, refurbished oneplus',
};

export default function BuyRefurbishedMobilePhonesPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-phones' });

  const popularBrands = [
    { name: 'Apple', slug: 'apple' },
    { name: 'Samsung', slug: 'samsung' },
    { name: 'OnePlus', slug: 'oneplus' },
    { name: 'OPPO', slug: 'oppo' },
    { name: 'Xiaomi', slug: 'xiaomi' },
    { name: 'Vivo', slug: 'vivo' },
    { name: 'Google', slug: 'google' },
    { name: 'Realme', slug: 'realme' },
  ];

  const faqs = [
    {
      q: 'What is a Sellbar Refurbished Mobile Phone?',
      a: 'A Sellbar refurbished mobile phone is a pre-owned smartphone that has undergone an exhaustive 32-point diagnostic hardware and software inspection. It is cleaned, sanitized, restored to peak performance with genuine components, and backed by a comprehensive doorstep warranty.',
    },
    {
      q: 'What warranty is offered on refurbished phones?',
      a: 'All refurbished phones come with a default 6-month comprehensive doorstep warranty out of the box, with options to extend coverage up to 12 months for complete peace of mind.',
    },
    {
      q: 'What are the condition grades (Superb, Good, Fair)?',
      a: 'Superb (Grade A+) has minimal cosmetic marks invisible from 20cm; Good (Grade A) features faint micro-scratches easily covered by a phone skin or case; Fair offers maximum value with visible cosmetic wear but 100% functional perfection.',
    },
    {
      q: 'Is Cash on Delivery (COD) and No Cost EMI available?',
      a: 'Yes, we provide Cash on Delivery across 19,000+ PIN codes in India as well as 3, 6, 9 & 12-month No Cost EMI plans via Bajaj Finserv, Snapmint, Instacred, and leading credit/debit cards.',
    },
  ];

  const buyingGuideContent = [
    'Buying a refurbished smartphone from Sellbar is the smartest way to own premium flagship technology while saving up to 60% compared to MRP. Every device in our inventory is 100% authentic, IMEI-verified against global blacklists, and tested for display responsiveness, battery health, cameras, biometric sensors, and wireless connectivity.',
    'By choosing refurbished phones, you also contribute to a greener planet by preventing toxic e-waste from entering landfills and reducing the carbon footprint of electronic manufacturing. Experience pristine tech backed by Sellbar Assured guarantees today.',
  ];

  return (
    <RefurbishedCategoryHub
      categorySlug="phones"
      categoryTitle="Buy Certified Refurbished Mobile Phones"
      categorySubtitle="India's leading destination for renewed iPhones, Samsung Galaxy, OnePlus, and Android flagships with 32-point inspection and warranty."
      badgeText="Sellbar Assured Smartphones"
      popularBrands={popularBrands}
      products={products}
      faqs={faqs}
      buyingGuideTitle="Complete Guide to Buying Refurbished Mobile Phones in India"
      buyingGuideContent={buyingGuideContent}
    />
  );
}
