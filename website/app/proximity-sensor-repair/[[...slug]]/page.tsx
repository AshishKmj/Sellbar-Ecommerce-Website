'use client';

import React, { use } from 'react';
import RepairServiceView from '@/components/RepairServiceView';

interface PageProps {
  params?: Promise<{ slug?: string[] }>;
}

export default function ProximitySensorRepairPage({ params }: PageProps) {
  const resolved = params ? use(params) : {};
  return (
    <RepairServiceView
      serviceName="Proximity Sensor & Ambient Light Repair"
      serviceDescription="Screen not turning off during phone calls? Fast sensor recalibration and doorstep component replacement."
      basePrice="₹499"
      slug={resolved?.slug}
    />
  );
}
