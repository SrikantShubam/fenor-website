// import React from 'react';
// import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import { motion } from 'framer-motion';
// import Button from '../Button'; // Adjust the path based on your project structure

// interface TextBoxWithButtonProps {
//   smallHeading?: string;
//   bigHeading?: string;
//   paragraph?: TinaMarkdownContent;
//   buttonText?: string;
//   buttonUrl?: string;
// }

// const TextBoxWithButton: React.FC<TextBoxWithButtonProps> = ({
//   smallHeading,
//   bigHeading,
//   paragraph,
//   buttonText,
//   buttonUrl,
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

//   // Animation variants for individual elements
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   // Animation variants for content container
//   const contentVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   // Function to render small heading with last word in different color
//   const renderSmallHeading = (text: string) => {
//     const words = text.split(' ');
//     const lastWord = words.pop();
//     const precedingWords = words.join(' ');
//     return (
//       <span>
//         {precedingWords && <span className="text-white">{precedingWords} </span>}
//         {lastWord && <span className="text-[#FFDA66]">{lastWord}</span>}
//       </span>
//     );
//   };

//   return (
//     <motion.div
//       className="flex flex-col sm:flex-row"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       {/* Small Heading Column */}
//       {smallHeading && (
//         <motion.div
//           className="sm:basis-[25%]" // 3fr out of 12fr = 25%
//           variants={textVariants}
//         >
//           <h3 className="text-[19px] sm:text-[33px] font-bold">
//             {renderSmallHeading(smallHeading)}
//           </h3>
//         </motion.div>
//       )}

//       {/* Gap Column */}
//       <div className="hidden sm:block sm:basis-[16.6667%]" /> {/* 2fr out of 12fr ≈ 16.6667% */}

//       {/* Content Column */}
//       <motion.div
//         className="sm:basis-[58.3333%]" // 7fr out of 12fr ≈ 58.3333%
//         variants={contentVariants}
//       >
//         <div className="flex flex-col space-y-[42px] md:space-y-[72px]">
//           {bigHeading && (
//             <motion.h2
//               className="text-[28px] sm:text-[48px] font-semibold"
//               variants={textVariants}
//             >
//               {bigHeading}
//             </motion.h2>
//           )}

//           {paragraph && (
//             <motion.div
//               className="text-[13px] sm:text-[19px]"
//               variants={textVariants}
//             >
//               <TinaMarkdown content={paragraph} />
//             </motion.div>
//           )}

//           {buttonText && buttonUrl && (
//             <motion.div
//               variants={textVariants}
             
//             >
//               <Button href={buttonUrl} className=" text-center">
//                 {buttonText}
//               </Button>
//             </motion.div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default TextBoxWithButton;















import React from 'react';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { motion } from 'framer-motion';
import Button from '../Button'; // Adjust the path based on your project structure

interface TextBoxWithButtonProps {
  smallHeading?: string;
  bigHeading?: string;
  paragraph?: TinaMarkdownContent;
  buttonText?: string;
  buttonUrl?: string;
}

const TextBoxWithButton: React.FC<TextBoxWithButtonProps> = ({
  smallHeading,
  bigHeading,
  paragraph,
  buttonText,
  buttonUrl,
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

  // Animation variants for individual elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for content container
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Function to render small heading with last word in different color
  const renderSmallHeading = (text: string) => {
    const words = text.split(' ');
    const lastWord = words.pop();
    const precedingWords = words.join(' ');
    return (
      <span>
        {precedingWords && <span className="text-white">{precedingWords} </span>}
        {lastWord && <span className="text-[#FFDA66]">{lastWord}</span>}
      </span>
    );
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Small Heading Column */}
      {smallHeading && (
        <motion.div
          className="sm:basis-[25%]" // 3fr out of 12fr = 25%
          variants={textVariants}
        >
          <h3 className="text-[19px] sm:text-[33px] mb-5 md:text-[23px] lg:text-[33px] font-bold">
            {renderSmallHeading(smallHeading)}
          </h3>
        </motion.div>
      )}

      {/* Gap Column */}
      <div className="hidden sm:block sm:basis-[16.6667%]" /> {/* 2fr out of 12fr ≈ 16.6667% */}

      {/* Content Column */}
      <motion.div
        className="sm:basis-[58.3333%]" // 7fr out of 12fr ≈ 58.3333%
        variants={contentVariants}
      >
        <div className="flex flex-col space-y-[42px] md:space-y-[72px]">
          {bigHeading && (
            <motion.h2
              className="text-[28px] sm:text-[48px] md:text-[33px]  lg:text-[48px] font-semibold"
              variants={textVariants}
            >
              {bigHeading}
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

          {buttonText && buttonUrl && (
            <motion.div
              variants={textVariants}
            >
              <Button href={buttonUrl} className="text-center">
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TextBoxWithButton;