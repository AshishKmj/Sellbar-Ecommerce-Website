import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('categoryId') || undefined;
  const brandId = searchParams.get('brandId') || undefined;
  const conditionGrade = searchParams.get('conditionGrade') || undefined;
  const minPrice = searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined;
  const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined;
  const query = searchParams.get('query') || undefined;
  const featuredOnly = searchParams.get('featured') === 'true';
  const sortBy = (searchParams.get('sortBy') as any) || undefined;

  const products = db.getRefurbishedProducts({
    categoryId,
    brandId,
    conditionGrade,
    minPrice,
    maxPrice,
    query,
    featuredOnly,
    sortBy,
  });

  return NextResponse.json({ success: true, count: products.length, products });
}
