import React from 'react';
import Link from 'next/link';
import {
  Cookie,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sliders,
  Settings,
  HelpCircle,
} from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy | Sellbar.in',
  description:
    'Understand how Sellbar uses cookies and local storage technologies to safeguard sessions, remember pincode preferences, and improve re-commerce services.',
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-gray-800 antialiased">
      {/* Header Banner */}
      <section className="bg-linear-to-r from-[#13b59b] via-[#0ea38a] to-[#0b826e] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase">
            <Cookie className="w-3.5 h-3.5" />
            Transparency &amp; Privacy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            Read how Sellbar uses cookie technology to securely authenticate sessions, retain shopping carts, and personalize your re-commerce experience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              1. What Are Cookies?
            </h2>
            <p>
              A cookie is a small alphanumeric text file sent to and stored on your browser, smartphone or web-enabled device when you access Sellbar.in. Cookies are vital because they enable our servers to recognize your active browser session, maintain items in your refurbished electronics shopping cart, and ensure secure OTP login authentication.
            </p>
            <p>
              <strong>Session Cookies</strong> are temporary and deleted automatically when you close your browser. <strong>Persistent Cookies</strong> remain stored on your device across visits (for example, to remember your preferred delivery city or active buyback valuation draft).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              2. Categories of Cookies We Use
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-gray-900 text-xs sm:text-sm">
                  <Lock className="w-4 h-4 text-[#13b59b]" />
                  A. Strictly Essential Cookies (Cannot be Disabled)
                </div>
                <p className="text-xs text-gray-600">
                  Essential for the core operation of Sellbar.in. These include session identifiers, CSRF protection tokens, OTP authentication cookies, and encrypted checkout state. Without these, the marketplace cannot function securely.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-gray-900 text-xs sm:text-sm">
                  <Sliders className="w-4 h-4 text-cyan-600" />
                  B. Functionality &amp; Preference Cookies
                </div>
                <p className="text-xs text-gray-600">
                  Allow us to remember your chosen delivery city (e.g. Gurgaon, Bengaluru, Mumbai), recently viewed phone models, and doorstep appointment preferences so you don&apos;t have to re-enter them on every visit.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-gray-900 text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  C. Analytics &amp; Performance Cookies
                </div>
                <p className="text-xs text-gray-600">
                  Aggregate statistical telemetry that helps us analyze traffic patterns, identify device valuation drop-off friction, and optimize page load speeds across 2G/3G/4G/5G Indian mobile connections. All analytics data is anonymized.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              3. Data Security &amp; No Plaintext Personal Information
            </h2>
            <p>
              Our cookies <strong>never store plaintext personal identifiers</strong> such as your banking passwords, Aadhaar numbers, full credit card details, or unencrypted emails. Any authentication tokens stored are cryptographically hashed and protected with <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[11px] font-mono">HttpOnly</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[11px] font-mono">Secure</code> browser flags.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              4. How to Manage Cookies in Your Browser
            </h2>
            <p>
              You can control, block, or delete cookies at any time through your browser settings:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-gray-600 text-xs">
              <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Third-party cookies.</li>
              <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data.</li>
              <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data.</li>
              <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage cookies.</li>
            </ul>
            <p className="text-xs text-gray-500 pt-1">
              Please note: if you block strictly essential cookies, you may not be able to complete doorstep buybacks, access customer orders, or complete payment checkouts.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <span>Last Updated: October 2026</span>
            <Link href="/privacy-policy" className="text-[#13b59b] font-semibold hover:underline">
              Read Complete Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
