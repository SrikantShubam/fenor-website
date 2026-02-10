import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Animation variants for card (simplified, no tilt)
const cardVariants = {
  hidden: { opacity: .2, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface ManagementCardProps {
  name: string;
  designation?: string;
  profileImg?: string;
  whatsappUrl?: string;
  linkedinUrl?: string;
}

const ManagementCard: React.FC<ManagementCardProps> = ({
  name,
  designation,
  profileImg,
  whatsappUrl,
  linkedinUrl,
}) => {
  return (
    <motion.div
      className="
        bg-[#000B18] text-white 
        border-[2px] border-[#FFD550] 
        rounded-3xl 
        py-4 px-3 
        sm:py-5 sm:px-5 
        md:py-6 md:px-6 
        lg:py-8 lg:px-8
        flex flex-col items-center space-y-4 
        h-auto 
        shadow-lg
      "
      variants={cardVariants}
    >
      {profileImg ? (
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-4 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD550]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={profileImg}
            alt={name}
            fill
            className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 96px, 128px"
          />
        </div>
      ) : null}
      <h3
        className="
          text-[16px] sm:text-[19px] lg:text-[23px]
          font-bold text-center 
          tracking-tight 
          my-2
        "
      >
        {name}
      </h3>
      {designation ? (
        <p
          className="
            text-[13px] sm:text-[16px] lg:text-[19px]
            font-normal text-gray-300 text-center
            drop-shadow-sm
          "
        >
          {designation}
        </p>
      ) : null}
      {(whatsappUrl || linkedinUrl) && (
        <div className="flex justify-center space-x-6 mt-3">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white hover:text-[#FFD550] 
                bg-[#FFD550]/10 rounded-full p-3
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-[#FFD550]
              "
              aria-label="Contact via WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white hover:text-[#FFD550] 
                bg-[#FFD550]/10 rounded-full p-3
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-[#FFD550]
              "
              aria-label="View LinkedIn profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ManagementCard;
