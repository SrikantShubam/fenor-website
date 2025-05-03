// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faYoutube, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import Image from 'next/image';
// import Link from 'next/link';
// // Mapping of social platform names to FontAwesome icons
// const socialIcons = {
//   linkedin: faLinkedin,
//   youtube: faYoutube,
//   facebook: faFacebook,
//   twitter: faTwitter,
//   whatsapp: faWhatsapp,
// };

// // Define the shape of the footer data (make fields optional)
// interface FooterData {
//   description?: string;
//   quickLinks?: { label: string; url: string }[];
//   aboutUs?: { label: string; url: string }[];
//   importantLinks?: { label: string; url: string }[];
//   socials?: { name: string; url: string }[];
// }

// const Footer: React.FC<{ footerData?: FooterData }> = ({ footerData }) => {
//   console.log('Footer data:', footerData);

//   if (!footerData) {
//     return <footer className="bg-[#8B0000] text-white">No footer data available.</footer>;
//   }

//   return (
//     <footer className="text-white border-t border-[#EBBA7F]">
//       {/* Top Section: Logo, Brand, Subtitle */}
//       <div className="pt-4 mb-8">
//         <div className="flex items-center mb-4">
//           <Image 
//             src="/fenor-logo.png" 
//             alt="FENOR logo" 
//             width={54} 
//             height={54} 
//             className="w-[30px] h-[30px] md:w-[54px] md:h-[54px]" 
//           />
//           <div>
//             <h2 className="text-[19px] font-bold ml-2 md:text-2xl">FENOR</h2>
//             <p className="text-xs font-normal ml-2">Fédération Nationale des Usines d'Or</p>
//           </div>
//         </div>
//       </div>

//       {/* Four Columns: Description, Quick Links, About Us, Important Links */}
//       <div className="grid grid-cols-1 md:grid-cols-[4fr_2fr_2fr_2fr] gap-10 mb-8">
//         {/* Column 1: Description */}
//         <div className="text-left">
//           <p className="text-[13px] md:text-[19px] font-normal mb-4">{footerData.description || ''}</p>
//         </div>

//         {/* Column 2: Quick Links */}
//         <div>
//           <h3 className="md:text-[19px] text-[16px] font-bold mb-5">Quick Links</h3>
//           <ul>
//             {(footerData.quickLinks || []).map((link, index) => (
//               <li key={index} className="md:text-[19px] text-[16px] font-normal mb-4">
//                 <a href={link.url} className="text-white hover:text-[#EBBA7F] no-underline">
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 3: About Us */}
//         <div>
//           <h3 className="md:text-[19px] text-[16px] font-bold mb-5">About Us</h3>
//           <ul>
//             {(footerData.aboutUs || []).map((link, index) => (
//               <li key={index} className="md:text-[19px] text-[16px] font-normal mb-4">
//                 <a href={link.url} className="text-white hover:text-[#EBBA7F] no-underline">
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 4: Important Links */}
//         <div className="justify-self-start md:justify-self-end">
//           <h3 className="md:text-[19px] text-[16px] font-bold mb-5">Important Links</h3>
//           <ul>
//             {(footerData.importantLinks || []).map((link, index) => (
//               <li key={index} className="md:text-[19px] text-[16px] font-normal mb-4">
//                 <a href={link.url} className="text-white hover:text-[#EBBA7F] no-underline">
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Socials Section */}
//       <div className="pb-4 mb-12">
//         <h3 className="text-[19px] font-bold mb-4">Our Socials</h3>
//         <div className="flex gap-5 md:gap-8">
//           {(footerData.socials || []).map((social, index) => {
//             const icon = socialIcons[social.name.toLowerCase()];
//             if (icon) {
//               return (
//                 <a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white text-2xl hover:text-[#EBBA7F]"
//                 >
//                   <FontAwesomeIcon icon={icon} />
//                 </a>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>

//      {/* Copyright Section */}
//     {/* Copyright Section */}
// <div className="flex flex-col md:flex-row justify-between items-start md:items-center  pt-4 mb-4 border-t border-[#EBBA7F]">
//   <p className="text-[12px] md:text-[14px] font-regular tracking-wide text-gray-300 mb-3 md:mb-0">
//     © 2025 Fenor. All Rights Reserved.
//   </p>
//   <div className="flex items-center gap-3">
//     <Link
//       href="https://agency10169.com"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-[12px] md:text-[14px] font-medium text-gray-200 hover:text-[#EBBA7F] transition-colors duration-300 no-underline"
//     >
//       Made by Agency10169
//     </Link>
//     <a
//       href="https://wa.me/agency10169"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="hidden md:flex items-center justify-center text-gray-200 hover:text-[#EBBA7F] transition-colors duration-300"
//     >
//       <FontAwesomeIcon icon={socialIcons.whatsapp} className="text-lg" />
//     </a>
//   </div>
// </div>
//     </footer>
//   );
// };

// export default Footer;






import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mapping of social platform names to FontAwesome icons
const socialIcons = {
  linkedin: faLinkedin,
  youtube: faYoutube,
  facebook: faFacebook,
  twitter: faTwitter,
  whatsapp: faWhatsapp,
};

// Define the shape of the footer data (make fields optional)
interface FooterData {
  description?: string;
  quickLinks?: { label: string; url: string }[];
  aboutUs?: { label: string; url: string }[];
  importantLinks?: { label: string; url: string }[];
  socials?: { name: string; url: string }[];
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Footer: React.FC<{ footerData?: FooterData }> = ({ footerData }) => {
  console.log('Footer data:', footerData);

  if (!footerData) {
    return (
      <motion.footer
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-[#8B0000] text-white"
      >
        No footer data available.
      </motion.footer>
    );
  }

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="text-white border-t border-[#EBBA7F]"
    >
      {/* Top Section: Logo, Brand, Subtitle */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="pt-4 mb-8">
        <div className="flex items-center mb-4">
          <Image
            src="/fenor-logo.png"
            alt="FENOR logo"
            width={54}
            height={54}
            className="w-[30px] h-[30px] md:w-[54px] md:h-[54px]"
          />
          <div>
            <h2 className="text-[19px] font-bold ml-2 md:text-2xl">FENOR</h2>
            <p className="text-xs font-normal ml-2">Fédération Nationale des Usines d'Or</p>
          </div>
        </div>
      </motion.div>

      {/* Four Columns: Description, Quick Links, About Us, Important Links */}
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        <div className="grid grid-cols-1 md:grid-cols-[4fr_2fr_2fr_2fr] gap-10 mb-8">
          {/* Column 1: Description */}
          <motion.div variants={fadeIn} className="text-left">
            <p className="text-[13px] md:text-[19px] font-normal mb-4">{footerData.description || ''}</p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeIn}>
            <h3 className="md:text-[19px] text-[16px] font-bold mb-5">Quick Links</h3>
            <ul>
              {(footerData.quickLinks || []).map((link, index) => (
                <li key={index} className="md:text-[19px] text-[16px] font-normal mb-4">
                  <a href={link.url} className="text-white hover:text-[#EBBA7F] no-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: About Us */}
          <motion.div variants={fadeIn}>
            <h3 className="md:text-[19px] text-[16px] font-bold mb-5">About Us</h3>
            <ul>
              {(footerData.aboutUs || []).map((link, index) => (
                <li key={index} className="md:text-[19px] text-[16px] font-normal mb-4">
                  <a href={link.url} className="text-white hover:text-[#EBBA7F] no-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Important Links */}
          <motion.div variants={fadeIn} className="justify-self-start md:justify-self-end">
            <h3 className="md:text-[19px] text-[16px] font-bold mb-5">Important Links</h3>
            <ul>
              {(footerData.importantLinks || []).map((link, index) => (
                <li key={index} className="md:text-[19px] text-[16px] font-normal mb-4">
                  <a href={link.url} className="text-white hover:text-[#EBBA7F] no-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Socials Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pb-4 mb-12">
        <h3 className="text-[19px] font-bold mb-4">Our Socials</h3>
        <div className="flex gap-5 md:gap-8">
          {(footerData.socials || []).map((social, index) => {
            const icon = socialIcons[social.name.toLowerCase()];
            if (icon) {
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-white text-2xl hover:text-[#EBBA7F]"
                >
                  <FontAwesomeIcon icon={icon} />
                </motion.a>
              );
            }
            return null;
          })}
        </div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div variants={fadeIn} className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 mb-4 border-t border-[#EBBA7F]">
        <p className="text-[12px] md:text-[14px] font-regular tracking-wide text-gray-300 mb-3 md:mb-0">
          © 2025 Fenor. All Rights Reserved.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="https://agency10169.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] md:text-[14px] font-medium text-gray-200 hover:text-[#EBBA7F] transition-colors duration-300 no-underline"
          >
            Made by Agency10169
          </Link>
          <motion.a whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}
            href="https://wa.me/agency10169"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center text-gray-200 hover:text-[#EBBA7F] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={socialIcons.whatsapp} className="text-lg" />
          </motion.a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
