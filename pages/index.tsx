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




// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
// import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
// import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
// import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
// import TextBoxWithList from '../components/textbox-variations/TextBoxWithList';
// import TextBlock from '../components/textbox-variations/TextBlock';
// import ImageBlock from '../components/textbox-variations/ImageBlock';

// type SEO = {
//   title?: string;
//   description?: string;
//   keywords?: string[];
// };

// type Block =
//   | { _template: 'textBoxWithImageAndButton'; smallHeading: string; bigHeading: string; paragraph: string; image: string; buttonText: string; buttonUrl: string; layout?: string }
//   | { _template: 'textBoxWithImage'; smallHeading: string; bigHeading: string; paragraph: string; image: string }
//   | { _template: 'textBoxWithButton'; smallHeading: string; bigHeading: string; paragraph: string; buttonText: string; buttonUrl: string }
//   | { _template: 'simpleTextBox'; bigHeading: string; paragraph: string }
//   | { _template: 'textBoxWithList'; smallHeading: string; bigHeading: string; image: string; listItems: string[] }
//   | { _template: 'text'; content: string }
//   | { _template: 'image'; src: string; alt: string };

// interface Content {
//   title: string;
//   seo: SEO | null;
//   blocks?: Block[];
// }

// interface HomepageProps {
//   content: Content;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/home.md`,
//     });
//     const rawContent = res.data.pages;

//     const seoTemp: SEO = {};
//     if (rawContent.seo) {
//       if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
//       if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
//       if (Array.isArray(rawContent.seo.keywords)) {
//         const filteredKeywords = rawContent.seo.keywords.filter(
//           (kw): kw is string => typeof kw === 'string'
//         );
//         if (filteredKeywords.length > 0) seoTemp.keywords = filteredKeywords;
//       }
//     }

//     const seo = Object.keys(seoTemp).length > 0 ? seoTemp : null;

//     const content: Content = {
//       title: rawContent.title || 'Default Title',
//       seo,
//       blocks: rawContent.blocks || [],
//     };

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
//           seo: { title: 'Error' },
//           blocks: [],
//         },
//         locale: locale || 'en',
//       },
//     };
//   }
// };

// const Homepage: NextPage<HomepageProps> = ({ content, locale }) => {
//   const renderBlock = (block: Block, index: number) => {
//     switch (block._template) {
//       case 'textBoxWithImageAndButton':
//         return <TextBoxWithImageAndButton key={index} {...block} />;
//       case 'textBoxWithImage':
//         return <TextBoxWithImage key={index} {...block} />;
//       case 'textBoxWithButton':
//         return <TextBoxWithButton key={index} {...block} />;
//       case 'simpleTextBox':
//         return <SimpleTextBox key={index} {...block} />;
//       case 'textBoxWithList':
//         return <TextBoxWithList key={index} {...block} />;
//       case 'text':
//         return <TextBlock key={index} content={block.content} />;
//       case 'image':
//         return <ImageBlock key={index} src={block.src} alt={block.alt} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? undefined}
//         additionalMetaTags={[
//           {
//             name: 'keywords',
//             content: content.seo?.keywords?.join(', ') || '',
//           },
//         ]}
//       />
//       <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <h1>{content.title}</h1>
//         {content.blocks?.map((block, index) => renderBlock(block, index))}
//       </div>
//     </>
//   );
// };

// export default Homepage;



// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import { TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
// import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
// import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
// import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
// import TextBoxWithList from '../components/textbox-variations/TextBoxWithList';
// import TextBlock from '../components/textbox-variations/TextBlock';
// import ImageBlock from '../components/textbox-variations/ImageBlock';
// import CardGroup from '@/components/cardgroup';
// type SEO = {
//   title?: string;
//   description?: string;
//   keywords?: string[];
// };

// type Block =
//   | { __typename: 'PagesBlocksTextBoxWithImageAndButton'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; image?: string; buttonText?: string; buttonUrl?: string; layout?: string }
//   | { __typename: 'PagesBlocksTextBoxWithImage'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; image?: string }
//   | { __typename: 'PagesBlocksTextBoxWithButton'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; buttonText?: string; buttonUrl?: string }
//   | { __typename: 'PagesBlocksSimpleTextBox'; bigHeading?: string; paragraph?: TinaMarkdownContent }
//   | { __typename: 'PagesBlocksTextBoxWithList'; smallHeading?: string; bigHeading?: string; image?: string; listItems?: string[] }
//   | { __typename: 'PagesBlocksText'; content?: TinaMarkdownContent } // Updated to TinaMarkdownContent
//   | { __typename: 'PagesBlocksImage'; src?: string; alt?: string };

// interface Content {
//   title: string;
//   seo: SEO | null;
//   blocks?: Block[];
// }

// interface HomepageProps {
//   content: Content;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/home.md`,
//     });
//     const rawContent = res.data.pages;

//     console.log('Raw Content:', JSON.stringify(rawContent, null, 2));

//     const seoTemp: SEO = {};
//     if (rawContent.seo) {
//       if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
//       if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
//       if (Array.isArray(rawContent.seo.keywords)) {
//         const filteredKeywords = rawContent.seo.keywords.filter(
//           (kw): kw is string => typeof kw === 'string'
//         );
//         if (filteredKeywords.length > 0) seoTemp.keywords = filteredKeywords;
//       }
//     }

//     const seo = Object.keys(seoTemp).length > 0 ? seoTemp : null;

//     const content: Content = {
//       title: rawContent.title || 'Default Title',
//       seo,
//       blocks: rawContent.blocks || [],
//     };

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
//           seo: { title: 'Error' },
//           blocks: [],
//         },
//         locale: locale || 'en',
//       },
//     };
//   }
// };

// const Homepage: NextPage<HomepageProps> = ({ content, locale }) => {
//   const renderBlock = (block: Block, index: number) => {
//     console.log('Block:', JSON.stringify(block, null, 2));
//     console.log('Template Type:', block.__typename);

//     switch (block.__typename) {
//       case 'PagesBlocksTextBoxWithImageAndButton':
//         return <TextBoxWithImageAndButton key={index} {...block} />;
//       case 'PagesBlocksTextBoxWithImage':
//         return <TextBoxWithImage key={index} {...block} />;
//       case 'PagesBlocksTextBoxWithButton':
//         return <TextBoxWithButton key={index} {...block} />;
//       case 'PagesBlocksSimpleTextBox':
//         return <SimpleTextBox key={index} {...block} />;
//       case 'PagesBlocksTextBoxWithList':
//         return <TextBoxWithList key={index} {...block} />;
//       case 'PagesBlocksText':
//         return <TextBlock key={index} content={block.content} />; // Updated to pass content directly
//       case 'PagesBlocksImage':
//         return <ImageBlock key={index} src={block.src || ''} alt={block.alt || ''} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? undefined}
//         additionalMetaTags={[
//           {
//             name: 'keywords',
//             content: content.seo?.keywords?.join(', ') || '',
//           },
//         ]}
//       />
//       <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <h1>{content.title}</h1>
//         <div className="space-y-20 md:space-y-[245px]">
//           {content.blocks?.map((block, index) => renderBlock(block, index))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;















// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import { TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
// import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
// import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
// import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
// import TextBoxWithList from '../components/textbox-variations/TextBoxWithList';
// import TextBlock from '../components/textbox-variations/TextBlock';
// import ImageBlock from '../components/textbox-variations/ImageBlock';
// import CardGroup from '../components/cardgroup';
// import ImageCardGroup from '../components/ImageCardGroup';
// import TextWithImageBG from '../components/textwithimgbg';
// import TextWithVideo from '../components/textwVideo';
// import TextImageCenter from '@/components/textbox-variations/TextImageCenter';
// type SEO = {
//   title?: string;
//   description?: string;
//   keywords?: string[];
// };

// type Block =
//   | { __typename: 'PagesBlocksTextBoxWithImageAndButton'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; image?: string; buttonText?: string; buttonUrl?: string; layout?: string }
//   | { __typename: 'PagesBlocksTextBoxWithImage'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; image?: string }
//   | { __typename: 'PagesBlocksTextBoxWithButton'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; buttonText?: string; buttonUrl?: string }
//   | { __typename: 'PagesBlocksSimpleTextBox'; bigHeading?: string; paragraph?: TinaMarkdownContent }
//   | { __typename: 'PagesBlocksTextBoxWithList'; smallHeading?: string; bigHeading?: string; image?: string; listItems?: string[] }
//   | { __typename: 'PagesBlocksText'; content?: TinaMarkdownContent }
//   | { __typename: 'PagesBlocksImage'; src?: string; alt?: string }
//   | { __typename: 'PagesBlocksCardGroup'; cards?: { icon?: string; header?: string; text?: TinaMarkdownContent }[] }
//   | { __typename: 'PagesBlocksImageCardGroup'; heading?: string; cards?: { image?: string; alt?: string }[] }
//   | { __typename: 'PagesBlocksTextWithImageBG'; smallHeading?: string; bigHeading?: string; paragraph?: TinaMarkdownContent; buttonText?: string; buttonUrl?: string; backgroundImage?: string }
//   | { __typename: 'PagesBlocksTextwVideo'; bigHeading?: string; smallHeading?: string; video?: string };

// interface Content {
//   title: string;
//   seo: SEO | null;
//   blocks?: Block[];
// }

// interface HomepageProps {
//   content: Content;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/home.md`,
//     });
//     const rawContent = res.data.pages;

//     console.log('Raw Content:', JSON.stringify(rawContent, null, 2));

//     const seoTemp: SEO = {};
//     if (rawContent.seo) {
//       if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
//       if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
//       if (Array.isArray(rawContent.seo.keywords)) {
//         const filteredKeywords = rawContent.seo.keywords.filter(
//           (kw): kw is string => typeof kw === 'string'
//         );
//         if (filteredKeywords.length > 0) seoTemp.keywords = filteredKeywords;
//       }
//     }

//     const seo = Object.keys(seoTemp).length > 0 ? seoTemp : null;

//     const content: Content = {
//       title: rawContent.title || 'Default Title',
//       seo,
//       blocks: rawContent.blocks || [],
//     };

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
//           seo: { title: 'Error' },
//           blocks: [],
//         },
//         locale: locale || 'en',
//       },
//     };
//   }
// };

// const Homepage: NextPage<HomepageProps> = ({ content, locale }) => {
//   const renderBlock = (block: Block, index: number) => {
//     console.log('Block:', JSON.stringify(block, null, 2));
//     console.log('Template Type:', block.__typename);

//     switch (block.__typename) {
//       case 'PagesBlocksTextBoxWithImageAndButton':
//         return <TextBoxWithImageAndButton key={index} {...block} />;
//       case 'PagesBlocksTextBoxWithImage':
//         return <TextBoxWithImage key={index} {...block} />;
//       case 'PagesBlocksTextBoxWithButton':
//         return <TextBoxWithButton key={index} {...block} />;
//       case 'PagesBlocksSimpleTextBox':
//         return <SimpleTextBox key={index} {...block} />;
//       case 'PagesBlocksTextBoxWithList':
//         return <TextBoxWithList key={index} {...block} />;
//       case 'PagesBlocksText':
//         return <TextBlock key={index} content={block.content} />;
//       case 'PagesBlocksImage':
//         return <ImageBlock key={index} src={block.src || ''} alt={block.alt || ''} />;
//       case 'PagesBlocksCardGroup':
//         return <CardGroup key={index} cards={block.cards} />;
//       case 'PagesBlocksImageCardGroup':
//         return <ImageCardGroup key={index} heading={block.heading} cards={block.cards} />;
//       case 'PagesBlocksTextWithImageBG':
//         return <TextWithImageBG key={index} {...block} />;
//       case 'PagesBlocksTextwVideo':
//         return <TextWithVideo key={index} {...block} />;
        
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? undefined}
//         additionalMetaTags={[
//           {
//             name: 'keywords',
//             content: content.seo?.keywords?.join(', ') || '',
//           },
//         ]}
//       />
//       <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
       
//         <div className="space-y-40 md:space-y-[200px]">
//           {content.blocks?.map((block, index) => renderBlock(block, index))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;




































// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import { PagesBlocks } from '../tina/__generated__/types'; // Import generated PagesBlocks type
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
// import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
// import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
// import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
// import TextBoxWithList from '../components/textbox-variations/TextBoxWithList';
// import TextBlock from '../components/textbox-variations/TextBlock';
// import ImageBlock from '../components/textbox-variations/ImageBlock';
// import CardGroup from '../components/cardgroup';
// import ImageCardGroup from '../components/ImageCardGroup';
// import TextWithImageBG from '../components/textwithimgbg';
// import TextWithVideo from '../components/textwVideo';
// import TextImageCenter from '@/components/textbox-variations/TextImageCenter';

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

// interface HomepageProps {
//   content: Content;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/home.md`,
//     });
//     const rawContent = res.data.pages;

//     console.log('Raw Content:', JSON.stringify(rawContent, null, 2));

//     const seoTemp: SEO = {};
//     if (rawContent.seo) {
//       if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
//       if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
//       if (Array.isArray(rawContent.seo.keywords)) {
//         const filteredKeywords = rawContent.seo.keywords.filter(
//           (kw): kw is string => typeof kw === 'string'
//         );
//         if (filteredKeywords.length > 0) seoTemp.keywords = filteredKeywords;
//       }
//     }

//     const seo = Object.keys(seoTemp).length > 0 ? seoTemp : null;

//     const content: Content = {
//       title: rawContent.title || 'Default Title',
//       seo,
//       blocks: rawContent.blocks || [],
//     };

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
//           seo: { title: 'Error' },
//           blocks: [],
//         },
//         locale: locale || 'en',
//       },
//     };
//   }
// };

// const Homepage: NextPage<HomepageProps> = ({ content, locale }) => {
//   const renderBlock = (block: PagesBlocks, index: number) => {
//     console.log('Block:', JSON.stringify(block, null, 2));
//     console.log('Template Type:', block.__typename);

//     switch (block.__typename) {
//       case 'PagesBlocksTextBoxWithImageAndButton':
//         return <TextBoxWithImageAndButton key={index} {...block} />;
//       case 'PagesBlocksTextBoxWithImage':
//         return <TextBoxWithImage key={index} {...block} />;
//       case 'PagesBlocksTextBoxWithButton':
//         return <TextBoxWithButton key={index} {...block} />;
//       case 'PagesBlocksSimpleTextBox':
//         return <SimpleTextBox key={index} {...block} />;
//       case 'PagesBlocksTextBoxWithList':
//         return <TextBoxWithList key={index} {...block} />;
//       case 'PagesBlocksText':
//         return <TextBlock key={index} content={block.content} />;
//       case 'PagesBlocksImage':
//         return <ImageBlock key={index} src={block.src || ''} alt={block.alt || ''} />;
//       case 'PagesBlocksCardGroup':
//         return <CardGroup key={index} cards={block.cards} />;
//       case 'PagesBlocksImageCardGroup':
//         return <ImageCardGroup key={index} heading={block.heading} cards={block.cards} />;
//       case 'PagesBlocksTextWithImageBG':
//         return <TextWithImageBG key={index} {...block} />;
//       case 'PagesBlocksTextwVideo':
//         return <TextWithVideo key={index} {...block} />;
//       case 'PagesBlocksTextImageCenter':
//         return <TextImageCenter key={index} {...block} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? undefined}
//         additionalMetaTags={[
//           {
//             name: 'keywords',
//             content: content.seo?.keywords?.join(', ') || '',
//           },
//         ]}
//       />
//       <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <div className="space-y-40 md:space-y-[200px]">
//           {content.blocks?.map((block, index) => renderBlock(block, index))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;



















// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import { PagesBlocks } from '../tina/__generated__/types';
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
// import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
// import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
// import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
// import TextBoxWithList from '../components/textbox-variations/TextBoxWithList';
// import TextBlock from '../components/textbox-variations/TextBlock';
// import ImageBlock from '../components/textbox-variations/ImageBlock';
// import CardGroup from '../components/cardgroup';
// import ImageCardGroup from '../components/ImageCardGroup';
// import TextWithImageBG from '../components/textwithimgbg';
// import TextWithVideo from '../components/textwVideo';
// import TextImageCenter from '@/components/textbox-variations/TextImageCenter';
// import ContactSection from '../components/ContactSection';



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

// interface HomepageProps {
//   content: Content;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/home.md`,
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
//           title: rawContent.title || 'Default Title',
//           seo,
//           blocks: rawContent.blocks || []
//         },
//         locale: locale || 'en'
//       }
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         content: { title: 'Error', seo: { title: 'Error' }, blocks: [] },
//         locale: locale || 'en'
//       }
//     };
//   }
// };

// const Homepage: NextPage<HomepageProps> = ({ content, locale }) => {
//   const renderBlock = (block: PagesBlocks, i: number) => {
//     switch (block.__typename) {
//       case 'PagesBlocksTextBoxWithImageAndButton':
//         return <TextBoxWithImageAndButton key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithImage':
//         return <TextBoxWithImage key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithButton':
//         return <TextBoxWithButton key={i} {...block} />;
//       case 'PagesBlocksSimpleTextBox':
//         return <SimpleTextBox key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithList':
//         return <TextBoxWithList key={i} {...block} />;
//       case 'PagesBlocksText':
//         return <TextBlock key={i} content={block.content} />;
//       case 'PagesBlocksImage':
//         return <ImageBlock key={i} src={block.src || ''} alt={block.alt || ''} />;
//       case 'PagesBlocksCardGroup':
//         return <CardGroup key={i} cards={block.cards} />;
//       case 'PagesBlocksImageCardGroup':
//         return <ImageCardGroup key={i} heading={block.heading} cards={block.cards} />;
//       case 'PagesBlocksTextWithImageBG':
//         return <TextWithImageBG key={i} {...block} />;
//       case 'PagesBlocksTextwVideo':
//         return <TextWithVideo key={i} {...block} />;
//       case 'PagesBlocksTextImageCenter':
//         return <TextImageCenter key={i} {...block} />;
//       case 'PagesBlocksContactUs':
//         return <ContactSection key={i} {...block} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? undefined}
//         additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//       />
//       <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <div className="space-y-40 md:space-y-[200px]">
//           {content.blocks?.map(renderBlock)}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;















// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import { PagesBlocks } from '../tina/__generated__/types';
// import { createClient } from 'contentful';
// import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
// import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
// import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
// import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
// import TextBoxWithList from '../components/textbox-variations/TextBoxWithList';
// import TextBlock from '../components/textbox-variations/TextBlock';
// import ImageBlock from '../components/textbox-variations/ImageBlock';
// import CardGroup from '../components/cardgroup';
// import ImageCardGroup from '../components/ImageCardGroup';
// import TextWithImageBG from '../components/textwithimgbg';
// import TextWithVideo from '../components/textwVideo';
// import TextImageCenter from '@/components/textbox-variations/TextImageCenter';
// import ContactSection from '../components/ContactSection';
// import NewsSection from '../components/NewsSection';
// import { RichTextBodyFormat } from 'contentful-management/dist/typings/entities/comment';

// // Initialize Contentful client
// const contentfulClient = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID!,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
// });

// // Type definitions
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

// // Adjusted interface to match actual field names (e.g., titleEn, slugEn)
// interface NewsArticleFields {
//   titleEn?: string;
//   titleFr?: string;
//   titleAr?: string;
//   slugEn?: string;
//   slugFr?: string;
//   slugAr?: string;
//   excerptEn?: string;
//   excerptFr?: string;
//   exerptAr?: string; // Note: typo in Contentful field name
//   bodyEn?: RichTextBodyFormat; // Rich text JSON
//   bodyFr?: RichTextBodyFormat;
//   bodyAr?: RichTextBodyFormat;
//   imageAltEn?: string; // Rich text JSON
//   imageAltFr?: string;
//   imageAltAr?: string;
//   featuredImage?: { fields: { file: { url: string } } };
//   isHighlighted?: boolean;
//   publishedDate?: string;
//   eventType?: string;
// }

// interface NewsArticle {
//   title: string;
//   slug: string;
//   excerpt: string;
//   body: string;
//   image_alt: string;
//   featuredImage: string | null;
//   isHighlighted: boolean;
//   publishedDate: string;
//   eventType: string | null;
// }

// interface HomepageProps {
//   content: Content;
//   locale: string;
//   newsArticles: NewsArticle[];
// }

// // Fetch data in getStaticProps
// export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
//   try {
//     // Fetch TinaCMS page content
//     const res = await client.queries.pages({
//       relativePath: `${locale}/home.md`,
//     });
//     const rawContent = res.data.pages;

//     // Fetch news articles from Contentful
//     const newsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//       limit: 3,
//       order: ['-fields.publishedDate'] as const,
//     });

//     // Log raw data for debugging
//     //console.log('Raw Contentful response:', newsResponse.items.map(item => item.fields));

//     // Extract language suffix (e.g., 'en' from 'en-US')
//     const langSuffix = locale.split('-')[0].toLowerCase();
//     //console.log('Locale suffix:', langSuffix);

//     // Capitalize the locale suffix to match Contentful field naming (e.g., 'en' -> 'En')
//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase(); // 'En'

//     // Map news articles with locale-specific fields
//     const newsArticles = newsResponse.items.map((item) => {
//       const fields = item.fields as NewsArticleFields;
//       return {
//         title: fields[`title${localeKey}`] || 'No Title',
//         slug: fields[`slug${localeKey}`] || '',
//         excerpt: fields[`excerpt${localeKey}`] || 'No Excerpt',
//         body: fields[`body${localeKey}`] ? JSON.stringify(fields[`body${localeKey}`]) : '',
//         image_alt: documentToPlainTextString(fields[`imageAlt${localeKey}`] || {}),
//         featuredImage: fields.featuredImage?.fields?.file?.url || null,
//         isHighlighted: fields.isHighlighted || false,
//         publishedDate: fields.publishedDate || '',
//         eventType: fields.eventType || null,
//       };
//     });

//     // Log mapped articles for debugging
//     //console.log('Mapped articles:', newsArticles);

//     // Prepare SEO data
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
//           title: rawContent.title || 'Default Title',
//           seo,
//           blocks: rawContent.blocks || [],
//         },
//         locale: locale || 'en',
//         newsArticles,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         content: { title: 'Error', seo: { title: 'Error' }, blocks: [] },
//         locale: locale || 'en',
//         newsArticles: [],
//       },
//     };
//   }
// };

// // Homepage component
// const Homepage: NextPage<HomepageProps> = ({ content, locale, newsArticles }) => {
//   const renderBlock = (block: PagesBlocks, i: number) => {
//     switch (block.__typename) {
//       case 'PagesBlocksTextBoxWithImageAndButton':
//         return <TextBoxWithImageAndButton key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithImage':
//         return <TextBoxWithImage key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithButton':
//         return <TextBoxWithButton key={i} {...block} />;
//       case 'PagesBlocksSimpleTextBox':
//         return <SimpleTextBox key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithList':
//         return <TextBoxWithList key={i} {...block} />;
//       case 'PagesBlocksText':
//         return <TextBlock key={i} content={block.content} />;
//       case 'PagesBlocksImage':
//         return <ImageBlock key={i} src={block.src || ''} alt={block.alt || ''} />;
//       case 'PagesBlocksCardGroup':
//         return <CardGroup key={i} cards={block.cards} />;
//       case 'PagesBlocksImageCardGroup':
//         return <ImageCardGroup key={i} heading={block.heading} cards={block.cards} />;
//       case 'PagesBlocksTextWithImageBG':
//         return <TextWithImageBG key={i} {...block} />;
//       case 'PagesBlocksTextwVideo':
//         return <TextWithVideo key={i} {...block} />;
//       case 'PagesBlocksTextImageCenter':
//         return <TextImageCenter key={i} {...block} />;
//       case 'PagesBlocksContactUs':
//         return <ContactSection key={i} {...block} />;
//       case 'PagesBlocksNewsSection':
//         return <NewsSection key={i} sectionTitle={block.sectionTitle} newsArticles={newsArticles} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? undefined}
//         additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//       />
//       <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <div className="space-y-20 md:space-y-[200px]">
//           {content.blocks?.map(renderBlock)}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;






















// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import { PagesBlocks } from '../tina/__generated__/types';
// import { createClient } from 'contentful';
// import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
// import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
// import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
// import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
// import TextBoxWithList from '../components/textbox-variations/TextBoxWithList';
// import TextBlock from '../components/textbox-variations/TextBlock';
// import ImageBlock from '../components/textbox-variations/ImageBlock';
// import CardGroup from '../components/cardgroup';
// import ImageCardGroup from '../components/ImageCardGroup';
// import TextWithImageBG from '../components/textwithimgbg';
// import TextWithVideo from '../components/textwVideo';
// import TextImageCenter from '@/components/textbox-variations/TextImageCenter';
// import ContactSection from '../components/ContactSection';
// import NewsSection from '../components/NewsSection';
// import { RichTextBodyFormat } from 'contentful-management/dist/typings/entities/comment';
// import { SlugMapProvider } from '../lib/SlugMapContext';

// const contentfulClient = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID!,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
// });

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

// interface NewsArticleFields {
//   titleEn?: string;
//   titleFr?: string;
//   titleAr?: string;
//   slugEn?: string;
//   slugFr?: string;
//   slugAr?: string;
//   excerptEn?: string;
//   excerptFr?: string;
//   exerptAr?: string;
//   bodyEn?: RichTextBodyFormat;
//   bodyFr?: RichTextBodyFormat;
//   bodyAr?: RichTextBodyFormat;
//   imageAltEn?: string;
//   imageAltFr?: string;
//   imageAltAr?: string;
//   featuredImage?: { fields: { file: { url: string } } };
//   isHighlighted?: boolean;
//   publishedDate?: string;
//   eventType?: string;
// }

// interface NewsArticle {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   body: string;
//   image_alt: string;
//   featuredImage: string | null;
//   isHighlighted: boolean;
//   publishedDate: string;
//   eventType: string | null;
// }

// interface HomepageProps {
//   content: Content;
//   locale: string;
//   newsArticles: NewsArticle[];
//   slugMap: { [id: string]: { [locale: string]: string } };
// }

// export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/home.md`,
//     });
//     const rawContent = res.data.pages;

//     const newsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//       limit: 3,
//       order: ['-fields.publishedDate'] as const,
//     });

//     console.log('Raw Contentful response:', newsResponse.items.map(item => item.fields));

//     const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
//     console.log('Locale suffix:', langSuffix);

//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

//     const newsArticles = newsResponse.items.map((item) => {
//       const fields = item.fields as NewsArticleFields;
//       const excerpt = localeKey === 'Ar' ? fields.exerptAr : fields[`excerpt${localeKey}`];
//       console.log(`Processing article ID: ${item.sys.id}, Locale: ${localeKey}, Excerpt: ${excerpt}`);
//       return {
//         id: item.sys.id,
//         title: fields[`title${localeKey}`] || 'No Title',
//         slug: fields[`slug${localeKey}`] || '',
//         excerpt: excerpt || 'No Excerpt',
//         body: fields[`body${localeKey}`] ? JSON.stringify(fields[`body${localeKey}`]) : '',
//         image_alt: documentToPlainTextString(fields[`imageAlt${localeKey}`] || {}),
//         featuredImage: fields.featuredImage?.fields?.file?.url || null,
//         isHighlighted: fields.isHighlighted || false,
//         publishedDate: fields.publishedDate || '',
//         eventType: fields.eventType || null,
//       };
//     });

//     const slugMap = newsResponse.items.reduce((map, item) => {
//       const fields = item.fields as NewsArticleFields;
//       map[item.sys.id] = {
//         en: fields.slugEn || '',
//         fr: fields.slugFr || '',
//         ar: fields.slugAr || '',
//       };
//       return map;
//     }, {} as { [id: string]: { [locale: string]: string } });

//     // console.log('Slug Map:', JSON.stringify(slugMap, null, 2));

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
//           title: rawContent.title || 'Default Title',
//           seo,
//           blocks: rawContent.blocks || [],
//         },
//         locale: locale || 'en',
//         newsArticles,
//         slugMap,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         content: { title: 'Error', seo: { title: 'Error' }, blocks: [] },
//         locale: locale || 'en',
//         newsArticles: [],
//         slugMap: {},
//       },
//     };
//   }
// };

// const Homepage: NextPage<HomepageProps> = ({ content, locale, newsArticles, slugMap }) => {
//   const renderBlock = (block: PagesBlocks, i: number) => {
//     switch (block.__typename) {
//       case 'PagesBlocksTextBoxWithImageAndButton':
//         return <TextBoxWithImageAndButton key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithImage':
//         return <TextBoxWithImage key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithButton':
//         return <TextBoxWithButton key={i} {...block} />;
//       case 'PagesBlocksSimpleTextBox':
//         return <SimpleTextBox key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithList':
//         return <TextBoxWithList key={i} {...block} />;
//       case 'PagesBlocksText':
//         return <TextBlock key={i} content={block.content} />;
//       case 'PagesBlocksImage':
//         return <ImageBlock key={i} src={block.src || ''} alt={block.alt || ''} />;
//       case 'PagesBlocksCardGroup':
//         return <CardGroup key={i} cards={block.cards} />;
//       case 'PagesBlocksImageCardGroup':
//         return <ImageCardGroup key={i} heading={block.heading} cards={block.cards} />;
//       case 'PagesBlocksTextWithImageBG':
//         return <TextWithImageBG key={i} {...block} />;
//       case 'PagesBlocksTextwVideo':
//         return <TextWithVideo key={i} {...block} />;
//       case 'PagesBlocksTextImageCenter':
//         return <TextImageCenter key={i} {...block} />;
//       case 'PagesBlocksContactUs':
//         return <ContactSection key={i} {...block} />;
//       case 'PagesBlocksNewsSection':
//         return <NewsSection key={i} sectionTitle={block.sectionTitle} newsArticles={newsArticles} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <SlugMapProvider slugMap={slugMap}>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? undefined}
//         additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//       />
//       <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <div className="space-y-20 md:space-y-[200px]">
//           {content.blocks?.map(renderBlock)}
//         </div>
//       </div>
//     </SlugMapProvider>
//   );
// };

// export default Homepage;









// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import { PagesBlocks } from '../tina/__generated__/types';
// import { createClient } from 'contentful';
// import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
// import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
// import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
// import CardGroup from '../components/cardgroup';
// import ImageCardGroup from '../components/ImageCardGroup';
// import TextWithImageBG from '../components/textwithimgbg';
// import TextWithVideo from '../components/textwVideo';
// import ContactSection from '../components/ContactSection';
// import NewsSection from '../components/NewsSection';
// import { RichTextBodyFormat } from 'contentful-management/dist/typings/entities/comment';
// import { SlugMapProvider } from '../lib/SlugMapContext';

// const contentfulClient = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID!,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
// });

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

// interface NewsArticleFields {
//   titleEn?: string;
//   titleFr?: string;
//   titleAr?: string;
//   slugEn?: string;
//   slugFr?: string;
//   slugAr?: string;
//   excerptEn?: string;
//   excerptFr?: string;
//   exerptAr?: string;
//   bodyEn?: RichTextBodyFormat;
//   bodyFr?: RichTextBodyFormat;
//   bodyAr?: RichTextBodyFormat;
//   imageAltEn?: string;
//   imageAltFr?: string;
//   imageAltAr?: string;
//   featuredImage?: { fields: { file: { url: string } } };
//   isHighlighted?: boolean;
//   publishedDate?: string;
//   eventType?: string;
// }

// interface NewsArticle {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   body: string;
//   image_alt: string;
//   featuredImage: string | null;
//   isHighlighted: boolean;
//   publishedDate: string;
//   eventType: string | null;
// }

// interface HomepageProps {
//   content: Content;
//   locale: string;
//   newsArticles: NewsArticle[];
//   slugMap: { [id: string]: { [locale: string]: string } };
// }

// export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/home.md`,
//     });
//     const rawContent = res.data.pages;

//     const newsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//       limit: 3,
//       order: ['-fields.publishedDate'] as const,
//     });

//     // console.log('Raw Contentful response:', newsResponse.items.map(item => item.fields));

//     const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
//     // console.log('Locale suffix:', langSuffix);

//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

//     const newsArticles = newsResponse.items.map((item) => {
//       const fields = item.fields as NewsArticleFields;
//       const excerpt = localeKey === 'Ar' ? fields.exerptAr : fields[`excerpt${localeKey}`];
//       // console.log(`Processing article ID: ${item.sys.id}, Locale: ${localeKey}, Excerpt: ${excerpt}`);
//       return {
//         id: item.sys.id,
//         title: fields[`title${localeKey}`] || 'No Title',
//         slug: fields[`slug${localeKey}`] || '',
//         excerpt: excerpt || 'No Excerpt',
//         body: fields[`body${localeKey}`] ? JSON.stringify(fields[`body${localeKey}`]) : '',
//         image_alt: documentToPlainTextString(fields[`imageAlt${localeKey}`] || {}),
//         featuredImage: fields.featuredImage?.fields?.file?.url || null,
//         isHighlighted: fields.isHighlighted || false,
//         publishedDate: fields.publishedDate || '',
//         eventType: fields.eventType || null,
//       };
//     });

//     const slugMap = newsResponse.items.reduce((map, item) => {
//       const fields = item.fields as NewsArticleFields;
//       map[item.sys.id] = {
//         en: fields.slugEn || '',
//         fr: fields.slugFr || '',
//         ar: fields.slugAr || '',
//       };
//       return map;
//     }, {} as { [id: string]: { [locale: string]: string } });

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
//           title: rawContent.title || 'Default Title',
//           seo,
//           blocks: rawContent.blocks || [],
//         },
//         locale: locale || 'en',
//         newsArticles,
//         slugMap,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         content: { title: 'Error', seo: { title: 'Error' }, blocks: [] },
//         locale: locale || 'en',
//         newsArticles: [],
//         slugMap: {},
//       },
//     };
//   }
// };

// const Homepage: NextPage<HomepageProps> = ({ content, locale, newsArticles, slugMap }) => {
//   const renderBlock = (block: PagesBlocks, i: number) => {
//     switch (block.__typename) {
//       case 'PagesBlocksTextwVideo':
//         return <TextWithVideo key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithImageAndButton':
//         return <TextBoxWithImageAndButton key={i} {...block} />;
//       case 'PagesBlocksTextBoxWithButton':
//         return <TextBoxWithButton key={i} {...block} />;
//       case 'PagesBlocksImageCardGroup':
//         return <ImageCardGroup key={i} heading={block.heading} cards={block.cards} />;
//       case 'PagesBlocksCardGroup':
//         return <CardGroup key={i} cards={block.cards} />;
//       case 'PagesBlocksTextWithImageBG':
//         return <TextWithImageBG key={i} {...block} />;
//       case 'PagesBlocksSimpleTextBox':
//         return <SimpleTextBox key={i} {...block} />;
//       case 'PagesBlocksNewsSection':
//         return <NewsSection key={i} sectionTitle={block.sectionTitle} newsArticles={newsArticles} />;
//       case 'PagesBlocksContactUs':
//         return <ContactSection key={i} {...block} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <SlugMapProvider slugMap={slugMap}>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? undefined}
//         additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//       />
//       <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <div className="space-y-20 md:space-y-[200px]">
//           {content.blocks?.map(renderBlock)}
//         </div>
//       </div>
//     </SlugMapProvider>
//   );
// };

// export default Homepage;
















import { GetStaticProps, NextPage } from 'next';

import { client } from '../tina/__generated__/client';
import { PagesBlocks } from '../tina/__generated__/types';
import { createClient } from 'contentful';
import { RichTextBodyFormat } from 'contentful-management/dist/typings/entities/comment';
import { SlugMapProvider } from '../lib/SlugMapContext';
import SEOComponent from '../components/SEOComponent';
import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
import TextBoxWithButton from '../components/textbox-variations/TextBoxWithButton';
import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
import CardGroup from '../components/cardgroup';
import ImageCardGroup from '../components/ImageCardGroup';
import TextWithImageBG from '../components/textwithimgbg';
import TextWithVideo from '../components/textwVideo';
import ContactSection from '../components/ContactSection';
import NewsSection from '../components/NewsSection';

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

type SEO = {
  title?: string;
  description?: string;

};

interface Content {
  title: string;
  seo: SEO | null;
  blocks?: PagesBlocks[];
}

interface NewsArticleFields {
  titleEn?: string;
  titleFr?: string;
  titleAr?: string;
  slugEn?: string;
  slugFr?: string;
  slugAr?: string;
  excerptEn?: string;
  excerptFr?: string;
  excerptAr?: string;
  bodyEn?: RichTextBodyFormat;
  bodyFr?: RichTextBodyFormat;
  bodyAr?: RichTextBodyFormat;
  imageAltEn?: string;
  imageAltFr?: string;
  imageAltAr?: string;
  featuredImage?: { fields: { file: { url: string } } };
  isHighlighted?: boolean;
  publishedDate?: string;
  eventType?: string;
}

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  image_alt: string;
  featuredImage: string | null;
  isHighlighted: boolean;
  publishedDate: string;
  eventType: string | null;
}

interface HomepageProps {
  content: Content;
  locale: string;
  newsArticles: NewsArticle[];
  slugMap: { [id: string]: { [locale: string]: string } };
}

export const getStaticProps: GetStaticProps<HomepageProps> = async ({ locale }) => {
  try {
    const res = await client.queries.pages({
      relativePath: `${locale}/home.md`,
    });
    const rawContent = res.data.pages;

    const newsResponse = await contentfulClient.getEntries({
      content_type: 'newsArticle',
      limit: 3,
      order: ['-fields.publishedDate'],
    });

    const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
    const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

    const newsArticles = newsResponse.items.map((item) => {
      const fields = item.fields as NewsArticleFields;
      const excerpt = localeKey === 'Ar' ? fields.excerptAr : fields[`excerpt${localeKey}`];
      return {
        id: item.sys.id,
        title: fields[`title${localeKey}`] || 'No Title',
        slug: fields[`slug${localeKey}`] || '',
        excerpt: excerpt || 'No Excerpt',
        body: fields[`body${localeKey}`] ? JSON.stringify(fields[`body${localeKey}`]) : '',
        image_alt: fields[`imageAlt${localeKey}`] || 'News Image',
        featuredImage: fields.featuredImage?.fields?.file?.url || null,
        isHighlighted: fields.isHighlighted || false,
        publishedDate: fields.publishedDate || '',
        eventType: fields.eventType || null,
      };
    });

    const slugMap = newsResponse.items.reduce((map, item) => {
      const fields = item.fields as NewsArticleFields;
      map[item.sys.id] = {
        en: fields.slugEn || '',
        fr: fields.slugFr || '',
        ar: fields.slugAr || '',
      };
      return map;
    }, {} as { [id: string]: { [locale: string]: string } });

    const seoTemp: SEO = {};
    if (rawContent.seo) {
      if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
      if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
     
    }
    const seo = Object.keys(seoTemp).length ? seoTemp : null;

    return {
      props: {
        content: {
          title: rawContent.title || 'Default Title',
          seo,
          blocks: rawContent.blocks || [],
        },
        locale: locale || 'en',
        newsArticles,
        slugMap,
      },
      revalidate: 86400, // Add ISR: regenerate every 24 hours
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        content: { title: 'Error', seo: { title: 'Error' }, blocks: [] },
        locale: locale || 'en',
        newsArticles: [],
        slugMap: {},
      },
    };
  }
};

const Homepage: NextPage<HomepageProps> = ({ content, locale, newsArticles, slugMap }) => {
  const renderBlock = (block: PagesBlocks, i: number) => {
    switch (block.__typename) {
      case 'PagesBlocksTextwVideo':
        return <TextWithVideo key={i} {...block} />;
      case 'PagesBlocksTextBoxWithImageAndButton':
        return <TextBoxWithImageAndButton key={i} {...block} />;
      case 'PagesBlocksTextBoxWithButton':
        return <TextBoxWithButton key={i} {...block} />;
      case 'PagesBlocksImageCardGroup':
        return <ImageCardGroup key={i} heading={block.heading} cards={block.cards} />;
      case 'PagesBlocksCardGroup':
        return <CardGroup key={i} cards={block.cards} />;
      case 'PagesBlocksTextWithImageBG':
        return <TextWithImageBG key={i} {...block} />;
      case 'PagesBlocksSimpleTextBox':
        return <SimpleTextBox key={i} {...block} />;
      case 'PagesBlocksNewsSection':
        return <NewsSection key={i} sectionTitle={block.sectionTitle} newsArticles={newsArticles} />;
      case 'PagesBlocksContactUs':
        return <ContactSection key={i} {...block} />;
      default:
        return null;
    }
  };

  return (
    <SlugMapProvider slugMap={slugMap}>
      <SEOComponent
  title={content.seo?.title ?? content.title}
  description={content.seo?.description ?? 'Welcome to FENOR, the National Federation of Gold Factories.'}
  canonicalPath={`/${locale}`}
  
  structuredData={{
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FENOR',
    url: 'https://www.fenor.org',
    logo: '/fenor-website/public/favicon-32x32.png',
  }}
/>
      <div className="homepage" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="space-y-20 md:space-y-[200px]">
          {content.blocks?.map(renderBlock)}
        </div>
      </div>
    </SlugMapProvider>
  );
};

export default Homepage;
