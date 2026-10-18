'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import LoginModal from '@/components/LoginModal';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 bg-gray-50/50">
      <LoginModal
        isOpen={true}
        onClose={() => router.push('/')}
        onSuccess={() => {
          router.push('/account');
          router.refresh();
        }}
      />
    </div>
  );
}
