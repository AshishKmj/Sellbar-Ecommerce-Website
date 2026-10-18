'use client';

import React, { use } from 'react';
import RepairServiceView from '@/components/RepairServiceView';

interface PageProps {
  params?: Promise<{ slug?: string[] }>;
}

export default function ScreenRepairPage({ params }: PageProps) {
  const resolved = params ? use(params) : {};
  return (
    <RepairServiceView
      serviceName="Screen Glass & Display Replacement"
      serviceDescription="Broken or cracked screen? Get OEM-grade display replacement in 30 minutes at your doorstep with 6 months warranty."
      basePrice="₹1,299"
      slug={resolved?.slug}
    />
  );
}
