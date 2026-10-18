import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find New Phone, Compare Specs & Exchange Trade-In | Sellbar.in',
  description:
    'Discover and compare top smartphones across Apple, Samsung, OnePlus, Xiaomi, and Google. Calculate instant trade-in deductions with your old phone.',
  keywords: 'find new phone, compare smartphones, mobile exchange price, phone comparison',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
