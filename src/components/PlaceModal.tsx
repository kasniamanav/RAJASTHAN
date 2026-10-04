import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Star, Calendar, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import type { Place } from '../data/places';
import { useLanguage } from './LanguageContext';
import { useFavorites } from './FavoritesContext';
import { OptimizedImage } from './OptimizedImage';

interface PlaceModalProps {
  place: Place | null;
  onClose: () => void;
}

export const PlaceModal = ({ place, onClose }: PlaceModalProps) => {
  const { isHindi } = useLanguage();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!place) return null;

  const allImages = [place.imageUrl, ...place.gallery];
  const isFav = isFavorite(place.id);

  const toggleFav = () => {
    if (isFav) {
      removeFavorite(place.id);
    } else {
      addFavorite({ type: 'place', data: place });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F4E3C1] dark:bg-[#12132B] text-[#6B1E2E] dark:text-[#F4E3C1] shadow-2xl border border-[#C65D3B]/30 dark:border-[#F2A900]/30 z-10 p-5 md:p-8"
        >
          {/* Close & Action Buttons */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
            <button
              onClick={toggleFav}
              className="p-2.5 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-md hover:scale-110 transition-transform shadow-md"
              title={isFav ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart size={20} className={isFav ? 'fill-rose-500 text-rose-500' : 'text-zinc-600 dark:text-zinc-300'} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-md hover:scale-110 transition-transform shadow-md"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Photo Gallery Hero */}
          <div className="space-y-4">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-[#C65D3B]/20">
              <OptimizedImage
                src={allImages[activeImageIndex]}
                alt={place.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5">
                <Star size={14} className="fill-[#F2A900] text-[#F2A900]" />
                <span>{place.rating} / 5.0</span>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-4 gap-2.5">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative h-18 sm:h-22 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === i
                      ? 'border-[#F2A900] ring-2 ring-[#F2A900]/40 scale-[1.02]'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <OptimizedImage src={img} alt={`${place.name} preview ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Place Header Info */}
          <div className="mt-6 border-b border-[#C65D3B]/20 dark:border-[#F2A900]/20 pb-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C65D3B]/15 text-[#C65D3B] dark:bg-[#F2A900]/20 dark:text-[#F2A900]">
                {isHindi ? place.categoryHi : place.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium glass flex items-center gap-1">
                <Clock size={13} />
                <span>{isHindi ? `अनुशंसित अवधि: ${place.idealDays}` : `Ideal: ${place.idealDays}`}</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium glass flex items-center gap-1">
                <Calendar size={13} />
                <span>{place.bestTime}</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-playfair font-black text-[#4A121E] dark:text-[#F4E3C1]">
              {isHindi ? place.nameHi : place.name}
            </h2>
            <p className="text-sm font-medium text-[#C65D3B] dark:text-[#F2A900] mt-0.5">
              {isHindi ? place.taglineHi : place.tagline}
            </p>
          </div>

          {/* Details Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* History & Heritage */}
            <div className="glass-card p-5 rounded-2xl">
              <h3 className="font-playfair text-lg font-bold mb-2 flex items-center gap-2 text-[#4A121E] dark:text-[#F4E3C1]">
                <span className="w-2 h-2 rounded-full bg-[#C65D3B] dark:bg-[#F2A900]" />
                {isHindi ? 'इतिहास एवं गौरव' : 'Royal History & Legacy'}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-85">
                {isHindi ? place.historyHi : place.history}
              </p>
            </div>

            {/* How to Reach */}
            <div className="glass-card p-5 rounded-2xl">
              <h3 className="font-playfair text-lg font-bold mb-2 flex items-center gap-2 text-[#4A121E] dark:text-[#F4E3C1]">
                <Navigation size={17} className="text-[#C65D3B] dark:text-[#F2A900]" />
                {isHindi ? 'कैसे पहुंचें' : 'How to Reach'}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-85">
                {isHindi ? place.howToReachHi : place.howToReach}
              </p>
            </div>
          </div>

          {/* Top 3 Things to Experience */}
          <div className="mt-6 glass-card p-5 rounded-2xl">
            <h3 className="font-playfair text-lg font-bold mb-3 text-[#4A121E] dark:text-[#F4E3C1]">
              {isHindi ? 'शीर्ष 3 अविस्मरणीय अनुभव' : 'Top 3 Signature Experiences'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(isHindi ? place.top3ThingsHi : place.top3Things).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/40 dark:bg-white/5 border border-[#C65D3B]/10"
                >
                  <CheckCircle2 size={18} className="text-[#C65D3B] dark:text-[#F2A900] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal bottom CTA */}
          <div className="mt-6 pt-4 border-t border-[#C65D3B]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs opacity-75">
              {isHindi ? 'इसे अपनी व्यक्तिगत यात्रा सूची में जोड़ें।' : 'Add this destination to your itinerary builder.'}
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={toggleFav}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-[#C65D3B]/40 dark:border-[#F2A900]/40 font-medium text-xs flex items-center justify-center gap-2 hover:bg-[#C65D3B]/10 transition-colors"
              >
                <Heart size={16} className={isFav ? 'fill-rose-500 text-rose-500' : ''} />
                <span>{isFav ? (isHindi ? 'पसंदीदा में है' : 'Saved') : (isHindi ? 'पसंद करें' : 'Save to Trip')}</span>
              </button>
              <a
                href="#planner"
                onClick={onClose}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C65D3B] to-[#F2A900] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <span>{isHindi ? 'योजना बनाएं' : 'Plan Trip Now'}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
