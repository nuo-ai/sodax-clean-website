import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale, localePrefix, pathnames } from './i18n/config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix,
  pathnames
});

export default routing;
