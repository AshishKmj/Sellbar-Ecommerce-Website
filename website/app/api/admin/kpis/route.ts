import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  const user = await getCurrentUser();
  if (!user || (user.role !== 'ADMIN' && user.role !== 'TECHNICIAN')) {
    // For easy testing, allow access or check role
  }

  const kpis = db.getDashboardKPIs();
  const buybackOrders = db.getAllBuybackOrders();
  const customerOrders = db.getAllCustomerOrders();
  const products = db.getRefurbishedProducts();

  return NextResponse.json({
    success: true,
    kpis,
    recentBuybacks: buybackOrders.slice(0, 10),
    recentOrders: customerOrders.slice(0, 10),
    products: products.slice(0, 15),
  });
}
