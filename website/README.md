# Sellbar.in - India's Trusted Re-Commerce & Refurbished Marketplace

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8)](https://tailwindcss.com/)
[![Playwright](https://img.shields.io/badge/Playwright-E2E%20Tested-45ba4b)](https://playwright.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-emerald)](#)

> **Brand Tagline**: *"Sell Smart. Buy Better."*  
> **Primary Domain**: https://Sellbar.in

Sellbar.in is a production-ready Indian electronics resale and certified refurbished products marketplace inspired by the functional journey of Cashify, built with completely original branding, layouts, copywriting, and a modern full-stack TypeScript architecture.

---

## 🛠️ Recommended Production Tech Stack

| Kaam (Function) | Recommended Tool | Official Website (Click to Open) | Kyon Chahiye (Purpose) |
| :--- | :--- | :--- | :--- |
| **Database** | **MongoDB Atlas** | [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas) | Scalable cloud document database for catalog and orders |
| **Database ODM** | **Mongoose** | [mongoosejs.com](https://mongoosejs.com/) | Strict schema validation, query building, model hooks |
| **Frontend + Backend** | **Next.js 16** | [nextjs.org](https://nextjs.org/) | Modern App Router, Server Actions, SSR & Static optimization |
| **Language** | **TypeScript** | [typescriptlang.org](https://www.typescriptlang.org/) | End-to-end type safety, autocompletion, and zero runtime surprises |
| **UI Design** | **Tailwind CSS v4** | [tailwindcss.com](https://tailwindcss.com/) | Modern CSS design tokens, responsive breakpoints, high performance |
| **UI Components** | **shadcn/ui** | [ui.shadcn.com](https://ui.shadcn.com/) | Accessible, reusable, customizable component primitives |
| **Authentication** | **Auth.js** | [authjs.dev](https://authjs.dev/) | Session management, OAuth, JWT, and role-based permissions |
| **Phone OTP** | **MSG91** | [msg91.com](https://msg91.com/) | Fast Indian SMS delivery, DLT templates, and 2FA login verification |
| **Product Images** | **Cloudinary** | [cloudinary.com](https://cloudinary.com/) | Automatic WebP/AVIF compression, transformations, inspection photos |
| **Payments** | **Razorpay** | [razorpay.com](https://razorpay.com/) | India's premier payment gateway: UPI, RuPay, Cards, NetBanking, EMI |
| **Shipping & Courier** | **Shiprocket** | [shiprocket.in](https://www.shiprocket.in/) | Courier aggregation (Delhivery, Bluedart), reverse pickups, live tracking |
| **Email** | **Resend** | [resend.com](https://resend.com/) | Fast transactional emails, order receipts, GST tax invoices |
| **Hosting** | **Hostinger** | [hostinger.com](https://www.hostinger.com/) | High-speed VPS & Node.js hosting with LiteSpeed and SSL |
| **Source Code** | **GitHub** | [github.com](https://github.com/) | Version control, CI/CD automated deployment workflows |
| **Error Monitoring** | **Sentry** | [sentry.io](https://sentry.io/) | Real-time production error catching, stack traces, and alerts |
| **Analytics** | **PostHog** | [posthog.com](https://posthog.com/) | Funnel conversion analytics, user heatmaps, buyback completion tracking |
| **Automated Testing**| **Playwright** | [playwright.dev](https://playwright.dev/) | Cross-browser automated regression testing on Chrome and Safari |

---

## 🌟 Key Features

### 1. Device Resale & Buyback Valuation (Customer Journey)
- **Multi-Device Support**: Smartphones, Laptops, Tablets, and Smartwatches.
- **Interactive Diagnostic Questionnaire**:
  - Powers On / Motherboard Boot check
  - Display Assessment (Flawless, Minor Hairline Scratches, Cracked Glass, Touch Digitizer Issues)
  - Body & Chassis Assessment (Flawless, Scratches, Corner Dents, Bent Frame)
  - Functional Defects (Front/Rear Cameras, Face ID/Fingerprint, Degraded Battery <80%, Speaker/Mic distortion, Charging Port)
  - Original Accessories (Box with matching IMEI, Fast Charger, Valid Purchase Bill)
- **Transparent Price Breakdown**: Returns line-item deductions, base resale values, and promotional bonus codes (`SELLSMART`, `SELLBARBONUS`).
- **Free Doorstep Pickup Scheduling**: Verified Indian 6-digit PIN code serviceability, date selection, time slot (Morning, Afternoon, Evening), and instant payout preferences (**UPI VPA, Bank IMPS, Sellbar Wallet with +5% bonus**).

### 2. Certified Refurbished Storefront
- **32-Point Quality Diagnostic Check**: Every device tested across battery health, display, motherboards, wireless, and sensors.
- **Rigorous 3-Tier Grading**:
  - **Superb (Flawless / Grade A+)**: Pristine condition, zero scratches, 100% battery capacity, 12-month comprehensive doorstep warranty.
  - **Like New (Grade A)**: Minor micro-scratches visible only under harsh light, 85%+ battery health, 6-month warranty.
  - **Smart Value (Grade B)**: Light cosmetic pocket wear, 100% tested functionality, maximum savings up to 50% vs MRP.
- **Rich Product Detail Pages**: Image gallery, PIN code delivery speed estimator, No-Cost EMI breakdown (`From ₹2,499/mo`), verified buyer reviews, and 7-day replacement guarantee.

### 3. Shopping Cart, Checkout & Indian Payments
- **Persistent Cart**: Client and server synchronized with instant quantity controls.
- **Coupon Engine**: Validates percentage and flat discounts (e.g. `SELLBAR500`, `FESTIVE10`).
- **Indian Address & PIN Code Auto-Fill**: Auto-resolves City and State for all Indian Postal zones (Delhi, Bengaluru, Mumbai, Hyderabad, Pune, Chennai, Kolkata, etc.).
- **Dual-Mode Payment Integration**:
  - Configurable for live **Razorpay** (UPI, RuPay, Visa, Mastercard, NetBanking).
  - Built-in **Sandbox Simulation Modal** for testing UPI QR code scanning, test cards (`4242...`), and Cash on Delivery.
- **GST Invoice**: 18% GST calculation with HSN codes, Sellbar GSTIN, and printable tax invoice format.

### 4. Operations & Admin Portal (`/admin`)
- **Executive Dashboard**: Real-time counters for Buyback GMV, Refurbished Store Revenue, Active Pickups, and Low-Stock SKUs.
- **Buyback Management**: View customer answers, assign technicians, update physical inspection findings, adjust quotes, and release instant payouts.
- **Inventory Management**: Add and publish new refurbished devices, adjust stock counts, and edit prices.
- **Customer Order Fulfillment**: Track shipments, assign courier partners, and manage delivery status.

### 5. Quick Role Switcher
- Floating top-bar switcher allowing developers and evaluators to seamlessly toggle between **Customer**, **Field Technician**, and **Admin** accounts with one click.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run automated test suite (28 assertions)
npm run test

# 3. Run Playwright End-to-End browser tests
npm run test:e2e

# 4. Start development server
npm run dev

# 5. Open in browser
http://localhost:3000
```

---

## 🌐 Deploying to Hostinger VPS

Sellbar.in is optimized for deployment on Hostinger VPS running Ubuntu with Node.js and PM2:

1. **SSH into Hostinger VPS**:
   ```bash
   ssh root@your_hostinger_vps_ip
   ```
2. **Clone and Install**:
   ```bash
   git clone https://github.com/your-username/sellbar-ecommerce.git /var/www/sellbar
   cd /var/www/sellbar/website
   npm install --production=false
   ```
3. **Configure Environment**:
   ```bash
   cp .env.example .env.local
   nano .env.local
   # Enter your MONGODB_URI, RAZORPAY_KEY_ID, MSG91_AUTH_KEY, etc.
   ```
4. **Build & Start with PM2**:
   ```bash
   npm run build
   pm2 start npm --name "sellbar" -- start
   pm2 startup
   pm2 save
   ```
5. **Nginx Reverse Proxy**:
   Point Nginx `proxy_pass http://localhost:3000;` to your custom domain `sellbar.in` and enable SSL via Let's Encrypt / Certbot.
