import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import RefurbishedCategoryHub from '@/components/RefurbishedCategoryHub';

export const metadata: Metadata = {
  title: 'Buy Refurbished DSLR & Mirrorless Cameras | Sellbar Assured Up to 45% Off',
  description:
    'Buy certified refurbished DSLR and mirrorless cameras in India at Sellbar.in. Sony Alpha, Canon EOS, Nikon Z & Fujifilm with shutter count audit, clean sensor guarantee & 6-month warranty.',
  keywords: 'buy refurbished dslr cameras, renewed sony alpha, used canon eos, mirrorless cameras sale india',
};

export default function BuyRefurbishedDslrCamerasPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-cameras' });

  const popularBrands = [
    { name: 'Sony Alpha', slug: 'sony' },
    { name: 'Canon EOS', slug: 'canon' },
    { name: 'Nikon', slug: 'nikon' },
    { name: 'Fujifilm', slug: 'fujifilm' },
  ];

  const faqs = [
    {
      q: 'How is the shutter count verified on refurbished cameras?',
      a: 'We connect each camera to official manufacturer diagnostic suites to read the exact hardware shutter actuations. Only bodies with plenty of rated shutter lifespan remaining pass our inspection.',
    },
    {
      q: 'Are the image sensors cleaned of dust spots and dead pixels?',
      a: 'Yes, each CMOS/BSI sensor undergoes thorough microscopic cleaning and laboratory long-exposure tests at f/22 to guarantee zero dead pixels, hot pixels, or sensor dust.',
    },
    {
      q: 'What accessories are included with renewed camera bodies?',
      a: 'Each camera includes an original or high-grade compatible rechargeable Li-ion battery, dedicated wall charger, neck strap, body cap, and lens kit if bundled.',
    },
  ];

  const buyingGuideContent = [
    'Whether you are an aspiring vlogger, wedding photographer, wildlife enthusiast, or student filmmaker, professional photography gear can be prohibitively expensive new. Sellbar certified refurbished DSLR and mirrorless cameras give you full-frame image quality and 4K 60fps video capture at up to 45% lower investment.',
    'Tested across 32 checkpoints including autofocus tracking, sensor stabilization (IBIS), and dial ergonomics, every camera is backed by our warranty and doorstep replacement guarantee.',
  ];

  return (
    <RefurbishedCategoryHub
      categorySlug="cameras"
      categoryTitle="Buy Certified Refurbished DSLR & Mirrorless Cameras"
      categorySubtitle="Explore Sony Alpha, Canon EOS & Nikon camera bodies with shutter count verification, clean CMOS sensors, and doorstep warranty."
      badgeText="Sellbar Assured Cameras"
      popularBrands={popularBrands}
      products={products}
      faqs={faqs}
      buyingGuideTitle="Complete Guide to Buying Pre-Owned Cameras in India"
      buyingGuideContent={buyingGuideContent}
    />
  );
}
