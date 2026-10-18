// Sellbar.in Resale & Buyback Valuation Pricing Engine
// Transparent calculation with line-item breakdowns

import { DeviceModel, DeviceVariant, ValuationQuestionnaire, PriceBreakdownItem } from '@/lib/types';

export interface ValuationResult {
  basePrice: number;
  variantOffset: number;
  grossModelValue: number;
  deductions: number;
  promotionalBonus: number;
  quotedPrice: number;
  minimumGuaranteedPrice: number;
  breakdown: PriceBreakdownItem[];
  eligibleCoupons: string[];
}

export function calculateBuybackQuote(
  model: DeviceModel,
  variant: DeviceVariant,
  questionnaire: ValuationQuestionnaire,
  appliedPromoCode?: string
): ValuationResult {
  const breakdown: PriceBreakdownItem[] = [];

  const basePrice = model.baseResalePrice;
  const variantOffset = variant.priceOffset || 0;
  const grossModelValue = basePrice + variantOffset;

  breakdown.push({
    label: `Base Resale Value (${model.name} - ${variant.title})`,
    amount: grossModelValue,
    isDeduction: false,
  });

  let totalDeductions = 0;

  // 1. Critical Power / Boot check
  if (!questionnaire.powersOn) {
    const powerDeduction = Math.round(grossModelValue * 0.55);
    totalDeductions += powerDeduction;
    breakdown.push({
      label: 'Device Does Not Power On / Dead Motherboard',
      amount: powerDeduction,
      isDeduction: true,
    });
  }

  // 2. Screen condition assessment
  switch (questionnaire.screenCondition) {
    case 'FLAWLESS':
      // Zero deduction for perfect screen
      break;
    case 'MINOR_SCRATCHES': {
      const screenDeduction = Math.round(grossModelValue * 0.08);
      totalDeductions += screenDeduction;
      breakdown.push({
        label: 'Minor Screen Hairline Scratches (Micro-abrasions)',
        amount: screenDeduction,
        isDeduction: true,
      });
      break;
    }
    case 'CRACKED': {
      const screenDeduction = Math.round(grossModelValue * 0.28);
      totalDeductions += screenDeduction;
      breakdown.push({
        label: 'Cracked / Shattered Glass or Display Panel',
        amount: screenDeduction,
        isDeduction: true,
      });
      break;
    }
    case 'TOUCH_ISSUE': {
      const screenDeduction = Math.round(grossModelValue * 0.32);
      totalDeductions += screenDeduction;
      breakdown.push({
        label: 'Display Lines, Dead Pixels, or Unresponsive Touch Digitizer',
        amount: screenDeduction,
        isDeduction: true,
      });
      break;
    }
  }

  // 3. Body / Chassis condition
  switch (questionnaire.bodyCondition) {
    case 'FLAWLESS':
      break;
    case 'SCRATCHES': {
      const bodyDeduction = Math.round(grossModelValue * 0.06);
      totalDeductions += bodyDeduction;
      breakdown.push({
        label: 'Body / Frame Normal Wear & Scratches',
        amount: bodyDeduction,
        isDeduction: true,
      });
      break;
    }
    case 'DENTS': {
      const bodyDeduction = Math.round(grossModelValue * 0.14);
      totalDeductions += bodyDeduction;
      breakdown.push({
        label: 'Corner Dents / Heavy Edge Impact Marks',
        amount: bodyDeduction,
        isDeduction: true,
      });
      break;
    }
    case 'BENT': {
      const bodyDeduction = Math.round(grossModelValue * 0.25);
      totalDeductions += bodyDeduction;
      breakdown.push({
        label: 'Bent Frame / Compromised Structural Integrity',
        amount: bodyDeduction,
        isDeduction: true,
      });
      break;
    }
  }

  // 4. Functional defects
  const defectDeductionsMap: Record<string, { label: string; pct: number }> = {
    'FRONT_CAMERA': { label: 'Front / Selfie Camera Defective', pct: 0.07 },
    'REAR_CAMERA': { label: 'Rear Primary Camera / Lens Damage', pct: 0.12 },
    'BIOMETRICS': { label: 'Face ID / Fingerprint Sensor Unresponsive', pct: 0.09 },
    'BATTERY_DEGRADED': { label: 'Degraded Battery Health (<80% or Service Required)', pct: 0.08 },
    'SPEAKER_MIC': { label: 'Earpiece, Speaker, or Microphone Distortion', pct: 0.06 },
    'CHARGING_PORT': { label: 'Charging Port Loose / Faulty', pct: 0.05 },
    'WIFI_BLUETOOTH': { label: 'Wi-Fi / Bluetooth Connectivity Failure', pct: 0.10 },
  };

  questionnaire.functionalDefects.forEach((defectKey) => {
    const defectInfo = defectDeductionsMap[defectKey];
    if (defectInfo) {
      const amount = Math.round(grossModelValue * defectInfo.pct);
      totalDeductions += amount;
      breakdown.push({
        label: defectInfo.label,
        amount,
        isDeduction: true,
      });
    }
  });

  // 5. Accessories deductions / bonuses
  const hasOriginalBox = questionnaire.accessories.includes('ORIGINAL_BOX');
  const hasOriginalCharger = questionnaire.accessories.includes('ORIGINAL_CHARGER');
  const hasValidBill = questionnaire.accessories.includes('VALID_BILL');

  if (!hasOriginalBox) {
    const deduction = Math.round(grossModelValue * 0.025);
    totalDeductions += deduction;
    breakdown.push({
      label: 'Missing Original Box with Matching IMEI',
      amount: deduction,
      isDeduction: true,
    });
  }

  if (!hasOriginalCharger) {
    const deduction = Math.round(grossModelValue * 0.035);
    totalDeductions += deduction;
    breakdown.push({
      label: 'Missing Original Fast Charger / Cable',
      amount: deduction,
      isDeduction: true,
    });
  }

  if (hasValidBill && hasOriginalBox && hasOriginalCharger) {
    const completenessBonus = Math.round(grossModelValue * 0.03);
    breakdown.push({
      label: 'Complete Kit Bonus (Original Bill + Box + Charger)',
      amount: completenessBonus,
      isDeduction: false,
    });
    totalDeductions -= completenessBonus;
  }

  // 6. Promotional Bonus / Boost
  let promoBonus = 0;
  if (appliedPromoCode?.toUpperCase() === 'SELLSMART' || appliedPromoCode?.toUpperCase() === 'SELLBARBONUS') {
    promoBonus = Math.min(1500, Math.round(grossModelValue * 0.05));
    breakdown.push({
      label: `Promotional Valuation Boost (${appliedPromoCode.toUpperCase()})`,
      amount: promoBonus,
      isDeduction: false,
    });
  }

  // Subtotal calculation
  const calculated = grossModelValue - totalDeductions + promoBonus;
  // Guaranteed minimum salvage floor
  const minimumGuaranteedPrice = Math.max(1500, Math.round(grossModelValue * 0.12));
  const quotedPrice = Math.max(minimumGuaranteedPrice, calculated);

  return {
    basePrice,
    variantOffset,
    grossModelValue,
    deductions: Math.max(0, totalDeductions),
    promotionalBonus: promoBonus,
    quotedPrice,
    minimumGuaranteedPrice,
    breakdown,
    eligibleCoupons: ['SELLSMART', 'SELLBARBONUS'],
  };
}
