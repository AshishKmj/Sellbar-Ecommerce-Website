import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import BuyRefurbishedMobilePhonesClient from '@/components/BuyRefurbishedMobilePhonesClient';

export const metadata: Metadata = {
  title: "Sellbar: Buy Refurbished Mobile Phone Online in India at Best Price",
  description:
    'Buy Refurbished Mobile Phone online at an affordable price in India at Sellbar.in. Exclusive discounts, 6-month doorstep warranty, 32-point inspection, and free express delivery. Order Now!',
  keywords:
    'buy refurbished mobile phone, second hand mobile phone, refurbished iphone, renewed samsung phones, buy used mobile, cashify clone, sellbar assured',
};

export default function BuyRefurbishedMobilePhonesPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-phones' });

  return <BuyRefurbishedMobilePhonesClient initialProducts={products} />;
}
