import React from 'react';
import type { Metadata } from 'next';
import SellCategoryView from '@/components/SellCategoryView';
import { db } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Sell Old Smartwatch & Apple Watch Online | Sellbar.in',
  description:
    'Sell your used Apple Watch, Samsung Galaxy Watch, Garmin, or smart fitness tracker for top market cash. Free doorstep collection and instant money transfer.',
  keywords: 'sell old smartwatch, sell apple watch, sell galaxy watch, cash for smartwatch, sell garmin watch',
};

export default function SellOldSmartwatchPage() {
  const smartwatchModels = db.getDeviceModels({ categoryId: 'cat-smartwatches' });

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
      name: 'Garmin',
      slug: 'garmin',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/3e072dc2-6d7b.jpg',
    },
    {
      name: 'Fossil',
      slug: 'fossil',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/bdbdc48e-dd24.jpg',
    },
    {
      name: 'OnePlus',
      slug: 'oneplus',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/ac5c9a7b-76b5.jpg',
    },
  ];

  const topModels = smartwatchModels.map((m) => {
    let brand = 'Other';
    if (m.name.includes('Apple Watch') || m.brandId === 'b-apple') brand = 'Apple';
    else if (m.name.includes('Galaxy Watch') || m.brandId === 'b-samsung') brand = 'Samsung';

    return {
      id: m.id,
      slug: m.slug,
      name: m.name,
      brand,
      maxPrice: m.baseResalePrice,
      imageUrl: m.imageUrl,
      specs: `${m.releaseYear} • GPS / Cellular Edition`,
    };
  });

  const faqs = [
    {
      q: 'Do I need to unpair and remove Activation Lock from my Apple Watch before selling?',
      a: 'Yes. You must open the Watch app on your paired iPhone, unpair the Apple Watch, and ensure your Apple ID Activation Lock is completely removed so the new buyer can set it up seamlessly.',
    },
    {
      q: 'How is battery health evaluated on a pre-owned smartwatch?',
      a: 'For Apple Watches and Galaxy Watches, we inspect the built-in Maximum Capacity percentage in settings. Watches with battery health above 80% earn the highest tier valuation.',
    },
    {
      q: 'Can I sell my smartwatch if the magnetic charging cable is lost?',
      a: 'Yes, you can still sell your smartwatch, though having the original OEM charging cable provides a higher valuation bonus.',
    },
  ];

  const seoGuideContent = [
    'Smartwatches rapidly evolve with new health sensors, sleep metrics, and battery capabilities each year. Sellbar provides a fast, risk-free way to monetize your existing Apple Watch or Galaxy Watch when upgrading.',
    'Get an algorithmic price quote online, arrange free doorstep pickup, and receive instant cash or UPI payout within 10 minutes of evaluation.',
  ];

  return (
    <SellCategoryView
      categorySlug="sell-old-smart-watch"
      categoryName="Smartwatch"
      deviceType="smartwatch"
      title="Sell Old Smartwatch & Apple Watch For Best Price"
      subtitle="Instant valuation for your pre-owned Apple Watch, Samsung Galaxy Watch, or Garmin fitness tracker. Free doorstep inspection and instant digital payment."
      brands={brands}
      topModels={topModels}
      faqs={faqs}
      seoGuideTitle="Sell Used Smartwatch in India - Instant Valuation & Doorstep Payout on Sellbar"
      seoGuideContent={seoGuideContent}
    />
  );
}
