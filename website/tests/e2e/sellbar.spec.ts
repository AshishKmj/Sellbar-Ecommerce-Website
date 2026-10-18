import { test, expect } from '@playwright/test';

test.describe('Sellbar.in - Core Customer Journeys', () => {
  test('1. Homepage: Renders brand, category pills, trust badges, and CTA buttons', async ({ page }) => {
    await page.goto('/');

    // Check title and brand
    await expect(page).toHaveTitle(/Sellbar/);
    await expect(page.locator('text=Sell Smart. Buy Better.').first()).toBeVisible();

    // Check quick action CTAs
    await expect(page.locator('a[href="/sell"]').first()).toBeVisible();
    await expect(page.locator('a[href="/buy-refurbished"]').first()).toBeVisible();

    // Check popular device models grid
    await expect(page.locator('text=Apple iPhone 15 Pro').first()).toBeVisible();
    await expect(page.locator('text=Samsung Galaxy S24 Ultra').first()).toBeVisible();
  });

  test('2. Sell Funnel: Select category, brand, and device model', async ({ page }) => {
    await page.goto('/sell');

    // Verify categories listed
    await expect(page.locator('text=Sell Phone').first()).toBeVisible();
    await expect(page.locator('text=Sell Laptop').first()).toBeVisible();

    // Navigate to phone category
    await page.goto('/sell/phones');
    await expect(page.locator('text=Sell Your Used Phone')).toBeVisible();

    // Select Apple iPhone 15 Pro
    const iphoneLink = page.locator('a[href*="/sell/device/apple-iphone-15-pro"]').first();
    await expect(iphoneLink).toBeVisible();
    await iphoneLink.click();

    // Verify valuation wizard loads
    await expect(page.locator('text=Valuation Calculator')).toBeVisible();
    await expect(page.locator('text=Get Instant Cash Quote')).toBeVisible();
  });

  test('3. Refurbished Store: Browse certified electronics and view product details', async ({ page }) => {
    await page.goto('/buy-refurbished');

    await expect(page.locator('text=Certified Refurbished Electronics')).toBeVisible();
    await expect(page.locator('text=Superb (Flawless)')).toBeVisible();

    // Click on a product card
    const productCard = page.locator('a[href^="/product/"]').first();
    await expect(productCard).toBeVisible();
    await productCard.click();

    // Verify PDP
    await expect(page.locator('text=Sellbar Certified Refurbished')).toBeVisible();
    await expect(page.locator('text=Add to Cart')).toBeVisible();
    await expect(page.locator('text=32-Point Quality Checklist')).toBeVisible();
  });

  test('4. Order Tracking: Lookup tracking number and view delivery timeline', async ({ page }) => {
    await page.goto('/track-order?tracking=SB-DEL-89210');

    await expect(page.locator('text=Track Your Order')).toBeVisible();
    await expect(page.locator('text=Order Status: Out For Delivery')).toBeVisible();
    await expect(page.locator('text=Bluedart Express')).toBeVisible();
  });

  test('5. Admin & Tech Portal: Accessible navigation and KPI metrics', async ({ page }) => {
    await page.goto('/admin');

    await expect(page.locator('text=Operations & Inspection Portal')).toBeVisible();
    await expect(page.locator('text=Live Buyback Inspection Requests')).toBeVisible();
    await expect(page.locator('text=Refurbished Inventory')).toBeVisible();
  });
});
