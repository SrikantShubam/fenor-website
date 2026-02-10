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
        destination: '/department-of-goldsmithing-and-jewelry',
        permanent: true,
      },
      {
        source: '/en/gold-and-jewelry-section',
        destination: '/en/department-of-goldsmithing-and-jewelry',
        permanent: true,
      },
      {
        source: '/fr/gold-and-jewelry-section',
        destination: '/fr/department-of-goldsmithing-and-jewelry',
        permanent: true,
      },
      {
        source: '/ar/gold-and-jewelry-section',
        destination: '/ar/department-of-goldsmithing-and-jewelry',
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
