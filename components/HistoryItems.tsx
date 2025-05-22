// import React from 'react';
// import Image from 'next/image';

// interface TimelineItem {
//   date: string;
//   icon: string;
//   paragraph_for_history: string;
//   image_for_tags?: string;
// }

// interface HistoryItemsProps {
//   sectionHeader?: unknown;      // accept anything, we’ll coerce it
//   timelineItems: TimelineItem[];
// }

// const HistoryItems: React.FC<HistoryItemsProps> = ({
//   sectionHeader,
//   timelineItems,
// }) => {
//   // coerce to string, trim, split into words
//   const headerText = `${sectionHeader || ''}`.trim();
//   const words = headerText.split(/\s+/);
//   const lastWord = words.pop() || '';
//   const rest = words.join(' ');

//   return (
//     <>
//       <h2 className="text-[33px] md:text-[28px] sm:text-[23px] font-bold text-white mb-6 md:mb-12">
//         {rest && <>{rest} </>}
//         <span className="text-[#FFDA66]">{lastWord}</span>
//       </h2>

//       <div className="relative md:px-0">
//         {/* Desktop/Tablet full-height line */}
//         <div
//           className="hidden md:block absolute top-0 bottom-0 left-[33.3333%] w-px bg-[#EBBA7F]"
//         />

//         {/* Mobile continuous line */}
//         <div
//           className="md:hidden absolute top-0 bottom-0 left-2 w-px bg-[#EBBA7F]"
//         />

//         {timelineItems.map((item, idx) => {
//           const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//           });

//           return (
//             <div key={idx}>
//               {/* ───── Desktop / Tablet ───── */}
//               <div className="hidden md:grid timeline-item-grid relative ">
//                 {/* circle on line */}
//                 <div
//                   className="absolute w-4 h-4 bg-[#EBBA7F] rounded-full transform -translate-x-1/2"
//                   style={{ left: '33.3333%', top: '0.5rem' }}
//                 />

//                 {/* date column */}
//                 <div className="flex justify-end mb-2 md:mb-0 md:col-start-2">
//                   <span className="text-[23px] md:text-[19px] sm:text-[16px] font-semibold text-white">
//                     {formattedDate}
//                   </span>
//                 </div>

//                 {/* content column */}
//                 <div className="md:col-start-4 md:pl-6 space-y-4">
//                   <div className="flex items-start space-x-4">
//                     <Image
//                       src={item.icon}
//                       alt="Timeline icon"
//                       width={24}
//                       height={24}
//                       className="object-contain rounded-[20px]"
//                     />
//                     <p className="text-[19px] md:text-[16px] sm:text-[13px] text-white leading-normal">
//                       {item.paragraph_for_history}
//                     </p>
//                   </div>

//                   {item.image_for_tags && (
//                     <Image
//                       src={item.image_for_tags}
//                       alt={`Timeline item ${idx + 1}`}
//                       width={300}
//                       height={200}
//                       className="object-cover rounded-[20px] w-full max-w-xs"
//                       sizes="(max-width: 768px) 100vw, 300px"
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* ───── Mobile Only ───── */}
//               <div className="md:hidden relative pl-8 my-[70px]">
//                 {/* circle */}
//                 <div className="absolute left-0 top-2 w-4 h-4 bg-[#EBBA7F] rounded-full" />

//                 {/* date to right of circle */}
//                 <div className="mb-2 pl-2">
//                   <span className="text-[16px] font-semibold text-white">
//                     {formattedDate}
//                   </span>
//                 </div>

//                 {/* icon + paragraph */}
//                 <div className="flex items-start space-x-4 pl-2">
                 
//                   <p className="text-[16px] text-white">
//                     {item.paragraph_for_history}
//                   </p>
//                 </div>

//                 {/* optional image */}
//                 {item.image_for_tags && (
//                   <Image
//                     src={item.image_for_tags}
//                     alt={`Timeline item ${idx + 1}`}
//                     width={300}
//                     height={200}
//                     className="object-cover rounded-[20px] w-full max-w-xs mt-2"
//                     sizes="(max-width: 768px) 100vw, 300px"
//                   />
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default HistoryItems;












// import React from 'react';
// import Image from 'next/image';

// interface TimelineItem {
//   date: string;
//   icon: string;
//   paragraph_for_history: string;
//   image_for_tags?: string;
// }

// interface HistoryItemsProps {
//   sectionHeader?: unknown;
//   timelineItems: TimelineItem[];
// }

// const HistoryItems: React.FC<HistoryItemsProps> = ({
//   sectionHeader,
//   timelineItems,
// }) => {
//   // 1) coerce header to string, 2) split into words
//   const headerText = `${sectionHeader || ''}`.trim();
//   const words = headerText.split(/\s+/);
//   const lastWord = words.pop() || '';
//   const rest = words.join(' ');

//   return (
//     <>
//       <h2 className="text-[33px] md:text-[28px] sm:text-[23px] font-bold text-white mb-6 md:mb-8">
//         {rest && <>{rest} </>}
//         <span className="text-[#FFDA66]">{lastWord}</span>
//       </h2>

//       <div className="relative md:px-0">
//         {/* Desktop/Tablet full–height line */}
//         <div
//           className="hidden md:block"
//           style={{
//             position: 'absolute',
//             insetBlockStart: 0,
//             insetBlockEnd: 0,
//             insetInlineStart: '30.3333%',
//             width: '1px',
//             backgroundColor: '#EBBA7F',
//           }}
//         />

//         {/* Mobile continuous line */}
//         <div
//           className="md:hidden"
//           style={{
//             position: 'absolute',
//             insetBlockStart: 0,
//             insetBlockEnd: 0,
//             insetInlineStart: '1rem',
//             width: '1px',
//             backgroundColor: '#EBBA7F',
//           }}
//         />

//         {timelineItems.map((item, idx) => {
//           const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//           });

//           return (
//             <div key={idx}>
//               {/* ─── Desktop/Tablet ─── */}
//               <div className="hidden md:grid timeline-item-grid relative">
//                 {/* Circle marker */}
//                 <div
//                   style={{
//                     position: 'absolute',
//                     insetInlineStart: '29.2%',
//                     insetBlockStart: '.4rem',
//                     width: '1rem',
//                     height: '1rem',
//                     borderRadius: '50%',
//                     backgroundColor: '#EBBA7F',
//                     transform: 'translateX(-50%)',
//                   }}
//                 />

//                 {/* Date (left column) */}
//                 <div className="flex justify-end mb-2 md:mb-0 md:col-start-2">
//                   <span className="text-[23px] md:text-[19px] sm:text-[16px] font-semibold text-white">
//                     {formattedDate}
//                   </span>
//                 </div>

//                 {/* Content (right column) */}
//                 <div className="md:col-start-4 md:pl-6 space-y-4">
//                   <div className="flex items-start space-x-4">
//                     <Image
//                       src={item.icon}
//                       alt="Timeline icon"
//                       width={24}
//                       height={24}
//                       className="object-contain rounded-[20px]"
//                     />
//                     <p className="text-[19px] md:text-[16px] sm:text-[13px] text-white leading-normal">
//                       {item.paragraph_for_history}
//                     </p>
//                   </div>
//                   {item.image_for_tags && (
//                     <Image
//                       src={item.image_for_tags}
//                       alt={`Timeline item ${idx + 1}`}
//                       width={300}
//                       height={200}
//                       className="object-cover rounded-[20px] w-full max-w-xs"
//                       sizes="(max-width: 768px) 100vw, 300px"
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* ─── Mobile Only ─── */}
//               <div
//                 className="md:hidden relative mb-6"
//                 style={{ paddingInlineStart: '2rem' }}
//               >
//                 {/* Circle */}
//                 <div
//                   style={{
//                     position: 'absolute',
//                     insetInlineStart: '0rem',
//                     insetBlockStart: '0.5rem',
//                     width: '1rem',
//                     height: '1rem',
//                     borderRadius: '50%',
//                     backgroundColor: '#EBBA7F',
//                     transform: 'translateX(-50%)',
//                   }}
//                 />

//                 {/* Date */}
//                 <div style={{ paddingInlineStart: '0.5rem', marginBottom: '0.5rem' }}>
//                   <span className="text-[16px] font-semibold text-white">
//                     {formattedDate}
//                   </span>
//                 </div>

//                 {/* Icon + Paragraph */}
//                 <div
//                   className="flex items-start space-x-4"
//                   style={{ paddingInlineStart: '0.5rem' }}
//                 >
                
//                   <p className="text-[16px] text-white">
//                     {item.paragraph_for_history}
//                   </p>
//                 </div>

//                 {/* Optional Image */}
//                 {item.image_for_tags && (
//                   <Image
//                     src={item.image_for_tags}
//                     alt={`Timeline item ${idx + 1}`}
//                     width={300}
//                     height={200}
//                     className="object-cover rounded-[20px] w-full max-w-xs mt-2"
//                     sizes="(max-width: 768px) 100vw, 300px"
//                   />
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default HistoryItems;















import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

interface TimelineItem {
  date: string;
  icon: string;
  paragraph_for_history: string;
  image_for_tags?: string;
}

interface HistoryItemsProps {
  sectionHeader?: unknown;
  timelineItems: TimelineItem[];
}

const HistoryItems: React.FC<HistoryItemsProps> = ({
  sectionHeader,
  timelineItems,
}) => {
  const { t, i18n } = useTranslation('common');
  const locale = i18n.language;
  const isRTL = locale === 'ar';

  // State to hold formatted dates, initialized as empty
  const [formattedDates, setFormattedDates] = useState<string[]>([]);

  // Format dates only on the client side
  useEffect(() => {
    const dates = timelineItems.map(item =>
      new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(item.date))
    );
    setFormattedDates(dates);
  }, [timelineItems, locale]);

  // Coerce header to string and split into words
  const headerText = `${sectionHeader || ''}`.trim();
  const words = headerText.split(/\s+/);
  const lastWord = words.pop() || '';
  const rest = words.join(' ');

  return (
    <>
      <h2 className="text-[33px] md:text-[28px] sm:text-[23px] font-bold text-white mb-6 md:mb-8">
        {rest && <>{rest} </>}
        <span className="text-[#FFDA66]">{lastWord}</span>
      </h2>

      <div className="relative md:px-0" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Desktop/Tablet full-height line */}
        <div
          className="hidden md:block absolute inset-y-0 w-px bg-[#EBBA7F]"
          style={{ [isRTL ? 'right' : 'left']: '33.3%' }}
        />

        {/* Mobile continuous line */}
        <div
          className="md:hidden absolute inset-y-0 w-px bg-[#EBBA7F]"
          style={{ [isRTL ? 'right' : 'left']: '1rem' }}
        />

        {timelineItems.map((item, idx) => {
          // Use formatted date if available, otherwise empty string
          const dateDisplay = formattedDates[idx] || '';

          return (
            <div key={idx} className="my-20">
              {/* Desktop/Tablet */}
              <div className="hidden md:flex items-start">
                <div
                  className={`w-1/3 pr-6 ${isRTL ? 'order-3 text-left' : 'order-1 text-right'}`}
                >
                  <span className="text-[23px] md:text-[19px] sm:text-[16px] font-semibold text-white">
                    {dateDisplay}
                  </span>
                </div>
                <div className="relative w-0 order-2">
                  <div
                    className="absolute w-4 h-4 rounded-full bg-[#EBBA7F]"
                    style={{
                      [isRTL ? 'right' : 'left']: '-0.5rem',
                      top: '0.4rem',
                    }}
                  />
                </div>
                <div
                  className={`w-2/3 ${isRTL ? 'order-1 pr-6' : 'order-3 pl-6'} space-y-4`}
                >
                  <div className="flex items-start space-x-4">
                    <Image
                      src={item.icon}
                      alt="Timeline icon"
                      width={24}
                      height={24}
                      className="object-contain rounded-[20px]"
                    />
                    <p className="text-[19px] md:text-[16px] sm:text-[13px] text-white leading-normal">
                      {t(item.paragraph_for_history)}
                    </p>
                  </div>
                  {item.image_for_tags && (
                    <Image
                      src={item.image_for_tags}
                      alt={`Timeline item ${idx + 1}`}
                      width={300}
                      height={200}
                      className="object-cover rounded-[20px] w-full max-w-xs"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  )}
                </div>
              </div>

              {/* Mobile */}
              <div
                className="md:hidden relative mb-6"
                style={{
                  paddingInlineStart: isRTL ? '0' : '2rem',
                  paddingInlineEnd: isRTL ? '2rem' : '0',
                }}
              >
                <div
                  className="absolute w-4 h-4 rounded-full bg-[#EBBA7F]"
                  style={{
                    [isRTL ? 'right' : 'left']: '1rem',
                    transform: isRTL ? 'translateX(50%)' : 'translateX(-50%)',
                    top: '0.5rem',
                  }}
                />
                <div
                  style={{
                    paddingInlineStart: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span className="text-[16px] font-semibold text-white">
                    {dateDisplay}
                  </span>
                </div>
                <div
                  className="flex items-start space-x-4"
                  style={{ paddingInlineStart: '0.5rem' }}
                >
                  <p className="text-[16px] text-white">
                    {t(item.paragraph_for_history)}
                  </p>
                </div>
                {item.image_for_tags && (
                  <Image
                    src={item.image_for_tags}
                    alt={`Timeline item ${idx + 1}`}
                    width={300}
                    height={200}
                    className="object-cover rounded-[20px] w-full max-w-xs mt-2"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HistoryItems;