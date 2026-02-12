import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'ar',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/gold-and-jewelry-section',
        destination: '/departments',
        permanent: true,
      },
      {
        source: '/en/gold-and-jewelry-section',
        destination: '/en/departments',
        permanent: true,
      },
      {
        source: '/fr/gold-and-jewelry-section',
        destination: '/fr/departments',
        permanent: true,
      },
      {
        source: '/ar/gold-and-jewelry-section',
        destination: '/ar/departments',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['assets.tina.io','images.ctfassets.net'],
  },
};

export default nextConfig;
