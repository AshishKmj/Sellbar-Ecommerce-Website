import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Download,
  Building,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Scale,
} from 'lucide-react';

export const metadata = {
  title: 'Corporate Information & Governance | Sellbar.in',
  description:
    'Official corporate filings, statutory disclosures, Annual Returns (MGT-7), CIN, GSTIN, and corporate governance for Sellbar Technologies India Pvt. Ltd.',
};

const ANNUAL_RETURNS = [
  {
    year: 'Financial Year 2024-2025',
    form: 'Form MGT-7 / Annual Return',
    date: 'Filed October 2025',
    size: '1.4 MB',
    status: 'Audited & Approved',
  },
  {
    year: 'Financial Year 2023-2024',
    form: 'Form MGT-7 / Annual Return',
    date: 'Filed October 2024',
    size: '1.2 MB',
    status: 'Audited & Approved',
  },
  {
    year: 'Financial Year 2022-2023',
    form: 'Form MGT-7 / Annual Return',
    date: 'Filed September 2023',
    size: '1.1 MB',
    status: 'Audited & Approved',
  },
];

export default function CorporateInformationPage() {
  return (
    <div className="bg-[#f8fafc] min-h-[calc(100vh-120px)] text-gray-800 antialiased flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          
          {/* Left Teal Brand Panel */}
          <div className="bg-linear-to-br from-[#13b59b] via-[#0d9480] to-[#0a6659] p-8 sm:p-14 text-white flex flex-col justify-between items-center text-center relative overflow-hidden">
            <div className="space-y-6 my-auto">
              <div className="w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center p-3 border border-white/30 shadow-inner">
                <svg
                  className="w-12 h-12 text-white stroke-[2.8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
                  SELLBAR
                </h2>
                <p className="text-base font-semibold text-white/95 mt-2">
                  From E-Waste to Eco-Warriors:
                </p>
                <p className="text-xs text-white/80 max-w-xs mx-auto mt-1">
                  Decoding new and refurbished smartphone, laptop and consumer electronics markets across India.
                </p>
              </div>
            </div>

            <div className="text-[11px] text-white/70 pt-6">
              ISO 27001 &amp; ISO 27701 Information Security Certified Platform
            </div>
          </div>

          {/* Right Corporate Filings Panel */}
          <div className="bg-white p-8 sm:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#13b59b] uppercase tracking-wider mb-1">
                  <Scale className="w-3.5 h-3.5" />
                  Statutory Compliance
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Corporate Information
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  Statutory disclosures under Section 92(3) &amp; Section 134(3)(a) of the Companies Act, 2013.
                </p>
              </div>

              {/* Entity Overview */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-xs space-y-2 text-gray-600">
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="font-medium text-gray-500">Legal Entity Name</span>
                  <span className="font-bold text-gray-900">Sellbar Technologies India Pvt. Ltd.</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="font-medium text-gray-500">Corporate Identity Number (CIN)</span>
                  <span className="font-mono font-bold text-gray-900">U72900HR2020PTC089921</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="font-medium text-gray-500">Registered Office</span>
                  <span className="text-right text-gray-800">Tower B, Cyber City, Sector 29, Gurgaon, HR 122001</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-gray-500">Grievance &amp; Compliance Officer</span>
                  <span className="font-bold text-[#13b59b]">compliance@sellbar.in</span>
                </div>
              </div>

              {/* Annual Returns List */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#13b59b]" />
                  Annual Returns (MGT-7)
                </h3>
                <div className="space-y-2.5">
                  {ANNUAL_RETURNS.map((ret, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 bg-[#fbfcfd] hover:border-[#13b59b] transition text-xs"
                    >
                      <div className="space-y-0.5">
                        <div className="font-bold text-gray-900">{ret.year}</div>
                        <div className="text-[11px] text-gray-500">
                          {ret.form} • {ret.date}
                        </div>
                      </div>
                      <a
                        href={`/documents/${ret.year.toLowerCase().replace(/\s+/g, '-')}.pdf`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#13b59b]/10 hover:bg-[#13b59b] text-[#13b59b] hover:text-white font-bold transition duration-150"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF ({ret.size})</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[11px] text-gray-400 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span>Updated for MCA / ROC New Delhi Filings</span>
              <Link href="/contact" className="text-[#13b59b] hover:underline font-semibold">
                Contact Compliance Desk
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
