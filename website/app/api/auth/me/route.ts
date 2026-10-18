import { NextResponse } from 'next/server';
import { getCurrentUser, logoutUser } from '@/lib/auth';

export async function GET() {
  const user = await getCurrentUser();
  return NextResponse.json({ success: true, user });
}

export async function DELETE() {
  await logoutUser();
  return NextResponse.json({ success: true, message: 'Logged out successfully' });
}
