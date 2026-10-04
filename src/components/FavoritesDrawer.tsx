import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, MapPin, Utensils, Heart } from 'lucide-react';
import { useFavorites } from './FavoritesContext';
import { useLanguage } from './LanguageContext';
import { OptimizedImage } from './OptimizedImage';

export const FavoritesDrawer = () => {
  const { favorites, removeFavorite, isDrawerOpen, closeDrawer } = useFavorites();
  const { isHindi } = useLanguage();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md z-50 bg-[#F4E3C1] dark:bg-[#12132B] text-[#6B1E2E] dark:text-[#F4E3C1] shadow-2xl flex flex-col border-l border-[#C65D3B]/20 dark:border-[#F2A900]/20"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#C65D3B]/20 dark:border-[#F2A900]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C65D3B]/10 dark:bg-[#F2A900]/20 flex items-center justify-center text-[#C65D3B] dark:text-[#F2A900]">
                  <Heart size={22} className="fill-current" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold">
                    {isHindi ? 'आपकी पसंदीदा सूची' : 'Your Royal Favorites'}
                  </h3>
                  <p className="text-xs opacity-75">
                    {favorites.length} {isHindi ? 'सहेजी गई वस्तुएं' : 'items saved'}
                  </p>
                </div>
              </div>
              <button
                onClick={closeDrawer}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Close Drawer"
              >
                <X size={22} />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {favorites.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-70">
                  <Heart size={48} className="stroke-[1.5] mb-4 text-[#C65D3B] dark:text-[#F2A900]" />
                  <p className="font-playfair text-lg font-medium">
                    {isHindi ? 'अभी कोई पसंदीदा नहीं' : 'No favorites saved yet'}
                  </p>
                  <p className="text-xs mt-2 max-w-xs">
                    {isHindi
                      ? 'स्थानों और व्यंजनों पर दिल के निशान पर क्लिक करके उन्हें यहाँ सहेजें।'
                      : 'Click the heart icon on any place or royal dish to curate your dream Rajasthan journey.'}
                  </p>
                </div>
              ) : (
                favorites.map((item) => (
                  <motion.div
                    key={item.data.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="flex items-center gap-4 p-3 rounded-2xl glass-card relative group hover:border-[#F2A900]/50 transition-all"
                  >
                    <div className="w-18 h-18 rounded-xl overflow-hidden shrink-0">
                      <OptimizedImage
                        src={item.data.imageUrl}
                        alt={item.data.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-xs text-[#C65D3B] dark:text-[#F2A900] font-medium mb-1">
                        {item.type === 'place' ? (
                          <>
                            <MapPin size={13} />
                            <span>{isHindi ? item.data.categoryHi : item.data.category}</span>
                          </>
                        ) : (
                          <>
                            <Utensils size={13} />
                            <span>{isHindi ? item.data.typeHi : item.data.type}</span>
                          </>
                        )}
                      </div>
                      <h4 className="font-playfair font-bold text-base truncate">
                        {isHindi ? item.data.nameHi : item.data.name}
                      </h4>
                      <p className="text-xs opacity-70 truncate">
                        {item.type === 'place'
                          ? isHindi ? item.data.taglineHi : item.data.tagline
                          : isHindi ? `सर्वश्रेष्ठ: ${item.data.bestCityHi}` : `Best in: ${item.data.bestCity}`}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFavorite(item.data.id)}
                      className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
                      title={isHindi ? 'हटाएं' : 'Remove'}
                      aria-label="Remove favorite"
                    >
                      <Trash2 size={16} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer action */}
            {favorites.length > 0 && (
              <div className="p-6 border-t border-[#C65D3B]/20 dark:border-[#F2A900]/20 bg-white/20 dark:bg-black/20">
                <a
                  href="#planner"
                  onClick={closeDrawer}
                  className="w-full py-3.5 bg-gradient-to-r from-[#C65D3B] to-[#F2A900] text-white rounded-xl font-medium tracking-wide shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>{isHindi ? 'इस सूची से यात्रा बनाएं' : 'Plan Trip with Favorites'}</span>
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
