// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import { PagesBlocks } from '../tina/__generated__/types';
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';

// type SEO = {
//   title?: string;
//   description?: string;
//   keywords?: string[];
// };

// interface Content {
//   title: string;
//   seo: SEO | null;
//   blocks?: PagesBlocks[];
// }

// interface HistoryPageProps {
//   content: Content;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<HistoryPageProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/history.md`,
//     });
//     const rawContent = res.data.pages;

//     const seoTemp: SEO = {};
//     if (rawContent.seo) {
//       if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
//       if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
//       if (Array.isArray(rawContent.seo.keywords)) {
//         const filtered = rawContent.seo.keywords.filter((kw): kw is string => typeof kw === 'string');
//         if (filtered.length) seoTemp.keywords = filtered;
//       }
//     }
//     const seo = Object.keys(seoTemp).length ? seoTemp : null;

//     return {
//       props: {
//         content: {
//           title: rawContent.title || 'History Page',
//           seo,
//           blocks: rawContent.blocks || [],
//         },
//         locale: locale || 'en',
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         content: { title: 'Error', seo: { title: 'Error' }, blocks: [] },
//         locale: locale || 'en',
//       },
//     };
//   }
// };

// const HistoryPage: NextPage<HistoryPageProps> = ({ content, locale }) => {
//   const renderBlock = (block: PagesBlocks, i: number) => {
//     switch (block.__typename) {
//       case 'PagesBlocksTextBoxWithImageAndButton':
//         return <TextBoxWithImageAndButton key={i} {...block} />;
//       default:
//         console.warn(`Unhandled block type: ${block.__typename}`);
//         return null;
//     }
//   };

//   return (
//     <div className="history-page" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? undefined}
//         additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//       />
//       <div className="space-y-20 md:space-y-[200px]">
//         {content.blocks?.map(renderBlock)}
//       </div>
//     </div>
//   );
// };

// export default HistoryPage;











import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { client } from '../tina/__generated__/client';
import { PagesBlocks } from '../tina/__generated__/types';
import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
import HistoryItems from '@/components/HistoryItems';

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

interface HistoryPageProps {
  content: Content;
  locale: string;
}

export const getStaticProps: GetStaticProps<HistoryPageProps> = async ({ locale }) => {
  try {
    const res = await client.queries.pages({
      relativePath: `${locale}/history.md`,
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
          title: rawContent.title || 'History Page',
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

const HistoryPage: NextPage<HistoryPageProps> = ({ content, locale }) => {
  const renderBlock = (block: PagesBlocks, i: number) => {
    switch (block.__typename) {
      case 'PagesBlocksTextBoxWithImageAndButton':
        return <TextBoxWithImageAndButton key={i} {...block} />;
      case 'PagesBlocksContentWithHeaderDateIcon':
        return (
          <HistoryItems
            key={i}
            sectionHeader={block.sectionHeader}
            timelineItems={block.timelineItems}
          />
        );
      default:
        console.warn(`Unhandled block type: ${block.__typename}`);
        return null;
    }
  };

  return (
    <div className="history-page" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
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

export default HistoryPage;










