import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Tag, Layers, Sliders, ShieldAlert } from 'lucide-react';

export default function AdminPricingRulesPage() {
  const rules = [
    { key: 'SCREEN_FLAWLESS', label: 'Screen Flawless', deduction: '0%', type: 'Multiplier' },
    { key: 'SCREEN_MINOR_SCRATCHES', label: 'Screen Minor Scratches', deduction: '-8%', type: 'Deduction' },
    { key: 'SCREEN_CRACKED', label: 'Screen Cracked / Shattered', deduction: '-28%', type: 'Deduction' },
    { key: 'SCREEN_TOUCH_ISSUE', label: 'Touch Anomaly / Dead Pixels', deduction: '-32%', type: 'Deduction' },
    { key: 'BODY_FLAWLESS', label: 'Body Pristine', deduction: '0%', type: 'Multiplier' },
    { key: 'BODY_SCRATCHES', label: 'Body Normal Scratches', deduction: '-6%', type: 'Deduction' },
    { key: 'BODY_DENTS', label: 'Body Heavy Corner Dents', deduction: '-14%', type: 'Deduction' },
    { key: 'BODY_BENT', label: 'Bent Frame', deduction: '-25%', type: 'Deduction' },
    { key: 'DEFECT_CAMERA', label: 'Camera Lens / Sensor Fault', deduction: '-12%', type: 'Functional' },
    { key: 'DEFECT_BIOMETRICS', label: 'Face ID / Fingerprint Fault', deduction: '-9%', type: 'Functional' },
    { key: 'DEFECT_BATTERY', label: 'Degraded Battery (<80% Health)', deduction: '-8%', type: 'Functional' },
    { key: 'COMPLETE_KIT_BONUS', label: 'Original Box + Charger + Bill', deduction: '+3% Bonus', type: 'Bonus' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/admin" className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">Pricing Engine & Deduction Rules</h1>
          <p className="text-xs text-slate-400">Configure algorithmic price deductions and condition factors for buyback trade-ins</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/80 border-b border-slate-800 text-[10px] text-slate-400 uppercase font-bold">
            <tr>
              <th className="p-4">Rule Identifier</th>
              <th className="p-4">Description</th>
              <th className="p-4">Category Type</th>
              <th className="p-4 text-right">Adjustment Factor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-850">
            {rules.map((r, i) => (
              <tr key={i} className="hover:bg-slate-850/40 transition">
                <td className="p-4 font-mono text-emerald-400 font-semibold">{r.key}</td>
                <td className="p-4 text-white font-bold">{r.label}</td>
                <td className="p-4 text-slate-400">{r.type}</td>
                <td className={`p-4 text-right font-black ${r.deduction.startsWith('+') ? 'text-emerald-400' : r.deduction === '0%' ? 'text-slate-400' : 'text-rose-400'}`}>
                  {r.deduction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
