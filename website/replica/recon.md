# Cashify -> Sellbar Replica Recon Map

Reconnaissance and inventory of all Cashify footer flows and pages for the Sellbar clone.

## 1. Project Scope & Architecture

- **Target App**: Cashify.in (India's leading Re-Commerce and Refurbished Electronics platform)
- **Clone App**: Sellbar.in
- **Platform**: Next.js App Router (React 19, Tailwind CSS v4, TypeScript, Lucide Icons)
- **Branding**: Sellbar (Signature Teal `#13b59b`, Clean Modern Tech aesthetic)
- **Local Dev Server**: `http://localhost:3000` (Active)

---

## 2. Screen Inventory (Footer Scope)

| ID | Screen / Feature | Route | Cashify Source URL | Priority |
|---|---|---|---|---|
| **S01** | About Us | `/about` | `https://www.cashify.in/about-us` | Must |
| **S02** | Careers | `/career` | `https://www.cashify.in/career` | Should |
| **S03** | Articles / Blog | `/blog` | `https://www.cashify.in/articles` | Should |
| **S04** | Press Releases | `/press-releases` | `https://www.cashify.in/press-releases` | Should |
| **S05** | Partner With Us | `/partner-with-us` | `https://www.cashify.in/partner-with-us` | Must |
| **S06** | Become Supersale Partner | `/supersale` | `https://supersale.cashify.in/lp/home/index.html` | Should |
| **S07** | Corporate Information | `/corporate-information` | `https://www.cashify.in/corporate-information` | Should |
| **S08** | FAQ (Buyback & Refurbished) | `/faq` | `https://www.cashify.in/faq/category/buyback` | Must |
| **S09** | Contact Us | `/contact` | `https://www.cashify.in/contact` | Must |
| **S10** | Warranty Policy | `/warranty-policy` | `https://www.cashify.in/warranty-policy` | Must |
| **S11** | Refund Policy | `/refund-policy` | `https://www.cashify.in/refund-policy` | Must |
| **S12** | Terms & Conditions | `/terms` | `https://www.cashify.in/terms-conditions` | Must |
| **S13** | Privacy Policy | `/privacy-policy` | `https://www.cashify.in/privacy-policy` | Must |
| **S14** | Terms of Use | `/terms-of-use` | `https://www.cashify.in/terms-of-use` | Must |
| **S15** | E-Waste Policy | `/e-waste-policy` | `https://www.cashify.in/e-waste-policy` | Must |
| **S16** | Cookie Policy | `/cookie-policy` | `https://www.cashify.in/cookie-policy` | Should |
| **S17** | What is Refurbished | `/what-is-refurbished` | `https://www.cashify.in/buy-refurbished-mobile-phones/what-is-refurbished-mobile-phones` | Must |
| **S18** | Sellbar Comedy Universe (CCU) | `/ccu` | `https://www.cashify.in/lp/ccu` | Could |
| **S19** | Sell Old Mobile Phone | `/sell` | `https://www.cashify.in/sell-old-mobile-phone` | Must |
| **S20** | Sell Old Laptop | `/sell/laptops` | `https://www.cashify.in/sell-old-laptop` | Must |
| **S21** | Sell Old Tablet | `/tablets` | `https://www.cashify.in/sell-old-tablet` | Must |
| **S22** | Sell Old iMac | `/sell-old-imac` | `https://www.cashify.in/sell-old-imac` | Should |
| **S23** | Sell Old Gaming Console | `/sell-old-gaming-consoles` | `https://www.cashify.in/sell-old-gaming-consoles` | Should |
| **S24** | Sell Old Television | `/sell-old-television` | `https://www.cashify.in/sell-old-television` | Should |
| **S25** | Sell Old Smart Watch | `/sell-old-smart-watch` | `https://www.cashify.in/sell-old-smart-watch` | Must |
| **S26** | Sell Old Smart Speaker | `/sell-old-smart-speaker` | `https://www.cashify.in/sell-old-smart-speaker` | Should |
| **S27** | Sell Old DSLR Camera | `/sell-old-dslr-camera` | `https://www.cashify.in/sell-old-dslr-camera` | Should |
| **S28** | Sell Old Earbuds | `/sell-old-earbuds` | `https://www.cashify.in/sell-old-earbuds` | Should |
| **S29** | Doorstep Phone Repair | `/repair` | `https://www.cashify.in/repair` | Must |
| **S30** | Buy Refurbished Gadgets | `/buy-refurbished` | `https://www.cashify.in/buy-refurbished-gadgets` | Must |
| **S31** | Recycle Old Mobile Phone | `/recycle-old-mobile-phone` | `https://www.cashify.in/recycle-old-mobile-phone` | Must |
| **S32** | Find New Phone | `/find-new-phone` | `https://www.cashify.in/find-new-phone` | Should |

---

## 3. Screen Inventory: Homepage "Our Services" Section

The 16 core service destination pages featured in the primary homepage service grid:

| ID | Screen / Feature | Route | Cashify Source URL | Purpose | Key Components | States Seen |
|---|---|---|---|---|---|---|
| **S34** | Sell Old Mobile Phone | `/sell-old-mobile-phone` | `https://www.cashify.in/sell-old-mobile-phone` | Select brand & model to sell used smartphone | Brand grid (Apple, Samsung, Xiaomi, OnePlus, Vivo, Oppo, Realme, Google, Motorola, Poco), popular models, live valuation calculator, FAQ | Empty search, brand selected, model list, valuation ready |
| **S35** | Buy Refurbished Gadgets | `/buy-refurbished-gadgets` | `https://www.cashify.in/buy-refurbished-gadgets` | Master catalog for certified refurbished tech | Category tabs, filter sidebar (Price, Grade, Brand, Storage), product card grid, 32-point check badge | Loaded catalog, filtered empty state, cart toast |
| **S36** | Buy Refurbished Mobile Phones | `/buy-refurbished-mobile-phones` | `https://www.cashify.in/buy-refurbished-mobile-phones` | Dedicated refurbished smartphone hub | Top brand pills, price tier filters, condition grade selector, 32-point inspection banner, popular phones | All phones, brand filtered, price sorted |
| **S37** | Buy Refurbished Laptops | `/buy-refurbished-laptops` | `https://www.cashify.in/buy-refurbished-laptops` | Refurbished MacBooks, Dell, HP & Lenovo | Processor filter (M1/M2/M3, Intel i5/i7), RAM & SSD filters, battery cycle counts, 6-12M warranty | All laptops, brand filtered, out of stock |
| **S38** | Gaming & Tech Rentals | `/rent-ps5` & `/rent` | `https://rent.cashify.in/` | Console and gadget rentals with duration ladder | Rental duration picker (3 days, 4-6 days, 7+ days), security deposit calculation, console game bundles, KYC | Date selected, duration ladder discounts, checkout |
| **S39** | Buy Refurbished DSLR Cameras | `/buy-refurbished-dslr-cameras` | `https://www.cashify.in/buy-refurbished-dslr-cameras` | Mirrorless & DSLR cameras with lens kits | Shutter count indicator, sensor health rating, Canon/Sony/Nikon brand filter, sample shots | Available cameras, lens combo |
| **S40** | Google Pixel Upgrade Program | `/pixelupgrade` | `https://www.cashify.in/pixelupgrade` | Google Pixel Upgrade Program with 62.5% assured buyback | 24-month No Cost EMI calculator, Pixel 11/11 Pro/Fold models, exchange bonus tiers table, partner store locator | Model chosen, EMI calculation, exchange bonus |
| **S41** | Buy Refurbished Gaming Consoles | `/buy-refurbished-gaming-consoles` | `https://www.cashify.in/buy-refurbished-gaming-consoles` | Pre-owned PS5, PS4, Xbox Series X, Switch | Controller quantity selector, storage tiers, tested optical drives, warranty certificate | Active consoles, bundle selection |
| **S42** | Doorstep Phone Repair | `/repair` | `https://www.cashify.in/repair` | On-demand mobile screen, battery & mic repair | 30-min doorstep repair booking, screen glass vs display price chart, instant technician schedule | Model chosen, issue checklist, time slot |
| **S43** | Laptop Repair | `/laptop-repair` | `https://www.cashify.in/laptop-repair` | Hardware diagnostics, keyboard, battery & SSD repair | Laptop problem selector, chip-level diagnostics, free pickup and delivery, 6-month repair warranty | Problem selected, pickup scheduled |
| **S44** | Find New Phone | `/find-new-phone` | `https://www.cashify.in/find-new-phone` | Upcoming phones, comparison engine, phone finder | Side-by-side specification diff, budget sliders, camera & battery benchmarks, trade-in value estimator | 2-device compare, 3-device compare, spec diff |
| **S45** | Sellbar Store Locator | `/offline-stores` | `https://www.cashify.in/offline-stores` | 200+ offline stores across India with map & directions | City filter, pincode search, store address, contact phone, opening hours, in-store services | City list, store details, map preview |
| **S46** | Buy Accessories | `/buy-accessories` | `https://www.cashify.in/buy-accessories` | Official & certified cables, chargers, cases, glass | Accessory categories, fast charging wattage filter, combo discount banner, compatibility checker | Category view, cart sync |
| **S47** | Buy Refurbished Smart Watches | `/buy-refurbished-smart-watches` | `https://www.cashify.in/buy-refurbished-smart-watches` | Apple Watch, Galaxy Watch, tested sensors & straps | Case size selector (40mm, 44mm, 45mm, 49mm), ECG & heart rate test pass badge, battery endurance | Watch grid, size filter |
| **S48** | Recycle Old Mobile Phone | `/recycle-old-mobile-phone` | `https://www.cashify.in/recycle-old-mobile-phone` | Zero landfill recycling for dead/scrap devices | Scrap device valuation, doorstep pickup, CPCB certified recycling, Green Hero Tree Planting certificate | Pickup details, certificate generation |
| **S49** | Buy Refurbished Tablets | `/buy-refurbished-tablets` | `https://www.cashify.in/buy-refurbished-tablets` | Certified Apple iPads & Samsung Galaxy Tabs | Screen size filter, cellular vs Wi-Fi, Apple Pencil compatibility, student discount tag | Tablet catalog, model view |
