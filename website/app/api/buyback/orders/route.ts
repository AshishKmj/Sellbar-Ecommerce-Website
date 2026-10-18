import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';
import { lookupPincode } from '@/lib/pincodes';

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: 'Please sign in to confirm your pickup booking.' }, { status: 401 });
    }

    const body = await req.json();
    const {
      modelId,
      variantId,
      questionnaire,
      basePrice,
      deductions,
      promotionalBonus,
      quotedPrice,
      payoutMethod,
      payoutDetails,
      pickupAddress,
      pickupPincode,
      pickupDate,
      pickupTimeSlot,
    } = body;

    if (!modelId || !variantId || !pickupAddress || !pickupPincode || !payoutDetails) {
      return NextResponse.json({ success: false, message: 'Missing required order details.' }, { status: 400 });
    }

    const pinInfo = lookupPincode(pickupPincode);
    if (!pinInfo.buybackPickupAvailable) {
      return NextResponse.json({
        success: false,
        message: `Doorstep pickup is currently not available for PIN code ${pickupPincode}.`,
      }, { status: 400 });
    }

    const model = db.getDeviceModels().find((m) => m.id === modelId);
    if (!model) {
      return NextResponse.json({ success: false, message: 'Device model not found.' }, { status: 404 });
    }

    const variant = model.variants.find((v) => v.id === variantId) || model.variants[0];

    const newOrder = db.createBuybackOrder({
      userId: user.id,
      userName: user.name,
      userPhone: user.phone,
      modelId: model.id,
      modelName: model.name,
      modelImage: model.imageUrl,
      variantId: variant.id,
      variantTitle: variant.title,
      categoryType: 'SMARTPHONE',
      questionnaire: questionnaire || {
        powersOn: true,
        screenCondition: 'FLAWLESS',
        bodyCondition: 'FLAWLESS',
        functionalDefects: [],
        accessories: [],
      },
      basePrice: Number(basePrice) || model.baseResalePrice,
      deductions: Number(deductions) || 0,
      promotionalBonus: Number(promotionalBonus) || 0,
      quotedPrice: Number(quotedPrice) || model.baseResalePrice,
      status: 'PICKUP_SCHEDULED',
      payoutMethod: payoutMethod || 'UPI_VPA',
      payoutDetails: String(payoutDetails),
      pickupAddress: String(pickupAddress),
      pickupPincode: pinInfo.pincode,
      pickupCity: pinInfo.city,
      pickupState: pinInfo.state,
      pickupDate: pickupDate || new Date(Date.now() + 86400000).toISOString().split('T')[0],
      pickupTimeSlot: pickupTimeSlot || '09:00 AM - 01:00 PM',
      assignedTechnicianName: 'Vikram Singh (Field Technician)',
      assignedTechnicianPhone: '+919123456780',
      technicianNotes: 'Sellbar doorstep inspection kit assigned for scheduled slot.',
    });

    return NextResponse.json({
      success: true,
      message: 'Buyback order confirmed! Doorstep technician has been scheduled.',
      order: newOrder,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to create buyback order', error: String(error) }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const orders = db.getBuybackOrdersByUser(user.id);
  return NextResponse.json({ success: true, count: orders.length, orders });
}
