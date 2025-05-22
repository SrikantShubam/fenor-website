// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import Image from 'next/image'; // Import Image from next/image
// // import Button from '../Button'; // Adjust the path based on your project structure

// // interface TextBoxWithListProps {
// //   smallHeading?: string;
// //   bigHeading?: string;
// //   image?: { src: string; alt: string };
// //   listItems: { text: string; icon: string; button?: { text: string; url: string } }[];
// //   button?: { text: string; url: string };
// // }

// // const TextBoxWithList: React.FC<TextBoxWithListProps> = ({
// //   smallHeading,
// //   bigHeading,
// //   image,
// //   listItems,
// //   button,
// // }) => {
// //   // Animation variants for the container
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.2,
// //       },
// //     },
// //   };

// //   // Base animation variants for individual elements
// //   const textVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
// //   };

// //   // Animation variants for the button
// //   const buttonVariants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       transition: { type: 'spring', stiffness: 100, damping: 10 },
// //     },
// //   };

// //   // Function to split text into words and wrap in motion.spans
// //   const splitTextIntoWords = (text: string) => {
// //     return text.split(' ').map((word, index) => (
// //       <motion.span
// //         key={index}
// //         variants={textVariants}
// //         style={{ display: 'inline-block', marginRight: '0.25em' }}
// //       >
// //         {word}
// //       </motion.span>
// //     ));
// //   };

// //   // Function to render small heading with animated parts
// //   const renderSmallHeading = (text: string) => {
// //     const words = text.split(' ');
// //     const lastWord = words.pop();
// //     const precedingWords = words.join(' ');
// //     return (
// //       <>
// //         {precedingWords && (
// //           <motion.span variants={textVariants} className="text-white">
// //             {precedingWords}{' '}
// //           </motion.span>
// //         )}
// //         {lastWord && (
// //           <motion.span variants={textVariants} className="text-[#FFDA66]">
// //             {lastWord}
// //           </motion.span>
// //         )}
// //       </>
// //     );
// //   };

// //   return (
// //     <motion.div
// //       className="flex flex-col sm:flex-row"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true }}
// //       variants={containerVariants}
// //     >
// //       {/* Small Heading Column */}
// //       {smallHeading && (
// //         <div className="sm:basis-[25%]">
// //           <motion.h3
// //             className="text-[19px] sm:text-[33px] mb-5 md:text-[23px] lg:text-[33px] font-bold"
// //             variants={{
// //               hidden: { opacity: 0 },
// //               visible: {
// //                 opacity: 1,
// //                 transition: { staggerChildren: 0.1 },
// //               },
// //             }}
// //           >
// //             {renderSmallHeading(smallHeading)}
// //           </motion.h3>
// //         </div>
// //       )}

// //       {/* Gap Column */}
// //       <div className="hidden sm:block sm:basis-[16.6667%]" />

// //       {/* Content Column */}
// //       <motion.div
// //         className="sm:basis-[58.3333%]"
// //         variants={{
// //           hidden: { opacity: 0 },
// //           visible: {
// //             opacity: 1,
// //             transition: { staggerChildren: 0.2 },
// //           },
// //         }}
// //       >
// //         <div className="flex flex-col space-y-[42px] md:space-y-[72px]">
// //           {bigHeading && (
// //             <motion.h2
// //               className="text-[28px] sm:text-[48px] md:text-[33px] lg:text-[48px] font-semibold"
// //               variants={{
// //                 hidden: { opacity: 0 },
// //                 visible: {
// //                   opacity: 1,
// //                   transition: { staggerChildren: 0.05 },
// //                 },
// //               }}
// //             >
// //               {splitTextIntoWords(bigHeading)}
// //             </motion.h2>
// //           )}

// //           <div className="flex flex-col md:flex-row md:space-x-8">
// //             <motion.ul
// //               className="space-y-4 flex-1"
// //               variants={{
// //                 hidden: { opacity: 0 },
// //                 visible: {
// //                   opacity: 1,
// //                   transition: { staggerChildren: 0.1 },
// //                 },
// //               }}
// //             >
// //               {listItems.map((item, index) => (
// //                 <motion.li
// //                   key={index}
// //                   className="flex items-center space-x-4"
// //                   variants={textVariants}
// //                 >
// //                   <Image src={item.icon} alt="icon" width={24} height={24} />
// //                   <span className="text-[13px] md:text-[16px] lg:text-[19px]">{item.text}</span>
// //                   {item.button && (
// //                     <Button href={item.button.url} className="ml-4">
// //                       {item.button.text}
// //                     </Button>
// //                   )}
// //                 </motion.li>
// //               ))}
// //             </motion.ul>

// //             {image && (
// //               <motion.div
// //                 className="mt-4 md:mt-0 md:ml-8"
// //                 variants={textVariants}
// //               >
// //                 <Image src={image.src} alt={image.alt} width={600} height={400} className="w-full h-auto" />
// //               </motion.div>
// //             )}
// //           </div>

// //           {button && (
// //             <motion.div variants={buttonVariants}>
// //               <Button href={button.url} className="text-center">
// //                 {button.text}
// //               </Button>
// //             </motion.div>
// //           )}
// //         </div>
// //       </motion.div>
// //     </motion.div>
// //   );
// // };

// // export default TextBoxWithList;










// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Button from '../Button';

// interface TextBoxWithListProps {
//   smallHeading?: string;
//   bigHeading?: string;
//   image?: { src: string; alt: string };
//   listItems: { text: string; icon: string; button?: { text: string; url: string } }[];
//   button?: { text: string; url: string };
// }

// const TextBoxWithList: React.FC<TextBoxWithListProps> = ({
//   smallHeading,
//   bigHeading,
//   image,
//   listItems,
//   button,
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

//   // Animation variants for the button
//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { type: 'spring', stiffness: 100, damping: 10 },
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

//       {/* Content Column */}
//       <motion.div
//         className="sm:basis-[58.3333%]"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.2 },
//           },
//         }}
//       >
//         <div className="flex flex-col space-y-[42px] md:space-y-[72px]">
//           {bigHeading && (
//             <motion.h2
//               className="text-[28px] sm:text-[48px] md:text-[33px] lg:text-[48px] font-semibold"
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: {
//                   opacity: 1,
//                   transition: { staggerChildren: 0.05 },
//                 },
//               }}
//             >
//               {splitTextIntoWords(bigHeading)}
//             </motion.h2>
//           )}

//           {image && (
//             <motion.div variants={textVariants}>
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={600}
//                 height={400}
//                 className="w-full h-auto md:w-[300px]"
//               />
//             </motion.div>
//           )}

//           <motion.ul
//             className="space-y-4"
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: { staggerChildren: 0.1 },
//               },
//             }}
//           >
//             {listItems.map((item, index) => (
//               <motion.li
//                 key={index}
//                 className="flex items-center space-x-4"
//                 variants={textVariants}
//               >
//                 <Image src={item.icon} alt="icon" width={24} height={24} />
//                 <span className="text-[13px] my-6 md:text-[16px] lg:text-[19px]">{item.text}</span>
//                 {item.button && (
//                   <Button href={item.button.url} className="ml-4">
//                     {item.button.text}
//                   </Button>
//                 )}
//               </motion.li>
//             ))}
//           </motion.ul>

//           {button && (
//             <motion.div variants={buttonVariants}>
//               <Button href={button.url} className="text-center">
//                 {button.text}
//               </Button>
//             </motion.div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default TextBoxWithList;










import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../Button';

interface TextBoxWithListProps {
  smallHeading?: string;
  bigHeading?: string;
  image?: { src: string; alt: string };
  listItems: { text: string; icon: string; button?: { text: string; url: string } }[];
  button?: { text: string; url: string };
}

const TextBoxWithList: React.FC<TextBoxWithListProps> = ({
  smallHeading,
  bigHeading,
  image,
  listItems,
  button,
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

  // Animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
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

          {image && (
            <motion.div variants={textVariants}>
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto md:w-[300px]"
              />
            </motion.div>
          )}

          <ul className="space-y-4">
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                <Image src={item.icon} alt="icon" width={24} height={24} />
                <span className="text-[13px] my-6 md:text-[16px] lg:text-[19px]">{item.text}</span>
                {item.button && (
                  <Button href={item.button.url} className="ml-4">
                    {item.button.text}
                  </Button>
                )}
              </motion.li>
            ))}
          </ul>

          {button && (
            <motion.div variants={buttonVariants}>
              <Button href={button.url} className="text-center">
                {button.text}
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TextBoxWithList;