import React from 'react';
import type { Metadata } from 'next';
import BuyRefurbishedPage from '../buy-refurbished/page';

export const metadata: Metadata = {
  title: 'Buy Refurbished PS5, PS4 & Xbox Gaming Consoles | Sellbar.in',
  description: 'Shop refurbished PlayStation 5, PS4 Pro, Xbox Series X with controllers, cables and warranty.',
};

export default function Page() {
  return <BuyRefurbishedPage searchParams={Promise.resolve({ category: 'gaming' })} />;
}
