'use client';

import React, { use } from 'react';
import RepairServiceView from '@/components/RepairServiceView';

interface PageProps {
  params?: Promise<{ slug?: string[] }>;
}

export default function BackPanelRepairPage({ params }: PageProps) {
  const resolved = params ? use(params) : {};
  return (
    <RepairServiceView
      serviceName="Rear Glass & Back Panel Replacement"
      serviceDescription="Scratched, dented, or broken back glass? Restored to factory finish with precision laser-fit panels."
      basePrice="₹799"
      slug={resolved?.slug}
    />
  );
}
