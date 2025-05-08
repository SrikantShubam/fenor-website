import React from 'react';
import Image from 'next/image';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { motion } from 'framer-motion';

interface TextBoxWithImage {
  smallHeading?: string;
  bigHeading?: string;
  paragraph?: TinaMarkdownContent;
  image?: string;
}

const TextBoxWithImageAndButton: React.FC<TextBoxWithImage> = ({
  smallHeading,
  bigHeading,
  paragraph,
  image,
}) => {
  // Animation variants for text and button
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  };

  // Split smallHeading into words and handle last word coloring
  const renderSmallHeading = (text: string) => {
    const words = text.split(' ');
    const lastWord = words.pop();
    const precedingWords = words.join(' ');

    return (
      <span>
        {precedingWords && (
          <span className="text-white">{precedingWords} </span>
        )}
        {lastWord && (
          <span className="text-[#FFDA66]">{lastWord}</span>
        )}
      </span>
    );
  };

  return (
    <div
      className="
        flex 
        flex-col 
        sm:flex-row 
        sm:justify-between
        sm:items-center
      "
    >
      {/* TEXT + BUTTON COLUMN */}
      <motion.div
        className="
          flex 
          flex-col 
          space-y-[42px]      /* 42px gap on mobile */
          md:space-y-[72px]   /* 72px gap from md-up */
          w-full
          sm:basis-[58.3333%]
        "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Group smallHeading and bigHeading together */}
        {(smallHeading || bigHeading) && (
          <div className="space-y-[10px] md:space-y-[30px]">
            {smallHeading && (
              <motion.h3
                className="text-[19px] sm:text-[33px] font-bold"
                variants={textVariants}
              >
                {renderSmallHeading(smallHeading)}
              </motion.h3>
            )}
            {bigHeading && (
              <motion.h2
                className="text-[28px] sm:text-[48px] font-semibold"
                variants={textVariants}
              >
                {bigHeading}
              </motion.h2>
            )}
          </div>
        )}

        {paragraph && (
          <motion.div
            className="text-[13px] sm:text-[19px]"
            variants={textVariants}
          >
            <TinaMarkdown content={paragraph} />
          </motion.div>
        )}
      </motion.div>

      {/* IMAGE COLUMN */}
      {image && (
        <motion.div
          className="
            hidden 
            sm:flex 
            sm:basis-[41.6667%]
            justify-end
          "
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src={image}
            alt={bigHeading || smallHeading || 'Image'}
            width={334}
            height={248}
            className="object-cover"
          />
        </motion.div>
      )}
    </div>
  );
};

export default TextBoxWithImageAndButton;