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


// the below version again worked great something extra now 

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
//   <div className="flex items-center space-x-2">
//     <div className="relative w-[30px] h-[30px] md:w-[54px] md:h-[54px]">
//       <Image src="/fenor-logo.png" alt="FENOR logo" layout="fill" objectFit="contain" />
//     </div>
//     <span>FENOR</span>
//   </div>
// </Link>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-8 whitespace-nowrap overflow-visible">
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
//           <Link href="/" className={styles.logo}>
//   <div className="flex items-center space-x-2">
//     <div className="relative w-[30px] h-[30px] md:w-[54px] md:h-[54px]">
//       <Image src="/fenor-logo.png" alt="FENOR logo" layout="fill" objectFit="contain" />
//     </div>
//     <span>FENOR</span>
//   </div>
// </Link>
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
//                       <div className="ml-4 flex flex-col">
//                         {investDropdownItems.map(item => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             className={styles.dropdownItem}
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
//           <div className="mt-4">
//             <div className={styles.langButtons}>
//               {langDropdownItems.map(item => (
//                 <Link
//                   key={item.locale}
//                   href={item.href}
//                   locale={item.locale}
//                   className={`${styles.langButton} ${
//                     currentLocale === item.locale ? styles.activeLang : ''
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item.locale.toUpperCase()}
//                 </Link>
//               ))}
//             </div>
//             <button className="bg-gold text-btn-text text-base font-normal px-4 py-2 rounded-btn hover:bg-special transition-colors duration-200 mt-4 w-full">
//               Gold: $1,900/oz
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;

// all great version down below its ummah 

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
// const Nav = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isInvestOpen, setIsInvestOpen] = useState(false);
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const [isInvestMenuOpen, setIsInvestMenuOpen] = useState(false);
//   const router = useRouter();
//   const currentLocale = router.locale || 'en';

//   const investRef = useRef(null);
//   const langRef = useRef(null);

//   useEffect(() => {
//     const handler = (e) => {
//       if (investRef.current && !investRef.current.contains(e.target)) {
//         setIsInvestOpen(false);
//       }
//       if (langRef.current && !langRef.current.contains(e.target)) {
//         setIsLangOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handler);
//     return () => document.removeEventListener('mousedown', handler);
//   }, []);

//   const toggleInvest = () => {
//     setIsInvestOpen((o) => !o);
//     setIsLangOpen(false);
//   };
//   const toggleLang = () => {
//     setIsLangOpen((o) => !o);
//     setIsInvestOpen(false);
//   };

//   const navLinks = [
//     { href: '/members', label: 'Members' },
//     { href: '/about', label: 'About Us' },
//     { href: '/esg', label: 'ESG' },
//     { href: '/press', label: 'Press' },
//     { href: '/contact', label: 'Contact Us' },
//     { href: '/invest', label: 'Invest', isDropdown: true },
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
//     <nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className="bg-background text-text font-sans overflow-visible"
//     >
//       <div className="flex justify-between items-center py-4 overflow-visible">
//         <Link href="/" className={styles.logo}>
//           <div className="flex items-center space-x-2">
//             <div className="relative w-[30px] h-[30px] md:w-[54px] md:h-[54px]">
//               <Image src="/fenor-logo.png" alt="FENOR logo" layout="fill" objectFit="contain" />
//             </div>
//             <span>FENOR</span>
//           </div>
//         </Link>

//         <div className="hidden lg:flex items-center space-x-8 whitespace-nowrap overflow-visible">
//           {navLinks.map((link) => (
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
//                     {investDropdownItems.map((item) => (
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
//               {langDropdownItems.map((item) => (
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

//           <GoldButton/>
//         </div>

//         <button
//           className="block lg:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(true)}
//           aria-label="Toggle menu"
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </button>
//       </div>

//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenuOverlay}>
//           <motion.div
//             className={styles.mainMenu}
//             initial={{ x: 0 }}
//             animate={{ x: isInvestMenuOpen ? '-100%' : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className={styles.mobileMenuHeader}>
//               <Link href="/" className={styles.logo}>
//                 <div className="flex items-center space-x-2">
//                   <div className="relative w-[30px] h-[30px]">
//                     <Image src="/fenor-logo.png" alt="FENOR logo" layout="fill" objectFit="contain" />
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
//               {navLinks.map((link) => (
//                 <React.Fragment key={link.href}>
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
//                       href={link.href}
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
//                 {langDropdownItems.map((item) => (
//                   <Link
//                     key={item.locale}
//                     href={item.href}
//                     locale={item.locale}
//                     className={`${styles.langButton} ${
//                       currentLocale === item.locale ? styles.activeLang : ''
//                     }`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.locale.toUpperCase()}
//                   </Link>
//                 ))}
//               </div>
//               {/* <button className="bg-gold text-btn-text text-base font-normal px-4 py-2 rounded-btn hover:bg-special transition-colors duration-200 mt-4 w-full">
//                 Gold: $1,900/oz
//               </button> */}
       
//               <GoldButton className="mt-4 w-full"/>
//             </div>
//           </motion.div>

//           <motion.div
//             className={styles.investMenu}
//             initial={{ x: '100%' }}
//             animate={{ x: isInvestMenuOpen ? 0 : '100%' }}
//             transition={{ duration: 0.3 }}
//           >
//           <div className={styles.investMenuHeader}>
//   <div className="flex items-center space-x-2">
//     <Link href="/" className={styles.logo}>
//       <div className="relative w-[30px] h-[30px]">
//         <Image src="/fenor-logo.png" alt="FENOR logo" layout="fill" objectFit="contain" />
//       </div>
//     </Link>
//     <span>Invest</span>
//   </div>
//   <button onClick={() => setIsInvestMenuOpen(false)}>
//     <FontAwesomeIcon icon={faArrowLeft} />
//   </button>
// </div>
//             <div className={styles.investMenuItems}>
//               {investDropdownItems.map((item) => (
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
//     </nav>
//   );
// };

// export default Nav;

// //with fallback 
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

// // Default navigation items as fallback
// const DEFAULT_NAV_ITEMS = {
//   en: [
//     { label: 'Members', url: '/en/members', isDropdown: false },
//     { label: 'About Us', url: '/en/about-us', isDropdown: false },
//     { label: 'ESG', url: '/en/esg', isDropdown: false },
//     { label: 'Press', url: '/en/press', isDropdown: false },
//     { label: 'Contact Us', url: '/en/contact', isDropdown: false },
//     { label: 'Invest', url: '/en/invest', isDropdown: true },
//   ],
//   fr: [
//     { label: 'Membres', url: '/fr/members', isDropdown: false },
//     { label: 'À Propos', url: '/fr/about-us', isDropdown: false },
//     { label: 'ESG', url: '/fr/esg', isDropdown: false },
//     { label: 'Presse', url: '/fr/press', isDropdown: false },
//     { label: 'Contact', url: '/fr/contact', isDropdown: false },
//     { label: 'Investir', url: '/fr/invest', isDropdown: true },
//   ],
//   ar: [
//     { label: 'الأعضاء', url: '/ar/members', isDropdown: false },
//     { label: 'من نحن', url: '/ar/about-us', isDropdown: false },
//     { label: 'الحوكمة البيئية والاجتماعية', url: '/ar/esg', isDropdown: false },
//     { label: 'الصحافة', url: '/ar/press', isDropdown: false },
//     { label: 'اتصل بنا', url: '/ar/contact', isDropdown: false },
//     { label: 'استثمر', url: '/ar/invest', isDropdown: true },
//   ],
// };

// // Investment dropdown items per locale
// const INVEST_DROPDOWN_ITEMS = {
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

// // Language dropdown items
// const LANG_DROPDOWN_ITEMS = [
//   { href: '/', label: 'English', locale: 'en' },
//   { href: '/', label: 'Français', locale: 'fr' },
//   { href: '/', label: 'العربية', locale: 'ar' },
// ];

// const Nav = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isInvestOpen, setIsInvestOpen] = useState(false);
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const [isInvestMenuOpen, setIsInvestMenuOpen] = useState(false);
//   const [navItems, setNavItems] = useState([]);
//   const router = useRouter();
//   const currentLocale = router.locale || 'en';

//   const investRef = useRef(null);
//   const langRef = useRef(null);

//   // Fetch navigation items from Tina CMS or use fallback
//   useEffect(() => {
//     const fetchNavItems = async () => {
//       try {
//         // Try to dynamically import the client to prevent build errors
//         const { client } = await import('../../tina/__generated__/client');
        
//         try {
//           const navData = await client.queries.navigation({
//             relativePath: `${currentLocale}.json`,
//           });
          
//           if (navData?.data?.navigation?.items) {
//             setNavItems(navData.data.navigation.items);
//           } else {
//             // Use default items if query returns empty result
//             setNavItems(DEFAULT_NAV_ITEMS[currentLocale] || DEFAULT_NAV_ITEMS.en);
//           }
//         } catch (error) {
//           console.error('Error fetching navigation data:', error);
//           setNavItems(DEFAULT_NAV_ITEMS[currentLocale] || DEFAULT_NAV_ITEMS.en);
//         }
//       } catch (importError) {
//         console.error('Error importing Tina client:', importError);
//         setNavItems(DEFAULT_NAV_ITEMS[currentLocale] || DEFAULT_NAV_ITEMS.en);
//       }
//     };
    
//     fetchNavItems();
//   }, [currentLocale]);

//   // Click outside to close dropdowns
//   useEffect(() => {
//     const handler = (e) => {
//       if (investRef.current && !investRef.current.contains(e.target)) {
//         setIsInvestOpen(false);
//       }
//       if (langRef.current && !langRef.current.contains(e.target)) {
//         setIsLangOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handler);
//     return () => document.removeEventListener('mousedown', handler);
//   }, []);

//   const toggleInvest = () => {
//     setIsInvestOpen((o) => !o);
//     setIsLangOpen(false);
//   };
  
//   const toggleLang = () => {
//     setIsLangOpen((o) => !o);
//     setIsInvestOpen(false);
//   };

//   const investDropdownItems = INVEST_DROPDOWN_ITEMS[currentLocale] || INVEST_DROPDOWN_ITEMS.en;

//   return (
//     <nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className="bg-background text-text font-sans overflow-visible"
//     >
//       <div className="flex justify-between items-center py-4 overflow-visible">
//         <Link href={`/${currentLocale}`} className={styles.logo}>
//           <div className="flex items-center space-x-2">
//             <div className="relative w-[30px] h-[30px] md:w-[54px] md:h-[54px]">
//               <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
//             </div>
//             <span>FENOR</span>
//           </div>
//         </Link>

//         <div className="hidden lg:flex items-center space-x-8 whitespace-nowrap overflow-visible">
//           {navItems.map((link, index) => (
//             <div key={index} className="relative">
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
//                   <div className={`${styles.dropdown} ${isInvestOpen ? styles.show : ''}`}>
//                     {investDropdownItems.map((item) => (
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
//                   href={link.url}
//                   className={`${styles.menuItem} ${
//                     router.pathname === link.url ? styles.active : ''
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </div>
//           ))}

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
//               {LANG_DROPDOWN_ITEMS.map((item) => (
//                 <Link
//                   key={item.locale}
//                   href={router.asPath}
//                   locale={item.locale}
//                   className={styles.dropdownItem}
//                   onClick={() => setIsLangOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <GoldButton />
//         </div>

//         <button
//           className="block lg:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(true)}
//           aria-label="Toggle menu"
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </button>
//       </div>

//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenuOverlay}>
//           <motion.div
//             className={styles.mainMenu}
//             initial={{ x: 0 }}
//             animate={{ x: isInvestMenuOpen ? '-100%' : 0 }}
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
//               {navItems.map((link, index) => (
//                 <React.Fragment key={index}>
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
//                 {LANG_DROPDOWN_ITEMS.map((item) => (
//                   <Link
//                     key={item.locale}
//                     href={router.asPath}
//                     locale={item.locale}
//                     className={`${styles.langButton} ${
//                       currentLocale === item.locale ? styles.activeLang : ''
//                     }`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.locale.toUpperCase()}
//                   </Link>
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
//               {investDropdownItems.map((item) => (
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
//     </nav>
//   );
// };

// export default Nav;


// again good version

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

// // Investment dropdown items per locale (still hardcoded for this example)
// const INVEST_DROPDOWN_ITEMS = {
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

// // Language dropdown items
// const LANG_DROPDOWN_ITEMS = [
//   { href: '/', label: 'English', locale: 'en' },
//   { href: '/', label: 'Français', locale: 'fr' },
//   { href: '/', label: 'العربية', locale: 'ar' },
// ];

// const Nav = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isInvestOpen, setIsInvestOpen] = useState(false);
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const [isInvestMenuOpen, setIsInvestMenuOpen] = useState(false);
//   const [navItems, setNavItems] = useState([]); // Initialize as empty array
//   const router = useRouter();
//   const currentLocale = router.locale || 'en';

//   const investRef = useRef(null);
//   const langRef = useRef(null);

//   // Fetch navigation items from TinaCMS
//   useEffect(() => {
//     const fetchNavItems = async () => {
//       try {
//         const { client } = await import('../../tina/__generated__/client');
//         const navData = await client.queries.navigation({
//           relativePath: `${currentLocale}.json`,
//         });
//         console.log('Fetched navigation data from TinaCMS:', navData);
//         if (navData?.data?.navigation?.items) {
//           console.log('Setting navItems from TinaCMS:', navData.data.navigation.items);
//           setNavItems(navData.data.navigation.items);
//         } else {
//           console.log('No navigation items found in TinaCMS for locale', currentLocale);
//           setNavItems([]);
//         }
//       } catch (error) {
//         console.error('Error fetching navigation data for locale', currentLocale, ':', error);
//         setNavItems([]);
//       }
//     };
//     fetchNavItems();
//   }, [currentLocale]);

//   // Click outside to close dropdowns
//   useEffect(() => {
//     const handler = (e) => {
//       if (investRef.current && !investRef.current.contains(e.target)) {
//         setIsInvestOpen(false);
//       }
//       if (langRef.current && !langRef.current.contains(e.target)) {
//         setIsLangOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handler);
//     return () => document.removeEventListener('mousedown', handler);
//   }, []);

//   const toggleInvest = () => {
//     setIsInvestOpen((o) => !o);
//     setIsLangOpen(false);
//   };

//   const toggleLang = () => {
//     setIsLangOpen((o) => !o);
//     setIsInvestOpen(false);
//   };

//   // Use hardcoded investment dropdown items for this example
//   const investDropdownItems = INVEST_DROPDOWN_ITEMS[currentLocale] || INVEST_DROPDOWN_ITEMS.en;

//   return (
//     <nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className="bg-background text-text font-sans overflow-visible"
//     >
//       <div className="flex justify-between items-center py-4 overflow-visible">
//         <Link href={`/${currentLocale}`} className={styles.logo}>
//           <div className="flex items-center space-x-2">
//             <div className="relative w-[30px] h-[30px] md:w-[54px] md:h-[54px]">
//               <Image src="/fenor-logo.png" alt="FENOR logo" width={54} height={54} />
//             </div>
//             <span>FENOR</span>
//           </div>
//         </Link>

//         <div className="hidden lg:flex items-center space-x-8 whitespace-nowrap overflow-visible">
//           {navItems.map((link, index) => (
//             <div key={index} className="relative">
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
//                   <div className={`${styles.dropdown} ${isInvestOpen ? styles.show : ''}`}>
//                     {investDropdownItems.map((item) => (
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
//                   href={link.url}
//                   className={`${styles.menuItem} ${
//                     router.pathname === link.url ? styles.active : ''
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </div>
//           ))}

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
//               {LANG_DROPDOWN_ITEMS.map((item) => (
//                 <Link
//                   key={item.locale}
//                   href={router.asPath}
//                   locale={item.locale}
//                   className={styles.dropdownItem}
//                   onClick={() => setIsLangOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <GoldButton />
//         </div>

//         <button
//           className="block lg:hidden text-text focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(true)}
//           aria-label="Toggle menu"
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </button>
//       </div>

//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenuOverlay}>
//           <motion.div
//             className={styles.mainMenu}
//             initial={{ x: 0 }}
//             animate={{ x: isInvestMenuOpen ? '-100%' : 0 }}
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
//               {navItems.map((link, index) => (
//                 <React.Fragment key={index}>
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
//                 {LANG_DROPDOWN_ITEMS.map((item) => (
//                   <Link
//                     key={item.locale}
//                     href={router.asPath}
//                     locale={item.locale}
//                     className={`${styles.langButton} ${
//                       currentLocale === item.locale ? styles.activeLang : ''
//                     }`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.locale.toUpperCase()}
//                   </Link>
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
//               {investDropdownItems.map((item) => (
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
//     </nav>
//   );
// };

// export default Nav;



// not sticky nav ( down below )





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

// // Now strongly typed: keys must be one of our Locale literals
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

//   const router = useRouter();
//   // Narrow the locale into our allowed set; default to 'en' if it isn't one of them
//   const rawLocale = router.locale ?? 'en';
//   const currentLocale = (['en', 'fr', 'ar'].includes(rawLocale) ? rawLocale : 'en') as Locale;

//   const investRef = useRef<HTMLDivElement>(null);
//   const langRef = useRef<HTMLDivElement>(null);

//   // Fetch navigation items via TinaCMS GraphQL client
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

//   const toggleInvest = () => {
//     setIsInvestOpen(o => !o);
//     setIsLangOpen(false);
//   };
//   const toggleLang = () => {
//     setIsLangOpen(o => !o);
//     setIsInvestOpen(false);
//   };

//   // Index into our typed record with a Locale
//   const investDropdownItems = INVEST_DROPDOWN_ITEMS[currentLocale];

//   return (
//     <motion.nav
//       dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}
//       className="bg-background text-text font-sans overflow-visible"
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//     >
//       {/* Top bar */}
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

//         {/* Desktop nav items */}
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
//                   className={`${styles.menuItem} ${
//                     router.pathname === link.url ? styles.active : ''
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </motion.div>
//           ))}

//           {/* Language selector */}
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
//                 <Link
//                   key={item.locale}
//                   href={router.asPath}
//                   locale={item.locale}
//                   className={styles.dropdownItem}
//                   onClick={() => setIsLangOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* CTA button */}
//           <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
//             <GoldButton />
//           </motion.div>
//         </motion.div>

//         {/* Mobile menu toggle */}
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

//       {/* Mobile overlay */}
//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenuOverlay}>
//           {/* Main mobile menu */}
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
//                   <Link
//                     key={item.locale}
//                     href={router.asPath}
//                     locale={item.locale}
//                     className={`${styles.langButton} ${
//                       currentLocale === item.locale ? styles.activeLang : ''
//                     }`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.locale.toUpperCase()}
//                   </Link>
//                 ))}
//               </div>
//               <GoldButton className="mt-4 w-full" />
//             </div>
//           </motion.div>

//           {/* Invest submenu */}
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
import { motion } from 'framer-motion';
import styles from './nav.module.css';
import GoldButton from '../GoldButton';

type Locale = 'en' | 'fr' | 'ar';

interface NavItem {
  label: string;
  url: string;
  isDropdown?: boolean;
}

interface InvestItem {
  href: string;
  label: string;
}

const INVEST_DROPDOWN_ITEMS: Record<Locale, InvestItem[]> = {
  en: [
    { href: '/en/invest/stocks', label: 'Stocks' },
    { href: '/en/invest/bonds', label: 'Bonds' },
    { href: '/en/invest/real-estate', label: 'Real Estate' },
  ],
  fr: [
    { href: '/fr/invest/stocks', label: 'Actions' },
    { href: '/fr/invest/bonds', label: 'Obligations' },
    { href: '/fr/invest/real-estate', label: 'Immobilier' },
  ],
  ar: [
    { href: '/ar/invest/stocks', label: 'الأسهم' },
    { href: '/ar/invest/bonds', label: 'السندات' },
    { href: '/ar/invest/real-estate', label: 'العقارات' },
  ],
};

const LANG_DROPDOWN_ITEMS = [
  { href: '/', label: 'English', locale: 'en' },
  { href: '/', label: 'Français', locale: 'fr' },
  { href: '/', label: 'العربية', locale: 'ar' },
] as const;

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

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInvestOpen, setIsInvestOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isInvestMenuOpen, setIsInvestMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [isSticky, setIsSticky] = useState(false);

  const router = useRouter();
  const rawLocale = router.locale ?? 'en';
  const currentLocale = (['en', 'fr', 'ar'].includes(rawLocale) ? rawLocale : 'en') as Locale;

  const investRef = useRef<HTMLDivElement>(null);
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
          })) as NavItem[];
        setNavItems(items);
      } catch {
        setNavItems([]);
      }
    };
    fetchNavItems();
  }, [currentLocale]);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleInvest = () => {
    setIsInvestOpen(o => !o);
    setIsLangOpen(false);
  };
  const toggleLang = () => {
    setIsLangOpen(o => !o);
    setIsInvestOpen(false);
  };

  const investDropdownItems = INVEST_DROPDOWN_ITEMS[currentLocale];

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
                <div ref={investRef} className="relative">
                  <button
                    className={styles.menuItem}
                    onClick={toggleInvest}
                    aria-expanded={isInvestOpen}
                  >
                    {link.label}{' '}
                    <FontAwesomeIcon icon={isInvestOpen ? faChevronUp : faChevronDown} />
                  </button>
                  <motion.div
                    className={`${styles.dropdown} ${isInvestOpen ? styles.show : ''}`}
                    initial="hidden"
                    animate={isInvestOpen ? 'visible' : 'hidden'}
                    variants={dropdownVariants}
                  >
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

          <motion.div ref={langRef} variants={itemVariants} whileHover={{ y: -2 }}>
            <button
              className={`${styles.menuItem} ${styles.selected}`}
              onClick={toggleLang}
              aria-expanded={isLangOpen}
            >
              {currentLocale.toUpperCase()}{' '}
              <FontAwesomeIcon icon={isLangOpen ? faChevronUp : faChevronDown} />
            </button>
            <motion.div
              className={`${styles.dropdown} ${isLangOpen ? styles.show : ''}`}
              initial="hidden"
              animate={isLangOpen ? 'visible' : 'hidden'}
              variants={dropdownVariants}
            >
              {LANG_DROPDOWN_ITEMS.map(item => (
                <Link
                  key={item.locale}
                  href={router.asPath}
                  locale={item.locale}
                  className={styles.dropdownItem}
                  onClick={() => setIsLangOpen(false)}
                >
                  {item.label}
                </Link>
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
                  setIsInvestMenuOpen(false);
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
                      onClick={() => setIsInvestMenuOpen(true)}
                    >
                      {link.label}{' '}
                      <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                    </button>
                  ) : (
                    <Link
                      href={link.url}
                      className={styles.mobileMenuItem}
                      onClick={() => setIsMobileMenuOpen(false)}
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
                  <Link
                    key={item.locale}
                    href={router.asPath}
                    locale={item.locale}
                    className={`${styles.langButton} ${currentLocale === item.locale ? styles.activeLang : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.locale.toUpperCase()}
                  </Link>
                ))}
              </div>
              <GoldButton className="mt-4 w-full" />
            </div>
          </motion.div>

          <motion.div
            className={styles.investMenu}
            initial={{ x: '100%' }}
            animate={{ x: isInvestMenuOpen ? 0 : '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.investMenuHeader}>
              <div className="flex items-center space-x-2">
                <Link href={`/${currentLocale}`} className={styles.logo}>
                  <div className="relative w-[30px] h-[30px]">
                    <Image src="/fenor-logo.png" alt="FENOR logo" width={30} height={30} />
                  </div>
                </Link>
                <span>Invest</span>
              </div>
              <button onClick={() => setIsInvestMenuOpen(false)}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </div>
            <div className={styles.investMenuItems}>
              {investDropdownItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileMenuItem}
                  onClick={() => {
                    setIsInvestMenuOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
};

export default Nav;