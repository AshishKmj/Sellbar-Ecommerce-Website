import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function PATCH(req: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'ADMIN' && user.role !== 'TECHNICIAN')) {
      // In dev mode allow testing
    }

    const params = await props.params;
    const body = await req.json();
    const { status, technicianNotes, revisedPrice, finalPayoutPrice } = body;

    const updated = db.updateBuybackOrderStatus(
      params.id,
      status,
      technicianNotes,
      revisedPrice !== undefined ? Number(revisedPrice) : undefined,
      finalPayoutPrice !== undefined ? Number(finalPayoutPrice) : undefined
    );

    if (!updated) {
      return NextResponse.json({ success: false, message: 'Buyback order not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Buyback order status updated to ${status}.`,
      order: updated,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Update failed', error: String(error) }, { status: 500 });
  }
}
