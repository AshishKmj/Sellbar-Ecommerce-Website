import { NextResponse } from 'next/server';
import { verifyOtpAndLogin } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, code, name } = body;

    if (!phone || !code) {
      return NextResponse.json({ success: false, message: 'Phone number and OTP code are required' }, { status: 400 });
    }

    const result = await verifyOtpAndLogin(phone, code, name);
    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Internal server error', error: String(error) }, { status: 500 });
  }
}
