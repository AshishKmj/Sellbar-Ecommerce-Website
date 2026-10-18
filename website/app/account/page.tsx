import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
import {
  User,
  ShoppingBag,
  ArrowRightLeft,
  MapPin,
  Wallet,
  ShieldCheck,
  ChevronRight,
  LogOut,
  Clock,
} from 'lucide-react';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export default async function AccountPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }
  const buybackOrders = db.getBuybackOrdersByUser(user.id);
  const storeOrders = db.getCustomerOrdersByUser(user.id);
  const addresses = db.getUserAddresses(user.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Profile Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        <div className="flex items-center gap-5 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black text-2xl shadow-xl shadow-emerald-500/20 shrink-0">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-white">{user?.name || 'Customer'}</h1>
            <p className="text-xs text-slate-400">+91 {user?.phone} • {user?.email || 'customer@sellbar.in'}</p>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded-full">
              {user?.role || 'Customer'} Account
            </span>
          </div>
        </div>

        {/* Wallet Balance Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 w-full sm:w-auto">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Wallet className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-bold">Sellbar Wallet Balance</div>
            <div className="text-lg font-black text-emerald-400">₹{(user?.walletBalance || 0).toLocaleString('en-IN')}</div>
          </div>
        </div>
      </div>

      {/* Quick Nav Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/account/sell-orders"
          className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 flex flex-col justify-between transition group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <span className="text-lg font-black text-white">{buybackOrders.length}</span>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm group-hover:text-emerald-400 transition">Device Sell Orders</h3>
            <p className="text-xs text-slate-400 mt-1">Track doorstep inspection, technicians & instant payouts</p>
          </div>
        </Link>

        <Link
          href="/account/orders"
          className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 flex flex-col justify-between transition group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-lg font-black text-white">{storeOrders.length}</span>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm group-hover:text-emerald-400 transition">Store Purchases</h3>
            <p className="text-xs text-slate-400 mt-1">Certified refurbished orders, invoices & courier tracking</p>
          </div>
        </Link>

        <Link
          href="/account/addresses"
          className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 flex flex-col justify-between transition group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-lg font-black text-white">{addresses.length}</span>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm group-hover:text-emerald-400 transition">Saved Addresses</h3>
            <p className="text-xs text-slate-400 mt-1">Manage delivery locations and pickup addresses</p>
          </div>
        </Link>
      </div>

      {/* Recent Buyback Pickup */}
      {buybackOrders.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Active Sell Order</h2>
            <Link href="/account/sell-orders" className="text-xs font-bold text-emerald-400 hover:underline">
              View All
            </Link>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-950 rounded-2xl p-1.5 flex items-center justify-center border border-slate-800 shrink-0">
                <img src={buybackOrders[0].modelImage} alt="" className="max-h-12 max-w-full object-contain" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  {buybackOrders[0].status}
                </span>
                <h4 className="text-sm font-bold text-white">{buybackOrders[0].modelName} ({buybackOrders[0].variantTitle})</h4>
                <div className="text-xs text-slate-400">Ref: {buybackOrders[0].orderNumber} • Technician: {buybackOrders[0].assignedTechnicianName}</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-lg font-black text-emerald-400">₹{buybackOrders[0].quotedPrice.toLocaleString('en-IN')}</div>
              <div className="text-[11px] text-slate-400">Scheduled: {buybackOrders[0].pickupDate}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
