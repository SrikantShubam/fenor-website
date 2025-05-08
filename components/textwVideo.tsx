import React, { useRef, useEffect } from 'react';

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
  }, [video]);

  return (
    <div className="flex flex-col items-center">
      {bigHeading && <h1 className="text-[28px] md:text-[33px] lg:text-[48px] mb-4 text-center">{bigHeading}</h1>}
      {smallHeading && <h2 className="text-[13px] md:text-[16px] lg:text-[19px] mt-5 mb-4 text-center">{smallHeading}</h2>}
      {video && (
        <video
          ref={videoRef}
          className="w-[373px] h-[206px] md:w-[727px] md:h-[350px] lg:w-[1181px] lg:h-[452px] rounded-[20px] mt-10 object-cover"
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default TextWithVideo;