import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
import {
  TrendingUp,
  Package,
  ShoppingBag,
  ArrowRightLeft,
  Users,
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
} from 'lucide-react';
import { db } from '@/lib/db';

export default function AdminDashboardPage() {
  const kpis = db.getDashboardKPIs();
  const buybacks = db.getAllBuybackOrders().slice(0, 6);
  const orders = db.getAllCustomerOrders().slice(0, 6);
  const lowStock = db.getRefurbishedProducts().filter((p) => p.stockCount <= 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/25 mb-1">
            Sellbar Executive Operations
          </div>
          <h1 className="text-3xl font-black text-white">Operations & Admin Portal</h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/buyback-orders"
            className="py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition"
          >
            Manage Buybacks
          </Link>
          <Link
            href="/admin/products"
            className="py-2.5 px-4 bg-slate-800 hover:bg-slate-750 text-white font-bold rounded-xl text-xs transition"
          >
            Manage Inventory
          </Link>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Buyback Volume</span>
            <ArrowRightLeft className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-white">
            ₹{kpis.totalBuybackGMV.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-emerald-400 font-semibold">
            {kpis.buybackOrdersCount} total trade-in orders
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Refurbished Sales</span>
            <TrendingUp className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-black text-white">
            ₹{kpis.totalStoreSales.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-cyan-400 font-semibold">
            {kpis.customerOrdersCount} store purchases
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Active Pickups</span>
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-white">
            {kpis.activePickups}
          </div>
          <div className="text-[11px] text-amber-400 font-semibold">
            Scheduled doorstep visits
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Low Stock SKUs</span>
            <AlertTriangle className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-black text-white">
            {kpis.lowStockAlerts}
          </div>
          <div className="text-[11px] text-rose-400 font-semibold">
            &le; 2 units remaining
          </div>
        </div>
      </div>

      {/* 2 Column Operations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Recent Buyback Requests */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <ArrowRightLeft className="w-4 h-4 text-emerald-400" /> Recent Buyback Pickups
            </h2>
            <Link href="/admin/buyback-orders" className="text-xs text-emerald-400 hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {buybacks.map((bb) => (
              <div key={bb.id} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{bb.modelName} ({bb.variantTitle})</div>
                  <div className="text-slate-400 text-[11px]">
                    Customer: {bb.userName} • Slot: {bb.pickupDate}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-emerald-400">₹{bb.quotedPrice.toLocaleString('en-IN')}</div>
                  <span className="inline-block text-[9px] font-bold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full mt-0.5">
                    {bb.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Store Orders */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-cyan-400" /> Recent Store Orders
            </h2>
            <Link href="/admin/orders" className="text-xs text-cyan-400 hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {orders.map((ord) => (
              <div key={ord.id} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">Order {ord.orderNumber}</div>
                  <div className="text-slate-400 text-[11px]">
                    Buyer: {ord.customerName} ({ord.shippingAddress.city})
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white">₹{ord.totalAmount.toLocaleString('en-IN')}</div>
                  <span className="inline-block text-[9px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full mt-0.5">
                    {ord.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
