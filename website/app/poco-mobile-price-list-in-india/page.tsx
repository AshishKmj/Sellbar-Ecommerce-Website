'use client';

import React from 'react';
import MobilePriceListView from '@/components/MobilePriceListView';

export default function PocoPriceListPage() {
  return (
    <MobilePriceListView
      brandName="Poco"
      tagline="Latest Poco high-performance gaming phone prices and certified renewed deals in India."
      models={[
        { name: 'Poco F6 Pro 5G', ram: '256GB / 12GB', price: '₹34,999', refurbishedPrice: '₹24,999' },
        { name: 'Poco X6 Pro 5G', ram: '256GB / 8GB', price: '₹24,999', refurbishedPrice: '₹17,499' },
        { name: 'Poco X6 5G', ram: '128GB / 8GB', price: '₹18,999', refurbishedPrice: '₹12,999' },
        { name: 'Poco M6 Pro 5G', ram: '128GB / 6GB', price: '₹12,499', refurbishedPrice: '₹8,499' },
      ]}
    />
  );
}
