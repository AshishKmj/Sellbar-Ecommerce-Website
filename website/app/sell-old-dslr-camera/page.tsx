import React from 'react';
import type { Metadata } from 'next';
import SellCategoryView from '@/components/SellCategoryView';

export const metadata: Metadata = {
  title: 'Sell Old DSLR & Mirrorless Camera Online | Sellbar.in',
  description:
    'Sell your used Canon, Sony Alpha, Nikon, or Fujifilm DSLR & mirrorless camera for best cash. Doorstep sensor check, shutter count audit, and instant payout.',
  keywords: 'sell old dslr camera, sell used canon camera, sell sony a7, sell nikon dslr, cash for camera',
};

export default function SellOldDslrCameraPage() {
  const brands = [
    {
      name: 'Sony',
      slug: 'sony',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/3e072dc2-6d7b.jpg',
    },
    {
      name: 'Canon',
      slug: 'canon',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/bdbdc48e-dd24.jpg',
    },
    {
      name: 'Nikon',
      slug: 'nikon',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/738cb1f1-7ddf.jpg',
    },
  ];

  const topModels = [
    {
      id: 'cam-sony-a7iv',
      slug: 'sony-alpha-7-iv-mirrorless-camera',
      name: 'Sony Alpha 7 IV (A7 IV) Full-Frame Mirrorless Camera (Body)',
      brand: 'Sony',
      maxPrice: 125000,
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
      specs: '33MP BSI CMOS / 4K 60p 10-Bit',
    },
    {
      id: 'cam-sony-a7iii',
      slug: 'sony-alpha-7-iii-mirrorless-camera',
      name: 'Sony Alpha 7 III (A7 III) Full-Frame Mirrorless Camera',
      brand: 'Sony',
      maxPrice: 68000,
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
      specs: '24.2MP Exmor R Sensor',
    },
    {
      id: 'cam-canon-r6',
      slug: 'canon-eos-r6-mirrorless-camera',
      name: 'Canon EOS R6 Full-Frame Mirrorless Camera',
      brand: 'Canon',
      maxPrice: 98000,
      imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80',
      specs: '20MP Dual Pixel CMOS AF II',
    },
    {
      id: 'cam-nikon-z6ii',
      slug: 'nikon-z6-ii-mirrorless-camera',
      name: 'Nikon Z6 II Full-Frame Mirrorless Camera',
      brand: 'Nikon',
      maxPrice: 76000,
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
      specs: 'Dual EXPEED 6 Processors',
    },
    {
      id: 'cam-canon-200d',
      slug: 'canon-eos-200d-ii-dslr-camera',
      name: 'Canon EOS 200D II DSLR Camera with 18-55mm Kit Lens',
      brand: 'Canon',
      maxPrice: 27000,
      imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80',
      specs: '24.1MP APS-C / Eye Detection AF',
    },
  ];

  const faqs = [
    {
      q: 'How does shutter count affect my camera resale valuation?',
      a: 'Shutter count is an accurate indicator of mechanical wear. Bodies with shutter counts under 20,000 actuations fetch top-tier valuation, while higher actuation bodies are calibrated accordingly.',
    },
    {
      q: 'Can I sell individual camera lenses, flashes, and battery grips along with the body?',
      a: 'Yes! You can bundle prime/zoom lenses, battery grips, extra original batteries, and speedlite flashes for an enhanced payout package.',
    },
    {
      q: 'What is checked on the camera sensor during doorstep inspection?',
      a: 'Our technician checks for sensor dust, scratches, hot/stuck pixels, fungus/haze inside glass optics, autofocus accuracy, hotshoe connection, and SD/CFexpress card slot pins.',
    },
  ];

  const seoGuideContent = [
    'Whether upgrading to a cinema-grade mirrorless body or monetizing your enthusiast DSLR kit, Sellbar offers India’s most transparent camera buyback platform.',
    'Skip the worry of shipping delicate lenses and sensors. Our certified technician arrives at your door, performs an expert hardware audit, and disburses funds instantly before packing.',
  ];

  return (
    <SellCategoryView
      categorySlug="sell-old-dslr-camera"
      categoryName="DSLR Camera"
      deviceType="camera"
      title="Sell Old DSLR & Mirrorless Camera For Best Cash"
      subtitle="Sell your used Sony, Canon, Nikon, or Fujifilm camera body and lenses online. Expert doorstep sensor inspection and instant digital payout."
      brands={brands}
      topModels={topModels}
      faqs={faqs}
      seoGuideTitle="Sell Used DSLR & Mirrorless Cameras in India - Instant Valuation & Safe Pickup"
      seoGuideContent={seoGuideContent}
    />
  );
}
