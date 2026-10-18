'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  TrendingUp,
  Tag,
  Share2,
  ChevronRight,
  Sparkles,
  Smartphone,
  Laptop,
  Watch,
  BookOpen,
} from 'lucide-react';

interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  imageUrl: string;
  author: string;
  featured?: boolean;
}

const CATEGORIES = [
  'All',
  'Smartphones',
  'Laptops',
  'Smartwatches',
  'Comparisons',
  'Buying Guides',
  'Tips & Tricks',
  'Tech News',
];

const ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    slug: 'vivo-v80-alternatives-best-options',
    title: 'Top Vivo V80 Alternatives: Which Are The Best Options Under ₹35,000?',
    excerpt:
      'Looking for portrait prowess, Zeiss optics, and flagship battery backup? We test the top 5 competitors including OnePlus 12R, Galaxy S23 FE, and iQOO Neo 9 Pro.',
    category: 'Smartphones',
    readTime: '4 min read',
    date: '12th Oct 2026',
    author: 'Editorial Desk',
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'art-2',
    slug: 'ps5-flipkart-bbd-vs-amazon-gif-vs-sellbar',
    title: 'PS5 on Flipkart BBD vs Amazon GIF vs Sellbar Sale: Where Should You Buy?',
    excerpt:
      'Comprehensive price breakdown comparing bank discounts, bundled game passes, warranty perks, and certified refurbished PS5 pricing.',
    category: 'Comparisons',
    readTime: '5 min read',
    date: '9th Oct 2026',
    author: 'Gaming Desk',
    imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'art-3',
    slug: 'iphone-15-vs-iphone-16-vs-iphone-17',
    title: 'iPhone 15 vs iPhone 16 vs iPhone 17: Which One to Buy in Festive Sales?',
    excerpt:
      'From 48MP camera upgrades to Apple Intelligence RAM requirements, here is the clear buyer guide on whether to grab the refurbished iPhone 15 or jump to iPhone 16.',
    category: 'Comparisons',
    readTime: '6 min read',
    date: '7th Oct 2026',
    author: 'Priya Sharma',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'art-4',
    slug: 'best-lens-for-wildlife-photography',
    title: 'Best Lens For Wildlife Photography: Nail Jungle Clicks With These Prime Picks',
    excerpt:
      'Telephoto zoom shootout: Sony FE 200-600mm vs Canon RF 100-500mm vs Nikon Z 180-600mm tested for safari tracking and low-light autofocus speed.',
    category: 'Buying Guides',
    readTime: '4 min read',
    date: '6th Oct 2026',
    author: 'Photography Team',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'art-5',
    slug: 'google-fitbit-vs-galaxy-watch-7',
    title: 'Google Fitbit Air vs Samsung Galaxy Watch 7: Detailed Health Tracking Shootout',
    excerpt:
      'ECG accuracy, sleep apnea detection, dual-frequency GPS accuracy, and 3-day battery benchmarks put through real-world fitness testing.',
    category: 'Smartwatches',
    readTime: '5 min read',
    date: '5th Oct 2026',
    author: 'Wearables Desk',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'art-6',
    slug: 'why-iphones-hold-more-resale-value',
    title: 'Why iPhones Hold 25% More Resale Value Than Android in India',
    excerpt:
      'A deep-dive into secondary market depreciation curves, Apple Silicon longevity, and why Indian buyers pay top-tier rupee for renewed iPhones.',
    category: 'Tips & Tricks',
    readTime: '4 min read',
    date: '3rd Oct 2026',
    author: 'Arjun Mehta',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'art-7',
    slug: 'macbook-m1-in-2026-still-worth-it',
    title: 'Refurbished MacBook Air M1 in 2026: Still The Best Budget Laptop for Students?',
    excerpt:
      'At under ₹45,000, Apple’s M1 MacBook Air continues to outperform similarly priced Windows laptops in battery longevity, trackpad quality, and Xcode builds.',
    category: 'Laptops',
    readTime: '5 min read',
    date: '1st Oct 2026',
    author: 'Hardware Desk',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'art-8',
    slug: 'how-to-wipe-phone-clean-before-selling',
    title: 'Complete Checklist: How to Factory Reset & Wipe Your Phone Before Selling',
    excerpt:
      'Step-by-step tutorial on deregistering banking UPI eSIMs, removing iCloud & Google FRP locks, and running a DoD compliant clean wipe.',
    category: 'Tips & Tricks',
    readTime: '3 min read',
    date: '28th Sep 2026',
    author: 'Security Team',
    imageUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function ArticlesPage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featured = ARTICLES[0];
  const trending = ARTICLES.slice(1, 5);

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCat === 'All' || art.category === selectedCat;
    const matchesQuery =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="bg-[#f7f9fa] min-h-screen text-gray-800 antialiased font-sans pb-20">
      {/* ========================================================= */}
      {/* 1. TOP HEADER & BREADCRUMB (Cashify TechByte Layout)       */}
      {/* ========================================================= */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#13b59b]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-semibold">TechByte</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          TechByte
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-4xl leading-relaxed">
          Welcome to Sellbar&apos;s articles section, where we continuously curate the best and most helpful content for you to navigate the smartphone and gadgets world easily. Primarily you will find the latest mobile news here updated as soon as possible, so you are always on track with what is going on in the smartphone world.
        </p>
      </div>

      {/* ========================================================= */}
      {/* 2. FEATURED HERO ARTICLE & 4 TRENDING STORIES             */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Big Hero Card on Left (7 cols) */}
          <div className="lg:col-span-7 bg-linear-to-br from-[#eb3d24] via-[#f05a28] to-[#ff7a45] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-lg flex flex-col justify-between group min-h-95">
            <div className="relative z-10 space-y-4 max-w-lg">
              <span className="inline-block bg-black/25 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-200">
                Featured Guide
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
                {featured.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>
            </div>

            <div className="relative z-10 pt-6 flex items-center justify-between">
              <div className="text-xs text-white/80 font-medium">
                {featured.date} • {featured.readTime}
              </div>
              <Link
                href={`/articles#${featured.slug}`}
                className="inline-flex items-center gap-1.5 bg-white text-[#eb3d24] font-bold text-xs px-5 py-2.5 rounded-xl shadow-md hover:bg-gray-50 transition"
              >
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Subtle floating device background preview */}
            <div className="absolute right-4 bottom-4 w-44 h-44 opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-500">
              <Smartphone className="w-full h-full text-white stroke-1" />
            </div>
          </div>

          {/* 4 Trending Articles on Right (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-gray-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Trending on Sellbar
              </span>
              <TrendingUp className="w-4 h-4 text-[#13b59b]" />
            </div>

            <div className="space-y-3.5">
              {trending.map((art) => (
                <div
                  key={art.id}
                  className="flex gap-3.5 items-center group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition"
                >
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                    <Image
                      src={art.imageUrl}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold text-gray-900 group-hover:text-[#13b59b] line-clamp-2 transition leading-snug">
                      {art.title}
                    </h3>
                    <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-2">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. CATEGORY FILTERS & SEARCH BAR                          */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`text-xs px-4 py-2 rounded-xl font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-[#13b59b] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech articles..."
              className="w-full bg-white pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13b59b]"
            />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. ARTICLES 3-COLUMN RESPONSIVE GRID                      */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={art.imageUrl}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{art.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#13b59b] transition line-clamp-2 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-500">By {art.author}</span>
                <span className="font-bold text-[#13b59b] flex items-center gap-1 group-hover:underline">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
