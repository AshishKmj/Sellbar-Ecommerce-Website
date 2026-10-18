import React from 'react';
import type { Metadata } from 'next';
import SellCategoryView from '@/components/SellCategoryView';

export const metadata: Metadata = {
  title: 'Sell Old iMac & Apple Desktop Online For Best Price | Sellbar.in',
  description:
    'Sell your pre-owned Apple iMac 24" M-Series, iMac 27" 5K, or iMac Pro. Safe doorstep pickup, certified data wipe, and instant money on Sellbar.',
  keywords: 'sell old imac, sell apple desktop, sell imac 5k retina, sell imac m1, cash for imac',
};

export default function SellOldImacPage() {
  const brands = [
    {
      name: 'Apple',
      slug: 'apple',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg',
    },
  ];

  const topModels = [
    {
      id: 'imac-24-m3',
      slug: 'apple-imac-24-inch-m3',
      name: 'Apple iMac 24" Retina 4.5K (Apple M3 Chip)',
      brand: 'Apple',
      maxPrice: 88000,
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
      specs: '2023 • 8-Core CPU / 10-Core GPU',
    },
    {
      id: 'imac-24-m1',
      slug: 'apple-imac-24-inch-m1',
      name: 'Apple iMac 24" Retina 4.5K (Apple M1 Chip)',
      brand: 'Apple',
      maxPrice: 58000,
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
      specs: '2021 • 8-Core CPU / 8-Core GPU',
    },
    {
      id: 'imac-27-5k-2020',
      slug: 'apple-imac-27-inch-5k-2020',
      name: 'Apple iMac 27" 5K Retina (Intel Core i7 / i9)',
      brand: 'Apple',
      maxPrice: 42000,
      imageUrl: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&w=600&q=80',
      specs: '2020 • Radeon Pro Graphics',
    },
    {
      id: 'imac-21-4k',
      slug: 'apple-imac-21-inch-4k',
      name: 'Apple iMac 21.5" 4K Retina (Intel Core i5)',
      brand: 'Apple',
      maxPrice: 24000,
      imageUrl: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&w=600&q=80',
      specs: '2019 • Intel Quad-Core',
    },
  ];

  const faqs = [
    {
      q: 'How does Sellbar inspect large desktop all-in-one iMacs at home?',
      a: 'Our certified engineers bring dedicated diagnostic drives to test the 4.5K/5K Retina display for dead pixels, check storage read/write performance, verify ports and thermal dissipation, and inspect the included Magic Keyboard and Magic Mouse.',
    },
    {
      q: 'Do I need to carry the original bulky iMac packaging box?',
      a: 'Having the original packaging and styrofoam inserts ensures higher convenience and a price bonus, but our team brings secure protective transport cases if you no longer retain the box.',
    },
    {
      q: 'How is Apple Silicon vs Intel iMac value calculated?',
      a: 'Modern Apple Silicon M1, M2, and M3 models hold higher resale value due to superior power efficiency and active macOS support, while older Intel iMacs are benchmarked according to secondary market utility and parts value.',
    },
  ];

  const seoGuideContent = [
    'Sellbar provides a specialized White-Glove buyback service for desktop Apple computers including iMac 24", iMac 27" 5K, Mac Studio, and Mac Mini.',
    'Skip the logistical hazard of shipping delicate glass displays. We inspect the device in your presence and release instant funds before careful packing.',
  ];

  return (
    <SellCategoryView
      categorySlug="sell-old-imac"
      categoryName="iMac"
      deviceType="imac"
      title="Sell Old iMac Online & Get Instant Cash At Doorstep"
      subtitle="Safely sell your Apple iMac 24-inch M-Series, 27-inch 5K Retina, or iMac Pro. White-glove doorstep inspection, certified data sanitization, and instant payment."
      brands={brands}
      topModels={topModels}
      faqs={faqs}
      seoGuideTitle="Sell Old Apple iMac in India - White Glove Doorstep Evaluation & Instant Cash"
      seoGuideContent={seoGuideContent}
    />
  );
}
