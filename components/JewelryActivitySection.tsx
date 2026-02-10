import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

interface JewelryActivitySectionProps {
  header?: string;
  content?: string;
  image?: string;
  index?: number;
  locale?: string;
  variant?: 'legacy' | 'v2';
}

const animationEase: [number, number, number, number] = [0.2, 0.65, 0.25, 1];

const JewelryActivitySection: React.FC<JewelryActivitySectionProps> = ({
  header,
  content,
  image,
  index = 0,
  locale = 'en',
  variant = 'v2',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isRtl = locale.toLowerCase().startsWith('ar');
  const isEnglish = locale.toLowerCase().startsWith('en');
  const isOddItem = index % 2 === 1;
  const itemIndexLabel = String(index + 1).padStart(2, '0');

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: animationEase,
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.45, ease: animationEase },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.45, ease: animationEase },
    },
  };

  const renderHeader = (text: string, accentLastWord: boolean) => {
    if (!accentLastWord) {
      return <span className="text-white">{text}</span>;
    }

    const words = text.trim().split(/\s+/);
    const lastWord = words.pop();
    const firstPart = words.join(' ');
    return (
      <>
        {firstPart && (
          <motion.span variants={textVariants} className="text-white">
            {firstPart}{' '}
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

  if (variant === 'legacy') {
    return (
      <motion.div
        className="flex flex-col sm:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {header && (
          <div className="sm:basis-[25%]">
            <motion.h3
              className="mb-5 text-[19px] font-bold sm:text-[33px] md:text-[23px] lg:text-[33px]"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
                },
              }}
            >
              {renderHeader(header, true)}
            </motion.h3>
          </div>
        )}

        <div className="hidden sm:block sm:basis-[16.6667%]" />

        <motion.div
          className="sm:basis-[58.3333%] flex flex-col gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: shouldReduceMotion ? 0 : 0.2 },
            },
          }}
        >
          {image && (
            <motion.div variants={imageVariants} className="relative mb-4 w-full max-w-[560px] md:mb-6 md:max-w-[600px]">
              <Image
                src={image}
                alt={header || 'Activity image'}
                width={560}
                height={315}
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 560px, 46vw"
              />
            </motion.div>
          )}

          {content && (
            <motion.p
              className="whitespace-pre-line text-[13px] sm:text-[19px] md:text-[16px] lg:text-[19px]"
              variants={textVariants}
            >
              {content}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.section
      className="group relative overflow-hidden rounded-[24px] border border-[#D1A53E]/25 bg-[#031629] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:p-7 lg:p-9"
      style={{
        background:
          'radial-gradient(circle at 16% 18%, rgba(255,218,102,0.14) 0%, rgba(3,22,41,0.85) 42%, rgba(3,22,41,0.98) 100%)',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      <div
        className={`flex flex-col gap-7 lg:items-start lg:gap-10 ${isOddItem ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      >
        <motion.div className={`w-full ${image ? 'lg:w-[56%]' : 'lg:w-full'}`} variants={imageVariants}>
          {image ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] border border-white/10">
              <Image
                src={image}
                alt={header ? `${header} activity image` : 'Activity image'}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 56vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#021324]/45 via-transparent to-transparent" />
            </div>
          ) : (
            <div className="h-full w-full rounded-[20px] border border-white/10 bg-white/[0.04]" />
          )}
        </motion.div>

        <div className={`w-full ${image ? 'lg:w-[44%]' : 'lg:w-full'} ${isRtl ? 'text-right' : 'text-left'}`}>
          <motion.div
            className={`mb-5 flex items-center gap-3 ${isRtl ? 'justify-end' : 'justify-start'}`}
            variants={textVariants}
          >
            <span className="inline-flex min-w-[42px] items-center justify-center rounded-full border border-[#FFDA66]/35 bg-[#FFDA66]/12 px-3 py-1 text-[12px] font-semibold tracking-[0.16em] text-[#FFDA66]">
              {itemIndexLabel}
            </span>
            {header && (
              <h3 className="text-[21px] font-semibold leading-tight md:text-[28px]">{renderHeader(header, isEnglish && !isRtl)}</h3>
            )}
          </motion.div>

          {content && (
            <motion.p
              className="max-w-[65ch] whitespace-pre-line text-[14px] leading-7 text-white/85 md:text-[16px]"
              variants={textVariants}
            >
              {content}
            </motion.p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default JewelryActivitySection;
