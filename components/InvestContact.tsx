// import React from 'react';
// import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import { motion } from 'framer-motion';
// import Button from './Button';

// interface InvestContactProps {
//   header?: string;
//   paragraph?: TinaMarkdownContent;
//   timings?: string;
//   button?: { label?: string; url?: string };
//   email?: { label?: string; email?: string };
//   phone?: { label?: string; phone?: string };
//   socialsHeading?: string;
//   socialMedia?: { platform: string; link: string }[];
// }

// const InvestContact: React.FC<InvestContactProps> = ({
//   header,
//   paragraph,
//   timings,
//   button,
//   email,
//   phone,
//   socialsHeading,
//   socialMedia,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="py-12"
//     >
//       {header && (
//         <h2 className="text-[28px] md:text-[33px] lg:text-[48px] font-bold text-center mb-4">
//           {header}
//         </h2>
//       )}
//       {paragraph && (
//         <div className="text-[13px] md:text-[16px] lg:text-[19px] text-center mb-8">
//           <TinaMarkdown content={paragraph} />
//         </div>
//       )}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="p-4">
//           {timings && (
//             <p className="text-[16px] md:text-[19px] lg:text-[23px] mb-4">{timings}</p>
//           )}
//           {button && button.label && button.url && (
//             <Button href={button.url}>{button.label}</Button>
//           )}
//         </div>
//         <div className="p-4">
//           {email && email.label && (
//             <p className="text-[16px] md:text-[19px] lg:text-[23px]">{email.label}</p>
//           )}
//           {email && email.email && (
//             <p className="text-[23px] md:text-[28px] lg:text-[33px] font-bold mb-4">
//               {email.email}
//             </p>
//           )}
//           {phone && phone.label && (
//             <p className="text-[16px] md:text-[19px] lg:text-[23px]">{phone.label}</p>
//           )}
//           {phone && phone.phone && (
//             <p className="text-[23px] md:text-[28px] lg:text-[33px] font-bold">
//               {phone.phone}
//             </p>
//           )}
//         </div>
//         <div className="p-4">
//           {socialsHeading && (
//             <p className="text-[16px] md:text-[19px] lg:text-[23px] mb-4">{socialsHeading}</p>
//           )}
//           <div className="flex space-x-4">
//             {socialMedia?.map((sm, index) => (
//               <a
//                 key={index}
//                 href={sm.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-[36px] h-[36px] bg-gray-300 flex items-center justify-center"
//               >
//                 {sm.platform}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default InvestContact;
























// import React from 'react';
// import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFacebook,
//   faXTwitter,
//   faLinkedin,
//   faInstagram,
//   faYoutube,
// } from '@fortawesome/free-brands-svg-icons';
// import Button from './Button';

// interface InvestContactProps {
//   header?: string;
//   paragraph?: TinaMarkdownContent;
//   timings?: string;
//   button?: { label?: string; url?: string };
//   email?: { label?: string; email?: string };
//   phone?: { label?: string; phone?: string };
//   socialsHeading?: string;
//   socialMedia?: { platform: string; link: string }[];
// }

// // Map platform values to Font Awesome icons
// const iconMap = {
//   facebook: faFacebook,
//   twitter: faXTwitter,
//   linkedin: faLinkedin,
//   instagram: faInstagram,
//   youtube: faYoutube,
// };

// const InvestContact: React.FC<InvestContactProps> = ({
//   header,
//   paragraph,
//   timings,
//   button,
//   email,
//   phone,
//   socialsHeading,
//   socialMedia,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="py-8"
//     >
//       {header && (
//         <h2 className="text-[28px] md:text-[33px] lg:text-[48px] font-bold mb-4">
//           {header}
//         </h2>
//       )}
//       {paragraph && (
//         <div className="text-[13px] md:text-[16px] lg:text-[19px] mb-8">
//           <TinaMarkdown content={paragraph} />
//         </div>
//       )}
//       {/* Desktop and Tablet View */}
//       <div className="hidden md:block  mt-20">
//         <div className="grid grid-cols-3 gap-8">
//           {/* First Row: Timings and Email */}
//           <div className="p-4">
//             {timings && (
//               <p className="text-[16px] md:text-[19px] lg:text-[23px] mb-4">{timings}</p>
//             )}
//           </div>
//           <div className="p-4">
//             {email && email.label && (
//               <p className="text-[16px] md:text-[19px] lg:text-[23px]">{email.label}</p>
//             )}
//             {email && email.email && (
//               <p className="text-[23px] md:text-[28px] lg:text-[33px] font-bold mb-4">
//                 {email.email}
//               </p>
//             )}
//           </div>
//           <div className="p-4"></div> {/* Empty cell for alignment */}
//         </div>
//         <div className="grid grid-cols-3 gap-8 mt-8">
//           {/* Second Row: Button, Phone, and Socials */}
//           <div className="p-4">
//             {button && button.label && button.url && (
//               <Button href={button.url} className="">
//                 {button.label}
//               </Button>
//             )}
//           </div>
//           <div className="p-4">
//             {phone && phone.label && (
//               <p className="text-[16px] md:text-[19px] lg:text-[23px]">{phone.label}</p>
//             )}
//             {phone && phone.phone && (
//               <p className="text-[23px] md:text-[28px] lg:text-[33px] font-bold">
//                 {phone.phone}
//               </p>
//             )}
//           </div>
//           <div className="p-4">
//             {socialsHeading && (
//               <p className="text-[16px] md:text-[19px] lg:text-[23px] mb-4">{socialsHeading}</p>
//             )}
//             <div className="flex space-x-4">
//               {socialMedia?.map((sm, index) => (
//                 <a
//                   key={index}
//                   href={sm.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center px-2 md:px-3 hover:text-[#EBBA7F]"
//                 >
//                   {iconMap[sm.platform] ? (
//                     <FontAwesomeIcon icon={iconMap[sm.platform]} className="fa-xl md:fa-2x" />
//                   ) : (
//                     <span>{sm.platform}</span>
//                   )}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Mobile View */}
//       <div className="block md:hidden mt-10">
//         <div className="">
//           {email && email.label && (
//             <p className="text-[16px] my-4">{email.label}</p>
//           )}
//           {email && email.email && (
//             <p className="text-[23px] font-bold my-4">{email.email}</p>
//           )}
//           {phone && phone.label && (
//             <p className="text-[16px] mt-10">{phone.label}</p>
//           )}
//           {phone && phone.phone && (
//             <p className="text-[23px] font-bold mt-4">{phone.phone}</p>
//           )}
//           {socialsHeading && (
//             <p className="text-[16px] my-4 mt-10">{socialsHeading}</p>
//           )}
//           <div className="flex space-x-4 mt-2">
//             {socialMedia?.map((sm, index) => (
//               <a
//                 key={index}
//                 href={sm.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center px-2 hover:text-[#EBBA7F]"
//               >
//                 {iconMap[sm.platform] ? (
//                   <FontAwesomeIcon icon={iconMap[sm.platform]} className="fa-xl" />
//                 ) : (
//                   <span>{sm.platform}</span>
//                 )}
//               </a>
//             ))}
//           </div>
//           {timings && (
//             <p className="text-[16px] mt-16">{timings}</p>
//           )}
//           {button && button.label && button.url && (
//             <Button href={button.url} className="mt-10">
//               {button.label}
//             </Button>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default InvestContact;









import React, { useRef } from 'react';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Button from './Button';

interface InvestContactProps {
  header?: string;
  paragraph?: TinaMarkdownContent;
  timings?: string;
  button?: { label?: string; url?: string };
  email?: { label?: string; email?: string };
  phone?: { label?: string; phone?: string };
  socialsHeading?: string;
  socialMedia?: { platform: string; link: string }[];
}

// Map platform values to FontAwesome icons
const iconMap = {
  facebook: faFacebook,
  twitter: faXTwitter,
  linkedin: faLinkedin,
  whatsapp:faWhatsapp,
  instagram: faInstagram,
  youtube: faYoutube,
  
};

const InvestContact: React.FC<InvestContactProps> = ({
  header,
  paragraph,
  timings,
  button,
  email,
  phone,
  socialsHeading,
  socialMedia,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Adjusted y transformation for subtler movement
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, 20]);

  // Function to render the header with the last word colored
  const renderHeader = (headerText: string) => {
    const words = headerText.split(' ');
    const lastWord = words.pop();
    const firstPart = words.join(' ');
    return (
      <>
        {firstPart && <span>{firstPart} </span>}
        {lastWord && <span style={{ color: '#FFDA66' }}>{lastWord}</span>}
      </>
    );
  };

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="py-8 overflow-x-hidden" // Added overflow-x-hidden
    >
      {header && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[28px] md:text-[33px] lg:text-[48px] font-bold mb-4"
        >
          {renderHeader(header)}
        </motion.h2>
      )}
      {paragraph && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[13px] md:text-[16px] lg:text-[19px] mb-8"
        >
          <TinaMarkdown content={paragraph} />
        </motion.div>
      )}
      {/* Desktop and Tablet View */}
      <div className="hidden md:block mt-20">
        <div className="grid grid-cols-3 gap-8">
          {/* First Row: Timings and Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-4"
          >
            {timings && (
              <p className="text-[16px] md:text-[19px] lg:text-[23px] mb-4">{timings}</p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-4"
          >
            {email && email.label && (
              <p className="text-[16px] md:text-[19px] lg:text-[23px]">{email.label}</p>
            )}
            {email && email.email && (
              <p className="text-[23px] md:text-[28px] lg:text-[33px] font-bold mb-4">
                {email.email}
              </p>
            )}
          </motion.div>
          <div className="p-4"></div> {/* Empty cell for alignment */}
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          {/* Second Row: Button, Phone, and Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="p-4"
          >
            {button && button.label && button.url && (
              <Button href={button.url} className="">
                {button.label}
              </Button>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="p-4"
          >
            {phone && phone.label && (
              <p className="text-[16px] md:text-[19px] lg:text-[23px]">{phone.label}</p>
            )}
            {phone && phone.phone && (
              <p className="text-[23px] md:text-[28px] lg:text-[33px] font-bold">
                {phone.phone}
              </p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="p-4"
          >
            {socialsHeading && (
              <p className="text-[16px] md:text-[19px] lg:text-[23px] mb-4">{socialsHeading}</p>
            )}
            <div className="flex space-x-4">
              {socialMedia?.map((sm, index) => (
                <a
                  key={index}
                  href={sm.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-2 md:px-3 hover:text-[#EBBA7F]"
                >
                  {iconMap[sm.platform] ? (
                    <FontAwesomeIcon icon={iconMap[sm.platform]} className="fa-xl md:fa-2x" />
                  ) : (
                    <span>{sm.platform}</span>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="block md:hidden mt-10">
        <div className="">
          {email && email.label && (
            <p className="text-[16px] my-4">{email.label}</p>
          )}
          {email && email.email && (
            <p className="text-[23px] font-bold my-4">{email.email}</p>
          )}
          {phone && phone.label && (
            <p className="text-[16px] mt-10">{phone.label}</p>
          )}
          {phone && phone.phone && (
            <p className="text-[23px] font-bold mt-4">{phone.phone}</p>
          )}
          {socialsHeading && (
            <p className="text-[16px] my-4 mt-10">{socialsHeading}</p>
          )}
          <div className="flex space-x-4 mt-2">
            {socialMedia?.map((sm, index) => (
              <a
                key={index}
                href={sm.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-2 hover:text-[#EBBA7F]"
              >
                {iconMap[sm.platform] ? (
                  <FontAwesomeIcon icon={iconMap[sm.platform]} className="fa-xl" />
                ) : (
                  <span>{sm.platform}</span>
                )}
              </a>
            ))}
          </div>
          {timings && (
            <p className="text-[16px] mt-16">{timings}</p>
          )}
          {button && button.label && button.url && (
            <Button href={button.url} className="mt-10">
              {button.label}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InvestContact;