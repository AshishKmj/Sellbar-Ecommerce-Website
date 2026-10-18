'use client';

import React, { use } from 'react';
import RepairServiceView from '@/components/RepairServiceView';

interface PageProps {
  params?: Promise<{ slug?: string[] }>;
}

export default function BatteryRepairPage({ params }: PageProps) {
  const resolved = params ? use(params) : {};
  return (
    <RepairServiceView
      serviceName="Phone Battery Replacement"
      serviceDescription="Fast-draining or swollen battery? Replace with brand-certified battery cell backed by 6 months replacement warranty."
      basePrice="₹899"
      slug={resolved?.slug}
    />
  );
}
