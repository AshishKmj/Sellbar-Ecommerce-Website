import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Bell, Shield, Lock, Trash2 } from 'lucide-react';

export default function AccountSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/account" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Account Settings</h1>
          <p className="text-xs text-slate-400">Manage communication preferences, session security, and privacy</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-xs text-slate-300">
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <Bell className="w-4 h-4 text-emerald-400" /> Notifications & SMS Alerts
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-emerald-500 w-4 h-4" />
              <span>Receive WhatsApp updates for doorstep technician pickup arrival</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-emerald-500 w-4 h-4" />
              <span>SMS notifications on instant UPI payout release</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-emerald-500 w-4 h-4" />
              <span>Exclusive coupon alerts (e.g. SELLBAR500 and Festive Offers)</span>
            </label>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <Shield className="w-4 h-4 text-cyan-400" /> Privacy & Data Sanitization
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Sellbar guarantees NIST 800-88 cryptographic sanitization on all devices sold to our platform.
            Your phone and bank details are strictly used for verified trade-in payouts.
          </p>
        </div>
      </div>
    </div>
  );
}
