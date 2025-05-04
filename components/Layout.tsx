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






import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

import Header from './Header'
import Footer, { FooterData } from './Footer/Footer'
import styles from '../styles/layout.module.css'
import { client } from '../tina/__generated__/client'

interface LayoutProps {
  children: React.ReactNode
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [footerData, setFooterData] = useState<FooterData>()
  const router = useRouter()
  const currentLocale = router.locale || 'en'

  useEffect(() => {
    client.queries
      .footer({ relativePath: `${currentLocale}.json` })
      .then(res => {
        const raw = res.data.footer

        // clean out any nulls and strip away __typename
        const clean: FooterData = {
          description: raw.description ?? undefined,
          quickLinks: raw.quickLinks
            ?.filter(Boolean)
            .map(({ label, url }) => ({ label, url })),
          aboutUs: raw.aboutUs
            ?.filter(Boolean)
            .map(({ label, url }) => ({ label, url })),
          importantLinks: raw.importantLinks
            ?.filter(Boolean)
            .map(({ label, url }) => ({ label, url })),
          socials: raw.socials
            ?.filter(Boolean)
            .map(({ name, url }) => ({ name, url })),
        }

        setFooterData(clean)
      })
      .catch(err => {
        console.error('Error fetching footer data:', err)
      })
  }, [currentLocale])

  // RTL only for Arabic
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

export default Layout