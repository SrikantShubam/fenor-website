"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface TextWithVideoProps {
  bigHeading?: string;
  smallHeading?: string;
  video?: string;
}

const TextWithVideo: React.FC<TextWithVideoProps> = ({ bigHeading, smallHeading, video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const currentLocale = router.locale || "ar";

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Error playing video:", error));
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      videoRef.current.muted = false;
    }
    setVolume(newVol);
  };

  const showPlayPauseButton = !isPlaying || hovered;

  return (
    <div className="flex flex-col items-center px-4 py-10">
      {bigHeading && (
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {bigHeading}
        </motion.h1>
      )}
      {smallHeading && (
        <motion.h2
          className="text-base md:text-lg lg:text-xl text-center mb-6 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {smallHeading}
        </motion.h2>
      )}

      {video && (
        <div
          className="relative mt-6 w-[370px] h-[206px] md:w-[727px] md:h-[350px] lg:w-[1200px] lg:h-[500px] rounded-[20px] overflow-hidden group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.video
            ref={videoRef}
            className="w-full h-full object-cover rounded-[20px]"
            playsInline
            preload="auto"
            poster="/video-poster.webp"
            muted={!isPlaying}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>

          {/* Play/Pause Button */}
          {showPlayPauseButton && (
            <button
              onClick={isPlaying ? handlePause : handlePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ebba7f] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          )}

          {/* Volume Slider */}
          {isPlaying && hovered && (
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-xl flex items-center space-x-3 shadow-lg"
              dir={currentLocale === "ar" ? "rtl" : "ltr"}
            >
              {volume <= 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-32 accent-[#ebba7f]"
              />
              <span className="text-sm font-medium text-gray-700">{Math.round(volume * 100)}%</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TextWithVideo;
