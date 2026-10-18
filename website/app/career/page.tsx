'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Briefcase,
  GraduationCap,
  Coins,
  HeartPulse,
  Clock,
  Trophy,
  PartyPopper,
  Leaf,
  ArrowRight,
  MapPin,
  Building,
  Sparkles,
  Users,
  Target,
  Zap,
  Lightbulb,
  Heart,
  CheckCircle2,
  Search,
} from 'lucide-react';

const DNA_PILLARS = [
  {
    letter: 'C',
    name: 'Customer Delight',
    desc: 'We put customers first in every line of code, every diagnostic check, and every doorstep interaction.',
    icon: Heart,
    color: 'from-teal-500 to-emerald-600',
  },
  {
    letter: 'O',
    name: 'Ownership',
    desc: 'We act like owners with extreme accountability, taking full responsibility for outcomes and quality.',
    icon: Target,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    letter: 'H',
    name: 'Hustle',
    desc: 'We move fast, adapt quickly to market demands, and solve hard problems with relentless persistence.',
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
  },
  {
    letter: 'I',
    name: 'Innovation',
    desc: 'We invent simpler, smarter ways to evaluate devices, eliminate waste, and build circular commerce.',
    icon: Lightbulb,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    letter: 'T',
    name: 'Teamwork',
    desc: 'We win together as one cohesive unit, celebrating shared victories and lifting each other up.',
    icon: Users,
    color: 'from-pink-500 to-rose-600',
  },
];

const DEPARTMENTS = [
  'All Departments',
  'Engineering & Tech',
  'Field Operations',
  'Quality & Diagnostics',
  'Retail Experience',
  'Marketing & Growth',
  'Support & Customer Delight',
];

const OPEN_POSITIONS = [
  {
    id: 'job-1',
    title: 'Senior Full Stack Engineer (Next.js & Node.js)',
    department: 'Engineering & Tech',
    location: 'Gurgaon, Haryana (Hybrid)',
    type: 'Full-time',
    description: 'Lead architecture for our instant algorithmic valuation engine and inventory pipeline.',
    experience: '3-6 Years',
  },
  {
    id: 'job-2',
    title: 'Hardware Diagnostics Specialist (Mobile & Laptop)',
    department: 'Quality & Diagnostics',
    location: 'Bengaluru, Karnataka (On-site)',
    type: 'Full-time',
    description: 'Perform 32-point hardware grading, battery profiling, and component testing for renewed electronics.',
    experience: '1-3 Years',
  },
  {
    id: 'job-3',
    title: 'Operations & Logistics Area Lead',
    department: 'Field Operations',
    location: 'Mumbai / Pune (Field & Hub)',
    type: 'Full-time',
    description: 'Scale same-day doorstep inspection, UPI cash payouts, and reverse supply chain logistics.',
    experience: '2-5 Years',
  },
  {
    id: 'job-4',
    title: 'Store Experience Manager',
    department: 'Retail Experience',
    location: 'Delhi NCR / Noida (On-site)',
    type: 'Full-time',
    description: 'Manage retail operations, customer walk-in buybacks, and refurbished flagship demo showcases.',
    experience: '2-4 Years',
  },
  {
    id: 'job-5',
    title: 'Growth & Performance Marketing Specialist',
    department: 'Marketing & Growth',
    location: 'Gurgaon / Remote',
    type: 'Full-time',
    description: 'Drive customer acquisition and buyback awareness across digital search, affiliate and re-commerce channels.',
    experience: '3-5 Years',
  },
  {
    id: 'job-6',
    title: 'Customer Success & Dispute Resolution Associate',
    department: 'Support & Customer Delight',
    location: 'Gurgaon / Hybrid',
    type: 'Full-time',
    description: 'Deliver 5-star support, transparent price quote clarifications, and doorstep warranty resolutions.',
    experience: '1-3 Years',
  },
];

const BENEFITS = [
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    points: [
      'Access to cutting-edge training programs and certifications.',
      'Leadership Development Programs & executive mentoring.',
    ],
    color: 'text-[#13b59b] bg-[#13b59b]/10',
  },
  {
    icon: Coins,
    title: 'Financial Perks',
    points: [
      'Performance-based Incentives & quarterly bonuses.',
      'Retirement benefits like provident fund and gratuity.',
    ],
    color: 'text-amber-600 bg-amber-500/10',
  },
  {
    icon: HeartPulse,
    title: 'Health & Well-Being',
    points: [
      'Health & Life insurance plans: GMC, GPA & GTL.',
      'Free or discounted health checkups and wellness programs.',
    ],
    color: 'text-rose-600 bg-rose-500/10',
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    points: [
      'Flexible working hours & hybrid schedule for tech teams.',
      'Well-structured leave policy including wellness and parental support.',
    ],
    color: 'text-cyan-600 bg-cyan-500/10',
  },
  {
    icon: Trophy,
    title: 'Recognition and Rewards',
    points: [
      'Employee of the Month & annual COHIT awards.',
      'Appreciation gift vouchers for exceptional contributions.',
      'Milestones recognition & long-service sabbaticals.',
    ],
    color: 'text-purple-600 bg-purple-500/10',
  },
  {
    icon: PartyPopper,
    title: 'Fun at Work',
    points: [
      'Talent showcases & sports tournaments pan-India.',
      'Celebrations for festivals and special company milestones.',
      'Quarterly team parties to recharge and unwind.',
    ],
    color: 'text-pink-600 bg-pink-500/10',
  },
  {
    icon: Leaf,
    title: 'Sustainability and Purpose',
    points: [
      'Volunteer programs to give back to the community.',
      'Initiatives for a greener planet, including e-waste recycling drives.',
    ],
    color: 'text-emerald-600 bg-emerald-500/10',
  },
];

export default function CareerPage() {
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [searchRole, setSearchRole] = useState('');
  const [activeApplyModal, setActiveApplyModal] = useState<any>(null);
  const [applyFormSent, setApplyFormSent] = useState(false);

  const filteredJobs = OPEN_POSITIONS.filter((j) => {
    const matchesDept = selectedDept === 'All Departments' || j.department === selectedDept;
    const matchesQuery =
      j.title.toLowerCase().includes(searchRole.toLowerCase()) ||
      j.location.toLowerCase().includes(searchRole.toLowerCase()) ||
      j.department.toLowerCase().includes(searchRole.toLowerCase());
    return matchesDept && matchesQuery;
  });

  return (
    <div className="bg-white min-h-screen text-gray-800 antialiased font-sans">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Cashify Exact: Create a Better Future)    */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Create a Better <br />
              <span className="text-[#42c8b7]">Future</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed">
              Sellbar is the launchpad for all things sustainable whether it is a greener economy, the future of our planet, or your career.
            </p>

            <div className="pt-2">
              <a
                href="#openings"
                className="inline-flex items-center justify-center bg-[#42c8b7] hover:bg-[#34b5a4] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg active:scale-98"
              >
                Join Us
              </a>
            </div>
          </div>

          {/* Right Visual Puzzle Art Column (With doodle line-art) */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Doodle icon: Clock */}
            <div className="absolute -left-6 top-1/4 w-12 h-12 text-gray-400 opacity-60 hidden sm:block pointer-events-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 15" />
              </svg>
            </div>

            {/* Doodle icon: Rocket */}
            <div className="absolute -right-4 -top-4 w-12 h-12 text-gray-400 opacity-60 hidden sm:block pointer-events-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 9v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>

            {/* Doodle icon: Binoculars */}
            <div className="absolute right-8 -bottom-6 w-12 h-12 text-gray-400 opacity-60 hidden sm:block pointer-events-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="7" cy="14" r="4" />
                <circle cx="17" cy="14" r="4" />
                <path d="M11 14h2" />
                <path d="M7 6l2 4" />
                <path d="M17 6l-2 4" />
              </svg>
            </div>

            {/* Main Rounded Jigsaw Image Container */}
            <div className="relative w-full max-w-lg aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Sellbar Team Collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center justify-between">
                <span>Building India&apos;s #1 Circular Re-Commerce Engine</span>
                <span className="text-[#42c8b7] font-bold">1,200+ Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DIVE INTO OUR DNA (Cashify Exact)                       */}
      {/* ========================================================= */}
      <section className="py-16 bg-[#fafbfc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Dive into Our DNA
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-[#42c8b7] uppercase tracking-wider">
                CUSTOMER DELIGHT
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-500 mt-2 font-medium">
              is the central pillar of our organizational ethos
            </p>
          </div>

          {/* COHIT 5 Pillars Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {DNA_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${pillar.color} text-white flex items-center justify-center font-black text-xl mb-4 shadow-sm`}
                    >
                      {pillar.letter}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {pillar.name}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#42c8b7] font-semibold">
                    <span>COHIT Pillar {idx + 1}</span>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. EXPLORE OPENINGS (Job Board with Filters)               */}
      {/* ========================================================= */}
      <section id="openings" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold text-[#42c8b7] uppercase tracking-wider mb-2">
            JOIN OUR TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Explore Openings
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Find the team where you can make the biggest impact on sustainable electronics.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-[#f7f9fa] p-4 rounded-2xl border border-gray-200 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchRole}
                onChange={(e) => setSearchRole(e.target.value)}
                placeholder="Search job title, city, or skill..."
                className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#42c8b7]"
              />
            </div>
            <div className="text-xs font-bold text-gray-600">
              <span className="text-[#42c8b7] font-black text-sm">{filteredJobs.length}</span> Jobs Available
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {DEPARTMENTS.map((dept, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition ${
                  selectedDept === dept
                    ? 'bg-[#42c8b7] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings Cards */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#42c8b7] hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="inline-block text-[11px] font-bold text-[#42c8b7] uppercase tracking-wider">
                    {job.department}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <button
                    onClick={() => {
                      setActiveApplyModal(job);
                      setApplyFormSent(false);
                    }}
                    className="inline-flex items-center gap-1.5 bg-[#42c8b7] hover:bg-[#34b5a4] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-xs transition"
                  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <p className="text-sm font-semibold text-gray-600">No active job openings matching your search.</p>
            <p className="text-xs text-gray-400 mt-1">Try resetting the department filter or search query.</p>
          </div>
        )}
      </section>

      {/* ========================================================= */}
      {/* 4. EMPLOYEE BENEFITS SECTION                              */}
      {/* ========================================================= */}
      <section className="py-16 bg-[#fafbfc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#42c8b7] tracking-wider uppercase mb-1 block">
              PERKS &amp; WELLBEING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Employee Benefits
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              We look after our people so they can do their best work without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:shadow-md transition space-y-3"
                >
                  <div className={`w-11 h-11 rounded-xl ${b.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{b.title}</h3>
                  <ul className="space-y-1.5 text-xs text-gray-600 leading-relaxed">
                    {b.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-[#42c8b7] mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. LIKE IT? LIVE IT. MARQUEE STRIP (Cashify Exact)        */}
      {/* ========================================================= */}
      <section className="bg-[#111827] text-white py-5 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap text-xs sm:text-sm font-black tracking-widest text-[#42c8b7] uppercase animate-pulse justify-center">
          <span>LIKE IT? LIVE IT.</span>
          <span>•</span>
          <span>LIKE IT? LIVE IT.</span>
          <span>•</span>
          <span>LIKE IT? LIVE IT.</span>
          <span>•</span>
          <span>LIKE IT? LIVE IT.</span>
          <span>•</span>
          <span>LIKE IT? LIVE IT.</span>
          <span>•</span>
          <span>LIKE IT? LIVE IT.</span>
          <span>•</span>
          <span>LIKE IT? LIVE IT.</span>
        </div>
      </section>

      {/* Interactive Apply Modal */}
      {activeApplyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveApplyModal(null)}
              className="absolute right-5 top-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>

            {applyFormSent ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Application Submitted!</h3>
                <p className="text-xs text-gray-600">
                  Thank you for applying for <strong>{activeApplyModal.title}</strong>. Our talent team will review your profile and reach out within 48 hours.
                </p>
                <button
                  onClick={() => setActiveApplyModal(null)}
                  className="mt-4 bg-[#42c8b7] text-white text-xs font-bold px-6 py-2.5 rounded-xl"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="text-xs font-bold text-[#42c8b7] uppercase tracking-wider mb-1">
                  Apply for Role
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {activeApplyModal.title}
                </h3>
                <p className="text-xs text-gray-500 mb-5">
                  {activeApplyModal.department} • {activeApplyModal.location}
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setApplyFormSent(true);
                  }}
                  className="space-y-3.5 text-xs"
                >
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42c8b7]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42c8b7]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42c8b7]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">LinkedIn Profile or Portfolio URL</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42c8b7]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Why do you want to join Sellbar?</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us a little bit about yourself and your experience..."
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42c8b7]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveApplyModal(null)}
                      className="px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#42c8b7] hover:bg-[#34b5a4] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-xs transition"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
