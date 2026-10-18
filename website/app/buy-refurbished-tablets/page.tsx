import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import RefurbishedCategoryHub from '@/components/RefurbishedCategoryHub';

export const metadata: Metadata = {
  title: 'Buy Refurbished Tablets & Apple iPads | Sellbar Assured Up to 50% Off',
  description:
    'Buy certified refurbished tablets in India at Sellbar.in. Apple iPad Pro, iPad Air, iPad Mini & Samsung Galaxy Tab S9 with 32-point inspection, Apple Pencil support, warranty & 15-day refund.',
  keywords: 'buy refurbished tablets, refurbished ipad, renewed samsung galaxy tab, apple ipad pro sale india',
};

export default function BuyRefurbishedTabletsPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-tablets' });

  const popularBrands = [
    { name: 'Apple iPad', slug: 'apple' },
    { name: 'Samsung Tab', slug: 'samsung' },
    { name: 'Lenovo', slug: 'lenovo' },
    { name: 'Xiaomi Pad', slug: 'xiaomi' },
  ];

  const faqs = [
    {
      q: 'Do refurbished iPads support Apple Pencil and Magic Keyboard?',
      a: 'Yes, all iPad models in our inventory are verified for seamless Apple Pencil (1st, 2nd gen, or USB-C) pairing, palm rejection, pressure sensitivity, and Smart Connector / Magic Keyboard docking.',
    },
    {
      q: 'What is the condition of the tablet display and touchscreen?',
      a: 'Every tablet display is tested for uniform brightness, color accuracy, True Tone, and multi-touch response with zero dead pixels. Available in Flawless (Grade A+), Superb, and Good cosmetic conditions.',
    },
    {
      q: 'What warranty is included with refurbished tablets?',
      a: 'All tablets arrive with a 6 to 12-month Sellbar doorstep warranty covering hardware malfunctions, battery degradation, and audio/charging issues.',
    },
  ];

  const buyingGuideContent = [
    'Tablets are essential tools for students, illustrators, media streaming, and mobile productivity. Rather than spending premium showroom prices, Sellbar refurbished iPads and Android tablets provide the same lightning-fast performance, vibrant Retina screens, and all-day battery life at up to 50% lower cost.',
    'Packaged with a certified high-speed charger and braided cable, each tablet is thoroughly disinfected and shipped with fast doorstep delivery across India.',
  ];

  return (
    <RefurbishedCategoryHub
      categorySlug="tablets"
      categoryTitle="Buy Certified Refurbished Tablets & iPads"
      categorySubtitle="Shop Apple iPad Pro, iPad Air, iPad Mini & Samsung Galaxy Tabs with pristine Liquid Retina displays and doorstep warranty."
      badgeText="Sellbar Assured Tablets"
      popularBrands={popularBrands}
      products={products}
      faqs={faqs}
      buyingGuideTitle="Choosing the Perfect Refurbished Tablet or iPad"
      buyingGuideContent={buyingGuideContent}
    />
  );
}
