import React from 'react';
import type { Metadata } from 'next';
import BuyRefurbishedPage from '../buy-refurbished/page';

export const metadata: Metadata = {
  title: 'Buy Refurbished Smartwatches & Apple Watch | Sellbar.in',
  description: 'Shop Apple Watch, Samsung Galaxy Watch, and premium fitness trackers with warranty and battery health guarantee.',
};

export default function Page() {
  return <BuyRefurbishedPage searchParams={Promise.resolve({ category: 'smartwatches' })} />;
}
