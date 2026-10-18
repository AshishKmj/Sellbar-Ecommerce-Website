import React from 'react';
import type { Metadata } from 'next';
import BuyRefurbishedPage from '../buy-refurbished/page';

export const metadata: Metadata = {
  title: 'Buy Open-Box Speakers, Soundbars & Earbuds | Sellbar.in',
  description: 'Shop open-box and refurbished AirPods, Galaxy Buds, JBL, and Bose sound systems with verified warranty.',
};

export default function Page() {
  return <BuyRefurbishedPage searchParams={Promise.resolve({ category: 'audio' })} />;
}
