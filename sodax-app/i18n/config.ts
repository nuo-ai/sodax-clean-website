export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Use cookie-based locale selection (no URL prefix like /en)
/**
 * Options:
 * - 'as-needed' (default): adds prefixes except for defaultLocale
 * - 'always': always prefixes routes
 * - 'never': never prefixes routes (we will rely on cookies)
 */
export const localePrefix = 'never' as const;

// Optional: centralize known pathnames for future typed navigation helpers
export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/services': '/services',
  '/contact': '/contact'
} as const;
