import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { client } from '../tina/__generated__/client';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text';
import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
import TextBoxWithList from '../components/textbox-variations/TextBoxWithList';
import TextBlock from '../components/textbox-variations/TextBlock';
import ImageBlock from '../components/textbox-variations/ImageBlock';
import CardGroup from '../components/cardgroup';
import ImageCardGroup from '../components/ImageCardGroup';
import TextWithImageBG from '../components/textwithimgbg';
import TextWithVideo from '../components/textwVideo';
import TextImageCenter from '@/components/textbox-variations/TextImageCenter';

// Define SEO type
type SEO = {
  title?: string;
  description?: string;
  keywords?: string[];
};

// Define Block type with all possible block variations
type Block =
  | { __typename: 'PagesBlocksTextBoxWithImageAndButton'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; image?: string; buttonText?: string; buttonUrl?: string; layout?: string }
  | { __typename: 'PagesBlocksTextBoxWithImage'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; image?: string }
  | { __typename: 'PagesBlocksTextBoxWithButton'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; buttonText?: string; buttonUrl?: string }
  | { __typename: 'PagesBlocksSimpleTextBox'; bigHeading?: string; paragraph?: TinaMarkdownContent }
  | { __typename: 'PagesBlocksTextBoxWithList'; smallHeading?: string; bigHeading?: string; image?: string; listItems?: string[] }
  | { __typename: 'PagesBlocksText'; content?: TinaMarkdownContent }
  | { __typename: 'PagesBlocksImage'; src?: string; alt?: string }
  | { __typename: 'PagesBlocksCardGroup'; cards?: { icon?: string; header?: string; text?: TinaMarkdownContent }[] }
  | { __typename: 'PagesBlocksImageCardGroup'; heading?: string; cards?: { image?: string; alt?: string }[] }
  | { __typename: 'PagesBlocksTextWithImageBG'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; buttonText?: string; buttonUrl?: string; backgroundImage?: string }
  | { __typename: 'PagesBlocksTextwVideo'; bigHeading?: string; smallHeading?: string; video?: string }
  | { __typename: 'PagesBlocksTextImageCenter'; image?: string; bigHeading?: string; paragraph?: TinaMarkdownContent }; // Add new block type

// Define Content interface
interface Content {
  title: string;
  seo: SEO | null;
  blocks?: Block[];
}

// Define props interface for AboutUs
interface AboutUsProps {
  content: Content;
  locale: string;
}

// Fetch data from Tina CMS
export const getStaticProps: GetStaticProps<AboutUsProps> = async ({ locale }) => {
  try {
    const res = await client.queries.pages({
      relativePath: `${locale}/About-Us.md`,
    });
    const rawContent = res.data.pages;

    // Process SEO data
    const seoTemp: SEO = {};
    if (rawContent.seo) {
      if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
      if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
      if (Array.isArray(rawContent.seo.keywords)) {
        const filteredKeywords = rawContent.seo.keywords.filter(
          (kw): kw is string => typeof kw === 'string'
        );
        if (filteredKeywords.length > 0) seoTemp.keywords = filteredKeywords;
      }
    }
    const seo = Object.keys(seoTemp).length > 0 ? seoTemp : null;

    // Structure the content
    const content: Content = {
      title: rawContent.title || 'About Us',
      seo,
      blocks: rawContent.blocks || [],
    };

    return {
      props: {
        content,
        locale: locale || 'en',
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

// Define the AboutUs component
const about: NextPage<AboutUsProps> = ({ content, locale }) => {
  // Function to render blocks based on their __typename
  const renderBlock = (block: Block, index: number) => {
    switch (block.__typename) {
      case 'PagesBlocksTextBoxWithImageAndButton':
        return <TextBoxWithImageAndButton key={index} {...block} />;
      case 'PagesBlocksTextBoxWithImage':
        return <TextBoxWithImage key={index} {...block} />;
      case 'PagesBlocksTextBoxWithButton':
        return <TextBoxWithButton key={index} {...block} />;
      case 'PagesBlocksSimpleTextBox':
        return <SimpleTextBox key={index} {...block} />;
      case 'PagesBlocksTextBoxWithList':
        return <TextBoxWithList key={index} {...block} />;
      case 'PagesBlocksText':
        return <TextBlock key={index} content={block.content} />;
      case 'PagesBlocksImage':
        return <ImageBlock key={index} src={block.src || ''} alt={block.alt || ''} />;
      case 'PagesBlocksCardGroup':
        return <CardGroup key={index} cards={block.cards} />;
      case 'PagesBlocksImageCardGroup':
        return <ImageCardGroup key={index} heading={block.heading} cards={block.cards} />;
      case 'PagesBlocksTextWithImageBG':
        return <TextWithImageBG key={index} {...block} />;
      case 'PagesBlocksTextwVideo':
        return <TextWithVideo key={index} {...block} />;
      case 'PagesBlocksTextImageCenter':
        return <TextImageCenter key={index} {...block} />; // Add rendering for new component
      default:
        return null;
    }
  };

  return (
    <>
      <NextSeo
        title={content.seo?.title ?? content.title}
        description={content.seo?.description ?? undefined}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: content.seo?.keywords?.join(', ') || '',
          },
        ]}
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