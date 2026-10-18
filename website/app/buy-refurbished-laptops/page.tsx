import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import RefurbishedCategoryHub from '@/components/RefurbishedCategoryHub';

export const metadata: Metadata = {
  title: 'Buy Certified Refurbished Laptops & MacBooks | Sellbar Assured Up to 55% Off',
  description:
    'Buy certified refurbished laptops in India at Sellbar.in. Premium Apple MacBook Air, MacBook Pro, Dell XPS, HP Pavilion & Lenovo ThinkPad tested with 32-point inspection, up to 12 months warranty & 15-day refund.',
  keywords: 'buy refurbished laptops, renewed macbook, refurbished dell xps, hp pavilion refurbished, sellbar laptops',
};

export default function BuyRefurbishedLaptopsPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-laptops' });

  const popularBrands = [
    { name: 'Apple MacBook', slug: 'apple' },
    { name: 'Dell', slug: 'dell' },
    { name: 'HP', slug: 'hp' },
    { name: 'Lenovo', slug: 'lenovo' },
    { name: 'ASUS', slug: 'asus' },
  ];

  const faqs = [
    {
      q: 'Are refurbished laptops tested for battery life and thermals?',
      a: 'Yes, every laptop undergoes exhaustive thermal throttling tests, keyboard matrix audits, display backlight checks, and battery cycle evaluations. Only machines with over 85% battery health and flawless motherboards receive Sellbar certification.',
    },
    {
      q: 'Do refurbished laptops come with genuine chargers and OS?',
      a: 'Absolutely. Every laptop includes an official high-speed power adapter and power cord. All machines come pre-installed with clean, genuine Windows 11 Pro or macOS, factory wiped and ready for immediate work.',
    },
    {
      q: 'What warranty is provided on refurbished laptops?',
      a: 'All laptops include 6 to 12 months of Sellbar comprehensive warranty covering motherboard, processor, RAM, display, and keyboard hardware issues with free doorstep repair pickup.',
    },
  ];

  const buyingGuideContent = [
    'Whether you need a high-performance machine for coding, graphic design, college coursework, or corporate productivity, Sellbar certified refurbished laptops offer enterprise-grade durability at a fraction of showroom prices. Our inventory includes lightweight Apple Silicon MacBooks (M1, M2, M3), Dell Latitude and XPS powerhouses, HP ultrabooks, and rugged Lenovo ThinkPads.',
    'Save money and reduce electronic scrap by buying renewed. Every laptop is carefully packaged in Sellbar Eco-Packaging and delivered to your doorstep with full cash-on-delivery and easy EMI options.',
  ];

  return (
    <RefurbishedCategoryHub
      categorySlug="laptops"
      categoryTitle="Buy Certified Refurbished Laptops & MacBooks"
      categorySubtitle="Explore enterprise-tested MacBooks, Dell XPS, HP & Lenovo ThinkPads with verified battery cycles and comprehensive doorstep warranty."
      badgeText="Sellbar Assured Laptops"
      popularBrands={popularBrands}
      products={products}
      faqs={faqs}
      buyingGuideTitle="Buying Refurbished Laptops: Everything You Need to Know"
      buyingGuideContent={buyingGuideContent}
    />
  );
}
