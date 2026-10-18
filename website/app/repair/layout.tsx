import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fast Doorstep Mobile & Laptop Repair in 30 Mins | Sellbar.in',
  description:
    'Doorstep mobile screen replacement, battery replacement, and diagnostics within 30 minutes in front of your eyes. OEM grade parts and up to 6 months warranty.',
  keywords: 'doorstep phone repair, mobile screen replacement, iphone screen repair, battery replacement doorstep',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
