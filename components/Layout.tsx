import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import styles from '../styles/layout.module.css'; // Import the CSS module
import { DefaultSeo } from 'next-seo'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <DefaultSeo
        titleTemplate="%s | FENOR"
        defaultTitle="Fenor"
        description="Welcome to My Website, a place for great content."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.mywebsite.com',
          site_name: 'FENOR',
        }}
      />
      <Header />
      <main className="flex-grow py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;