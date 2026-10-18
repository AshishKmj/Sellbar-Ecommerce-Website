// Sellbar.in - Monitoring & Analytics Integration (Sentry & PostHog)
// Tracks user journeys, buyback funnels, errors, and conversion rates

const NEXT_PUBLIC_POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const NEXT_PUBLIC_POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';
const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

/**
 * Track an analytics event (PostHog compatible)
 */
export function trackEvent(eventName: string, properties: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture(eventName, properties);
  } else if (process.env.NODE_ENV === 'development') {
    console.debug(`[PostHog Track] ${eventName}:`, properties);
  }
}

/**
 * Identify user in PostHog
 */
export function identifyUser(userId: string, userProperties: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.identify(userId, userProperties);
  }
}

/**
 * Capture runtime exception in Sentry
 */
export function captureException(error: Error | any, context: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    (window as any).Sentry.captureException(error, { extra: context });
  } else {
    console.error('[Sentry Error Captured]:', error, context);
  }
}
