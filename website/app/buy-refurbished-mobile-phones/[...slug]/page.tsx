import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import CashifyStylePDP from '@/components/CashifyStylePDP';
import BuyRefurbishedPage from '../../buy-refurbished/page';

interface Props {
  params: Promise<{ slug: string[] }>;
}

const KNOWN_BRANDS = ['apple', 'samsung', 'oneplus', 'xiaomi', 'oppo', 'vivo', 'google', 'poco', 'realme', 'motorola'];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fullSlug = slug.join('/');
  
  if (slug.length === 1 && KNOWN_BRANDS.includes(slug[0].toLowerCase())) {
    const brandName = slug[0].toUpperCase();
    return {
      title: `Buy Refurbished ${brandName} Mobile Phones | Best Deals | Sellbar.in`,
      description: `Explore certified refurbished ${brandName} smartphones tested with 32-point check, up to 12 months warranty, and express delivery.`,
    };
  }

  const product = db.getRefurbishedProductBySlug(fullSlug) || db.getRefurbishedProductBySlug(slug[0]);

  if (!product) {
    return {
      title: 'Certified Refurbished Mobile Phone | Sellbar.in',
    };
  }

  return {
    title: `${product.title} - Buy Refurbished | Sellbar.in`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Sellbar.in`,
      description: product.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default async function RefurbishedMobilePhoneSlugPage({ params }: Props) {
  const { slug } = await params;

  // Case 1: Brand listing (e.g. /buy-refurbished-mobile-phones/apple)
  if (slug.length === 1 && KNOWN_BRANDS.includes(slug[0].toLowerCase())) {
    return (
      <BuyRefurbishedPage
        searchParams={Promise.resolve({
          category: 'phones',
          brand: slug[0].toLowerCase(),
        })}
      />
    );
  }

  // Case 2: Product Detail Page (e.g. /buy-refurbished-mobile-phones/renewed-oppo-reno15-pro/sale/171757)
  const fullSlug = slug.join('/');
  const product =
    db.getRefurbishedProductBySlug(fullSlug) ||
    db.getRefurbishedProductBySlug(slug[0]) ||
    db.getRefurbishedProductBySlug('renewed-oppo-reno15-pro');

  if (!product) {
    notFound();
  }

  const related = db
    .getRefurbishedProducts({ categoryId: product.categoryId })
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <CashifyStylePDP product={product} related={related} />;
}
