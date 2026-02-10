
// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBars,
//   faTimes,
//   faChevronDown,
//   faChevronUp,
//   faArrowLeft,
//   faChevronRight,
// } from '@fortawesome/free-solid-svg-icons';
// import { motion } from 'framer-motion';
// import styles from './nav.module.css';
// import GoldButton from '../GoldButton';
// import { useSlugMap } from '../../lib/SlugMapContext'; // Adjust path to your context

// type Locale = 'en' | 'fr' | 'ar';

// interface NavItem {
//   label: string;
//   url: string;
//   isDropdown?: boolean;
// }

// interface InvestItem {
//   href: string;
//   label: string;
// }

// const INVEST_DROPDOWN_ITEMS: Record<Locale, InvestItem[]> = {
//   en: [
//     { href: '/en/invest/stocks', label: 'Stocks' },
//     { href: '/en/invest/bonds', label: 'Bonds' },
//     { href: '/en/invest/real-estate', label: 'Real Estate' },
//   ],
//   fr: [
//     { href: '/fr/invest/stocks', label: 'Actions' },
//     { href: '/fr/invest/bonds', label: 'Obligations' },
//     { href: '/fr/invest/real-estate', label: 'Immobilier' },
//   ],
//   ar: [
//     { href: '/ar/invest/stocks', label: 'الأسهم' },
//     { href: '/ar/invest/bonds', label: 'السندات' },
//     { href: '/ar/invest/real-estate', label: 'العقارات' },
//   ],
// };

// const LANG_DROPDOWN_ITEMS = [
//   { href: '/', label: 'English', locale: 'en' },
//   { href: '/', label: 'Français', locale: 'fr' },
//   { href: '/', label: 'العربية', locale: 'ar' },
// ] as const;

// const navVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
// };
// const itemVariants = {
//   hidden: { opacity: 0, y: -10 },
//   visible: { opacity: 1, y: 0 },
// };
// const dropdownVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
// };

// const Nav: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isInvestOpen, setIsInvestOpen] = useState(false);
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const [isInvestMenuOpen, setIsInvestMenuOpen] = useState(false);
//   const [navItems, setNavItems] = useState<NavItem[]>([]);
//   const [isSticky, setIsSticky] = useState(false);

//   const router = useRouter();
//   const rawLocale = router.locale ?? 'en';
//   const currentLocale = (['en', 'fr', 'ar'].includes(rawLocale) ? rawLocale : 'en') as Locale;
//   const { slugMap } = useSlugMap();

//   const investRef = useRef<HTMLDivElement>(null);
//   const langRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchNavItems = async () => {
//       try {
//         const { client } = await import('../../tina/__generated__/client');
//         const navData = await client.queries.navigation({
//           relativePath: `${currentLocale}.json`,
//         });
//         const items = (navData?.data?.navigation?.items || [])
//           .filter(item => item !== null)
//           .map(item => ({
//             label: item!.label,
//             url: item!.url,
//             isDropdown: Boolean(item!.isDropdown),
//           })) as NavItem[];
//         setNavItems(items);
//       } catch {
//         setNavItems([]);
//       }
//     };
//     fetchNavItems();
//   }, [currentLocale]);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (investRef.current && !investRef.current.contains(e.target as Node)) {
//         setIsInvestOpen(false);
//       }
//       if (langRef.current && !langRef.current.contains(e.target as Node)) {
//         setIsLangOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handler);
//     return () => document.removeEventListener('mousedown', handler);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleInvest = () => {
//     setIsInvestOpen(o => !o);
//     setIsLangOpen(false);
//   };
//   const toggleLang = () => {
//     setIsLangOpen(o => !o);
//     setIsInvestOpen(false);
//   };

//   const handleLanguageSwitch = (newLocale: string) => {
//     const currentPath = router.asPath;
//     const isArticlePage = currentPath.startsWith('/press/') && currentPath.split('/').length === 3;

//     if (isArticlePage && slugMap) {
//       const currentSlug = currentPath.split('/')[2];
//       const currentLang = currentLocale;

//       // Find the article ID based on current slug and language
//       const articleId = Object.keys(slugMap).find(id => slugMap[id][currentLang] === currentSlug);

//       if (articleId) {
//         const newLangSuffix = newLocale.split('-')[0] as Locale;
//         const newSlug = slugMap[articleId][newLangSuffix];
//         if (newSlug) {
//           router.push(`/press/${newSlug}`, undefined, { locale: newLocale });
//         } else {
//           router.push('/press', undefined, { locale: newLocale });
//         }
//       } else {
//         router.push('/press', undefined, { locale: newLocale });
//       }
//     } else {
//       router.push(currentPath, undefined, { locale: newLocale });
//     }
//     setIsLangOpen(false);
//     setIsMobileMenuOpen(false);
//   };

//   const investDropdownItems = INVEST_DROPDOWN_ITEMS[currentLocale];

//   return (
//     <motion.nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//     >
//       <motion.div className="flex justify-between items-center py-4 overflow-visible" variants={itemVariants}>
//         <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
//           <Link href={`/${currentLocale}`} className={styles.logo}>
//             <div className="flex items-center space-x-2">
//               <div className="relative w-[30px] h-[30px] md:w-[54px] md:h-[54px]">
//                 <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
//               </div>
//               <span>FENOR</span>
//             </div>
//           </Link>
//         </motion.div>

//         <motion.div className="hidden lg:flex items-center space-x-8 whitespace-nowrap overflow-visible">
//           {navItems.map((link, idx) => (
//             <motion.div key={idx} variants={itemVariants} whileHover={{ y: -2 }}>
//               {link.isDropdown ? (
//                 <div ref={investRef} className="relative">
//                   <button
//                     className={styles.menuItem}
//                     onClick={toggleInvest}
//                     aria-expanded={isInvestOpen}
//                   >
//                     {link.label}{' '}
//                     <FontAwesomeIcon icon={isInvestOpen ? faChevronUp : faChevronDown} />
//                   </button>
//                   <motion.div
//                     className={`${styles.dropdown} ${isInvestOpen ? styles.show : ''}`}
//                     initial="hidden"
//                     animate={isInvestOpen ? 'visible' : 'hidden'}
//                     variants={dropdownVariants}
//                   >
//                     {investDropdownItems.map(item => (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         className={styles.dropdownItem}
//                         onClick={() => setIsInvestOpen(false)}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.url}
//                   className={`${styles.menuItem} ${router.pathname === link.url ? styles.active : ''}`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </motion.div>
//           ))}

//           <motion.div ref={langRef} variants={itemVariants} whileHover={{ y: -2 }}>
//             <button
//               className={`${styles.menuItem} ${styles.selected}`}
//               onClick={toggleLang}
//               aria-expanded={isLangOpen}
//             >
//               {currentLocale.toUpperCase()}{' '}
//               <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
//             </button>
//             <motion.div
//               className={`${styles.dropdown} ${isLangOpen ? styles.show : ''}`}
//               initial="hidden"
//               animate={isLangOpen ? 'visible' : 'hidden'}
//               variants={dropdownVariants}
//             >
//               {LANG_DROPDOWN_ITEMS.map(item => (
//                 <button
//                   key={item.locale}
//                   onClick={() => handleLanguageSwitch(item.locale)}
//                   className={styles.dropdownItem}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </motion.div>
//           </motion.div>

//           <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
//             <GoldButton />
//           </motion.div>
//         </motion.div>

//         <motion.button
//           className="block lg:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(true)}
//           aria-label="Toggle menu"
//           variants={itemVariants}
//           whileHover={{ scale: 1.1 }}
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </motion.button>
//       </motion.div>

//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenuOverlay}>
//           <motion.div
//             className={styles.mainMenu}
//             initial={{ x: '-100%' }}
//             animate={{ x: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className={styles.mobileMenuHeader}>
//               <Link href={`/${currentLocale}`} className={styles.logo}>
//                 <div className="flex items-center space-x-2">
//                   <div className="relative w-[30px] h-[30px]">
//                     <Image src="/fenor-logo.png" alt="FENOR logo" width={30} height={30} />
//                   </div>
//                   <span>FENOR</span>
//                 </div>
//               </Link>
//               <button
//                 className={styles.closeButton}
//                 onClick={() => {
//                   setIsMobileMenuOpen(false);
//                   setIsInvestMenuOpen(false);
//                 }}
//                 aria-label="Close menu"
//               >
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             </div>
//             <div className={styles.mobileMenuItems}>
//               {navItems.map((link, idx) => (
//                 <React.Fragment key={idx}>
//                   {link.isDropdown ? (
//                     <button
//                       className={styles.mobileMenuItem}
//                       onClick={() => setIsInvestMenuOpen(true)}
//                     >
//                       {link.label}{' '}
//                       <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
//                     </button>
//                   ) : (
//                     <Link
//                       href={link.url}
//                       className={styles.mobileMenuItem}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {link.label}
//                     </Link>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//             <div className="mt-4">
//               <div className={styles.langButtons}>
//                 {LANG_DROPDOWN_ITEMS.map(item => (
//                   <button
//                     key={item.locale}
//                     onClick={() => handleLanguageSwitch(item.locale)}
//                     className={`${styles.langButton} ${currentLocale === item.locale ? styles.activeLang : ''}`}
//                   >
//                     {item.locale.toUpperCase()}
//                   </button>
//                 ))}
//               </div>
//               <GoldButton className="mt-4 w-full" />
//             </div>
//           </motion.div>

//           <motion.div
//             className={styles.investMenu}
//             initial={{ x: '100%' }}
//             animate={{ x: isInvestMenuOpen ? 0 : '100%' }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className={styles.investMenuHeader}>
//               <div className="flex items-center space-x-2">
//                 <Link href={`/${currentLocale}`} className={styles.logo}>
//                   <div className="relative w-[30px] h-[30px]">
//                     <Image src="/fenor-logo.png" alt="FENOR logo" width={30} height={30} />
//                   </div>
//                 </Link>
//                 <span>Invest</span>
//               </div>
//               <button onClick={() => setIsInvestMenuOpen(false)}>
//                 <FontAwesomeIcon icon={faArrowLeft} />
//               </button>
//             </div>
//             <div className={styles.investMenuItems}>
//               {investDropdownItems.map(item => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={styles.mobileMenuItem}
//                   onClick={() => {
//                     setIsInvestMenuOpen(false);
//                     setIsMobileMenuOpen(false);
//                   }}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </motion.nav>
//   );
// };

// export default Nav;




//using tina I hope so...


// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBars,
//   faTimes,
//   faChevronDown,
//   faChevronUp,
//   faArrowLeft,
//   faChevronRight,
// } from '@fortawesome/free-solid-svg-icons';
// import { motion } from 'framer-motion';
// import styles from './nav.module.css';
// import GoldButton from '../GoldButton';
// import { useSlugMap } from '../../lib/SlugMapContext';

// type Locale = 'en' | 'fr' | 'ar';

// interface NavItem {
//   label: string;
//   url: string;
//   isDropdown?: boolean;
//   dropdownLinks?: { label: string; url: string }[];
// }

// interface LangItem {
//   href: string;
//   label: string;
//   locale: Locale;
// }

// const LANG_DROPDOWN_ITEMS: LangItem[] = [
//   { href: '/', label: 'English', locale: 'en' },
//   { href: '/', label: 'Français', locale: 'fr' },
//   { href: '/', label: 'العربية', locale: 'ar' },
// ];

// const navVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
// };
// const itemVariants = {
//   hidden: { opacity: 0, y: -10 },
//   visible: { opacity: 1, y: 0 },
// };
// const dropdownVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
// };

// export default function Nav() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeMobileLinks, setActiveMobileLinks] = useState<NavItem['dropdownLinks']>([]);
//   const [navItems, setNavItems] = useState<NavItem[]>([]);
//   const [isSticky, setIsSticky] = useState(false);

//   const router = useRouter();
//   const rawLocale = router.locale ?? 'en';
//   const currentLocale = (['en', 'fr', 'ar'].includes(rawLocale) ? rawLocale : 'en') as Locale;
//   const { slugMap } = useSlugMap();

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Fetch navigation from Tina JSON
//   useEffect(() => {
//     const fetchNavItems = async () => {
//       try {
//         const { client } = await import('../../tina/__generated__/client');
//         const navData = await client.queries.navigation({
//           relativePath: `${currentLocale}.json`,
//         });
//         const items = (navData?.data?.navigation?.items || [])
//           .filter(item => item !== null)
//           .map(item => ({
//             label: item!.label,
//             url: item!.url,
//             isDropdown: Boolean(item!.isDropdown),
//             dropdownLinks: item!.dropdownLinks?.map(dl => ({
//               label: dl!.label,
//               url: dl!.url,
//             })) || [],
//           })) as NavItem[];
//         setNavItems(items);
//       } catch {
//         setNavItems([]);
//       }
//     };
//     fetchNavItems();
//   }, [currentLocale]);

//   // Close desktop dropdown when clicking outside
//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handler);
//     return () => document.removeEventListener('mousedown', handler);
//   }, []);

//   // Sticky navbar on scroll
//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Language switcher logic
//   const handleLanguageSwitch = (newLocale: Locale) => {
//     const currentPath = router.asPath;
//     const isArticlePage = currentPath.startsWith('/press/') && currentPath.split('/').length === 3;

//     if (isArticlePage && slugMap) {
//       const currentSlug = currentPath.split('/')[2];
//       const articleId = Object.keys(slugMap).find(id => slugMap[id][currentLocale] === currentSlug);
//       if (articleId) {
//         const newSlug = slugMap[articleId][newLocale];
//         router.push(newSlug ? `/press/${newSlug}` : '/press', undefined, { locale: newLocale });
//       } else {
//         router.push('/press', undefined, { locale: newLocale });
//       }
//     } else {
//       router.push(currentPath, undefined, { locale: newLocale });
//     }

//     setIsDropdownOpen(false);
//     setIsMobileMenuOpen(false);
//   };

//   // Render
//   return (
//     <motion.nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//     >
//       <motion.div className="flex justify-between items-center py-4 overflow-visible" variants={itemVariants}>
//         {/* Logo */}
//         <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
//           <Link href={`/${currentLocale}`} className={styles.logo}>
//             <div className="flex items-center space-x-2">
//               <div className="relative w-[30px] h-[30px] md:w-[54px] md:h-[54px]">
//                 <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
//               </div>
//               <span>FENOR</span>
//             </div>
//           </Link>
//         </motion.div>

//         {/* Desktop Menu */}
//         <motion.div className="hidden lg:flex items-center space-x-8 whitespace-nowrap overflow-visible">
//           {navItems.map((link, idx) => (
//             <motion.div key={idx} variants={itemVariants} whileHover={{ y: -2 }}>
//               {link.isDropdown ? (
//                 <div ref={dropdownRef} className="relative">
//                   <button
//                     className={styles.menuItem}
//                     onClick={() => setIsDropdownOpen(o => !o)}
//                     aria-expanded={isDropdownOpen}
//                   >
//                     {link.label}{' '}
//                     <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
//                   </button>
//                   <motion.div
//                     className={`${styles.dropdown} ${isDropdownOpen ? styles.show : ''}`}
//                     initial="hidden"
//                     animate={isDropdownOpen ? 'visible' : 'hidden'}
//                     variants={dropdownVariants}
//                   >
//                     {(link.dropdownLinks || []).map(dl => (
//                       <Link
//                         key={dl.url}
//                         href={dl.url}
//                         className={styles.dropdownItem}
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         {dl.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.url}
//                   className={`${styles.menuItem} ${router.pathname === link.url ? styles.active : ''}`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </motion.div>
//           ))}

//           {/* Language Switcher */}
//           <motion.div variants={itemVariants} whileHover={{ y: -2 }}>
//             <button
//               className={`${styles.menuItem} ${styles.selected}`}
//               onClick={() => setIsDropdownOpen(o => !o)}
//               aria-expanded={isDropdownOpen}
//             >
//               {currentLocale.toUpperCase()}{' '}
//               <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
//             </button>
//             <motion.div
//               className={`${styles.dropdown} ${isDropdownOpen ? styles.show : ''}`}
//               initial="hidden"
//               animate={isDropdownOpen ? 'visible' : 'hidden'}
//               variants={dropdownVariants}
//             >
//               {LANG_DROPDOWN_ITEMS.map(item => (
//                 <button
//                   key={item.locale}
//                   onClick={() => handleLanguageSwitch(item.locale)}
//                   className={styles.dropdownItem}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Gold Button CTA */}
//           <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
//             <GoldButton />
//           </motion.div>
//         </motion.div>

//         {/* Mobile Menu Toggle */}
//         <motion.button
//           className="block lg:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(true)}
//           aria-label="Toggle menu"
//           variants={itemVariants}
//           whileHover={{ scale: 1.1 }}
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </motion.button>
//       </motion.div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenuOverlay}>
//           <motion.div
//             className={styles.mainMenu}
//             initial={{ x: '-100%' }}
//             animate={{ x: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* Header */}
//             <div className={styles.mobileMenuHeader}>
//               <Link href={`/${currentLocale}`} className={styles.logo}>
//                 <div className="flex items-center space-x-2">
//                   <div className="relative w-[30px] h-[30px]">
//                     <Image src="/fenor-logo.png" alt="FENOR logo" width={30} height={30} />
//                   </div>
//                   <span>FENOR</span>
//                 </div>
//               </Link>
//               <button
//                 className={styles.closeButton}
//                 onClick={() => {
//                   setIsMobileMenuOpen(false);
//                   setActiveMobileLinks([]);
//                 }}
//                 aria-label="Close menu"
//               >
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             </div>

//             {/* Menu Items */}
//             <div className={styles.mobileMenuItems}>
//               {navItems.map((link, idx) => (
//                 <React.Fragment key={idx}>
//                   {link.isDropdown ? (
//                     <button
//                       className={styles.mobileMenuItem}
//                       onClick={() => {
//                         setActiveMobileLinks(link.dropdownLinks || []);
//                       }}
//                     >
//                       {link.label}{' '}
//                       <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
//                     </button>
//                   ) : (
//                     <Link
//                       href={link.url}
//                       className={styles.mobileMenuItem}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {link.label}
//                     </Link>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>

//             {/* Language Buttons & CTA */}
//             <div className="mt-4">
//               <div className={styles.langButtons}>
//                 {LANG_DROPDOWN_ITEMS.map(item => (
//                   <button
//                     key={item.locale}
//                     onClick={() => handleLanguageSwitch(item.locale)}
//                     className={`${styles.langButton} ${currentLocale === item.locale ? styles.activeLang : ''}`}
//                   >
//                     {item.locale.toUpperCase()}
//                   </button>
//                 ))}
//               </div>
//               <GoldButton className="mt-4 w-full" />
//             </div>
//           </motion.div>

//           {/* Mobile Dropdown Panel */}
//           {activeMobileLinks.length > 0 && (
//             <motion.div
//               className={styles.investMenu}
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className={styles.investMenuHeader}>
//                 <button onClick={() => setActiveMobileLinks([])}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//               </div>
//               <div className={styles.investMenuItems}>
//                 {activeMobileLinks.map(dl => (
//                   <Link
//                     key={dl.url}
//                     href={dl.url}
//                     className={styles.mobileMenuItem}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {dl.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </div>
//       )}
//     </motion.nav>
//   );
// }

























// components/Nav.tsx

// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBars,
//   faTimes,
//   faChevronDown,
//   faChevronUp,
//   faArrowLeft,
//   faChevronRight,
// } from '@fortawesome/free-solid-svg-icons';
// import { motion } from 'framer-motion';
// import styles from './nav.module.css';
// import GoldButton from '../GoldButton';
// import { useSlugMap } from '../../lib/SlugMapContext';

// type Locale = 'en' | 'fr' | 'ar';

// interface NavItem {
//   label: string;
//   url: string;
//   isDropdown?: boolean;
//   dropdownLinks?: { label: string; url: string }[];
// }

// interface LangItem {
//   href: string;
//   label: string;
//   locale: Locale;
// }

// const LANG_DROPDOWN_ITEMS: LangItem[] = [
//   { href: '/', label: 'English', locale: 'en' },
//   { href: '/', label: 'Français', locale: 'fr' },
//   { href: '/', label: 'العربية', locale: 'ar' },
// ];

// const navVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
// };
// const itemVariants = {
//   hidden: { opacity: 0, y: -10 },
//   visible: { opacity: 1, y: 0 },
// };
// const dropdownVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
// };

// export default function Nav() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const [activeMobileLinks, setActiveMobileLinks] = useState<NavItem['dropdownLinks']>([]);
//   const [navItems, setNavItems] = useState<NavItem[]>([]);
//   const [isSticky, setIsSticky] = useState(false);

//   const router = useRouter();
//   const rawLocale = router.locale ?? 'en';
//   const currentLocale = (['en', 'fr', 'ar'].includes(rawLocale) ? rawLocale : 'en') as Locale;
//   const { slugMap } = useSlugMap();

//   const navRef = useRef<HTMLDivElement>(null);
//   const langRef = useRef<HTMLDivElement>(null);

//   // Fetch navigation from Tina
//   useEffect(() => {
//     const fetchNavItems = async () => {
//       try {
//         const { client } = await import('../../tina/__generated__/client');
//         const navData = await client.queries.navigation({
//           relativePath: `${currentLocale}.json`,
//         });
//         const items = (navData?.data?.navigation?.items || [])
//           .filter(item => item !== null)
//           .map(item => ({
//             label: item!.label,
//             url: item!.url,
//             isDropdown: Boolean(item!.isDropdown),
//             dropdownLinks: item!.dropdownLinks?.map(dl => ({
//               label: dl!.label,
//               url: dl!.url,
//             })) || [],
//           })) as NavItem[];
//         setNavItems(items);
//       } catch {
//         setNavItems([]);
//       }
//     };
//     fetchNavItems();
//   }, [currentLocale]);

//   // Close dropdowns on outside click
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (navRef.current && !navRef.current.contains(e.target as Node)) {
//         setIsNavOpen(false);
//       }
//       if (langRef.current && !langRef.current.contains(e.target as Node)) {
//         setIsLangOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Sticky navbar on scroll
//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Language switcher logic
//   const handleLanguageSwitch = (newLocale: Locale) => {
//     const currentPath = router.asPath;
//     const isArticlePage = currentPath.startsWith('/press/') && currentPath.split('/').length === 3;

//     if (isArticlePage && slugMap) {
//       const currentSlug = currentPath.split('/')[2];
//       const articleId = Object.keys(slugMap).find(id => slugMap[id][currentLocale] === currentSlug);
//       if (articleId) {
//         const newSlug = slugMap[articleId][newLocale];
//         router.push(newSlug ? `/press/${newSlug}` : '/press', undefined, { locale: newLocale });
//       } else {
//         router.push('/press', undefined, { locale: newLocale });
//       }
//     } else {
//       router.push(currentPath, undefined, { locale: newLocale });
//     }

//     setIsLangOpen(false);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <motion.nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//     >
//       <motion.div className="flex justify-between items-center py-4 overflow-visible" variants={itemVariants}>
//         {/* Logo */}
//         <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
//           <Link href={`/${currentLocale}`} className={styles.logo}>
//             <div className="flex items-center space-x-2">
//               <div className="relative w-[30px] h-[30px] md:w-[54px] md:h-[54px]">
//                 <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
//               </div>
//               <span>FENOR</span>
//             </div>
//           </Link>
//         </motion.div>

//         {/* Desktop Menu */}
//         <motion.div className="hidden lg:flex items-center space-x-8 whitespace-nowrap overflow-visible">
//           {navItems.map((link, idx) => (
//             <motion.div key={idx} variants={itemVariants} whileHover={{ y: -2 }}>
//               {link.isDropdown ? (
//                 <div ref={navRef} className="relative">
//                   <button
//                     className={styles.menuItem}
//                     onClick={() => { setIsNavOpen(o => !o); setIsLangOpen(false); }}
//                     aria-expanded={isNavOpen}
//                   >
//                     {link.label}{' '}
//                     <FontAwesomeIcon icon={isNavOpen ? faChevronUp : faChevronDown} />
//                   </button>
//                   <motion.div
//                     className={`${styles.dropdown} ${isNavOpen ? styles.show : ''}`}
//                     initial="hidden"
//                     animate={isNavOpen ? 'visible' : 'hidden'}
//                     variants={dropdownVariants}
//                   >
//                     {(link.dropdownLinks || []).map(dl => (
//                       <Link
//                         key={dl.url}
//                         href={dl.url}
//                         className={styles.dropdownItem}
//                         onClick={() => setIsNavOpen(false)}
//                       >
//                         {dl.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.url}
//                   className={`${styles.menuItem} ${router.pathname === link.url ? styles.active : ''}`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </motion.div>
//           ))}

//           {/* Language Switcher */}
//           <motion.div ref={langRef} variants={itemVariants} whileHover={{ y: -2 }}>
//             <button
//               className={`${styles.menuItem} ${styles.selected}`}
//               onClick={() => { setIsLangOpen(o => !o); setIsNavOpen(false); }}
//               aria-expanded={isLangOpen}
//             >
//               {currentLocale.toUpperCase()}{' '}
//               <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
//             </button>
//             <motion.div
//               className={`${styles.dropdown} ${isLangOpen ? styles.show : ''}`}
//               initial="hidden"
//               animate={isLangOpen ? 'visible' : 'hidden'}
//               variants={dropdownVariants}
//             >
//               {LANG_DROPDOWN_ITEMS.map(item => (
//                 <button
//                   key={item.locale}
//                   onClick={() => handleLanguageSwitch(item.locale)}
//                   className={styles.dropdownItem}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* CTA Button */}
//           <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
//             <GoldButton />
//           </motion.div>
//         </motion.div>

//         {/* Mobile Menu Toggle */}
//         <motion.button
//           className="block lg:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(true)}
//           aria-label="Toggle menu"
//           variants={itemVariants}
//           whileHover={{ scale: 1.1 }}
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </motion.button>
//       </motion.div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenuOverlay}>
//           <motion.div
//             className={styles.mainMenu}
//             initial={{ x: '-100%' }}
//             animate={{ x: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* Header */}
//             <div className={styles.mobileMenuHeader}>
//               <Link href={`/${currentLocale}`} className={styles.logo}>
//                 <div className="flex items-center space-x-2">
//                   <div className="relative w-[30px] h-[30px]">
//                     <Image src="/fenor-logo.png" alt="FENOR logo" width={30} height={30} />
//                   </div>
//                   <span>FENOR</span>
//                 </div>
//               </Link>
//               <button
//                 className={styles.closeButton}
//                 onClick={() => {
//                   setIsMobileMenuOpen(false);
//                   setActiveMobileLinks([]);
//                 }}
//                 aria-label="Close menu"
//               >
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             </div>

//             {/* Menu Items */}
//             <div className={styles.mobileMenuItems}>
//               {navItems.map((link, idx) => (
//                 <React.Fragment key={idx}>
//                   {link.isDropdown ? (
//                     <button
//                       className={styles.mobileMenuItem}
//                       onClick={() => setActiveMobileLinks(link.dropdownLinks || [])}
//                     >
//                       {link.label}{' '}
//                       <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
//                     </button>
//                   ) : (
//                     <Link
//                       href={link.url}
//                       className={styles.mobileMenuItem}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {link.label}
//                     </Link>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>

//             {/* Language Buttons & CTA */}
//             <div className="mt-4">
//               <div className={styles.langButtons}>
//                 {LANG_DROPDOWN_ITEMS.map(item => (
//                   <button
//                     key={item.locale}
//                     onClick={() => handleLanguageSwitch(item.locale)}
//                     className={`${styles.langButton} ${currentLocale === item.locale ? styles.activeLang : ''}`}
//                   >
//                     {item.locale.toUpperCase()}
//                   </button>
//                 ))}
//               </div>
//               <GoldButton className="mt-4 w-full" />
//             </div>
//           </motion.div>

//           {/* Mobile Dropdown Panel */}
//           {activeMobileLinks.length > 0 && (
//             <motion.div
//               className={styles.investMenu}
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className={styles.investMenuHeader}>
//                 <button onClick={() => setActiveMobileLinks([])}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//               </div>
//               <div className={styles.investMenuItems}>
//                 {activeMobileLinks.map(dl => (
//                   <Link
//                     key={dl.url}
//                     href={dl.url}
//                     className={styles.mobileMenuItem}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {dl.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </div>
//       )}
//     </motion.nav>
//   );
// }













// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBars,
//   faTimes,
//   faChevronDown,
//   faChevronUp,
//   faArrowLeft,
//   faChevronRight,
// } from '@fortawesome/free-solid-svg-icons';
// import { motion } from 'framer-motion';
// import styles from './nav.module.css';
// import GoldButton from '../GoldButton';
// import { useSlugMap } from '../../lib/SlugMapContext';

// type Locale = 'en' | 'fr' | 'ar';

// interface NavItem {
//   label: string;
//   url: string;
//   isDropdown?: boolean;
//   dropdownLinks?: { label: string; url: string }[];
// }

// interface LangItem {
//   href: string;
//   label: string;
//   locale: Locale;
// }

// const LANG_DROPDOWN_ITEMS: LangItem[] = [
//   { href: '/', label: 'English', locale: 'en' },
//   { href: '/', label: 'Français', locale: 'fr' },
//   { href: '/', label: 'العربية', locale: 'ar' },
// ];

// const navVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
// };
// const itemVariants = {
//   hidden: { opacity: 0, y: -10 },
//   visible: { opacity: 1, y: 0 },
// };
// const dropdownVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
// };

// export default function Nav() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeMobileLinks, setActiveMobileLinks] = useState<NavItem['dropdownLinks']>([]);
//   const [navItems, setNavItems] = useState<NavItem[]>([]);
//   const [isSticky, setIsSticky] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [isLangOpen, setIsLangOpen] = useState(false);

//   const router = useRouter();
//   const rawLocale = router.locale ?? 'en';
//   const currentLocale = (['en', 'fr', 'ar'].includes(rawLocale) ? rawLocale : 'en') as Locale;
//   const { slugMap } = useSlugMap();

//   const navRef = useRef<HTMLDivElement>(null);
//   const langRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchNavItems = async () => {
//       try {
//         const { client } = await import('../../tina/__generated__/client');
//         const navData = await client.queries.navigation({
//           relativePath: `${currentLocale}.json`,
//         });
//         const items = (navData?.data?.navigation?.items || [])
//           .filter(item => item !== null)
//           .map(item => ({
//             label: item!.label,
//             url: item!.url,
//             isDropdown: Boolean(item!.isDropdown),
//             dropdownLinks: item!.dropdownLinks?.map(dl => ({
//               label: dl!.label,
//               url: dl!.url,
//             })) || [],
//           })) as NavItem[];
//         setNavItems(items);
//       } catch {
//         setNavItems([]);
//       }
//     };
//     fetchNavItems();
//   }, [currentLocale]);

//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (navRef.current && !navRef.current.contains(e.target as Node)) {
//         setOpenDropdown(null);
//       }
//       if (langRef.current && !langRef.current.contains(e.target as Node)) {
//         setIsLangOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLanguageSwitch = (newLocale: Locale) => {
//     const currentPath = router.asPath;
//     const isArticlePage = currentPath.startsWith('/press/') && currentPath.split('/').length === 3;

//     if (isArticlePage && slugMap) {
//       const currentSlug = currentPath.split('/')[2];
//       const articleId = Object.keys(slugMap).find(id => slugMap[id][currentLocale] === currentSlug);
//       if (articleId) {
//         const newSlug = slugMap[articleId][newLocale];
//         router.push(newSlug ? `/press/${newSlug}` : '/press', undefined, { locale: newLocale });
//       } else {
//         router.push('/press', undefined, { locale: newLocale });
//       }
//     } else {
//       router.push(currentPath, undefined, { locale: newLocale });
//     }

//     setIsLangOpen(false);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <motion.nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//     >
//       <motion.div className="flex justify-between items-center py-4 overflow-visible" variants={itemVariants}>
//         <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
//           <Link href={`/${currentLocale}`} className={styles.logo}>
//             <div className="flex items-center space-x-2">
//               <div className="relative w-[30px] h-[30px] md:w-[54px] md:h-[54px]">
//                 <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
//               </div>
//               <span>FENOR</span>
//             </div>
//           </Link>
//         </motion.div>

//         <motion.div className="hidden lg:flex items-center space-x-8 whitespace-nowrap overflow-visible">
//           {navItems.map((link, idx) => (
//             <motion.div key={idx} variants={itemVariants} whileHover={{ y: -2 }}>
//               {link.isDropdown ? (
//                 <div ref={navRef} className="relative">
//                   <button
//                     className={styles.menuItem}
//                     onClick={() => {
//                       setOpenDropdown(openDropdown === link.label ? null : link.label);
//                       setIsLangOpen(false);
//                     }}
//                     aria-expanded={openDropdown === link.label}
//                   >
//                     {link.label} <FontAwesomeIcon icon={openDropdown === link.label ? faChevronUp : faChevronDown} />
//                   </button>
//                   <motion.div
//                     className={`${styles.dropdown} ${openDropdown === link.label ? styles.show : ''}`}
//                     initial="hidden"
//                     animate={openDropdown === link.label ? 'visible' : 'hidden'}
//                     variants={dropdownVariants}
//                   >
//                     {(link.dropdownLinks || []).map(dl => (
//                       <Link
//                         key={dl.url}
//                         href={dl.url}
//                         className={styles.dropdownItem}
//                         onClick={() => setOpenDropdown(null)}
//                       >
//                         {dl.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.url}
//                   className={`${styles.menuItem} ${router.pathname === link.url ? styles.active : ''}`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </motion.div>
//           ))}

//           <motion.div ref={langRef} variants={itemVariants} whileHover={{ y: -2 }}>
//             <button
//               className={`${styles.menuItem} ${styles.selected}`}
//               onClick={() => {
//                 setIsLangOpen(o => !o);
//                 setOpenDropdown(null);
//               }}
//               aria-expanded={isLangOpen}
//             >
//               {currentLocale.toUpperCase()} <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
//             </button>
//             <motion.div
//               className={`${styles.dropdown} ${isLangOpen ? styles.show : ''}`}
//               initial="hidden"
//               animate={isLangOpen ? 'visible' : 'hidden'}
//               variants={dropdownVariants}
//             >
//               {LANG_DROPDOWN_ITEMS.map(item => (
//                 <button
//                   key={item.locale}
//                   onClick={() => handleLanguageSwitch(item.locale)}
//                   className={styles.dropdownItem}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </motion.div>
//           </motion.div>

//           <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
//             <GoldButton />
//           </motion.div>
//         </motion.div>

//         <motion.button
//           className="block lg:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(true)}
//           aria-label="Toggle menu"
//           variants={itemVariants}
//           whileHover={{ scale: 1.1 }}
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </motion.button>
//       </motion.div>

//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenuOverlay}>
//           <motion.div
//             className={styles.mainMenu}
//             initial={{ x: '-100%' }}
//             animate={{ x: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className={styles.mobileMenuHeader}>
//               <Link href={`/${currentLocale}`} className={styles.logo}>
//                 <div className="flex items-center space-x-2">
//                   <div className="relative w-[30px] h-[30px]">
//                     <Image src="/fenor-logo.png" alt="FENOR logo" width={30} height={30} />
//                   </div>
//                   <span>FENOR</span>
//                 </div>
//               </Link>
//               <button
//                 className={styles.closeButton}
//                 onClick={() => {
//                   setIsMobileMenuOpen(false);
//                   setActiveMobileLinks([]);
//                 }}
//                 aria-label="Close menu"
//               >
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             </div>

//             <div className={styles.mobileMenuItems}>
//               {navItems.map((link, idx) => (
//                 <React.Fragment key={idx}>
//                   {link.isDropdown ? (
//                     <button
//                       className={styles.mobileMenuItem}
//                       onClick={() => setActiveMobileLinks(link.dropdownLinks || [])}
//                     >
//                       {link.label}{' '}
//                       <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
//                     </button>
//                   ) : (
//                     <Link
//                       href={link.url}
//                       className={styles.mobileMenuItem}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {link.label}
//                     </Link>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>

//             <div className="mt-4">
//               <div className={styles.langButtons}>
//                 {LANG_DROPDOWN_ITEMS.map(item => (
//                   <button
//                     key={item.locale}
//                     onClick={() => handleLanguageSwitch(item.locale)}
//                     className={`${styles.langButton} ${currentLocale === item.locale ? styles.activeLang : ''}`}
//                   >
//                     {item.locale.toUpperCase()}
//                   </button>
//                 ))}
//               </div>
//               <GoldButton className="mt-4 w-full" />
//             </div>
//           </motion.div>

//           {activeMobileLinks.length > 0 && (
//             <motion.div
//               className={styles.investMenu}
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className={styles.investMenuHeader}>
//                 <button onClick={() => setActiveMobileLinks([])}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//               </div>
//               <div className={styles.investMenuItems}>
//                 {activeMobileLinks.map(dl => (
//                   <Link
//                     key={dl.url}
//                     href={dl.url}
//                     className={styles.mobileMenuItem}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {dl.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </div>
//       )}
//     </motion.nav>
//   );
// }















"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
  faArrowLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './nav.module.css';
import GoldButton from '../GoldButton';
import { useSlugMap } from '../../lib/SlugMapContext';

type Locale = 'ar' | 'fr' | 'en';
type MobileNavDir = 'forward' | 'back';

interface NavItem {
  label: string;
  url: string;
  isDropdown?: boolean;
  dropdownLinks?: {
    label: string;
    url: string;
    isDropdown?: boolean;
    dropdownLinks?: { label: string; url: string }[];
  }[];
}

type DropdownLinks = NonNullable<NavItem['dropdownLinks']>;
type MobileMenuPanel = { title: string; links: DropdownLinks };

interface LangItem {
  href: string;
  label: string;
  locale: Locale;
}

const LANG_DROPDOWN_ITEMS: LangItem[] = [
  { href: '/', label: 'العربية', locale: 'ar' },
  { href: '/', label: 'Français', locale: 'fr' },
  { href: '/', label: 'English', locale: 'en' },
];

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};
const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};

const nestedMenuVariants = {
  collapsed: { height: 0, opacity: 0, transition: { duration: 0.18 } },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.18 } },
};

const mobilePanelVariants = {
  enter: (dir: MobileNavDir) => ({
    x: dir === 'forward' ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: (dir: MobileNavDir) => ({
    x: dir === 'forward' ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMenuStack, setMobileMenuStack] = useState<MobileMenuPanel[]>([]);
  const [mobileMenuDir, setMobileMenuDir] = useState<MobileNavDir>('forward');
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const activeMobilePanel: MobileMenuPanel | null = mobileMenuStack.length
    ? mobileMenuStack[mobileMenuStack.length - 1]
    : null;

  const activeMobileLinks: DropdownLinks = activeMobilePanel ? activeMobilePanel.links : [];

  const router = useRouter();
  const rawLocale = router.locale ?? 'ar';
  const currentLocale = (['en', 'fr', 'ar'].includes(rawLocale) ? rawLocale : 'ar') as Locale;
  const { slugMap } = useSlugMap();

  // Create individual refs for each dropdown
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const { client } = await import('../../tina/__generated__/client');
        const navData = await client.queries.navigation({
          relativePath: `${currentLocale}.json`,
        });
        const items = (navData?.data?.navigation?.items || [])
          .filter(item => item !== null)
          .map(item => ({
            label: item!.label,
            url: item!.url,
            isDropdown: Boolean(item!.isDropdown),
            dropdownLinks: item!.dropdownLinks?.map(dl => ({
              label: dl!.label,
              url: dl!.url,
              isDropdown: Boolean(dl!.isDropdown),
              dropdownLinks: dl!.dropdownLinks?.map(ndl => ({
                label: ndl!.label,
                url: ndl!.url,
              })) || [],
            })) || [],
          })) as NavItem[];
        setNavItems(items);
      } catch {
        setNavItems([]);
      }
    };
    fetchNavItems();
  }, [currentLocale]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Check if click is outside any dropdown
      let clickedOutsideAllDropdowns = true;
      
      // Check navigation dropdowns
      Object.values(dropdownRefs.current).forEach(ref => {
        if (ref && ref.contains(e.target as Node)) {
          clickedOutsideAllDropdowns = false;
        }
      });
      
      // Check language dropdown
      if (langRef.current && langRef.current.contains(e.target as Node)) {
        clickedOutsideAllDropdowns = false;
      }
      
      if (clickedOutsideAllDropdowns) {
        setOpenDropdown(null);
        setOpenNestedDropdown(null);
        setIsLangOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSwitch = (newLocale: Locale) => {
    const isPressArticlePage = router.pathname === '/press/[slug]';

    if (isPressArticlePage) {
      const slugParam = router.query.slug;
      const currentSlug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

      if (currentSlug) {
        const articleId = Object.keys(slugMap).find(id => slugMap[id]?.[currentLocale] === currentSlug);
        const newSlug = articleId ? slugMap[articleId]?.[newLocale] : '';

        if (newSlug) {
          router.push(
            { pathname: '/press/[slug]', query: { ...router.query, slug: newSlug } },
            undefined,
            { locale: newLocale }
          );
        } else {
          router.push('/press', undefined, { locale: newLocale });
        }
      } else {
        router.push('/press', undefined, { locale: newLocale });
      }
    } else {
      router.push({ pathname: router.pathname, query: router.query }, undefined, { locale: newLocale });
    }

    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
    setMobileMenuStack([]);
  };

  // Function to set ref for each dropdown
  const setDropdownRef = (key: string) => (el: HTMLDivElement | null) => {
    dropdownRefs.current[key] = el;
  };

  const openMobilePanel = (title: string, links: DropdownLinks) => {
    setMobileMenuDir('forward');
    setMobileMenuStack([{ title, links }]);
  };

  const pushMobilePanel = (title: string, links: DropdownLinks) => {
    setMobileMenuDir('forward');
    setMobileMenuStack(stack => [...stack, { title, links }]);
  };

  const popMobilePanel = () => {
    setMobileMenuDir('back');
    setMobileMenuStack(stack => stack.slice(0, -1));
  };

  return (
    <motion.nav
      dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
      className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div className="flex justify-between items-center py-4 overflow-visible" variants={itemVariants}>
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <Link href={`/${currentLocale}`} className={styles.logo}>
            <div className="flex items-center space-x-2">
              <div className="relative w-[30px] h-[30px] md:w-[54px] md:h-[54px]">
                <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
              </div>
              <span>FENOR</span>
            </div>
          </Link>
        </motion.div>

        <motion.div className="hidden lg:flex items-center space-x-8 whitespace-nowrap overflow-visible">
          {navItems.map((link, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -2 }}>
              {link.isDropdown ? (
                <div ref={setDropdownRef(link.label)} className="relative">
                  <button
                    className={styles.menuItem}
                    onClick={() => {
                      setOpenDropdown(openDropdown === link.label ? null : link.label);
                      setOpenNestedDropdown(null);
                      setIsLangOpen(false);
                    }}
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label} <FontAwesomeIcon icon={openDropdown === link.label ? faChevronUp : faChevronDown} />
                  </button>
                  <motion.div
                    className={`${styles.dropdown} ${openDropdown === link.label ? styles.show : ''}`}
                    initial="hidden"
                    animate={openDropdown === link.label ? 'visible' : 'hidden'}
                    variants={dropdownVariants}
                  >
                    {(link.dropdownLinks || []).map((dl, dlIndex) => {
                      const hasNestedDropdown =
                        Boolean(dl.isDropdown) && Boolean(dl.dropdownLinks && dl.dropdownLinks.length > 0);
                      const nestedKey = `nav-nested-${idx}-${dlIndex}`;
                      const nestedMenuId = `nav-nested-menu-${idx}-${dlIndex}`;
                      const isNestedOpen = openNestedDropdown === nestedKey;

                      if (!hasNestedDropdown) {
                        return dl.url ? (
                          <Link
                            key={nestedKey}
                            href={dl.url}
                            className={styles.dropdownItem}
                            onClick={() => {
                              setOpenDropdown(null);
                              setOpenNestedDropdown(null);
                            }}
                          >
                            {dl.label}
                          </Link>
                        ) : (
                          <span key={nestedKey} className={styles.dropdownItem}>
                            {dl.label}
                          </span>
                        );
                      }

                      return (
                        <div key={nestedKey} className={styles.dropdownNestedGroup}>
                          <button
                            type="button"
                            className={styles.dropdownItemButton}
                            onClick={() => setOpenNestedDropdown(isNestedOpen ? null : nestedKey)}
                            aria-expanded={isNestedOpen}
                            aria-controls={nestedMenuId}
                            aria-label={`Toggle ${dl.label} submenu`}
                          >
                            <span>{dl.label}</span>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className={`${styles.nestedChevron} ${isNestedOpen ? styles.nestedChevronOpen : ''}`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isNestedOpen && (
                              <motion.div
                                id={nestedMenuId}
                                className={styles.nestedMenu}
                                style={{ overflow: 'hidden' }}
                                variants={nestedMenuVariants}
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                              >
                                {(dl.dropdownLinks || []).map((ndl, ndlIndex) =>
                                  ndl.url ? (
                                    <Link
                                      key={`${nestedKey}-${ndlIndex}`}
                                      href={ndl.url}
                                      className={styles.nestedDropdownItem}
                                      onClick={() => {
                                        setOpenDropdown(null);
                                        setOpenNestedDropdown(null);
                                      }}
                                    >
                                      {ndl.label}
                                    </Link>
                                  ) : (
                                    <span key={`${nestedKey}-${ndlIndex}`} className={styles.nestedDropdownItem}>
                                      {ndl.label}
                                    </span>
                                  )
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              ) : (
                <Link
                  href={link.url}
                  className={`${styles.menuItem} ${router.pathname === link.url ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              )}
            </motion.div>
          ))}

          <motion.div ref={langRef} variants={itemVariants} whileHover={{ y: -2 }} className="relative">
            <button
              className={`${styles.menuItem} ${styles.selected}`}
              onClick={() => {
                setIsLangOpen(o => !o);
                setOpenDropdown(null);
              }}
              aria-expanded={isLangOpen}
            >
              {currentLocale.toUpperCase()} <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
            </button>
            <motion.div
              className={`${styles.dropdown} ${styles.langDropdown} ${isLangOpen ? styles.show : ''}`}
              initial="hidden"
              animate={isLangOpen ? 'visible' : 'hidden'}
              variants={dropdownVariants}
            >
              {LANG_DROPDOWN_ITEMS.map(item => (
                <button
                  key={item.locale}
                  onClick={() => handleLanguageSwitch(item.locale)}
                  className={styles.dropdownItem}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <GoldButton />
          </motion.div>
        </motion.div>

        <motion.button
          className="block lg:hidden text-text focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Toggle menu"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <FontAwesomeIcon icon={faBars} />
        </motion.button>
      </motion.div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <motion.div
            className={styles.mainMenu}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileMenuHeader}>
              <Link href={`/${currentLocale}`} className={styles.logo}>
                <div className="flex items-center space-x-2">
                  <div className="relative w-[30px] h-[30px]">
                    <Image src="/fenor-logo.png" alt="FENOR logo" width={30} height={30} />
                  </div>
                  <span>FENOR</span>
                </div>
              </Link>
              <button
                className={styles.closeButton}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setMobileMenuStack([]);
                }}
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className={styles.mobileMenuItems}>
              {navItems.map((link, idx) => (
                <React.Fragment key={idx}>
                  {link.isDropdown ? (
                    <button
                      className={styles.mobileMenuItem}
                      onClick={() => openMobilePanel(link.label, link.dropdownLinks ?? [])}
                    >
                      {link.label}{' '}
                      <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                    </button>
                  ) : (
                    <Link
                      href={link.url}
                      className={styles.mobileMenuItem}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setMobileMenuStack([]);
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-4">
              <div className={styles.langButtons}>
                {LANG_DROPDOWN_ITEMS.map(item => (
                  <button
                    key={item.locale}
                    onClick={() => handleLanguageSwitch(item.locale)}
                    className={`${styles.langButton} ${currentLocale === item.locale ? styles.activeLang : ''}`}
                  >
                    {item.locale.toUpperCase()}
                  </button>
                ))}
              </div>
              <GoldButton className="mt-4 w-full" />
            </div>
          </motion.div>

          <AnimatePresence initial={false} custom={mobileMenuDir}>
            {mobileMenuStack.length > 0 && (
              <motion.div
                key={mobileMenuStack.length}
                className={styles.investMenu}
                custom={mobileMenuDir}
                variants={mobilePanelVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className={styles.investMenuHeader}>
                  <button onClick={popMobilePanel} aria-label="Back">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <span className={styles.subMenuTitle}>{activeMobilePanel?.title}</span>
                  <button
                    className={styles.closeButton}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setMobileMenuStack([]);
                    }}
                    aria-label="Close menu"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <div className={styles.investMenuItems}>
                  {activeMobileLinks.map(dl => {
                    const hasNestedDropdown =
                      Boolean(dl.isDropdown) && Boolean(dl.dropdownLinks && dl.dropdownLinks.length > 0);

                    return hasNestedDropdown ? (
                      <button
                        key={`${dl.label}::${dl.url}`}
                        className={styles.mobileMenuItem}
                        onClick={() => pushMobilePanel(dl.label, dl.dropdownLinks ?? [])}
                      >
                        {dl.label}{' '}
                        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                      </button>
                    ) : dl.url ? (
                      <Link
                        key={`${dl.label}::${dl.url}`}
                        href={dl.url}
                        className={styles.mobileMenuItem}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setMobileMenuStack([]);
                        }}
                      >
                        {dl.label}
                      </Link>
                    ) : (
                      <span key={`${dl.label}::${dl.url}`} className={styles.mobileMenuItem}>
                        {dl.label}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.nav>
  );
}
