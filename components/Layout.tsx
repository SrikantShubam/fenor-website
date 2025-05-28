// // components/Layout.tsx
// import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import { DefaultSeo } from 'next-seo'

// import Header from './Header'
// import Footer, { FooterData } from './Footer/Footer'
// import styles from '../styles/layout.module.css'
// import { client } from '../tina/__generated__/client'

// interface LayoutProps {
//   children: React.ReactNode
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [footerData, setFooterData] = useState<FooterData>()
//   const router = useRouter()
//   const currentLocale = router.locale || 'en'

//   useEffect(() => {
//     client.queries
//       .footer({ relativePath: `${currentLocale}.json` })
//       .then(res => {
//         const raw = res.data.footer

//         // clean out any nulls and strip away __typename
//         const clean: FooterData = {
//           description: raw.description ?? undefined,
//           quickLinks: raw.quickLinks
//             ?.filter((x): x is { label: string; url: string } => Boolean(x))
//             .map(({ label, url }) => ({ label, url })),
//           aboutUs: raw.aboutUs
//             ?.filter((x): x is { label: string; url: string } => Boolean(x))
//             .map(({ label, url }) => ({ label, url })),
//           importantLinks: raw.importantLinks
//             ?.filter((x): x is { label: string; url: string } => Boolean(x))
//             .map(({ label, url }) => ({ label, url })),
//           socials: raw.socials
//             ?.filter((x): x is { name: string; url: string } => Boolean(x))
//             .map(({ name, url }) => ({ name, url })),
//         }

//         setFooterData(clean)
//       })
//       .catch(err => {
//         console.error('Error fetching footer data:', err)
//       })
//   }, [currentLocale])

//   // RTL only for Arabic
//   const textDirection = currentLocale === 'ar' ? 'rtl' : 'ltr'

//   return (
//     <div className={styles.layoutContainer} dir={textDirection}>
//       <DefaultSeo
//         titleTemplate="%s | FENOR"
//         defaultTitle="FENOR"
//         description="Welcome to FENOR, the Fédération Nationale des Usines d'Or."
//         openGraph={{
//           type: 'website',
//           locale: currentLocale,
//           url: 'https://www.mywebsite.com',
//           site_name: 'FENOR',
//         }}
//       />
//       <Header />
//       <main className="flex-grow py-8">{children}</main>
//       <Footer footerData={footerData} />
//     </div>
//   )
// }

// export default Layout






// import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import { DefaultSeo } from 'next-seo'

// import Header from './Header'
// import Footer, { FooterData } from './Footer/Footer'
// import styles from '../styles/layout.module.css'
// import { client } from '../tina/__generated__/client'

// interface LayoutProps {
//   children: React.ReactNode
// }


// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [footerData, setFooterData] = useState<FooterData>()
//   const router = useRouter()
//   const currentLocale = router.locale || 'en'

//   useEffect(() => {
//     client.queries
//       .footer({ relativePath: `${currentLocale}.json` })
//       .then(res => {
//         const raw = res.data.footer

//         // clean out any nulls and strip away __typename
//         const clean: FooterData = {
//           description: raw.description ?? undefined,
//           quickLinks: raw.quickLinks
//             ?.filter(Boolean)
//             .map(({ label, url }) => ({ label, url })),
//           aboutUs: raw.aboutUs
//             ?.filter(Boolean)
//             .map(({ label, url }) => ({ label, url })),
//           importantLinks: raw.importantLinks
//             ?.filter(Boolean)
//             .map(({ label, url }) => ({ label, url })),
//           socials: raw.socials
//             ?.filter(Boolean)
//             .map(({ name, url }) => ({ name, url })),
//         }

//         setFooterData(clean)
//       })
//       .catch(err => {
//         console.error('Error fetching footer data:', err)
//       })
//   }, [currentLocale])

//   // RTL only for Arabic
//   const textDirection = currentLocale === 'ar' ? 'rtl' : 'ltr'

//   return (
//     <div className={styles.layoutContainer} dir={textDirection}>
//       <DefaultSeo
//         titleTemplate="%s | FENOR"
//         defaultTitle="FENOR"
//         description="Welcome to FENOR, the Fédération Nationale des Usines d'Or."
//         openGraph={{
//           type: 'website',
//           locale: currentLocale,
//           url: 'https://www.mywebsite.com',
//           site_name: 'FENOR',
//         }}
//       />
//       <Header />
//       <main className="flex-grow py-8">{children}</main>
//       <Footer footerData={footerData} />
//     </div>
//   )
// }

// export default Layout


// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { DefaultSeo } from 'next-seo';
// import { motion } from 'framer-motion';
// import Header from './Header';
// import Footer, { FooterData } from './Footer/Footer';
// import styles from '../styles/layout.module.css';
// import { client } from '../tina/__generated__/client';
// import ClientOnlyAnimatePresence from './ClientOnlyAnimatePresence';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [footerData, setFooterData] = useState<FooterData>();
//   const router = useRouter();
//   const currentLocale = router.locale || 'en';

//   useEffect(() => {
//     client.queries
//       .footer({ relativePath: `${currentLocale}.json` })
//       .then(res => {
//         const raw = res.data.footer;

//         const clean: FooterData = {
//           description: raw.description ?? undefined,
//           quickLinks: raw.quickLinks
//             ?.filter((x): x is { __typename: "FooterQuickLinks"; label: string; url: string } => Boolean(x))
//             .map(({ label, url }) => ({ label, url })),
//           aboutUs: raw.aboutUs
//             ?.filter((x): x is { __typename: "FooterAboutUs"; label: string; url: string } => Boolean(x))
//             .map(({ label, url }) => ({ label, url })),
//           importantLinks: raw.importantLinks
//             ?.filter((x): x is { __typename: "FooterImportantLinks"; label: string; url: string } => Boolean(x))
//             .map(({ label, url }) => ({ label, url })),
//           socials: raw.socials
//             ?.filter((x): x is { __typename: "FooterSocials"; name: string; url: string } => Boolean(x))
//             .map(({ name, url }) => ({ name, url })),
//         };

//         setFooterData(clean);
//       })
//       .catch(err => {
//         console.error('Error fetching footer data:', err);
//       });
//   }, [currentLocale]);

//   const textDirection = currentLocale === 'ar' ? 'rtl' : 'ltr';

//   return (
//     <ClientOnlyAnimatePresence>
//       <div className={styles.layoutContainer} dir={textDirection}>
//         <DefaultSeo
//           titleTemplate="%s | FENOR"
//           defaultTitle="FENOR"
//           description="Welcome to FENOR, the Fédération Nationale des Usines d'Or."
//           openGraph={{
//             type: 'website',
//             locale: currentLocale,
//             url: 'https://www.mywebsite.com',
//             site_name: 'FENOR',
//           }}
//         />
//         <Header />
//         <motion.div
//           key={router.asPath}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <main className="flex-grow py-8">{children}</main>
//         </motion.div>
//         <Footer footerData={footerData} />
//       </div>
//     </ClientOnlyAnimatePresence>
//   );
// };

// export default Layout;














// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { DefaultSeo } from 'next-seo';
// import { motion, Variants } from 'framer-motion';
// import Header from './Header';
// import Footer, { FooterData } from './Footer/Footer';
// import styles from '../styles/layout.module.css';
// import { client } from '../tina/__generated__/client';
// import ClientOnlyAnimatePresence from './ClientOnlyAnimatePresence';

// // Overlay variants covering full viewport
// const overlayVariants: Variants = {
//   initial: { y: '100%' },          // start off-screen bottom
//   animate: {
//     y: '0%',                       // slide in to cover
//     transition: { duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }
//   },
//   exit: {
//     y: '-100%',                    // slide out top
//     transition: { duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }
//   }
// };

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [footerData, setFooterData] = useState<FooterData>();
//   const [isAnimating, setIsAnimating] = useState(false);
//   const router = useRouter();
//   const currentLocale = router.locale || 'en';

//   // Fetch footer JSON based on locale
//   useEffect(() => {
//     client.queries.footer({ relativePath: `${currentLocale}.json` })
//       .then(res => {
//         const raw = res.data.footer;
//         const clean: FooterData = {
//           description: raw.description ?? undefined,
//           quickLinks: raw.quickLinks
//             ?.filter((x): x is { __typename: 'FooterQuickLinks'; label: string; url: string } => Boolean(x))
//             .map(({ label, url }) => ({ label, url })),
//           aboutUs: raw.aboutUs
//             ?.filter((x): x is { __typename: 'FooterAboutUs'; label: string; url: string } => Boolean(x))
//             .map(({ label, url }) => ({ label, url })),
//           importantLinks: raw.importantLinks
//             ?.filter((x): x is { __typename: 'FooterImportantLinks'; label: string; url: string } => Boolean(x))
//             .map(({ label, url }) => ({ label, url })),
//           socials: raw.socials
//             ?.filter((x): x is { __typename: 'FooterSocials'; name: string; url: string } => Boolean(x))
//             .map(({ name, url }) => ({ name, url })),
//         };
//         setFooterData(clean);
//       })
//       .catch(err => console.error('Error fetching footer:', err));
//   }, [currentLocale]);

//   // Trigger overlay on route change
//   useEffect(() => {
//     setIsAnimating(true);
//   }, [router.asPath]);

//   // Direction for rtl locales
//   const textDirection = currentLocale === 'ar' ? 'rtl' : 'ltr';

//   return (
//     <div className={`${styles.layoutContainer} flex flex-col min-h-screen`} dir={textDirection}>
//       <DefaultSeo
//         titleTemplate="%s | FENOR"
//         defaultTitle="FENOR"
//         description="Welcome to FENOR, the Fédération Nationale des Usines d'Or."
//         openGraph={{ type: 'website', locale: currentLocale, url: 'https://www.mywebsite.com', site_name: 'FENOR' }}
//       />

//       {/* Static header/nav */}
//       <div className="relative z-20">
//         <Header />
//       </div>

//       <ClientOnlyAnimatePresence>
//         {/* Conditionally render overlay */}
//         {isAnimating && (
//           <motion.div
//             key="overlay"
//             className="fixed inset-0 z-30 bg-[#000B18]"
//             variants={overlayVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             onAnimationComplete={(definition) => {
//               if (definition === 'animate') {
//                 setIsAnimating(false);
//               }
//             }}
//           />
//         )}

//         {/* Main content under overlay */}
//         <motion.div
//           key={router.asPath}
//           className="relative z-10 flex flex-col flex-1 overflow-hidden"
//         >
//           <main className="flex-grow overflow-y-auto py-8">
//             {children}
//           </main>
//           <Footer footerData={footerData} />
//         </motion.div>
//       </ClientOnlyAnimatePresence>
//     </div>
//   );
// };

// export default Layout;




































import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { motion, Variants } from 'framer-motion';
import Header from './Header';
import Footer, { FooterData } from './Footer/Footer';
import styles from '../styles/layout.module.css';
import { client } from '../tina/__generated__/client';
import ClientOnlyAnimatePresence from './ClientOnlyAnimatePresence';

// Overlay variants covering full viewport
const overlayVariants: Variants = {
  initial: { y: '100%' },          // start off-screen bottom
  animate: {
    y: '0%',                       // slide in to cover
    transition: { duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }
  },
  exit: {
    y: '-100%',                    // slide out top
    transition: { duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }
  }
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [footerData, setFooterData] = useState<FooterData>();
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  const currentLocale = router.locale || 'en';
  const baseUrl = 'https://www.fenor.org';
  // Fetch footer JSON based on locale
  useEffect(() => {
    client.queries.footer({ relativePath: `${currentLocale}.json` })
      .then(res => {
        const raw = res.data.footer;
        const clean: FooterData = {
          description: raw.description ?? undefined,
          quickLinks: raw.quickLinks
            ?.filter((x): x is { __typename: 'FooterQuickLinks'; label: string; url: string } => Boolean(x))
            .map(({ label, url }) => ({ label, url })),
          aboutUs: raw.aboutUs
            ?.filter((x): x is { __typename: 'FooterAboutUs'; label: string; url: string } => Boolean(x))
            .map(({ label, url }) => ({ label, url })),
          importantLinks: raw.importantLinks
            ?.filter((x): x is { __typename: 'FooterImportantLinks'; label: string; url: string } => Boolean(x))
            .map(({ label, url }) => ({ label, url })),
          socials: raw.socials
            ?.filter((x): x is { __typename: 'FooterSocials'; name: string; url: string } => Boolean(x))
            .map(({ name, url }) => ({ name, url })),
            labels: raw.labels ?? {},
        };
        setFooterData(clean);
      })
      .catch(err => console.error('Error fetching footer:', err));
  }, [currentLocale]);

  // Trigger overlay on route change
  useEffect(() => {
    setIsAnimating(true);
  }, [router.asPath]);

  // Direction for rtl locales
  const textDirection = currentLocale === 'ar' ? 'rtl' : 'ltr';

  return (
    <div className={`${styles.layoutContainer} flex flex-col min-h-screen`} dir={textDirection}>
     <DefaultSeo
        titleTemplate="%s | FENOR" // Page-specific titles append to this
        defaultTitle="FENOR"
        description="Welcome to FENOR, the Fédération Nationale des Usines d'Or."
        openGraph={{
          type: 'website',
          locale: currentLocale,
          url: baseUrl,
          site_name: 'FENOR',
           images: [{ url: '/fenor-website/public/android-chrome-192x192.png' }]
        }}
        additionalLinkTags={[
          { rel: 'icon', href: '/favicon.ico' },
          { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
          { rel: 'icon', type: 'image/png', href: '/android-chrome-192x192.png', sizes: '192x192' },
          { rel: 'icon', type: 'image/png', href: '/android-chrome-512x512.png', sizes: '512x512' },
        ]}
      />
      {/* Static header/nav */}
      <div className="relative z-20">
        <Header />
      </div>

      <ClientOnlyAnimatePresence>
        {/* Conditionally render overlay */}
        {isAnimating && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-30 bg-[#000B18]"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={(definition) => {
              if (definition === 'animate') {
                setIsAnimating(false);
              }
            }}
          />
        )}

        {/* Main content under overlay */}
        <motion.div
          key={router.asPath}
          className="relative z-10 flex flex-col flex-1 overflow-hidden"
        >
          <main className="flex-grow overflow-y-auto py-8">
            {children}
          </main>
          <Footer footerData={footerData} />
        </motion.div>
      </ClientOnlyAnimatePresence>
    </div>
  );
};

export default Layout;