import React from 'react';
import type { Metadata } from 'next';
import SellCategoryView from '@/components/SellCategoryView';
import { db } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Sell Old Mobile Phone & Get Instant Cash At Doorstep | Sellbar.in',
  description:
    "India's most trusted platform to sell old mobile phones. Sell your used smartphone at Sellbar and get instant cash at your doorstep with free pickup & certified data wipe.",
  keywords: 'sell old mobile phone, sell used smartphone, cash for phones, sell iphone, sell samsung phone',
};

export default function SellOldMobilePhonePage() {
  const phoneModels = db.getDeviceModels({ categoryId: 'cat-phones' });

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
      name: 'Xiaomi',
      slug: 'xiaomi',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg',
    },
    {
      name: 'OnePlus',
      slug: 'oneplus',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/ac5c9a7b-76b5.jpg',
    },
    {
      name: 'Vivo',
      slug: 'vivo',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/20922c34-8afc.jpg',
    },
    {
      name: 'Oppo',
      slug: 'oppo',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/dfb6c340-010f.jpg',
    },
    {
      name: 'Realme',
      slug: 'realme',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/0124cc45-3a6c.jpg',
    },
    {
      name: 'Google',
      slug: 'google',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/4834825a-7f10.jpg',
    },
    {
      name: 'Motorola',
      slug: 'motorola',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/1dcd7fda-0141.jpg',
    },
    {
      name: 'Poco',
      slug: 'poco',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/fef4e5ae-6507.jpg',
    },
    {
      name: 'iQOO',
      slug: 'iqoo',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/bf25222a-a2a7.jpg',
    },
    {
      name: 'Nokia',
      slug: 'nokia',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/cfeaabff-69bf.jpg',
    },
  ];

  // Map database models, adding Cashify phone transparent cutouts where available
  const topModels = phoneModels.map((m) => {
    let brand = 'Other';
    let cutoutUrl = m.imageUrl;

    if (m.name.includes('iPhone 12')) {
      brand = 'Apple';
      cutoutUrl = 'https://s3ng.cashify.in/cashify/product/img/xhdpi/d0869220-31de.jpg';
    } else if (m.name.includes('iPhone 11')) {
      brand = 'Apple';
      cutoutUrl = 'https://s3ng.cashify.in/cashify/product/img/xhdpi/fd5051d8-d5a1.jpg';
    } else if (m.name.includes('iPhone 13')) {
      brand = 'Apple';
      cutoutUrl = 'https://s3ng.cashify.in/cashify/product/img/xhdpi/75a0fd88-59b4.jpg';
    } else if (m.name.includes('iPhone')) {
      brand = 'Apple';
    } else if (m.name.includes('Galaxy Note 20')) {
      brand = 'Samsung';
      cutoutUrl = 'https://s3ng.cashify.in/cashify/product/img/xhdpi/a0ce4c12-be63.jpg';
    } else if (m.name.includes('Galaxy')) {
      brand = 'Samsung';
    } else if (m.name.includes('OnePlus 9 Pro') || m.name.includes('OnePlus 12')) {
      brand = 'OnePlus';
      cutoutUrl = 'https://s3ng.cashify.in/cashify/product/img/xhdpi/5168c8f4-246c.jpg';
    } else if (m.name.includes('OnePlus')) {
      brand = 'OnePlus';
    } else if (m.name.includes('Redmi Note 10') || m.name.includes('Xiaomi')) {
      brand = 'Xiaomi';
      cutoutUrl = 'https://s3ng.cashify.in/cashify/product/img/xhdpi/3e683ab8-839f.jpg';
    }

    return {
      id: m.id,
      slug: m.slug,
      name: m.name,
      brand,
      maxPrice: m.baseResalePrice,
      imageUrl: cutoutUrl,
      specs: `${m.releaseYear} • Certified doorstep evaluation`,
    };
  });

  const faqs = [
    {
      q: 'How does Sellbar calculate the resale price for my old phone?',
      a: 'Sellbar utilizes an AI-powered valuation engine benchmarked against live secondary phone market transactions across 200+ Indian cities. Your quote is tailored according to brand, model, storage, screen status, body scratches, battery health, and accessory availability.',
    },
    {
      q: 'Do I need to carry original invoice, box, and charger when selling my phone?',
      a: 'While having the original bill, box, and manufacturer charger fetches you a higher price bonus, you can still sell your old mobile phone to Sellbar without them. Just bring a valid government ID (Aadhaar or Driving License) for ownership validation.',
    },
    {
      q: 'Is my personal data completely safe when I sell my smartphone?',
      a: 'Absolutely. Every device purchased by Sellbar undergoes military-grade, NIST 800-88 compliant cryptographic data wipe at our processing facility. We issue a formal Data Destruction Certificate ensuring zero personal files or credentials can ever be recovered.',
    },
    {
      q: 'Can I sell a dead, water-damaged, or broken phone on Sellbar?',
      a: 'Yes. Even if your smartphone display is cracked, touch is unresponsive, or the device fails to boot, you can select the "Dead / Damaged" condition during valuation to receive a fair scrap and parts value, or opt for our eco-friendly recycling pickup.',
    },
    {
      q: 'What payment modes are provided during doorstep pickup?',
      a: 'Our field executive completes instant on-the-spot verification and transfers funds directly to your UPI ID (Google Pay, PhonePe, Paytm, BHIM) or bank account via IMPS before you hand over the device.',
    },
  ];

  const seoGuideContent = [
    'Upgrading to the newest flagship phone does not have to be an expensive endeavour. With Sellbar, selling your old smartphone in India is completely effortless, transparent, and rewarding. Avoid the risks of unverified online classifieds, endless bargaining, or handing your valuable electronics to unauthorized street shops.',
    'Sellbar delivers a seamless doorstep buyback experience across 1,500+ cities including Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, and Ahmedabad. Our certified technicians arrive directly at your location at your chosen hour, perform a swift 32-point hardware and software audit, and disburse instant payment on the spot.',
    'By selling your pre-owned smartphone to Sellbar, you also participate directly in India’s green circular economy, diverting hazardous lithium-ion batteries and heavy metals away from landfills and extending the useful lifecycle of electronics.',
  ];

  return (
    <SellCategoryView
      categorySlug="sell-old-mobile-phone"
      categoryName="Mobile Phone"
      deviceType="phone"
      title="Sell Old Mobile Phone & Get Instant Cash At Doorstep"
      subtitle="India's leading gadget recommerce platform. Select your smartphone brand, get an instant algorithmic price, and enjoy free doorstep pickup with instant payment."
      brands={brands}
      topModels={topModels}
      faqs={faqs}
      seoGuideTitle="Sell Old Mobile Phone in India - Safe, Transparent & Best Value with Sellbar"
      seoGuideContent={seoGuideContent}
    />
  );
}
