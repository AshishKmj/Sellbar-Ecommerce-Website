import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      title,
      categoryId,
      categoryName,
      brandId,
      brandName,
      mrpPrice,
      sellbarPrice,
      stockCount,
      conditionGrade,
      batteryHealth,
      color,
      storage,
      ram,
      warrantyMonths,
      description,
      images,
      specifications,
      isFeatured,
    } = body;

    if (!title || !sellbarPrice) {
      return NextResponse.json({ success: false, message: 'Title and Price are required' }, { status: 400 });
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const newProduct = db.createRefurbishedProduct({
      slug: `${slug}-${Date.now().toString().slice(-4)}`,
      title,
      categoryId: categoryId || 'cat-phones',
      categoryName: categoryName || 'Smartphones',
      brandId: brandId || 'b-apple',
      brandName: brandName || 'Apple',
      mrpPrice: Number(mrpPrice) || Number(sellbarPrice) * 1.3,
      sellbarPrice: Number(sellbarPrice),
      stockCount: Number(stockCount) || 5,
      conditionGrade: conditionGrade || 'FLAWLESS',
      batteryHealth: Number(batteryHealth) || 95,
      color: color || 'Default',
      storage: storage || '128GB',
      ram: ram || undefined,
      warrantyMonths: Number(warrantyMonths) || 12,
      inspectionScore: 32,
      images: images && images.length ? images : ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'],
      specifications: specifications || { 'Grade': 'Sellbar Certified' },
      description: description || 'Certified refurbished electronic device with comprehensive warranty.',
      isFeatured: Boolean(isFeatured),
      isActive: true,
      rating: 4.9,
      reviewsCount: 1,
    });

    return NextResponse.json({ success: true, message: 'Refurbished product created', product: newProduct });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Product creation failed', error: String(error) }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, updates } = body;

    if (!id || !updates) {
      return NextResponse.json({ success: false, message: 'Product ID and updates are required' }, { status: 400 });
    }

    const updated = db.updateRefurbishedProduct(id, updates);
    if (!updated) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Product updated', product: updated });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Update failed', error: String(error) }, { status: 500 });
  }
}
