import { getServerSideSitemapLegacy, ISitemapField } from 'next-sitemap';
import { createClient, EntrySkeletonType } from 'contentful';
import { GetServerSidePropsContext } from 'next';
import { LRUCache } from 'lru-cache';

// Initialize Contentful client with environment variables
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Set up in-memory cache with a 25-day TTL
const cache = new LRUCache({
  max: 1, // Single cache entry for sitemap fields
  ttl: 25 * 24 * 60 * 60 * 1000, // 25 days in milliseconds
});

// Define the structure of NewsArticle fields from Contentful
interface NewsArticleFields {
  slugEn?: string;
  slugFr?: string;
  slugAr?: string;
}

// Define the skeleton type for NewsArticle entries
interface NewsArticleSkeleton extends EntrySkeletonType {
  contentTypeId: 'newsArticle'; // Matches Contentful content type ID
  fields: NewsArticleFields;
}

// Generate the sitemap server-side
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const locales = ['en', 'fr', 'ar']; // Supported locales

  // Check for cached sitemap fields
  const cachedFields = cache.get('sitemapFields') as ISitemapField[] | undefined;
  if (cachedFields) {
    return getServerSideSitemapLegacy(ctx, cachedFields);
  }

  try {
    // Fetch news articles from Contentful
    const response = await client.getEntries<NewsArticleSkeleton>({
      content_type: 'newsArticle', // Ensure this matches your Contentful content type ID
    });

    const fields: ISitemapField[] = [];

    // Generate sitemap entries for each article and locale
    response.items.forEach((article) => {
      const articleFields = article.fields as NewsArticleFields;
      const slugs = {
        en: articleFields.slugEn,
        fr: articleFields.slugFr,
        ar: articleFields.slugAr,
      };

      locales.forEach((locale) => {
        const slug = slugs[locale as keyof typeof slugs];
        if (slug) {
          fields.push({
            loc: `https://fenor.org/${locale}/press/${slug}`,
            lastmod: article.sys.updatedAt,
          });
        }
      });
    });

    // Cache the generated fields
    cache.set('sitemapFields', fields);

    return getServerSideSitemapLegacy(ctx, fields);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return getServerSideSitemapLegacy(ctx, []); // Return empty sitemap on error
  }
}

// Default export (required for Next.js pages, even if empty)
export default function Sitemap() {}