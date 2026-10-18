'use client';

import React from 'react';
import MobilePriceListView from '@/components/MobilePriceListView';

export default function GooglePriceListPage() {
  return (
    <MobilePriceListView
      brandName="Google Pixel"
      tagline="Latest Google Pixel smartphone prices, Gemini AI camera features, and refurbished savings."
      models={[
        { name: 'Google Pixel 9 Pro XL', ram: '256GB / 16GB', price: '₹1,24,999', refurbishedPrice: '₹98,999' },
        { name: 'Google Pixel 9', ram: '128GB / 12GB', price: '₹79,999', refurbishedPrice: '₹58,499' },
        { name: 'Google Pixel 8 Pro', ram: '128GB / 12GB', price: '₹84,999', refurbishedPrice: '₹52,999' },
        { name: 'Google Pixel 8', ram: '128GB / 8GB', price: '₹59,999', refurbishedPrice: '₹39,999' },
        { name: 'Google Pixel 7a', ram: '128GB / 8GB', price: '₹37,999', refurbishedPrice: '₹24,999' },
      ]}
    />
  );
}
