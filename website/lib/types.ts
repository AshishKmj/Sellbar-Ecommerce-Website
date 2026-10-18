// Sellbar.in Shared TypeScript Definitions

export type Role = 'CUSTOMER' | 'TECHNICIAN' | 'ADMIN' | 'CATALOG_MANAGER' | 'SUPPORT_STAFF';

export type DeviceCategoryType = 
  | 'SMARTPHONE'
  | 'LAPTOP'
  | 'TABLET'
  | 'SMARTWATCH'
  | 'DESKTOP'
  | 'GAMING_CONSOLE'
  | 'AUDIO_ACCESSORY';

export type ConditionGrade = 'FLAWLESS' | 'LIKE_NEW' | 'SMART_VALUE';

export type BuybackStatus =
  | 'DRAFT'
  | 'QUOTE_GENERATED'
  | 'AWAITING_CONFIRMATION'
  | 'PICKUP_SCHEDULED'
  | 'TECHNICIAN_ASSIGNED'
  | 'PICKUP_OUT_FOR_COLLECTION'
  | 'DEVICE_COLLECTED'
  | 'INSPECTION_PENDING'
  | 'INSPECTION_IN_PROGRESS'
  | 'REVISED_OFFER_AVAILABLE'
  | 'AWAITING_REVISED_OFFER_DECISION'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'PAYMENT_PENDING'
  | 'PAYMENT_PROCESSING'
  | 'PAID'
  | 'CANCELLED'
  | 'COMPLETED';

export type OrderStatus =
  | 'PENDING_PAYMENT'
  | 'PAYMENT_VERIFIED'
  | 'PROCESSING'
  | 'PACKED'
  | 'SHIPPED'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'RETURN_REQUESTED'
  | 'RETURNED'
  | 'REFUNDED';

export type PaymentMethod =
  | 'RAZORPAY'
  | 'UPI_DIRECT'
  | 'NET_BANKING'
  | 'CREDIT_DEBIT_CARD'
  | 'CASH_ON_DELIVERY'
  | 'SELLBAR_WALLET';

export type PayoutMethod =
  | 'UPI_VPA'
  | 'IMPS_BANK_TRANSFER'
  | 'SELLBAR_WALLET_CREDIT'
  | 'AMAZON_PAY_GIFT_CARD';

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  role: Role;
  walletBalance: number;
  upiVpa?: string;
  bankAccount?: string;
  bankIfsc?: string;
  createdAt: string;
}

export interface UserAddress {
  id: string;
  userId: string;
  fullName: string;
  phone: string;
  streetAddress: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  type: DeviceCategoryType;
  icon?: string;
  imageUrl?: string;
  isActive: boolean;
  popularBrands?: string[];
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  logoUrl?: string;
  categoryId: string;
}

export interface DeviceVariant {
  id: string;
  modelId: string;
  title: string;
  ram?: string;
  storage?: string;
  priceOffset: number;
}

export interface DeviceModel {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  brandId: string;
  baseResalePrice: number;
  imageUrl: string;
  popular?: boolean;
  releaseYear?: number;
  variants: DeviceVariant[];
}

export interface ValuationQuestionnaire {
  powersOn: boolean;
  screenCondition: 'FLAWLESS' | 'MINOR_SCRATCHES' | 'CRACKED' | 'TOUCH_ISSUE';
  bodyCondition: 'FLAWLESS' | 'SCRATCHES' | 'DENTS' | 'BENT';
  functionalDefects: string[];
  accessories: string[];
}

export interface PriceBreakdownItem {
  label: string;
  amount: number;
  isDeduction: boolean;
}

export interface BuybackOrder {
  id: string;
  orderNumber: string;
  userId: string;
  userName: string;
  userPhone: string;
  modelId: string;
  modelName: string;
  modelImage: string;
  variantId: string;
  variantTitle: string;
  categoryType: DeviceCategoryType;
  
  questionnaire: ValuationQuestionnaire;
  
  basePrice: number;
  deductions: number;
  promotionalBonus: number;
  quotedPrice: number;
  revisedPrice?: number;
  finalPayoutPrice?: number;
  
  status: BuybackStatus;
  payoutMethod: PayoutMethod;
  payoutDetails: string;
  
  pickupAddress: string;
  pickupPincode: string;
  pickupCity: string;
  pickupState: string;
  pickupDate: string;
  pickupTimeSlot: string;
  
  assignedTechnicianName?: string;
  assignedTechnicianPhone?: string;
  technicianNotes?: string;
  
  createdAt: string;
  updatedAt: string;
}

export interface RefurbishedProduct {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  categoryName: string;
  brandId: string;
  brandName: string;
  modelId?: string;
  
  mrpPrice: number;
  sellbarPrice: number;
  stockCount: number;
  conditionGrade: ConditionGrade;
  batteryHealth: number;
  color: string;
  storage: string;
  ram?: string;
  warrantyMonths: number;
  inspectionScore: number;
  images: string[];
  model3dUrl?: string;
  colors?: string[];
  availableStorages?: string[];
  specifications: Record<string, string>;
  description: string;
  isFeatured: boolean;
  isActive: boolean;
  rating: number;
  reviewsCount: number;
  createdAt: string;
}

export interface CartItem {
  product: RefurbishedProduct;
  quantity: number;
}

export interface CustomerOrder {
  id: string;
  orderNumber: string;
  userId: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentId?: string;
  paymentStatus: 'PENDING' | 'CAPTURED' | 'FAILED' | 'COD_VERIFIED';
  
  subtotal: number;
  discountAmount: number;
  taxGstAmount: number;
  shippingFee: number;
  totalAmount: number;
  
  couponCode?: string;
  shippingAddress: UserAddress;
  trackingNumber?: string;
  courierPartner?: string;
  
  items: {
    productId: string;
    productTitle: string;
    productImage: string;
    conditionGrade: ConditionGrade;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
  
  createdAt: string;
  updatedAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: 'PERCENTAGE' | 'FLAT';
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  isActive: boolean;
}

export interface ServiceBooking {
  id: string;
  bookingNumber: string;
  userId: string;
  customerName: string;
  customerPhone: string;
  serviceType: string;
  deviceDetails: string;
  estimatedCost: number;
  pincode: string;
  address: string;
  scheduledDate: string;
  scheduledSlot: string;
  status: 'BOOKED' | 'TECHNICIAN_ASSIGNED' | 'IN_PROGRESS' | 'REPAIRED' | 'DELIVERED' | 'CANCELLED';
  technicianNotes?: string;
  createdAt: string;
}
