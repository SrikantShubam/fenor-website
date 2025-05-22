// import React from 'react';
// import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import { motion } from 'framer-motion';
// import Button from './Button'; // Adjust the path as needed

// interface TextWithImageBGProps {
//   smallHeading?: string;
//   bigHeading?: string;
//   paragraph?: TinaMarkdownContent;
//   buttonText?: string;
//   buttonUrl?: string;
//   backgroundImage?: string;
// }

// const TextWithImageBG: React.FC<TextWithImageBGProps> = ({
//   smallHeading,
//   bigHeading,
//   paragraph,
//   buttonText,
//   buttonUrl,
//   backgroundImage,
// }) => {
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   };


//   return (
//     <div
//       style={{
//         backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '500px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '20px',
//         borderRadius:'20px'
//       }}
//     >
//       <motion.div
//         className="flex flex-col space-y-[40px] md:space-y-[30px] px-[1px] md:px-[40px] pr-[5px] md:pr-[320px]"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               staggerChildren: 0.2,
//             },
//           },
//         }}
//       >
//         {smallHeading && (
//           <motion.h3
//             className="text-[19px] sm:text-[33px] font-bold text-white"
//             variants={textVariants}
//           >
//             {smallHeading}
//           </motion.h3>
//         )}

//         {bigHeading && (
//           <motion.h2
//             className="text-[28px] sm:text-[48px] font-semibold text-white"
//             variants={textVariants}
//           >
//             {bigHeading}
//           </motion.h2>
//         )}

//         {paragraph && (
//           <motion.div
//             className="text-[13px] sm:text-[19px] text-white"
//             variants={textVariants}
//           >
//             <TinaMarkdown content={paragraph} />
//           </motion.div>
//         )}

//         {buttonText && buttonUrl && (
//           <motion.div >
//             <Button href={buttonUrl} className="text-center">
//               {buttonText}
//             </Button>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default TextWithImageBG;














// import React from 'react';
// import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import { motion } from 'framer-motion';
// import Button from './Button';

// interface TextWithImageBGProps {
//   smallHeading?: string;
//   bigHeading?: string;
//   paragraph?: TinaMarkdownContent;
//   buttonText?: string;
//   buttonUrl?: string;
//   backgroundImage?: string;
// }

// const TextWithImageBG: React.FC<TextWithImageBGProps> = ({
//   smallHeading,
//   bigHeading,
//   paragraph,
//   buttonText,
//   buttonUrl,
//   backgroundImage,
// }) => {
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   };

  
//   return (
//     <div
//       className="flex items-center justify-center p-5 py-[30px] md:py-[70px] bg-cover bg-center rounded-[20px]"
//       style={{
//         backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
//       }}
//     >
//       <motion.div
//         className="flex flex-col  space-y-[20px] md:space-y-[60px] md:px-[20px] px-[5px] text-white"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               staggerChildren: 0.2,
//             },
//           },
//         }}
//       >
//         {smallHeading && (
//           <motion.h3
//             className="text-[19px] sm:text-[28px] md:text-[33px] font-bold"
//             variants={textVariants}
//           >
//             {smallHeading}
//           </motion.h3>
//         )}

//         {bigHeading && (
//           <motion.h2
//             className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold"
//             variants={textVariants}
//           >
//             {bigHeading}
//           </motion.h2>
//         )}

//         {paragraph && (
//           <motion.div
//             className="text-[13px] sm:text-[16px] md:text-[19px]"
//             variants={textVariants}
//           >
//             <TinaMarkdown content={paragraph} />
//           </motion.div>
//         )}

//         {buttonText && buttonUrl && (
//           <motion.div variants={textVariants} >
//             <Button href={buttonUrl} className=" text-center">
//               {buttonText}
//             </Button>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default TextWithImageBG;




















// import React from 'react';
// import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
// import { motion } from 'framer-motion';
// import Button from './Button';

// interface TextWithImageBGProps {
//   smallHeading?: string;
//   bigHeading?: string;
//   paragraph?: TinaMarkdownContent;
//   buttonText?: string;
//   buttonUrl?: string;
//   backgroundImage?: string;
// }

// const TextWithImageBG: React.FC<TextWithImageBGProps> = ({
//   smallHeading,
//   bigHeading,
//   paragraph,
//   buttonText,
//   buttonUrl,
//   backgroundImage,
// }) => {
//   const textVariants = {
//     hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
//     visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   return (
//     <div
//       className="flex items-center justify-center p-5 py-[30px] md:py-[70px] bg-cover bg-center rounded-[20px]"
//       style={{
//         backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
//       }}
//     >
//       <motion.div
//         className="flex flex-col space-y-[20px] md:space-y-[60px] md:px-[20px] px-[5px] text-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               staggerChildren: 0.2,
//             },
//           },
//         }}
//       >
//         {smallHeading && (
//           <motion.h3
//             className="text-[19px] sm:text-[28px] md:text-[33px] font-bold"
//             variants={textVariants}
//           >
//             {smallHeading}
//           </motion.h3>
//         )}

//         {bigHeading && (
//           <motion.h2
//             className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold"
//             variants={textVariants}
//           >
//             {bigHeading}
//           </motion.h2>
//         )}

//         {paragraph && (
//           <motion.div
//             className="text-[13px] sm:text-[16px] md:text-[19px]"
//             variants={textVariants}
//           >
//             <TinaMarkdown content={paragraph} />
//           </motion.div>
//         )}

//         {buttonText && buttonUrl && (
//           <motion.div
//             variants={textVariants}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button href={buttonUrl} className="text-center">
//               {buttonText}
//             </Button>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default TextWithImageBG;




import React from 'react';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

interface TextWithImageBGProps {
  smallHeading?: string;
  bigHeading?: string;
  paragraph?: TinaMarkdownContent;
  buttonText?: string;
  buttonUrl?: string;
  backgroundImage?: string;
}

const TextWithImageBG: React.FC<TextWithImageBGProps> = ({
  smallHeading,
  bigHeading,
  paragraph,
  buttonText,
  buttonUrl,
  backgroundImage,
}) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="relative flex items-center justify-center p-5 py-[30px] md:py-[70px] rounded-[20px] overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Background image for section"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={85} // Balance quality and size
          priority={bigHeading === 'Your Gold Investment Ally in Mauritania'} // Priority for above-the-fold "Invest" section
          loading={bigHeading === 'Your Gold Investment Ally in Mauritania' ? undefined : 'lazy'} // Lazy for non-critical sections
        />
      )}
      <div className="absolute inset-0 bg-black/30" /> {/* Optional overlay for text readability */}
      <motion.div
        className="relative flex flex-col space-y-[20px] md:space-y-[60px] md:px-[20px] px-[5px] text-white z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
        {smallHeading && (
          <motion.h3
            className="text-[19px] sm:text-[28px] md:text-[33px] font-bold"
            variants={textVariants}
          >
            {smallHeading}
          </motion.h3>
        )}

        {bigHeading && (
          <motion.h2
            className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold"
            variants={textVariants}
          >
            {bigHeading}
          </motion.h2>
        )}

        {paragraph && (
          <motion.div
            className="text-[13px] sm:text-[16px] md:text-[19px]"
            variants={textVariants}
          >
            <TinaMarkdown content={paragraph} />
          </motion.div>
        )}

        {buttonText && buttonUrl && (
          <motion.div
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button href={buttonUrl} className="text-center">
              {buttonText}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TextWithImageBG;