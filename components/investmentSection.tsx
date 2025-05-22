// import React from 'react';
// import Image from 'next/image';
// import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import { motion } from 'framer-motion';
// import Button from './Button';

// interface InvestmentSectionProps {
//   smallHeading?: string;
//   bigHeading?: string;
//   paragraph?: TinaMarkdownContent;
//   buttonText?: string;
//   buttonUrl?: string;
//   image?: string; // Optional image field to be rendered on the right
// }

// const InvestmentSection: React.FC<InvestmentSectionProps> = ({
//   smallHeading,
//   bigHeading,
//   paragraph,
//   buttonText,
//   buttonUrl,
//   image,
// }) => {
//   // Animation variants for the container
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   // Base animation variants for individual elements
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
//   };

//   // Animation for image
//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
//     },
//   };

//   // Function to split text into words and wrap in motion.spans
//   const splitTextIntoWords = (text: string) => {
//     return text.split(' ').map((word, index) => (
//       <motion.span
//         key={index}
//         variants={textVariants}
//         style={{ display: 'inline-block', marginRight: '0.25em' }}
//       >
//         {word}
//       </motion.span>
//     ));
//   };

//   // Function to render small heading with animated parts
//   const renderSmallHeading = (text: string) => {
//     const words = text.split(' ');
//     const lastWord = words.pop();
//     const precedingWords = words.join(' ');
//     return (
//       <>
//         {precedingWords && (
//           <motion.span variants={textVariants} className="text-white">
//             {precedingWords}{' '}
//           </motion.span>
//         )}
//         {lastWord && (
//           <motion.span variants={textVariants} className="text-[#FFDA66]">
//             {lastWord}
//           </motion.span>
//         )}
//       </>
//     );
//   };

//   return (
//     <motion.div
//       className="flex flex-col sm:flex-row"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//     >
//       {/* Small Heading Column */}
//       {smallHeading && (
//         <div className="sm:basis-[25%]">
//           <motion.h3
//             className="text-[19px] sm:text-[33px] mb-5 md:text-[23px] lg:text-[33px] font-bold"
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: { staggerChildren: 0.1 },
//               },
//             }}
//           >
//             {renderSmallHeading(smallHeading)}
//           </motion.h3>
//         </div>
//       )}

//       {/* Gap Column */}
//       <div className="hidden sm:block sm:basis-[16.6667%]" />

//       {/* Content and Image Row */}
//       <div className="sm:basis-[58.3333%] flex flex-col lg:flex-row gap-8">
//         {/* Content Column */}
//         <motion.div
//           className="flex-1"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: { staggerChildren: 0.2 },
//             },
//           }}
//         >
//           <div className="flex flex-col space-y-[42px] md:space-y-[72px]">
//             {bigHeading && (
//               <motion.h2
//                 className="text-[28px] sm:text-[48px] md:text-[33px] lg:text-[48px] font-semibold"
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: {
//                     opacity: 1,
//                     transition: { staggerChildren: 0.05 },
//                   },
//                 }}
//               >
//                 {splitTextIntoWords(bigHeading)}
//               </motion.h2>
//             )}

//             {paragraph && (
//               <motion.div
//                 className="text-[13px] sm:text-[19px] md:text-[16px] lg:text-[19px]"
//                 variants={textVariants}
//               >
//                 <TinaMarkdown content={paragraph} />
//               </motion.div>
//             )}

//             {buttonText && buttonUrl && (
//               <motion.div
//                 variants={{
//                   hidden: { opacity: 0, scale: 0.8 },
//                   visible: {
//                     opacity: 1,
//                     scale: 1,
//                     transition: { type: 'spring', stiffness: 100, damping: 10 },
//                   },
//                 }}
//               >
//                 <Button href={buttonUrl} className="text-center">
//                   {buttonText}
//                 </Button>
//               </motion.div>
//             )}
//           </div>
//         </motion.div>

//         {/* Image Column */}
//         {image && (
//           <motion.div
//             variants={imageVariants}
//             className="lg:basis-[40%] relative w-full max-w-md lg:max-w-none"
//           >
//             <Image
//               src={image}
//               alt="Investment section image"
//               width={672}
//               height={378}
//               className="object-cover rounded-lg"
//               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, 40vw"
//             />
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default InvestmentSection;







import React from 'react';
import Image from 'next/image';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { motion } from 'framer-motion';
import Button from './Button';

interface InvestmentSectionProps {
  smallHeading?: string;
  bigHeading?: string;
  paragraph?: TinaMarkdownContent;
  buttonText?: string;
  buttonUrl?: string;
  image?: string; // Optional image field to be rendered below the big heading
}

const InvestmentSection: React.FC<InvestmentSectionProps> = ({
  smallHeading,
  bigHeading,
  paragraph,
  buttonText,
  buttonUrl,
  image,
}) => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Base animation variants for individual elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  // Animation for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  // Function to split text into words and wrap in motion.spans
  const splitTextIntoWords = (text: string) => {
    return text.split(' ').map((word, index) => (
      <motion.span
        key={index}
        variants={textVariants}
        style={{ display: 'inline-block', marginRight: '0.25em' }}
      >
        {word}
      </motion.span>
    ));
  };

  // Function to render small heading with animated parts
  const renderSmallHeading = (text: string) => {
    const words = text.split(' ');
    const lastWord = words.pop();
    const precedingWords = words.join(' ');
    return (
      <>
        {precedingWords && (
          <motion.span variants={textVariants} className="text-white">
            {precedingWords}{' '}
          </motion.span>
        )}
        {lastWord && (
          <motion.span variants={textVariants} className="text-[#FFDA66]">
            {lastWord}
          </motion.span>
        )}
      </>
    );
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Small Heading Column */}
      {smallHeading && (
        <div className="sm:basis-[25%]">
          <motion.h3
            className="text-[19px] sm:text-[33px] mb-5 md:text-[23px] lg:text-[33px] font-bold"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {renderSmallHeading(smallHeading)}
          </motion.h3>
        </div>
      )}

      {/* Gap Column */}
      <div className="hidden sm:block sm:basis-[16.6667%]" />

      {/* Content Column: bigHeading, image, paragraph, button */}
      <motion.div
        className="sm:basis-[58.3333%] flex flex-col gap-8"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Big Heading */}
        {bigHeading && (
          <motion.h2
            className="text-[28px] sm:text-[48px] md:text-[33px] lg:text-[48px] font-semibold"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            {splitTextIntoWords(bigHeading)}
          </motion.h2>
        )}

        {/* Image (below the big heading) */}
        {image && (
          <motion.div variants={imageVariants} className="relative w-full">
            <Image
              src={image}
              alt="Investment section image"
              width={672}
              height={378}
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, 58vw"
            />
          </motion.div>
        )}

        {/* Paragraph */}
        {paragraph && (
          <motion.div
            className="text-[13px] sm:text-[19px] md:text-[16px] lg:text-[19px]"
            variants={textVariants}
          >
            <TinaMarkdown content={paragraph} />
          </motion.div>
        )}

        {/* Button */}
        {buttonText && buttonUrl && (
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', stiffness: 100, damping: 10 },
              },
            }}
          >
            <Button href={buttonUrl} className="text-center">
              {buttonText}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default InvestmentSection;