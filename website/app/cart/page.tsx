'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Tag,
  Check,
  Zap,
} from 'lucide-react';
import { CartItem } from '@/lib/types';
import { getLocalCart, updateCartQuantity, removeFromCart, calculateCartSummary } from '@/lib/cart';

export default function CartPage() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<any>(null);
  const [couponError, setCouponError] = useState('');
  const [couponLoading, setCouponLoading] = useState(false);

  useEffect(() => {
    setItems(getLocalCart());
  }, []);

  const handleQuantity = (productId: string, newQty: number) => {
    const updated = updateCartQuantity(productId, newQty);
    setItems(updated);
  };

  const handleRemove = (productId: string) => {
    const updated = removeFromCart(productId);
    setItems(updated);
  };

  const handleApplyCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;

    setCouponLoading(true);
    setCouponError('');

    try {
      const summaryBefore = calculateCartSummary(items, 0);
      const res = await fetch('/api/coupons/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: couponInput.trim().toUpperCase(),
          orderAmount: summaryBefore.subtotal,
        }),
      });

      const data = await res.json();
      if (data.success && data.coupon) {
        setAppliedCoupon(data.coupon);
        setCouponInput('');
      } else {
        setCouponError(data.message || 'Invalid coupon');
      }
    } catch {
      setCouponError('Failed to validate coupon.');
    } finally {
      setCouponLoading(false);
    }
  };

  const discountAmount = appliedCoupon ? appliedCoupon.discountAmount : 0;
  const summary = calculateCartSummary(items, discountAmount);

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mx-auto">
          <ShoppingCart className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-black text-white">Your Shopping Cart is Empty</h1>
        <p className="text-xs text-slate-400 max-w-sm mx-auto">
          Explore our certified refurbished collection with up to 12 months warranty and 7-day replacement.
        </p>
        <Link
          href="/buy-refurbished"
          className="inline-flex items-center gap-2 py-3 px-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition"
        >
          <span>Explore Refurbished Deals</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">Shopping Cart ({summary.totalItemsCount})</h1>
        <p className="text-xs text-slate-400 mt-1">Review your certified items before secure Indian checkout</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col sm:flex-row items-center gap-5 justify-between"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-20 h-20 bg-slate-950 rounded-2xl p-2 flex items-center justify-center border border-slate-800 shrink-0">
                  <img src={item.product.images[0]} alt={item.product.title} className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    {item.product.conditionGrade === 'FLAWLESS' ? 'Flawless Grade A+' : item.product.conditionGrade}
                  </span>
                  <h3 className="text-sm font-bold text-white line-clamp-1">{item.product.title}</h3>
                  <div className="text-xs text-slate-400">
                    Warranty: {item.product.warrantyMonths} Months • {item.product.batteryHealth}% Battery
                  </div>
                  <div className="text-sm font-black text-white sm:hidden pt-1">
                    ₹{(item.product.sellbarPrice * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Quantity Controls & Total */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-0 border-slate-800">
                <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl p-1">
                  <button
                    onClick={() => handleQuantity(item.product.id, item.quantity - 1)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg transition"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center text-xs font-bold text-white">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantity(item.product.id, item.quantity + 1)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="hidden sm:block text-right">
                  <div className="text-base font-black text-white">
                    ₹{(item.product.sellbarPrice * item.quantity).toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-slate-500 line-through">
                    ₹{(item.product.mrpPrice * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.product.id)}
                  className="p-2 text-slate-500 hover:text-rose-400 transition"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Trust strip */}
          <div className="bg-slate-950 border border-slate-850 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> 7-Day Replacement Guarantee
            </span>
            <span>•</span>
            <span>Free Insured Delivery Across India</span>
            <span>•</span>
            <span>18% GST Input Tax Credit Eligible</span>
          </div>
        </div>

        {/* Right Summary & Checkout */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Coupon Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
              <Tag className="w-4 h-4 text-emerald-400" /> Apply Promo Code
            </div>

            {appliedCoupon ? (
              <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-emerald-300">{appliedCoupon.code} Applied</div>
                  <div className="text-[11px] text-slate-300">-₹{appliedCoupon.discountAmount.toLocaleString('en-IN')} discount</div>
                </div>
                <button
                  onClick={() => setAppliedCoupon(null)}
                  className="text-xs text-slate-400 hover:text-rose-400 font-bold"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    placeholder="SELLBAR500 or FESTIVE10"
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white uppercase focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    disabled={couponLoading}
                    className="py-2 px-4 bg-slate-800 hover:bg-slate-750 text-white text-xs font-bold rounded-xl transition"
                  >
                    Apply
                  </button>
                </div>
                {couponError && <p className="text-[11px] text-rose-400">{couponError}</p>}
                <div className="text-[11px] text-slate-500 flex gap-2">
                  <span>Try: <strong className="text-slate-300 cursor-pointer" onClick={() => setCouponInput('SELLBAR500')}>SELLBAR500</strong></span>
                  <span>or <strong className="text-slate-300 cursor-pointer" onClick={() => setCouponInput('FESTIVE10')}>FESTIVE10</strong></span>
                </div>
              </form>
            )}
          </div>

          {/* Price Breakdown */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
              Order Summary
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Subtotal ({summary.totalItemsCount} items)</span>
                <span>₹{summary.subtotal.toLocaleString('en-IN')}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Coupon Discount</span>
                  <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-300">
                <span>Shipping & Insurance</span>
                <span className="text-emerald-400 font-bold">FREE</span>
              </div>

              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Includes GST (18%)</span>
                <span>₹{summary.taxGstAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-base font-black text-white">
              <span>Total Payable</span>
              <span className="text-2xl text-emerald-400">
                ₹{summary.totalAmount.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={() => router.push('/checkout')}
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 transition hover:scale-[1.02]"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
