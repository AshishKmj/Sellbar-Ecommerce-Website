'use client';

import React, { use } from 'react';
import RepairServiceView from '@/components/RepairServiceView';

interface PageProps {
  params?: Promise<{ slug?: string[] }>;
}

export default function MicRepairPage({ params }: PageProps) {
  const resolved = params ? use(params) : {};
  return (
    <RepairServiceView
      serviceName="Microphone & Audio IC Repair"
      serviceDescription="Callers unable to hear you or voice recording muffled? Get quick microphone diagnostic and doorstep repair."
      basePrice="₹449"
      slug={resolved?.slug}
    />
  );
}
