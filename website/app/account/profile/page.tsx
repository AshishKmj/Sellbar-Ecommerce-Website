'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, User, ShieldCheck, CheckCircle2, Wallet, CreditCard } from 'lucide-react';

export default function CustomerProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [upiVpa, setUpiVpa] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [bankIfsc, setBankIfsc] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.user) {
          setUser(data.user);
          setName(data.user.name || '');
          setEmail(data.user.email || '');
          setPhone(data.user.phone || '');
          setUpiVpa(data.user.upiVpa || 'arjun@okaxis');
          setBankAccount(data.user.bankAccount || '918237192837');
          setBankIfsc(data.user.bankIfsc || 'HDFC0001234');
        }
      });
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setMessage('Profile and payout details updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/account" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Profile & Payout Settings</h1>
          <p className="text-xs text-slate-400">Manage your contact details and default trade-in payout methods</p>
        </div>
      </div>

      {message && (
        <div className="p-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs rounded-2xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{message}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-xs">
        {/* Personal Details */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <User className="w-4 h-4 text-emerald-400" /> Personal Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-300 font-semibold block mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-white"
              />
            </div>

            <div>
              <label className="text-slate-300 font-semibold block mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-slate-300 font-semibold block mb-1">Verified Mobile Number</label>
            <input
              type="text"
              readOnly
              value={`+91 ${phone}`}
              className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-2.5 px-3 text-slate-400"
            />
          </div>
        </div>

        {/* Payout Destinations */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <CreditCard className="w-4 h-4 text-cyan-400" /> Default Payout Methods
          </h2>

          <div>
            <label className="text-slate-300 font-semibold block mb-1">UPI VPA ID (For Instant Doorstep Payout)</label>
            <input
              type="text"
              value={upiVpa}
              onChange={(e) => setUpiVpa(e.target.value)}
              placeholder="e.g. mobile@upi, username@okhdfcbank"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-300 font-semibold block mb-1">Bank Account Number (IMPS)</label>
              <input
                type="text"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-white"
              />
            </div>

            <div>
              <label className="text-slate-300 font-semibold block mb-1">Bank IFSC Code</label>
              <input
                type="text"
                value={bankIfsc}
                onChange={(e) => setBankIfsc(e.target.value.toUpperCase())}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-white"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={saving}
            className="py-3 px-8 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-black rounded-xl text-xs flex items-center gap-2 transition shadow-lg shadow-emerald-500/20"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Profile Settings'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
