/// <reference types="node" />
// Sellbar.in - MongoDB Atlas Database Seed Script
// Populates MongoDB Atlas collections with initial catalog, users, coupons, and service areas

import mongoose from 'mongoose';
import { User, DeviceModel, RefurbishedProduct, Coupon, ServiceArea } from '../lib/models';
import { SEED_DEVICE_MODELS, SEED_REFURBISHED_PRODUCTS, SEED_COUPONS, SEED_USERS } from '../lib/db/seed-data';
import { PINCODE_DATABASE } from '../lib/pincodes';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sellbar_db';

async function seedMongoDB() {
  console.log('🔄 Connecting to MongoDB Atlas:', MONGODB_URI.replace(/:\/\/.*@/, '://<credentials>@'));
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully.');

    // 1. Seed System Users
    console.log('🌱 Seeding Users...');
    await User.deleteMany({});
    const usersToInsert = SEED_USERS.map((u: any) => ({
      name: u.name,
      email: u.email,
      phone: u.phone,
      role: u.role,
      addresses: [
        {
          fullName: u.name,
          phone: u.phone,
          addressLine1: 'Flat 402, Green Glen Layout, Bellandur',
          city: 'Bengaluru',
          state: 'Karnataka',
          pincode: '560103',
          isDefault: true,
        },
      ],
      isActive: true,
    }));
    await (User as any).insertMany(usersToInsert);
    console.log(`✅ Seeded ${usersToInsert.length} users.`);

    // 2. Seed Device Models (Buyback Catalog)
    console.log('🌱 Seeding Device Models...');
    await DeviceModel.deleteMany({});
    const deviceModelsToInsert = SEED_DEVICE_MODELS.map((dm: any) => ({
      name: dm.name,
      slug: dm.slug,
      brand: dm.brand,
      category: dm.category,
      image: dm.imageUrl,
      basePricePaise: Math.round(dm.basePrice * 100),
      variants: dm.variants.map((v: any) => ({
        title: v.title,
        storage: v.storage,
        ram: v.ram,
        basePricePaise: Math.round(v.basePrice * 100),
      })),
      isPopular: dm.isPopular,
    }));
    await (DeviceModel as any).insertMany(deviceModelsToInsert);
    console.log(`✅ Seeded ${deviceModelsToInsert.length} device models.`);

    // 3. Seed Certified Refurbished Products
    console.log('🌱 Seeding Refurbished Products...');
    await RefurbishedProduct.deleteMany({});
    const productsToInsert = SEED_REFURBISHED_PRODUCTS.map((p: any) => ({
      title: p.title,
      slug: p.slug,
      category: p.categoryName,
      brand: p.brandName,
      conditionGrade: p.conditionGrade,
      mrpPaise: Math.round(p.mrpPrice * 100),
      pricePaise: Math.round(p.sellbarPrice * 100),
      stockCount: p.stockCount,
      images: p.images,
      batteryHealth: p.batteryHealth,
      color: p.color,
      storage: p.storage,
      ram: p.ram,
      warrantyMonths: p.warrantyMonths,
      inspectionScore: p.inspectionScore,
      specifications: p.specifications,
      description: p.description,
      isFeatured: p.isFeatured,
      rating: p.rating,
      reviewsCount: p.reviewsCount,
    }));
    await (RefurbishedProduct as any).insertMany(productsToInsert);
    console.log(`✅ Seeded ${productsToInsert.length} refurbished products.`);

    // 4. Seed Coupons
    console.log('🌱 Seeding Coupons...');
    await Coupon.deleteMany({});
    const couponsToInsert = SEED_COUPONS.map((c: any) => ({
      code: c.code,
      description: c.description,
      discountType: c.discountType,
      discountValue: c.discountValue,
      minOrderAmountPaise: Math.round(c.minOrderValue * 100),
      maxDiscountPaise: c.maxDiscount ? Math.round(c.maxDiscount * 100) : undefined,
      isActive: c.isActive,
      expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    }));
    await (Coupon as any).insertMany(couponsToInsert);
    console.log(`✅ Seeded ${couponsToInsert.length} promotional coupons.`);

    // 5. Seed Service Areas from Indian Pincode Database
    console.log('🌱 Seeding Service Areas...');
    await ServiceArea.deleteMany({});
    const serviceAreasToInsert = Object.entries(PINCODE_DATABASE).map(([pincode, info]: [string, any]) => ({
      pincode,
      city: info.city,
      state: info.state,
      isPickupAvailable: info.buybackPickupAvailable ?? true,
      isNextDayDelivery: info.deliveryDays <= 1,
      deliveryTatDays: info.deliveryDays,
      tier: 'TIER_1' as const,
    }));
    await (ServiceArea as any).insertMany(serviceAreasToInsert);
    console.log(`✅ Seeded ${serviceAreasToInsert.length} Indian PIN code zones.`);

    console.log('🎉 MongoDB Atlas Seeding Completed Successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ MongoDB Seeding Error:', error);
    process.exit(1);
  }
}

seedMongoDB();
