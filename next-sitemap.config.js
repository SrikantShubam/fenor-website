/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fenor.org',
  generateRobotsTxt: true,
  exclude: ['/press/*', '/server-sitemap.xml'], // Exclude dynamic press pages and the server-sitemap route
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: ['https://fenor.org/server-sitemap.xml'],
  },
  // Transform function to handle localization for all static pages
  transform: async (config, path) => {
    const locales = ['en', 'fr', 'ar'];
    const alternateRefs = locales.map((locale) => ({
      href: `${config.siteUrl}/${locale}${path === '/' ? '' : path}`,
      hreflang: locale,
    }));

    return {
      loc: `${config.siteUrl}${path}`, // Default locale URL (optional, since alternateRefs covers all locales)
      lastmod: new Date().toISOString(),
      alternateRefs, // Add localized versions for all pages
    };
  },
};