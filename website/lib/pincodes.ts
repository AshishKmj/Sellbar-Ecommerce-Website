// Indian Pincode Serviceability & Location Resolver for Sellbar.in

export interface PincodeInfo {
  pincode: string;
  city: string;
  state: string;
  tier: 1 | 2 | 3;
  buybackPickupAvailable: boolean;
  deliveryDays: number;
  expressDeliveryAvailable: boolean;
}

export const PINCODE_DATABASE: Record<string, Omit<PincodeInfo, 'pincode'>> = {
  // Delhi NCR
  '110001': { city: 'New Delhi (Connaught Place)', state: 'Delhi', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '110020': { city: 'South Delhi (Okhla)', state: 'Delhi', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '122001': { city: 'Gurugram', state: 'Haryana', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '201301': { city: 'Noida', state: 'Uttar Pradesh', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  
  // Bengaluru
  '560001': { city: 'Bengaluru (MG Road)', state: 'Karnataka', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '560034': { city: 'Bengaluru (Koramangala)', state: 'Karnataka', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '560066': { city: 'Bengaluru (Whitefield)', state: 'Karnataka', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '560100': { city: 'Bengaluru (Electronic City)', state: 'Karnataka', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },

  // Mumbai & MMR
  '400001': { city: 'Mumbai (Fort / South Mumbai)', state: 'Maharashtra', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '400050': { city: 'Mumbai (Bandra West)', state: 'Maharashtra', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '400076': { city: 'Mumbai (Powai)', state: 'Maharashtra', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '400601': { city: 'Thane', state: 'Maharashtra', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },

  // Hyderabad
  '500001': { city: 'Hyderabad (Abids)', state: 'Telangana', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '500081': { city: 'Hyderabad (Hitec City / Madhapur)', state: 'Telangana', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },

  // Pune
  '411001': { city: 'Pune (Camp)', state: 'Maharashtra', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '411057': { city: 'Pune (Hinjawadi Infotech Park)', state: 'Maharashtra', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },

  // Chennai
  '600001': { city: 'Chennai (George Town)', state: 'Tamil Nadu', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },
  '600096': { city: 'Chennai (OMR / Perungudi)', state: 'Tamil Nadu', tier: 1, buybackPickupAvailable: true, deliveryDays: 1, expressDeliveryAvailable: true },

  // Kolkata
  '700001': { city: 'Kolkata (BBD Bagh)', state: 'West Bengal', tier: 1, buybackPickupAvailable: true, deliveryDays: 2, expressDeliveryAvailable: true },
  '700091': { city: 'Kolkata (Salt Lake Sector V)', state: 'West Bengal', tier: 1, buybackPickupAvailable: true, deliveryDays: 2, expressDeliveryAvailable: true },

  // Ahmedabad & Jaipur
  '380001': { city: 'Ahmedabad', state: 'Gujarat', tier: 2, buybackPickupAvailable: true, deliveryDays: 2, expressDeliveryAvailable: true },
  '302001': { city: 'Jaipur', state: 'Rajasthan', tier: 2, buybackPickupAvailable: true, deliveryDays: 2, expressDeliveryAvailable: true },
  
  // Chandigarh & Lucknow
  '160017': { city: 'Chandigarh', state: 'Punjab', tier: 2, buybackPickupAvailable: true, deliveryDays: 2, expressDeliveryAvailable: true },
  '226001': { city: 'Lucknow', state: 'Uttar Pradesh', tier: 2, buybackPickupAvailable: true, deliveryDays: 2, expressDeliveryAvailable: false },
};

export function lookupPincode(pincode: string): PincodeInfo {
  const cleanPin = pincode.trim().replace(/\D/g, '');
  
  if (cleanPin.length !== 6) {
    return {
      pincode: cleanPin,
      city: 'Invalid PIN Code',
      state: 'India',
      tier: 3,
      buybackPickupAvailable: false,
      deliveryDays: 5,
      expressDeliveryAvailable: false,
    };
  }

  if (PINCODE_DATABASE[cleanPin]) {
    return {
      pincode: cleanPin,
      ...PINCODE_DATABASE[cleanPin],
    };
  }

  // Generalized algorithm for any valid 6-digit Indian PIN code based on Postal Zone prefix
  const firstDigit = cleanPin.charAt(0);
  let resolvedState = 'India';
  let resolvedCity = 'District Hub';

  switch (firstDigit) {
    case '1':
      resolvedState = 'Delhi / Haryana / Punjab / HP / J&K';
      resolvedCity = 'North Zone Service Area';
      break;
    case '2':
      resolvedState = 'Uttar Pradesh / Uttarakhand';
      resolvedCity = 'UP Central Area';
      break;
    case '3':
      resolvedState = 'Rajasthan / Gujarat';
      resolvedCity = 'Western Zone Area';
      break;
    case '4':
      resolvedState = 'Maharashtra / Goa / MP / Chhattisgarh';
      resolvedCity = 'West-Central Area';
      break;
    case '5':
      resolvedState = 'Andhra Pradesh / Telangana / Karnataka';
      resolvedCity = 'South Central Area';
      break;
    case '6':
      resolvedState = 'Tamil Nadu / Kerala';
      resolvedCity = 'South Zone Area';
      break;
    case '7':
      resolvedState = 'West Bengal / Odisha / North East';
      resolvedCity = 'Eastern Zone Area';
      break;
    case '8':
      resolvedState = 'Bihar / Jharkhand';
      resolvedCity = 'East Central Area';
      break;
    default:
      resolvedState = 'India';
      resolvedCity = 'Standard Service Area';
  }

  return {
    pincode: cleanPin,
    city: resolvedCity,
    state: resolvedState,
    tier: 2,
    buybackPickupAvailable: true,
    deliveryDays: 3,
    expressDeliveryAvailable: false,
  };
}
