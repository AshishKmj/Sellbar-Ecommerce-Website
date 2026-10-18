import React from 'react';
import type { Metadata } from 'next';
import SellCategoryView from '@/components/SellCategoryView';
import { db } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Sell Old Laptop & Get Instant Cash At Doorstep | Sellbar.in',
  description:
    'Sell your used MacBook, Dell, HP, Lenovo or gaming laptop online for maximum resale price. Free doorstep evaluation, certified data wiping, and instant payout on Sellbar.',
  keywords: 'sell old laptop, sell used macbook, sell used dell laptop, sell hp laptop, cash for old laptop',
};

export default function SellOldLaptopPage() {
  const laptopModels = db.getDeviceModels({ categoryId: 'cat-laptops' });

  const brands = [
    {
      name: 'Apple',
      slug: 'apple',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg',
    },
    {
      name: 'Dell',
      slug: 'dell',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/738cb1f1-7ddf.jpg',
    },
    {
      name: 'HP',
      slug: 'hp',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/55424ad4-0400.jpg',
    },
    {
      name: 'Lenovo',
      slug: 'lenovo',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/e1b13cbc-ef06.jpg',
    },
    {
      name: 'ASUS',
      slug: 'asus',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/06bc74db-4d38.jpg',
    },
    {
      name: 'Acer',
      slug: 'acer',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/dacc50a2-77a9.jpg',
    },
    {
      name: 'Samsung',
      slug: 'samsung',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg',
    },
  ];

  const topModels = laptopModels.map((m) => {
    let brand = 'Other';
    if (m.name.includes('MacBook') || m.brandId === 'b-apple') brand = 'Apple';
    else if (m.name.includes('Dell') || m.brandId === 'b-dell') brand = 'Dell';
    else if (m.name.includes('HP') || m.brandId === 'b-hp') brand = 'HP';
    else if (m.name.includes('Lenovo') || m.brandId === 'b-lenovo') brand = 'Lenovo';

    return {
      id: m.id,
      slug: m.slug,
      name: m.name,
      brand,
      maxPrice: m.baseResalePrice,
      imageUrl: m.imageUrl,
      specs: `${m.releaseYear} • Certified resale valuation`,
    };
  });

  const faqs = [
    {
      q: 'How does Sellbar evaluate used laptops?',
      a: 'We evaluate laptop processors (Intel Core, AMD Ryzen, Apple Silicon M-Series), RAM size, SSD/HDD storage health, dedicated GPU capability, battery cycle count, display panel condition, keyboard backlight, trackpad responsiveness, and chassis wear.',
    },
    {
      q: 'Will my SSD/hard drive data be wiped securely before refurbishing?',
      a: 'Yes. Sellbar is R2v3 and ISO 27001 certified for logical data sanitization. Our specialists run certified NIST 800-88 cryptographic drive wipe tools to ensure all business data, personal photos, and operating system profiles are permanently unrecoverable.',
    },
    {
      q: 'Can I sell a laptop with a broken hinge, damaged keyboard, or dying battery?',
      a: 'Certainly. Sellbar accepts laptops across all functional grades, ranging from like-new condition to units with faulty batteries, broken hinges, missing keys, or malfunctioning trackpads.',
    },
    {
      q: 'What accessories should I include when handing over my laptop?',
      a: 'Please provide the original power adapter / charging brick. Carrying the original retail packaging box and purchase invoice will maximize your final payout amount.',
    },
  ];

  const seoGuideContent = [
    'Selling a pre-owned laptop used to require lengthy negotiation with local computer vendors or fielding suspicious messages on classified platforms. Sellbar eliminates the friction with an AI-guided pricing tool and doorstep pickup service.',
    'Whether you own an Apple MacBook Pro, Dell Inspiron, Lenovo ThinkPad, HP Pavilion, or high-performance gaming rig, Sellbar calculates accurate fair market value instantly. Our visiting engineer runs a quick 10-minute diagnostic check and disburses funds directly to your bank account or UPI before leaving.',
  ];

  return (
    <SellCategoryView
      categorySlug="sell-old-laptop"
      categoryName="Laptop"
      deviceType="laptop"
      title="Sell Old Laptop & Get Instant Cash At Doorstep"
      subtitle="Get the best market valuation for your pre-owned MacBook, Windows laptop, or gaming computer with free doorstep inspection & instant money transfer."
      brands={brands}
      topModels={topModels}
      faqs={faqs}
      seoGuideTitle="Sell Used Laptops Online in India - Instant Doorstep Valuation & Cash"
      seoGuideContent={seoGuideContent}
    />
  );
}
