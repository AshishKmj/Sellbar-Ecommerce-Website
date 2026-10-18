import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import BuyRefurbishedLaptopsClient from '@/components/BuyRefurbishedLaptopsClient';

export const metadata: Metadata = {
  title: 'Sellbar: Buy Refurbished Laptop Online in India at Best Price',
  description:
    'Buy Refurbished Laptop online at an affordable price in India at Sellbar.in. Exclusive discounts, 6-month warranty, 32-step quality check, and free doorstep delivery. Order Now!',
  keywords:
    'buy refurbished laptop, second hand laptop, renewed macbook, refurbished dell xps, hp pavilion refurbished, lenovo thinkpad used, cashify clone, sellbar assured',
};

export default function BuyRefurbishedLaptopsPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-laptops' });

  return <BuyRefurbishedLaptopsClient initialProducts={products} />;
}
