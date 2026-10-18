import React from 'react';
import type { Metadata } from 'next';
import SellCategoryView from '@/components/SellCategoryView';
import { db } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Sell Old Tablet & iPad For Best Price | Sellbar.in',
  description:
    'Sell your used Apple iPad, Samsung Galaxy Tab, or Lenovo tablet online. Instant valuation, free doorstep collection, and instant payment at Sellbar.',
  keywords: 'sell old tablet, sell ipad, sell used tablet, sell galaxy tab, cash for old tablet',
};

export default function SellOldTabletPage() {
  const tabletModels = db.getDeviceModels({ categoryId: 'cat-tablets' });

  const brands = [
    {
      name: 'Apple',
      slug: 'apple',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg',
    },
    {
      name: 'Samsung',
      slug: 'samsung',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg',
    },
    {
      name: 'Lenovo',
      slug: 'lenovo',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/e1b13cbc-ef06.jpg',
    },
    {
      name: 'Xiaomi',
      slug: 'xiaomi',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg',
    },
    {
      name: 'OnePlus',
      slug: 'oneplus',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/ac5c9a7b-76b5.jpg',
    },
    {
      name: 'Realme',
      slug: 'realme',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/0124cc45-3a6c.jpg',
    },
  ];

  const topModels = tabletModels.map((m) => {
    let brand = 'Other';
    if (m.name.includes('iPad') || m.brandId === 'b-apple') brand = 'Apple';
    else if (m.name.includes('Galaxy Tab') || m.brandId === 'b-samsung') brand = 'Samsung';
    else if (m.name.includes('Lenovo') || m.brandId === 'b-lenovo') brand = 'Lenovo';

    return {
      id: m.id,
      slug: m.slug,
      name: m.name,
      brand,
      maxPrice: m.baseResalePrice,
      imageUrl: m.imageUrl,
      specs: `${m.releaseYear} • WiFi / LTE edition`,
    };
  });

  const faqs = [
    {
      q: 'Can I sell an iPad with an Apple Pencil or Magic Keyboard?',
      a: 'Yes, bundling original accessories like the Apple Pencil (1st/2nd Gen or USB-C) or Magic Keyboard folio enhances your valuation bonus considerably.',
    },
    {
      q: 'Do I need to sign out of iCloud / Apple ID before handover?',
      a: 'Yes, for customer security and smooth transfer, you must sign out of your Apple ID or Google Account and disable "Find My iPad" before handing the device to our inspection executive.',
    },
    {
      q: 'Can I sell a tablet with a cracked screen or lines on the display?',
      a: 'Yes, Sellbar purchases tablets with broken glass, touch latency, or LCD bleeding. Select the accurate screen status on our valuation calculator to see your exact offer.',
    },
  ];

  const seoGuideContent = [
    'Whether you have an iPad Pro, iPad Air, Galaxy Tab S9, or budget entertainment slate, Sellbar offers India’s most reliable platform to sell old tablets.',
    'Get a guaranteed instant quote online, lock in the highest resale value, and have our executive collect the device from your home with instant UPI or bank transfer.',
  ];

  return (
    <SellCategoryView
      categorySlug="sell-old-tablet"
      categoryName="Tablet"
      deviceType="tablet"
      title="Sell Old Tablet & iPad For Instant Cash"
      subtitle="Turn your pre-owned iPad or Android tablet into instant cash. Free doorstep collection and instant bank transfer across 1500+ Indian cities."
      brands={brands}
      topModels={topModels}
      faqs={faqs}
      seoGuideTitle="Sell Used Tablets & iPads Online - Doorstep Inspection & Best Price"
      seoGuideContent={seoGuideContent}
    />
  );
}
