import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: Request, props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = db.getRefurbishedProductBySlug(params.slug);

  if (!product) {
    return NextResponse.json({ success: false, message: 'Product not found.' }, { status: 404 });
  }

  // Get related products in the same category
  const related = db
    .getRefurbishedProducts({ categoryId: product.categoryId })
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return NextResponse.json({ success: true, product, related });
}
