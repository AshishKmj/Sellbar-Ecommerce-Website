import React from 'react';
import type { Metadata } from 'next';
import SellOldMobilePhoneClient from '@/components/SellOldMobilePhoneClient';

export const metadata: Metadata = {
  title: 'Sell Old Mobile Phone & Get Instant Cash At Doorstep | Sellbar.in',
  description:
    "India's most trusted platform to sell old mobile phones. Sell your used smartphone at Sellbar and get instant cash at your doorstep with free pickup & certified data wipe.",
  keywords: 'sell old mobile phone, sell used smartphone, cash for phones, sell iphone, sell samsung phone',
};

export default function SellOldMobilePhonePage() {
  return <SellOldMobilePhoneClient />;
}
