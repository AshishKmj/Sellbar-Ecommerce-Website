import React from 'react';
import { Truck, ShieldCheck, MapPin } from 'lucide-react';

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
          <Truck className="w-3.5 h-3.5" /> Pan-India Logistics
        </div>
        <h1 className="text-3xl font-black text-white">Shipping & Delivery Policy</h1>
        <p className="text-xs text-slate-400">100% Insured Delivery via BlueDart and Sellbar Express Air</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="text-base font-bold text-white">Delivery Timelines</h2>
        <p>
          - <strong>Metro Cities (Delhi NCR, Bengaluru, Mumbai, Hyderabad, Pune, Chennai, Kolkata):</strong> 1 to 2 business days.<br />
          - <strong>Tier 2 & Tier 3 Hubs:</strong> 2 to 4 business days.<br />
          - All shipments are packed in tamper-evident corrugated eco-packs with tamper seal tracking.
        </p>

        <h2 className="text-base font-bold text-white pt-2">Shipping Charges</h2>
        <p>
          We provide <strong>100% Free Shipping and In-Transit Insurance</strong> on all prepaid and Cash-on-Delivery orders across India.
        </p>
      </div>
    </div>
  );
}
