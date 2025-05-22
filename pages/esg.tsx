import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { client } from '../tina/__generated__/client';
import { PagesBlocks } from '../tina/__generated__/types';
import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
import TextBoxWithList from '../components/textbox-variations/TextBoxWithList';

type SEO = {
  title?: string;
  description?: string;
  keywords?: string[];
};

interface Content {
  title: string;
  seo: SEO | null;
  blocks?: PagesBlocks[];
}

interface EsgPageProps {
  content: Content;
  locale: string;
}

export const getStaticProps: GetStaticProps<EsgPageProps> = async ({ locale }) => {
  try {
    const res = await client.queries.pages({
      relativePath: `${locale}/esg.md`,
    });
    const rawContent = res.data.pages;

    const seoTemp: SEO = {};
    if (rawContent.seo) {
      if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
      if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
      if (Array.isArray(rawContent.seo.keywords)) {
        const filtered = rawContent.seo.keywords.filter((kw): kw is string => typeof kw === 'string');
        if (filtered.length) seoTemp.keywords = filtered;
      }
    }
    const seo = Object.keys(seoTemp).length ? seoTemp : null;

    return {
      props: {
        content: {
          title: rawContent.title || 'ESG Page',
          seo,
          blocks: rawContent.blocks || [],
        },
        locale: locale || 'en',
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        content: { title: 'Error', seo: { title: 'Error' }, blocks: [] },
        locale: locale || 'en',
      },
    };
  }
};

const EsgPage: NextPage<EsgPageProps> = ({ content, locale }) => {
  const renderBlock = (block: PagesBlocks, i: number) => {
    switch (block.__typename) {
      case 'PagesBlocksTextBoxWithImage':
        return <TextBoxWithImage key={i} {...block} />;
      case 'PagesBlocksTextBoxWithList':
        // Transform the image string into an object
        const image = block.image ? { src: block.image, alt: 'Default alt text' } : undefined;

        // Transform listItems to match the expected type
        const listItems = block.listItems?.map(item => ({
          text: item.text || 'Default text',
          icon: item.icon || '/default-icon.png',
          button: item.button ? {
            text: item.button.text || 'Default button text',
            url: item.button.url || '#'
          } : undefined,
        })) || [];

        // Combine transformations
        const transformedBlock = {
          ...block,
          image,
          listItems,
        };

        return <TextBoxWithList key={i} {...transformedBlock} />;
      default:
        return null;
    }
  };

  return (
    <div className="esg-page" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <NextSeo
        title={content.seo?.title ?? content.title}
        description={content.seo?.description ?? undefined}
        additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
      />
      <div className="space-y-20 md:space-y-[200px]">
        {content.blocks?.map(renderBlock)}
      </div>
    </div>
  );
};

export default EsgPage;