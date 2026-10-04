import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { foods } from '../data/foods';
import type { Food, FoodType } from '../data/foods';
import { useLanguage } from './LanguageContext';
import { useFavorites } from './FavoritesContext';
import { OptimizedImage } from './OptimizedImage';
import { Flame, MapPin, Heart, Sparkles, ChefHat, RotateCcw } from 'lucide-react';

export const FoodSection = () => {
  const { isHindi } = useLanguage();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedFood, setSelectedFood] = useState<Food>(foods[0]);
  // Raw accumulated rotation angle (unbounded, so spring can track smoothly)
  const [targetAngle, setTargetAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const idleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Framer spring for the outer rim only (low stiffness = fluid glide)
  const springAngle = useSpring(targetAngle, { stiffness: 30, damping: 12, mass: 1 });
  // Convert spring value to CSS rotate for the rim
  const rimRotate = useTransform(springAngle, (v) => `rotate(${v}deg)`);

  // Idle auto-spin: advances by 0.1 deg every 30ms when not hovered
  useEffect(() => {
    idleRef.current = setInterval(() => {
      if (!isHovered) {
        setTargetAngle((prev) => prev + 0.12);
      }
    }, 30);
    return () => {
      if (idleRef.current) clearInterval(idleRef.current);
    };
  }, [isHovered]);

  const tabs: { key: string; labelEn: string; labelHi: string }[] = [
    { key: 'All', labelEn: 'All Royal Feasts', labelHi: 'सभी व्यंजन' },
    { key: 'Savory', labelEn: 'Royal Savory', labelHi: 'शाही नमकीन' },
    { key: 'Sweet', labelEn: 'Heritage Sweets', labelHi: 'पारंपरिक मिठाई' },
    { key: 'Street', labelEn: 'Street Delights', labelHi: 'स्ट्रीट स्वाद' },
  ];

  const filteredFoods =
    selectedType === 'All'
      ? foods
      : foods.filter((f) => f.type === (selectedType as FoodType));

  // Thali shows dishes from current filter (max 8). Reset selectedFood if it disappears.
  const thaliDishes = (filteredFoods.length > 0 ? filteredFoods : foods).slice(0, 8);

  // If the currently-selected food is not in thaliDishes, switch to the first one
  const displayFood = thaliDishes.find((d) => d.id === selectedFood.id) ?? thaliDishes[0];

  // When user clicks a dish: rotate the rim to bring that dish to the top (270° = 12 o'clock)
  // Each dish is placed at angle = idx * (360/8) degrees
  // We want that dish's angle to map to 270° (top), so:
  //   targetAngle = currentMultiple * 360 + (270 - dishAngle)
  // We use the current spring value rounded to the nearest full rotation.
  const handleSelectThaliDish = (food: Food, idx: number) => {
    setSelectedFood(food);
    const dishAngle = (idx * 360) / thaliDishes.length; // 0, 45, 90, …
    const current = springAngle.get();
    const fullRotations = Math.floor(current / 360);
    // Desired absolute angle so this dish sits at top (270°)
    let desired = fullRotations * 360 + (270 - dishAngle);
    // If desired is more than 180° behind current, add a full turn to go forward
    if (desired - current < -180) desired += 360;
    if (desired - current > 180) desired -= 360;
    setTargetAngle(desired);
  };

  const handleFavoriteToggle = (food: Food) => {
    if (isFavorite(food.id)) {
      removeFavorite(food.id);
    } else {
      addFavorite({ type: 'food', data: food });
    }
  };

  const isFav = isFavorite(displayFood?.id ?? selectedFood.id);

  return (
    <section id="food" className="relative py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#C65D3B]/30 dark:border-[#F2A900]/30 text-xs font-bold uppercase tracking-widest text-[#C65D3B] dark:text-[#F2A900] mb-4"
        >
          <ChefHat size={15} />
          <span>{isHindi ? 'राजपूताना रसोई' : 'ROYAL GASTRONOMY'}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-playfair font-black text-[#4A121E] dark:text-[#F4E3C1] mb-5"
        >
          {isHindi ? 'शाही थाली का अनूठा स्वाद' : 'The Legendary Royal Thali'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base opacity-80 font-light leading-relaxed"
        >
          {isHindi
            ? 'शुद्ध देसी घी, मथानिया मिर्च और सदियों पुरानी शाही पाक शैलियों से सजी थाली।'
            : 'Rich desi ghee, Mathania chillies, and age-old royal recipes born in desert hearths.'}
        </motion.p>
      </div>

      {/* Food Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
        {tabs.map((tab) => {
          const isSelected = selectedType === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => {
                setSelectedType(tab.key);
                // When tab changes, reset thali to first dish of new filter
                const next = tab.key === 'All'
                  ? foods
                  : foods.filter((f) => f.type === tab.key as FoodType);
                if (next.length > 0) setSelectedFood(next[0]);
              }}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                isSelected
                  ? 'text-white border-transparent'
                  : 'text-[#4A121E] dark:text-[#F4E3C1] bg-white/60 dark:bg-white/10 border-[#C65D3B]/40 dark:border-[#F2A900]/30 hover:bg-[#C65D3B]/10 dark:hover:bg-[#F2A900]/10'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeFoodFilter"
                  className="absolute inset-0 bg-gradient-to-r from-[#C65D3B] to-[#F2A900] rounded-full shadow-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{isHindi ? tab.labelHi : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Royal Thali Interactive Experience (Desktop & Tablet) */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-center glass-card p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
        {/* Floating Steam & Spice Particles Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#F2A900]/40 blur-[1px]"
              style={{
                left: `${20 + i * 12}%`,
                bottom: '10%',
              }}
              animate={{
                y: [-20, -180],
                x: [0, (i % 2 === 0 ? 30 : -30)],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.8],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.7,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Left Side: Royal Thali — rim rotates, bowls stay fixed in place */}
        <div className="col-span-6 flex flex-col items-center justify-center relative py-6">
          <div
            className="relative w-[440px] h-[440px] flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* ── Rotating Decorative Rim Only ── */}
            <motion.div
              style={{ rotate: rimRotate }}
              className="absolute inset-0 rounded-full border-[14px] border-[#D4AF37]/60
                         shadow-[0_20px_60px_rgba(212,175,55,0.3)]
                         bg-gradient-to-br from-[#8C6D28] via-[#C9A84C] to-[#6E5318]"
            />

            {/* ── Static Dark Plate Surface (does NOT rotate) ── */}
            <div className="absolute inset-[14px] rounded-full
                            bg-gradient-to-tr from-[#3D2C12] via-[#5C451D] to-[#2E200C]
                            border-4 border-[#FFD700]/25
                            shadow-inner flex items-center justify-center">

              {/* Center Royal Seal */}
              <div className="w-24 h-24 rounded-full border-2 border-[#FFD700]/50
                              bg-[#12132B]/70 backdrop-blur-md
                              flex flex-col items-center justify-center text-center p-2 z-10 relative">
                <Sparkles size={16} className="text-[#FFD700]" />
                <span className="text-[10px] font-playfair font-black text-[#FFD700] uppercase tracking-wider mt-1">
                  राजपूताना
                </span>
                <span className="text-[8px] text-white/70">Royal Feast</span>
              </div>

              {/* ── Bowl Images fixed in screen space (no rotation) ── */}
              {thaliDishes.map((dish, idx) => {
                // Each bowl is positioned at a fixed angle; only the rim rotates
                const angleDeg = (idx * 360) / thaliDishes.length - 90; // start at top
                const radius = 148; // px from center of the 440px plate
                const rad = (angleDeg * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                const isDishActive = selectedFood.id === dish.id;

                return (
                  <motion.button
                    key={dish.id}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      translateX: '-50%',
                      translateY: '-50%',
                    }}
                    whileHover={{ scale: 1.18, zIndex: 20 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => handleSelectThaliDish(dish, idx)}
                    className={`w-[78px] h-[78px] rounded-full overflow-hidden shadow-2xl
                                outline-none transition-all duration-300 border-[3px] ${
                      isDishActive
                        ? 'border-[#FFD700] ring-4 ring-[#FFD700]/50'
                        : 'border-[#B8973D]/70 opacity-85 hover:opacity-100'
                    }`}
                    title={isHindi ? dish.nameHi : dish.name}
                    aria-label={`Select ${dish.name}`}
                  >
                    <OptimizedImage
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    {/* Active glow pulse */}
                    {isDishActive && (
                      <motion.span
                        className="absolute inset-0 rounded-full ring-4 ring-[#FFD700]"
                        animate={{ opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold opacity-75">
            <RotateCcw size={14} className="text-[#F2A900]" />
            <span>
              {isHindi ? 'थाली की कटोरी पर क्लिक करके स्वाद परखें' : 'Click any bowl on the plate to savor its royal story'}
            </span>
          </div>
        </div>

        {/* Right Side: Zoomed-in Story, Ingredients & Animated Chili Spice Meter */}
        <div className="col-span-6 pl-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayFood.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4 }}
              className="space-y-5"
            >
              {/* Badges & Favorite button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C65D3B]/15 text-[#C65D3B] dark:bg-[#F2A900]/20 dark:text-[#F2A900]">
                    {isHindi ? displayFood.typeHi : displayFood.type}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold glass flex items-center gap-1.5 text-[#C65D3B] dark:text-[#F2A900]">
                    <MapPin size={13} />
                    <span>{isHindi ? `प्रसिद्ध: ${displayFood.bestCityHi}` : `Best in: ${displayFood.bestCity}`}</span>
                  </span>
                </div>

                <button
                  onClick={() => handleFavoriteToggle(displayFood)}
                  className="p-2.5 rounded-full glass border border-[#C65D3B]/30 hover:scale-110 transition-transform"
                  title={isFav ? 'Remove Favorite' : 'Save Favorite'}
                >
                  <Heart size={20} className={isFav ? 'fill-rose-500 text-rose-500' : ''} />
                </button>
              </div>

              {/* Dish Name */}
              <div>
                <h3 className="text-3xl md:text-4xl font-playfair font-black text-[#4A121E] dark:text-[#F4E3C1]">
                  {isHindi ? displayFood.nameHi : displayFood.name}
                </h3>
              </div>

              {/* High-res Featured Dish Image */}
              <div className="relative h-52 w-full rounded-2xl overflow-hidden shadow-lg border border-[#C65D3B]/20">
                <OptimizedImage
                  src={displayFood.imageUrl}
                  alt={displayFood.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Story */}
              <p className="text-sm md:text-base leading-relaxed opacity-90 font-light">
                {isHindi ? displayFood.storyHi : displayFood.story}
              </p>

              {/* Animated Chili Spice Level Meter */}
              <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-[#C65D3B]/15">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-[#C65D3B] dark:text-[#F2A900]">
                    <Flame size={15} />
                    {isHindi ? 'तीखापन (मसाला स्तर)' : 'Spice & Mathania Heat Level'}
                  </span>
                  <span className="text-xs font-bold">
                    {displayFood.spiceLevel === 0
                      ? isHindi ? 'मधुर / मीठा' : 'Sweet / Mild'
                      : `${displayFood.spiceLevel} / 5`}
                  </span>
                </div>

                {/* Animated Chilies */}
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((level) => {
                    const isLit = level <= displayFood.spiceLevel;
                    return (
                      <motion.div
                        key={level}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: isLit ? [1, 1.25, 1] : 0.8 }}
                        transition={{ duration: 0.3, delay: level * 0.08 }}
                        className={`h-4 flex-1 rounded-full transition-all duration-500 ${
                          isLit
                            ? level >= 4
                              ? 'bg-gradient-to-r from-orange-500 to-rose-600 shadow-[0_0_10px_rgba(225,29,72,0.6)]'
                              : 'bg-gradient-to-r from-amber-400 to-orange-500'
                            : 'bg-zinc-300 dark:bg-zinc-700/50'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Ingredients Chips */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider block mb-2 opacity-75">
                  {isHindi ? 'शाही सामग्री' : 'Royal Ingredients'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {(isHindi ? displayFood.ingredientsHi : displayFood.ingredients).map((ing, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium glass border border-[#C65D3B]/20"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile & Tablet: 3D Tilt Cards Grid for All Foods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
        {filteredFoods.map((food) => {
          const isFav = isFavorite(food.id);
          return (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl overflow-hidden shadow-xl border border-[#C65D3B]/20 p-4 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
                  <OptimizedImage
                    src={food.imageUrl}
                    alt={food.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleFavoriteToggle(food)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white"
                  >
                    <Heart size={16} className={isFav ? 'fill-rose-500 text-rose-500' : ''} />
                  </button>
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F2A900] text-black">
                    {isHindi ? food.typeHi : food.type}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#C65D3B] dark:text-[#F2A900] font-medium mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {isHindi ? food.bestCityHi : food.bestCity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame size={12} /> {food.spiceLevel}/5
                  </span>
                </div>

                <h3 className="text-xl font-playfair font-bold text-[#4A121E] dark:text-[#F4E3C1] mb-2">
                  {isHindi ? food.nameHi : food.name}
                </h3>
                <p className="text-xs opacity-80 line-clamp-3 mb-4 font-light">
                  {isHindi ? food.storyHi : food.story}
                </p>
              </div>

              <div className="pt-2 border-t border-[#C65D3B]/10 flex flex-wrap gap-1.5">
                {(isHindi ? food.ingredientsHi : food.ingredients).slice(0, 3).map((item, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[10px] glass">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
