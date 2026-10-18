'use client';

import React from 'react';
import MobilePriceListView from '@/components/MobilePriceListView';

export default function XiaomiPriceListPage() {
  return (
    <MobilePriceListView
      brandName="Xiaomi"
      tagline="Latest Xiaomi and Redmi smartphone prices, specs, and certified renewed offers in India."
      models={[
        { name: 'Xiaomi 14 Ultra', ram: '512GB / 16GB', price: '₹99,999', refurbishedPrice: '₹72,999' },
        { name: 'Xiaomi 14', ram: '256GB / 12GB', price: '₹69,999', refurbishedPrice: '₹48,999' },
        { name: 'Redmi Note 13 Pro+ 5G', ram: '256GB / 8GB', price: '₹31,999', refurbishedPrice: '₹22,499' },
        { name: 'Redmi Note 12 Pro 5G', ram: '128GB / 6GB', price: '₹21,999', refurbishedPrice: '₹14,999' },
        { name: 'Redmi Note 4', ram: '64GB / 4GB', price: '₹12,999', refurbishedPrice: '₹3,499' },
      ]}
    />
  );
}
