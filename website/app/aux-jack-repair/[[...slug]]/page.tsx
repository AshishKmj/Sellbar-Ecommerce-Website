'use client';

import React, { use } from 'react';
import RepairServiceView from '@/components/RepairServiceView';

interface PageProps {
  params?: Promise<{ slug?: string[] }>;
}

export default function AuxJackRepairPage({ params }: PageProps) {
  const resolved = params ? use(params) : {};
  return (
    <RepairServiceView
      serviceName="3.5mm Headphone / Aux Audio Jack Repair"
      serviceDescription="No sound from wired earphones or jack pin jammed? Expert doorstep audio socket replacement in 30 minutes."
      basePrice="₹399"
      slug={resolved?.slug}
    />
  );
}
