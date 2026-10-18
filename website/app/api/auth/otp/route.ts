import { NextResponse } from 'next/server';
import { requestOtp } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone } = body;

    if (!phone) {
      return NextResponse.json({ success: false, message: 'Phone number is required' }, { status: 400 });
    }

    const result = await requestOtp(phone);
    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Internal server error', error: String(error) }, { status: 500 });
  }
}
