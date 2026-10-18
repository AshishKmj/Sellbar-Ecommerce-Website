import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Certified Refurbished Gadgets With 12M Warranty | Sellbar.in',
  description:
    'Buy certified refurbished smartphones, laptops, smartwatches, and tablets at up to 70% off. 32-point quality check, 12-month warranty, and 7-day replacement on Sellbar.',
  keywords: 'buy refurbished gadgets, buy renewed phones, refurbished macbook, certified second hand electronics',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
