// import React from 'react';
// import Image from 'next/image';
// import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import { motion, Variants } from 'framer-motion';

// interface TextImageCenterProps {
//   image?: string;
//   bigHeading?: string;
//   paragraph?: TinaMarkdownContent;
// }

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { when: 'beforeChildren', staggerChildren: 0.2 },
//   },
// };

// const imageVariants: Variants = {
//   hidden: { scale: 0.95, opacity: 0, filter: 'blur(5px)' },
//   visible: { scale: 1, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
// };

// const headingVariants: Variants = {
//   hidden: { y: 10, opacity: 0, filter: 'blur(10px)' },
//   visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
// };

// const paragraphVariants: Variants = {
//   hidden: { opacity: 0, filter: 'blur(10px)' },
//   visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 } },
// };

// const TextImageCenter: React.FC<TextImageCenterProps> = ({ image, bigHeading, paragraph }) => {
//   const renderHeading = (text: string) => {
//     const words = text.split(' ');
//     const lastWord = words.pop();
//     const precedingWords = words.join(' ');

//     return (
//       <>
//         {precedingWords && <span className="text-white">{precedingWords} </span>}
//         {lastWord && <span className="text-[#FFDA66]">{lastWord}</span>}
//       </>
//     );
//   };

//   return (
//     <motion.div
//       className="flex flex-col items-center text-center space-y-4 md:space-y-6"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {image && (
//         <motion.div
//           className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
//           variants={imageVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <Image
//             src={image}
//             alt={bigHeading || 'Centered Image'}
//             fill
//             className="object-cover rounded-lg"
//           />
//         </motion.div>
//       )}
//       {bigHeading && (
//         <motion.h2
//           className="text-[28px] md:text-[33px] lg:text-[48px] font-bold"
//           variants={headingVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           {renderHeading(bigHeading)}
//         </motion.h2>
//       )}
//       {paragraph && (
//         <motion.div
//           className="text-[13px] md:text-[16px] lg:text-[19px] text-gray-300 max-w-2xl"
//           variants={paragraphVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <TinaMarkdown content={paragraph} />
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default TextImageCenter;




















import React from 'react';
import Image from 'next/image';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { motion, Variants } from 'framer-motion';
import Button from '../Button';

interface TextImageCenterProps {
  image?: string;
  bigHeading?: string;
  paragraph?: TinaMarkdownContent;
  buttonText?: string;
  buttonUrl?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.2 },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0, filter: 'blur(5px)' },
  visible: { scale: 1, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const headingVariants: Variants = {
  hidden: { y: 10, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 } },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.4 },
  },
};

const TextImageCenter: React.FC<TextImageCenterProps> = ({ image, bigHeading, paragraph, buttonText, buttonUrl }) => {
  const renderHeading = (text: string) => {
    const words = text.split(' ');
    const lastWord = words.pop();
    const precedingWords = words.join(' ');

    return (
      <>
        {precedingWords && <span className="text-white">{precedingWords} </span>}
        {lastWord && <span className="text-[#FFDA66]">{lastWord}</span>}
      </>
    );
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-4 md:space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {image && (
        <motion.div
          className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src={image}
            alt={bigHeading || 'Centered Image'}
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      )}
      {bigHeading && (
        <motion.h2
          className="text-[28px] md:text-[33px] lg:text-[48px] font-bold"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {renderHeading(bigHeading)}
        </motion.h2>
      )}
      {paragraph && (
        <motion.div
          className="text-[13px] md:text-[16px] lg:text-[19px] text-gray-300 max-w-2xl"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <TinaMarkdown content={paragraph} />
        </motion.div>
      )}
      {buttonText && buttonUrl && (
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button href={buttonUrl} className="mt-4">
            {buttonText}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TextImageCenter;