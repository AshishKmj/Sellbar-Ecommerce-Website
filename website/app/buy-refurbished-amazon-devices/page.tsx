import React from 'react';
import type { Metadata } from 'next';
import BuyRefurbishedPage from '../buy-refurbished/page';

export const metadata: Metadata = {
  title: 'Buy Refurbished Amazon Echo, Kindle & Fire TV Stick | Sellbar.in',
  description: 'Shop tested and certified refurbished Amazon smart speakers, Kindle paperwhites, and streaming devices.',
};

export default function Page() {
  return <BuyRefurbishedPage searchParams={Promise.resolve({ category: 'amazon' })} />;
}
