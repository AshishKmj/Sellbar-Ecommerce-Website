import React from 'react';
import type { Metadata } from 'next';
import SellCategoryView from '@/components/SellCategoryView';

export const metadata: Metadata = {
  title: 'Sell Old Earbuds & TWS Online For Instant Cash | Sellbar.in',
  description:
    'Sell your used Apple AirPods Pro, Samsung Galaxy Buds, Sony WF-1000XM5, or Bose noise-cancelling earbuds online. Hygienic sanitization, doorstep pickup, and instant cash on Sellbar.',
  keywords: 'sell old earbuds, sell airpods pro, sell tws earbuds, sell galaxy buds, cash for earbuds',
};

export default function SellOldEarbudsPage() {
  const brands = [
    {
      name: 'Apple AirPods',
      slug: 'apple',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg',
    },
    {
      name: 'Sony',
      slug: 'sony',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/3e072dc2-6d7b.jpg',
    },
    {
      name: 'Samsung Galaxy Buds',
      slug: 'samsung',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg',
    },
    {
      name: 'OnePlus',
      slug: 'oneplus',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/ac5c9a7b-76b5.jpg',
    },
  ];

  const topModels = [
    {
      id: 'tws-airpods-pro-2',
      slug: 'apple-airpods-pro-2nd-gen-type-c',
      name: 'Apple AirPods Pro (2nd Generation) with MagSafe Case (USB-C)',
      brand: 'Apple AirPods',
      maxPrice: 13500,
      imageUrl: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80',
      specs: 'Active Noise Cancellation & Transparency',
    },
    {
      id: 'tws-airpods-max',
      slug: 'apple-airpods-max-wireless-headphones',
      name: 'Apple AirPods Max Over-Ear Wireless Headphones',
      brand: 'Apple AirPods',
      maxPrice: 28000,
      imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
      specs: 'High-Fidelity Audio & Computational Sound',
    },
    {
      id: 'tws-sony-xm5',
      slug: 'sony-wf-1000xm5-truly-wireless-earbuds',
      name: 'Sony WF-1000XM5 Truly Wireless Noise Cancelling Earbuds',
      brand: 'Sony',
      maxPrice: 11000,
      imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
      specs: 'Dynamic Driver X & LDAC Hi-Res Audio',
    },
    {
      id: 'tws-galaxy-buds-2-pro',
      slug: 'samsung-galaxy-buds-2-pro',
      name: 'Samsung Galaxy Buds 2 Pro 24-bit Hi-Fi Audio',
      brand: 'Samsung Galaxy Buds',
      maxPrice: 5500,
      imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
      specs: '360 Audio with Direct Multi-Channel',
    },
  ];

  const faqs = [
    {
      q: 'How does Sellbar address hygiene and earbud sanitization?',
      a: 'All pre-owned earbuds undergo hospital-grade ultrasonic and UV-C sanitization upon arrival at our refurbishment hub, and ear tips are replaced with brand-new medical grade silicone tips.',
    },
    {
      q: 'What is tested during earbud inspection?',
      a: 'We test stereo audio balance between left and right earbuds, active noise cancellation (ANC), transparency mode, voice microphone clarity on a test call, charging case battery retention, and magnetic pin connectivity.',
    },
    {
      q: 'Can I sell my earbuds if one earbud is lost or non-functional?',
      a: 'We evaluate single-earbud and replacement charging case kits at adjusted parts valuations.',
    },
  ];

  const seoGuideContent = [
    'Upgrading your wireless audio experience? Sellbar provides an instant, hygienic, and lucrative buyback path for your pre-owned Apple AirPods, Sony, Samsung, or Bose TWS earbuds.',
    'Get an algorithmic price quote online, book a convenient doorstep inspection slot, and receive instant cash or UPI payout with zero deduction surprises.',
  ];

  return (
    <SellCategoryView
      categorySlug="sell-old-earbuds"
      categoryName="Earbuds"
      deviceType="earbuds"
      title="Sell Old Earbuds & TWS For Instant Cash"
      subtitle="Highest market value for your Apple AirPods, Sony, Bose, or Samsung Galaxy Buds. Safe doorstep testing and instant payment on Sellbar."
      brands={brands}
      topModels={topModels}
      faqs={faqs}
      seoGuideTitle="Sell Used Earbuds Online in India - Instant Payout & Free Pickup on Sellbar"
      seoGuideContent={seoGuideContent}
    />
  );
}
