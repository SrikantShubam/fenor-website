import { getServerSideSitemapLegacy } from 'next-sitemap';

export async function getServerSideProps(ctx) {
  // Fetch press articles from Contentful
  const articles = await fetchArticlesFromContentful();
  const locale = ctx.locale || 'en';

  const fields = articles.map(article => ({
    loc: `https://www.fenor.org/${locale}/press/${article.slug}`,
    lastmod: article.updatedAt,
  }));

  return getServerSideSitemapLegacy(ctx, fields);
}

export default function Sitemap() {}