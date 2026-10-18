// Sellbar.in Shopping Cart State & Synchronizer

import { RefurbishedProduct, CartItem } from '@/lib/types';

const CART_STORAGE_KEY = 'sellbar_cart_v1';

export function getLocalCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveLocalCart(items: CartItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('sellbar-cart-updated'));
  } catch {
    // ignore
  }
}

export function addToCart(product: RefurbishedProduct, quantity = 1): CartItem[] {
  const current = getLocalCart();
  const existingIdx = current.findIndex((item) => item.product.id === product.id);

  if (existingIdx !== -1) {
    current[existingIdx].quantity += quantity;
  } else {
    current.push({ product, quantity });
  }

  saveLocalCart(current);
  return current;
}

export function updateCartQuantity(productId: string, quantity: number): CartItem[] {
  let current = getLocalCart();
  if (quantity <= 0) {
    current = current.filter((item) => item.product.id !== productId);
  } else {
    const idx = current.findIndex((item) => item.product.id === productId);
    if (idx !== -1) {
      current[idx].quantity = quantity;
    }
  }
  saveLocalCart(current);
  return current;
}

export function removeFromCart(productId: string): CartItem[] {
  const current = getLocalCart().filter((item) => item.product.id !== productId);
  saveLocalCart(current);
  return current;
}

export function clearCart(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(CART_STORAGE_KEY);
    window.dispatchEvent(new Event('sellbar-cart-updated'));
  } catch {
    // ignore
  }
}

export function calculateCartSummary(items: CartItem[], discountAmount = 0) {
  const subtotal = items.reduce((sum, item) => sum + item.product.sellbarPrice * item.quantity, 0);
  // GST 18% is included in the consumer price in Indian electronics retail
  const taxGstAmount = Math.round((subtotal * 18) / 118);
  const totalAmount = Math.max(0, subtotal - discountAmount);
  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    subtotal,
    discountAmount,
    taxGstAmount,
    shippingFee: 0, // Free insured shipping across India
    totalAmount,
    totalItemsCount,
  };
}
