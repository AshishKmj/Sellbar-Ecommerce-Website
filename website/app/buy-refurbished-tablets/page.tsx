import React from 'react';
import type { Metadata } from 'next';
import BuyRefurbishedPage from '../buy-refurbished/page';

export const metadata: Metadata = {
  title: 'Buy Refurbished Tablets & Apple iPads | Sellbar.in',
  description: 'Shop Apple iPads, Samsung Galaxy Tabs, and Lenovo Tablets with 12 months comprehensive warranty.',
};

export default function Page() {
  return <BuyRefurbishedPage searchParams={Promise.resolve({ category: 'tablets' })} />;
}
