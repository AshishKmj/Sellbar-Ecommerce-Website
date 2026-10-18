import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function BlogIndexPage() {
  const posts = [
    {
      slug: 'how-to-wipe-iphone-before-selling',
      title: 'How to Securely Wipe Your iPhone Before Selling in India (NIST 800-88 Standard)',
      excerpt: 'Step-by-step checklist to unpair your Apple Watch, sign out of iCloud, and factory reset your iPhone safely.',
      date: 'Oct 14, 2026',
      readTime: '4 min read',
    },
    {
      slug: 'certified-refurbished-vs-used-phones',
      title: 'Certified Refurbished vs Used Phones: Why 32-Point Inspection Matters',
      excerpt: 'Understand the difference between unverified classified listings and Sellbar Certified devices backed by a 12-month warranty.',
      date: 'Oct 10, 2026',
      readTime: '5 min read',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-white">Sellbar Tech & Re-Commerce Insights</h1>
        <p className="text-xs text-slate-400">Guides, tips on preserving gadget resale value, and refurbished buying advice</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 flex flex-col justify-between space-y-4 transition group"
          >
            <div className="space-y-2">
              <div className="text-[11px] text-slate-500 flex items-center gap-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-base font-bold text-white group-hover:text-emerald-400 transition">
                {post.title}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 pt-2">
              <span>Read Article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
