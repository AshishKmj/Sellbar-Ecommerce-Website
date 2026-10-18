import React from 'react';
import type { Metadata } from 'next';
import BuyRefurbishedPage from '../buy-refurbished/page';

export const metadata: Metadata = {
  title: 'Buy Refurbished DSLR Cameras & Lenses | Sellbar.in',
  description: 'Shop tested Canon, Nikon, and Sony Alpha mirrorless cameras and zoom lenses with warranty.',
};

export default function Page() {
  return <BuyRefurbishedPage searchParams={Promise.resolve({ category: 'cameras' })} />;
}
