'use client';

import React from 'react';
import MobilePriceListView from '@/components/MobilePriceListView';

export default function ApplePriceListPage() {
  return (
    <MobilePriceListView
      brandName="Apple"
      tagline="Latest Apple iPhone prices, launch specs, and verified refurbished prices in India."
      models={[
        { name: 'Apple iPhone 16 Pro Max', ram: '256GB / 8GB', price: '₹1,44,900', refurbishedPrice: '₹1,18,000' },
        { name: 'Apple iPhone 16', ram: '128GB / 8GB', price: '₹79,900', refurbishedPrice: '₹62,500' },
        { name: 'Apple iPhone 15 Pro', ram: '128GB / 8GB', price: '₹1,19,900', refurbishedPrice: '₹84,999' },
        { name: 'Apple iPhone 15', ram: '128GB / 6GB', price: '₹69,900', refurbishedPrice: '₹51,999' },
        { name: 'Apple iPhone 14', ram: '128GB / 6GB', price: '₹59,900', refurbishedPrice: '₹41,999' },
        { name: 'Apple iPhone 13', ram: '128GB / 4GB', price: '₹49,900', refurbishedPrice: '₹34,499' },
        { name: 'Apple iPhone 12', ram: '64GB / 4GB', price: '₹39,999', refurbishedPrice: '₹22,999' },
        { name: 'Apple iPhone 11', ram: '64GB / 4GB', price: '₹31,999', refurbishedPrice: '₹17,499' },
      ]}
    />
  );
}
