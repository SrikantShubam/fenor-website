import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  images: {
    domains: ['assets.tina.io'],
  },
};

export default nextConfig;