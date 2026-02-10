// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// // Animation variants for the container
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Animation variants for each card
// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// /**
//  * ImageCardGroup Component
//  * Displays a heading and a dynamic number of image cards in a responsive grid or carousel.
//  * @param {string} heading - The heading text
//  * @param {Array<{image: string, alt: string}>} cards - Array of card objects with image URL and alt text
//  */
// const ImageCardGroup = ({ heading, cards }) => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Detect mobile view
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640); // Mobile breakpoint at 640px
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Automatic carousel looping in mobile view
//   useEffect(() => {
//     if (isMobile && cards.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//       }, 3000); // Switch every 3 seconds
//       return () => clearInterval(interval);
//     }
//   }, [isMobile, cards]);

//   if (!cards || cards.length === 0) return null;

//   return (
//     <div>
//       {/* Heading with responsive font size */}
//       <h2 className="text-[19px] md:text-[33px] text-center md:mx-20 mx-2 font-medium md:mb-[40px] mb-[30px]">
//         {heading}
//       </h2>

//       {isMobile ? (
//         // Carousel for mobile view
//         <div className="relative w-full h-[170px] overflow-hidden">
//           <AnimatePresence initial={false}>
//             <motion.div
//               key={currentIndex}
//               className="absolute inset-0 flex justify-center items-center"
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '-100%' }}
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//             >
//               <div className="bg-[#000B18] border-[3px] border-[#FFD550] rounded-[20px] p-[15px] w-[170px] h-[170px] flex items-center justify-center">
//                 <div className="relative w-[120px] h-[120px]">
//                   <Image
//                     src={cards[currentIndex].image}
//                     alt={cards[currentIndex].alt}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       ) : (
//         // Grid for larger screens
//         <motion.div
//           className="flex flex-col sm:flex-row sm:justify-center gap-[22px] sm:gap-[128px]"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#000B18] border-[3px] border-[#FFD550] rounded-[20px] p-[15px] sm:p-[20px] w-[170px] h-[170px] flex items-center justify-center"
//               variants={cardVariants}
//             >
//               <div className="relative w-[120px] h-[120px]">
//                 <Image
//                   src={card.image}
//                   alt={card.alt}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default ImageCardGroup;




// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// // Animation variants for the container
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Animation variants for each card
// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// // Carousel variants for mobile view
// const carouselVariants = {
//   enter: {
//     x: '100%',
//     opacity: 0,
//   },
//   center: {
//     x: 0,
//     opacity: 1,
//   },
//   exit: {
//     x: '-100%',
//     opacity: 0,
//   },
// };

// /**
//  * ImageCardGroup Component
//  * Displays a heading and a dynamic number of image cards in a responsive grid or carousel.
//  * @param {string} heading - The heading text
//  * @param {Array<{image: string, alt: string}>} cards - Array of card objects with image URL and alt text
//  */
// const ImageCardGroup = ({ heading, cards }) => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Detect mobile view
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640); // Mobile breakpoint at 640px
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Automatic carousel looping in mobile view
//   useEffect(() => {
//     if (isMobile && cards.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//       }, 3000); // Switch every 3 seconds
//       return () => clearInterval(interval);
//     }
//   }, [isMobile, cards]);

//   if (!cards || cards.length === 0) return null;

//   return (
//     <div>
//       {/* Heading with responsive font size */}
//       <h2 className="text-[19px] md:text-[33px] text-center md:mx-20 mx-2 font-medium md:mb-[40px] mb-[30px]">
//         {heading}
//       </h2>

//       {isMobile ? (
//         // Carousel for mobile view
//         <div className="relative w-full h-[170px] overflow-hidden">
//           <AnimatePresence initial={false} mode="wait">
//             <motion.div
//               key={currentIndex}
//               className="absolute inset-0 flex justify-center items-center"
//               variants={carouselVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//             >
//               <div className="bg-[#000B18] border-[3px] border-[#FFD550] rounded-[20px] p-[15px] w-[170px] h-[170px] flex items-center justify-center">
//                 <div className="relative w-[120px] h-[120px]">
//                   <Image
//                     src={cards[currentIndex].image}
//                     alt={cards[currentIndex].alt}
//                     fill
//                     sizes="(max-width: 640px) 120px, 120px"
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
          
//           {/* Navigation dots */}
//           {cards.length > 1 && (
//             <div className="absolute -bottom-6 left-0 right-0 flex justify-center space-x-2">
//               {cards.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-2 h-2 rounded-full ${
//                     currentIndex === index ? 'bg-[#FFD550]' : 'bg-gray-400'
//                   }`}
//                   onClick={() => setCurrentIndex(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       ) : (
//         // Grid for larger screens
//         <motion.div
//           className="flex flex-col sm:flex-row sm:justify-center gap-[22px] sm:gap-[128px]"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#000B18] border-[3px] border-[#FFD550] rounded-[20px] p-[15px] sm:p-[20px] w-[170px] h-[170px] flex items-center justify-center"
//               variants={cardVariants}
//             >
//               <div className="relative w-[120px] h-[120px]">
//                 <Image
//                   src={card.image}
//                   alt={card.alt}
//                   fill
//                   sizes="(max-width: 640px) 120px, 120px"
//                   className="object-cover"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default ImageCardGroup;








// import React, { useState, useEffect } from 'react';
// import { motion} from 'framer-motion';
// import Image from 'next/image';

// // Animation variants for the container
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Animation variants for each card
// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// // Carousel variants for mobile view - simplified to avoid image display issues


// /**
//  * ImageCardGroup Component
//  * Displays a heading and a dynamic number of image cards in a responsive grid or carousel.
//  * @param {string} heading - The heading text
//  * @param {Array<{image: string, alt: string}>} cards - Array of card objects with image URL and alt text
//  */
// const ImageCardGroup = ({ heading, cards }) => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isClient, setIsClient] = useState(false);

//   // Detect if we're in client-side rendering
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Detect mobile view
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640); // Mobile breakpoint at 640px
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Automatic carousel looping in mobile view
//   useEffect(() => {
//     if (isMobile && cards.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//       }, 3000); // Switch every 3 seconds
//       return () => clearInterval(interval);
//     }
//   }, [isMobile, cards]);

//   if (!cards || cards.length === 0 || !isClient) return null;

//   return (
//     <div>
//       {/* Heading with responsive font size */}
//       <h2 className="text-[19px] md:text-[33px] text-center md:mx-20 mx-2 font-medium md:mb-[40px] mb-[30px]">
//         {heading}
//       </h2>

//       {isMobile ? (
//         // Carousel for mobile view - simplified for better image rendering
//         <div className="relative w-full flex flex-col items-center">
//           <div className="h-[170px] flex justify-center items-center">
//             <div className="bg-[#000B18] border-[3px] border-[#FFD550] rounded-[20px] p-[15px] w-[170px] h-[170px] flex items-center justify-center overflow-hidden">
//               {/* Static rendering approach for mobile */}
//               <div className="relative w-[120px] h-[120px]">
//                 <Image
//                   src={cards[currentIndex].image}
//                   alt={cards[currentIndex].alt}
//                   fill
//                   priority
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
          
//           {/* Navigation dots */}
//           {cards.length > 1 && (
//             <div className="mt-4 flex justify-center space-x-2">
//               {cards.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-2 h-2 rounded-full ${
//                     currentIndex === index ? 'bg-[#FFD550]' : 'bg-gray-400'
//                   }`}
//                   onClick={() => setCurrentIndex(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       ) : (
//         // Grid for larger screens
//         <motion.div
//           className="flex flex-col sm:flex-row sm:justify-center gap-[22px] sm:gap-[128px]"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#000B18] border-[3px] border-[#FFD550] rounded-[20px] p-[15px] sm:p-[20px] w-[170px] h-[170px] flex items-center justify-center"
//               variants={cardVariants}
//             >
//               <div className="relative w-[120px] h-[120px]">
//                 <Image
//                   src={card.image}
//                   alt={card.alt}
//                   fill
//                   sizes="120px"
//                   className="object-cover"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default ImageCardGroup;















// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const ImageCardGroup = ({ heading, cards }) => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 640);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (isMobile && cards.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//       }, 3000);
//       return () => clearInterval(interval);
//     }
//   }, [isMobile, cards]);

//   if (!cards || cards.length === 0 || !isClient) return null;

//   return (
//     <div>
//       <h2 className="text-[19px] md:text-[33px] text-center md:mx-20 mx-2 font-medium md:mb-[40px] mb-[30px]">
//         {heading}
//       </h2>

//       {isMobile ? (
//         <div className="relative w-full flex flex-col items-center">
//           <div className="h-[170px] flex justify-center items-center">
//             <div className="bg-[#000B18] border-[3px] border-[#FFD550] rounded-[20px] p-[15px] w-[170px] h-[170px] flex items-center justify-center">
//               <div className="relative w-[120px] h-[120px]">
//                 <Image
//                   src={cards[currentIndex].image}
//                   alt={cards[currentIndex].alt}
//                   fill
//                   priority
//                   className="object-cover"
//                   onError={() => console.error('Image failed to load:', cards[currentIndex].image)}
//                 />
//               </div>
//             </div>
//           </div>
//           {cards.length > 1 && (
//             <div className="mt-4 flex justify-center space-x-2">
//               {cards.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-[#FFD550]' : 'bg-gray-400'}`}
//                   onClick={() => setCurrentIndex(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       ) : (
//         <motion.div
//           className="flex flex-col sm:flex-row sm:justify-center gap-[22px] sm:gap-[128px]"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#000B18] border-[3px] border-[#FFD550] rounded-[20px] p-[15px] sm:p-[20px] w-[170px] h-[170px] flex items-center justify-center"
//               variants={cardVariants}
//             >
//               <div className="relative w-[120px] h-[120px]">
//                 <Image
//                   src={card.image}
//                   alt={card.alt}
//                   fill
//                   sizes="120px"
//                   className="object-cover"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default ImageCardGroup;








import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ImageCardGroup = ({ heading, cards }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Treat tablet like mobile so autoplay carousel runs on both.
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && cards.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile, cards]);

  if (!cards || cards.length === 0 || !isClient) return null;

  // Heading animation variants for the entire heading
  const headingVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <div className="relative">
      {/* Heading with Cinematic Animation */}
      {heading && (
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[19px] md:text-[33px] text-center md:mx-20 mx-2 font-medium md:mb-[10rem] mb-[30px] relative"
        >
          {heading}
        
        </motion.h2>
      )}

      {/* Mobile + Tablet View: Carousel */}
      {isMobile ? (
        <div className="relative w-full flex flex-col items-center">
          <div className="h-[170px] flex justify-center items-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-[#000B18] border-[3px] border-[#FFD550] rounded-[20px] p-[15px] w-[170px] h-[170px] flex items-center justify-center"
            >
              <div className="relative w-[120px] h-[120px]">
                <Image
                  src={cards[currentIndex].image}
                  alt={cards[currentIndex].alt}
                  fill
                  priority
                  className="object-cover"
                  onError={() => console.error('Image failed to load:', cards[currentIndex].image)}
                />
              </div>
            </motion.div>
          </div>
          {cards.length > 1 && (
            <div className="mt-4 flex justify-center space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-[#FFD550]' : 'bg-gray-400'}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Desktop View: Card Grid */
        <motion.div
          className="flex flex-col sm:flex-row sm:justify-center gap-[22px] sm:gap-[128px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#000B18] border-[3px] border-[#FFD550] rounded-[20px] p-[15px] sm:p-[20px] w-[170px] h-[170px] flex items-center justify-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 213, 80, 0.5)' }}
            >
              <div className="relative w-[120px] h-[120px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      )}
    </div>
  );
};

export default ImageCardGroup;
