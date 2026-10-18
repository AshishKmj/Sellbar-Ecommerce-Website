import React from 'react';
import { RotateCcw, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ReturnPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
          <RotateCcw className="w-3.5 h-3.5" /> 7-Day Guarantee
        </div>
        <h1 className="text-3xl font-black text-white">7-Day Replacement Policy</h1>
        <p className="text-xs text-slate-400">Zero-hassle replacement on all Certified Refurbished purchases</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="text-base font-bold text-white">Eligibility Criteria</h2>
        <p>
          If your device has any functional defect, touch anomaly, sensor malfunction, or battery degradation discovered within 7 calendar days of delivery, Sellbar provides a free doorstep replacement or 100% refund.
        </p>
        <p>
          To initiate a replacement, visit your account orders section or email <strong className="text-emerald-400">care@sellbar.in</strong> with your order reference number. Our courier team will collect the unit with zero return shipping charges.
        </p>
      </div>
    </div>
  );
}
