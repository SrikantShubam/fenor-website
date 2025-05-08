import React from 'react';
import Image from 'next/image';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { motion, Variants } from 'framer-motion';

interface TextImageCenterProps {
  image?: string;
  bigHeading?: string;
  paragraph?: TinaMarkdownContent;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.2 } },
};

const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const headingVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const TextImageCenter: React.FC<TextImageCenterProps> = ({ image, bigHeading, paragraph }) => {
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
      animate="visible"
    >
      {image && (
        <motion.div
          className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
          variants={imageVariants}
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
        >
          {renderHeading(bigHeading)}
        </motion.h2>
      )}
      {paragraph && (
        <motion.div
          className="text-[13px] md:text-[16px] lg:text-[19px] text-gray-300 max-w-2xl"
          variants={paragraphVariants}
        >
          <TinaMarkdown content={paragraph} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default TextImageCenter;
