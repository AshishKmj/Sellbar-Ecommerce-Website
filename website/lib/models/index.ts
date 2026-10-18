// Sellbar.in - Mongoose ODM Models & MongoDB Atlas Schemas
// Comprehensive models with strict validation, indexes, and timestamps

import mongoose, { Schema, Model, models } from 'mongoose';

// -----------------------------------------------------------------------------
// 1. User & Address Schema
// -----------------------------------------------------------------------------
const AddressSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    landmark: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true, length: 6 },
    isDefault: { type: Boolean, default: false },
  },
  { _id: true }
);

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, lowercase: true, trim: true, sparse: true, index: true },
    phone: { type: String, required: true, unique: true, index: true },
    role: {
      type: String,
      enum: ['CUSTOMER', 'TECHNICIAN', 'ADMIN', 'CATALOG_MANAGER', 'SUPPORT_STAFF'],
      default: 'CUSTOMER',
      index: true,
    },
    addresses: [AddressSchema],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// -----------------------------------------------------------------------------
// 2. Device Model & Variants (Buyback Catalog)
// -----------------------------------------------------------------------------
const DeviceVariantSchema = new Schema(
  {
    title: { type: String, required: true },
    storage: { type: String, required: true },
    ram: { type: String },
    basePricePaise: { type: Number, required: true }, // exact integer paise
  },
  { _id: true }
);

const DeviceModelSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    brand: { type: String, required: true, index: true },
    category: {
      type: String,
      enum: ['SMARTPHONE', 'LAPTOP', 'TABLET', 'SMARTWATCH', 'DESKTOP', 'GAMING_CONSOLE', 'AUDIO_ACCESSORY'],
      required: true,
      index: true,
    },
    image: { type: String, required: true },
    releaseYear: { type: Number },
    basePricePaise: { type: Number, required: true },
    variants: [DeviceVariantSchema],
    isPopular: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

// -----------------------------------------------------------------------------
// 3. Certified Refurbished Products (Storefront)
// -----------------------------------------------------------------------------
const RefurbishedProductSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true, index: true },
    brand: { type: String, required: true, index: true },
    conditionGrade: {
      type: String,
      enum: ['FLAWLESS', 'LIKE_NEW', 'SMART_VALUE'],
      required: true,
      index: true,
    },
    mrpPaise: { type: Number, required: true },
    pricePaise: { type: Number, required: true, index: true },
    stockCount: { type: Number, required: true, default: 1, min: 0 },
    images: [{ type: String }],
    batteryHealth: { type: Number, default: 95 },
    color: { type: String, required: true },
    storage: { type: String, required: true },
    ram: { type: String },
    warrantyMonths: { type: Number, default: 6 },
    inspectionScore: { type: Number, default: 32 },
    specifications: { type: Map, of: String },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false, index: true },
    rating: { type: Number, default: 4.8 },
    reviewsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Compound index for storefront filtering and sorting
RefurbishedProductSchema.index({ category: 1, conditionGrade: 1, pricePaise: 1 });
RefurbishedProductSchema.index({ brand: 1, category: 1 });

// -----------------------------------------------------------------------------
// 4. Buyback Orders (Device Resale & Pickup)
// -----------------------------------------------------------------------------
const BuybackOrderSchema = new Schema(
  {
    orderNumber: { type: String, required: true, unique: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    userPhone: { type: String, required: true },
    deviceModelId: { type: Schema.Types.ObjectId, ref: 'DeviceModel' },
    modelName: { type: String, required: true },
    modelImage: { type: String, required: true },
    variantTitle: { type: String, required: true },
    categoryType: { type: String, required: true },
    
    // Transparent Pricing Engine breakdown (stored in integer paise)
    basePricePaise: { type: Number, required: true },
    deductionsPaise: { type: Number, default: 0 },
    promotionalBonusPaise: { type: Number, default: 0 },
    quotedPricePaise: { type: Number, required: true },
    revisedPricePaise: { type: Number },
    finalPayoutPricePaise: { type: Number },
    
    questionnaire: { type: Schema.Types.Mixed, required: true },
    
    status: {
      type: String,
      enum: [
        'DRAFT',
        'QUOTE_GENERATED',
        'AWAITING_CONFIRMATION',
        'PICKUP_SCHEDULED',
        'TECHNICIAN_ASSIGNED',
        'PICKUP_OUT_FOR_COLLECTION',
        'DEVICE_COLLECTED',
        'INSPECTION_PENDING',
        'INSPECTION_IN_PROGRESS',
        'REVISED_OFFER_AVAILABLE',
        'AWAITING_REVISED_OFFER_DECISION',
        'ACCEPTED',
        'REJECTED',
        'PAYMENT_PENDING',
        'PAYMENT_PROCESSING',
        'PAID',
        'CANCELLED',
        'COMPLETED',
      ],
      default: 'PICKUP_SCHEDULED',
      index: true,
    },
    
    payoutMethod: {
      type: String,
      enum: ['UPI_VPA', 'IMPS_BANK_TRANSFER', 'SELLBAR_WALLET_CREDIT'],
      required: true,
    },
    payoutDetails: { type: String, required: true },
    
    pickupAddress: { type: String, required: true },
    pickupPincode: { type: String, required: true, index: true },
    pickupCity: { type: String, required: true },
    pickupState: { type: String, required: true },
    pickupDate: { type: String, required: true },
    pickupTimeSlot: { type: String, required: true },
    
    assignedTechnicianName: { type: String },
    assignedTechnicianPhone: { type: String },
    technicianNotes: { type: String },
  },
  { timestamps: true }
);

// -----------------------------------------------------------------------------
// 5. Customer Orders (Refurbished Store Purchases)
// -----------------------------------------------------------------------------
const OrderItemSchema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'RefurbishedProduct', required: true },
    productTitle: { type: String, required: true },
    productImage: { type: String, required: true },
    conditionGrade: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    unitPricePaise: { type: Number, required: true },
    totalPricePaise: { type: Number, required: true },
  },
  { _id: true }
);

const CustomerOrderSchema = new Schema(
  {
    orderNumber: { type: String, required: true, unique: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerEmail: { type: String },
    
    status: {
      type: String,
      enum: [
        'PENDING_PAYMENT',
        'PAYMENT_VERIFIED',
        'PROCESSING',
        'PACKED',
        'SHIPPED',
        'OUT_FOR_DELIVERY',
        'DELIVERED',
        'CANCELLED',
        'RETURN_REQUESTED',
        'RETURNED',
        'REFUNDED',
      ],
      default: 'PROCESSING',
      index: true,
    },
    
    paymentMethod: {
      type: String,
      enum: ['RAZORPAY', 'UPI_DIRECT', 'NET_BANKING', 'CREDIT_DEBIT_CARD', 'CASH_ON_DELIVERY', 'SELLBAR_WALLET'],
      required: true,
    },
    paymentId: { type: String },
    paymentStatus: {
      type: String,
      enum: ['PENDING', 'CAPTURED', 'FAILED', 'COD_VERIFIED'],
      default: 'CAPTURED',
      index: true,
    },
    
    // Financial calculations stored strictly in integer paise
    subtotalPaise: { type: Number, required: true },
    discountAmountPaise: { type: Number, default: 0 },
    taxGstAmountPaise: { type: Number, required: true }, // 18% GST
    shippingFeePaise: { type: Number, default: 0 },
    totalAmountPaise: { type: Number, required: true },
    
    couponCode: { type: String },
    shippingAddress: AddressSchema,
    trackingNumber: { type: String, index: true },
    courierPartner: { type: String, default: 'Bluedart Express' },
    shiprocketAwb: { type: String },
    
    items: [OrderItemSchema],
  },
  { timestamps: true }
);

// -----------------------------------------------------------------------------
// 6. Promotional Coupons & Service Areas
// -----------------------------------------------------------------------------
const CouponSchema = new Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true, index: true },
    description: { type: String, required: true },
    discountType: { type: String, enum: ['PERCENTAGE', 'FLAT'], required: true },
    discountValue: { type: Number, required: true },
    minOrderAmountPaise: { type: Number, default: 0 },
    maxDiscountPaise: { type: Number },
    isActive: { type: Boolean, default: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

const ServiceAreaSchema = new Schema(
  {
    pincode: { type: String, required: true, unique: true, index: true },
    city: { type: String, required: true, index: true },
    state: { type: String, required: true },
    isPickupAvailable: { type: Boolean, default: true },
    isNextDayDelivery: { type: Boolean, default: true },
    deliveryTatDays: { type: Number, default: 2 },
    tier: { type: String, enum: ['TIER_1', 'TIER_2', 'TIER_3'], default: 'TIER_1' },
  },
  { timestamps: true }
);

// Prevent re-compilation of models during Next.js hot-reloads
export const User = models.User || mongoose.model('User', UserSchema);
export const DeviceModel = models.DeviceModel || mongoose.model('DeviceModel', DeviceModelSchema);
export const RefurbishedProduct = models.RefurbishedProduct || mongoose.model('RefurbishedProduct', RefurbishedProductSchema);
export const BuybackOrder = models.BuybackOrder || mongoose.model('BuybackOrder', BuybackOrderSchema);
export const CustomerOrder = models.CustomerOrder || mongoose.model('CustomerOrder', CustomerOrderSchema);
export const Coupon = models.Coupon || mongoose.model('Coupon', CouponSchema);
export const ServiceArea = models.ServiceArea || mongoose.model('ServiceArea', ServiceAreaSchema);
