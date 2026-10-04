import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageContext';
import { useFavorites } from './FavoritesContext';
import { Menu, X, Sun, Moon, Heart, Languages, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, isHindi } = useLanguage();
  const { favorites, openDrawer } = useFavorites();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: isHindi ? 'स्थान' : 'Places', href: '#places' },
    { name: isHindi ? 'शाही स्वाद' : 'Royal Food', href: '#food' },
    { name: isHindi ? 'मानचित्र' : 'Map', href: '#map' },
    { name: isHindi ? 'यात्रा योजना' : 'Trip Planner', href: '#planner' },
    { name: isHindi ? 'अनुभव' : 'Experiences', href: '#experiences' },
    { name: isHindi ? 'गैलरी' : 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      {/* Marigold Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C65D3B] via-[#F2A900] to-[#0F6B6B] z-50 origin-left shadow-md"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#F4E3C1]/85 dark:bg-[#12132B]/85 backdrop-blur-xl shadow-lg border-b border-[#C65D3B]/20 dark:border-[#F2A900]/20'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Royal Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C65D3B] to-[#F2A900] text-white flex items-center justify-center font-playfair font-bold text-lg shadow-md group-hover:rotate-6 transition-transform">
              र
            </div>
            <div>
              <span className="text-xl md:text-2xl font-playfair font-black tracking-wide text-[#6B1E2E] dark:text-[#F4E3C1]">
                Rangeela<span className="text-[#C65D3B] dark:text-[#F2A900]">.</span>
              </span>
              <span className="hidden sm:block text-[9px] tracking-widest uppercase font-semibold text-[#C65D3B] dark:text-[#F2A900] -mt-1">
                Rajasthan
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs font-semibold uppercase tracking-widest text-[#6B1E2E] dark:text-[#F4E3C1]/90 hover:text-[#C65D3B] dark:hover:text-[#F2A900] transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C65D3B] to-[#F2A900] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-[#C65D3B]/30 dark:border-[#F2A900]/30 text-xs font-bold text-[#6B1E2E] dark:text-[#F4E3C1] hover:bg-[#C65D3B]/10 dark:hover:bg-[#F2A900]/10 transition-colors"
              title="Toggle English / हिन्दी"
              aria-label="Toggle Language"
            >
              <Languages size={15} className="text-[#F2A900]" />
              <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            {/* Favorites Drawer Toggle with Count Badge */}
            <button
              onClick={openDrawer}
              className="relative p-2 rounded-full glass border border-[#C65D3B]/30 dark:border-[#F2A900]/30 text-[#6B1E2E] dark:text-[#F4E3C1] hover:bg-[#C65D3B]/10 dark:hover:bg-[#F2A900]/10 transition-colors"
              title={isHindi ? 'पसंदीदा सूची' : 'Saved Favorites'}
              aria-label="Favorites"
            >
              <Heart size={18} className={favorites.length > 0 ? 'fill-rose-500 text-rose-500' : ''} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Day / Night Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass border border-[#C65D3B]/30 dark:border-[#F2A900]/30 text-[#6B1E2E] dark:text-[#F4E3C1] hover:bg-[#C65D3B]/10 dark:hover:bg-[#F2A900]/10 transition-colors"
              title={theme === 'light' ? 'Night in the Desert' : 'Day in the Desert'}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon size={18} className="text-[#6B1E2E]" />
              ) : (
                <Sun size={18} className="text-[#F2A900]" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-2 rounded-xl glass border border-[#C65D3B]/30 text-[#6B1E2E] dark:text-[#F4E3C1]"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Animated Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-50 bg-[#F4E3C1] dark:bg-[#12132B] flex flex-col justify-between p-8 text-[#6B1E2E] dark:text-[#F4E3C1] lg:hidden"
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-[#F2A900]" />
            <span className="font-playfair font-bold text-xl">Rangeela Rajasthan</span>
          </div>
          <button
            className="p-2 rounded-full glass"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 my-auto">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-3xl font-playfair font-bold hover:text-[#C65D3B] dark:hover:text-[#F2A900] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ delay: 0.08 * i }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-4 pt-6 border-t border-[#C65D3B]/20">
          <button
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass font-medium text-sm"
          >
            <Languages size={18} />
            <span>{language === 'en' ? 'हिन्दी में देखें' : 'Switch to English'}</span>
          </button>

          <button
            onClick={() => {
              toggleTheme();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass font-medium text-sm"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            <span>{theme === 'light' ? 'Night View' : 'Day View'}</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};
