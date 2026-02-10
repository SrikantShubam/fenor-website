import { GetStaticProps, NextPage } from 'next';
import SEOComponent from '../components/SEOComponent';
import { client } from '../tina/__generated__/client';
import { PagesBlocks } from '../tina/__generated__/types';
import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
import TextImageCenter from '@/components/textbox-variations/TextImageCenter';
import TextBoxWithList from '@/components/textbox-variations/TextBoxWithList';
type SEO = {
  title?: string;
  description?: string;

};

interface Content {
  title: string;
  seo: SEO | null;
  blocks?: PagesBlocks[];
}

interface AboutUsProps {
  content: Content;
  locale: string;
  
}

export const getStaticProps: GetStaticProps<AboutUsProps> = async ({ locale }) => {
  try {
    const res = await client.queries.pages({
      relativePath: `${locale}/About-Us.md`,
    });
    const rawContent = res.data.pages;

    const seoTemp: SEO = {};
    if (rawContent.seo) {
      if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
      if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
    
    }
    const seo = Object.keys(seoTemp).length > 0 ? seoTemp : null;

    const content: Content = {
      title: rawContent.title || 'About Us',
      seo,
      blocks: rawContent.blocks || [],
    };

    return {
      props: {
        content,
        locale: locale || 'en',
        seo: rawContent.seo || null
      },
    };
  } catch (error) {
    console.error('Error fetching TinaCMS data for About Us:', error);
    return {
      props: {
        content: {
          title: 'Error',
          seo: { title: 'Error' },
          blocks: [],
        },
        locale: locale || 'en',
      },
    };
  }
};

const about: NextPage<AboutUsProps> = ({ content, locale }) => {
  const renderBlock = (block: PagesBlocks, index: number) => {
    switch (block.__typename) {
      case 'PagesBlocksTextBoxWithImage':
        return <TextBoxWithImage key={index} {...block} />;
     case 'PagesBlocksTextBoxWithList':
  const image = typeof block.image === 'string'
    ? { src: block.image, alt: block.smallHeading || 'List Section Image' }
    : block.image;

  const listItems = block.listItems?.map(item => ({
    text: item.text || '',
    icon: item.icon || '',
    button: item.button ? {
      text: item.button.text || '',
      url: item.button.url || '#',
    } : undefined,
  })) || [];

  return (
    <TextBoxWithList
      key={index}
      {...block}
      image={image}
      listItems={listItems}
    />
  );

      case 'PagesBlocksTextImageCenter':
        return <TextImageCenter key={index} {...block} />;
      case 'PagesBlocksTextBoxWithButton':
        return <TextBoxWithButton key={index} {...block} />;
     
      default:
        console.warn(`Unsupported block type: ${block.__typename}`);
        return null;
    }
  };

  return (
    <>
   <SEOComponent
        title={content.seo?.title || content.title || 'About Us'}
        description={
          content.seo?.description ||
          'Learn more about FENOR, the National Federation of Gold Factories, and our mission in Mauritania.'
        }
        canonicalPath={`/${locale}/about`}
      />
      <div className="about-us" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="space-y-[120px] md:space-y-[200px]">
          {content.blocks?.map((block, index) => renderBlock(block, index))}
        </div>
      </div>
    </>
  );
};

export default about;
