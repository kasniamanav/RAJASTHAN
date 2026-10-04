import { useState } from 'react';
import { motion } from 'framer-motion';
import { places } from '../data/places';
import type { Place, PlaceCategory } from '../data/places';
import { useLanguage } from './LanguageContext';
import { useFavorites } from './FavoritesContext';
import { PlaceModal } from './PlaceModal';
import { RajasthanMap } from './RajasthanMap';
import { OptimizedImage } from './OptimizedImage';
import { Star, Clock, Heart, ArrowUpRight, Sparkles } from 'lucide-react';

export const PlacesSection = () => {
  const { isHindi } = useLanguage();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePlace, setActivePlace] = useState<Place | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(places[0].id);

  const categories: { key: string; labelEn: string; labelHi: string }[] = [
    { key: 'All', labelEn: 'All Realms', labelHi: 'सभी स्थान' },
    { key: 'Fort', labelEn: 'Forts & Citadels', labelHi: 'अभेद्य किले' },
    { key: 'Palace', labelEn: 'Royal Palaces', labelHi: 'भव्य महल' },
    { key: 'Desert', labelEn: 'Thar Desert', labelHi: 'थार मरुस्थल' },
    { key: 'Lake', labelEn: 'Lakes & Oases', labelHi: 'पवित्र झीलें' },
    { key: 'Temple', labelEn: 'Sacred Temples', labelHi: 'प्राचीन मंदिर' },
  ];

  const filteredPlaces =
    selectedCategory === 'All'
      ? places
      : places.filter((p) => p.category === (selectedCategory as PlaceCategory));

  const handleFavoriteToggle = (e: React.MouseEvent, place: Place) => {
    e.stopPropagation();
    if (isFavorite(place.id)) {
      removeFavorite(place.id);
    } else {
      addFavorite({ type: 'place', data: place });
    }
  };

  return (
    <section id="places" className="relative py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#C65D3B]/30 dark:border-[#F2A900]/30 text-xs font-bold uppercase tracking-widest text-[#C65D3B] dark:text-[#F2A900] mb-4"
        >
          <Sparkles size={14} />
          <span>{isHindi ? 'शाही धरोहर' : 'ROYAL HERITAGE'}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-playfair font-black text-[#4A121E] dark:text-[#F4E3C1] mb-5"
        >
          {isHindi ? 'राजस्थान के सर्वश्रेष्ठ स्थान' : 'Crown Jewels of Rajasthan'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base opacity-80 font-light leading-relaxed"
        >
          {isHindi
            ? 'गुलाबी इमारतों से लेकर सुनहरे टीलों और शांत झीलों तक, हर शहर की अपनी वीरगाथा है।'
            : 'From sun-drenched pink stone facades to whispering golden dunes and sapphire lakes.'}
        </motion.p>
      </div>

      {/* Filter Chips with Animated Layout Indicator */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isSelected
                  ? 'text-white'
                  : 'text-[#6B1E2E] dark:text-[#F4E3C1] glass hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activePlaceFilter"
                  className="absolute inset-0 bg-gradient-to-r from-[#C65D3B] to-[#F2A900] rounded-full shadow-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{isHindi ? cat.labelHi : cat.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Expanding Accordion Gallery (Desktop) / Fluid Cards (Mobile) */}
      <div className="hidden lg:flex gap-3 h-[520px] w-full mb-16">
        {filteredPlaces.map((place) => {
          const isHovered = hoveredCardId === place.id;
          const isFav = isFavorite(place.id);

          return (
            <motion.div
              key={place.id}
              layout
              onMouseEnter={() => setHoveredCardId(place.id)}
              onClick={() => setActivePlace(place)}
              className={`relative h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border border-[#C65D3B]/20 dark:border-[#F2A900]/20 shadow-xl ${
                isHovered ? 'flex-[4]' : 'flex-[1]'
              }`}
            >
              {/* Background Picture with OptimizedImage */}
              <OptimizedImage
                src={place.imageUrl}
                alt={place.name}
                containerClassName="absolute inset-0 w-full h-full"
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
              />

              {/* Gradient Darkening Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity" />

              {/* Heart Favorite Button */}
              <button
                onClick={(e) => handleFavoriteToggle(e, place)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 backdrop-blur-md hover:scale-110 text-white transition-all"
                title={isFav ? 'Remove Favorite' : 'Save Favorite'}
              >
                <Heart size={18} className={isFav ? 'fill-rose-500 text-rose-500' : 'text-white'} />
              </button>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/50 text-[#F2A900] backdrop-blur-md border border-[#F2A900]/30">
                  {isHindi ? place.categoryHi : place.category}
                </span>
              </div>

              {/* Bottom Content Container */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white flex flex-col justify-end">
                {/* Rotated Name for Collapsed State */}
                {!isHovered && (
                  <div className="h-full flex items-center justify-center">
                    <span className="text-xl font-playfair font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 drop-shadow-lg">
                      {isHindi ? place.nameHi : place.name}
                    </span>
                  </div>
                )}

                {/* Expanded Details */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-[#F2A900] text-xs font-bold bg-black/40 px-2.5 py-1 rounded-full">
                        <Star size={13} className="fill-[#F2A900]" />
                        <span>{place.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/90 text-xs font-medium bg-black/40 px-2.5 py-1 rounded-full">
                        <Clock size={13} />
                        <span>{place.idealDays}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-playfair font-black text-white leading-tight">
                      {isHindi ? place.nameHi : place.name}
                    </h3>

                    <p className="text-sm text-white/80 line-clamp-2 font-light">
                      {isHindi ? place.taglineHi : place.tagline}
                    </p>

                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F2A900] group-hover:underline">
                        <span>{isHindi ? 'विस्तार से पढ़ें' : 'Explore Citadel'}</span>
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile / Tablet Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden mb-16">
        {filteredPlaces.map((place) => {
          const isFav = isFavorite(place.id);
          return (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setActivePlace(place)}
              className="relative h-80 rounded-3xl overflow-hidden shadow-xl border border-[#C65D3B]/20"
            >
              <OptimizedImage
                src={place.imageUrl}
                alt={place.name}
                containerClassName="absolute inset-0 w-full h-full"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <button
                onClick={(e) => handleFavoriteToggle(e, place)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white"
              >
                <Heart size={18} className={isFav ? 'fill-rose-500 text-rose-500' : ''} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F2A900] text-black mb-2 inline-block">
                  {isHindi ? place.categoryHi : place.category}
                </span>
                <h3 className="text-2xl font-playfair font-bold text-white mb-1">
                  {isHindi ? place.nameHi : place.name}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mb-2">
                  {isHindi ? place.taglineHi : place.tagline}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#F2A900]">
                  <span className="flex items-center gap-1 font-bold">
                    <Star size={12} className="fill-[#F2A900]" /> {place.rating}
                  </span>
                  <span>•</span>
                  <span>{place.idealDays}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Rajasthan Map Component */}
      <RajasthanMap onSelectPlace={(place) => setActivePlace(place)} />

      {/* Fullscreen Place Modal */}
      <PlaceModal place={activePlace} onClose={() => setActivePlace(null)} />
    </section>
  );
};
