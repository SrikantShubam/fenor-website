// import React, { useRef, useEffect } from 'react';

// interface TextWithVideoProps {
//   bigHeading?: string;
//   smallHeading?: string;
//   video?: string;
// }

// const TextWithVideo: React.FC<TextWithVideoProps> = ({ bigHeading, smallHeading, video }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play().catch(error => {
//         console.error('Error playing video:', error);
//       });
//     }
//   }, [video]);

//   return (
//     <div className="flex flex-col items-center">
//       {bigHeading && <h1 className="text-[28px] md:text-[33px] lg:text-[48px] mb-4 text-center">{bigHeading}</h1>}
//       {smallHeading && <h2 className="text-[13px] md:text-[16px] lg:text-[19px] mt-5 mb-4 text-center">{smallHeading}</h2>}
//       {video && (
//         <video
//           ref={videoRef}
//           className="w-[370px] h-[206px] md:w-[727px] md:h-[350px] lg:w-[1200px] lg:h-[500px] rounded-[20px] mt-10 object-cover"
//           loop
//           muted
//           playsInline
//         >
//           <source src={video} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       )}
//     </div>
//   );
// };

// export default TextWithVideo;








import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TextWithVideoProps {
  bigHeading?: string;
  smallHeading?: string;
  video?: string;
}

const TextWithVideo: React.FC<TextWithVideoProps> = ({ bigHeading, smallHeading, video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      {bigHeading && (
        <motion.h1
          className="text-[28px] md:text-[33px] lg:text-[48px] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {bigHeading}
        </motion.h1>
      )}
      {smallHeading && (
        <motion.h2
          className="text-[13px] md:text-[16px] lg:text-[19px] mt-5 mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {smallHeading}
        </motion.h2>
      )}
      {video && (
        <motion.video
          ref={videoRef}
          className="w-[370px] h-[206px] md:w-[727px] md:h-[350px] lg:w-[1200px] lg:h-[500px] rounded-[20px] mt-10 object-cover"
          loop
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="/video-poster.webp" // Compressed placeholder image
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      )}
    </div>
  );
};

export default TextWithVideo;