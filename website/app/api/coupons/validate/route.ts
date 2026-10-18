import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code, orderAmount } = body;

    if (!code) {
      return NextResponse.json({ success: false, message: 'Coupon code is required.' }, { status: 400 });
    }

    const coupon = db.getCouponByCode(code);
    if (!coupon) {
      return NextResponse.json({ success: false, message: 'Invalid or expired coupon code.' }, { status: 400 });
    }

    const subtotal = Number(orderAmount) || 0;
    if (subtotal < coupon.minOrderValue) {
      return NextResponse.json({
        success: false,
        message: `This coupon requires a minimum cart value of ₹${coupon.minOrderValue.toLocaleString('en-IN')}.`,
      }, { status: 400 });
    }

    let discount = 0;
    if (coupon.discountType === 'PERCENTAGE') {
      discount = Math.round((subtotal * coupon.discountValue) / 100);
      if (coupon.maxDiscount && discount > coupon.maxDiscount) {
        discount = coupon.maxDiscount;
      }
    } else {
      discount = coupon.discountValue;
    }

    return NextResponse.json({
      success: true,
      message: `Coupon applied: ${coupon.description}`,
      coupon: {
        code: coupon.code,
        description: coupon.description,
        discountAmount: discount,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Coupon validation failed', error: String(error) }, { status: 500 });
  }
}
