// import React from 'react';
// import Image from 'next/image';

// interface NewsCardProps {
//   title: string;
//   excerpt: string;
//   imageUrl: string | null;
//   publishedDate: string;
//   eventType: string | null;  // here we’re using this as the “location” badge
//   isHighlighted?: boolean;
// }

// const NewsCard: React.FC<NewsCardProps> = ({
//   title,
//   excerpt,
//   imageUrl,
//   publishedDate,
//   eventType,
//   isHighlighted = false,
// }) => {
//   // truncate excerpt to exactly 50 chars
//   const formattedExcerpt =
//     excerpt.length > 50 ? excerpt.slice(0, 50) + '…' : excerpt;

//   // format date as Month-Day-Year with month name and dashes
//   const formattedDate = new Date(publishedDate)
//     .toLocaleDateString('en-US', {
//       month: 'long',
//       day: '2-digit',
//       year: 'numeric',
//     })
//     .replace(/ /g, '-')
//     .replace(',', '');

//   return (
//     <div
//       className={`
//         relative
//         block
//         p-4
      
        
//         rounded-lg
//         overflow-hidden
//         ${isHighlighted ? 'bg-yellow-50' : ''}
//       `}
//     >
//       {imageUrl && (
//         <div className="relative">
//           <Image
//             src={`https:${imageUrl}`}
//             alt={title}
//             width={300}
//             height={200}
//             className="w-full h-auto object-cover rounded-[30px]"
//           />
//           {eventType && (
//             <span
//               className={`
//                 absolute
//                 top-2 left-2
//                 bg-black
//                 text-yellow-500
//                 uppercase
//                 px-2 py-1
//                 rounded
//                 text-[13px] sm:text-[16px] md:text-[19px]
//               `}
//             >
//               {eventType}
//             </span>
//           )}
//         </div>
//       )}

//       <div className="mt-4 ">
//         <p
//           className="
//             text-gray-500
//             text-[13px] sm:text-[16px] md:text-[19px]
//           "
//         >
//           {formattedDate}
//         </p>

//         <h3
//           className="
//             font-semibold
//             text-[16px] sm:text-[19px] md:text-[23px]
//             mt-1
//           "
//         >
//           {title}
//         </h3>

//         <p
//           className="
//             text-gray-600
//             text-[13px] sm:text-[16px] md:text-[19px]
//             mt-2
//           "
//         >
//           {formattedExcerpt}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;



















// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// interface NewsCardProps {
//   title: string;
//   excerpt: string;
//   imageUrl: string | null;
//   publishedDate: string;
//   eventType: string | null;
//   isHighlighted?: boolean;
// }

// const NewsCard: React.FC<NewsCardProps> = ({
//   title,
//   excerpt,
//   imageUrl,
//   publishedDate,
//   eventType,
//   isHighlighted = false,
// }) => {
//   // Truncate excerpt to exactly 50 chars
//   const formattedExcerpt =
//     excerpt.length > 50 ? excerpt.slice(0, 50) + '…' : excerpt;

//   // Format date as Month-Day-Year with month name and dashes
//   const formattedDate = new Date(publishedDate)
//     .toLocaleDateString('en-US', {
//       month: 'long',
//       day: '2-digit',
//       year: 'numeric',
//     })
//     .replace(/ /g, '-')
//     .replace(',', '');

//   return (
//     <div
//       className={`
//         relative
//         block
        
      
    
//         rounded-lg
//         overflow-hidden
//         ${isHighlighted ? 'bg-yellow-50' : ''}
//       `}
//     >
//       {imageUrl && (
//         <motion.div
//           className="relative h-[300px]  overflow-hidden rounded-[30px]"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         >
//           <Image
//             src={`https:${imageUrl}`}
//             alt={title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-[30px]"
//           />
//           {eventType && (
//             <span
//               className={`
//                 absolute
//                 top-10 left-5
//                 bg-black
//                 text-yellow-500
//                 uppercase
//                 px-2 py-1
//                 rounded
//                 text-[13px] sm:text-[16px] md:text-[19px]
//               `}
//             >
//               {eventType}
//             </span>
//           )}
//         </motion.div>
//       )}

//       <div className="mt-8">
//         <p
//           className="
//             text-gray-500
//             text-[13px] sm:text-[16px] md:text-[19px] my-4
//           "
//         >
//           {formattedDate}
//         </p>

//         <h3
//           className="
//             font-semibold
//             text-[16px] sm:text-[19px] md:text-[23px]
//             mt-4
//           "
//         >
//           {title}
//         </h3>

//         <p
//           className="
//             text-gray-600
//             text-[13px] sm:text-[16px] md:text-[19px]
//             mt-6
//           "
//         >
//           {formattedExcerpt}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;



import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
interface NewsCardProps {
  title: string;
  excerpt: string;
  imageUrl: string | null;
  publishedDate: string;
  eventType: string | null;
  isHighlighted?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  imageUrl,
  publishedDate,
  eventType,
  isHighlighted = false,
}) => {
  // Truncate excerpt to exactly 50 chars
  const formattedExcerpt =
    excerpt.length > 50 ? excerpt.slice(0, 50) + '…' : excerpt;

  // Format date as Month-Day-Year with month name and dashes
  const formattedDate = new Date(publishedDate)
    .toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    })
    .replace(/ /g, '-')
    .replace(',', '');
  const { locale } = useRouter();
  const langSuffix = locale?.split('-')[0].toLowerCase() || 'en';
  const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();
  return (
    <motion.div
      className={`
        relative block rounded-lg overflow-hidden
        ${isHighlighted ? 'bg-yellow-50' : ''}
      `}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {imageUrl && (
        <div className="relative h-[300px] overflow-hidden rounded-[30px]">
          <Image
            src={`https:${imageUrl}`}
            alt={title}
             fill
  style={{ objectFit: 'cover' }}
            className="rounded-[30px]"
          />
          {eventType && localeKey !== 'Fr' && localeKey !== 'Ar' && (
            <span
              className={`
                absolute top-10 left-5 bg-black text-yellow-500 uppercase px-2 py-1 rounded
                text-[13px] sm:text-[16px] md:text-[19px]
              `}
            >
              {eventType}
            </span>
          )}
        </div>
      )}

      <div className="mt-8 px-4 pb-4">
        <p
          className="
            text-gray-500 text-[13px] sm:text-[16px] md:text-[19px] my-4
          "
        >
          {formattedDate}
        </p>

        <h3
          className="
            font-semibold text-[16px] sm:text-[19px] md:text-[23px] mt-4
          "
        >
          {title}
        </h3>

        <p
          className="
            text-gray-600 text-[13px] sm:text-[16px] md:text-[19px] mt-6
          "
        >
          {formattedExcerpt}
        </p>
      </div>
    </motion.div>
  );
};

export default NewsCard;