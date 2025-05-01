import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import styles from '../styles/layout.module.css'; // Import the CSS module

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className="flex-grow py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;