import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};
const subheadingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: 'easeOut' } },
};
const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, delay: 1, ease: 'easeOut' } },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#021324] flex items-center justify-center relative overflow-hidden">
      {/* Animated striped overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#021324,#021324 10px,#1a3c5e 10px,#1a3c5e 20px)] animate-stripes mix-blend-overlay pointer-events-none" />
      <div className="relative text-center px-4 z-10">
        <motion.h1
          className="text-[120px] md:text-[180px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FFDA66] via-[#ff8c00] to-[#FFDA66] drop-shadow-[0_0_20px_rgba(255,218,102,0.7)]"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          404
        </motion.h1>
        <motion.div
          className="h-1 bg-gradient-to-r from-[#FFDA66] to-[#ff8c00] origin-left mb-6"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-white mb-4"
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          Under Construction
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-md mx-auto mb-8"
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          We are putting the finishing touches on this page. Check back soon or go home.
        </motion.p>
        <motion.div variants={subheadingVariants} initial="hidden" animate="visible">
          <Link href="/" className="inline-block px-6 py-3 border-2 border-[#FFDA66] text-[#FFDA66] font-medium uppercase rounded-full hover:bg-[#FFDA66] hover:text-black transition">
     
              Back to Home
        
          </Link>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes stripes {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
        .animate-stripes {
          animation: stripes 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

NotFound.noLayout = true;
