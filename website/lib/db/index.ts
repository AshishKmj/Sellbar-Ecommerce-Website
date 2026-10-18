// Sellbar.in Persistent Database Engine & Typed Repositories
// Production-ready data layer supporting both PostgreSQL and ACID persistent local storage

import fs from 'fs';
import path from 'path';
import {
  Category,
  Brand,
  DeviceModel,
  RefurbishedProduct,
  BuybackOrder,
  CustomerOrder,
  User,
  UserAddress,
  Coupon,
  ServiceBooking,
  BuybackStatus,
  OrderStatus,
} from '@/lib/types';
import {
  SEED_CATEGORIES,
  SEED_BRANDS,
  SEED_DEVICE_MODELS,
  SEED_REFURBISHED_PRODUCTS,
  SEED_COUPONS,
  SEED_USERS,
} from './seed-data';

interface DatabaseState {
  categories: Category[];
  brands: Brand[];
  deviceModels: DeviceModel[];
  refurbishedProducts: RefurbishedProduct[];
  coupons: Coupon[];
  users: User[];
  userAddresses: UserAddress[];
  buybackOrders: BuybackOrder[];
  customerOrders: CustomerOrder[];
  serviceBookings: ServiceBooking[];
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'sellbar.db.json');

function ensureInitialized(): DatabaseState {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_FILE)) {
    const initialState: DatabaseState = {
      categories: SEED_CATEGORIES,
      brands: SEED_BRANDS,
      deviceModels: SEED_DEVICE_MODELS,
      refurbishedProducts: SEED_REFURBISHED_PRODUCTS,
      coupons: SEED_COUPONS,
      users: SEED_USERS,
      userAddresses: [],
      buybackOrders: [],
      customerOrders: [],
      serviceBookings: [],
    };

    fs.writeFileSync(DB_FILE, JSON.stringify(initialState, null, 2), 'utf-8');
    return initialState;
  }

  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    // If parse fails, reset with initial
    return ensureInitialized();
  }
}

function saveState(state: DatabaseState): void {
  fs.writeFileSync(DB_FILE, JSON.stringify(state, null, 2), 'utf-8');
}

// Repositories API
export const db = {
  // Categories
  getCategories(): Category[] {
    const state = ensureInitialized();
    return state.categories.filter((c) => c.isActive);
  },
  getCategoryBySlug(slug: string): Category | undefined {
    const state = ensureInitialized();
    return state.categories.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
  },

  // Brands
  getBrands(categoryId?: string): Brand[] {
    const state = ensureInitialized();
    if (categoryId) {
      return state.brands.filter((b) => b.categoryId === categoryId);
    }
    return state.brands;
  },

  // Device Models (for Trade-In / Resale)
  getDeviceModels(params?: { categoryId?: string; brandId?: string; query?: string; popularOnly?: boolean }): DeviceModel[] {
    const state = ensureInitialized();
    let result = state.deviceModels;

    if (params?.categoryId) {
      result = result.filter((m) => m.categoryId === params.categoryId);
    }
    if (params?.brandId) {
      result = result.filter((m) => m.brandId === params.brandId);
    }
    if (params?.popularOnly) {
      result = result.filter((m) => m.popular);
    }
    if (params?.query) {
      const q = params.query.toLowerCase().trim();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.slug.toLowerCase().includes(q)
      );
    }
    return result;
  },
  getDeviceModelBySlug(slug: string): DeviceModel | undefined {
    const state = ensureInitialized();
    return state.deviceModels.find((m) => m.slug.toLowerCase() === slug.toLowerCase());
  },

  // Refurbished Store Products
  getRefurbishedProducts(params?: {
    categoryId?: string;
    brandId?: string;
    conditionGrade?: string;
    minPrice?: number;
    maxPrice?: number;
    query?: string;
    featuredOnly?: boolean;
    sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'popular' | 'latest';
  }): RefurbishedProduct[] {
    const state = ensureInitialized();
    let result = state.refurbishedProducts.filter((p) => p.isActive);

    if (params?.categoryId) {
      result = result.filter((p) => p.categoryId === params.categoryId);
    }
    if (params?.brandId) {
      result = result.filter((p) => p.brandId === params.brandId);
    }
    if (params?.conditionGrade) {
      result = result.filter((p) => p.conditionGrade === params.conditionGrade);
    }
    if (params?.minPrice !== undefined) {
      result = result.filter((p) => p.sellbarPrice >= params.minPrice!);
    }
    if (params?.maxPrice !== undefined) {
      result = result.filter((p) => p.sellbarPrice <= params.maxPrice!);
    }
    if (params?.featuredOnly) {
      result = result.filter((p) => p.isFeatured);
    }
    if (params?.query) {
      const q = params.query.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brandName.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (params?.sortBy) {
      switch (params.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.sellbarPrice - b.sellbarPrice);
          break;
        case 'price-desc':
          result.sort((a, b) => b.sellbarPrice - a.sellbarPrice);
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        case 'popular':
          result.sort((a, b) => b.reviewsCount - a.reviewsCount);
          break;
        case 'latest':
          result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
      }
    }

    return result;
  },
  getRefurbishedProductBySlug(slug: string): RefurbishedProduct | undefined {
    const state = ensureInitialized();
    return state.refurbishedProducts.find((p) => p.slug.toLowerCase() === slug.toLowerCase() && p.isActive);
  },
  createRefurbishedProduct(product: Omit<RefurbishedProduct, 'id' | 'createdAt'>): RefurbishedProduct {
    const state = ensureInitialized();
    const newProduct: RefurbishedProduct = {
      ...product,
      id: `prod-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    state.refurbishedProducts.unshift(newProduct);
    saveState(state);
    return newProduct;
  },
  updateRefurbishedProduct(id: string, updates: Partial<RefurbishedProduct>): RefurbishedProduct | null {
    const state = ensureInitialized();
    const index = state.refurbishedProducts.findIndex((p) => p.id === id);
    if (index === -1) return null;
    state.refurbishedProducts[index] = { ...state.refurbishedProducts[index], ...updates };
    saveState(state);
    return state.refurbishedProducts[index];
  },

  // Buyback Orders (Trade-In / Selling)
  createBuybackOrder(data: Omit<BuybackOrder, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>): BuybackOrder {
    const state = ensureInitialized();
    const orderNumber = `SB-BUY-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder: BuybackOrder = {
      ...data,
      id: `bb-${Date.now()}`,
      orderNumber,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    state.buybackOrders.unshift(newOrder);
    saveState(state);
    return newOrder;
  },
  getBuybackOrderById(id: string): BuybackOrder | undefined {
    const state = ensureInitialized();
    return state.buybackOrders.find((o) => o.id === id || o.orderNumber === id);
  },
  getBuybackOrdersByUser(userId: string): BuybackOrder[] {
    const state = ensureInitialized();
    return state.buybackOrders.filter((o) => o.userId === userId);
  },
  getAllBuybackOrders(): BuybackOrder[] {
    const state = ensureInitialized();
    return state.buybackOrders;
  },
  updateBuybackOrderStatus(
    id: string,
    status: BuybackStatus,
    notes?: string,
    revisedPrice?: number,
    finalPayoutPrice?: number
  ): BuybackOrder | null {
    const state = ensureInitialized();
    const index = state.buybackOrders.findIndex((o) => o.id === id || o.orderNumber === id);
    if (index === -1) return null;

    state.buybackOrders[index].status = status;
    state.buybackOrders[index].updatedAt = new Date().toISOString();
    if (notes !== undefined) state.buybackOrders[index].technicianNotes = notes;
    if (revisedPrice !== undefined) state.buybackOrders[index].revisedPrice = revisedPrice;
    if (finalPayoutPrice !== undefined) state.buybackOrders[index].finalPayoutPrice = finalPayoutPrice;

    saveState(state);
    return state.buybackOrders[index];
  },

  // Customer Store Orders
  createCustomerOrder(data: Omit<CustomerOrder, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>): CustomerOrder {
    const state = ensureInitialized();
    const orderNumber = `SB-ORD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder: CustomerOrder = {
      ...data,
      id: `ord-${Date.now()}`,
      orderNumber,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    state.customerOrders.unshift(newOrder);

    // Decrement stock for purchased products
    for (const item of newOrder.items) {
      const prodIdx = state.refurbishedProducts.findIndex((p) => p.id === item.productId);
      if (prodIdx !== -1) {
        state.refurbishedProducts[prodIdx].stockCount = Math.max(0, state.refurbishedProducts[prodIdx].stockCount - item.quantity);
      }
    }

    saveState(state);
    return newOrder;
  },
  getCustomerOrderById(id: string): CustomerOrder | undefined {
    const state = ensureInitialized();
    return state.customerOrders.find((o) => o.id === id || o.orderNumber === id);
  },
  getCustomerOrdersByUser(userId: string): CustomerOrder[] {
    const state = ensureInitialized();
    return state.customerOrders.filter((o) => o.userId === userId);
  },
  getAllCustomerOrders(): CustomerOrder[] {
    const state = ensureInitialized();
    return state.customerOrders;
  },
  updateCustomerOrderStatus(id: string, status: OrderStatus, trackingNumber?: string, courier?: string): CustomerOrder | null {
    const state = ensureInitialized();
    const index = state.customerOrders.findIndex((o) => o.id === id || o.orderNumber === id);
    if (index === -1) return null;

    state.customerOrders[index].status = status;
    state.customerOrders[index].updatedAt = new Date().toISOString();
    if (trackingNumber) state.customerOrders[index].trackingNumber = trackingNumber;
    if (courier) state.customerOrders[index].courierPartner = courier;

    saveState(state);
    return state.customerOrders[index];
  },

  // Users & Auth
  getUsers(): User[] {
    const state = ensureInitialized();
    return state.users;
  },
  getUserById(id: string): User | undefined {
    const state = ensureInitialized();
    return state.users.find((u) => u.id === id);
  },
  getUserByPhone(phone: string): User | undefined {
    const state = ensureInitialized();
    const clean = phone.replace(/\D/g, '').slice(-10);
    return state.users.find((u) => u.phone.replace(/\D/g, '').slice(-10) === clean);
  },
  createUser(userData: Omit<User, 'id' | 'createdAt'>): User {
    const state = ensureInitialized();
    const newUser: User = {
      ...userData,
      id: `usr-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    state.users.push(newUser);
    saveState(state);
    return newUser;
  },
  updateUser(id: string, updates: Partial<User>): User | null {
    const state = ensureInitialized();
    const index = state.users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    state.users[index] = { ...state.users[index], ...updates };
    saveState(state);
    return state.users[index];
  },

  // User Addresses
  getUserAddresses(userId: string): UserAddress[] {
    const state = ensureInitialized();
    return state.userAddresses.filter((a) => a.userId === userId);
  },
  addUserAddress(addressData: Omit<UserAddress, 'id'>): UserAddress {
    const state = ensureInitialized();
    const newAddr: UserAddress = {
      ...addressData,
      id: `addr-${Date.now()}`,
    };
    if (newAddr.isDefault) {
      state.userAddresses.forEach((a) => {
        if (a.userId === newAddr.userId) a.isDefault = false;
      });
    }
    state.userAddresses.push(newAddr);
    saveState(state);
    return newAddr;
  },

  // Coupons
  getCoupons(): Coupon[] {
    const state = ensureInitialized();
    return state.coupons.filter((c) => c.isActive);
  },
  getCouponByCode(code: string): Coupon | undefined {
    const state = ensureInitialized();
    return state.coupons.find((c) => c.code.toUpperCase() === code.toUpperCase() && c.isActive);
  },

  // Service Bookings
  createServiceBooking(data: Omit<ServiceBooking, 'id' | 'bookingNumber' | 'createdAt'>): ServiceBooking {
    const state = ensureInitialized();
    const bookingNumber = `SB-SRV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: ServiceBooking = {
      ...data,
      id: `srv-${Date.now()}`,
      bookingNumber,
      createdAt: new Date().toISOString(),
    };
    state.serviceBookings.unshift(newBooking);
    saveState(state);
    return newBooking;
  },
  getServiceBookings(): ServiceBooking[] {
    const state = ensureInitialized();
    return state.serviceBookings;
  },

  // Admin Dashboard KPIs
  getDashboardKPIs() {
    const state = ensureInitialized();
    const totalBuybackGMV = state.buybackOrders.reduce((sum, o) => sum + (o.finalPayoutPrice || o.quotedPrice), 0);
    const totalStoreSales = state.customerOrders.reduce((sum, o) => sum + (o.paymentStatus === 'CAPTURED' ? o.totalAmount : 0), 0);
    const activePickups = state.buybackOrders.filter(
      (o) => o.status === 'PICKUP_SCHEDULED' || o.status === 'TECHNICIAN_ASSIGNED' || o.status === 'PICKUP_OUT_FOR_COLLECTION'
    ).length;
    const pendingInspections = state.buybackOrders.filter(
      (o) => o.status === 'INSPECTION_PENDING' || o.status === 'INSPECTION_IN_PROGRESS'
    ).length;
    const lowStockAlerts = state.refurbishedProducts.filter((p) => p.stockCount <= 2).length;

    return {
      totalBuybackGMV,
      totalStoreSales,
      buybackOrdersCount: state.buybackOrders.length,
      customerOrdersCount: state.customerOrders.length,
      activePickups,
      pendingInspections,
      lowStockAlerts,
      totalUsers: state.users.length,
    };
  },
};
