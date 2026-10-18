import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recycle Old Mobile Phone & Plant a Tree | Sellbar.in',
  description:
    'Free doorstep pickup for non-working, broken, and scrap electronics. Certified zero-landfill e-waste recycling and get a geo-tagged Tree Planting Certificate.',
  keywords: 'recycle old mobile phone, e-waste recycling, scrap phone pickup, plant a tree recycle',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
