import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
import { ArrowLeft, MapPin, Plus } from 'lucide-react';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export default async function CustomerAddressesPage() {
  const user = await getCurrentUser();
  const addresses = user ? db.getUserAddresses(user.id) : [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/account" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Saved Addresses</h1>
          <p className="text-xs text-slate-400">Manage doorstep pickup and delivery addresses across India</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div key={addr.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3 relative">
            {addr.isDefault && (
              <span className="absolute top-6 right-6 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                Default Address
              </span>
            )}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <h3 className="font-bold text-white text-sm">{addr.fullName}</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {addr.streetAddress}<br />
              {addr.landmark ? `Landmark: ${addr.landmark}, ` : ''}
              {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
            </p>
            <div className="text-xs text-slate-400 pt-1">
              Mobile: +91 {addr.phone}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
