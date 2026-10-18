import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import CashifyStylePDP from '@/components/CashifyStylePDP';
import BuyRefurbishedPage from '../../buy-refurbished/page';

interface Props {
  params: Promise<{ slug: string[] }>;
}

const KNOWN_LAPTOP_BRANDS = ['apple', 'dell', 'hp', 'lenovo', 'asus', 'acer', 'msi', 'samsung'];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fullSlug = slug.join('/');

  if (slug.length === 1 && KNOWN_LAPTOP_BRANDS.includes(slug[0].toLowerCase())) {
    const brandName = slug[0].toUpperCase();
    return {
      title: `Buy Refurbished ${brandName} Laptops | Sellbar Assured Up to 55% Off`,
      description: `Explore certified refurbished ${brandName} laptops with 32-point inspection, up to 12 months doorstep warranty, genuine OS and charger included.`,
    };
  }

  const product =
    db.getRefurbishedProductBySlug(fullSlug) ||
    db.getRefurbishedProductBySlug(slug[0]);

  if (!product) {
    return {
      title: 'Certified Refurbished Laptop | Sellbar.in',
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

export default async function RefurbishedLaptopSlugPage({ params }: Props) {
  const { slug } = await params;

  // Case 1: Brand listing (e.g. /buy-refurbished-laptops/dell, /buy-refurbished-laptops/apple)
  if (slug.length === 1 && KNOWN_LAPTOP_BRANDS.includes(slug[0].toLowerCase())) {
    return (
      <BuyRefurbishedPage
        searchParams={Promise.resolve({
          category: 'laptops',
          brand: slug[0].toLowerCase(),
        })}
      />
    );
  }

  // Case 2: Product Detail Page
  const fullSlug = slug.join('/');
  const product =
    db.getRefurbishedProductBySlug(fullSlug) ||
    db.getRefurbishedProductBySlug(slug[0]) ||
    db.getRefurbishedProductBySlug('sellbar-certified-macbook-air-m2-8gb-256gb-starlight');

  if (!product) {
    notFound();
  }

  const related = db
    .getRefurbishedProducts({ categoryId: product.categoryId || 'cat-laptops' })
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <CashifyStylePDP product={product} related={related} />;
}
