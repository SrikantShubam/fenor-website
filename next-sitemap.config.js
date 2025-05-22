module.exports = {
  siteUrl: 'https://www.fenor.org',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml', '/press/*'], // Excludes dynamic press pages
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.fenor.org/server-sitemap.xml'],
  },
};