import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';
import { lookupPincode } from '@/lib/pincodes';

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: 'Please sign in to book a service appointment.' }, { status: 401 });
    }

    const body = await req.json();
    const { serviceType, deviceDetails, estimatedCost, pincode, address, scheduledDate, scheduledSlot } = body;

    if (!serviceType || !deviceDetails || !pincode || !address) {
      return NextResponse.json({ success: false, message: 'Missing required service booking fields.' }, { status: 400 });
    }

    const pinInfo = lookupPincode(pincode);
    if (!pinInfo.buybackPickupAvailable) {
      return NextResponse.json({
        success: false,
        message: `Doorstep repair is not yet serviceable in PIN code ${pincode}.`,
      }, { status: 400 });
    }

    const booking = db.createServiceBooking({
      userId: user.id,
      customerName: user.name,
      customerPhone: user.phone,
      serviceType,
      deviceDetails,
      estimatedCost: Number(estimatedCost) || 2499,
      pincode: pinInfo.pincode,
      address,
      scheduledDate: scheduledDate || new Date().toISOString().split('T')[0],
      scheduledSlot: scheduledSlot || '02:00 PM - 05:00 PM',
      status: 'BOOKED',
      technicianNotes: 'Assigned certified repair technician with genuine OEM parts kit.',
    });

    return NextResponse.json({
      success: true,
      message: 'Repair appointment confirmed! Our certified engineer will arrive at your scheduled slot.',
      booking,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Booking failed', error: String(error) }, { status: 500 });
  }
}

export async function GET() {
  const bookings = db.getServiceBookings();
  return NextResponse.json({ success: true, count: bookings.length, bookings });
}
