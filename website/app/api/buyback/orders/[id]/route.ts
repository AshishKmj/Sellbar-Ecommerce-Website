import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const order = db.getBuybackOrderById(params.id);

  if (!order) {
    return NextResponse.json({ success: false, message: 'Buyback order not found.' }, { status: 404 });
  }

  return NextResponse.json({ success: true, order });
}
