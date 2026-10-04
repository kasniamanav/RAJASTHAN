import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { places } from '../data/places';
import type { Place } from '../data/places';
import { useLanguage } from './LanguageContext';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface RajasthanMapProps {
  onSelectPlace: (place: Place) => void;
}

export const RajasthanMap = ({ onSelectPlace }: RajasthanMapProps) => {
  const { isHindi } = useLanguage();
  const [hoveredPlace, setHoveredPlace] = useState<Place | null>(null);

  return (
    <div className="relative w-full rounded-3xl p-6 md:p-10 glass-card overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C65D3B] dark:text-[#F2A900]">
            {isHindi ? 'सजीव मानचित्र' : 'Interactive Cartography'}
          </span>
          <h3 className="text-2xl md:text-3xl font-playfair font-black text-[#4A121E] dark:text-[#F4E3C1]">
            {isHindi ? 'राजस्थान का शाही नक्शा' : 'The Royal Map of Rajasthan'}
          </h3>
          <p className="text-xs md:text-sm opacity-75 mt-1">
            {isHindi ? 'शहर के पिन पर क्लिक करके विवरण देखें।' : 'Hover or click the golden pins to inspect heritage citadels.'}
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-[16/10] max-h-[520px] bg-gradient-to-br from-amber-500/5 via-amber-700/5 to-rose-900/10 rounded-2xl border border-[#C65D3B]/20 overflow-hidden flex items-center justify-center">
        {/* Stylized Rajasthan boundary SVG */}
        <svg
          viewBox="0 0 800 650"
          className="w-full h-full p-4 stroke-[#C65D3B]/40 dark:stroke-[#F2A900]/40 fill-[#F4E3C1]/30 dark:fill-[#1E2042]/50 drop-shadow-xl"
        >
          {/* Desert contour lines */}
          <path
            d="M 120,240 Q 280,180 440,260 T 700,220"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="opacity-40"
          />
          <path
            d="M 80,360 Q 240,320 400,380 T 720,340"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="opacity-30"
          />

          {/* Stylized state outline of Rajasthan */}
          <polygon
            points="
              320,40  460,80  560,110  680,180  740,280 
              710,380 640,460 560,540  480,620  380,590 
              280,560 180,480 100,410  60,320   120,220 
              200,140 260,80
            "
            strokeWidth="3"
            strokeLinejoin="round"
            className="transition-all duration-700"
          />

          {/* Aravalli Mountain Range line representation */}
          <path
            d="M 240,560 L 350,440 L 460,330 L 580,210"
            fill="none"
            stroke="#C65D3B"
            strokeWidth="3"
            strokeDasharray="6 4"
            className="opacity-50"
          />
        </svg>

        {/* Pulsing City Pins */}
        {places.map((place) => {
          const isHovered = hoveredPlace?.id === place.id;
          return (
            <div
              key={place.id}
              style={{
                left: `${place.coords.x}%`,
                top: `${place.coords.y}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
              onMouseEnter={() => setHoveredPlace(place)}
              onClick={() => onSelectPlace(place)}
            >
              {/* Pulsing ring */}
              <div className="relative flex items-center justify-center cursor-pointer">
                <span className="absolute w-8 h-8 rounded-full bg-[#F2A900] opacity-40 animate-ping" />
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 shadow-lg ${
                    isHovered
                      ? 'scale-125 bg-[#C65D3B] text-white ring-4 ring-[#F2A900]'
                      : 'bg-[#F2A900] text-[#12132B]'
                  }`}
                >
                  <MapPin size={13} className="fill-current" />
                </div>

                {/* City name label always visible */}
                <span className="absolute top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md text-[10px] md:text-xs font-bold whitespace-nowrap bg-black/75 text-white backdrop-blur-sm pointer-events-none shadow">
                  {isHindi ? place.nameHi : place.name}
                </span>
              </div>
            </div>
          );
        })}

        {/* Hover / Click Pin Preview Card */}
        <AnimatePresence>
          {hoveredPlace && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-4 right-4 z-30 w-72 rounded-2xl p-3 glass-card shadow-2xl border border-[#F2A900]/40 backdrop-blur-xl"
            >
              <div className="relative h-28 w-full rounded-xl overflow-hidden mb-2">
                <OptimizedImage
                  src={hoveredPlace.imageUrl}
                  alt={hoveredPlace.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-bold flex items-center gap-1">
                  <Star size={11} className="fill-[#F2A900] text-[#F2A900]" />
                  <span>{hoveredPlace.rating}</span>
                </div>
              </div>
              <div className="px-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#C65D3B] dark:text-[#F2A900]">
                  {isHindi ? hoveredPlace.categoryHi : hoveredPlace.category}
                </div>
                <h4 className="font-playfair font-bold text-base text-[#4A121E] dark:text-[#F4E3C1]">
                  {isHindi ? hoveredPlace.nameHi : hoveredPlace.name}
                </h4>
                <p className="text-xs opacity-75 line-clamp-1 mb-3">
                  {isHindi ? hoveredPlace.taglineHi : hoveredPlace.tagline}
                </p>
                <button
                  onClick={() => onSelectPlace(hoveredPlace)}
                  className="w-full py-1.5 rounded-lg bg-gradient-to-r from-[#C65D3B] to-[#F2A900] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow"
                >
                  <span>{isHindi ? 'पूरा विवरण देखें' : 'View Fortress Guide'}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
