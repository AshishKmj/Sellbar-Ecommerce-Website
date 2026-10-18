import React from 'react';
import type { Metadata } from 'next';
import SellCategoryView from '@/components/SellCategoryView';

export const metadata: Metadata = {
  title: 'Sell Old Gaming Consoles For Instant Cash | Sellbar.in',
  description:
    'Sell your used Sony PlayStation 5, PS4 Pro, Microsoft Xbox Series X/S, or Nintendo Switch online. Best resale value, free doorstep pickup, and instant cash with Sellbar.',
  keywords: 'sell old gaming console, sell ps5, sell ps4 pro, sell xbox series x, sell nintendo switch',
};

export default function SellOldGamingConsolesPage() {
  const brands = [
    {
      name: 'Sony PlayStation',
      slug: 'sony-playstation',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/3e072dc2-6d7b.jpg',
    },
    {
      name: 'Microsoft Xbox',
      slug: 'microsoft-xbox',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/ac5c9a7b-76b5.jpg',
    },
    {
      name: 'Nintendo',
      slug: 'nintendo',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/0124cc45-3a6c.jpg',
    },
  ];

  const topModels = [
    {
      id: 'cons-ps5-disc',
      slug: 'sony-playstation-5-disc-edition',
      name: 'Sony PlayStation 5 (PS5) Disc Edition 825GB / 1TB',
      brand: 'Sony PlayStation',
      maxPrice: 34000,
      imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80',
      specs: '4K 120Hz Ultra HD Blu-Ray',
    },
    {
      id: 'cons-ps5-digital',
      slug: 'sony-playstation-5-digital-edition',
      name: 'Sony PlayStation 5 (PS5) Digital Edition',
      brand: 'Sony PlayStation',
      maxPrice: 28500,
      imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80',
      specs: 'Digital Only Custom SSD',
    },
    {
      id: 'cons-xbox-sx',
      slug: 'microsoft-xbox-series-x',
      name: 'Microsoft Xbox Series X 1TB Console',
      brand: 'Microsoft Xbox',
      maxPrice: 32000,
      imageUrl: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=80',
      specs: '12 Teraflops 4K Gaming',
    },
    {
      id: 'cons-xbox-ss',
      slug: 'microsoft-xbox-series-s',
      name: 'Microsoft Xbox Series S 512GB / 1TB',
      brand: 'Microsoft Xbox',
      maxPrice: 16500,
      imageUrl: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=80',
      specs: 'Compact All-Digital Next-Gen',
    },
    {
      id: 'cons-ps4-pro',
      slug: 'sony-playstation-4-pro',
      name: 'Sony PlayStation 4 Pro (PS4 Pro) 1TB',
      brand: 'Sony PlayStation',
      maxPrice: 15000,
      imageUrl: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?auto=format&fit=crop&w=600&q=80',
      specs: 'Dynamic 4K Enhanced',
    },
    {
      id: 'cons-switch-oled',
      slug: 'nintendo-switch-oled',
      name: 'Nintendo Switch OLED Model 64GB',
      brand: 'Nintendo',
      maxPrice: 18000,
      imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=80',
      specs: '7-inch Vibrant OLED Screen',
    },
  ];

  const faqs = [
    {
      q: 'Do I get extra cash for extra wireless controllers and physical game discs?',
      a: 'Yes! You can add extra original DualSense, Xbox Wireless controllers, charging docks, and genuine PS4/PS5 or Xbox physical game discs to your valuation to boost your final payout.',
    },
    {
      q: 'How does the technician test the gaming console at doorstep?',
      a: 'Our technician connects the console to a TV/monitor or testing display, verifies HDMI output, tests disc drive insertion/ejection, checks DualSense vibration and analog stick drift, and ensures the console is unbanned from PSN or Xbox Live.',
    },
    {
      q: 'Will my account credentials and saved games be wiped?',
      a: 'Yes, we guide you to factory reset the console and unlink your PSN, Xbox, or Nintendo eShop accounts, ensuring all payment cards and account logins are completely cleared.',
    },
  ];

  const seoGuideContent = [
    'Upgrading your gaming battlestation? Sellbar offers the highest cash payout for pre-owned Sony PlayStation, Microsoft Xbox, and Nintendo Switch consoles across India.',
    'Book online in under 60 seconds. Our technician visits your location, tests the console and controllers, and transfers full payment instantly to your UPI or bank account.',
  ];

  return (
    <SellCategoryView
      categorySlug="sell-old-gaming-consoles"
      categoryName="Gaming Consoles"
      deviceType="gaming"
      title="Sell Old Gaming Consoles & Get Instant Cash At Doorstep"
      subtitle="Sell your used PS5, PS4, Xbox Series X/S, or Nintendo Switch for maximum resale value with free doorstep testing & instant money transfer."
      brands={brands}
      topModels={topModels}
      faqs={faqs}
      seoGuideTitle="Sell Used Gaming Consoles in India - Top Payout For PS5, PS4, Xbox & Switch"
      seoGuideContent={seoGuideContent}
    />
  );
}
