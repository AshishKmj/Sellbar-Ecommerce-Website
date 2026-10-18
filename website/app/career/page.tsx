'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Search,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

const DNA_ITEMS = [
  {
    letter: 'T',
    prefix: 'T',
    suffix: 'HINKING BIG',
    description: 'is in our blood which is why we want like-minded people',
    detail: 'We believe bold ideas and massive vision drive transformation in the circular tech ecosystem.',
  },
  {
    letter: 'C',
    prefix: 'C',
    suffix: 'USTOMER DELIGHT',
    description: 'is our obsession and guiding beacon across every doorstep and store experience',
    detail: 'From instant doorstep valuation to transparent payouts, customer happiness is non-negotiable.',
  },
  {
    letter: 'O',
    prefix: 'O',
    suffix: 'WNERSHIP MINDSET',
    description: 'empowers every team member to lead with accountability and pride',
    detail: 'We take end-to-end responsibility for our deliverables, learning from mistakes and celebrating wins together.',
  },
  {
    letter: 'H',
    prefix: 'H',
    suffix: 'USTLE & AGILITY',
    description: 'keeps us moving at lightning speed in India’s fastest-growing re-commerce market',
    detail: 'We solve ambiguous, complex challenges with grit, speed, and creative resourcefulness.',
  },
  {
    letter: 'I',
    prefix: 'I',
    suffix: 'NNOVATION FIRST',
    description: 'fuels our proprietary AI diagnostic algorithms and circular sustainability systems',
    detail: 'We constantly challenge traditional retail norms to make renewed electronics trustworthy and accessible.',
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
    title: 'Learning & Development',
    img: 'https://s3ng.cashify.in/builder/d46040036a7042909da77d2bffad4bf8.webp?w=100',
    points: [
      'Access to cutting-edge training programs and certifications.',
      'Leadership Development Programs.',
    ],
  },
  {
    title: 'Financial Perks',
    img: 'https://s3ng.cashify.in/builder/fe26f4ffc4bf418484c709ce57c2196a.webp?w=100',
    points: [
      'Performance based Incentives.',
      'Retirement benefits like provident fund and gratuity.',
    ],
  },
  {
    title: 'Health & Well-Being',
    img: 'https://s3ng.cashify.in/builder/413f91cadabb48b899ded9c78fffc8ec.webp?w=100',
    points: [
      'Health & Life insurance plans: GMC, GPA & GTL.',
      'Free or discounted health checkups and wellness programs.',
    ],
  },
  {
    title: 'Work-Life Balance',
    img: 'https://s3ng.cashify.in/builder/2938a788c44a45acadb6589edbceab99.webp?w=100',
    points: [
      'Flexible working hours.',
      'Well structured leave policy.',
    ],
  },
  {
    title: 'Recognition and Rewards',
    img: 'https://s3ng.cashify.in/builder/71b853b52db147ae8ec46c1958afa153.webp?w=100',
    points: [
      'Employee of the Month & annual COHIT awards.',
      'Appreciation gift vouchers for exceptional contributions.',
      'Milestones recognition.',
    ],
  },
  {
    title: 'Fun at Work',
    img: 'https://s3ng.cashify.in/builder/58de67fbf29e4dfab2b57c8ccdd88a4b.webp?w=100',
    points: [
      'Talent showcases & sports tournaments.',
      'Celebrations for festivals and special occasions.',
      'Quarterly team parties to recharge and unwind.',
    ],
  },
  {
    title: 'Sustainability and Purpose',
    img: 'https://s3ng.cashify.in/builder/039b5ec6e22547aab00e75651bf2d58d.webp?w=100',
    points: [
      'Volunteer programs to give back to the community.',
      'Initiatives for a greener planet, including recycling drives.',
    ],
  },
];

export default function CareerPage() {
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [searchRole, setSearchRole] = useState('');
  const [activeDnaIdx, setActiveDnaIdx] = useState(0);
  const [activeApplyModal, setActiveApplyModal] = useState<any>(null);
  const [applyFormSent, setApplyFormSent] = useState(false);

  const currentDna = DNA_ITEMS[activeDnaIdx];

  const handlePrevDna = () => {
    setActiveDnaIdx((prev) => (prev === 0 ? DNA_ITEMS.length - 1 : prev - 1));
  };

  const handleNextDna = () => {
    setActiveDnaIdx((prev) => (prev === DNA_ITEMS.length - 1 ? 0 : prev + 1));
  };

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
      {/* 1. HERO BANNER (Exact Cashify Layout: Create a Better Career) */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-8 sm:gap-12">
          {/* Left Text */}
          <div className="w-full sm:w-1/2 flex flex-col justify-center px-1 sm:px-0">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Create a Better <br />
              <span className="text-[#42c8b7]">Career</span>
            </h1>

            <div className="pt-3 sm:py-4">
              <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
                Sellbar is the launchpad for all things sustainable whether it is a greener economy, the future of our planet, or your career.
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <a
                href="#career-job-listings"
                className="inline-flex items-center justify-center rounded-md bg-[#42c8b7] hover:bg-[#38b5a5] text-white font-medium text-sm sm:text-base px-6 sm:px-8 py-3 shadow-sm transition-all duration-200 active:scale-98"
              >
                Join Us
              </a>
            </div>
          </div>

          {/* Right Banner Image */}
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://s3ng.cashify.in/builder/279704214f0f43a18ff79c8441f01fb0.png?w=576"
              alt="Career at Sellbar"
              className="max-w-full h-auto object-contain w-80 sm:w-full drop-shadow-sm"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DIVE INTO OUR DNA (Interactive COHIT Showcase)          */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-[#fafbfc] border-y border-gray-100 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-gray-900 mb-8 sm:mb-12">
            Dive into Our DNA
          </h2>

          {/* Desktop Visual Interactive Wheel/Banner */}
          <div className="hidden sm:block relative bg-[#133038] rounded-3xl overflow-hidden shadow-xl text-white p-8 sm:p-14 min-h-[480px]">
            {/* Background Texture & Circles */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#42c8b7_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-[#42c8b7]/20 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-12 gap-8 items-center min-h-[380px]">
              {/* Left Column: Active Value Content */}
              <div className="col-span-7 space-y-4 pr-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#42c8b7]/20 text-[#42c8b7] text-xs font-bold uppercase tracking-wider">
                  COHIT Value {activeDnaIdx + 1} of {DNA_ITEMS.length}
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-6xl font-black text-[#42c8b7]">
                      {currentDna.prefix}
                    </span>
                    <span className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                      {currentDna.suffix.slice(1)}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 leading-snug">
                    {currentDna.description}
                  </h3>
                </div>

                <p className="text-sm text-gray-300 max-w-lg leading-relaxed pt-2">
                  {currentDna.detail}
                </p>

                {/* Arrow Controls */}
                <div className="pt-6 flex items-center gap-3">
                  <button
                    onClick={handlePrevDna}
                    aria-label="Previous DNA Pillar"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition border border-white/10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-semibold text-gray-400 px-2">
                    {activeDnaIdx + 1} / {DNA_ITEMS.length}
                  </span>
                  <button
                    onClick={handleNextDna}
                    aria-label="Next DNA Pillar"
                    className="w-11 h-11 rounded-full bg-[#42c8b7] hover:bg-[#38b5a5] active:scale-95 text-white flex items-center justify-center transition shadow-md"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Column: COHIT Interactive Pills */}
              <div className="col-span-5 flex flex-col items-center justify-center gap-3">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Click to explore pillars:
                </div>
                <div className="flex flex-wrap justify-center gap-3 max-w-xs">
                  {DNA_ITEMS.map((item, idx) => {
                    const isActive = activeDnaIdx === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveDnaIdx(idx)}
                        className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 font-black text-xl shadow-md ${
                          isActive
                            ? 'bg-[#42c8b7] text-white scale-110 ring-4 ring-[#42c8b7]/30'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10'
                        }`}
                      >
                        <span>{item.letter}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-400">
                    <strong>COHIT</strong>: The core DNA driving 1,200+ team members pan-India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile DNA View */}
          <div className="sm:hidden bg-[#133038] rounded-2xl p-6 text-white shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#42c8b7] uppercase tracking-wider">
                Our DNA ({activeDnaIdx + 1}/{DNA_ITEMS.length})
              </span>
              <div className="flex items-center gap-1">
                {DNA_ITEMS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDnaIdx(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition ${
                      activeDnaIdx === idx ? 'bg-[#42c8b7] text-white' : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {item.letter}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="text-2xl font-black text-[#42c8b7]">
                {currentDna.prefix}
                <span className="text-white">{currentDna.suffix.slice(1)}</span>
              </div>
              <p className="text-sm font-medium text-gray-200 mt-1">
                {currentDna.description}
              </p>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                {currentDna.detail}
              </p>
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-white/10">
              <button
                onClick={handlePrevDna}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-gray-400">
                Pillar {activeDnaIdx + 1}
              </span>
              <button
                onClick={handleNextDna}
                className="w-9 h-9 rounded-full bg-[#42c8b7] flex items-center justify-center text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. EXPLORE OPENINGS (Job Board with Filters)               */}
      {/* ========================================================= */}
      <section id="career-job-listings" className="py-12 sm:py-20 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Openings
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Join the team transforming re-commerce and circular electronics in India.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#f8fafc] p-4 rounded-2xl border border-gray-200 mb-8 space-y-3.5">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchRole}
                onChange={(e) => setSearchRole(e.target.value)}
                placeholder="Search job title, city, or skill..."
                className="w-full bg-white pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#42c8b7]"
              />
            </div>
            <div className="text-xs font-bold text-gray-600">
              <span className="text-[#42c8b7] font-black text-sm">{filteredJobs.length}</span> Jobs Available
            </div>
          </div>

          {/* Department Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {DEPARTMENTS.map((dept, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition ${
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

        {/* Job Cards */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-3.5">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#42c8b7] hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <span className="inline-block text-[11px] font-bold text-[#42c8b7] uppercase tracking-wider">
                    {job.department}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{job.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1">
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
                    className="inline-flex items-center gap-1.5 bg-[#42c8b7] hover:bg-[#38b5a5] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs transition active:scale-95"
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
      {/* 4. EMPLOYEE BENEFITS SECTION (Exact 7 Cards & Icons)       */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Employee Benefits
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              We care for our employees so they can focus on delivering exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-14 gap-x-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex flex-row items-start sm:items-center">
                {/* Benefit Icon Image */}
                <div className="shrink-0 flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-2xl shadow-lg bg-white border border-gray-100 p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={benefit.img}
                    alt={benefit.title}
                    className="max-w-full max-h-full object-contain h-14 w-14 sm:h-20 sm:w-20"
                    loading="lazy"
                  />
                </div>

                {/* Benefit Copy */}
                <div className="ms-4 sm:ms-7 flex flex-col justify-center">
                  <h3 className="text-base sm:text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-xs sm:text-sm text-gray-500 font-normal">
                    {benefit.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. TEAM PHOTO MOSAIC (Exact 5 Cashify Culture Photos)     */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-20 bg-[#fafbfc] border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#42c8b7] uppercase tracking-wider mb-1 block">
              LIFE AT SELLBAR
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Work Hard, Celebrate Harder
            </h2>
          </div>

          <div className="flex flex-row gap-3 sm:gap-6 w-full items-stretch">
            {/* Image 0 (Left 40%) */}
            <div className="w-2/5 rounded-2xl overflow-hidden shadow-sm bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://s3ng.cashify.in/builder/0ddfd34a53bd498a9425b421342b0a8d.png?dpr=1.0&q=70&w=700"
                alt="Sellbar Culture 1"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Middle 2x2 column (Middle 40%) */}
            <div className="w-2/5 flex flex-col gap-3 sm:gap-6">
              <div className="flex flex-row gap-3 sm:gap-6 h-1/2">
                <div className="w-1/2 rounded-2xl overflow-hidden shadow-sm bg-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://s3ng.cashify.in/builder/3cd943022bb94acdad4c30b315a55f82.png?dpr=1.0&q=70&w=700"
                    alt="Sellbar Culture 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 rounded-2xl overflow-hidden shadow-sm bg-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://s3ng.cashify.in/builder/37fb8ed16199428a9342e724c1eb6e7a.png?dpr=1.0&q=70&w=700"
                    alt="Sellbar Culture 3"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="h-1/2 rounded-2xl overflow-hidden shadow-sm bg-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://s3ng.cashify.in/builder/7c040e19d07e41e2a6fa79ec888e3118.png?dpr=1.0&q=70&w=700"
                  alt="Sellbar Culture 4"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Image 4 (Right 20%) */}
            <div className="w-1/5 rounded-2xl overflow-hidden shadow-sm bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://s3ng.cashify.in/builder/b2a24dfb1f834a12bce3552a39cffb5b.png?dpr=1.0&q=70&w=360"
                alt="Sellbar Culture 5"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. MARQUEE STRIP: LIKE IT? LIVE IT.                       */}
      {/* ========================================================= */}
      <section className="bg-black text-white py-6 overflow-hidden select-none">
        <div className="whitespace-nowrap flex gap-6 text-3xl sm:text-6xl font-black uppercase tracking-wider text-[#42c8b7] animate-pulse justify-center">
          <span>LIKE IT? LIVE IT.</span>
          <span className="text-white/40">•</span>
          <span>LIKE IT? LIVE IT.</span>
          <span className="text-white/40">•</span>
          <span>LIKE IT? LIVE IT.</span>
          <span className="text-white/40">•</span>
          <span>LIKE IT? LIVE IT.</span>
          <span className="text-white/40">•</span>
          <span>LIKE IT? LIVE IT.</span>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. INTERACTIVE APPLY MODAL                                 */}
      {/* ========================================================= */}
      {activeApplyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveApplyModal(null)}
              className="absolute right-5 top-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
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
                    <label className="block font-semibold text-gray-700 mb-1">LinkedIn Profile or Resume Link</label>
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
                      className="bg-[#42c8b7] hover:bg-[#38b5a5] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-xs transition active:scale-95"
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
