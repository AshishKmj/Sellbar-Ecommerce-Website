import React from 'react';
import type { Metadata } from 'next';
import SellCategoryView from '@/components/SellCategoryView';

export const metadata: Metadata = {
  title: 'Sell Old Television & Smart TV Online | Sellbar.in',
  description:
    'Sell your used Smart TV, LED, OLED, or QLED television online. Instant doorstep inspection, safe wall unmounting, and instant cash with Sellbar.',
  keywords: 'sell old television, sell smart tv, sell sony bravia, sell samsung tv, sell used lg tv',
};

export default function SellOldTelevisionPage() {
  const brands = [
    {
      name: 'Samsung',
      slug: 'samsung',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg',
    },
    {
      name: 'Sony',
      slug: 'sony',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/3e072dc2-6d7b.jpg',
    },
    {
      name: 'LG',
      slug: 'lg',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/bdbdc48e-dd24.jpg',
    },
    {
      name: 'Xiaomi',
      slug: 'xiaomi',
      popular: true,
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg',
    },
    {
      name: 'OnePlus',
      slug: 'oneplus',
      logoUrl: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/ac5c9a7b-76b5.jpg',
    },
  ];

  const topModels = [
    {
      id: 'tv-sony-55-oled',
      slug: 'sony-bravia-xr-55-inch-4k-oled-tv',
      name: 'Sony Bravia XR 55" 4K HDR Google Smart OLED TV',
      brand: 'Sony',
      maxPrice: 42000,
      imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
      specs: 'Acoustic Surface Audio+ / 120Hz',
    },
    {
      id: 'tv-sam-55-qled',
      slug: 'samsung-55-inch-4k-qled-smart-tv',
      name: 'Samsung 55" Neo QLED 4K Ultra HD Smart TV',
      brand: 'Samsung',
      maxPrice: 38000,
      imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
      specs: 'Quantum Matrix Technology',
    },
    {
      id: 'tv-lg-55-oled',
      slug: 'lg-c-series-55-inch-4k-oled-tv',
      name: 'LG C-Series 55" 4K Smart OLED TV',
      brand: 'LG',
      maxPrice: 39000,
      imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
      specs: 'Dolby Vision / α9 AI Processor',
    },
    {
      id: 'tv-mi-50-4k',
      slug: 'xiaomi-smart-tv-50-inch-4k-hdr',
      name: 'Xiaomi Mi Smart TV X-Series 50" 4K HDR',
      brand: 'Xiaomi',
      maxPrice: 17500,
      imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
      specs: 'PatchWall & Android TV',
    },
    {
      id: 'tv-oneplus-43',
      slug: 'oneplus-tv-43-inch-full-hd',
      name: 'OnePlus TV Y1S Pro 43" 4K Ultra HD Smart TV',
      brand: 'OnePlus',
      maxPrice: 14000,
      imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
      specs: 'Gamma Engine / Dolby Audio',
    },
  ];

  const faqs = [
    {
      q: 'Does Sellbar help with unmounting the television from the wall?',
      a: 'Yes! Our trained pickup technicians arrive equipped with standard tools to safely dismount the TV from wall brackets without causing damage to your wall or the TV panel.',
    },
    {
      q: 'What aspects are checked during the television inspection?',
      a: 'We inspect the display panel for vertical/horizontal lines, screen bleed, dead pixels, and backlight uniformity. We also test audio speaker clarity, WiFi/Bluetooth connectivity, HDMI ports, and remote control responsiveness.',
    },
    {
      q: 'Do I need to have the tabletop stand if the TV was wall-mounted?',
      a: 'While providing the original tabletop legs or stand yields a small price advantage, we still purchase TVs without them as long as the panel is working properly.',
    },
  ];

  const seoGuideContent = [
    'Upgrading your living room with a newer screen? Sell your pre-owned Smart TV with Sellbar and skip the dangerous hassle of transporting large fragile panels to local shops.',
    'Sellbar offers professional doorstep inspection, wall unmounting assistance, and immediate digital payment across all major metropolitan areas.',
  ];

  return (
    <SellCategoryView
      categorySlug="sell-old-television"
      categoryName="Television"
      deviceType="tv"
      title="Sell Old Television & Smart TV For Instant Cash"
      subtitle="Best market price for your used Smart TV, OLED, QLED, or 4K LED screen. Free doorstep evaluation, wall unmount assistance, and instant payment on Sellbar."
      brands={brands}
      topModels={topModels}
      faqs={faqs}
      seoGuideTitle="Sell Used Television Online in India - Doorstep Unmounting & Instant Payment"
      seoGuideContent={seoGuideContent}
    />
  );
}
