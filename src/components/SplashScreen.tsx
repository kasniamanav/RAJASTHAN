import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Sparkles } from 'lucide-react';

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { isHindi } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 900);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 400);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F4E3C1] dark:bg-[#12132B] overflow-hidden select-none"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
        >
          {/* Skip button in top corner */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 px-4 py-1.5 rounded-full border border-[#C65D3B]/40 dark:border-[#F2A900]/40 text-xs font-semibold uppercase tracking-wider text-[#6B1E2E] dark:text-[#F4E3C1] hover:bg-[#C65D3B]/10 transition-colors z-20"
          >
            {isHindi ? 'छोड़ें (Skip)' : 'Skip Reveal'}
          </button>

          {/* Background subtle mandala rings */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full border border-[#C65D3B]/15 dark:border-[#F2A900]/15"
            animate={{ rotate: 360, scale: [0.9, 1.05, 0.9] }}
            transition={{ rotate: { repeat: Infinity, duration: 40, ease: 'linear' }, scale: { repeat: Infinity, duration: 6, ease: 'easeInOut' } }}
          />

          <div className="relative flex flex-col items-center z-10">
            {/* Hawa Mahal Style Jharokha Arch SVG */}
            <svg
              width="180"
              height="240"
              viewBox="0 0 200 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#C65D3B] dark:stroke-[#F2A900]"
            >
              {/* Outer Cusped Arch */}
              <motion.path
                d="M 20,270 L 20,130 C 20,70 50,20 100,5 C 150,20 180,70 180,130 L 180,270"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />

              {/* Inner Arch Layer */}
              <motion.path
                d="M 38,270 L 38,135 C 38,85 65,45 100,32 C 135,45 162,85 162,135 L 162,270"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
              />

              {/* Central Dome Kalash finial */}
              <motion.path
                d="M 100,5 L 100,-15 M 95,-10 L 105,-10"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              />

              {/* Center Jharokha Window */}
              <motion.circle
                cx="100"
                cy="140"
                r="32"
                strokeWidth="3"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              />
              <motion.path
                d="M 75,140 L 125,140 M 100,115 L 100,165"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />

              {/* Decorative base bracket */}
              <motion.path
                d="M 10,270 L 190,270"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </svg>

            {/* Title with Devanagari styling */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-[#C65D3B] dark:text-[#F2A900] mb-1">
                <Sparkles size={16} />
                <span className="text-xs uppercase tracking-widest font-bold">
                  {isHindi ? 'पधारो म्हारे देश' : 'Padharo Mhare Des'}
                </span>
                <Sparkles size={16} />
              </div>

              <h1 className="text-3xl md:text-5xl font-playfair font-black tracking-tight text-[#4A121E] dark:text-[#F4E3C1]">
                Rangeela Rajasthan
              </h1>

              <p className="text-xs tracking-wider opacity-75 font-light mt-1">
                {isHindi ? 'रंगीलो राजस्थान में आपका स्वागत है' : 'The Royal Desert Odyssey'}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
