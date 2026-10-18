// Sellbar.in - MongoDB Atlas & Mongoose ODM Integration Layer
// Provides full-featured MongoDB Atlas connection with schemas and models
// Works seamlessly alongside or as the primary database backend for Sellbar.in

import mongoose, { Schema } from 'mongoose';
import { User, DeviceModel, RefurbishedProduct, BuybackOrder, CustomerOrder } from '@/lib/types';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };
if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

/**
 * Connect to MongoDB Atlas
 */
export async function connectToMongoDB(): Promise<typeof mongoose | null> {
  if (!MONGODB_URI) {
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance;
    }).catch((err) => {
      console.warn('[MongoDB Atlas] Connection failed, using fallback repository:', err.message);
      cached.promise = null;
      return null as unknown as typeof mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch {
    cached.promise = null;
    return null;
  }
}

export function isMongoDBConfigured(): boolean {
  return Boolean(process.env.MONGODB_URI);
}

// -------------------------------------------------------------
// Mongoose Schemas & Models
// -------------------------------------------------------------

// 1. User Schema
const UserMongooseSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, sparse: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, enum: ['CUSTOMER', 'ADMIN', 'TECHNICIAN', 'LOGISTICS'], default: 'CUSTOMER' },
    addresses: [
      {
        fullName: String,
        phone: String,
        addressLine1: String,
        addressLine2: String,
        landmark: String,
        pincode: String,
        city: String,
        state: String,
        isDefault: Boolean,
      },
    ],
  },
  { timestamps: true }
);

// 2. Refurbished Product Schema
const RefurbishedProductMongooseSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    conditionGrade: { type: String, enum: ['EXCELLENT', 'VERY_GOOD', 'GOOD'], required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
    images: [{ type: String }],
    specs: {
      storage: String,
      ram: String,
      color: String,
      batteryHealth: String,
      warrantyMonths: Number,
      screenSize: String,
    },
    highlights: [{ type: String }],
    warrantyDays: { type: Number, default: 180 },
    rating: { type: Number, default: 4.8 },
    reviewsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// 3. Buyback Quote Schema
const BuybackQuoteMongooseSchema = new Schema(
  {
    deviceModelId: { type: String, required: true },
    variantId: { type: String, required: true },
    deviceName: { type: String, required: true },
    variantName: { type: String, required: true },
    category: { type: String, required: true },
    basePrice: { type: Number, required: true },
    finalPrice: { type: Number, required: true },
    breakdown: {
      basePrice: Number,
      functionalDeductions: [{ reason: String, amount: Number }],
      bodyDeductions: [{ reason: String, amount: Number }],
      screenDeductions: [{ reason: String, amount: Number }],
      accessoriesBonus: [{ reason: String, amount: Number }],
    },
    answers: Schema.Types.Mixed,
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

// 4. Order Schema
const OrderMongooseSchema = new Schema(
  {
    userId: { type: String, required: true },
    items: [
      {
        productId: String,
        title: String,
        price: Number,
        quantity: Number,
        image: String,
        grade: String,
      },
    ],
    subtotal: { type: Number, required: true },
    gstAmount: { type: Number, required: true },
    shippingFee: { type: Number, default: 0 },
    discountAmount: { type: Number, default: 0 },
    couponCode: { type: String },
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, enum: ['PENDING', 'PAID', 'FAILED', 'REFUNDED'], default: 'PENDING' },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
    orderStatus: {
      type: String,
      enum: ['PLACED', 'CONFIRMED', 'SHIPPED', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'],
      default: 'PLACED',
    },
    shippingAddress: Schema.Types.Mixed,
    trackingNumber: { type: String },
    shiprocketAwb: { type: String },
    estimatedDelivery: { type: Date },
  },
  { timestamps: true }
);

// 5. Sell Order Schema (Customer Buyback Trade-in)
const SellOrderMongooseSchema = new Schema(
  {
    quoteId: { type: String, required: true },
    userId: { type: String, required: true },
    deviceName: { type: String, required: true },
    variantName: { type: String, required: true },
    quotedPrice: { type: Number, required: true },
    finalOfferPrice: { type: Number },
    status: {
      type: String,
      enum: [
        'SCHEDULED',
        'TECHNICIAN_ASSIGNED',
        'OUT_FOR_PICKUP',
        'INSPECTION_IN_PROGRESS',
        'PRICE_ADJUSTED',
        'ACCEPTED',
        'PAID',
        'CANCELLED',
      ],
      default: 'SCHEDULED',
    },
    pickupAddress: Schema.Types.Mixed,
    pickupDate: { type: String, required: true },
    pickupSlot: { type: String, required: true },
    paymentMethod: { type: String, enum: ['UPI', 'IMPS_BANK', 'AMAZON_GIFT_CARD'], required: true },
    paymentDetails: Schema.Types.Mixed,
    assignedTechnicianId: { type: String },
    assignedTechnicianName: { type: String },
    assignedTechnicianPhone: { type: String },
    inspectionChecklist: Schema.Types.Mixed,
    inspectionPhotos: [{ type: String }],
    payoutStatus: { type: String, enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED'], default: 'PENDING' },
    payoutTransactionId: { type: String },
  },
  { timestamps: true }
);

// Export Models (preventing OverwriteModelError in Next.js hot reload)
export const UserModel = mongoose.models.User || mongoose.model('User', UserMongooseSchema);
export const RefurbishedProductModel =
  mongoose.models.RefurbishedProduct || mongoose.model('RefurbishedProduct', RefurbishedProductMongooseSchema);
export const BuybackQuoteModel =
  mongoose.models.BuybackQuote || mongoose.model('BuybackQuote', BuybackQuoteMongooseSchema);
export const OrderModel = mongoose.models.Order || mongoose.model('Order', OrderMongooseSchema);
export const SellOrderModel = mongoose.models.SellOrder || mongoose.model('SellOrder', SellOrderMongooseSchema);
