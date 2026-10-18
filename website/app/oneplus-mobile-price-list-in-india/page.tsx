'use client';

import React from 'react';
import MobilePriceListView from '@/components/MobilePriceListView';

export default function OnePlusPriceListPage() {
  return (
    <MobilePriceListView
      brandName="OnePlus"
      tagline="Latest OnePlus flagship and Nord series phone prices with certified warranty in India."
      models={[
        { name: 'OnePlus 12 5G', ram: '256GB / 12GB', price: '₹64,999', refurbishedPrice: '₹47,999' },
        { name: 'OnePlus 12R', ram: '128GB / 8GB', price: '₹39,999', refurbishedPrice: '₹29,999' },
        { name: 'OnePlus 11 5G', ram: '128GB / 8GB', price: '₹54,999', refurbishedPrice: '₹36,499' },
        { name: 'OnePlus 9 Pro 5G', ram: '128GB / 8GB', price: '₹49,999', refurbishedPrice: '₹22,999' },
        { name: 'OnePlus Nord CE 4 5G', ram: '128GB / 8GB', price: '₹24,999', refurbishedPrice: '₹17,499' },
      ]}
    />
  );
}
