import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('categoryId') || undefined;
  const brandId = searchParams.get('brandId') || undefined;
  const query = searchParams.get('query') || undefined;
  const popularOnly = searchParams.get('popular') === 'true';

  const models = db.getDeviceModels({ categoryId, brandId, query, popularOnly });
  return NextResponse.json({ success: true, count: models.length, models });
}
