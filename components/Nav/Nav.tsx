// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import styles from './nav.module.css';
// import Image from 'next/image';
// const Nav: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isInvestOpen, setIsInvestOpen] = useState(false);
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const router = useRouter();

//   const navLinks = [
//     { href: '/members',  label: 'Members'  },
//     { href: '/about',    label: 'About Us' },
//     { href: '/esg',      label: 'ESG'      },
//     { href: '/press',    label: 'Press'    },
//     { href: '/contact',  label: 'Contact Us' },
//     { href: '/invest',   label: 'Invest', isDropdown: true },
//   ];
  

//   const investDropdownItems = [
//     { href: '/invest/stocks', label: 'Stocks' },
//     { href: '/invest/bonds', label: 'Bonds' },
//     { href: '/invest/real-estate', label: 'Real Estate' },
//   ];

//   const langDropdownItems = [
//     { href: '/en', label: 'English', locale: 'en' },
//     { href: '/fr', label: 'French', locale: 'fr' },
//     { href: '/ar', label: 'Arabic', locale: 'ar' },
//   ];

//   return (
//     <nav className="bg-background text-text font-sans">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      
//       <Link href="/" className={styles.logo}>
//   <div className="d-flex">

//      <Image
//       src="/fenor-logo.png"
//       alt="FENOR logo"
//       width={54}
//       height={54}
//     />
// FENOR
//   </div>
   
// </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <div key={link.href} className="relative">
//               {link.isDropdown ? (
//                 <div className="group">
//                   <button
//                     className={`${styles.menuItem} font-sans`}
//                     onClick={() => setIsInvestOpen(!isInvestOpen)}
//                     aria-expanded={isInvestOpen}
//                     aria-haspopup="true"
//                   >
//                     {link.label}
//                     <svg
//                       className="inline-block w-4 h-4 ml-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>
//                   <div
//                     className={`${styles.dropdown} ${
//                       isInvestOpen ? 'block' : 'hidden group-hover:block'
//                     }`}
//                   >
//                     {investDropdownItems.map((item) => (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         className={`${styles.dropdownItem} `}
//                         onClick={() => setIsInvestOpen(false)}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.href}
//                   className={`${styles.menuItem} font-sans ${
//                     router.pathname === link.href ? styles.active : ''
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </div>
//           ))}

//           {/* Language Switcher */}
//           <div className="relative">
//             <button
//               className={`${styles.menuItem} font-sans`}
//               onClick={() => setIsLangOpen(!isLangOpen)}
//               aria-expanded={isLangOpen}
//               aria-haspopup="true"
//             >
//               EN
//               <svg
//                 className="inline-block w-4 h-4 ml-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//             <div
//               className={`${styles.dropdown} ${
//                 isLangOpen ? 'block' : 'hidden'
//               }`}
//             >
//               {langDropdownItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   locale={item.locale}
//                   className={`${styles.dropdownItem} font-sans`}
//                   onClick={() => setIsLangOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Gold Price Button */}
//           <button
//             className="bg-gold text-btn-text font-sans text-base font-normal px-4 py-2 rounded-btn hover:bg-special transition-colors duration-200"
//             aria-label="Gold Price"
//           >
//             Gold: $1,900/oz
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-background border-t border-gray-700">
//           <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//             {navLinks.map((link) => (
//               <div key={link.href}>
//                 {link.isDropdown ? (
//                   <div>
//                     <button
//                       className={`${styles.menuItem} font-sans flex justify-between w-full`}
//                       onClick={() => setIsInvestOpen(!isInvestOpen)}
//                       aria-expanded={isInvestOpen}
//                     >
//                       {link.label}
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d={isInvestOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
//                         />
//                       </svg>
//                     </button>
//                     {isInvestOpen && (
//                       <div className="pl-4 mt-2 flex flex-col space-y-2">
//                         {investDropdownItems.map((item) => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             className={`${styles.dropdownItem} font-sans`}
//                             onClick={() => {
//                               setIsInvestOpen(false);
//                               setIsMobileMenuOpen(false);
//                             }}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     href={link.href}
//                     className={`${styles.menuItem} font-sans ${
//                       router.pathname === link.href ? styles.active : ''
//                     }`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
//             {/* Mobile Language Switcher */}
//             <div>
//               <button
//                 className={`${styles.menuItem} font-sans flex justify-between w-full`}
//                 onClick={() => setIsLangOpen(!isLangOpen)}
//                 aria-expanded={isLangOpen}
//               >
//                 Language
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d={isLangOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
//                   />
//                 </svg>
//               </button>
//               {isLangOpen && (
//                 <div className="pl-4 mt-2 flex flex-col space-y-2">
//                   {langDropdownItems.map((item) => (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       locale={item.locale}
//                       className={`${styles.dropdownItem} font-sans`}
//                       onClick={() => {
//                         setIsLangOpen(false);
//                         setIsMobileMenuOpen(false);
//                       }}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//             {/* Mobile Gold Price Button */}
//             <button
//               className="bg-gold text-btn-text font-sans text-base font-normal px-4 py-2 rounded-btn hover:bg-special w-full text-left"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Gold: $1,900/oz
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };
// export default Nav;
// components/Nav.tsx
// components/Nav.tsx









// Nav.tsx

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
// } from '@fortawesome/free-solid-svg-icons';
// import styles from './nav.module.css';

// const Nav: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isInvestOpen, setIsInvestOpen]         = useState(false);
//   const [isLangOpen, setIsLangOpen]             = useState(false);
//   const router = useRouter();
//   const currentLocale = router.locale || 'en';

//   const investRef = useRef<HTMLDivElement>(null);
//   const langRef   = useRef<HTMLDivElement>(null);

//   // Close both on outside click
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

//   // Toggle handlers
//   const toggleInvest = () => {
//     setIsInvestOpen(o => !o);
//     setIsLangOpen(false);
//   };
//   const toggleLang = () => {
//     setIsLangOpen(o => !o);
//     setIsInvestOpen(false);
//   };

//   const navLinks = [
//     { href: '/members', label: 'Members' },
//     { href: '/about',   label: 'About Us' },
//     { href: '/esg',     label: 'ESG' },
//     { href: '/press',   label: 'Press' },
//     { href: '/contact', label: 'Contact Us' },
//     { href: '/invest',  label: 'Invest', isDropdown: true },
//   ];

//   const investDropdownItems = [
//     { href: '/invest/stocks',      label: 'Stocks'      },
//     { href: '/invest/bonds',       label: 'Bonds'       },
//     { href: '/invest/real-estate', label: 'Real Estate' },
//   ];

//   const langDropdownItems = [
//     { href: '/en', label: 'English', locale: 'en' },
//     { href: '/fr', label: 'French',  locale: 'fr' },
//     { href: '/ar', label: 'Arabic',  locale: 'ar' },
//   ];

//   return (
//     <nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className="bg-background text-text font-sans overflow-visible"
//     >
//       <div className="flex justify-between items-center py-4 overflow-visible">
//         {/* Logo */}
//         <Link href="/" className={styles.logo}>
//           <div className="flex items-center space-x-2">
//             <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
//             <span>FENOR</span>
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-6 whitespace-nowrap overflow-visible">
//           {navLinks.map(link => (
//             <div key={link.href} className="relative">
//               {link.isDropdown ? (
//                 <div ref={investRef} className="relative">
//                   <button
//                     className={styles.menuItem}
//                     onClick={toggleInvest}
//                     aria-expanded={isInvestOpen}
//                   >
//                     Invest{' '}
//                     <FontAwesomeIcon icon={isInvestOpen ? faChevronUp : faChevronDown} />
//                   </button>
//                   <div className={`${styles.dropdown} ${isInvestOpen ? styles.show : ''}`}>
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
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.href}
//                   className={`${styles.menuItem} ${
//                     router.pathname === link.href ? styles.active : ''
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </div>
//           ))}

//           {/* Language Switcher */}
//           <div ref={langRef} className="relative">
//             <button
//               className={styles.menuItem}
//               onClick={toggleLang}
//               aria-expanded={isLangOpen}
//             >
//               {currentLocale.toUpperCase()}{' '}
//               <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
//             </button>
//             <div className={`${styles.dropdown} ${isLangOpen ? styles.show : ''}`}>
//               {langDropdownItems.map(item => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   locale={item.locale}
//                   className={styles.dropdownItem}
//                   onClick={() => setIsLangOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Gold Price */}
//           <button className="bg-gold text-btn-text text-base font-normal px-4 py-2 rounded-btn hover:bg-special transition-colors duration-200">
//             Gold: $1,900/oz
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="block lg:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(o => !o)}
//           aria-label="Toggle menu"
//         >
//           <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-background border-t border-gray-700">
//           <div className="flex flex-col space-y-4 py-4 px-4">
//             {navLinks.map(link => (
//               <React.Fragment key={link.href}>
//                 {!link.isDropdown ? (
//                   <Link
//                     href={link.href}
//                     className={`${styles.menuItem} block`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 ) : (
//                   <div>
//                     <button
//                       className={`${styles.menuItem} block w-full text-left`}
//                       onClick={toggleInvest}
//                     >
//                       Invest{' '}
//                       <FontAwesomeIcon icon={isInvestOpen ? faChevronUp : faChevronDown} />
//                     </button>
//                     {isInvestOpen && (
//                       <div className="ml-4">
//                         {investDropdownItems.map(item => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             className={`${styles.dropdownItem} block`}
//                             onClick={() => {
//                               setIsInvestOpen(false);
//                               setIsMobileMenuOpen(false);
//                             }}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </React.Fragment>
//             ))}

//             {/* Language Switcher */}
//             <div>
//               <button
//                 className={`${styles.menuItem} block w-full text-left`}
//                 onClick={toggleLang}
//               >
//                 {currentLocale.toUpperCase()}{' '}
//                 <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
//               </button>
//               {isLangOpen && (
//                 <div className="ml-4">
//                   {langDropdownItems.map(item => (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       locale={item.locale}
//                       className={`${styles.dropdownItem} block`}
//                       onClick={() => {
//                         setIsLangOpen(false);
//                         setIsMobileMenuOpen(false);
//                       }}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Gold Price */}
//             <button
//               className="bg-gold text-btn-text text-base font-normal px-4 py-2 rounded-btn hover:bg-special transition-colors duration-200"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Gold: $1,900/oz
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;







//this one below has the language underlined 






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
// } from '@fortawesome/free-solid-svg-icons';
// import styles from './nav.module.css';

// const Nav: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isInvestOpen, setIsInvestOpen]         = useState(false);
//   const [isLangOpen, setIsLangOpen]             = useState(false);
//   const router = useRouter();
//   const currentLocale = router.locale || 'en';

//   const investRef = useRef<HTMLDivElement>(null);
//   const langRef   = useRef<HTMLDivElement>(null);

//   // Close both on outside click
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

//   // Toggle handlers
//   const toggleInvest = () => {
//     setIsInvestOpen(o => !o);
//     setIsLangOpen(false);
//   };
//   const toggleLang = () => {
//     setIsLangOpen(o => !o);
//     setIsInvestOpen(false);
//   };

//   const navLinks = [
//     { href: '/members', label: 'Members' },
//     { href: '/about',   label: 'About Us' },
//     { href: '/esg',     label: 'ESG' },
//     { href: '/press',   label: 'Press' },
//     { href: '/contact', label: 'Contact Us' },
//     { href: '/invest',  label: 'Invest', isDropdown: true },
//   ];

//   const investDropdownItems = [
//     { href: '/invest/stocks',      label: 'Stocks'      },
//     { href: '/invest/bonds',       label: 'Bonds'       },
//     { href: '/invest/real-estate', label: 'Real Estate' },
//   ];

//   const langDropdownItems = [
//     { href: '/en', label: 'English', locale: 'en' },
//     { href: '/fr', label: 'French',  locale: 'fr' },
//     { href: '/ar', label: 'Arabic',  locale: 'ar' },
//   ];

//   return (
//     <nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className="bg-background text-text font-sans overflow-visible"
//     >
//       <div className="flex justify-between items-center py-4 overflow-visible">
//         {/* Logo */}
//         <Link href="/" className={styles.logo}>
//           <div className="flex items-center space-x-2">
//             <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
//             <span>FENOR</span>
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-6 whitespace-nowrap overflow-visible">
//           {navLinks.map(link => (
//             <div key={link.href} className="relative">
//               {link.isDropdown ? (
//                 <div ref={investRef} className="relative">
//                   <button
//                     className={styles.menuItem}
//                     onClick={toggleInvest}
//                     aria-expanded={isInvestOpen}
//                   >
//                     Invest{' '}
//                     <FontAwesomeIcon icon={isInvestOpen ? faChevronUp : faChevronDown} />
//                   </button>
//                   <div className={`${styles.dropdown} ${isInvestOpen ? styles.show : ''}`}>
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
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.href}
//                   className={`${styles.menuItem} ${
//                     router.pathname === link.href ? styles.active : ''
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </div>
//           ))}

//           {/* Language Switcher */}
//           <div ref={langRef} className="relative">
//             <button
//               className={`${styles.menuItem} ${styles.selected}`}
//               onClick={toggleLang}
//               aria-expanded={isLangOpen}
//             >
//               {currentLocale.toUpperCase()}{' '}
//               <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
//             </button>
//             <div className={`${styles.dropdown} ${isLangOpen ? styles.show : ''}`}>
//               {langDropdownItems.map(item => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   locale={item.locale}
//                   className={styles.dropdownItem}
//                   onClick={() => setIsLangOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Gold Price */}
//           <button className="bg-gold text-btn-text text-base font-normal px-4 py-2 rounded-btn hover:bg-special transition-colors duration-200">
//             Gold: $1,900/oz
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="block lg:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(o => !o)}
//           aria-label="Toggle menu"
//         >
//           <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-background border-t border-gray-700">
//           <div className="flex flex-col space-y-4 py-4 px-4">
//             {navLinks.map(link => (
//               <React.Fragment key={link.href}>
//                 {!link.isDropdown ? (
//                   <Link
//                     href={link.href}
//                     className={`${styles.menuItem} block`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 ) : (
//                   <div>
//                     <button
//                       className={`${styles.menuItem} block w-full text-left`}
//                       onClick={toggleInvest}
//                     >
//                       Invest{' '}
//                       <FontAwesomeIcon icon={isInvestOpen ? faChevronUp : faChevronDown} />
//                     </button>
//                     {isInvestOpen && (
//                       <div className="ml-4">
//                         {investDropdownItems.map(item => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             className={`${styles.dropdownItem} block`}
//                             onClick={() => {
//                               setIsInvestOpen(false);
//                               setIsMobileMenuOpen(false);
//                             }}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </React.Fragment>
//             ))}

//             {/* Language Switcher */}
//             <div>
//               <button
//                 className={`${styles.menuItem} ${styles.selected} block w-full text-left`}
//                 onClick={toggleLang}
//               >
//                 {currentLocale.toUpperCase()}{' '}
//                 <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
//               </button>
//               {isLangOpen && (
//                 <div className="ml-4">
//                   {langDropdownItems.map(item => (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       locale={item.locale}
//                       className={`${styles.dropdownItem} block`}
//                       onClick={() => {
//                         setIsLangOpen(false);
//                         setIsMobileMenuOpen(false);
//                       }}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Gold Price */}
//             <button
//               className="bg-gold text-btn-text text-base font-normal px-4 py-2 rounded-btn hover:bg-special transition-colors duration-200"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Gold: $1,900/oz
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;

//pretty dope version of nav down below 

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
// } from '@fortawesome/free-solid-svg-icons';
// import styles from './nav.module.css';

// const Nav: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isInvestOpen, setIsInvestOpen]         = useState(false);
//   const [isLangOpen, setIsLangOpen]             = useState(false);
//   const router = useRouter();
//   const currentLocale = router.locale || 'en';

//   const investRef = useRef<HTMLDivElement>(null);
//   const langRef   = useRef<HTMLDivElement>(null);

//   // Close dropdowns on outside click
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

//   // Toggle handlers
//   const toggleInvest = () => {
//     setIsInvestOpen(o => !o);
//     setIsLangOpen(false);
//   };
//   const toggleLang = () => {
//     setIsLangOpen(o => !o);
//     setIsInvestOpen(false);
//   };

//   const navLinks = [
//     { href: '/members', label: 'Members' },
//     { href: '/about',   label: 'About Us' },
//     { href: '/esg',     label: 'ESG' },
//     { href: '/press',   label: 'Press' },
//     { href: '/contact', label: 'Contact Us' },
//     { href: '/invest',  label: 'Invest', isDropdown: true },
//   ];

//   const investDropdownItems = [
//     { href: '/invest/stocks',      label: 'Stocks'      },
//     { href: '/invest/bonds',       label: 'Bonds'       },
//     { href: '/invest/real-estate', label: 'Real Estate' },
//   ];

//   const langDropdownItems = [
//     { href: '/en', label: 'English', locale: 'en' },
//     { href: '/fr', label: 'French',  locale: 'fr' },
//     { href: '/ar', label: 'Arabic',  locale: 'ar' },
//   ];

//   return (
//     <nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className="bg-background text-text font-sans overflow-visible"
//     >
//       <div className="flex justify-between items-center py-4 overflow-visible">
//         {/* Logo */}
//         <Link href="/" className={styles.logo}>
//           <div className="flex items-center space-x-2">
//             <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
//             <span>FENOR</span>
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-6 whitespace-nowrap overflow-visible">
//           {navLinks.map(link => (
//             <div key={link.href} className="relative">
//               {link.isDropdown ? (
//                 <div ref={investRef} className="relative">
//                   <button
//                     className={styles.menuItem}
//                     onClick={toggleInvest}
//                     aria-expanded={isInvestOpen}
//                   >
//                     Invest{' '}
//                     <FontAwesomeIcon icon={isInvestOpen ? faChevronUp : faChevronDown} />
//                   </button>
//                   <div className={`${styles.dropdown} ${isInvestOpen ? styles.show : ''}`}>
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
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.href}
//                   className={`${styles.menuItem} ${
//                     router.pathname === link.href ? styles.active : ''
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </div>
//           ))}

//           {/* Language Switcher */}
//           <div ref={langRef} className="relative">
//             <button
//               className={`${styles.menuItem} ${styles.selected}`}
//               onClick={toggleLang}
//               aria-expanded={isLangOpen}
//             >
//               {currentLocale.toUpperCase()}{' '}
//               <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
//             </button>
//             <div className={`${styles.dropdown} ${isLangOpen ? styles.show : ''}`}>
//               {langDropdownItems.map(item => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   locale={item.locale}
//                   className={styles.dropdownItem}
//                   onClick={() => setIsLangOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Gold Price */}
//           <button className="bg-gold text-btn-text text-base font-normal px-4 py-2 rounded-btn hover:bg-special transition-colors duration-200">
//             Gold: $1,900/oz
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="block lg:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(true)}
//           aria-label="Toggle menu"
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenuOverlay}>
//           <div className={styles.mobileMenuHeader}>
//             <span className={styles.logo}>FENOR</span>
//             <button
//               className={styles.closeButton}
//               onClick={() => setIsMobileMenuOpen(false)}
//               aria-label="Close menu"
//             >
//               <FontAwesomeIcon icon={faTimes} />
//             </button>
//           </div>
//           <div className={styles.mobileMenuItems}>
//             {navLinks.map(link => (
//               <React.Fragment key={link.href}>
//                 {!link.isDropdown ? (
//                   <Link
//                     href={link.href}
//                     className={styles.mobileMenuItem}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 ) : (
//                   <div>
//                     <button
//                       className={styles.mobileMenuItem}
//                       onClick={toggleInvest}
//                     >
//                       Invest{' '}
//                       <FontAwesomeIcon icon={isInvestOpen ? faChevronUp : faChevronDown} />
//                     </button>
//                     {isInvestOpen && (
//                       <div className="ml-4">
//                         {investDropdownItems.map(item => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             className={styles.mobileDropdownItem}
//                             onClick={() => {
//                               setIsInvestOpen(false);
//                               setIsMobileMenuOpen(false);
//                             }}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//           <div className={styles.langButtons}>
//             {langDropdownItems.map(item => (
//               <Link
//                 key={item.locale}
//                 href={item.href}
//                 locale={item.locale}
//                 className={`${styles.langButton} ${
//                   currentLocale === item.locale ? styles.activeLang : ''
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item.locale.toUpperCase()}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;




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
} from '@fortawesome/free-solid-svg-icons';
import styles from './nav.module.css';

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInvestOpen, setIsInvestOpen]         = useState(false);
  const [isLangOpen, setIsLangOpen]             = useState(false);
  const router = useRouter();
  const currentLocale = router.locale || 'en';

  const investRef = useRef<HTMLDivElement>(null);
  const langRef   = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (investRef.current && !investRef.current.contains(e.target as Node)) {
        setIsInvestOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Toggle handlers
  const toggleInvest = () => {
    setIsInvestOpen(o => !o);
    setIsLangOpen(false);
  };
  const toggleLang = () => {
    setIsLangOpen(o => !o);
    setIsInvestOpen(false);
  };

  const navLinks = [
    { href: '/members', label: 'Members' },
    { href: '/about',   label: 'About Us' },
    { href: '/esg',     label: 'ESG' },
    { href: '/press',   label: 'Press' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/invest',  label: 'Invest', isDropdown: true },
  ];

  const investDropdownItems = [
    { href: '/invest/stocks',      label: 'Stocks'      },
    { href: '/invest/bonds',       label: 'Bonds'       },
    { href: '/invest/real-estate', label: 'Real Estate' },
  ];

  const langDropdownItems = [
    { href: '/en', label: 'English', locale: 'en' },
    { href: '/fr', label: 'French',  locale: 'fr' },
    { href: '/ar', label: 'Arabic',  locale: 'ar' },
  ];

  return (
    <nav
      dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
      className="bg-background text-text font-sans overflow-visible"
    >
      <div className="flex justify-between items-center py-4 overflow-visible">
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className="flex items-center space-x-2">
            <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
            <span>FENOR</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 whitespace-nowrap overflow-visible">
          {navLinks.map(link => (
            <div key={link.href} className="relative">
              {link.isDropdown ? (
                <div ref={investRef} className="relative">
                  <button
                    className={styles.menuItem}
                    onClick={toggleInvest}
                    aria-expanded={isInvestOpen}
                  >
                    Invest{' '}
                    <FontAwesomeIcon icon={isInvestOpen ? faChevronUp : faChevronDown} />
                  </button>
                  <div className={`${styles.dropdown} ${isInvestOpen ? styles.show : ''}`}>
                    {investDropdownItems.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownItem}
                        onClick={() => setIsInvestOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`${styles.menuItem} ${
                    router.pathname === link.href ? styles.active : ''
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          {/* Language Switcher */}
          <div ref={langRef} className="relative">
            <button
              className={`${styles.menuItem} ${styles.selected}`}
              onClick={toggleLang}
              aria-expanded={isLangOpen}
            >
              {currentLocale.toUpperCase()}{' '}
              <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
            </button>
            <div className={`${styles.dropdown} ${isLangOpen ? styles.show : ''}`}>
              {langDropdownItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  locale={item.locale}
                  className={styles.dropdownItem}
                  onClick={() => setIsLangOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Gold Price */}
          <button className="bg-gold text-btn-text text-base font-normal px-4 py-2 rounded-btn hover:bg-special transition-colors duration-200">
            Gold: $1,900/oz
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="block lg:hidden text-text focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.logo}>
  <div className="flex items-center">
    <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
    <span>FENOR</span>
  </div>
</Link>
            <button
              className={styles.closeButton}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.mobileMenuItems}>
            {navLinks.map(link => (
              <React.Fragment key={link.href}>
                {!link.isDropdown ? (
                  <Link
                    href={link.href}
                    className={styles.mobileMenuItem}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      className={styles.mobileMenuItem}
                      onClick={toggleInvest}
                    >
                      Invest{' '}
                      <FontAwesomeIcon icon={isInvestOpen ? faChevronUp : faChevronDown} />
                    </button>
                    {isInvestOpen && (
                      <div className="ml-4 flex flex-col">
                        {investDropdownItems.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={styles.dropdownItem}
                            onClick={() => {
                              setIsInvestOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-4">
            <div className={styles.langButtons}>
              {langDropdownItems.map(item => (
                <Link
                  key={item.locale}
                  href={item.href}
                  locale={item.locale}
                  className={`${styles.langButton} ${
                    currentLocale === item.locale ? styles.activeLang : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.locale.toUpperCase()}
                </Link>
              ))}
            </div>
            <button className="bg-gold text-btn-text text-base font-normal px-4 py-2 rounded-btn hover:bg-special transition-colors duration-200 mt-4 w-full">
              Gold: $1,900/oz
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;