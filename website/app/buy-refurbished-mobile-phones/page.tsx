import React from 'react';
import type { Metadata } from 'next';
import BuyRefurbishedPage from '../buy-refurbished/page';

export const metadata: Metadata = {
  title: 'Buy Certified Refurbished Mobile Phones | Up to 70% Off | Sellbar.in',
  description: 'Shop top-rated refurbished smartphones with 32-point inspection, 12 months warranty and 7 days replacement guarantee.',
};

export default function Page() {
  return <BuyRefurbishedPage searchParams={Promise.resolve({ category: 'phones' })} />;
}
