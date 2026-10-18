import { NextResponse } from 'next/server';
import { lookupPincode } from '@/lib/pincodes';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pin = searchParams.get('pincode') || '';

  if (!pin) {
    return NextResponse.json({ success: false, message: 'Pincode is required' }, { status: 400 });
  }

  const info = lookupPincode(pin);
  return NextResponse.json({ success: true, info });
}
