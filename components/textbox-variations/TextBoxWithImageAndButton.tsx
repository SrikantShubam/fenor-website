import React from 'react';
import Image from 'next/image';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { motion } from 'framer-motion';
import Button from '../Button'; // Adjust the path based on your project structure

interface TextBoxWithImageAndButtonProps {
  smallHeading?: string;
  bigHeading?: string;
  paragraph?: TinaMarkdownContent;
  image?: string;
  buttonText?: string;
  buttonUrl?: string;
}

const TextBoxWithImageAndButton: React.FC<TextBoxWithImageAndButtonProps> = ({
  smallHeading,
  bigHeading,
  paragraph,
  image,
  buttonText,
  buttonUrl,
}) => {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 },
    }),
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.6 },
    },
  };

  // Split smallHeading into words and handle last word coloring
  const renderSmallHeading = (text: string) => {
    const words = text.split(' ');
    const lastWord = words.pop(); // Remove and store the last word
    const precedingWords = words.join(' '); // Join remaining words

    return (
      <span>
        {precedingWords && (
          <span className="text-white">{precedingWords} </span> // Default color (white) for preceding words
        )}
        {lastWord && (
          <span className="text-[#FFDA66]">{lastWord}</span> // #FFDA66 for last word
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
        sm:justify-between      /* push text to left and image to right */
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
          sm:basis-[58.3333%] /* 7fr of 12fr */
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {smallHeading && (
          <motion.h3
            className="text-[19px] sm:text-[33px] font-bold"
            variants={textVariants}
            custom={0}
          >
            {renderSmallHeading(smallHeading)}
          </motion.h3>
        )}

        {bigHeading && (
          <motion.h2
            className="text-[28px] sm:text-[48px] font-semibold"
            variants={textVariants}
            custom={1}
          >
            {bigHeading}
          </motion.h2>
        )}

        {paragraph && (
          <motion.div
            className="text-[13px] sm:text-[19px]"
            variants={textVariants}
            custom={2}
          >
            <TinaMarkdown content={paragraph} />
          </motion.div>
        )}

        {buttonText && buttonUrl && (
          <motion.div variants={textVariants} custom={3}>
            <Button href={buttonUrl} className="w-[160px] text-center">
              {buttonText}
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* IMAGE COLUMN */}
      {image && (
        <motion.div
          className="
            hidden 
            sm:flex 
            sm:basis-[41.6667%]  /* 5fr of 12fr */
            justify-end         /* push the img to the right edge */
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
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