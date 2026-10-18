import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { createPaymentOrder } from '@/lib/payment';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId } = body;

    const order = db.getCustomerOrderById(orderId);
    if (!order) {
      return NextResponse.json({ success: false, message: 'Order not found' }, { status: 404 });
    }

    const paymentConfig = createPaymentOrder({
      orderId: order.id,
      amount: order.totalAmount,
      currency: 'INR',
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      customerPhone: order.customerPhone,
    });

    return NextResponse.json({
      success: true,
      paymentConfig,
      order: {
        id: order.id,
        orderNumber: order.orderNumber,
        totalAmount: order.totalAmount,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to initiate payment', error: String(error) }, { status: 500 });
  }
}
