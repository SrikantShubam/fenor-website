// import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { createClient } from 'contentful';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { Document, BLOCKS, INLINES, MARKS, Block, Inline } from '@contentful/rich-text-types';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
//   bodyEn?: Document;
//   bodyFr?: Document;
//   bodyAr?: Document;
//   imageAltEn?: string;
//   imageAltFr?: string;
//   imageAltAr?: string;
//   featuredImage?: { fields: { file: { url: string; details: { image: { width: number; height: number } } } } };
//   isHighlighted?: boolean;
//   publishedDate?: string;
//   eventType?: string;
// }

// interface NewsArticle {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   body: Document | null;
//   image_alt: string;
//   featuredImage: { url: string; width: number; height: number } | null;
//   isHighlighted: boolean;
//   publishedDate: string;
//   eventType: string | null;
// }

// interface NewsArticlePageProps {
//   article: NewsArticle | null;
//   locale: string;
// }

// const contentfulClient = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID!,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
// });

// export const getStaticPaths: GetStaticPaths = async () => {
//   try {
//     const newsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//     });

//     const paths = newsResponse.items.flatMap((item) => {
//       const fields = item.fields as NewsArticleFields;
//       return [
//         { params: { slug: fields.slugEn || '' }, locale: 'en' },
//         { params: { slug: fields.slugFr || '' }, locale: 'fr' },
//         { params: { slug: fields.slugAr || '' }, locale: 'ar' },
//       ].filter((path) => path.params.slug);
//     });

//     return {
//       paths,
//       fallback: 'blocking',
//     };
//   } catch (error) {
//     console.error('Error generating paths:', error);
//     return { paths: [], fallback: 'blocking' };
//   }
// };

// export const getStaticProps: GetStaticProps<NewsArticlePageProps> = async ({ params, locale }) => {
//   try {
//     const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

//     const newsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//       [`fields.slug${localeKey}`]: params?.slug,
//       limit: 1,
//     });

//     if (newsResponse.items.length === 0) {
//       return { notFound: true };
//     }

//     const item = newsResponse.items[0];
//     const fields = item.fields as NewsArticleFields;

//     const article: NewsArticle = {
//       id: item.sys.id,
//       title: fields[`title${localeKey}`] || 'No Title',
//       slug: fields[`slug${localeKey}`] || '',
//       excerpt: fields[`excerpt${localeKey}`] || 'No Excerpt',
//       body: fields[`body${localeKey}`] || null,
//       image_alt: fields[`imageAlt${localeKey}`] || 'Featured image',
//       featuredImage: fields.featuredImage ? {
//         url: fields.featuredImage.fields.file.url,
//         width: fields.featuredImage.fields.file.details.image.width,
//         height: fields.featuredImage.fields.file.details.image.height,
//       } : null,
//       isHighlighted: fields.isHighlighted || false,
//       publishedDate: fields.publishedDate || '',
//       eventType: fields.eventType || null,
//     };

//     return {
//       props: {
//         article,
//         locale: locale || 'en',
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error('Error fetching article:', error);
//     return { notFound: true };
//   }
// };

// const formatDate = (dateStr: string, locale: string) => {
//   const date = new Date(dateStr);
//   return date.toLocaleDateString(locale === 'ar' ? 'ar-EG' : locale === 'fr' ? 'fr-FR' : 'en-US', {
//     month: 'long',
//     day: '2-digit',
//     year: 'numeric',
//   });
// };

// const NewsArticlePage: NextPage<NewsArticlePageProps> = ({ article, locale }) => {
//   if (!article) {
//     return <div className="container mx-auto py-12">Article not found.</div>;
//   }

//   const richTextOptions = {
//     renderMark: {
//       [MARKS.BOLD]: (text: React.ReactNode) => <span className="font-bold">{text}</span>,
//       [MARKS.ITALIC]: (text: React.ReactNode) => <span className="italic">{text}</span>,
//       [MARKS.UNDERLINE]: (text: React.ReactNode) => <span className="underline">{text}</span>,
//       [MARKS.CODE]: (text: React.ReactNode) => (
//         <code className="px-1 py-0.5 rounded font-mono text-sm">{text}</code>
//       ),
//     },
//     renderNode: {
//       [BLOCKS.PARAGRAPH]: (node: Block, children: React.ReactNode) => {
//         const isEmpty = !children || (Array.isArray(children) && children.length === 0);
//         return (
//           <motion.p
//             className="text-lg leading-relaxed spacy"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {isEmpty ? '\u00A0' : children}
//           </motion.p>
//         );
//       },
//       [BLOCKS.HEADING_1]: (node: Block, children: React.ReactNode) => (
//         <motion.h1
//           className="text-4xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h1>
//       ),
//       [BLOCKS.HEADING_2]: (node: Block, children: React.ReactNode) => (
//         <motion.h2
//           className="text-3xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h2>
//       ),
//       [BLOCKS.HEADING_3]: (node: Block, children: React.ReactNode) => (
//         <motion.h3
//           className="text-2xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h3>
//       ),
//       [BLOCKS.HEADING_4]: (node: Block, children: React.ReactNode) => (
//         <motion.h4
//           className="text-xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h4>
//       ),
//       [BLOCKS.HEADING_5]: (node: Block, children: React.ReactNode) => (
//         <motion.h5
//           className="text-lg font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h5>
//       ),
//       [BLOCKS.HEADING_6]: (node: Block, children: React.ReactNode) => (
//         <motion.h6
//           className="text-base font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h6>
//       ),
//       [BLOCKS.UL_LIST]: (node: Block, children: React.ReactNode) => (
//         <motion.ul
//           className="list-disc pl-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.ul>
//       ),
//       [BLOCKS.OL_LIST]: (node: Block, children: React.ReactNode) => (
//         <motion.ol
//           className="list-decimal pl-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.ol>
//       ),
//       [BLOCKS.LIST_ITEM]: (node: Block, children: React.ReactNode) => (
//         <li>{children}</li>
//       ),
//       [BLOCKS.QUOTE]: (node: Block, children: React.ReactNode) => (
//         <motion.blockquote
//           className="border-l-4 border-gray-300 bg-gray-50 pl-4 py-2 text-lg text-gray-700 italic"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.blockquote>
//       ),
//       [BLOCKS.EMBEDDED_ASSET]: (node: Block) => {
//         const { title, description, file } = node.data.target.fields;
//         const imageUrl = file?.url;
//         const alt = description || title || 'Embedded image';
//         const width = file?.details?.image?.width;
//         const height = file?.details?.image?.height;

//         if (!imageUrl || !width || !height) return null;

//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-md">
//               <Image
//                 src={`https:${imageUrl}`}
//                 alt={alt}
//                 width={width}
//                 height={height}
//                 layout="responsive"
//                 className="object-cover"
//               />
//             </div>
//             {description && (
//               <p className="text-sm text-gray-500 mt-2 italic text-center">{description}</p>
//             )}
//           </motion.div>
//         );
//       },
//       [INLINES.HYPERLINK]: (node: Inline, children: React.ReactNode) => (
//         <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//           {children}
//         </a>
//       ),
//     },
//   };

//   return (
//     <>
//       <NextSeo
//         title={article.title}
//         description={article.excerpt}
//         openGraph={{
//           title: article.title,
//           description: article.excerpt,
//           images: article.featuredImage ? [
//             {
//               url: `https:${article.featuredImage.url}`,
//               alt: article.image_alt,
//             },
//           ] : [],
//         }}
//       />

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="news-article-page"
//         lang={locale}
//         dir={locale === 'ar' ? 'rtl' : 'ltr'}
//       >
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12">
//           <Link href={`/${locale}/press`} className="flex items-center space-x-2 text-blue-600 hover:underline">
//             <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5" />
//             <span>Back to News</span>
//           </Link>
//           {article.eventType && (
//             <motion.span
//               className="inline-block bg-black text-[#FFD550] font-medium px-3 py-1 rounded-full text-sm mt-4 mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               {article.eventType}
//             </motion.span>
//           )}
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mt-4 mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {article.title}
//           </motion.h1>
//           <motion.h3
//             className="mt-4 text-gray-500 uppercase"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {formatDate(article.publishedDate, locale)}
//           </motion.h3>
//           <motion.p
//             className="text-xl text-gray-600 mb-6 mt-5"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {article.excerpt}
//           </motion.p>
//           <hr className="my-8 border-t-2 border-[#FFD550]" />
//         </div>

//         {article.featuredImage && (
//           <motion.div
//             className="max-w-5xl mx-auto px-4 sm:px-6 mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-md">
//               <Image
//                 src={`https:${article.featuredImage.url}`}
//                 alt={article.image_alt}
//                 width={article.featuredImage.width}
//                 height={article.featuredImage.height}
//                 layout="responsive"
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
//         )}

//         <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
//           <div className="article-content space-y-6">
//             {article.body ?
//               documentToReactComponents(article.body, richTextOptions) :
//               <motion.p
//                 className="text-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//               >
//                 No content available.
//               </motion.p>
//             }
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default NewsArticlePage;
















// import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { createClient } from 'contentful';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { Document, BLOCKS, INLINES, MARKS, Block, Inline } from '@contentful/rich-text-types';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { SlugMapProvider } from '../../lib/SlugMapContext';

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
//   bodyEn?: Document;
//   bodyFr?: Document;
//   bodyAr?: Document;
//   imageAltEn?: string;
//   imageAltFr?: string;
//   imageAltAr?: string;
//   featuredImage?: { fields: { file: { url: string; details: { image: { width: number; height: number } } } } };
//   isHighlighted?: boolean;
//   publishedDate?: string;
//   eventType?: string;
// }

// interface NewsArticle {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   body: Document | null;
//   image_alt: string;
//   featuredImage: { url: string; width: number; height: number } | null;
//   isHighlighted: boolean;
//   publishedDate: string;
//   eventType: string | null;
// }

// interface NewsArticlePageProps {
//   article: NewsArticle | null;
//   slugMap: { [id: string]: { [locale: string]: string } };
//   locale: string;
// }

// const contentfulClient = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID!,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
// });

// export const getStaticPaths: GetStaticPaths = async () => {
//   try {
//     const newsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//     });

//     const paths = newsResponse.items.flatMap((item) => {
//       const fields = item.fields as NewsArticleFields;
//       return [
//         { params: { slug: fields.slugEn || '' }, locale: 'en' },
//         { params: { slug: fields.slugFr || '' }, locale: 'fr' },
//         { params: { slug: fields.slugAr || '' }, locale: 'ar' },
//       ].filter((path) => path.params.slug);
//     });

//     return {
//       paths,
//       fallback: 'blocking',
//     };
//   } catch (error) {
//     console.error('Error generating paths:', error);
//     return { paths: [], fallback: 'blocking' };
//   }
// };

// export const getStaticProps: GetStaticProps<NewsArticlePageProps> = async ({ params, locale }) => {
//   try {
//     const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

//     const newsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//       [`fields.slug${localeKey}`]: params?.slug,
//       limit: 1,
//     });

//     if (newsResponse.items.length === 0) {
//       return { notFound: true };
//     }

//     const item = newsResponse.items[0];
//     const fields = item.fields as NewsArticleFields;

//     const article: NewsArticle = {
//       id: item.sys.id,
//       title: fields[`title${localeKey}`] || 'No Title',
//       slug: fields[`slug${localeKey}`] || '',
//       excerpt: localeKey === 'Ar' ? (fields.excerptAr || 'No Excerpt') : (fields[`excerpt${localeKey}`] || 'No Excerpt'),
//       body: fields[`body${localeKey}`] || null,
//       image_alt: fields[`imageAlt${localeKey}`] || 'Featured image',
//       featuredImage: fields.featuredImage ? {
//         url: fields.featuredImage.fields.file.url,
//         width: fields.featuredImage.fields.file.details.image.width,
//         height: fields.featuredImage.fields.file.details.image.height,
//       } : null,
//       isHighlighted: fields.isHighlighted || false,
//       publishedDate: fields.publishedDate || '',
//       eventType: fields.eventType || null,
//     };

//     const allNewsResponse = await contentfulClient.getEntries({
//       content_type: 'newsArticle',
//       limit: 100,
//     });

//     const slugMap = allNewsResponse.items.reduce((map, item) => {
//       const fields = item.fields as NewsArticleFields;
//       map[item.sys.id] = {
//         en: fields.slugEn || '',
//         fr: fields.slugFr || '',
//         ar: fields.slugAr || '',
//       };
//       return map;
//     }, {} as { [id: string]: { [locale: string]: string } });

//     console.log(`Article ID: ${item.sys.id}, Slug Map Entry:`, slugMap[item.sys.id]);

//     return {
//       props: {
//         article,
//         slugMap,
//         locale: locale || 'en',
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error('Error fetching article:', error);
//     return { notFound: true };
//   }
// };

// const formatDate = (dateStr: string, locale: string) => {
//   const date = new Date(dateStr);
//   return date.toLocaleDateString(locale === 'ar' ? 'ar-EG' : locale === 'fr' ? 'fr-FR' : 'en-US', {
//     month: 'long',
//     day: '2-digit',
//     year: 'numeric',
//   });
// };

// const NewsArticlePage: NextPage<NewsArticlePageProps> = ({ article, slugMap, locale }) => {
//   if (!article) {
//     return <div className="container mx-auto py-12">Article not found.</div>;
//   }

//   const richTextOptions = {
//     renderMark: {
//       [MARKS.BOLD]: (text: React.ReactNode) => <span className="font-bold">{text}</span>,
//       [MARKS.ITALIC]: (text: React.ReactNode) => <span className="italic">{text}</span>,
//       [MARKS.UNDERLINE]: (text: React.ReactNode) => <span className="underline">{text}</span>,
//       [MARKS.CODE]: (text: React.ReactNode) => (
//         <code className="px-1 py-0.5 rounded font-mono text-sm">{text}</code>
//       ),
//     },
//     renderNode: {
//       [BLOCKS.PARAGRAPH]: (node: Block, children: React.ReactNode) => {
//         const isEmpty = !children || (Array.isArray(children) && children.length === 0);
//         return (
//           <motion.p
//             className="text-lg leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {isEmpty ? '\u00A0' : children}
//           </motion.p>
//         );
//       },
//       [BLOCKS.HEADING_1]: (node: Block, children: React.ReactNode) => (
//         <motion.h1
//           className="text-4xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h1>
//       ),
//       [BLOCKS.HEADING_2]: (node: Block, children: React.ReactNode) => (
//         <motion.h2
//           className="text-3xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h2>
//       ),
//       [BLOCKS.HEADING_3]: (node: Block, children: React.ReactNode) => (
//         <motion.h3
//           className="text-2xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h3>
//       ),
//       [BLOCKS.HEADING_4]: (node: Block, children: React.ReactNode) => (
//         <motion.h4
//           className="text-xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h4>
//       ),
//       [BLOCKS.HEADING_5]: (node: Block, children: React.ReactNode) => (
//         <motion.h5
//           className="text-lg font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h5>
//       ),
//       [BLOCKS.HEADING_6]: (node: Block, children: React.ReactNode) => (
//         <motion.h6
//           className="text-base font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.h6>
//       ),
//       [BLOCKS.UL_LIST]: (node: Block, children: React.ReactNode) => (
//         <motion.ul
//           className="list-disc pl-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.ul>
//       ),
//       [BLOCKS.OL_LIST]: (node: Block, children: React.ReactNode) => (
//         <motion.ol
//           className="list-decimal pl-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.ol>
//       ),
//       [BLOCKS.LIST_ITEM]: (node: Block, children: React.ReactNode) => (
//         <li>{children}</li>
//       ),
//       [BLOCKS.QUOTE]: (node: Block, children: React.ReactNode) => (
//         <motion.blockquote
//           className="border-l-4 border-gray-300 bg-gray-50 pl-4 py-2 text-lg text-gray-700 italic"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.blockquote>
//       ),
//       [BLOCKS.EMBEDDED_ASSET]: (node: Block) => {
//         const { title, description, file } = node.data.target.fields;
//         const imageUrl = file?.url;
//         const alt = description || title || 'Embedded image';
//         const width = file?.details?.image?.width;
//         const height = file?.details?.image?.height;

//         if (!imageUrl || !width || !height) return null;

//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-md">
//               <Image
//                 src={`https:${imageUrl}`}
//                 alt={alt}
//                 width={width}
//                 height={height}
//                 layout="responsive"
//                 className="object-cover"
//               />
//             </div>
//             {description && (
//               <p className="text-sm text-gray-500 mt-2 italic text-center">{description}</p>
//             )}
//           </motion.div>
//         );
//       },
//       [INLINES.HYPERLINK]: (node: Inline, children: React.ReactNode) => (
//         <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//           {children}
//         </a>
//       ),
//     },
//   };

//   return (
//     <SlugMapProvider slugMap={slugMap}>
//       <NextSeo
//         title={article.title}
//         description={article.excerpt}
//         openGraph={{
//           title: article.title,
//           description: article.excerpt,
//           images: article.featuredImage ? [
//             {
//               url: `https:${article.featuredImage.url}`,
//               alt: article.image_alt,
//             },
//           ] : [],
//         }}
//       />

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="news-article-page"
//         lang={locale}
//         dir={locale === 'ar' ? 'rtl' : 'ltr'}
//       >
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12">
//           <Link href={`/${locale}/press`} className="flex items-center space-x-2 text-blue-600 hover:underline">
//             <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5" />
//             <span>Back to Press</span>
//           </Link>
//           {article.eventType && (
//             <motion.span
//               className="inline-block bg-black text-[#FFD550] font-medium px-3 py-1 rounded-full text-sm mt-4 mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               {article.eventType}
//             </motion.span>
//           )}
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mt-4 mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {article.title}
//           </motion.h1>
//           <motion.h3
//             className="mt-4 text-gray-500 uppercase"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {formatDate(article.publishedDate, locale)}
//           </motion.h3>
//           <motion.p
//             className="text-xl text-gray-600 mb-6 mt-5"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {article.excerpt}
//           </motion.p>
//           <hr className="my-8 border-t-2 border-[#FFD550]" />
//         </div>

//         {article.featuredImage && (
//           <motion.div
//             className="max-w-5xl mx-auto px-4 sm:px-6 mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-md">
//               <Image
//                 src={`https:${article.featuredImage.url}`}
//                 alt={article.image_alt}
//                 width={article.featuredImage.width}
//                 height={article.featuredImage.height}
//                 layout="responsive"
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
//         )}

//         <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
//           <div className="article-content space-y-6">
//             {article.body ?
//               documentToReactComponents(article.body, richTextOptions) :
//               <motion.p
//                 className="text-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//               >
//                 No content available.
//               </motion.p>
//             }
//           </div>
//         </div>
//       </motion.div>
//     </SlugMapProvider>
//   );
// };

// export default NewsArticlePage;

















import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, INLINES, MARKS, Block, Inline } from '@contentful/rich-text-types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SlugMapProvider } from '../../lib/SlugMapContext';

// Contentful client initialization
const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Type definitions for News Article Fields
interface NewsArticleFields {
  titleEn?: string;
  titleFr?: string;
  titleAr?: string;
  slugEn?: string;
  slugFr?: string;
  slugAr?: string;
  excerptEn?: string;
  excerptFr?: string;
  excerptAr?: string; // Note: typo in Contentful field name
  bodyEn?: Document;
  bodyFr?: Document;
  bodyAr?: Document;
  imageAltEn?: string;
  imageAltFr?: string;
  imageAltAr?: string;
  featuredImage?: { fields: { file: { url: string; details: { image: { width: number; height: number } } } } };
  isHighlighted?: boolean;
  publishedDate?: string;
  eventType?: string;
}

// Type definitions for News Article
interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: Document | null;
  image_alt: string;
  featuredImage: { url: string; width: number; height: number } | null;
  isHighlighted: boolean;
  publishedDate: string;
  eventType: string | null;
}

// Type definitions for NewsArticlePageProps
interface NewsArticlePageProps {
  article: NewsArticle | null;
  slugMap: { [id: string]: { en: string; fr: string; ar: string } };
  locale: string;
}

// getStaticPaths: Generate paths for all articles in different locales
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const newsResponse = await contentfulClient.getEntries({
      content_type: 'newsArticle',
    });

    const paths = newsResponse.items.flatMap((item) => {
      const fields = item.fields as NewsArticleFields;
      return [
        { params: { slug: fields.slugEn || '' }, locale: 'en' },
        { params: { slug: fields.slugFr || '' }, locale: 'fr' },
        { params: { slug: fields.slugAr || '' }, locale: 'ar' },
      ].filter((path) => path.params.slug);
    });

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error generating paths:', error);
    return { paths: [], fallback: 'blocking' };
  }
};

// getStaticProps: Fetch the specific article based on slug and locale, and generate slugMap
export const getStaticProps: GetStaticProps<NewsArticlePageProps> = async ({ params, locale }) => {
  try {
    const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
    const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

    // Fetch the specific article based on slug and locale
    const newsResponse = await contentfulClient.getEntries({
      content_type: 'newsArticle',
      [`fields.slug${localeKey}`]: params?.slug,
      limit: 1,
    });

    if (newsResponse.items.length === 0) {
      return { notFound: true };
    }

    const item = newsResponse.items[0];
    const fields = item.fields as NewsArticleFields;

    const article: NewsArticle = {
      id: item.sys.id,
      title: fields[`title${localeKey}`] || 'No Title',
      slug: fields[`slug${localeKey}`] || '',
      excerpt: localeKey === 'Ar' ? (fields.excerptAr || 'No Excerpt') : (fields[`excerpt${localeKey}`] || 'No Excerpt'),
      body: fields[`body${localeKey}`] || null,
      image_alt: fields[`imageAlt${localeKey}`] || 'Featured image',
      featuredImage: fields.featuredImage ? {
        url: fields.featuredImage.fields.file.url,
        width: fields.featuredImage.fields.file.details.image.width,
        height: fields.featuredImage.fields.file.details.image.height,
      } : null,
      isHighlighted: fields.isHighlighted || false,
      publishedDate: fields.publishedDate || '',
      eventType: fields.eventType || null,
    };

    // Fetch all articles to build the slugMap
    const allNewsResponse = await contentfulClient.getEntries({
      content_type: 'newsArticle',
      limit: 100, // Adjust as needed
    });

    const slugMap = allNewsResponse.items.reduce((map, item) => {
      const fields = item.fields as NewsArticleFields;
      map[item.sys.id] = {
        en: fields.slugEn || '',
        fr: fields.slugFr || '',
        ar: fields.slugAr || '',
      };
      return map;
    }, {} as { [id: string]: { en: string; fr: string; ar: string } });

    return {
      props: {
        article,
        slugMap,
        locale: locale || 'en',
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return { notFound: true };
  }
};

// Helper function to format the date based on locale
const formatDate = (dateStr: string, locale: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === 'ar' ? 'ar-EG' : locale === 'fr' ? 'fr-FR' : 'en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
};

// NewsArticlePage Component
const NewsArticlePage: NextPage<NewsArticlePageProps> = ({ article, slugMap, locale }) => {
  if (!article) {
    return <div className="container mx-auto py-12">Article not found.</div>;
  }

  // Rich text rendering options with animations
  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <span className="italic">{text}</span>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <span className="underline">{text}</span>,
      [MARKS.CODE]: (text: React.ReactNode) => (
        <code className="px-1 py-0.5 rounded font-mono text-sm">{text}</code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block, children: React.ReactNode) => {
        const isEmpty = !children || (Array.isArray(children) && children.length === 0);
        return (
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isEmpty ? '\u00A0' : children}
          </motion.p>
        );
      },
      [BLOCKS.HEADING_1]: (node: Block, children: React.ReactNode) => (
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.h1>
      ),
      [BLOCKS.HEADING_2]: (node: Block, children: React.ReactNode) => (
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.h2>
      ),
      [BLOCKS.HEADING_3]: (node: Block, children: React.ReactNode) => (
        <motion.h3
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.h3>
      ),
      [BLOCKS.HEADING_4]: (node: Block, children: React.ReactNode) => (
        <motion.h4
          className="text-xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.h4>
      ),
      [BLOCKS.HEADING_5]: (node: Block, children: React.ReactNode) => (
        <motion.h5
          className="text-lg font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.h5>
      ),
      [BLOCKS.HEADING_6]: (node: Block, children: React.ReactNode) => (
        <motion.h6
          className="text-base font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.h6>
      ),
      [BLOCKS.UL_LIST]: (node: Block, children: React.ReactNode) => (
        <motion.ul
          className="list-disc pl-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.ul>
      ),
      [BLOCKS.OL_LIST]: (node: Block, children: React.ReactNode) => (
        <motion.ol
          className="list-decimal pl-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: Block, children: React.ReactNode) => (
        <li>{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: Block, children: React.ReactNode) => (
        <motion.blockquote
          className="border-l-4 border-gray-300 bg-gray-50 pl-4 py-2 text-lg text-gray-700 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Block) => {
        const { title, description, file } = node.data.target.fields;
        const imageUrl = file?.url;
        const alt = description || title || 'Embedded image';
        const width = file?.details?.image?.width;
        const height = file?.details?.image?.height;

        if (!imageUrl || !width || !height) return null;

        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-md">
              <Image
                src={`https:${imageUrl}`}
                alt={alt}
                width={width}
                height={height}
                layout="responsive"
                className="object-cover"
              />
            </div>
            {description && (
              <p className="text-sm text-gray-500 mt-2 italic text-center">{description}</p>
            )}
          </motion.div>
        );
      },
      [INLINES.HYPERLINK]: (node: Inline, children: React.ReactNode) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {children}
        </a>
      ),
    },
  };

  return (
    <SlugMapProvider slugMap={slugMap}>
      <NextSeo
        title={article.title}
        description={article.excerpt}
        openGraph={{
          title: article.title,
          description: article.excerpt,
          images: article.featuredImage ? [
            {
              url: `https:${article.featuredImage.url}`,
              alt: article.image_alt,
            },
          ] : [],
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="news-article-page"
        lang={locale}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12">
          <Link href={`/${locale}/press`} className="flex items-center space-x-2 text-blue-600 hover:underline">
            <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5" />
            <span>Back to Press</span>
          </Link>
          {article.eventType && (
            <motion.span
              className="inline-block bg-black text-[#FFD550] font-medium px-3 py-1 rounded-full text-sm mt-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {article.eventType}
            </motion.span>
          )}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {article.title}
          </motion.h1>
          <motion.h3
            className="mt-4 text-gray-500 uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {formatDate(article.publishedDate, locale)}
          </motion.h3>
          <motion.p
            className="text-xl text-gray-600 mb-6 mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {article.excerpt}
          </motion.p>
          <hr className="my-8 border-t-2 border-[#FFD550]" />
        </div>

        {article.featuredImage && (
          <motion.div
            className="max-w-5xl mx-auto px-4 sm:px-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-md">
              <Image
                src={`https:${article.featuredImage.url}`}
                alt={article.image_alt}
                width={article.featuredImage.width}
                height={article.featuredImage.height}
                layout="responsive"
                className="object-cover"
              />
            </div>
          </motion.div>
        )}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="article-content space-y-6">
            {article.body ?
              documentToReactComponents(article.body, richTextOptions) :
              <motion.p
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                No content available.
              </motion.p>
            }
          </div>
        </div>
      </motion.div>
    </SlugMapProvider>
  );
};

export default NewsArticlePage;