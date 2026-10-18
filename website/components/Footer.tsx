'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f7f9fa] text-[#555555] border-t border-gray-200 text-xs sm:text-[13px] mt-12 antialiased">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          
          {/* Column 1: Brand Logo & Social Icons */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-9 h-9 rounded-full bg-[#13b59b] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
                <svg
                  className="w-5 h-5 text-white stroke-[2.8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-[#13b59b]">
                SELLBAR
              </span>
            </Link>

            {/* Follow Us On */}
            <div className="pt-2">
              <p className="text-xs font-medium text-[#4b5563] mb-3">
                Follow us on
              </p>
              
              {/* Circular Social Icons */}
              <div className="flex items-center gap-2.5">
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full bg-[#4f5660] hover:bg-[#13b59b] text-white flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-[#4f5660] hover:bg-[#13b59b] text-white flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-[#4f5660] hover:bg-[#13b59b] text-white flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-[#4f5660] hover:bg-[#13b59b] text-white flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#222222] mb-3.5">
              Services
            </h4>
            <ul className="space-y-2 text-[#555555]">
              <li>
                <Link href="/sell-old-mobile-phone" className="hover:text-[#13b59b] transition-colors">
                  Sell Phone
                </Link>
              </li>
              <li>
                <Link href="/sell-old-television" className="hover:text-[#13b59b] transition-colors">
                  Sell Television
                </Link>
              </li>
              <li>
                <Link href="/sell-old-smart-watch" className="hover:text-[#13b59b] transition-colors">
                  Sell Smart Watch
                </Link>
              </li>
              <li>
                <Link href="/sell-old-smart-speaker" className="hover:text-[#13b59b] transition-colors">
                  Sell Smart Speakers
                </Link>
              </li>
              <li>
                <Link href="/sell-old-dslr-camera" className="hover:text-[#13b59b] transition-colors">
                  Sell DSLR Camera
                </Link>
              </li>
              <li>
                <Link href="/sell-old-earbuds" className="hover:text-[#13b59b] transition-colors">
                  Sell Earbuds
                </Link>
              </li>
              <li>
                <Link href="/repair" className="hover:text-[#13b59b] transition-colors">
                  Repair Phone
                </Link>
              </li>
              <li>
                <Link href="/buy-refurbished-gadgets" className="hover:text-[#13b59b] transition-colors">
                  Buy Gadgets
                </Link>
              </li>
              <li>
                <Link href="/recycle-old-mobile-phone" className="hover:text-[#13b59b] transition-colors">
                  Recycle Phone
                </Link>
              </li>
              <li>
                <Link href="/find-new-phone" className="hover:text-[#13b59b] transition-colors">
                  Find New Phone
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="hover:text-[#13b59b] transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-[#222222] mb-3.5">
              Company
            </h4>
            <ul className="space-y-2 text-[#555555]">
              <li>
                <Link href="/about-us" className="hover:text-[#13b59b] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#13b59b] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-[#13b59b] transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/press-releases" className="hover:text-[#13b59b] transition-colors">
                  Press Releases
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="hover:text-[#13b59b] transition-colors">
                  Become Sellbar Partner
                </Link>
              </li>
              <li>
                <Link href="/supersale" className="hover:text-[#13b59b] transition-colors">
                  Become Supersale Partner
                </Link>
              </li>
              <li>
                <Link href="/corporate-information" className="hover:text-[#13b59b] transition-colors">
                  Corporate Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Sell Device */}
          <div>
            <h4 className="text-sm font-semibold text-[#222222] mb-3.5">
              Sell Device
            </h4>
            <ul className="space-y-2 text-[#555555]">
              <li>
                <Link href="/sell-old-mobile-phone" className="hover:text-[#13b59b] transition-colors">
                  Mobile Phone
                </Link>
              </li>
              <li>
                <Link href="/sell-old-laptop" className="hover:text-[#13b59b] transition-colors">
                  Laptop
                </Link>
              </li>
              <li>
                <Link href="/sell-old-tablet" className="hover:text-[#13b59b] transition-colors">
                  Tablet
                </Link>
              </li>
              <li>
                <Link href="/sell-old-imac" className="hover:text-[#13b59b] transition-colors">
                  iMac
                </Link>
              </li>
              <li>
                <Link href="/sell-old-gaming-consoles" className="hover:text-[#13b59b] transition-colors">
                  Gaming Consoles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Help & Support */}
          <div>
            <h4 className="text-sm font-semibold text-[#222222] mb-3.5">
              Help &amp; Support
            </h4>
            <ul className="space-y-2 text-[#555555]">
              <li>
                <Link href="/faq/category/buyback" className="hover:text-[#13b59b] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#13b59b] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/warranty-policy" className="hover:text-[#13b59b] transition-colors">
                  Warranty Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-[#13b59b] transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: More Info & Chat Widget */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold text-[#222222] mb-3.5">
                More Info
              </h4>
              <ul className="space-y-2 text-[#555555]">
                <li>
                  <Link href="/terms-conditions" className="hover:text-[#13b59b] transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#13b59b] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use" className="hover:text-[#13b59b] transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/e-waste-policy" className="hover:text-[#13b59b] transition-colors">
                    E-Waste Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="hover:text-[#13b59b] transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/buy-refurbished-mobile-phones/what-is-refurbished-mobile-phones" className="hover:text-[#13b59b] transition-colors">
                    What is Refurbished
                  </Link>
                </li>
                <li>
                  <Link href="/lp/ccu" className="hover:text-[#13b59b] transition-colors">
                    Sellbar Comedy Universe
                  </Link>
                </li>
              </ul>
            </div>

            {/* Chat with Us Button / Card */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#38b2ac] hover:bg-[#319795] text-white px-4 py-2.5 rounded-xl shadow-xs transition-all duration-200 hover:shadow-md group w-full sm:w-auto"
              >
                {/* Chat bubble icon */}
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4.5 h-4.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">
                    Chat with Us
                  </div>
                  <div className="text-[11px] text-white/90 leading-tight mt-0.5">
                    Got questions? Just ask.
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-gray-200 bg-[#f1f3f5] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#718096]">
          <div>
            © {new Date().getFullYear()} Sellbar Technologies India Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>100% Safe Payments</span>
            <span>•</span>
            <span>Free Doorstep Pickup</span>
            <span>•</span>
            <span>Verified Refurbished Tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
