'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Package,
  Plus,
  Edit,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  BatteryCharging,
} from 'lucide-react';
import { RefurbishedProduct } from '@/lib/types';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<RefurbishedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  // New product form
  const [title, setTitle] = useState('');
  const [categoryName, setCategoryName] = useState('Smartphones');
  const [brandName, setBrandName] = useState('Apple');
  const [sellbarPrice, setSellbarPrice] = useState('');
  const [mrpPrice, setMrpPrice] = useState('');
  const [conditionGrade, setConditionGrade] = useState<'FLAWLESS' | 'LIKE_NEW' | 'SMART_VALUE'>('FLAWLESS');
  const [stockCount, setStockCount] = useState('5');
  const [batteryHealth, setBatteryHealth] = useState('100');
  const [storage, setStorage] = useState('128GB');
  const [color, setColor] = useState('Midnight');
  const [submitting, setSubmitting] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success && data.products) {
        setProducts(data.products);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !sellbarPrice) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          categoryName,
          brandName,
          sellbarPrice: Number(sellbarPrice),
          mrpPrice: Number(mrpPrice) || Number(sellbarPrice) * 1.3,
          conditionGrade,
          stockCount: Number(stockCount),
          batteryHealth: Number(batteryHealth),
          storage,
          color,
          isFeatured: true,
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert('Refurbished product created successfully!');
        setShowAddModal(false);
        setTitle('');
        setSellbarPrice('');
        setMrpPrice('');
        fetchProducts();
      } else {
        alert(data.message || 'Creation failed');
      }
    } catch {
      alert('Error creating product');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-black text-white">Refurbished Inventory & SKUs</h1>
            <p className="text-xs text-slate-400">Manage certified stock, grading certifications, and selling prices</p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add Refurbished Product</span>
        </button>
      </div>

      {/* Inventory Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-[10px] text-slate-400 uppercase font-bold">
              <tr>
                <th className="p-4">Device Title & Specs</th>
                <th className="p-4">Grade</th>
                <th className="p-4">Sellbar Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Battery</th>
                <th className="p-4">Warranty</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-slate-850/40 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-950 rounded-xl p-1 flex items-center justify-center border border-slate-800 shrink-0">
                        <img src={p.images[0]} alt="" className="max-h-8 max-w-full object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-white line-clamp-1">{p.title}</div>
                        <div className="text-[10px] text-slate-400">{p.brandName} • {p.storage}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      {p.conditionGrade}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-white">
                    ₹{p.sellbarPrice.toLocaleString('en-IN')}
                  </td>
                  <td className="p-4">
                    <span className={`font-bold ${p.stockCount <= 2 ? 'text-rose-400' : 'text-slate-300'}`}>
                      {p.stockCount} units
                    </span>
                  </td>
                  <td className="p-4 text-slate-300">
                    {p.batteryHealth}%
                  </td>
                  <td className="p-4 text-slate-300">
                    {p.warrantyMonths} Months
                  </td>
                  <td className="p-4 text-right">
                    <Link
                      href={`/product/${p.slug}`}
                      className="text-xs text-emerald-400 hover:underline font-semibold"
                    >
                      View Live
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Add Refurbished Product</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-300 font-semibold block mb-1">Product Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Apple iPhone 15 Pro Max (256GB) - Flawless"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Brand</label>
                  <select
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white"
                  >
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Dell">Dell</option>
                    <option value="HP">HP</option>
                    <option value="Lenovo">Lenovo</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Condition Grade</label>
                  <select
                    value={conditionGrade}
                    onChange={(e) => setConditionGrade(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white"
                  >
                    <option value="FLAWLESS">FLAWLESS (Grade A+)</option>
                    <option value="LIKE_NEW">LIKE_NEW (Grade A)</option>
                    <option value="SMART_VALUE">SMART_VALUE (Grade B)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Sellbar Selling Price (₹) *</label>
                  <input
                    type="number"
                    required
                    value={sellbarPrice}
                    onChange={(e) => setSellbarPrice(e.target.value)}
                    placeholder="e.g. 54999"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Original MRP (₹)</label>
                  <input
                    type="number"
                    value={mrpPrice}
                    onChange={(e) => setMrpPrice(e.target.value)}
                    placeholder="e.g. 79900"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Stock Count</label>
                  <input
                    type="number"
                    value={stockCount}
                    onChange={(e) => setStockCount(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Battery Health %</label>
                  <input
                    type="number"
                    value={batteryHealth}
                    onChange={(e) => setBatteryHealth(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Storage</label>
                  <input
                    type="text"
                    value={storage}
                    onChange={(e) => setStorage(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="py-2.5 px-4 bg-slate-800 text-slate-300 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="py-2.5 px-5 bg-emerald-500 text-slate-950 font-bold rounded-xl"
                >
                  {submitting ? 'Creating...' : 'Create & Publish'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
