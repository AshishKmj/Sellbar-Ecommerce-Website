import React from 'react';
import type { Metadata } from 'next';
import AboutClient from '@/components/AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Sellbar.in - India\'s Leading Re-Commerce & Refurbished Gadget Platform',
  description:
    'Sellbar enables millions of customers across India to sell their old gadgets online for instant cash with free doorstep pickup, and purchase certified refurbished smartphones, laptops and tech with complete warranty.',
  keywords: 'Sellbar.in, About Us, sell old phone, buy refurbished phones, circular economy India, e-waste reduction',
  alternates: {
    canonical: 'https://sellbar.in/about',
  },
  openGraph: {
    title: 'About Us | Sellbar.in - India\'s Leading Re-Commerce Platform',
    description:
      'Our grandparents lived a sustainable life long before sustainability was a concept! Join Sellbar to buy, repair, sell, refurbish, reuse, repeat.',
    url: 'https://sellbar.in/about',
    siteName: 'Sellbar',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
