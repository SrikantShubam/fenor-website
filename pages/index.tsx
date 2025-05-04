import { GetStaticProps } from 'next';
import { client } from '../tina/__generated__/client';
import { NextSeo } from 'next-seo';

// The shape your page component actually needs
interface HomepageProps {
  content: {
    title: string;
    seo?: {
      title?: string;
      description?: string;
      keywords?: string[];
    };
  };
  locale: string;
}

export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
  try {
    const res = await client.queries.pages({
      relativePath: `${locale}/home.md`,
    });
    const raw = res.data.pages;
    // Now map into exactly the shape HomepageProps.content expects
    const content = {
      title: raw.title,
      seo: raw.seo
        ? {
            title: raw.seo.title ?? undefined,
            description: raw.seo.description ?? undefined,
            // filter out any null keywords
            keywords: raw.seo.keywords?.filter((kw): kw is string => Boolean(kw)) ?? undefined,
          }
        : undefined,
    };

    return {
      props: {
        content,
        locale: locale ?? 'en',
      },
    };
  } catch (error) {
    console.error('Error fetching TinaCMS data:', error);
    return {
      props: {
        content: {
          title: 'Error',
          seo: { title: 'Error fetching content' },
        },
        locale: locale ?? 'en',
      },
    };
  }
};

const Homepage: React.FC<HomepageProps> = ({ content, locale }) => {
  // Prepare a keywords string or undefined
  const keywordsString = content.seo?.keywords?.join(', ');

  return (
    <>
      <NextSeo
        title={content.seo?.title ?? content.title}
        description={content.seo?.description}
        additionalMetaTags={
          keywordsString
            ? [{ name: 'keywords', content: keywordsString }]
            : undefined
        }
      />

      <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <h1>{content.title}</h1>
        <p>This is a placeholder homepage.</p>
      </div>
    </>
  );
};

export default Homepage;
