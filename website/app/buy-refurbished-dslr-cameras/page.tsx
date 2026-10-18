import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import BuyRefurbishedCamerasClient from '@/components/BuyRefurbishedCamerasClient';

export const metadata: Metadata = {
  title: "Sellbar: Buy Refurbished DSLR Camera Online in India at Best Price",
  description:
    'Buy Refurbished DSLR Camera online at an affordable price in India at Sellbar.in. Canon EOS, Nikon & Sony Alpha with shutter audit, clean sensor guarantee, 6-month warranty, and free express delivery. Order Now!',
  keywords:
    'buy refurbished dslr camera, used canon camera, refurbished nikon dslr, action cameras gopro, sellbar assured, cashify clone',
};

export default function BuyRefurbishedDslrCamerasPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-cameras' });

  return <BuyRefurbishedCamerasClient initialProducts={products} />;
}
