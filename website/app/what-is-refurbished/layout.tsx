import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is a Refurbished Phone? Complete Buying Guide & Grades | Sellbar.in',
  description:
    'Everything you need to know about certified refurbished mobile phones. Learn about our 32-point inspection, cosmetic grades, warranty, and why it beats ordinary second-hand.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
