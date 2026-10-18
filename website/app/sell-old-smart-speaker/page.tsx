import React from 'react';
import type { Metadata } from 'next';
import SellCategoryView from '@/components/SellCategoryView';

export const metadata: Metadata = {
  title: 'Sell Old Smart Speaker Online For Instant Cash | Sellbar.in',
  description:
    'Sell your used Apple HomePod, Amazon Echo Alexa, Google Nest, or Sonos smart speaker for the best price. Free doorstep pickup and instant money on Sellbar.',
  keywords: 'sell old smart speaker, sell apple homepod, sell amazon echo, sell google nest, cash for smart speaker',
};

export default function SellOldSmartSpeakerPage() {
  const brands = [
    {
      name: 'Apple HomePod',
      slug: 'apple',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg',
    },
    {
      name: 'Amazon Echo',
      slug: 'amazon',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/1dcd7fda-0141.jpg',
    },
    {
      name: 'Google Nest',
      slug: 'google',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/4834825a-7f10.jpg',
    },
  ];

  const topModels = [
    {
      id: 'spk-apple-homepod-2',
      slug: 'apple-homepod-2nd-gen',
      name: 'Apple HomePod (2nd Generation) Spatial Audio Smart Speaker',
      brand: 'Apple HomePod',
      maxPrice: 19500,
      imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80',
      specs: 'Room-Sensing Acoustics & Siri',
    },
    {
      id: 'spk-homepod-mini',
      slug: 'apple-homepod-mini',
      name: 'Apple HomePod Mini Compact Smart Speaker',
      brand: 'Apple HomePod',
      maxPrice: 6200,
      imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80',
      specs: '360-Degree Audio & Intercom',
    },
    {
      id: 'spk-echo-studio',
      slug: 'amazon-echo-studio',
      name: 'Amazon Echo Studio High-Fidelity Smart Speaker',
      brand: 'Amazon Echo',
      maxPrice: 13000,
      imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80',
      specs: 'Dolby Atmos & Alexa Built-in',
    },
    {
      id: 'spk-echo-dot-5',
      slug: 'amazon-echo-dot-5th-gen',
      name: 'Amazon Echo Dot (5th Generation) with Alexa',
      brand: 'Amazon Echo',
      maxPrice: 2800,
      imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80',
      specs: 'Deeper Bass & Clearer Vocals',
    },
    {
      id: 'spk-nest-audio',
      slug: 'google-nest-audio',
      name: 'Google Nest Audio Smart Speaker with Google Assistant',
      brand: 'Google Nest',
      maxPrice: 4800,
      imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80',
      specs: '75mm Woofer & 19mm Tweeter',
    },
  ];

  const faqs = [
    {
      q: 'Do I need to deregister my Amazon or Google account before selling?',
      a: 'Yes, ensure you deregister the device from your Amazon Alexa app, Google Home app, or Apple Home app so the smart assistant is cleared for the next owner.',
    },
    {
      q: 'What is checked during smart speaker inspection?',
      a: 'Our technician powers on the device, tests audio drivers across low and high volume for distortion/crackling, tests the microphone array response to voice prompts, and verifies WiFi and Bluetooth pairing.',
    },
    {
      q: 'Can I sell the speaker if the original power adapter is missing?',
      a: 'Original power supplies are required for speakers with proprietary DC barrels (such as Echo Studio or Nest Audio). If using standard USB-C, having a compatible power brick is sufficient.',
    },
  ];

  const seoGuideContent = [
    'Sellbar makes selling pre-owned smart speakers and home audio systems fast and lucrative. Upgrade your home audio setup without accumulating idle electronic gadgets.',
    'Book online in seconds, choose your preferred doorstep collection slot, and get paid directly to your bank account or UPI upon inspection.',
  ];

  return (
    <SellCategoryView
      categorySlug="sell-old-smart-speaker"
      categoryName="Smart Speaker"
      deviceType="speaker"
      title="Sell Old Smart Speaker Online For Best Price"
      subtitle="Monetize your Apple HomePod, Amazon Echo, Google Nest, or Sonos smart speaker. Transparent doorstep testing and instant money transfer on Sellbar."
      brands={brands}
      topModels={topModels}
      faqs={faqs}
      seoGuideTitle="Sell Used Smart Speaker Online in India - Instant Payout & Free Pickup"
      seoGuideContent={seoGuideContent}
    />
  );
}
