import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string; // e.g., "/en/members"
  structuredData?: object; // Optional JSON-LD structured data
}

const SEOComponent: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  structuredData,
}) => {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const currentLocale = locale || defaultLocale || 'en';
  const baseUrl = 'https://www.fenor.org';

  // Construct canonical URL
  const canonicalUrl = canonicalPath
    ? `${baseUrl}${canonicalPath}`
    : `${baseUrl}${router.asPath}`;

  // Define hreflang alternates for multilingual support
  const languageAlternates = [
    { hrefLang: 'en', href: `${baseUrl}/en${router.pathname}` },
    { hrefLang: 'fr', href: `${baseUrl}/fr${router.pathname}` },
    { hrefLang: 'ar', href: `${baseUrl}/ar${router.pathname}` },
    { hrefLang: 'x-default', href: `${baseUrl}/en${router.pathname}` }, // Default language
  ];

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        languageAlternates={languageAlternates}
        openGraph={{
          title,
          description,
          url: canonicalUrl,
          locale: currentLocale,
          type: 'website',
          images: [{ url: 'https://www.fenor.org/images/logo.jpg' }], // Fixed logo
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
};

export default SEOComponent;