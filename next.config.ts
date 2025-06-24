import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'ar',
    localeDetection: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['assets.tina.io','images.ctfassets.net'],
  },
};

export default nextConfig;

