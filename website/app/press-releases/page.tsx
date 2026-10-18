import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Newspaper,
  Calendar,
  ArrowRight,
  Download,
  Share2,
  Mail,
  Building,
  Heart,
  Leaf,
  ChevronRight,
} from 'lucide-react';

export const metadata = {
  title: 'Press Releases & Media Room | Sellbar.in',
  description:
    'Read the latest news, sustainability campaigns, corporate press releases, and media announcements from Sellbar Technologies India.',
};

const PRESS_RELEASES = [
  {
    title: 'ReUse With Sellbar: Donate Books & Share Your Knowledge With Children Across Bharat',
    date: 'September 26, 2026',
    category: 'ReUse Campaign',
    excerpt:
      'Books are the epitome of knowledge. This month’s ReUse With Sellbar initiative helps donate books and educational material to underprivileged community libraries, reducing paper waste and empowering students.',
    readTime: '3 min read',
    image: '/cashify/sell-guide-512gb.webp',
  },
  {
    title: 'Sellbar Reaches 1,500+ Cities Milestone for Free Insured Doorstep Smartphone Buybacks',
    date: 'August 18, 2026',
    category: 'Company Milestone',
    excerpt:
      'Sellbar announced the expansion of its real-time AI valuation and instant UPI payout service to over 1,500 tier-2 and tier-3 cities across India, bridging the digital access gap.',
    readTime: '4 min read',
    image: '/cashify/news-nothing-phone.png',
  },
  {
    title: 'ReUse With Sellbar: Help Underprivileged Kids Paint Their Dreams With Recycled Art Kits',
    date: 'July 24, 2026',
    category: 'Social Impact',
    excerpt:
      'The ReUse With Sellbar social drive collected preloved paint brushes, sketch books, and craft kits across 200+ offline experience centers for distribution to rural art programs.',
    readTime: '3 min read',
    image: '/cashify/sell-guide-iphone-value.webp',
  },
  {
    title: 'Sellbar Launches 32-Point Rigorous Hardware Certification for Renewed Apple MacBooks',
    date: 'June 15, 2026',
    category: 'Product Launch',
    excerpt:
      'Every refurbished MacBook now undergoes proprietary diagnostic stress-testing on Apple Silicon M-series chips, thermal cycling, and comes backed by a 12-month comprehensive doorstep warranty.',
    readTime: '5 min read',
    image: '/cashify/news-macbook-leak.png',
  },
  {
    title: 'Sellbar Fast Doorstep Smartphone Repair Now Live in 25 Metros with 30-Minute Guarantee',
    date: 'May 27, 2026',
    category: 'Service Launch',
    excerpt:
      'Certified technicians visit customers with Grade-A OEM screens and batteries, performing full repair right in front of the customer with zero visit fees.',
    readTime: '3 min read',
    image: '/cashify/news-iphone-repair.png',
  },
  {
    title: 'Sellbar Disburses Over ₹600 Crore in Direct UPI Payouts to Indian Electronics Sellers',
    date: 'March 30, 2026',
    category: 'Financial Milestone',
    excerpt:
      'Sellbar crossed the milestone of transferring more than ₹600 Crore in instant, upfront UPI and IMPS payouts directly into consumer bank accounts at the moment of device inspection.',
    readTime: '4 min read',
    image: '/cashify/sell-guide-clean-status.webp',
  },
];

export default function PressReleasesPage() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#13b59b]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#13b59b] font-semibold">Press Releases &amp; Media Room</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-linear-to-r from-[#0d8571] via-[#109f87] to-[#13b59b] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-4 px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
            <Newspaper className="w-3.5 h-3.5 text-amber-300" />
            Sellbar Media &amp; Newsroom
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Press Releases &amp; Corporate Stories
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            Official announcements, environmental sustainability campaigns, re-commerce research insights, and corporate milestones from Sellbar India.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Releases List with Thumbnails (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <h2 className="text-lg font-black text-slate-900">
              Latest Media Announcements
            </h2>
            <span className="text-xs text-slate-400 font-bold">
              Showing {PRESS_RELEASES.length} releases
            </span>
          </div>

          <div className="space-y-5">
            {PRESS_RELEASES.map((item, idx) => (
              <article
                key={idx}
                className="group bg-white rounded-3xl border border-slate-200 hover:border-[#13b59b] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start overflow-hidden"
              >
                <div className="relative w-full sm:w-44 h-40 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, 176px"
                  />
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#edf7f5] text-[#13b59b] font-bold text-[10px] uppercase">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#13b59b] transition leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>

                  <div className="pt-1 flex items-center text-xs font-bold text-[#13b59b]">
                    <span className="inline-flex items-center gap-1 group-hover:underline">
                      Read Full Story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Media Kit & Inquiries (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Media Contact Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
              Media &amp; Press Relations
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Journalists and media representatives can reach out to our communications desk for spokesperson interviews, high-res assets, or circular economy data.
            </p>
            <div className="pt-1 text-xs space-y-2.5">
              <div className="flex items-center gap-2.5 text-slate-700">
                <Mail className="w-4 h-4 text-[#13b59b]" />
                <a href="mailto:press@sellbar.in" className="hover:text-[#13b59b] font-bold">
                  press@sellbar.in
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <Building className="w-4 h-4 text-[#13b59b]" />
                <span>Gurgaon HQ Media Cell: +91 124 492 8800</span>
              </div>
            </div>
          </div>

          {/* Brand Assets Kit */}
          <div className="bg-[#edf7f5] border border-[#d2f3ed] p-6 rounded-3xl space-y-3">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
              Official Media Kit
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Download official Sellbar vector logos, brand color guidelines, executive biographies, and re-commerce research whitepapers.
            </p>
            <a
              href="/brand-assets.zip"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#13b59b] hover:bg-[#0f957f] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition"
            >
              <Download className="w-3.5 h-3.5" /> Download Media Assets (ZIP)
            </a>
          </div>

          {/* Social Impact ReUse Strip */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase">
              <Leaf className="w-4 h-4" />
              ReUse with Sellbar
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Have pre-owned essentials, books, or sports equipment to donate? Walk into any of our 200+ offline stores across India.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#13b59b] hover:underline"
            >
              Discover Our Sustainability Vision <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
