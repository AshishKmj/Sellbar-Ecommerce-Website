import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';
import { calculateCartSummary } from '@/lib/cart';
import { CartItem } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: 'Please sign in to place your order.' }, { status: 401 });
    }

    const body = await req.json();
    const { items, shippingAddress, paymentMethod, couponCode, discountAmount } = body;

    if (!items || !items.length || !shippingAddress) {
      return NextResponse.json({ success: false, message: 'Invalid order request. Items and address required.' }, { status: 400 });
    }

    // Server-side inventory & price verification
    const verifiedItems: any[] = [];
    let serverSubtotal = 0;

    for (const cartItem of items as CartItem[]) {
      const dbProduct = db.getRefurbishedProducts().find((p) => p.id === cartItem.product.id);
      if (!dbProduct) {
        return NextResponse.json({ success: false, message: `Product ${cartItem.product.title} is no longer available.` }, { status: 400 });
      }
      if (dbProduct.stockCount < cartItem.quantity) {
        return NextResponse.json({
          success: false,
          message: `Only ${dbProduct.stockCount} units available for ${dbProduct.title}.`,
        }, { status: 400 });
      }

      const itemTotal = dbProduct.sellbarPrice * cartItem.quantity;
      serverSubtotal += itemTotal;

      verifiedItems.push({
        productId: dbProduct.id,
        productTitle: dbProduct.title,
        productImage: dbProduct.images[0],
        conditionGrade: dbProduct.conditionGrade,
        quantity: cartItem.quantity,
        unitPrice: dbProduct.sellbarPrice,
        totalPrice: itemTotal,
      });
    }

    // Verify discount on server
    let verifiedDiscount = 0;
    if (couponCode) {
      const coupon = db.getCouponByCode(couponCode);
      if (coupon && serverSubtotal >= coupon.minOrderValue) {
        if (coupon.discountType === 'PERCENTAGE') {
          verifiedDiscount = Math.round((serverSubtotal * coupon.discountValue) / 100);
          if (coupon.maxDiscount && verifiedDiscount > coupon.maxDiscount) {
            verifiedDiscount = coupon.maxDiscount;
          }
        } else {
          verifiedDiscount = coupon.discountValue;
        }
      }
    }

    const gstTax = Math.round((serverSubtotal * 18) / 118);
    const finalTotal = Math.max(0, serverSubtotal - verifiedDiscount);

    const isCod = paymentMethod === 'CASH_ON_DELIVERY';

    const order = db.createCustomerOrder({
      userId: user.id,
      customerName: shippingAddress.fullName || user.name,
      customerPhone: shippingAddress.phone || user.phone,
      customerEmail: user.email || 'customer@sellbar.in',
      status: isCod ? 'PROCESSING' : 'PENDING_PAYMENT',
      paymentMethod: paymentMethod || 'RAZORPAY',
      paymentStatus: isCod ? 'COD_VERIFIED' : 'PENDING',
      subtotal: serverSubtotal,
      discountAmount: verifiedDiscount,
      taxGstAmount: gstTax,
      shippingFee: 0,
      totalAmount: finalTotal,
      couponCode: couponCode || undefined,
      shippingAddress: {
        id: `addr-${Date.now()}`,
        userId: user.id,
        fullName: shippingAddress.fullName,
        phone: shippingAddress.phone,
        streetAddress: shippingAddress.streetAddress,
        landmark: shippingAddress.landmark,
        city: shippingAddress.city,
        state: shippingAddress.state,
        pincode: shippingAddress.pincode,
      },
      trackingNumber: `SB-EXP-${Math.floor(100000000 + Math.random() * 900000000)}`,
      courierPartner: 'Sellbar Express / BlueDart',
      items: verifiedItems,
    });

    return NextResponse.json({
      success: true,
      message: 'Order created successfully.',
      order,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to create order', error: String(error) }, { status: 500 });
  }
}

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const orders = db.getCustomerOrdersByUser(user.id);
  return NextResponse.json({ success: true, count: orders.length, orders });
}
