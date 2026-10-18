import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { verifyPaymentSignature } from '@/lib/payment';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId, paymentId, razorpayOrderId, razorpaySignature } = body;

    const order = db.getCustomerOrderById(orderId);
    if (!order) {
      return NextResponse.json({ success: false, message: 'Order not found.' }, { status: 404 });
    }

    const verification = verifyPaymentSignature({
      internalOrderId: order.id,
      razorpayPaymentId: paymentId || `pay_sb_${Date.now()}`,
      razorpayOrderId,
      razorpaySignature,
    });

    if (!verification.success) {
      return NextResponse.json({ success: false, message: verification.message }, { status: 400 });
    }

    // Capture payment and update order
    const updated = db.updateCustomerOrderStatus(order.id, 'PROCESSING');
    if (updated) {
      updated.paymentStatus = 'CAPTURED';
      updated.paymentId = paymentId || `pay_sb_${Date.now()}`;
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified and captured successfully!',
      order: updated || order,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Payment verification failed', error: String(error) }, { status: 500 });
  }
}
