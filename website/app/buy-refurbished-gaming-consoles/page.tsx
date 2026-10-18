import React from 'react';
import type { Metadata } from 'next';
import { db } from '@/lib/db';
import RefurbishedCategoryHub from '@/components/RefurbishedCategoryHub';

export const metadata: Metadata = {
  title: 'Buy Refurbished PS5, PS4 & Xbox Gaming Consoles | Sellbar Assured Up to 45% Off',
  description:
    'Buy certified refurbished gaming consoles in India at Sellbar.in. Pre-owned Sony PS5 Slim, PS4 Pro, Microsoft Xbox Series X & Nintendo Switch OLED with original controllers, HDMI cords & 6-month warranty.',
  keywords: 'buy refurbished ps5, renewed playstation 4, used xbox series x, refurbished nintendo switch india',
};

export default function BuyRefurbishedGamingConsolesPage() {
  const products = db.getRefurbishedProducts({ categoryId: 'cat-gaming' });

  const popularBrands = [
    { name: 'Sony PlayStation', slug: 'sony' },
    { name: 'Microsoft Xbox', slug: 'microsoft' },
    { name: 'Nintendo', slug: 'nintendo' },
  ];

  const faqs = [
    {
      q: 'Are optical disc drives and controllers tested on refurbished consoles?',
      a: 'Yes, every console undergoes complete drive read/write testing, HDMI 2.1 4K 120Hz signal verification, Wi-Fi latency checks, and full controller button/stick drift calibration tests.',
    },
    {
      q: 'What cables and accessories are included with renewed consoles?',
      a: 'Each console includes an authentic wireless controller, power cable, high-speed 4K HDMI cable, and USB-C charging cord packed securely in shock-absorbent packaging.',
    },
    {
      q: 'Can I access online multiplayer networks (PSN, Xbox Live)?',
      a: 'Yes! All consoles are factory wiped and verified to have clean hardware serials with zero network bans on PlayStation Network or Xbox Live.',
    },
  ];

  const buyingGuideContent = [
    'Level up your gaming setup without overspending. Sellbar certified refurbished gaming consoles give you access to blockbuster 4K titles like Spider-Man 2, GTA V, God of War Ragnarök, and Forza Horizon at huge savings.',
    'Every console is thoroughly sanitized, serviced with fresh thermal paste if necessary, and backed by Sellbar warranty and instant doorstep returns.',
  ];

  return (
    <RefurbishedCategoryHub
      categorySlug="gaming"
      categoryTitle="Buy Certified Refurbished Gaming Consoles"
      categorySubtitle="Shop PlayStation 5, PS4 Pro, Xbox Series X & Nintendo Switch with verified controllers, HDMI cables, and doorstep warranty."
      badgeText="Sellbar Assured Gaming"
      popularBrands={popularBrands}
      products={products}
      faqs={faqs}
      buyingGuideTitle="Everything You Need to Know Before Buying a Refurbished Console"
      buyingGuideContent={buyingGuideContent}
    />
  );
}
