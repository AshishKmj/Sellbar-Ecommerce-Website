'use client';

import React, { use } from 'react';
import RepairServiceView from '@/components/RepairServiceView';

interface PageProps {
  params?: Promise<{ slug?: string[] }>;
}

export default function ChargingJackRepairPage({ params }: PageProps) {
  const resolved = params ? use(params) : {};
  return (
    <RepairServiceView
      serviceName="Charging Port & Jack Replacement"
      serviceDescription="Phone not charging or loose port? Get an OEM-grade charging jack replaced in 30 minutes at your doorstep."
      basePrice="₹499"
      slug={resolved?.slug}
    />
  );
}
