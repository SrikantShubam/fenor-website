// //gpt
// import React from 'react';
// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import type { PagesBlocks } from '../tina/__generated__/types';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { TinaMarkdown } from 'tinacms/dist/rich-text';
// import Link from 'next/link';
// import Button from '../components/Button';

// interface ChairmanContent {
//   title: string;
//   seo?: {
//     title?: string;
//     description?: string;
//     keywords?: string[];
//   } | null;
//   blocks: PagesBlocks[];
// }

// interface ChairmanProps {
//   content: ChairmanContent;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<ChairmanProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({ relativePath: `${locale}/Message.md` });
//     const { title, seo, blocks } = res.data.pages;
//     return {
//       props: {
//         content: {
//           title: title || 'Chairman\'s Message',
//           seo: seo || null,
//           blocks: blocks || [],
//         },
//         locale: locale || 'en',
//       },
//       revalidate: 60,
//     };
//   } catch (err) {
//     console.error('Tina fetch error:', err);
//     return {
//       props: {
//         content: {
//           title: "Chairman's Message",
//           seo: null,
//           blocks: [],
//         },
//         locale: locale || 'en',
//       },
//       revalidate: 60,
//     };
//   }
// };

// // Animation variants
// const textVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
// };
// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.98 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 } },
// };

// // Helper to render blocks
// const renderBlock = (block: PagesBlocks, idx: number) => {
//   switch (block.__typename) {
//     case 'PagesBlocksTextBoxWithImage':
//       return (
//         <motion.div
//           key={idx}
//           className="text-box-with-image mb-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={textVariants}
//         >
//           {block.smallHeading && <h3 className="text-[19px] sm:text-[33px] font-bold">{block.smallHeading}</h3>}
//           {block.bigHeading && <h2 className="text-[28px] sm:text-[48px] font-semibold">{block.bigHeading}</h2>}
//         </motion.div>
//       );

//     case 'PagesBlocksChairmanIntro':
//       return (
//         <motion.div
//           key={idx}
//           className="grid grid-cols-1 lg:grid-cols-[4fr_1fr_7fr] gap-4 items-start"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
//         >
//           {block.chairmanImage && (
//             <motion.div className="lg:col-span-1 order-2 lg:order-1" variants={imageVariants}>
//               <Image
//                 src={block.chairmanImage}
//                 alt={block.largeHeading || block.smallHeading || 'Chairman'}
//                 width={400}
//                 height={400}
//                 className="object-cover max-w-full rounded-lg"
//                 sizes="(max-width: 1024px) 100vw, 400px"
//               />
//             </motion.div>
//           )}

//           <div className="hidden lg:block lg:col-span-1 order-2" />

//           <motion.div className="flex flex-col space-y-8 lg:col-span-1 order-1 lg:order-3" variants={textVariants}>
//             <div className="space-y-[10px] md:space-y-[30px]">
//               {block.smallHeading && <motion.h3 className="text-[19px] sm:text-[33px] font-bold" variants={textVariants}>{block.smallHeading}</motion.h3>}
//               {block.largeHeading && <motion.h2 className="text-[28px] sm:text-[48px] font-semibold" variants={textVariants}>{block.largeHeading}</motion.h2>}
//             </div>

//             {block.quote && (
//               <motion.blockquote className="text-[23px] sm:text-[28px] lg:text-[33px] font-semibold italic text-gray-200" variants={textVariants}>
//                 <TinaMarkdown content={block.quote} />
//               </motion.blockquote>
//             )}

//             {block.content && (
//               <motion.div className="text-[13px] sm:text-[16px] lg:text-[19px] space-y-4 my-8" variants={textVariants}>
//                 <TinaMarkdown content={block.content} />
//               </motion.div>
//             )}

//             {block.signatureImage && (
//               <motion.div className="my-12" variants={imageVariants}>
//                 <Image
//                   src={block.signatureImage}
//                   alt={`${block.chairmanName || 'Chairman'} Signature`}
//                   width={200}
//                   height={80}
//                   className="object-contain"
//                   sizes="(max-width: 1024px) 100vw, 200px"
//                 />
//               </motion.div>
//             )}

//             {(block.chairmanName || block.designation) && (
//               <motion.div className="space-y-2" variants={textVariants}>
//                 {block.chairmanName && <p className="text-[13px] sm:text-[16px] lg:text-[19px] font-bold">{block.chairmanName}</p>}
//                 {block.designation && <p className="text-[13px] sm:text-[16px] lg:text-[19px] text-gray-300">{block.designation}</p>}
//               </motion.div>
//             )}

//             {block.button?.label && block.button?.link && (
//               <motion.div className="mt-8" variants={textVariants}>
//                 <Link href={block.button.link} legacyBehavior>
//   <Button>{block.button.label}</Button>
// </Link>
//               </motion.div>
//             )}
//           </motion.div>
//         </motion.div>
//       );

//     default:
//       return null;
//   }
// };

// const Chairman: NextPage<ChairmanProps> = ({ content, locale }) => (
//   <div className="chairman" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//     <NextSeo
//       title={content.seo?.title ?? content.title}
//       description={content.seo?.description ?? ''}
//       additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//     />

//     <div className="container mx-auto py-[60px] md:py-[100px] overflow-hidden">
//       {content.blocks.length > 0 ? (
//         content.blocks.map((block, idx) => renderBlock(block, idx))
//       ) : (
//         <p className="text-center text-gray-500">No content available.</p>
//       )}
//     </div>
//   </div>
// );

// export default Chairman;















// import React from 'react';
// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import type { PagesBlocks } from '../tina/__generated__/types';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { TinaMarkdown } from 'tinacms/dist/rich-text';
// import Button from '../components/Button';

// interface ChairmanContent {
//   title: string;
//   seo?: {
//     title?: string;
//     description?: string;
//     keywords?: string[];
//   } | null;
//   blocks: PagesBlocks[];
// }

// interface ChairmanProps {
//   content: ChairmanContent;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<ChairmanProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({ relativePath: `${locale}/Message.md` });
//     const { title, seo, blocks } = res.data.pages;
//     return {
//       props: {
//         content: {
//           title: title || 'Chairman\'s Message',
//           seo: seo || null,
//           blocks: blocks || [],
//         },
//         locale: locale || 'en',
//       },
//       revalidate: 60,
//     };
//   } catch (err) {
//     console.error('Tina fetch error:', err);
//     return {
//       props: {
//         content: {
//           title: "Chairman's Message",
//           seo: null,
//           blocks: [],
//         },
//         locale: locale || 'en',
//       },
//       revalidate: 60,
//     };
//   }
// };

// // Animation variants
// const textVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
// };
// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.98 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 } },
// };

// // Helper to render blocks

// const renderBlock = (block: PagesBlocks, idx: number) => {
//   switch (block.__typename) {
//     case 'PagesBlocksTextBoxWithImage':
//       return (
//         <motion.div
//           key={idx}
//           className="text-box-with-image mb-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={textVariants}
//         >
//           {block.smallHeading && <h3 className="text-[19px] sm:text-[33px] font-bold">{block.smallHeading}</h3>}
//           {block.bigHeading && <h2 className="text-[28px] sm:text-[48px] font-semibold">{block.bigHeading}</h2>}
//         </motion.div>
//       );

//     case 'PagesBlocksChairmanIntro':
//       return (
//         <motion.div
//           key={idx}
//           className="grid grid-cols-1 lg:grid-cols-[4fr_1fr_7fr] gap-4 items-start"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
//         >
//           {block.chairmanImage && (
//             <motion.div className="lg:col-span-1 order-2 lg:order-1" variants={imageVariants}>
//               <Image
//                 src={block.chairmanImage}
//                 alt={block.chairmanName || 'Chairman'}
//                 width={400}
//                 height={400}
//                 className="object-cover max-w-full rounded-lg"
//                 sizes="(max-width: 1024px) 100vw, 400px"
//               />
//             </motion.div>
//           )}

//           <div className="hidden lg:block lg:col-span-1 order-2" />

//           <motion.div className="flex flex-col space-y-8 lg:col-span-1 order-1 lg:order-3" variants={textVariants}>
//             {block.quote && (
//               <motion.blockquote className="text-[23px] sm:text-[28px] lg:text-[33px] font-semibold italic text-gray-200" variants={textVariants}>
//                 <TinaMarkdown content={block.quote} />
//               </motion.blockquote>
//             )}

//             {block.content && (
//               <motion.div className="text-[13px] sm:text-[16px] lg:text-[19px] space-y-4 my-8" variants={textVariants}>
//                 <TinaMarkdown content={block.content} />
//               </motion.div>
//             )}

//             {block.signatureImage && (
//               <motion.div className="my-12" variants={imageVariants}>
//                 <Image
//                   src={block.signatureImage}
//                   alt={`${block.chairmanName || 'Chairman'} Signature`}
//                   width={200}
//                   height={80}
//                   className="object-contain"
//                   sizes="(max-width: 1024px) 100vw, 200px"
//                 />
//               </motion.div>
//             )}

//             {(block.chairmanName || block.designation) && (
//               <motion.div className="space-y-2" variants={textVariants}>
//                 {block.chairmanName && <p className="text-[13px] sm:text-[16px] lg:text-[19px] font-bold">{block.chairmanName}</p>}
//                 {block.designation && <p className="text-[13px] sm:text-[16px] lg:text-[19px] text-gray-300">{block.designation}</p>}
//               </motion.div>
//             )}

//             {block.button?.label && block.button?.link && (
//               <motion.div className="mt-8" variants={textVariants}>
//                 <Button to={block.button.link}>{block.button.label}</Button>
//               </motion.div>
//             )}
//           </motion.div>
//         </motion.div>
//       );

//     default:
//       return null;
//   }
// };

// const Chairman: NextPage<ChairmanProps> = ({ content, locale }) => (
//   <div className="chairman" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//     <NextSeo
//       title={content.seo?.title ?? content.title}
//       description={content.seo?.description ?? ''}
//       additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//     />

//     <div className="container mx-auto py-[60px] md:py-[100px] overflow-hidden">
//       {content.blocks.length > 0 ? (
//         content.blocks.map((block, idx) => renderBlock(block, idx))
//       ) : (
//         <p className="text-center text-gray-500">No content available.</p>
//       )}
//     </div>
//   </div>
// );

// export default Chairman;
























// import React from 'react';
// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import type { PagesBlocks } from '../tina/__generated__/types';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { TinaMarkdown } from 'tinacms/dist/rich-text';
// import Button from '../components/Button';
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';

// interface ChairmanContent {
//   title: string;
//   seo?: {
//     title?: string;
//     description?: string;
//     keywords?: string[];
//   } | null;
//   blocks: PagesBlocks[];
// }

// interface ChairmanProps {
//   content: ChairmanContent;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<ChairmanProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({ relativePath: `${locale}/Message.md` });
//     const { title, seo, blocks } = res.data.pages;
//     return {
//       props: {
//         content: {
//           title: title ?? "Chairman's Message",
//           seo: seo ?? null,
//           blocks: blocks ?? [],
//         },
//         locale: locale ?? 'en',
//       },
//       revalidate: 60,
//     };
//   } catch (err) {
//     console.error('Tina fetch error:', err);
//     return {
//       props: {
//         content: {
//           title: "Chairman's Message",
//           seo: null,
//           blocks: [],
//         },
//         locale: locale ?? 'en',
//       },
//       revalidate: 60,
//     };
//   }
// };

// // Animation variants
// const textVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
// };
// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.98 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 } },
// };

// // Helper to render blocks
// const renderBlock = (block: PagesBlocks, idx: number) => {
//   switch (block.__typename) {
//     case 'PagesBlocksTextBoxWithImage':
//       return (
//         <TextBoxWithImageAndButton
//           key={idx}
//           smallHeading={block.smallHeading!}
//           bigHeading={block.bigHeading!}
//           paragraph={block.paragraph }
//           image={block.image!}
//         />
//       );

//     case 'PagesBlocksChairmanIntro':
//       return (
//         <motion.div
//           key={idx}
//           className="grid grid-cols-1 lg:grid-cols-[4fr_1fr_7fr] gap-4 items-start"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
//         >
//           {block.chairmanImage && (
//             <motion.div className="lg:col-span-1 order-2 lg:order-1" variants={imageVariants}>
//               <Image
//                 src={block.chairmanImage}
//                 alt={block.chairmanName || 'Chairman'}
//                 width={400}
//                 height={400}
//                 className="object-cover max-w-full rounded-lg"
//                 sizes="(max-width: 1024px) 100vw, 400px"
//               />
//             </motion.div>
//           )}

//           <div className="hidden lg:block lg:col-span-1 order-2" />

//           <motion.div className="flex flex-col space-y-8 lg:col-span-1 order-1 lg:order-3" variants={textVariants}>
//             {block.quote && (
//               <motion.blockquote className="text-[23px] sm:text-[28px] lg:text-[33px] font-semibold italic text-gray-200" variants={textVariants}>
//                 <TinaMarkdown content={block.quote} />
//               </motion.blockquote>
//             )}

//             {block.content && (
//               <motion.div className="text-[13px] sm:text-[16px] lg:text-[19px] space-y-4 my-8" variants={textVariants}>
//                 <TinaMarkdown content={block.content} />
//               </motion.div>
//             )}

//             {block.signatureImage && (
//               <motion.div className="my-12" variants={imageVariants}>
//                 <Image
//                   src={block.signatureImage}
//                   alt={`${block.chairmanName || 'Chairman'} Signature`}
//                   width={200}
//                   height={80}
//                   className="object-contain"
//                   sizes="(max-width: 1024px) 100vw, 200px"
//                 />
//               </motion.div>
//             )}

//             {(block.chairmanName || block.designation) && (
//               <motion.div className="space-y-2" variants={textVariants}>
//                 {block.chairmanName && <p className="text-[13px] sm:text-[16px] lg:text-[19px] font-bold">{block.chairmanName}</p>}
//                 {block.designation && <p className="text-[13px] sm:text-[16px] lg:text-[19px] text-gray-300">{block.designation}</p>}
//               </motion.div>
//             )}

//             {block.button?.label && block.button?.link && (
//               <motion.div className="mt-8" variants={textVariants}>
//                 <Button to={block.button.link}>{block.button.label}</Button>
//               </motion.div>
//             )}
//           </motion.div>
//         </motion.div>
//       );

//     default:
//       return null;
//   }
// };

// const Chairman: NextPage<ChairmanProps> = ({ content, locale }) => (
//   <div className="chairman" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//     <NextSeo
//       title={content.seo?.title ?? content.title}
//       description={content.seo?.description ?? ''}
//       additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//     />

//     <div className="container mx-auto py-[60px] md:py-[100px] overflow-hidden">
//       {content.blocks.length > 0 ? (
//         content.blocks.map((block, idx) => renderBlock(block, idx))
//       ) : (
//         <p className="text-center text-gray-500">No content available.</p>
//       )}
//     </div>
//   </div>
// );

// export default Chairman;























// pages/Chairman.tsx
// pages/Chairman.tsx

// import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import type { PagesBlocks } from '../tina/__generated__/types';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import Button from '../components/Button';
// import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';

// // --- Font Awesome Setup ---
// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// config.autoAddCss = false;
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

// // Dynamically load TinaMarkdown on the client only to avoid SSR mismatch
// const TinaMarkdown = dynamic(
//   () => import('tinacms/dist/rich-text').then(mod => mod.TinaMarkdown),
//   { ssr: false }
// );

// interface ChairmanContent {
//   title: string;
//   seo?: { title?: string; description?: string; keywords?: string[] } | null;
//   blocks: PagesBlocks[];
// }

// interface ChairmanProps {
//   content: ChairmanContent;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<ChairmanProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({ relativePath: `${locale}/Message.md` });
//     const { title, seo, blocks } = res.data.pages;
//     return {
//       props: {
//         content: { title: title ?? "Chairman's Message", seo: seo ?? null, blocks: blocks ?? [] },
//         locale: locale ?? 'en',
//       },
//       revalidate: 60,
//     };
//   } catch (err) {
//     console.error('Tina fetch error:', err);
//     return {
//       props: { content: { title: "Chairman's Message", seo: null, blocks: [] }, locale: locale ?? 'en' },
//       revalidate: 60,
//     };
//   }
// };

// // Animation variants
// const textVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
// };
// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.98 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 } },
// };

// // Helper to render blocks
// const renderBlock = (block: PagesBlocks, idx: number, isMounted: boolean) => {
//   switch (block.__typename) {
//     case 'PagesBlocksTextBoxWithImage':
//       return (
//         <TextBoxWithImageAndButton
//           key={idx}
//           smallHeading={block.smallHeading!}
//           bigHeading={block.bigHeading!}
//           paragraph={block.paragraph}
//           image={block.image!}
//         />
//       );

//     case 'PagesBlocksChairmanIntro':
//       return (
//         <motion.div
//           key={idx}
//           className="space-y-8"
//           initial="hidden"
//           animate={isMounted ? 'visible' : 'hidden'}
//           variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Grid for Image, Gap, and Quote */}
//           <div className="flex flex-col items-start space-y-8 lg:grid lg:grid-cols-[4fr_1fr_7fr] lg:space-y-0 mb-8">
//             {block.chairmanImage && (
//               <motion.div variants={imageVariants} className="col-start-1 w-full">
//                 <Image
//                   src={block.chairmanImage}
//                   alt={block.chairmanName || 'Chairman'}
//                   width={400}
//                   height={400}
//                   className="object-cover w-full h-auto rounded-lg"
//                   sizes="(max-width: 1024px) 100vw, 400px"
//                 />
//               </motion.div>
//             )}
//             {block.quote && (
//               <motion.div variants={textVariants} className="col-start-3 ">
//                 <FontAwesomeIcon
//                   icon={faQuoteLeft}
//                   className="fa-4x text-[#EBBA7F] mb-4"
//                 />
//                 <p className="ml-2 text-[23px] sm:text-[28px] lg:text-[33px] font-semibold text-gray-200 leading-[1.8]">
//                   <TinaMarkdown content={block.quote} />
//                 </p>
//               </motion.div>
//             )}
//           </div>

//           {/* Content Section with Vertical Spacing */}
//           <motion.div className="pt-10" variants={textVariants}>
//             {block.content && (
//               <div className="space-y-8 px-0 md:px-6 text-[13px] sm:text-[16px] lg:text-[19px]">
//                 <TinaMarkdown content={block.content} />
//               </div>
//             )}
//             {block.signatureImage && (
//               <motion.div variants={imageVariants}>
//                 <Image
//                   src={block.signatureImage}
//                   alt={`${block.chairmanName || 'Chairman'} Signature`}
//                   width={200}
//                   height={80}
//                   className="object-contain sm:ml-0 md:ml-6 mt-[100px] md:mt-[150px]"
//                   sizes="(max-width: 1024px) 100vw, 200px"
//                 />
//               </motion.div>
//             )}
//             {(block.chairmanName || block.designation) && (
//               <div className="space-y-2 px-0 md:px-6">
//                 {block.chairmanName && <p className="text-[13px] sm:text-[16px] lg:text-[19px] font-bold">{block.chairmanName}</p>}
//                 {block.designation && <p className="text-[13px] sm:text-[16px] lg:text-[19px] text-gray-300">{block.designation}</p>}
//               </div>
//             )}
//             {block.button?.label && block.button?.link && (
//               <motion.div variants={textVariants}>
//                 <Button to={block.button.link} className='ml-0 mt-10 md:ml-6 md:mt-16'>{block.button.label}</Button>
//               </motion.div>
//             )}
//           </motion.div>
//         </motion.div>
//       );

//     default:
//       return null;
//   }
// };

// const Chairman: NextPage<ChairmanProps> = ({ content, locale }) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   return (
//     <div className="chairman" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? ''}
//         additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//       />
//       <div className="container mx-auto py-[20px] md:py-[40px] overflow-hidden">
//         {content.blocks.length > 0 ? (
//           content.blocks.map((block, idx) => renderBlock(block, idx, isMounted))
//         ) : (
//           <p className="text-center text-gray-500">No content available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chairman;











// pages/Chairman.tsx
// pages/Chairman.tsx

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps, NextPage } from 'next';
import { client } from '../tina/__generated__/client';
import type { PagesBlocks } from '../tina/__generated__/types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import TextBoxWithImageAndButton from '../components/textbox-variations/TextBoxWithImageAndButton';
import SEOComponent from '@/components/SEOComponent';
// --- Font Awesome Setup ---
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

// Dynamically load TinaMarkdown on the client only to avoid SSR mismatch
const TinaMarkdown = dynamic(
  () => import('tinacms/dist/rich-text').then(mod => mod.TinaMarkdown),
  { ssr: false }
);
type SEO = {
  title?: string;
  description?: string;
}
interface ChairmanContent {
  title: string;
  seo: SEO | null;
  blocks: PagesBlocks[];
}

interface ChairmanProps {
  content: ChairmanContent;
  locale: string;
}

export const getStaticProps: GetStaticProps<ChairmanProps> = async ({ locale }) => {
  try {
    const res = await client.queries.pages({ relativePath: `${locale}/Message.md` });
    const { title, seo, blocks } = res.data.pages;
    return {
      props: {
        content: {
          title: title ?? "Chairman's Message",
          seo: seo ?? null,
          blocks: blocks ?? []
        },
        locale: locale ?? 'en'
      },
      revalidate: 60
    };
  } catch (err) {
    console.error('Tina fetch error:', err);
    return {
      props: {
        content: {
          title: "Chairman's Message",
          seo: null,
          blocks: []
        },
        locale: locale ?? 'en'
      },
      revalidate: 60
    };
  }
};

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
};
const imageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 } }
};

// Hook: highlight first word of the first paragraph after mount
const useHighlightFirstWord = (enabled: boolean) => {
  useEffect(() => {
    if (!enabled) return;
    const p = document.querySelector<HTMLParagraphElement>('.chairman-content > p:first-of-type');
    if (p && !p.dataset.highlighted) {
      const text = p.textContent?.trim();
      if (text) {
        const [first, ...rest] = text.split(' ');
        p.innerHTML = `<span class=\"text-[#FFDA66]\">${first}</span> ${rest.join(' ')}`;
        p.dataset.highlighted = 'true';
      }
    }
  }, [enabled]);
};

// Helper to render blocks
const renderBlock = (block: PagesBlocks, idx: number, isMounted: boolean) => {
  switch (block.__typename) {
    case 'PagesBlocksTextBoxWithImage':
      return (
        <TextBoxWithImageAndButton
          key={idx}
          smallHeading={block.smallHeading!}
          bigHeading={block.bigHeading!}
          paragraph={block.paragraph}
          image={block.image!}
        />
      );

    case 'PagesBlocksChairmanIntro':
      return (
        <motion.div
          key={idx}
          className="space-y-8"
          initial="hidden"
          animate={isMounted ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Grid for Image, Gap, and Quote */}
          <div className="flex flex-col items-start space-y-8 lg:grid lg:grid-cols-[4fr_1fr_7fr] lg:space-y-0 mb-8">
            {block.chairmanImage && (
              <motion.div variants={imageVariants} className="col-start-1 w-full">
                <Image
                  src={block.chairmanImage}
                  alt={block.chairmanName || 'Chairman'}
                  width={400}
                  height={400}
                  className="object-cover w-full h-auto rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </motion.div>
            )}
            {block.quote && (
              <motion.div variants={textVariants} className="col-start-3">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="fa-4x text-[#EBBA7F] mb-4"
                />
                <p className="ml-0 md:ml-2 text-[23px] sm:text-[28px] lg:text-[33px] font-semibold text-gray-200 leading-[1.8]">
                  <TinaMarkdown content={block.quote} />
                </p>
              </motion.div>
            )}
          </div>

          {/* Content Section with Vertical Spacing */}
          <motion.div className="chairman-content pt-10 space-y-8 px-0 md:px-6" variants={textVariants}>
            {block.content && <TinaMarkdown content={block.content} />}
            {block.signatureImage && (
              <motion.div variants={imageVariants}>
                <Image
                  src={block.signatureImage}
                  alt={`${block.chairmanName || 'Chairman'} Signature`}
                  width={200}
                  height={80}
                  className="object-contain sm:ml-0 md:ml-6 mt-[100px] md:mt-[150px]"
                  sizes="(max-width: 1024px) 100vw, 200px"
                />
              </motion.div>
            )}
            {(block.chairmanName || block.designation) && (
              <div className="space-y-2 px-0 md:px-6">
                {block.chairmanName && (
                  <p className="text-[16px] sm:text-[19px] lg:text-[23px] font-bold">{block.chairmanName}</p>
                )}
                {block.designation && (
                  <p className="text-[13px] sm:text-[16px] lg:text-[19px] text-gray-300">{block.designation}</p>
                )}
              </div>
            )}
            {block.button?.label && block.button?.link && (
              <motion.div variants={textVariants}>
                <Button to={block.button.link} className="ml-0 mt-10 md:ml-6 md:mt-16">
                  {block.button.label}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      );

    default:
      return null;
  }
};

const Chairman: NextPage<ChairmanProps> = ({ content, locale }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useHighlightFirstWord(isMounted);

  return (
    <div className="chairman" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <SEOComponent
  title={content.seo?.title || content.title || 'Chairman'}
  description={
    content.seo?.description || 'Meet our Chairman for FENOR industries.'
  }
  canonicalPath={`/${locale}/chairman`}
/>
      <div className="container mx-auto text-[13px] sm:text-[16px] lg:text-[19px] py-[20px]  md:py-[60px] overflow-hidden">
        {content.blocks.length > 0 ? (
          content.blocks.map((block, idx) => renderBlock(block, idx, isMounted))
        ) : (
          <p className="text-center text-gray-500">No content available.</p>
        )}
      </div>
    </div>
  );
};

export default Chairman;
