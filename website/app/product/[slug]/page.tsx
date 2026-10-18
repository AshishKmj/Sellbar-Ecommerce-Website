import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import ProductDetailClient from '@/components/ProductDetailClient';
import CashifyStylePDP from '@/components/CashifyStylePDP';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = db.getRefurbishedProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Sellbar.in',
    };
  }

  return {
    title: `${product.title} - Certified Refurbished | Sellbar.in`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Sellbar.in`,
      description: product.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = db.getRefurbishedProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = db
    .getRefurbishedProducts({ categoryId: product.categoryId })
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <CashifyStylePDP product={product} related={related} />;
}
