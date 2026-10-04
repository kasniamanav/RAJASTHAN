import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageContext';
import { Compass, Utensils, ChevronDown, Sparkles } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { isHindi } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Parallax layers
  const sunMoonY = useTransform(smoothProgress, [0, 1], ['0%', '70%']);
  const fortY = useTransform(smoothProgress, [0, 1], ['0%', '35%']);
  const dunesY = useTransform(smoothProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(smoothProgress, [0, 1], ['0%', '90%']);
  const textOpacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headlineEn = "Land of Kings. Taste of Royalty.";
  const headlineHi = "राजाओं की भूमि, राजपूताना का शाही स्वाद।";
  const headline = isHindi ? headlineHi : headlineEn;

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center select-none"
    >
      {/* Dynamic Sky Gradient Layer */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-[#0A0B1A] via-[#12132B] to-[#251B3B]'
            : 'bg-gradient-to-b from-[#FAD998] via-[#F4B272] to-[#F4E3C1]'
        }`}
      />

      {/* Sun / Moon Celestial Body reacting to scroll & mouse */}
      <motion.div
        style={{ y: sunMoonY }}
        animate={{
          x: mousePos.x * -0.8,
          y: mousePos.y * -0.8,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        className="absolute top-[12%] right-[15%] md:right-[22%] z-0 pointer-events-none"
      >
        {theme === 'dark' ? (
          /* Glowing Crescent Moon */
          <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-[#FFF7D6] to-[#FFE082] shadow-[0_0_80px_rgba(255,240,165,0.7)] flex items-center justify-center">
            <div className="absolute top-1 right-2 w-24 h-24 md:w-36 md:h-36 rounded-full bg-[#12132B]/90 blur-[1px]" />
          </div>
        ) : (
          /* Radiant Golden Desert Sun */
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-[#FFD166] via-[#F2A900] to-[#FF8C42] shadow-[0_0_120px_rgba(242,169,0,0.85)] animate-pulse" />
        )}
      </motion.div>

      {/* Fort Silhouette Layer in distance */}
      <motion.div
        style={{ y: fortY }}
        animate={{
          x: mousePos.x * 0.4,
        }}
        className="absolute bottom-[20%] left-0 right-0 z-10 opacity-70 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto fill-[#6B1E2E]/30 dark:fill-[#0A0B1A]/80 transition-colors duration-700"
          preserveAspectRatio="none"
        >
          {/* Stylized Jodhpur/Mehrangarh Fort battlements silhouette */}
          <path d="M0,280 L60,270 L80,240 L100,240 L100,270 L160,265 L180,210 L210,210 L210,180 L230,180 L230,210 L250,210 L270,260 L350,260 L380,230 L400,230 L400,265 L520,275 L560,200 L590,200 L600,160 L620,160 L630,200 L660,200 L700,270 L800,260 L830,220 L860,220 L880,260 L980,270 L1020,190 L1050,190 L1070,270 L1200,275 L1240,230 L1280,230 L1300,280 L1440,280 L1440,320 L0,320 Z" />
        </svg>
      </motion.div>

      {/* Drifting Camel Caravan along the dune ridge */}
      <motion.div
        style={{ y: dunesY }}
        animate={{
          x: ['-20%', '110%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: 'linear',
        }}
        className="absolute bottom-[23%] z-20 w-80 md:w-96 pointer-events-none opacity-85"
      >
        {/* SVG Camel Caravan Silhouette */}
        <svg viewBox="0 0 400 60" fill="currentColor" className="text-[#4A121E] dark:text-[#F2A900]/80">
          {/* Camel 1 */}
          <path d="M20,45 C20,38 25,32 30,32 C33,32 36,25 36,18 C36,15 39,12 43,12 C46,12 47,15 45,18 C43,22 40,26 40,30 C45,28 50,25 55,27 C60,29 65,35 68,36 C72,37 75,32 80,33 C84,34 85,38 85,42 L88,58 L84,58 L82,46 L76,46 L74,58 L70,58 L72,45 L58,45 L56,58 L52,58 L54,43 L42,43 L38,58 L34,58 Z" />
          {/* Lead Man */}
          <path d="M5,48 C5,45 7,43 9,43 C11,43 12,45 12,48 C12,50 11,52 9,52 C7,52 5,50 5,48 Z M7,52 L11,52 L11,60 L7,60 Z" />
          <line x1="12" y1="48" x2="25" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          {/* Camel 2 */}
          <path d="M120,45 C120,38 125,32 130,32 C133,32 136,25 136,18 C136,15 139,12 143,12 C146,12 147,15 145,18 C143,22 140,26 140,30 C145,28 150,25 155,27 C160,29 165,35 168,36 C172,37 175,32 180,33 C184,34 185,38 185,42 L188,58 L184,58 L182,46 L176,46 L174,58 L170,58 L172,45 L158,45 L156,58 L152,58 L154,43 L142,43 L138,58 L134,58 Z" />
          <line x1="85" y1="42" x2="125" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          {/* Camel 3 */}
          <path d="M220,45 C220,38 225,32 230,32 C233,32 236,25 236,18 C236,15 239,12 243,12 C246,12 247,15 245,18 C243,22 240,26 240,30 C245,28 250,25 255,27 C260,29 265,35 268,36 C272,37 275,32 280,33 C284,34 285,38 285,42 L288,58 L284,58 L282,46 L276,46 L274,58 L270,58 L272,45 L258,45 L256,58 L252,58 L254,43 L242,43 L238,58 L234,58 Z" />
          <line x1="185" y1="42" x2="225" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      {/* Middle Dune Layer */}
      <motion.div
        style={{ y: dunesY }}
        animate={{
          x: mousePos.x * -0.5,
        }}
        className="absolute bottom-[10%] left-0 right-0 z-20 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 280"
          className="w-full h-auto fill-[#C65D3B]/80 dark:fill-[#1C1D3F] transition-colors duration-700"
          preserveAspectRatio="none"
        >
          <path d="M0,120 Q360,240 720,130 Q1080,20 1440,160 L1440,280 L0,280 Z" />
        </svg>
      </motion.div>

      {/* Foreground Sand Dune Layer */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg
          viewBox="0 0 1440 220"
          className="w-full h-auto fill-[#F4E3C1] dark:fill-[#12132B] transition-colors duration-700"
          preserveAspectRatio="none"
        >
          <path d="M0,80 Q420,10 840,110 Q1260,210 1440,90 L1440,220 L0,220 Z" />
        </svg>
      </div>

      {/* Center Cinematic Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-30 text-center px-4 max-w-5xl flex flex-col items-center mt-[-30px]"
      >
        {/* Rajasthani Tag badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-[#C65D3B]/30 dark:border-[#F2A900]/30 text-[#6B1E2E] dark:text-[#F2A900] mb-6 shadow-lg backdrop-blur-md"
        >
          <Sparkles size={16} className="text-[#F2A900]" />
          <span className="text-xs md:text-sm tracking-widest font-semibold uppercase">
            {isHindi ? 'पधारो म्हारे देश • अतुल्य राजस्थान' : 'PADHARO MHARE DES • INCREDIBLE RAJASTHAN'}
          </span>
        </motion.div>

        {/* Letter-by-letter Animated Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold text-[#4A121E] dark:text-[#F4E3C1] leading-[1.15] mb-6 drop-shadow-md">
          {headline.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={{ opacity: 0, y: 35, rotateX: -60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.3 + index * 0.03,
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-[#6B1E2E]/85 dark:text-[#F4E3C1]/80 max-w-2xl font-light mb-10 leading-relaxed"
        >
          {isHindi
            ? 'भव्य किलों, स्वर्ण मरुस्थल और सदियों पुरानी शाही पाक कला की अलौकिक यात्रा।'
            : 'Immerse in timeless forts, golden Thar dunes, and sensory royal banquets perfected across centuries.'}
        </motion.p>

        {/* Dual CTAs with Magnetic feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#places"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C65D3B] to-[#F2A900] text-white font-medium tracking-wide shadow-[0_10px_25px_rgba(198,93,59,0.35)] hover:shadow-[0_15px_35px_rgba(242,169,0,0.5)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
          >
            <Compass size={20} className="group-hover:rotate-45 transition-transform duration-300" />
            <span>{isHindi ? 'शाही स्थान देखें' : 'Explore Places'}</span>
          </a>

          <a
            href="#food"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass border-2 border-[#C65D3B]/40 dark:border-[#F2A900]/40 text-[#6B1E2E] dark:text-[#F4E3C1] font-medium tracking-wide hover:bg-[#C65D3B] hover:text-white dark:hover:bg-[#F2A900] dark:hover:text-[#12132B] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
          >
            <Utensils size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>{isHindi ? 'शाही स्वाद चखें' : 'Taste Rajasthan'}</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator prompt */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 opacity-75 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold text-[#6B1E2E] dark:text-[#F2A900]">
          {isHindi ? 'नीचे स्क्रॉल करें' : 'Scroll to Discover'}
        </span>
        <ChevronDown size={18} className="text-[#C65D3B] dark:text-[#F2A900]" />
      </motion.div>
    </section>
  );
};
