import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import styles from '../styles/layout.module.css';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { client } from '../tina/__generated__/client'; // Adjust path based on your project structure

// Define the shape of the footer data
interface FooterData {
  description?: string | null; 
  quickLinks?: { label: string; url: string }[];
  aboutUs?: { label: string; url: string }[];
  importantLinks?: { label: string; url: string }[];
  socials?: { name: string; url: string }[];
  copyrightText?: string;
  madeByPrefix?: string;
  agency?: { name: string; url: string };
}

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const router = useRouter();
  const currentLocale = router.locale || 'en';

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const res = await client.queries.footer({ relativePath: `${currentLocale}.json` });
        setFooterData(res.data.footer);
      } catch (error) {
        console.error('Error fetching footer data:', error);
        // If fetch fails, footerData remains null, and Footer will handle it
      }
    };
    fetchFooterData();
  }, [currentLocale]);

  // Explicitly set text direction: RTL for Arabic, LTR for all others
  const textDirection = currentLocale === 'ar' ? 'rtl' : 'ltr';

  return (
    <div className={styles.layoutContainer} dir={textDirection}>
      <DefaultSeo
        titleTemplate="%s | FENOR"
        defaultTitle="Fenor"
        description="Welcome to My Website, a place for great content."
        openGraph={{
          type: 'website',
          locale: currentLocale,
          url: 'https://www.mywebsite.com',
          site_name: 'FENOR',
        }}
      />
      <Header />
      <main className="flex-grow py-8">
        {children}
      </main>
      <Footer footerData={footerData} />
    </div>
  );
};

export default Layout;