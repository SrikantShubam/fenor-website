// import React from 'react';
// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import { PagesBlocks } from '../tina/__generated__/types';
// import { createClient } from 'contentful';
// import { motion } from 'framer-motion';
// import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
// import ManagementCard from '../components/ManagementCard';

// // Contentful client setup
// const contentfulClient = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID!,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
// });

// // Animation variants for grid
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// type SEO = { title?: string; description?: string; keywords?: string[] };

// interface Content {
//   title: string;
//   seo: SEO | null;
//   blocks?: PagesBlocks[];
// }

// // Contentful field interface
// interface ManagementFields {
//   nameEn?: string;
//   nameFr?: string;
//   nameAr?: string;
//   designationEn?: string;
//   designationFr?: string;
//   designationAr?: string;
//   profileImg?: { fields: { file: { url: string } } };
//   whatsapp?: string;
//   linkedinUrl?: string;
// }

// interface ManagementEntry {
//   name: string;
//   designation: string;
//   profileImg?: string;
//   whatsappUrl?: string;
//   linkedinUrl?: string;
// }

// interface ManagementProps {
//   content: Content;
//   managementEntries: ManagementEntry[];
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<ManagementProps> = async ({ locale }) => {
//   // TinaCMS fetch
//   let tinaContent: Content = { title: 'Management', seo: null, blocks: [] };
//   try {
//     const res = await client.queries.pages({ relativePath: `${locale}/Management.md` });
//     const rawContent = res.data.pages;
//     const seoTemp: SEO = {};
//     if (rawContent.seo) {
//       if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
//       if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
//       if (Array.isArray(rawContent.seo.keywords)) {
//         const kws = rawContent.seo.keywords.filter((kw): kw is string => typeof kw === 'string');
//         if (kws.length) seoTemp.keywords = kws;
//       }
//     }
//     tinaContent = {
//       title: rawContent.title || 'Management',
//       seo: Object.keys(seoTemp).length ? seoTemp : null,
//       blocks: rawContent.blocks || [],
//     };
//   } catch (err) {
//     console.error('Tina fetch error:', err);
//   }

//   // Contentful fetch
//   let managementEntries: ManagementEntry[] = [];
//   try {
//     const langSuffix = (locale || 'en').split('-')[0].toLowerCase();
//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

//     const response = await contentfulClient.getEntries({
//       content_type: 'management',
//       include: 2,
//     });

//     managementEntries = response.items.map((item) => {
//       const fields = item.fields as ManagementFields;

//       // Select fields based on locale
//       const name = fields[`name${localeKey}`] || fields.nameEn || 'No Name';
//       const designation = fields[`designation${localeKey}`] || fields.designationEn || 'No Designation';

//       // Normalize profile image URL
//       const rawUrl = fields.profileImg?.fields.file.url;
//       const profileImg = rawUrl ? (rawUrl.startsWith('//') ? `https:${rawUrl}` : rawUrl) : undefined;

//       const entry: ManagementEntry = {
//         name,
//         designation,
//         ...(profileImg ? { profileImg } : {}),
//         ...(fields.whatsapp ? { whatsappUrl: fields.whatsapp } : {}),
//         ...(fields.linkedinUrl ? { linkedinUrl: fields.linkedinUrl } : {}),
//       };

//       return entry;
//     });
//   } catch (err) {
//     console.error('Contentful fetch error:', err);
//   }

//   return {
//     props: {
//       content: tinaContent,
//       managementEntries,
//       locale: locale || 'en',
//     },
//   };
// };

// const Management: NextPage<ManagementProps> = ({ content, managementEntries, locale }) => {
//   const renderBlock = (block: PagesBlocks, idx: number) =>
//     block.__typename === 'PagesBlocksTextBoxWithImage' ? <TextBoxWithImage key={idx} {...block} /> : null;

//   return (
//     <div className="management" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? ''}
//         additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//       />
//       <div className="container mx-auto  py-[60px] md:py-[100px]">
//         <div className="space-y-[120px] md:space-y-[200px]">{content.blocks?.map(renderBlock)}</div>
//         {managementEntries.length > 0 ? (
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[120px] md:mt-[200px]"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//           >
//             {managementEntries.map((entry, i) => (
//               <ManagementCard
//                 key={i}
//                 name={entry.name}
//                 designation={entry.designation}
//                 profileImg={entry.profileImg}
//                 whatsappUrl={entry.whatsappUrl}
//                 linkedinUrl={entry.linkedinUrl}
//               />
//             ))}
//           </motion.div>
//         ) : (
//           <p className="text-center text-gray-500 mt-[120px]">No management entries found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Management;












// import React from 'react';
// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { client } from '../tina/__generated__/client';
// import { PagesBlocks } from '../tina/__generated__/types';
// import { createClient } from 'contentful';
// import { motion } from 'framer-motion';
// import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
// import ManagementCard from '../components/ManagementCard';

// // Contentful client setup
// const contentfulClient = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID!,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
// });

// // Animation variants for grid
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// type SEO = { title?: string; description?: string; keywords?: string[] };

// interface Content {
//   title: string;
//   seo: SEO | null;
//   blocks?: PagesBlocks[];
// }

// // Contentful field interface
// interface ManagementFields {
//   nameEn?: string;
//   nameFr?: string;
//   nameAr?: string;
//   designationEn?: string;
//   designationFr?: string;
//   designationAr?: string;
//   profileImg?: { fields: { file: { url: string } } };
//   whatsapp?: string;
//   linkedinUrl?: string;
// }

// interface ManagementEntry {
//   name: string;
//   designation: string;
//   profileImg?: string;
//   whatsappUrl?: string;
//   linkedinUrl?: string;
// }

// interface ManagementProps {
//   content: Content;
//   managementEntries: ManagementEntry[];
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<ManagementProps> = async ({ locale }) => {
//   // TinaCMS fetch
//   let tinaContent: Content = { title: 'Management', seo: null, blocks: [] };
//   try {
//     const res = await client.queries.pages({ relativePath: `${locale}/Management.md` });
//     const rawContent = res.data.pages;
//     const seoTemp: SEO = {};
//     if (rawContent.seo) {
//       if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
//       if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
//       if (Array.isArray(rawContent.seo.keywords)) {
//         const kws = rawContent.seo.keywords.filter((kw): kw is string => typeof kw === 'string');
//         if (kws.length) seoTemp.keywords = kws;
//       }
//     }
//     tinaContent = {
//       title: rawContent.title || 'Management',
//       seo: Object.keys(seoTemp).length ? seoTemp : null,
//       blocks: rawContent.blocks || [],
//     };
//   } catch (err) {
//     console.error('Tina fetch error:', err);
//   }

//   // Contentful fetch
//   let managementEntries: ManagementEntry[] = [];
//   try {
//     const langSuffix = (locale || 'en').split('-')[0].toLowerCase();
//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

//     const response = await contentfulClient.getEntries({
//       content_type: 'management',
//       include: 2,
//       order: ['fields.displayOrder'], // Sort by the displayOrder field
//     });

//     managementEntries = response.items.map((item) => {
//       const fields = item.fields as ManagementFields;

//       // Select fields based on locale
//       const name = fields[`name${localeKey}`] || fields.nameEn || 'No Name';
//       const designation = fields[`designation${localeKey}`] || fields.designationEn || 'No Designation';

//       // Normalize profile image URL
//       const rawUrl = fields.profileImg?.fields.file.url;
//       const profileImg = rawUrl ? (rawUrl.startsWith('//') ? `https:${rawUrl}` : rawUrl) : undefined;

//       const entry: ManagementEntry = {
//         name,
//         designation,
//         ...(profileImg ? { profileImg } : {}),
//         ...(fields.whatsapp ? { whatsappUrl: fields.whatsapp } : {}),
//         ...(fields.linkedinUrl ? { linkedinUrl: fields.linkedinUrl } : {}),
//       };

//       return entry;
//     });
//   } catch (err) {
//     console.error('Contentful fetch error:', err);
//   }

//   console.log('getStaticProps managementEntries:', managementEntries); // Debug log

//   return {
//     props: {
//       content: tinaContent,
//       managementEntries,
//       locale: locale || 'en',
//     },
//   };
// };

// const Management: NextPage<ManagementProps> = ({ content, managementEntries, locale }) => {
//   console.log('Management component props:', { content, managementEntries, locale }); // Debug log

//   const renderBlock = (block: PagesBlocks, idx: number) =>
//     block.__typename === 'PagesBlocksTextBoxWithImage' ? <TextBoxWithImage key={idx} {...block} /> : null;

//   return (
//     <div className="management" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? ''}
//         additionalMetaTags={[{ name: 'keywords', content: content.seo?.keywords?.join(', ') || '' }]}
//       />
//       <div className="container mx-auto py-[60px] md:py-[100px]">
//         <div className="space-y-[120px] md:space-y-[200px]">{content.blocks?.map(renderBlock)}</div>
//         {Array.isArray(managementEntries) && managementEntries.length > 0 ? (
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[120px] md:mt-[200px]"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//           >
//             {managementEntries.map((entry, i) => (
//               <ManagementCard
//                 key={i}
//                 name={entry.name}
//                 designation={entry.designation}
//                 profileImg={entry.profileImg}
//                 whatsappUrl={entry.whatsappUrl}
//                 linkedinUrl={entry.linkedinUrl}
//               />
//             ))}
//           </motion.div>
//         ) : (
//           <p className="text-center text-gray-500 mt-[120px]">No management entries found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Management;








import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import SEOComponent from '@/components/SEOComponent';
import { client } from '../tina/__generated__/client';
import { PagesBlocks } from '../tina/__generated__/types';
import { createClient } from 'contentful';
import { motion } from 'framer-motion';
import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
import ManagementCard from '../components/ManagementCard';
import { unstable_cache } from 'next/cache';

// Contentful client setup
const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

type SEO = { title?: string; description?: string;  };

interface Content {
  title: string;
  seo: SEO | null;
  blocks?: PagesBlocks[];
}

interface ManagementFields {
  nameEn?: string;
  nameFr?: string;
  nameAr?: string;
  designationEn?: string;
  designationFr?: string;
  designationAr?: string;
  profileImg?: { fields: { file: { url: string } } };
  whatsapp?: string;
  linkedinUrl?: string;
  displayOrder?: number;
}

interface ManagementEntry {
  name: string;
  designation: string;
  profileImg?: string;
  whatsappUrl?: string;
  linkedinUrl?: string;
}

interface ManagementProps {
  content: Content;
  managementEntries: ManagementEntry[];
  locale: string;
}

export const getStaticProps: GetStaticProps<ManagementProps> = async ({ locale }) => {
  // TinaCMS fetch
  let tinaContent: Content = { title: 'Management', seo: null, blocks: [] };
  try {
    const res = await client.queries.pages({ relativePath: `${locale}/Management.md` });
    const rawContent = res.data.pages;
    const seoTemp: SEO = {};
    if (rawContent.seo) {
      if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
      if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
     
    }
    tinaContent = {
      title: rawContent.title || 'Management',
      seo: Object.keys(seoTemp).length ? seoTemp : null,
      blocks: rawContent.blocks || [],
    };
  } catch (err) {
    console.error('Tina fetch error:', err);
  }

  // Contentful fetch with caching
  let managementEntries: ManagementEntry[] = [];
  try {
    const langSuffix = (locale || 'en').split('-')[0].toLowerCase();
    const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

    const getCachedEntries = unstable_cache(
      async () => {
        const response = await contentfulClient.getEntries({
          content_type: 'management',
          include: 2,
          order: ['fields.displayOrder'],
        });
        return response.items;
      },
      [`management-entries-${locale}`],
      { revalidate: 86400 } // 24 hours
    );

    const items = await getCachedEntries();

    managementEntries = items.map((item) => {
  const fields = item.fields as ManagementFields;

  const nameRaw = fields[`name${localeKey}` as keyof ManagementFields] || fields.nameEn;
  const designationRaw = fields[`designation${localeKey}` as keyof ManagementFields] || fields.designationEn;

  const name = typeof nameRaw === 'string' ? nameRaw : String(nameRaw ?? 'No Name');
  const designation = typeof designationRaw === 'string' ? designationRaw : String(designationRaw ?? 'No Designation');

  const rawUrl = fields.profileImg?.fields.file.url;
  const profileImg = rawUrl
    ? rawUrl.startsWith('//')
      ? `https:${rawUrl}`
      : rawUrl.replace(/^http:\/\//, 'https://')
    : undefined;

  return {
    name,
    designation,
    ...(profileImg ? { profileImg } : {}),
    ...(fields.whatsapp ? { whatsappUrl: fields.whatsapp } : {}),
    ...(fields.linkedinUrl ? { linkedinUrl: fields.linkedinUrl } : {}),
  };
});

  } catch (err) {
    console.error('Contentful fetch error:', err);
  }

  return {
    props: {
      content: tinaContent,
      managementEntries,
      locale: locale || 'en',
    },
    revalidate: 86400, // ISR: regenerate once a day
  };
};

const Management: NextPage<ManagementProps> = ({ content, managementEntries, locale }) => {
  const renderBlock = (block: PagesBlocks, idx: number) =>
    block.__typename === 'PagesBlocksTextBoxWithImage' ? <TextBoxWithImage key={idx} {...block} /> : null;

  return (
    <div className="management" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <SEOComponent
        title={content.seo?.title || content.title || 'Management'}
        description={
          content.seo?.description || 'Learn more about the menagament of FENOR, the National Federation of Gold Factories.'
        }
        canonicalPath={`/${locale}/about-us`}
      />
      <div className="container mx-auto py-[60px] md:py-[100px]">
        <div className="space-y-[120px] md:space-y-[200px]">{content.blocks?.map(renderBlock)}</div>
        {Array.isArray(managementEntries) && managementEntries.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[120px] md:mt-[200px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {managementEntries.map((entry, i) => (
              <ManagementCard
                key={i}
                name={entry.name}
                designation={entry.designation}
                profileImg={entry.profileImg}
                whatsappUrl={entry.whatsappUrl}
                linkedinUrl={entry.linkedinUrl}
              />
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-gray-500 mt-[120px]">No management entries found.</p>
        )}
      </div>
    </div>
  );
};

export default Management;
