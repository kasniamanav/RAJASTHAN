import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { OptimizedImage } from './OptimizedImage';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  titleEn: string;
  titleHi: string;
  locationEn: string;
  locationHi: string;
  imageUrl: string;
  span: string; // for masonry grid
}

export const GallerySection = () => {
  const { isHindi } = useLanguage();
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      titleEn: 'Amber Fort Elephant Ramparts',
      titleHi: 'आमेर किले के हाथी प्राचीर',
      locationEn: 'Jaipur',
      locationHi: 'जयपुर',
      imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&auto=format&fit=crop&q=80',
      span: 'row-span-2 col-span-1 md:col-span-2',
    },
    {
      id: 'g2',
      titleEn: 'Taj Lake Palace Shimmer',
      titleHi: 'लेक पैलेस की सफेद आभा',
      locationEn: 'Lake Pichola, Udaipur',
      locationHi: 'पिछोला झील, उदयपुर',
      imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80',
      span: 'row-span-1 col-span-1',
    },
    {
      id: 'g3',
      titleEn: 'Blue Alleys & Mehrangarh',
      titleHi: 'नीली गलियां एवं मेहरानगढ़',
      locationEn: 'Brahmapuri, Jodhpur',
      locationHi: 'ब्रह्मपुरी, जोधपुर',
      imageUrl: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&auto=format&fit=crop&q=80',
      span: 'row-span-1 col-span-1',
    },
    {
      id: 'g4',
      titleEn: 'Caravan on Sam Dunes',
      titleHi: 'थार मरुस्थल का ऊंट काफिला',
      locationEn: 'Thar Desert, Jaisalmer',
      locationHi: 'थार, जैसलमेर',
      imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&auto=format&fit=crop&q=80',
      span: 'row-span-2 col-span-1 md:col-span-2',
    },
    {
      id: 'g5',
      titleEn: 'Pushkar Sacred Ghat Aarti',
      titleHi: 'पुष्कर सरोवर संध्या आरती',
      locationEn: 'Pushkar Lake',
      locationHi: 'पुष्कर सरोवर',
      imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=80',
      span: 'row-span-1 col-span-1',
    },
    {
      id: 'g6',
      titleEn: 'Chittor Vijay Stambha Splendor',
      titleHi: 'चित्तौड़गढ़ विजय स्तम्भ',
      locationEn: 'Chittorgarh',
      locationHi: 'चित्तौड़गढ़',
      imageUrl: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=1200&auto=format&fit=crop&q=80',
      span: 'row-span-1 col-span-1',
    },
  ];

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [activePhotoIndex, galleryItems.length]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % galleryItems.length);
    }
  }, [activePhotoIndex, galleryItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#C65D3B]/30 dark:border-[#F2A900]/30 text-xs font-bold uppercase tracking-widest text-[#C65D3B] dark:text-[#F2A900] mb-4"
        >
          <Camera size={14} />
          <span>{isHindi ? 'शाही दृश्यमाला' : 'LENS OF ROYALS'}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-playfair font-black text-[#4A121E] dark:text-[#F4E3C1] mb-5"
        >
          {isHindi ? 'रंगीलो राजस्थान छायाचित्र गैलरी' : 'The Visual Tapestry'}
        </motion.h2>

        <p className="text-sm sm:text-base opacity-80 font-light leading-relaxed">
          {isHindi
            ? 'राजस्थान के स्वर्णिम प्रकाश, स्थापत्य कला और जीवंत रंगों का विहंगम दृश्य।'
            : 'Gilded sunsets, hand-carved stone filigree, and eternal desert silence captured in high definition.'}
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-4">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            onClick={() => setActivePhotoIndex(idx)}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-[#C65D3B]/20 ${item.span}`}
          >
            <OptimizedImage
              src={item.imageUrl}
              alt={item.titleEn}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Hover overlay with Jharokha framing vibe */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={16} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F2A900] flex items-center gap-1 mb-1">
                <Sparkles size={12} />
                <span>{isHindi ? item.locationHi : item.locationEn}</span>
              </span>
              <h3 className="text-lg md:text-xl font-playfair font-bold">
                {isHindi ? item.titleHi : item.titleEn}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-between p-4 md:p-8"
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between z-10 text-white">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-wider text-[#F2A900]">
                  {activePhotoIndex + 1} / {galleryItems.length}
                </span>
                <span className="opacity-40">•</span>
                <span className="text-sm opacity-80">
                  {isHindi
                    ? galleryItems[activePhotoIndex].locationHi
                    : galleryItems[activePhotoIndex].locationEn}
                </span>
              </div>
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Center Image */}
            <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center my-auto">
              <motion.div
                key={activePhotoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <OptimizedImage
                  src={galleryItems[activePhotoIndex].imageUrl}
                  alt={galleryItems[activePhotoIndex].titleEn}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Prev & Next Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Previous Photo"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Next Photo"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center z-10 text-white pb-2">
              <h3 className="text-xl md:text-2xl font-playfair font-bold">
                {isHindi
                  ? galleryItems[activePhotoIndex].titleHi
                  : galleryItems[activePhotoIndex].titleEn}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
