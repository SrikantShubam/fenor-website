// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import Footer, { FooterData } from './Footer/Footer';
// import styles from '../styles/layout.module.css';
// import { DefaultSeo } from 'next-seo';
// import { useRouter } from 'next/router';
// import { client } from '../tina/__generated__/client'; // Adjust path based on your project structure

// // Define the shape of the footer data
// // interface FooterData {
// //   description?: string | null; 
// //   quickLinks?: { label: string; url: string }[];
// //   aboutUs?: { label: string; url: string }[];
// //   importantLinks?: { label: string; url: string }[];
// //   socials?: { name: string; url: string }[];
// //   copyrightText?: string;
// //   madeByPrefix?: string;
// //   agency?: { name: string; url: string };
// // }
// interface FooterData {
//   description?: string | null;
//   quickLinks?: ({ label: string; url: string } | null)[] | null;
//   aboutUs?:   ({ label: string; url: string } | null)[] | null;
//   importantLinks?: ({ label: string; url: string } | null)[] | null;
//   socials?:   ({ name: string; url: string } | null)[] | null;
// }

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [footerData, setFooterData] = useState<FooterData | undefined>(undefined);
//   const router = useRouter();
//   const currentLocale = router.locale || 'en';

//   useEffect(() => {
//     const fetchFooterData = async () => {
//       try {
//         const res = await client.queries.footer({ relativePath: `${currentLocale}.json` });
//         setFooterData(res.data.footer);
//       } catch (error) {
//         console.error('Error fetching footer data:', error);
//         // If fetch fails, footerData remains null, and Footer will handle it
//       }
//     };
//     fetchFooterData();
//   }, [currentLocale]);

//   // Explicitly set text direction: RTL for Arabic, LTR for all others
//   const textDirection = currentLocale === 'ar' ? 'rtl' : 'ltr';

//   return (
//     <div className={styles.layoutContainer} dir={textDirection}>
//       <DefaultSeo
//         titleTemplate="%s | FENOR"
//         defaultTitle="Fenor"
//         description="Welcome to My Website, a place for great content."
//         openGraph={{
//           type: 'website',
//           locale: currentLocale,
//           url: 'https://www.mywebsite.com',
//           site_name: 'FENOR',
//         }}
//       />
//       <Header />
//       <main className="flex-grow py-8">
//         {children}
//       </main>
//       <Footer footerData={footerData} />
//     </div>
//   );
// };

// export default Layout;




// components/Layout.tsx
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

import Header from './Header'
import Footer, { FooterData } from './Footer/Footer'
import styles from '../styles/layout.module.css'
import { client } from '../tina/__generated__/client' // Adjust if needed

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [footerData, setFooterData] = useState<FooterData>()
  const router = useRouter()
  const currentLocale = router.locale || 'en'

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const res = await client.queries.footer({
          relativePath: `${currentLocale}.json`,
        })
        const raw = res.data.footer

        // Filter out any null entries so arrays match FooterData’s non-null types
        const clean: FooterData = {
          ...raw,
          quickLinks: raw.quickLinks
            ?.filter((x): x is { label: string; url: string } => Boolean(x)),
          aboutUs: raw.aboutUs
            ?.filter((x): x is { label: string; url: string } => Boolean(x)),
          importantLinks: raw.importantLinks
            ?.filter((x): x is { label: string; url: string } => Boolean(x)),
          socials: raw.socials
            ?.filter((x): x is { name: string; url: string } => Boolean(x)),
        }

        setFooterData(clean)
      } catch (error) {
        console.error('Error fetching footer data:', error)
        // footerData stays undefined → Footer shows its “No footer data available” fallback
      }
    }

    fetchFooterData()
  }, [currentLocale])

  // RTL for Arabic only
  const textDirection = currentLocale === 'ar' ? 'rtl' : 'ltr'

  return (
    <div className={styles.layoutContainer} dir={textDirection}>
      <DefaultSeo
        titleTemplate="%s | FENOR"
        defaultTitle="FENOR"
        description="Welcome to FENOR, the Fédération Nationale des Usines d'Or."
        openGraph={{
          type: 'website',
          locale: currentLocale,
          url: 'https://www.mywebsite.com',
          site_name: 'FENOR',
        }}
      />
      <Header />
      <main className="flex-grow py-8">{children}</main>
      <Footer footerData={footerData} />
    </div>
  )
}

export default Layout;
