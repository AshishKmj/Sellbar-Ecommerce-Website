import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { calculateBuybackQuote } from '@/lib/pricing';
import { ValuationQuestionnaire } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { modelSlug, modelId, variantId, questionnaire, promoCode } = body;

    let model = modelId ? db.getDeviceModels().find((m) => m.id === modelId) : undefined;
    if (!model && modelSlug) {
      model = db.getDeviceModelBySlug(modelSlug);
    }

    if (!model) {
      return NextResponse.json({ success: false, message: 'Device model not found' }, { status: 404 });
    }

    const variant = model.variants.find((v) => v.id === variantId) || model.variants[0];
    if (!variant) {
      return NextResponse.json({ success: false, message: 'Invalid device variant' }, { status: 400 });
    }

    const defaultQuestionnaire: ValuationQuestionnaire = {
      powersOn: questionnaire?.powersOn ?? true,
      screenCondition: questionnaire?.screenCondition || 'FLAWLESS',
      bodyCondition: questionnaire?.bodyCondition || 'FLAWLESS',
      functionalDefects: questionnaire?.functionalDefects || [],
      accessories: questionnaire?.accessories || [],
    };

    const quote = calculateBuybackQuote(model, variant, defaultQuestionnaire, promoCode);

    return NextResponse.json({
      success: true,
      model: {
        id: model.id,
        name: model.name,
        slug: model.slug,
        imageUrl: model.imageUrl,
      },
      variant,
      quote,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to calculate quote', error: String(error) }, { status: 500 });
  }
}
