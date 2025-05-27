// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { createClient } from 'contentful';
// import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
// import Link from 'next/link';
// import NewsCard from '../components/NewsCard';
// import Button from '../components/Button';
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
// import TextImageCenter from '../components/textbox-variations/TextImageCenter';
// import ContactSection from '../components/ContactSection';
// import { RichTextBodyFormat } from 'contentful-management/dist/typings/entities/comment';

// // Type definitions for News Article
// interface NewsArticleFields {
//   titleEn?: string;
//   titleFr?: string;
//   titleAr?: string;
//   slugEn?: string;
//   slugFr?: string;
//   slugAr?: string;
//   excerptEn?: string;
//   excerptFr?: string;
//   excerptAr?: string; // Note: typo in Contentful field name
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

// interface PressPageProps {
//   content: {
//     title: string;
//     blocks: PagesBlocks[];
//   };
//   newsArticles: NewsArticle[];
//   locale: string;
// }

// // Fetch data in getStaticProps
// export const getStaticProps: GetStaticProps<PressPageProps> = async ({ locale }) => {
//   // Fetch TinaCMS "Press.md"
//   let rawContent;
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/Press.md`,
//     });
//     rawContent = res.data.pages;
//   } catch (e) {
//     console.error('Tina fetch error:', e);
//     rawContent = { title: 'Press', blocks: [] };
//   }

//   try {
//     // Extract language suffix (e.g., 'en' from 'en-US')
//     const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
    
//     // Capitalize the locale suffix to match Contentful field naming (e.g., 'en' -> 'En')
//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase(); // 'En'

//     // Fetch news articles from Contentful
//     const contentfulClient = createClient({
//       space: process.env.CONTENTFUL_SPACE_ID!,
//       accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
//     });

//     const newsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//       order: ['-fields.publishedDate'],
//       limit: 100, // Adjust as needed
//     });

//     // Map news articles with locale-specific fields
//     const newsArticles = newsResponse.items.map((item) => {
//       const fields = item.fields as NewsArticleFields;
//       return {
//         id: item.sys.id,
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

//     return {
//       props: {
//         content: {
//           title: rawContent.title || 'Press',
//           blocks: rawContent.blocks || [],
//         },
//         newsArticles,
//         locale: locale || 'en',
//       },
//       revalidate: 60, // Regenerate page every 60 seconds
//     };
//   } catch (error) {
//     console.error('Error fetching press articles:', error);
//     return {
//       props: {
//         content: {
//           title: 'Press',
//           blocks: [],
//         },
//         newsArticles: [],
//         locale: locale || 'en',
//       },
//     };
//   }
// };

// // Press Page component
// const PressPage: NextPage<PressPageProps> = ({ content, newsArticles, locale }) => {
//   // Function to render TinaCMS blocks based on their type
//   const renderBlock = (block: PagesBlocks, index: number) => {
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
//       case 'PagesBlocksContactUs':
//         return <ContactSection key={index} {...block} />;
//       default:
//         return null;
//     }
//   };

//   // Get the first highlighted article (if any) and the rest as regular articles
//   const highlightedArticle = newsArticles.find((article) => article.isHighlighted);
//   const regularArticles = newsArticles.filter((article) => !article.isHighlighted);

//   return (
//     <>
//       <NextSeo
//         title={content.title || 'Press & News'}
//         description="Latest news and press releases"
//       />
//       <div className="press-page" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <div className="container mx-auto px-4 py-12">
//           {/* Render the title from TinaCMS */}
        

//           {/* Render TinaCMS blocks */}
//           {content.blocks.length > 0 && (
//             <div className="space-y-20">
//               {content.blocks.map((block, index) => renderBlock(block, index))}
//             </div>
//           )}

//           {/* Render Contentful news articles */}
//           <section className="mt-12">
       

//             {newsArticles.length === 0 ? (
//               <p className="text-center text-gray-500">No articles found.</p>
//             ) : (
//               <>
//                 {/* Highlighted Article (Full-Width with Background Image) */}
//                 {highlightedArticle && (
//                   <div className="mb-12 w-full mt-12 md:mt-[120px]">
//                     <div
//                       className="relative h-[350px] md:h-[500px] bg-cover bg-center rounded-[30px] p-4 md:p-8 flex flex-col justify-end"
//                       style={{
//                         backgroundImage: highlightedArticle.featuredImage
//                           ? `url(https:${highlightedArticle.featuredImage})`
//                           : 'none',
//                       }}
//                     >
//                       {/* Dark overlay for text readability */}
//                       <div className="absolute inset-0 bg-black/50 rounded-[30px]"></div>
//                       <div className="relative z-10">
//                         {highlightedArticle.eventType && (
//                           <span className="inline-block bg-black text-yellow-500 uppercase px-2 py-1 rounded text-[16px] sm:text-[20px] mb-4">
//                             {highlightedArticle.eventType}
//                           </span>
//                         )}
//                         <p className="text-white text-[16px] sm:text-[20px] mb-4">
//                           {new Date(highlightedArticle.publishedDate)
//                             .toLocaleDateString('en-US', {
//                               month: 'long',
//                               day: '2-digit',
//                               year: 'numeric',
//                             })
//                             .replace(/ /g, '-')
//                             .replace(',', '')}
//                         </p>
//                         <h3 className="font-semibold text-white text-[20px] sm:text-[24px] md:text-[28px] mb-6">
//                           {highlightedArticle.title}
//                         </h3>
//                         <Link href={`/press/${highlightedArticle.slug}`}>
//                           <Button className="cursor-pointer">
//                             Read More
//                           </Button>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Regular Articles (3-Column Grid, Clickable) */}
//                 {regularArticles.length > 0 && (
//                   <div className="grid md:grid-cols-3 gap-8">
//                     {regularArticles.map((article) => (
//                       <Link key={article.id} href={`/press/${article.slug}`}>
//                         <NewsCard
//                           title={article.title}
//                           excerpt={article.excerpt}
//                           imageUrl={article.featuredImage || '/placeholder-image.jpg'}
//                           eventType={article.eventType}
//                           publishedDate={article.publishedDate}
//                           isHighlighted={article.isHighlighted}
//                         />
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}
//           </section>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PressPage;



















// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { createClient } from 'contentful';
// import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
// import Link from 'next/link';
// import NewsCard from '../components/NewsCard';
// import Button from '../components/Button';
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
// import TextImageCenter from '../components/textbox-variations/TextImageCenter';
// import ContactSection from '../components/ContactSection';
// import { RichTextBodyFormat } from 'contentful-management/dist/typings/entities/comment';
// import { SlugMapProvider } from '../lib/SlugMapContext';

// interface NewsArticleFields {
//   titleEn?: string;
//   titleFr?: string;
//   titleAr?: string;
//   slugEn?: string;
//   slugFr?: string;
//   slugAr?: string;
//   excerptEn?: string;
//   excerptFr?: string;
//   excerptAr?: string;
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

// interface PressPageProps {
//   content: {
//     title: string;
//     blocks: PagesBlocks[];
//   };
//   newsArticles: NewsArticle[];
//   slugMap: { [id: string]: { [locale: string]: string } };
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<PressPageProps> = async ({ locale }) => {
//   let rawContent;
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/Press.md`,
//     });
//     rawContent = res.data.pages;
//   } catch (e) {
//     console.error('Tina fetch error:', e);
//     rawContent = { title: 'Press', blocks: [] };
//   }

//   try {
//     const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

//     const contentfulClient = createClient({
//       space: process.env.CONTENTFUL_SPACE_ID!,
//       accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
//     });

//     const newsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//       order: ['-fields.publishedDate'],
//       limit: 100,
//     });

//     const newsArticles = newsResponse.items.map((item) => {
//       const fields = item.fields as NewsArticleFields;
//       const excerpt = localeKey === 'Ar' ? fields.excerptAr : fields[`excerpt${localeKey}`];
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

//     return {
//       props: {
//         content: {
//           title: rawContent.title || 'Press',
//           blocks: rawContent.blocks || [],
//         },
//         newsArticles,
//         slugMap,
//         locale: locale || 'en',
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error('Error fetching press articles:', error);
//     return {
//       props: {
//         content: {
//           title: 'Press',
//           blocks: [],
//         },
//         newsArticles: [],
//         slugMap: {},
//         locale: locale || 'en',
//       },
//     };
//   }
// };

// const PressPage: NextPage<PressPageProps> = ({ content, newsArticles, slugMap, locale }) => {
//   const renderBlock = (block: PagesBlocks, index: number) => {
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
//       case 'PagesBlocksContactUs':
//         return <ContactSection key={index} {...block} />;
//       default:
//         return null;
//     }
//   };

//   const highlightedArticle = newsArticles.find((article) => article.isHighlighted);
//   const regularArticles = newsArticles.filter((article) => !article.isHighlighted);

//   return (
//     <SlugMapProvider slugMap={slugMap}>
//       <NextSeo
//         title={content.title || 'Press & News'}
//         description="Latest news and press releases"
//       />
//       <div className="press-page" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <div className="container mx-auto px-4 py-12">
//           {content.blocks.length > 0 && (
//             <div className="space-y-20">
//               {content.blocks.map((block, index) => renderBlock(block, index))}
//             </div>
//           )}

//           <section className="mt-12">
//             {newsArticles.length === 0 ? (
//               <p className="text-center text-gray-500">No articles found.</p>
//             ) : (
//               <>
//                 {highlightedArticle && (
//                   <div className="mb-12 w-full mt-12 md:mt-[120px]">
//                     <div
//                       className="relative h-[350px] md:h-[500px] bg-cover bg-center rounded-[30px] p-4 md:p-8 flex flex-col justify-end"
//                       style={{
//                         backgroundImage: highlightedArticle.featuredImage
//                           ? `url(https:${highlightedArticle.featuredImage})`
//                           : 'none',
//                       }}
//                     >
//                       <div className="absolute inset-0 bg-black/50 rounded-[30px]"></div>
//                       <div className="relative z-10">
//                         {highlightedArticle.eventType && (
//                           <span className="inline-block bg-black text-yellow-500 uppercase px-2 py-1 rounded text-[16px] sm:text-[20px] mb-4">
//                             {highlightedArticle.eventType}
//                           </span>
//                         )}
//                         <p className="text-white text-[16px] sm:text-[20px] mb-4">
//                           {new Date(highlightedArticle.publishedDate)
//                             .toLocaleDateString('en-US', {
//                               month: 'long',
//                               day: '2-digit',
//                               year: 'numeric',
//                             })
//                             .replace(/ /g, '-')
//                             .replace(',', '')}
//                         </p>
//                         <h3 className="font-semibold text-white text-[20px] sm:text-[24px] md:text-[28px] mb-6">
//                           {highlightedArticle.title}
//                         </h3>
//                         <Link href={`/press/${highlightedArticle.slug}`}>
//                           <Button className="cursor-pointer">
//                             Read More
//                           </Button>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {regularArticles.length > 0 && (
//                   <div className="grid md:grid-cols-3 gap-8">
//                     {regularArticles.map((article) => (
//                       <Link key={article.id} href={`/press/${article.slug}`}>
//                         <NewsCard
//                           title={article.title}
//                           excerpt={article.excerpt}
//                           imageUrl={article.featuredImage || '/placeholder-image.jpg'}
//                           eventType={article.eventType}
//                           publishedDate={article.publishedDate}
//                           isHighlighted={article.isHighlighted}
//                         />
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}
//           </section>
//         </div>
//       </div>
//     </SlugMapProvider>
//   );
// };

// export default PressPage;























// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { createClient } from 'contentful';
// import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
// import Link from 'next/link';
// import NewsCard from '../components/NewsCard';
// import Button from '../components/Button';
// import { client } from '../tina/__generated__/client';
// import { PagesBlocks } from '../tina/__generated__/types';
// import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
// import { RichTextBodyFormat } from 'contentful-management/dist/typings/entities/comment';
// import { SlugMapProvider } from '../lib/SlugMapContext';

// interface NewsArticleFields {
//   titleEn?: string;
//   titleFr?: string;
//   titleAr?: string;
//   slugEn?: string;
//   slugFr?: string;
//   slugAr?: string;
//   excerptEn?: string;
//   excerptFr?: string;
//   excerptAr?: string;
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

// interface PressPageProps {
//   content: {
//     title: string;
//     blocks: PagesBlocks[];
//   };
//   newsArticles: NewsArticle[];
//   slugMap: { [id: string]: { [locale: string]: string } };
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<PressPageProps> = async ({ locale }) => {
//   let rawContent;
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/Press.md`,
//     });
//     rawContent = res.data.pages;
//   } catch (e) {
//     console.error('Tina fetch error:', e);
//     rawContent = { title: 'Press', blocks: [] };
//   }

//   try {
//     const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

//     const contentfulClient = createClient({
//       space: process.env.CONTENTFUL_SPACE_ID!,
//       accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
//     });

//     const newsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//       order: ['-fields.publishedDate'],
//       limit: 100,
//     });

//     const newsArticles = newsResponse.items.map((item) => {
//       const fields = item.fields as NewsArticleFields;
//       const excerpt = localeKey === 'Ar' ? fields.excerptAr : fields[`excerpt${localeKey}`];
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

//     return {
//       props: {
//         content: {
//           title: rawContent.title || 'Press',
//           blocks: rawContent.blocks || [],
//         },
//         newsArticles,
//         slugMap,
//         locale: locale || 'en',
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error('Error fetching press articles:', error);
//     return {
//       props: {
//         content: {
//           title: 'Press',
//           blocks: [],
//         },
//         newsArticles: [],
//         slugMap: {},
//         locale: locale || 'en',
//       },
//     };
//   }
// };

// const PressPage: NextPage<PressPageProps> = ({ content, newsArticles, slugMap, locale }) => {
//   const renderBlock = (block: PagesBlocks, index: number) => {
//     if (block.__typename === 'PagesBlocksTextBoxWithImage') {
//       return <TextBoxWithImage key={index} {...block} />;
//     }
//     return null;
//   };

//   const highlightedArticle = newsArticles.find((article) => article.isHighlighted);
//   const regularArticles = newsArticles.filter((article) => !article.isHighlighted);

//   return (
//     <SlugMapProvider slugMap={slugMap}>
//       <NextSeo
//         title={content.title || 'Press & News'}
//         description="Latest news and press releases"
//       />
//       <div className="press-page" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <div className="container mx-auto px-4 py-12">
//           {content.blocks.length > 0 && (
//             <div className="space-y-20">
//               {content.blocks.map((block, index) => renderBlock(block, index))}
//             </div>
//           )}

//           <section className="mt-12">
//             {newsArticles.length === 0 ? (
//               <p className="text-center text-gray-500">No articles found.</p>
//             ) : (
//               <>
//                 {highlightedArticle && (
//                   <div className="mb-12 w-full mt-12 md:mt-[120px]">
//                     <div
//                       className="relative h-[350px] md:h-[500px] bg-cover bg-center rounded-[30px] p-4 md:p-8 flex flex-col justify-end"
//                       style={{
//                         backgroundImage: highlightedArticle.featuredImage
//                           ? `url(https:${highlightedArticle.featuredImage})`
//                           : 'none',
//                       }}
//                     >
//                       <div className="absolute inset-0 bg-black/50 rounded-[30px]"></div>
//                       <div className="relative z-10">
//                         {highlightedArticle.eventType && (
//                           <span className="inline-block bg-black text-yellow-500 uppercase px-2 py-1 rounded text-[16px] sm:text-[20px] mb-4">
//                             {highlightedArticle.eventType}
//                           </span>
//                         )}
//                         <p className="text-white text-[16px] sm:text-[20px] mb-4">
//                           {new Date(highlightedArticle.publishedDate)
//                             .toLocaleDateString('en-US', {
//                               month: 'long',
//                               day: '2-digit',
//                               year: 'numeric',
//                             })
//                             .replace(/ /g, '-')
//                             .replace(',', '')}
//                         </p>
//                         <h3 className="font-semibold text-white text-[20px] sm:text-[24px] md:text-[28px] mb-6">
//                           {highlightedArticle.title}
//                         </h3>
//                         <Link href={`/press/${highlightedArticle.slug}`}>
//                           <Button className="cursor-pointer">
//                             Read More
//                           </Button>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {regularArticles.length > 0 && (
//                   <div className="grid md:grid-cols-3 gap-8">
//                     {regularArticles.map((article) => (
//                       <Link key={article.id} href={`/press/${article.slug}`}>
//                         <NewsCard
//                           title={article.title}
//                           excerpt={article.excerpt}
//                           imageUrl={article.featuredImage || '/placeholder-image.jpg'}
//                           eventType={article.eventType}
//                           publishedDate={article.publishedDate}
//                           isHighlighted={article.isHighlighted}
//                         />
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}
//           </section>
//         </div>
//       </div>
//     </SlugMapProvider>
//   );
// };

// export default PressPage;













import { GetStaticProps, NextPage } from 'next';
import { createClient } from 'contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import Link from 'next/link';
import NewsCard from '../components/NewsCard';
import Button from '../components/Button';
import { client } from '../tina/__generated__/client';
import { PagesBlocks } from '../tina/__generated__/types';
import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
import { RichTextBodyFormat } from 'contentful-management/dist/typings/entities/comment';
import { SlugMapProvider } from '../lib/SlugMapContext';
import SEOComponent from '../components/SEOComponent';
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

interface PressPageProps {
  content: {
    title: string;
    blocks: PagesBlocks[];
  };
  newsArticles: NewsArticle[];
  slugMap: { [id: string]: { [locale: string]: string } };
  locale: string;
}

export const getStaticProps: GetStaticProps<PressPageProps> = async ({ locale }) => {
  let rawContent;
  try {
    const res = await client.queries.pages({
      relativePath: `${locale}/Press.md`,
    });
    rawContent = res.data.pages;
  } catch (e) {
    console.error('Tina fetch error:', e);
    rawContent = { title: 'Press', blocks: [] };
  }

  try {
    const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
    const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

    const contentfulClient = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const newsResponse = await contentfulClient.getEntries({
      content_type: 'newsArticle',
      order: ['-fields.publishedDate'],
      limit: 100,
    });

    const newsArticles = newsResponse.items.map((item) => {
      const fields = item.fields as NewsArticleFields;
      const excerpt = localeKey === 'Ar' ? fields.excerptAr : fields[`excerpt${localeKey}`];
      return {
        id: item.sys.id,
        title: fields[`title${localeKey}`] || 'No Title',
        slug: fields[`slug${localeKey}`] || '',
        excerpt: excerpt || 'No Excerpt',
        body: fields[`body${localeKey}`] ? JSON.stringify(fields[`body${localeKey}`]) : '',
        image_alt: documentToPlainTextString(fields[`imageAlt${localeKey}`] || {}),
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

    return {
      props: {
        content: {
          title: rawContent.title || 'Press',
          blocks: rawContent.blocks || [],
        },
        newsArticles,
        slugMap,
        locale: locale || 'en',
      },
      revalidate: 60, // Cache the page and revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching press articles:', error);
    return {
      props: {
        content: {
          title: 'Press',
          blocks: [],
        },
        newsArticles: [],
        slugMap: {},
        locale: locale || 'en',
      },
      revalidate: 300, // Still revalidate even on error to retry fetching
    };
  }
};

const PressPage: NextPage<PressPageProps> = ({ content, newsArticles, slugMap, locale }) => {
  const renderBlock = (block: PagesBlocks, index: number) => {
    if (block.__typename === 'PagesBlocksTextBoxWithImage') {
      return <TextBoxWithImage key={index} {...block} />;
    }
    return null;
  };

  const highlightedArticle = newsArticles.find((article) => article.isHighlighted);
  const regularArticles = newsArticles.filter((article) => !article.isHighlighted);
  const seoTitle = highlightedArticle?.title || content.title || 'Press & News';
  const seoDescription =
    highlightedArticle?.excerpt ||
    'Latest news and press releases from FENOR, the National Federation of Gold Factories.';

  const structuredData = highlightedArticle
    ? {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: highlightedArticle.title,
        image: highlightedArticle.featuredImage,
        datePublished: highlightedArticle.publishedDate,
        description: highlightedArticle.excerpt,
      }
    : undefined;
  return (
    <SlugMapProvider slugMap={slugMap}>
     <SEOComponent
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/${locale}/press`}

        structuredData={structuredData}
      />
      <div className="press-page" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 py-12">
          {content.blocks.length > 0 && (
            <div className="space-y-20">
              {content.blocks.map((block, index) => renderBlock(block, index))}
            </div>
          )}

          <section className="mt-12">
            {newsArticles.length === 0 ? (
              <p className="text-center text-gray-500">No articles found.</p>
            ) : (
              <>
                {highlightedArticle && (
                  <div className="mb-12 w-full mt-12 md:mt-[120px]">
                    <div
                      className="relative h-[350px] md:h-[500px] bg-cover bg-center rounded-[30px] p-4 md:p-8 flex flex-col justify-end"
                      style={{
                        backgroundImage: highlightedArticle.featuredImage
                          ? `url(https:${highlightedArticle.featuredImage})`
                          : 'none',
                      }}
                    >
                      <div className="absolute inset-0 bg-black/50 rounded-[30px]"></div>
                      <div className="relative z-10">
                        {highlightedArticle.eventType && (
                          <span className="inline-block bg-black text-yellow-500 uppercase px-2 py-1 rounded text-[16px] sm:text-[20px] mb-4">
                            {highlightedArticle.eventType}
                          </span>
                        )}
                        <p className="text-white text-[16px] sm:text-[20px] mb-4">
                          {new Date(highlightedArticle.publishedDate)
                            .toLocaleDateString('en-US', {
                              month: 'long',
                              day: '2-digit',
                              year: 'numeric',
                            })
                            .replace(/ /g, '-')
                            .replace(',', '')}
                        </p>
                        <h3 className="font-semibold text-white text-[20px] sm:text-[24px] md:text-[28px] mb-6">
                          {highlightedArticle.title}
                        </h3>
                        <Link href={`/press/${highlightedArticle.slug}`}>
                          <Button className="cursor-pointer">Read More</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {regularArticles.length > 0 && (
                  <div className="grid md:grid-cols-3 gap-8">
                    {regularArticles.map((article) => (
                      <Link key={article.id} href={`/press/${article.slug}`}>
                        <NewsCard
                          title={article.title}
                          excerpt={article.excerpt}
                          imageUrl={article.featuredImage || '/placeholder-image.jpg'}
                          eventType={article.eventType}
                          publishedDate={article.publishedDate}
                          isHighlighted={article.isHighlighted}
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </div>
    </SlugMapProvider>
  );
};

export default PressPage;