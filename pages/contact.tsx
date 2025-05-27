// import React, { useState } from 'react';
// import { motion, Variants } from 'framer-motion';
// import { GetStaticProps, NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import Image from 'next/image';
// import { client } from '../tina/__generated__/client';
// import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Link from 'next/link';
// import {
//   faFacebook,
//   faXTwitter,
//   faLinkedin,
//   faInstagram,
//   faYoutube,
// } from '@fortawesome/free-brands-svg-icons';


// // Social media icon map
// const iconMap = {
//   facebook: faFacebook,
//   twitter: faXTwitter,
//   linkedin: faLinkedin,
//   instagram: faInstagram,
//   youtube: faYoutube,
// };

// // Animation variants
// const fadeInLeft: Variants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };
// const fadeInRight: Variants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// type ContactBlock = {
//   __typename: 'PagesBlocksContact';
//   bigHeader?: TinaMarkdownContent;
//   contactParagraph?: TinaMarkdownContent;
//   nameLabel?: string;
//   emailLabel?: string;
//   messageLabel?: string;
//   buttonText?: string;
//   image?: string;
//   mapImage?: string;
//   mapLink ?:string;
//   address?: { label: string; text: string };
//   email?: { label: string; text: string };
//   phone?: { label: string; text: string };
//   contactTimings?: { label: string; text: string };
//   followLabel?: string;
//   socialMedia?: { platform: string; link: string }[];
// };

// interface Content {
//   title: string;
//   seo: { title?: string; description?: string; keywords?: string[] } | null;
//   blocks?: { __typename: string }[];
// }

// interface ContactProps {
//   content: Content;
//   locale: string;
// }

// export const getStaticProps: GetStaticProps<ContactProps> = async ({ locale }) => {
//   try {
//     const res = await client.queries.pages({ relativePath: `${locale}/Contact.md` });
//     const raw = res.data.pages;

//     const seoTemp: { title?: string; description?: string; keywords?: string[] } = {};
//     if (raw.seo) {
//       if (raw.seo.title) seoTemp.title = raw.seo.title;
//       if (raw.seo.description) seoTemp.description = raw.seo.description;
//       if (Array.isArray(raw.seo.keywords)) {
//         const kws = raw.seo.keywords.filter((kw): kw is string => typeof kw === 'string');
//         if (kws.length) seoTemp.keywords = kws;
//       }
//     }
//     const seo = Object.keys(seoTemp).length ? seoTemp : null;

//     return {
//       props: {
//         content: {
//           title: raw.title || 'Contact',
//           seo,
//           blocks: raw.blocks,
//         },
//         locale: locale || 'en',
//       },
//     };
//   } catch (e) {
//     console.error('Error fetching TinaCMS data for Contact:', e);
//     return {
//       props: {
//         content: { title: 'Error', seo: { title: 'Error' }, blocks: [] },
//         locale: locale || 'en',
//       },
//     };
//   }
// };

// const ContactPage: NextPage<ContactProps> = ({ content, locale }) => {
//   const block = content.blocks?.find(
//     (b): b is ContactBlock => b.__typename === 'PagesBlocksContact'
//   );

//   // Form state
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

//   if (!block) {
//     return (
//       <div className="contact-page text-white" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <p>No contact content available.</p>
//       </div>
//     );
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('sending');

//     // Validations
//     if (fullName.trim().length < 2 || fullName.trim().length > 100) {
//       setStatus('error');
//       return;
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
//       setStatus('error');
//       return;
//     }
//     if (message.trim().length < 10 || message.trim().length > 1000) {
//       setStatus('error');
//       return;
//     }

//     try {
//       const res = await fetch('/api/sendEmail', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ fullName, email, message }),
//       });
//       if (res.ok) {
//         setStatus('success');
//         setFullName('');
//         setEmail('');
//         setMessage('');
//       } else {
//         setStatus('error');
//       }
//     } catch {
//       setStatus('error');
//     }
//   };

//   return (
//     <>
//       <NextSeo
//         title={content.seo?.title ?? content.title}
//         description={content.seo?.description ?? undefined}
//         additionalMetaTags={[
//           { name: 'keywords', content: content.seo?.keywords?.join(', ') ?? '' },
//         ]}
//       />

//       <div className="contact-page text-white" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
//         <div className="py-8 px-0 sm:px-0 lg:px-8 max-w-7xl mx-auto">

//           {/* Top grid: image & content */}
//           <div className="grid grid-cols-12 items-start gap-0">
//             {/* Hero image with fadeInLeft */}
//             <motion.div
//               className="col-span-12 md:col-span-4 flex justify-center mb-8 md:mb-0"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={fadeInLeft}
//             >
//               {block.image && (
//                 <Image
//                   src={block.image}
//                   alt="Hero"
//                   width={500}
//                   height={500}
//                   className="hidden lg:block max-w-full h-auto"
//                 />
//               )}
//             </motion.div>

//             {/* Header, paragraph & form with fadeInRight */}
//             <motion.div
//               className="col-span-12 md:col-span-6 md:pl-12 md:pr-8"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={fadeInRight}
//             >
//               {block.bigHeader && (
//                 <div className="text-[28px] sm:text-[33px] lg:text-[48px] font-bold mb-8">
//                   <TinaMarkdown content={block.bigHeader} />
//                 </div>
//               )}
//               {block.contactParagraph && (
//                 <div className="text-[13px] sm:text-[16px] lg:text-[19px] mb-14">
//                   <TinaMarkdown content={block.contactParagraph} />
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-8">
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   placeholder={block.nameLabel}
//                   className="w-full py-3 px-4 text-[13px] sm:text-[16px] lg:text-[19px] placeholder-white bg-transparent border-[3px] border-white rounded-[20px] outline-none"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder={block.emailLabel}
//                   className="w-full py-3 px-4 text-[13px] sm:text-[16px] lg:text-[19px] placeholder-white bg-transparent border-[3px] border-white rounded-[20px] outline-none"
//                 />
//                 <textarea
//                   name="message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder={block.messageLabel}
//                   className="w-full py-3 px-4 h-40 text-[13px] sm:text-[16px] lg:text-[19px] placeholder-white bg-transparent border-[3px] border-white rounded-[20px] resize-none outline-none"
//                 />
//               <button
//    type="submit"
//    disabled={status === 'sending'}
//    className="
//      bg-[#EBBA7F]
//      text-black
//      rounded-md
//      hover:bg-special
//      text-[13px] md:text-[23px]
//      px-[15px] py-[15px]
//      inline-block
//      transition-colors duration-200
//      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EBBA7F]
//      disabled:opacity-50 disabled:cursor-not-allowed
//    "
//  >
//    {status === 'sending' ? 'Sending…' : block.buttonText}
//  </button>
//                 {status === 'success' && <p className="text-green-400">Message sent successfully!</p>}
//                 {status === 'error' && <p className="text-red-400">Failed to send. Please try again.</p>}
//               </form>
//             </motion.div>

//             {/* Spacer */}
//             <div className="hidden md:block md:col-span-2" />
//           </div>

//           {/* Map */}
//           {block.mapImage && (
//             <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[400px] max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto rounded-lg overflow-hidden my-32">
//               <Link href={block.mapLink} target='_blank'>
//                <Image src={block.mapImage} alt="Map" fill style={{ objectFit: 'cover' }} />
//               </Link>
             
//             </div>
//           )}
//   <div
//     className="hidden md:grid gap-x-6 gap-y-12"
//     style={{ gridTemplateColumns: '2fr 1fr 2fr 4fr 2fr' }}
//   >
//     {block.address && (
//       <>
//         <div />
//         <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px] mt-5">
//           {block.address.label}
//         </p>
//         <div />
//         <p className="text-[16px] sm:text-[19px] lg:text-[23px]">
//           {block.address.text}
//         </p>
//         <div />
//       </>
//     )}
//     {block.email && (
//       <>
//         <div />
//         <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]">
//           {block.email.label}
//         </p>
//         <div />
//         <p className="text-[16px] sm:text-[19px] lg:text-[23px]">
//           <a href={`mailto:${block.email.text}`} className="text-white">
//             {block.email.text}
//           </a>
//         </p>
//         <div />
//       </>
//     )}
//     {block.phone && (
//       <>
//         <div />
//         <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]">
//           {block.phone.label}
//         </p>
//         <div />
//         <p className="text-[16px] sm:text-[19px] lg:text-[23px]">
//           {block.phone.text}
//         </p>
//         <div />
//       </>
//     )}
//     {block.contactTimings && (
//       <>
//         <div />
//         <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]">
//           {block.contactTimings.label}
//         </p>
//         <div />
//         <p className="text-[16px] sm:text-[19px] lg:text-[23px]">
//           {block.contactTimings.text}
//         </p>
//         <div />
//       </>
//     )}
//     {block.followLabel && (
//       <>
//         <div />
//         <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]">
//           {block.followLabel}
//         </p>
//         <div />
//         <div className="flex space-x-12">
//           {block.socialMedia?.map((social, i) => (
//             <a
//               key={i}
//               href={social.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-yellow-400"
//             >
//               <FontAwesomeIcon
//                 icon={iconMap[social.platform as keyof typeof iconMap]}
//                 className="fa-2x"
//               />
//             </a>
//           ))}
//         </div>
//         <div />
//       </>
//     )}
//   </div>
//      <div className="md:hidden space-y-8">
//     {block.address && (
//       <div>
//         <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px] mt-5">{block.address.label}</p>
//         <p className="text-[16px] sm:text-[19px] lg:text-[23px] mt-5">{block.address.text}</p>
//       </div>
//     )}
//     {block.email && (
//       <div>
//         <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]">{block.email.label}</p>
//         <p className="text-[16px] sm:text-[19px] lg:text-[23px]">
//           <a href={`mailto:${block.email.text}`} className="text-white">{block.email.text}</a>
//         </p>
//       </div>
//     )}
//     {block.phone && (
//       <div>
//         <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px] mt-5">{block.phone.label}</p>
//         <p className="text-[16px] sm:text-[19px] lg:text-[23px] mt-5">{block.phone.text}</p>
//       </div>
//     )}
//     {block.contactTimings && (
//       <div>
//         <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px] mt-5">{block.contactTimings.label}</p>
//         <p className="text-[16px] sm:text-[19px] lg:text-[23px] mt-5">{block.contactTimings.text}</p>
//       </div>
//     )}
//     {block.followLabel && (
//       <div >
//         <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]">{block.followLabel}</p>
//         <div className="flex space-x-6 mt-5">
//           {block.socialMedia?.map((social, i) => (
//             <a
//               key={i}
//               href={social.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-yellow-400"
//             >
//               <FontAwesomeIcon
//                 icon={iconMap[social.platform as keyof typeof iconMap]}
//                 className="fa-2x"
//               />
//             </a>
//           ))}
//         </div>
//       </div>
//     )}
//   </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactPage;














import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import SEOComponent from '@/components/SEOComponent';
import Image from 'next/image';
import { client } from '../tina/__generated__/client';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

// Social media icon map
const iconMap = {
  facebook: faFacebook,
  twitter: faXTwitter,
  linkedin: faLinkedin,
  instagram: faInstagram,
  youtube: faYoutube,
};

// Animation variants
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type ContactBlock = {
  __typename: 'PagesBlocksContact';
  bigHeader?: TinaMarkdownContent;
  contactParagraph?: TinaMarkdownContent;
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  buttonText?: string;
  image?: string;
  mapImage?: string;
  mapLink?: string;
  address?: { label: string; text: string };
  email?: { label: string; text: string };
  phone?: { label: string; text: string };
  contactTimings?: { label: string; text: string };
  followLabel?: string;
  socialMedia?: { platform: string; link: string }[];
};
type SEO = {
  title?: string;
  description?: string;
};
interface Content {
  title: string;
  seo: SEO | null;
  blocks?: { __typename: string }[];
}

interface ContactProps {
  content: Content;
  locale: string;
}

export const getStaticProps: GetStaticProps<ContactProps> = async ({ locale }) => {
  try {
    const res = await client.queries.pages({ relativePath: `${locale}/Contact.md` });
    const raw = res.data.pages;

    const seoTemp: { title?: string; description?: string; keywords?: string[] } = {};
    if (raw.seo) {
      if (raw.seo.title) seoTemp.title = raw.seo.title;
      if (raw.seo.description) seoTemp.description = raw.seo.description;
     
    }
    const seo = Object.keys(seoTemp).length ? seoTemp : null;

    return {
      props: {
        content: {
          title: raw.title || 'Contact',
          seo,
          blocks: raw.blocks,
        },
        locale: locale || 'en',
      },
    };
  } catch (e) {
    console.error('Error fetching TinaCMS data for Contact:', e);
    return {
      props: {
        content: { title: 'Error', seo: { title: 'Error' }, blocks: [] },
        locale: locale || 'en',
      },
    };
  }
};

const ContactPage: NextPage<ContactProps> = ({ content, locale }) => {
  const block = content.blocks?.find(
    (b): b is ContactBlock => b.__typename === 'PagesBlocksContact'
  );

  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  if (!block) {
    return (
      <div className="contact-page text-white" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <p>No contact content available.</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Validations
    if (fullName.trim().length < 2 || fullName.trim().length > 100) {
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error');
      return;
    }
    if (message.trim().length < 10 || message.trim().length > 1000) {
      setStatus('error');
      return;
    }

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, message }),
      });
      if (res.ok) {
        setStatus('success');
        setFullName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
     <SEOComponent
        title={content.seo?.title || content.title || 'Contact Us'}
        description={
          content.seo?.description || 'Contact us FENOR, the National Federation of Gold Factories.'
        }
        canonicalPath={`/${locale}/contact`}
      />

      <div className="contact-page text-white" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="py-8 px-0 sm:px-0 lg:px-8 max-w-7xl mx-auto">
          {/* Top grid: image & content */}
          <div className="grid grid-cols-12 items-start gap-0">
            {/* Hero image with fadeInLeft */}
            <motion.div
              className="col-span-12 md:col-span-4 flex justify-center mb-8 md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              {block.image && (
                <Image
                  src={block.image}
                  alt="Hero"
                  width={500}
                  height={500}
                  className="hidden lg:block max-w-full h-auto"
                />
              )}
            </motion.div>

            {/* Header, paragraph & form with fadeInRight */}
            <motion.div
              className="col-span-12 md:col-span-6 md:pl-12 md:pr-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              {block.bigHeader && (
                <div className="text-[28px] sm:text-[33px] lg:text-[48px] font-bold mb-8">
                  <TinaMarkdown content={block.bigHeader} />
                </div>
              )}
              {block.contactParagraph && (
                <div className="text-[13px] sm:text-[16px] lg:text-[19px] mb-14">
                  <TinaMarkdown content={block.contactParagraph} />
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <input
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={block.nameLabel}
                  className="w-full py-3 px-4 text-[13px] sm:text-[16px] lg:text-[19px] placeholder-white bg-transparent border-[3px] border-white rounded-[20px] outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={block.emailLabel}
                  className="w-full py-3 px-4 text-[13px] sm:text-[16px] lg:text-[19px] placeholder-white bg-transparent border-[3px] border-white rounded-[20px] outline-none"
                />
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={block.messageLabel}
                  className="w-full py-3 px-4 h-40 text-[13px] sm:text-[16px] lg:text-[19px] placeholder-white bg-transparent border-[3px] border-white rounded-[20px] resize-none outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="
                    bg-[#EBBA7F]
                    text-black
                    rounded-md
                    hover:bg-special
                    text-[13px] md:text-[23px]
                    px-[15px] py-[15px]
                    inline-block
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EBBA7F]
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  {status === 'sending' ? 'Sending…' : block.buttonText}
                </button>
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-green-400"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400"
                    >
                      Failed to send. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-2" />
          </div>

          {/* Map */}
          {block.mapImage && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[400px] max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto rounded-lg overflow-hidden my-32"
            >
              <Link href={block.mapLink} target="_blank">
                <Image src={block.mapImage} alt="Map" fill style={{ objectFit: 'cover' }} />
              </Link>
            </motion.div>
          )}

          {/* Contact Details - Grid (Medium and Larger Screens) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="hidden md:grid gap-x-6 gap-y-12"
            style={{ gridTemplateColumns: '2fr 1fr 2fr 4fr 2fr' }}
          >
            {block.address && (
              <>
                <div />
                <motion.p
                  variants={itemVariants}
                  className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px] mt-5"
                >
                  {block.address.label}
                </motion.p>
                <div />
                <motion.p
                  variants={itemVariants}
                  className="text-[16px] sm:text-[19px] lg:text-[23px]"
                >
                  {block.address.text}
                </motion.p>
                <div />
              </>
            )}
            {block.email && (
              <>
                <div />
                <motion.p
                  variants={itemVariants}
                  className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]"
                >
                  {block.email.label}
                </motion.p>
                <div />
                <motion.p
                  variants={itemVariants}
                  className="text-[16px] sm:text-[19px] lg:text-[23px]"
                >
                  <a href={`mailto:${block.email.text}`} className="text-white">
                    {block.email.text}
                  </a>
                </motion.p>
                <div />
              </>
            )}
            {block.phone && (
              <>
                <div />
                <motion.p
                  variants={itemVariants}
                  className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]"
                >
                  {block.phone.label}
                </motion.p>
                <div />
                <motion.p
                  variants={itemVariants}
                  className="text-[16px] sm:text-[19px] lg:text-[23px]"
                >
                  {block.phone.text}
                </motion.p>
                <div />
              </>
            )}
            {block.contactTimings && (
              <>
                <div />
                <motion.p
                  variants={itemVariants}
                  className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]"
                >
                  {block.contactTimings.label}
                </motion.p>
                <div />
                <motion.p
                  variants={itemVariants}
                  className="text-[16px] sm:text-[19px] lg:text-[23px]"
                >
                  {block.contactTimings.text}
                </motion.p>
                <div />
              </>
            )}
            {block.followLabel && (
              <>
                <div />
                <motion.p
                  variants={itemVariants}
                  className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]"
                >
                  {block.followLabel}
                </motion.p>
                <div />
                <motion.div variants={containerVariants} className="flex space-x-12">
                  {block.socialMedia?.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400"
                      variants={itemVariants}
                    >
                      <FontAwesomeIcon
                        icon={iconMap[social.platform as keyof typeof iconMap]}
                        className="fa-2x"
                      />
                    </motion.a>
                  ))}
                </motion.div>
                <div />
              </>
            )}
          </motion.div>

          {/* Contact Details - Mobile (Smaller Screens) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="md:hidden space-y-8"
          >
            {block.address && (
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px] mt-5">
                  {block.address.label}
                </p>
                <p className="text-[16px] sm:text-[19px] lg:text-[23px] mt-5">
                  {block.address.text}
                </p>
              </motion.div>
            )}
            {block.email && (
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]">
                  {block.email.label}
                </p>
                <p className="text-[16px] sm:text-[19px] lg:text-[23px]">
                  <a href={`mailto:${block.email.text}`} className="text-white">
                    {block.email.text}
                  </a>
                </p>
              </motion.div>
            )}
            {block.phone && (
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px] mt-5">
                  {block.phone.label}
                </p>
                <p className="text-[16px] sm:text-[19px] lg:text-[23px] mt-5">
                  {block.phone.text}
                </p>
              </motion.div>
            )}
            {block.contactTimings && (
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px] mt-5">
                  {block.contactTimings.label}
                </p>
                <p className="text-[16px] sm:text-[19px] lg:text-[23px] mt-5">
                  {block.contactTimings.text}
                </p>
              </motion.div>
            )}
            {block.followLabel && (
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[16px] sm:text-[19px] lg:text-[23px]">
                  {block.followLabel}
                </p>
                <motion.div variants={containerVariants} className="flex space-x-6 mt-5">
                  {block.socialMedia?.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400"
                      variants={itemVariants}
                    >
                      <FontAwesomeIcon
                        icon={iconMap[social.platform as keyof typeof iconMap]}
                        className="fa-2x"
                      />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;