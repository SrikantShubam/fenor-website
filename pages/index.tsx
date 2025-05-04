// import { GetStaticProps } from 'next';
// import { client } from '../tina/__generated__/client';
// import { NextSeo } from 'next-seo';

// // Describe exactly what TinaCMS returns for your page:
// interface HomepageProps {
//   content: {
//     title: string;
//     // add the SEO sub-shape:
//     seo?: {
//       title?: string;
//       description?: string;
//       keywords?: string[];
//     };
//     // …and any other fields you expect (e.g. body, heroImage, etc.)
//   };
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/home.md`,
//     });
//     const content = res.data.pages;
//     return {
//       props: {
//         content,
//         locale: locale || 'en',
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching TinaCMS data:', error);
//     return {
//       props: {
//         content: {
//           title: 'Error',
//           // optionally provide a minimal seo shape
//           seo: { title: 'Error' },
//         },
//         locale: locale || 'en',
//       },
//     };
//   }
// };

// const Homepage: React.FC<HomepageProps> = ({ content, locale }) => {
//   return (
//     <>
//       <NextSeo
//         // fallback to content.title if seo.title is missing
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description}
//         keywords={content.seo?.keywords?.join(', ')}
//       />
//       <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <h1>{content.title}</h1>
//         <p>This is a placeholder homepage.</p>
//       </div>
//     </>
//   );
// };

// export default Homepage;




import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { client } from '../tina/__generated__/client';

type SEO = {
  title?: string;
  description?: string;
  keywords?: string[];
};

interface Content {
  title: string;
  seo: SEO | null;
}

interface HomepageProps {
  content: Content;
  locale: string;
}

export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
  try {
    const res = await client.queries.pages({
      relativePath: `${locale}/home.md`,
    });
    const rawContent = res.data.pages;

    // Build SEO object only with defined values
    const seoTemp: SEO = {};
    if (rawContent.seo) {
      if (rawContent.seo.title) {
        seoTemp.title = rawContent.seo.title;
      }
      if (rawContent.seo.description) {
        seoTemp.description = rawContent.seo.description;
      }
      if (Array.isArray(rawContent.seo.keywords)) {
        const filteredKeywords = rawContent.seo.keywords.filter(
          (kw): kw is string => typeof kw === 'string'
        );
        if (filteredKeywords.length > 0) {
          seoTemp.keywords = filteredKeywords;
        }
      }
    }

    const seo = Object.keys(seoTemp).length > 0 ? seoTemp : null;

    const content: Content = {
      title: rawContent.title || 'Default Title',
      seo,
    };

    return {
      props: {
        content,
        locale: locale || 'en',
      },
    };
  } catch (error) {
    console.error('Error fetching TinaCMS data:', error);
    return {
      props: {
        content: {
          title: 'Error',
          seo: { title: 'Error' },
        },
        locale: locale || 'en',
      },
    };
  }
};

const Homepage: NextPage<HomepageProps> = ({ content, locale }) => {
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
      <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <h1>{content.title}</h1>
        <p>This is a placeholder homepage.</p>
      </div>
    </>
  );
};

export default Homepage;
