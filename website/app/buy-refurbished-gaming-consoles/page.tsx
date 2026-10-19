import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import BuyRefurbishedConsolesClient from '@/components/BuyRefurbishedConsolesClient';

export const metadata: Metadata = {
  title: 'Sellbar: Buy Refurbished Gaming Console Online in India at Best Price',
  description:
    'Buy Refurbished Gaming Console online at an affordable price in India at Sellbar.in. Sony PS5, PS4 Pro & Xbox Series S with controller, 6-month warranty, and free doorstep delivery. Order Now!',
  keywords:
    'buy refurbished ps5, used playstation 4, renewed xbox series s, buy used gaming console, sellbar assured, cashify clone',
};

export default function BuyRefurbishedGamingConsolesPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-gaming' });

  return <BuyRefurbishedConsolesClient initialProducts={products} />;
}
