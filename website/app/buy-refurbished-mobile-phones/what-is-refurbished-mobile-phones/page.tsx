import React from 'react';
import type { Metadata } from 'next';
import WhatIsRefurbishedPage from '../../what-is-refurbished/page';

export const metadata: Metadata = {
  title: 'What is a Refurbished Phone? Complete Buying Guide & Grades | Sellbar.in',
  description:
    'Everything you need to know about certified refurbished mobile phones. Learn about our 32-point inspection, cosmetic grades, warranty, and why it beats ordinary second-hand.',
};

export default function Page() {
  return <WhatIsRefurbishedPage />;
}
