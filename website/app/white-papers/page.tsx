import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Whitepapers & Research Reports | Sellbar Re-Commerce Insights',
  description:
    'Download our in-depth research papers on the circular economy in India, refurbished smartphone market adoption, e-waste reduction, and secondary electronics trends.',
};

const PAPERS = [
  {
    title: 'The Rise of India’s Refurbished Electronics Economy (2024-2028)',
    desc: 'An authoritative study on consumer perceptions, tier-2 city demand spikes, and the environmental benefits of extending device life cycles by 2-4 years.',
    pages: '38 Pages',
    year: '2025',
    category: 'Market Intelligence',
  },
  {
    title: 'E-Waste Reduction & Corporate Carbon Offset Strategies',
    desc: 'How enterprise IT asset disposition (ITAD) and trade-in programs help Fortune 500 corporations reach Net-Zero goals while unlocking residual capital.',
    pages: '26 Pages',
    year: '2024',
    category: 'Sustainability',
  },
  {
    title: 'Security, Diagnostics & Data Erasure Protocols in Secondary Tech',
    desc: 'Deep dive into ISO/IEC certified 32-point automated hardware testing, NIST 800-88 data destruction, and warranty underwriting.',
    pages: '32 Pages',
    year: '2024',
    category: 'Technology & Standards',
  },
];

export default function WhitePapersPage() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen pb-16 font-sans">
      <div className="bg-white border-b border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f8f5] text-[#13b59b] text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" /> Research &amp; Insights
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Sellbar <span className="text-[#13b59b]">Whitepapers</span> &amp; Reports
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
            Data-driven reports, circular economy findings, and market outlooks authored by Sellbar researchers and industry analysts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="space-y-6 max-w-4xl">
          {PAPERS.map((paper, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#13b59b] bg-[#e8f8f5] px-2.5 py-0.5 rounded-full">
                    {paper.category}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">{paper.year} • {paper.pages}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">{paper.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                  {paper.desc}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-[#13b59b] text-white font-bold text-xs transition cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
