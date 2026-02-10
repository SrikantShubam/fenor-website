// import React from 'react';
// import { TinaMarkdown } from 'tinacms/dist/rich-text';
// import Image from 'next/image';

// const CardGroup = ({ cards }) => {
//   if (!cards || cards.length === 0) return null;

//   return (
//     <div
//       className="grid grid-cols-1 sm:grid-cols-2 gap-5"
//       style={{
//         gridTemplateAreas: `
//           "card1 ."
//           "card2 card3"
//         `,
//       }}
//     >
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className="bg-[#000B18] text-white border-[3px] border-[#FFD550] rounded-[20px] p-[30px_20px]"
//           style={{ gridArea: `card${index + 1}` }}
//         >
//           {card.icon && (
//             <Image src={card.icon} alt={card.header || 'Icon'} width={85} height={85} className="mb-4" />
//           )}
//           {card.header && <h3 className="text-[23px] font-medium mb-2">{card.header}</h3>}
//           {card.text && <div className="text-[19px] font-normal"><TinaMarkdown content={card.text} /></div>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardGroup;


// import React from 'react';
// import { TinaMarkdown } from 'tinacms/dist/rich-text';
// import Image from 'next/image';

// const CardGroup = ({ cards }) => {
//   if (!cards || cards.length === 0) return null;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//       {cards.map((card, index) => (
//         <React.Fragment key={index}>
//           <div className="bg-[#000B18] text-white border-[3px] border-[#FFD550] rounded-[20px] py-[17px] px-[10px] sm:py-[30px] sm:px-[20px]">
//             {card.icon && (
//               <Image
//                 src={card.icon}
//                 alt={card.header || 'Icon'}
//                 width={85}
//                 height={85}
//                 className="w-[49px] h-[49px] sm:w-[85px] sm:h-[85px] mb-4"
//                 sizes="(max-width: 640px) 49px, 85px"
//               />
//             )}
//             {card.header && <h3 className="text-[19px] sm:text-[23px] font-medium mb-2">{card.header}</h3>}
//             {card.text && <div className="text-[13px] sm:text-[19px] font-normal"><TinaMarkdown content={card.text} /></div>}
//           </div>
//           {index === 0 && <div className="hidden sm:block"></div>}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default CardGroup;









// import React from 'react';
// import { TinaMarkdown } from 'tinacms/dist/rich-text';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// // Define animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const CardGroup = ({ cards }) => {
//   if (!cards || cards.length === 0) return null;

//   return (
//     <motion.div
//       className="grid grid-cols-1 sm:grid-cols-2 gap-5"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {cards.map((card, index) => (
//         <React.Fragment key={index}>
//           <motion.div
//             className="bg-[#000B18] text-white border-[3px] border-[#FFD550] rounded-[20px] py-[17px] px-[10px] sm:py-[30px] sm:px-[20px]"
//             variants={cardVariants}
//           >
//             {card.icon && (
//               <Image
//                 src={card.icon}
//                 alt={card.header || 'Icon'}
//                 width={85}
//                 height={85}
//                 className="w-[49px] h-[49px] sm:w-[85px] sm:h-[85px] mb-4"
//                 sizes="(max-width: 640px) 49px, 85px"
//               />
//             )}
//             {card.header && <h3 className="text-[19px] sm:text-[23px] font-medium mb-2">{card.header}</h3>}
//             {card.text && <div className="text-[13px] sm:text-[19px] font-normal"><TinaMarkdown content={card.text} /></div>}
//           </motion.div>
//           {index === 0 && <div className="hidden sm:block"></div>}
//         </React.Fragment>
//       ))}
//     </motion.div>
//   );
// };

// export default CardGroup;






















// import React from 'react';
// import { TinaMarkdown } from 'tinacms/dist/rich-text';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// // Define animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: 'easeOut',
//     },
//   },
// };

// const CardGroup = ({ cards }) => {
//   if (!cards || cards.length === 0) return null;

//   return (
//     <motion.div
//       className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[19px]"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {cards.map((card, index) => (
//         <React.Fragment key={index}>
//           <motion.div
//             className="
//               bg-[#000B18] text-white 
//               border-[3px] border-[#FFD550] 
//               rounded-[20px] 
//               py-[17px] px-[10px] 
//               sm:py-[30px] sm:px-[20px] 
//               md:py-[25px] md:px-[20px] 
//               lg:py-[50px] lg:px-[24px]
//               flex flex-col space-y-5 md:space-y-[19px]
//             "
//             variants={cardVariants}
//           >
//             {card.icon && (
//               <Image
//                 src={card.icon}
//                 alt={card.header || 'Icon'}
//                 width={85}
//                 height={85}
//                 className="
//                   w-[49px] h-[49px] 
//                   sm:w-[85px] sm:h-[85px] 
//                   md:w-[50px] md:h-[50px] 
//                   lg:w-[60px] lg:h-[60px]
//                   mb-4
//                 "
//                 sizes="(max-width: 640px) 49px, (max-width: 768px) 85px, (max-width: 1024px) 50px, 60px"
//               />
//             )}
//             {card.header && (
//               <h3
//                 className="
//                   text-[19px] sm:text-[23px] 
//                   md:text-[19px] 
//                   lg:text-[24px]
//                   font-medium mb-2
//                 "
//               >
//                 {card.header}
//               </h3>
//             )}
//             {card.text && (
//               <div
//                 className="
//                   text-[13px] sm:text-[19px] 
//                   md:text-[13px] 
//                   lg:text-[16px]
//                   font-normal
//                 "
//               >
//                 <TinaMarkdown content={card.text} />
//               </div>
//             )}
//           </motion.div>
//           {index === 0 && <div className="hidden sm:block md:hidden lg:block"></div>}
//         </React.Fragment>
//       ))}
//     </motion.div>
//   );
// };

// export default CardGroup;








import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const CardGroup = ({ cards }) => {
  if (!cards || cards.length === 0) return null;

  return (
    <motion.div
      // Original layout kept for quick rollback:
      // className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[19px]"
      // Option 3 active: less rectangular + fatter cards on desktop
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {cards.map((card, index) => (
        <React.Fragment key={index}>
          <motion.div
            // Original slim card classes kept for quick rollback:
            // className="
            //   bg-[#000B18] text-white
            //   border-2 border-[#FFD550]
            //   rounded-[20px]
            //   py-[14px] px-[10px]
            //   sm:py-[24px] sm:px-[18px]
            //   md:py-[20px] md:px-[18px]
            //   lg:py-[36px] lg:px-[20px]
            //   flex flex-col space-y-4 md:space-y-4
            // "
            className="
              bg-[#000B18] text-white 
              border-[1.5px] border-[#FFD550] 
              rounded-[22px]
              w-full min-h-[340px]
              px-7 py-8
              flex flex-col space-y-5 md:space-y-[19px]
            "
            variants={cardVariants}
          >
            {card.icon && (
              <Image
                src={card.icon}
                alt={card.header || 'Icon'}
                width={85}
                height={85}
                className="
                  w-[56px] h-[56px] 
                  sm:w-[88px] sm:h-[88px] 
                  md:w-[58px] md:h-[58px] 
                  lg:w-[64px] lg:h-[64px]
                  mb-4
                "
                sizes="(max-width: 640px) 56px, (max-width: 768px) 88px, (max-width: 1024px) 58px, 64px"
              />
            )}
            {card.header && (
              <h3
                className="
                  text-[19px] sm:text-[23px] 
                  md:text-[19px] 
                  lg:text-[24px]
                  font-medium mb-2 max-w-[34ch]
                "
              >
                {card.header}
              </h3>
            )}
            {card.text && (
              <div
                className="
                  text-[13px] sm:text-[19px] 
                  md:text-[13px] 
                  lg:text-[16px]
                  font-normal max-w-[34ch] leading-[1.55]
                "
              >
                <TinaMarkdown content={card.text} />
              </div>
            )}
          </motion.div>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default CardGroup;
