import React from 'react';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from './Button';

interface TextWithImageBGProps {
  smallHeading?: string;
  bigHeading?: string;
  paragraph?: TinaMarkdownContent;
  buttonText?: string;
  buttonUrl?: string;
  backgroundImage?: string;
  imagePosition?: 'left' | 'center' | 'right';
}

const TextWithImageBG: React.FC<TextWithImageBGProps> = ({
  smallHeading,
  bigHeading,
  paragraph,
  buttonText,
  buttonUrl,
  backgroundImage,
  imagePosition,
}) => {
  const { locale } = useRouter();
  const [isMobileViewport, setIsMobileViewport] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateViewport = () => setIsMobileViewport(window.innerWidth < 768);
    updateViewport();

    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const normalizedContext = `${smallHeading || ''} ${bigHeading || ''}`.toLowerCase();
  const isPrimaryInvestHero =
    normalizedContext.includes('invest') ||
    normalizedContext.includes('investment') ||
    normalizedContext.includes('investissement');

  const isRTL = locale?.toLowerCase().startsWith('ar');
  const resolvedImagePosition = imagePosition || (isRTL ? 'right' : 'center');
  const imagePositionClass =
    resolvedImagePosition === 'left'
      ? 'object-left'
      : resolvedImagePosition === 'right'
        ? 'object-right'
        : 'object-center';

  const textVariants = {
    hidden: {
      opacity: 0,
      y: isMobileViewport ? 10 : 20,
      filter: `blur(${isMobileViewport ? 2 : 5}px)`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: isMobileViewport ? 0.45 : 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative flex items-center justify-start overflow-hidden rounded-[20px] p-5 py-[30px] md:py-[58px] lg:py-[64px]">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Background image for section"
          fill
          className={`object-cover ${imagePositionClass}`}
          sizes="100vw"
          quality={85}
          priority={isPrimaryInvestHero}
          loading={isPrimaryInvestHero ? undefined : 'lazy'}
        />
      )}

      <div className="absolute inset-0 bg-black/24" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#021324]/82 via-[#021324]/48 to-transparent md:w-[82%] lg:w-[74%]" />
      <div
        className="absolute inset-y-0 left-0 w-full md:w-[80%] lg:w-[68%]"
        style={{
          background:
            'radial-gradient(circle at 20% 34%, rgba(2,19,36,0.72) 0%, rgba(2,19,36,0.48) 40%, rgba(2,19,36,0) 76%)',
        }}
      />

      <motion.div
        className="relative z-10 flex w-full flex-col gap-5 px-[5px] text-start text-white md:ml-[36px] md:w-[60%] md:gap-6 md:px-[14px] lg:ml-[100px] lg:w-[60%] lg:gap-6 lg:px-[8px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: isMobileViewport ? 0.12 : 0.2,
            },
          },
        }}
      >
        {smallHeading && (
          <motion.h3
            className="text-[19px] font-semibold leading-tight sm:text-[24px] md:text-[26px]"
            variants={textVariants}
          >
            {smallHeading}
          </motion.h3>
        )}

        {bigHeading && (
          <motion.h2
            className="max-w-[16ch] text-[28px] font-semibold leading-[1.06] sm:max-w-[17ch] sm:text-[36px] md:max-w-[15ch] md:text-[42px] lg:max-w-[13ch] lg:text-[44px]"
            variants={textVariants}
          >
            {bigHeading}
          </motion.h2>
        )}

        {paragraph && (
          <motion.div
            className="max-w-[50ch] text-[13px] leading-relaxed sm:text-[16px] md:text-[17px]"
            variants={textVariants}
          >
            <TinaMarkdown content={paragraph} />
          </motion.div>
        )}

        {buttonText && buttonUrl && (
          <motion.div className="pt-1" variants={textVariants}>
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
