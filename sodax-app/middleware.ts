import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale, localePrefix} from './i18n/config';

// next-intl middleware with cookie-based locale strategy (no URL prefix)
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix
});

// Exclude Next.js internals, assets and API routes from middleware
export const config = {
  matcher: [
    '/((?!_next|.*\\..*|api).*)'
  ]
};
