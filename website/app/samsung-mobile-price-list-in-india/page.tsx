'use client';

import React from 'react';
import MobilePriceListView from '@/components/MobilePriceListView';

export default function SamsungPriceListPage() {
  return (
    <MobilePriceListView
      brandName="Samsung"
      tagline="Latest Samsung Galaxy S, Z Fold, and A-series phone prices and refurbished discounts."
      models={[
        { name: 'Samsung Galaxy S24 Ultra', ram: '256GB / 12GB', price: '₹1,29,999', refurbishedPrice: '₹94,999' },
        { name: 'Samsung Galaxy S24', ram: '128GB / 8GB', price: '₹74,999', refurbishedPrice: '₹54,999' },
        { name: 'Samsung Galaxy S23 Ultra', ram: '256GB / 12GB', price: '₹89,999', refurbishedPrice: '₹68,999' },
        { name: 'Samsung Galaxy S23 FE', ram: '128GB / 8GB', price: '₹44,999', refurbishedPrice: '₹31,499' },
        { name: 'Samsung Galaxy Note 20 5G', ram: '256GB / 8GB', price: '₹55,999', refurbishedPrice: '₹22,999' },
        { name: 'Samsung Galaxy S21 FE 5G', ram: '128GB / 8GB', price: '₹34,999', refurbishedPrice: '₹19,999' },
      ]}
    />
  );
}
