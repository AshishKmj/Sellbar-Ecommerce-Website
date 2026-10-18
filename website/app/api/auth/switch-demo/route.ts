import { NextResponse } from 'next/server';
import { switchDemoUser } from '@/lib/auth';
import { Role } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const role = (body.role || 'CUSTOMER') as Role;
    const user = await switchDemoUser(role);
    return NextResponse.json({ success: true, user, message: `Switched active role to ${role}` });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to switch role', error: String(error) }, { status: 500 });
  }
}
