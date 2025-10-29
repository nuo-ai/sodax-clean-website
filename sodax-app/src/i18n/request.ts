import {getRequestConfig} from 'next-intl/server';
import {defaultLocale} from '../../i18n/config';

export default getRequestConfig(async ({locale}) => {
  // Use default locale if no locale is provided
  const actualLocale = locale || defaultLocale;
  
  try {
    return {
      locale: actualLocale,
      // Note: This path is from src/i18n to the messages directory at project root
      messages: (await import(`../../messages/${actualLocale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${actualLocale}`, error);
    // Fallback to default locale
    return {
      locale: defaultLocale,
      messages: (await import(`../../messages/${defaultLocale}.json`)).default
    };
  }
});
