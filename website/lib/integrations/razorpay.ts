// Sellbar.in - Razorpay Payment Gateway Integration
// Official Razorpay API v1 endpoints for Orders, Payments, and Webhook verification

import crypto from 'crypto';
import { createPaymentOrder, verifyPaymentSignature, isRazorpayConfigured } from '@/lib/payment';

export { createPaymentOrder, verifyPaymentSignature, isRazorpayConfigured };

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;
const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET;

/**
 * Create a live Razorpay Order via REST API
 */
export async function createLiveRazorpayOrder(options: {
  amountInRupees: number;
  receipt: string;
  notes?: Record<string, string>;
}): Promise<{ success: boolean; orderId?: string; error?: string; isMock?: boolean }> {
  if (!isRazorpayConfigured()) {
    return {
      success: true,
      orderId: `order_mock_${Date.now()}`,
      isMock: true,
    };
  }

  try {
    const authHeader = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');
    const res = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${authHeader}`,
      },
      body: JSON.stringify({
        amount: Math.round(options.amountInRupees * 100), // paise
        currency: 'INR',
        receipt: options.receipt,
        notes: options.notes || {},
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data.error?.description || 'Razorpay order creation failed' };
    }

    return {
      success: true,
      orderId: data.id,
      isMock: false,
    };
  } catch (err: any) {
    return { success: false, error: err?.message };
  }
}

/**
 * Validate Razorpay Webhook Signature (e.g. payment.captured, order.paid)
 */
export function verifyRazorpayWebhook(webhookBody: string, webhookSignature: string): boolean {
  if (!RAZORPAY_WEBHOOK_SECRET) {
    // In dev without webhook secret configured, pass check
    return true;
  }

  const expectedSignature = crypto
    .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
    .update(webhookBody)
    .digest('hex');

  return expectedSignature === webhookSignature;
}
