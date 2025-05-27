// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import dynamic from 'next/dynamic';
// import Image from 'next/image';
// import { createClient } from 'contentful';
// import { client } from '../tina/__generated__/client';
// import { PagesBlocks } from '../tina/__generated__/types';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Dynamically import TextBoxWithImage component
// const TextBoxWithImage = dynamic(() => import('../components/textbox-variations/TextBoxWithImage'), { ssr: true });

// interface MemberOrg {
//   id: string;
//   memberName: string;
//   memberLogo: string | null;
// }

// interface MembersPageProps {
//   content: {
//     title: string;
//     blocks: PagesBlocks[];
//   };
//   memberOrgs: MemberOrg[];
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<MembersPageProps> = async ({ locale }) => {
//   // Fetch TinaCMS content
//   let rawContent;
//   try {
//     const res = await client.queries.pages({
//       relativePath: `${locale}/Members.md`,
//     });
//     rawContent = res.data.pages;
//   } catch (e) {
//     console.error('Tina fetch error:', e);
//     rawContent = { title: 'Members', blocks: [] };
//   }

//   // Fetch Contentful memberOrg data
//   let memberOrgs: MemberOrg[] = [];
//   try {
//     const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
//     const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

//     const contentfulClient = createClient({
//       space: process.env.CONTENTFUL_SPACE_ID!,
//       accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
//     });

//     const response = await contentfulClient.getEntries({
//       content_type: 'memberOrg',
//       order: ['fields.memberName'],
//     });

//     memberOrgs = response.items.map((item) => {
//       const fields = item.fields as {
//         memberName?: string;
//         memberNameEn?: string;
//         memberNameFr?: string;
//         memberNameAr?: string;
//         memberLogo?: { fields: { file: { url: string } } };
//       };
//       const memberNameRaw = fields[`memberName${localeKey}` as keyof typeof fields] || fields.memberName;
//       const memberName = typeof memberNameRaw === 'string' ? memberNameRaw : 'Unnamed Member';

//       return {
//         id: item.sys.id,
//         memberName,
//         memberLogo: fields.memberLogo?.fields?.file?.url || null,
//       };
//     });
//   } catch (error) {
//     console.error('Error fetching memberOrg data:', error);
//     memberOrgs = [];
//   }

//   return {
//     props: {
//       content: {
//         title: rawContent.title || 'Members',
//         blocks: rawContent.blocks || [],
//       },
//       memberOrgs,
//       locale: locale || 'en',
//     },
//     revalidate: 60,
//   };
// };

// const MembersPage: NextPage<MembersPageProps> = ({ content, memberOrgs, locale }) => {
//   const [selectedMember, setSelectedMember] = useState<MemberOrg | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Handle card click to open modal
//   const handleCardClick = (member: MemberOrg) => {
//     setSelectedMember(member);
//     setIsModalOpen(true);
//   };

//   // Render TinaCMS blocks
//   const renderBlock = (block: PagesBlocks, index: number) => {
//     if (block.__typename === 'PagesBlocksTextBoxWithImage') {
//       return <TextBoxWithImage key={index} {...block} />;
//     }
//     return null;
//   };

//   // Animation variants for modal
//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { type: 'spring', stiffness: 300, damping: 20 },
//     },
//     exit: { opacity: 0, scale: 0.95 },
//   };

//   // Animation variants for card container
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   // Animation variants for individual cards
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <NextSeo
//         title={content.title || 'Members'}
//         description="Meet our team members and partner organizations"
//       />
//       <div className="members-page" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <div className="container mx-auto px-4 py-12">
//           {/* Render TinaCMS title and blocks */}
//           {content.blocks.length > 0 ? (
//             <div className="space-y-20 mb-12">
//               {content.blocks.map((block, index) => renderBlock(block, index))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-500 mb-12">No static content available.</p>
//           )}

//           {/* Render member cards with animations */}
//           <section className="mt-12">
//             {memberOrgs.length === 0 ? (
//               <p className="text-center text-gray-500">No member organizations found.</p>
//             ) : (
//               <motion.div
//                 className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {memberOrgs.map((member) => (
//                   <motion.div
//                     key={member.id}
//                     className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center cursor-pointer"
//                     onClick={() => handleCardClick(member)}
//                     role="button"
//                     tabIndex={0}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter' || e.key === ' ') {
//                         handleCardClick(member);
//                       }
//                     }}
//                     variants={cardVariants}
//                     whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {member.memberLogo ? (
//                       <div className="relative w-3/4 h-48 mx-auto mb-4">
//                         <Image
//                           src={`https:${member.memberLogo}`}
//                           alt={`${member.memberName} logo`}
//                           fill
//                           style={{ objectFit: 'contain' }}
//                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         />
//                       </div>
//                     ) : (
//                       <div className="w-3/4 h-48 mx-auto mb-4 bg-gray-200 flex items-center justify-center rounded">
//                         <span className="text-gray-500">No Logo</span>
//                       </div>
//                     )}
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </section>

//           {/* Animated modal */}
//           <AnimatePresence>
//             {isModalOpen && selectedMember && (
//               <motion.div
//                 className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.div
//                   className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
//                   variants={modalVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                 >
//                   <div className="flex justify-end">
//                     <button
//                       onClick={() => setIsModalOpen(false)}
//                       className="text-gray-500 hover:text-gray-700 text-2xl"
//                     >
//                       ×
//                     </button>
//                   </div>
//                   <div className="flex flex-col items-center">
//                     {selectedMember.memberLogo ? (
//                       <div className="relative w-32 h-32 mb-4">
//                         <Image
//                           src={`https:${selectedMember.memberLogo}`}
//                           alt={`${selectedMember.memberName} logo`}
//                           fill
//                           style={{ objectFit: 'contain' }}
//                         />
//                       </div>
//                     ) : (
//                       <div className="w-32 h-32 mb-4 bg-gray-200 flex items-center justify-center rounded">
//                         <span className="text-gray-500">No Logo</span>
//                       </div>
//                     )}
//                     <h3 className="text-2xl font-semibold text-gray-900">{selectedMember.memberName}</h3>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MembersPage;















import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { createClient } from 'contentful';
import { client } from '../tina/__generated__/client';
import { PagesBlocks } from '../tina/__generated__/types';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOComponent from '../components/SEOComponent';
// Dynamically import TextBoxWithImage component
const TextBoxWithImage = dynamic(() => import('../components/textbox-variations/TextBoxWithImage'), { ssr: true });

// In-memory cache object
const cache: { [key: string]: { data: MemberOrg[]; timestamp: number } } = {};

// Cache duration in milliseconds (60 seconds)
const CACHE_DURATION = 60 * 60 * 1000;

interface MemberOrg {
  id: string;
  memberName: string;
  memberLogo: string | null;
}
type SEO = {
  title?: string;
  description?: string;
};


interface MembersPageProps {
  content: {
    title: string;
    seo: SEO | null; // Allow null for cases where SEO data is absent
    blocks: PagesBlocks[];
  };
  memberOrgs: MemberOrg[];
  locale: string;
}

export const getStaticProps: GetStaticProps<MembersPageProps> = async ({ locale }) => {
  // Fetch TinaCMS content
  let rawContent;
  try {
    const res = await client.queries.pages({
      relativePath: `${locale}/Members.md`,
    });
    rawContent = res.data.pages;
  } catch (e) {
    console.error('Tina fetch error:', e);
    rawContent = { title: 'Members', blocks: [] };
  }

  // Fetch Contentful memberOrg data with caching
  let memberOrgs: MemberOrg[] = [];
  try {
    const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
    const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();
    const cacheKey = `memberOrgs_${localeKey}`;

    // Check if cache has valid data
    if (cache[cacheKey] && Date.now() - cache[cacheKey].timestamp < CACHE_DURATION) {
      memberOrgs = cache[cacheKey].data;
    } else {
      const contentfulClient = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
      });

      const response = await contentfulClient.getEntries({
        content_type: 'memberOrg',
        order: ['fields.memberName'],
      });

      memberOrgs = response.items.map((item) => {
        const fields = item.fields as {
          memberName?: string;
          memberNameEn?: string;
          memberNameFr?: string;
          memberNameAr?: string;
          memberLogo?: { fields: { file: { url: string } } };
        };
        const memberNameRaw = fields[`memberName${localeKey}` as keyof typeof fields] || fields.memberName;
        const memberName = typeof memberNameRaw === 'string' ? memberNameRaw : 'Unnamed Member';

        return {
          id: item.sys.id,
          memberName,
          memberLogo: fields.memberLogo?.fields?.file?.url || null,
        };
      });

      // Update cache
      cache[cacheKey] = { data: memberOrgs, timestamp: Date.now() };
    }
  } catch (error) {
    console.error('Error fetching memberOrg data:', error);
    memberOrgs = [];
  }

  return {
    props: {
      content: {
        title: rawContent.title || 'Members',
        seo: rawContent.seo || null,
        blocks: rawContent.blocks || [],
      },
      memberOrgs,
      locale: locale || 'en',
    },
    revalidate: 7200,
  };
};

const MembersPage: NextPage<MembersPageProps> = ({ content, memberOrgs, locale }) => {
  const [selectedMember, setSelectedMember] = useState<MemberOrg | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: content.seo?.title || content.title || 'Members',
    description: content.seo?.description || 'Meet the member organizations of FENOR.',
    publisher: {
      '@type': 'Organization',
      name: 'FENOR',
      url: 'https://www.fenor.org',
      logo: 'https://www.fenor.org/images/logo.jpg',
    },
  };
  // Handle card click to open modal
  const handleCardClick = (member: MemberOrg) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  // Render TinaCMS blocks
  const renderBlock = (block: PagesBlocks, index: number) => {
    if (block.__typename === 'PagesBlocksTextBoxWithImage') {
      return <TextBoxWithImage key={index} {...block} />;
    }
    return null;
  };

  // Animation variants for modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
    exit: { opacity: 0, scale: 0.95 },
  };

  // Animation variants for card container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <SEOComponent
        title={content.seo?.title || content.title || 'Members'}
        description={
          content.seo?.description || 'Meet the member organizations of FENOR, the National Federation of Gold Factories.'
        }
        canonicalPath={`/${locale}/members`}
        structuredData={structuredData}
      />
      <div className="members-page" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 py-12">
          {/* Render TinaCMS title and blocks */}
          {content.blocks.length > 0 ? (
            <div className="space-y-20 mb-12">
              {content.blocks.map((block, index) => renderBlock(block, index))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mb-12">No static content available.</p>
          )}

          {/* Render member cards with animations */}
          <section className="mt-12">
            {memberOrgs.length === 0 ? (
              <p className="text-center text-gray-500">No member organizations found.</p>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {memberOrgs.map((member) => (
                  <motion.div
                    key={member.id}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center cursor-pointer"
                    onClick={() => handleCardClick(member)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleCardClick(member);
                      }
                    }}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {member.memberLogo ? (
                      <div className="relative w-3/4 h-48 mx-auto mb-4">
                        <Image
                          src={`https:${member.memberLogo}`}
                          alt={`${member.memberName} logo`}
                          fill
                          style={{ objectFit: 'contain' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="w-3/4 h-48 mx-auto mb-4 bg-gray-200 flex items-center justify-center rounded">
                        <span className="text-gray-500">No Logo</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>

          {/* Animated modal */}
          <AnimatePresence>
            {isModalOpen && selectedMember && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="flex justify-end">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    {selectedMember.memberLogo ? (
                      <div className="relative w-32 h-32 mb-4">
                        <Image
                          src={`https:${selectedMember.memberLogo}`}
                          alt={`${selectedMember.memberName} logo`}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-32 mb-4 bg-gray-200 flex items-center justify-center rounded">
                        <span className="text-gray-500">No Logo</span>
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold text-gray-900">{selectedMember.memberName}</h3>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default MembersPage;