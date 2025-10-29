import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is stable in Next.js 14.2.5
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
};

export default withNextIntl(nextConfig);
