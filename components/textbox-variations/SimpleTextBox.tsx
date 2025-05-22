import React from 'react';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { motion } from 'framer-motion';

interface SimpleTextBoxProps {
  smallHeading?: string;
  bigHeading?: string;
  paragraph?: TinaMarkdownContent;
}

const SimpleTextBox: React.FC<SimpleTextBoxProps> = ({
  smallHeading,
  bigHeading,
  paragraph,
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

      {/* Content Column */}
      <motion.div
        className="sm:basis-[58.3333%]"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <div className="flex flex-col space-y-[42px] md:space-y-[72px]">
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

          {paragraph && (
            <motion.div
              className="text-[13px] sm:text-[19px] md:text-[16px] lg:text-[19px]"
              variants={textVariants}
            >
              <TinaMarkdown content={paragraph} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SimpleTextBox;