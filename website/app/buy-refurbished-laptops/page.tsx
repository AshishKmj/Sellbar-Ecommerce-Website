import React from 'react';
import type { Metadata } from 'next';
import BuyRefurbishedPage from '../buy-refurbished/page';

export const metadata: Metadata = {
  title: 'Buy Certified Refurbished Laptops & MacBooks | Sellbar.in',
  description: 'Shop Apple MacBooks, Lenovo ThinkPads, and Dell Latitude corporate laptops with 12 months comprehensive warranty.',
};

export default function Page() {
  return <BuyRefurbishedPage searchParams={Promise.resolve({ category: 'laptops' })} />;
}
