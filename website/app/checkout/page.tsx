'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';
import { CartItem } from '@/lib/types';
import { getLocalCart, clearCart, calculateCartSummary } from '@/lib/cart';
import { lookupPincode } from '@/lib/pincodes';
import PaymentSandboxModal from '@/components/PaymentSandboxModal';

export default function CheckoutPage() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Address Form
  const [fullName, setFullName] = useState('Arjun Sharma');
  const [phone, setPhone] = useState('9876543210');
  const [streetAddress, setStreetAddress] = useState('Flat 402, Prestige Palms, Koramangala 4th Block');
  const [landmark, setLandmark] = useState('Opposite Sony Signal');
  const [pincode, setPincode] = useState('560034');
  const [city, setCity] = useState('Bengaluru');
  const [state, setState] = useState('Karnataka');
  const [pinError, setPinError] = useState('');

  // Payment Selection
  const [paymentMethod, setPaymentMethod] = useState<'RAZORPAY' | 'CASH_ON_DELIVERY'>('RAZORPAY');

  // Order Placement & Modal State
  const [submitting, setSubmitting] = useState(false);
  const [pendingOrder, setPendingOrder] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    const cartItems = getLocalCart();
    if (cartItems.length === 0) {
      router.push('/cart');
      return;
    }
    setItems(cartItems);

    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.user) {
          setCurrentUser(data.user);
          if (data.user.name) setFullName(data.user.name);
          if (data.user.phone) setPhone(data.user.phone);
        }
      })
      .catch(() => {});
  }, [router]);

  const handlePincodeChange = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 6);
    setPincode(clean);
    if (clean.length === 6) {
      const info = lookupPincode(clean);
      setCity(info.city.split('(')[0].trim());
      setState(info.state.split('/')[0].trim());
      setPinError('');
    }
  };

  const summary = calculateCartSummary(items, 0);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length !== 6 || !streetAddress || !fullName || phone.length !== 10) {
      alert('Please fill out all required address details correctly.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/checkout/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          shippingAddress: {
            fullName,
            phone,
            streetAddress,
            landmark,
            city,
            state,
            pincode,
          },
          paymentMethod,
        }),
      });

      const data = await res.json();
      if (data.success && data.order) {
        setPendingOrder(data.order);
        if (paymentMethod === 'CASH_ON_DELIVERY') {
          clearCart();
          router.push(`/order-confirmation/${data.order.id}`);
        } else {
          // Open Payment Sandbox / Razorpay modal
          setShowPaymentModal(true);
        }
      } else {
        alert(data.message || 'Failed to place order.');
      }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handlePaymentSuccess = (paymentId: string) => {
    clearCart();
    setShowPaymentModal(false);
    if (pendingOrder) {
      router.push(`/order-confirmation/${pendingOrder.id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link href="/cart" className="hover:text-white">Cart</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-white font-semibold">Secure Indian Checkout</span>
      </div>

      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Express Checkout</h1>
        <p className="text-xs text-slate-400 mt-1">Free insured doorstep delivery with 7-day replacement guarantee</p>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Address & Payment Method */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Section 1: Delivery Address */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <h2 className="text-base font-bold text-white">1. Delivery Address (India)</h2>
              </div>
              <span className="text-[11px] text-slate-400">Insured Shipping</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Mobile Phone (10 Digits) *</label>
                <div className="flex gap-2">
                  <span className="bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">6-Digit PIN Code *</label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => handlePincodeChange(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
                {pinError && <p className="text-[10px] text-rose-400 mt-1">{pinError}</p>}
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">City / District</label>
                <input
                  type="text"
                  readOnly
                  value={city}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-slate-300"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">State</label>
                <input
                  type="text"
                  readOnly
                  value={state}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-slate-300"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Street Address, Flat / House No, Building *</label>
              <textarea
                required
                rows={2}
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Landmark (Optional)</label>
              <input
                type="text"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                placeholder="e.g. Near Metro Station / Sony Signal"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Section 2: Payment Method */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h2 className="text-base font-bold text-white">2. Select Payment Method</h2>
              </div>
              <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('RAZORPAY')}
                className={`p-4 rounded-2xl border text-left transition flex items-start gap-3.5 ${
                  paymentMethod === 'RAZORPAY'
                    ? 'border-emerald-500 bg-emerald-500/15 text-white'
                    : 'border-slate-800 bg-slate-950 text-slate-400'
                }`}
              >
                <div className="w-5 h-5 rounded-full border border-emerald-500 flex items-center justify-center mt-0.5">
                  {paymentMethod === 'RAZORPAY' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />}
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Online Payment (UPI, Cards, NetBanking)</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Razorpay Gateway • Instant dispatch • All UPI Apps
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('CASH_ON_DELIVERY')}
                className={`p-4 rounded-2xl border text-left transition flex items-start gap-3.5 ${
                  paymentMethod === 'CASH_ON_DELIVERY'
                    ? 'border-emerald-500 bg-emerald-500/15 text-white'
                    : 'border-slate-800 bg-slate-950 text-slate-400'
                }`}
              >
                <div className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center mt-0.5">
                  {paymentMethod === 'CASH_ON_DELIVERY' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />}
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Cash on Delivery (COD)</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Pay at your doorstep upon verification
                  </div>
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
              Items in Order ({summary.totalItemsCount})
            </h3>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {items.map((it) => (
                <div key={it.product.id} className="flex items-center gap-3 text-xs">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl p-1 flex items-center justify-center border border-slate-800 shrink-0">
                    <img src={it.product.images[0]} alt="" className="max-h-10 max-w-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold line-clamp-1">{it.product.title}</div>
                    <div className="text-[11px] text-slate-400">Qty: {it.quantity}</div>
                  </div>
                  <div className="text-white font-bold">
                    ₹{(it.product.sellbarPrice * it.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Subtotal</span>
                <span>₹{summary.subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Doorstep Insured Shipping</span>
                <span className="text-emerald-400 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>GST (18% Included)</span>
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
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-black rounded-2xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 transition hover:scale-[1.02]"
            >
              {submitting ? (
                <span>Placing Order...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {paymentMethod === 'RAZORPAY' ? 'Proceed to Online Payment' : 'Confirm Cash on Delivery'}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

      </form>

      {/* Payment Sandbox Modal */}
      {showPaymentModal && pendingOrder && (
        <PaymentSandboxModal
          orderId={pendingOrder.id}
          orderNumber={pendingOrder.orderNumber}
          amount={pendingOrder.totalAmount}
          onSuccess={handlePaymentSuccess}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
}
