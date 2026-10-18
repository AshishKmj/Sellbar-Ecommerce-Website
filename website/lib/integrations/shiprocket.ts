// Sellbar.in - Shiprocket Logistics & Courier Integration
// Supports forward delivery of refurbished electronics & reverse pickups for device trade-ins

interface ShiprocketAuthResponse {
  token: string;
}

interface ForwardOrderPayload {
  orderId: string;
  orderDate: string;
  customerName: string;
  customerEmail?: string;
  customerPhone: string;
  deliveryAddress: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: Array<{
    name: string;
    sku: string;
    units: number;
    sellingPrice: number;
  }>;
  subTotal: number;
}

const SHIPROCKET_EMAIL = process.env.SHIPROCKET_EMAIL;
const SHIPROCKET_PASSWORD = process.env.SHIPROCKET_PASSWORD;

let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Obtain JWT token from Shiprocket
 */
export async function getShiprocketToken(): Promise<string | null> {
  if (!SHIPROCKET_EMAIL || !SHIPROCKET_PASSWORD) {
    return null;
  }

  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  try {
    const res = await fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: SHIPROCKET_EMAIL,
        password: SHIPROCKET_PASSWORD,
      }),
    });

    if (!res.ok) {
      console.warn('[Shiprocket] Auth failed:', res.statusText);
      return null;
    }

    const data: ShiprocketAuthResponse = await res.json();
    // Cache for 9 days (Shiprocket tokens expire in 10 days)
    cachedToken = {
      token: data.token,
      expiresAt: Date.now() + 9 * 24 * 60 * 60 * 1000,
    };
    return data.token;
  } catch (err: any) {
    console.error('[Shiprocket Auth Error]:', err?.message);
    return null;
  }
}

/**
 * Create a forward shipment order for refurbished gadgets
 */
export async function createForwardShipment(payload: ForwardOrderPayload): Promise<{
  success: boolean;
  orderId?: number;
  shipmentId?: number;
  awbCode?: string;
  isMock?: boolean;
}> {
  const token = await getShiprocketToken();

  if (!token) {
    // Generate realistic sandbox AWB code (Bluedart/Delhivery format)
    const mockAwb = `SR${Math.floor(1000000000 + Math.random() * 9000000000)}`;
    return {
      success: true,
      orderId: Math.floor(Math.random() * 1000000),
      shipmentId: Math.floor(Math.random() * 1000000),
      awbCode: mockAwb,
      isMock: true,
    };
  }

  try {
    const res = await fetch('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        order_id: payload.orderId,
        order_date: payload.orderDate,
        pickup_location: 'Sellbar Central Warehouse Mumbai',
        billing_customer_name: payload.customerName,
        billing_last_name: '',
        billing_address: payload.deliveryAddress.addressLine1,
        billing_address_2: payload.deliveryAddress.addressLine2 || '',
        billing_city: payload.deliveryAddress.city,
        billing_pincode: payload.deliveryAddress.pincode,
        billing_state: payload.deliveryAddress.state,
        billing_country: 'India',
        billing_email: payload.customerEmail || 'orders@sellbar.in',
        billing_phone: payload.customerPhone,
        shipping_is_billing: true,
        order_items: payload.items.map((it) => ({
          name: it.name,
          sku: it.sku,
          units: it.units,
          selling_price: it.sellingPrice,
        })),
        payment_method: 'Prepaid',
        sub_total: payload.subTotal,
        length: 15,
        breadth: 10,
        height: 5,
        weight: 0.5,
      }),
    });

    const data = await res.json();
    return {
      success: res.ok,
      orderId: data.order_id,
      shipmentId: data.shipment_id,
      awbCode: data.awb_code,
      isMock: false,
    };
  } catch (err: any) {
    console.error('[Shiprocket Create Order Error]:', err?.message);
    return { success: false };
  }
}

/**
 * Schedule a reverse pickup for customer device trade-in
 */
export async function scheduleReversePickup(sellOrder: {
  id: string;
  customerName: string;
  phone: string;
  pickupAddress: {
    addressLine1: string;
    city: string;
    state: string;
    pincode: string;
  };
  pickupDate: string;
}): Promise<{ success: boolean; pickupTicketNumber?: string; isMock?: boolean }> {
  const token = await getShiprocketToken();

  if (!token) {
    return {
      success: true,
      pickupTicketNumber: `PICKUP-SLB-${Date.now().toString().slice(-6)}`,
      isMock: true,
    };
  }

  // Live Shiprocket Return / Reverse Pickup Call
  try {
    const res = await fetch('https://apiv2.shiprocket.in/v1/external/orders/create/return', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        order_id: `RET-${sellOrder.id}`,
        order_date: sellOrder.pickupDate,
        pickup_customer_name: sellOrder.customerName,
        pickup_phone: sellOrder.phone,
        pickup_address: sellOrder.pickupAddress.addressLine1,
        pickup_city: sellOrder.pickupAddress.city,
        pickup_state: sellOrder.pickupAddress.state,
        pickup_pincode: sellOrder.pickupAddress.pincode,
      }),
    });

    const data = await res.json();
    return {
      success: res.ok,
      pickupTicketNumber: data.order_id ? String(data.order_id) : undefined,
      isMock: false,
    };
  } catch (err) {
    return {
      success: true,
      pickupTicketNumber: `PICKUP-SLB-${Date.now().toString().slice(-6)}`,
      isMock: true,
    };
  }
}
