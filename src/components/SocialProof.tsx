import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  roleEn: string;
  roleHi: string;
  quoteEn: string;
  quoteHi: string;
  placeEn: string;
  placeHi: string;
  rating: number;
}

export const SocialProof = () => {
  const { isHindi } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Aditi Mukherjee',
      roleEn: 'Heritage Architecture Historian',
      roleHi: 'धरोहर वास्तुकार एवं इतिहासकार',
      quoteEn:
        'Standing atop Mehrangarh Fort as the evening azan mingled with temple bells over Jodhpur’s blue roofs was a spiritual awakening. Rajasthan’s palaces possess souls.',
      quoteHi:
        'मेहरानगढ़ की प्राचीर से जब शाम की आरती और अजान की गूंज नीले घरों पर फैली, तो रूह खिल उठी। राजस्थान के महलों में एक जीवंत आत्मा बसती है।',
      placeEn: 'Jodhpur Citadel',
      placeHi: 'जोधपुर दुर्ग',
      rating: 5,
    },
    {
      id: '2',
      name: 'Julian & Claire Vance',
      roleEn: 'Culinary Travel Authors, London',
      roleHi: 'अंतर्राष्ट्रीय पाक कला लेखक, लंदन',
      quoteEn:
        'The authentic Dal Baati Churma soaked in village churned ghee, followed by fiery Laal Maas in Jodhpur, is the pinnacle of global gastronomy. Absolutely unforgettable!',
      quoteHi:
        'शुद्ध देसी घी में डूबी दाल बाटी और तीखे मथानिया लाल मांस का स्वाद दुनिया के किसी भी कोने में नहीं मिल सकता। यह पाक कला का सर्वोच्च शिखर है!',
      placeEn: 'Chokhi Dhani, Jaipur',
      placeHi: 'जयपुर चौखी ढाणी',
      rating: 5,
    },
    {
      id: '3',
      name: 'Dr. Vikramaditya Rathore',
      roleEn: 'Wildlife & Desert Conservationist',
      roleHi: 'वन्यजीव एवं मरुस्थल संरक्षक',
      quoteEn:
        'A night in the Sam dunes beneath the Milky Way with Kalbelia singers by the fire is a memory etched in gold. You don’t just visit Rajasthan, it stays in your blood.',
      quoteHi:
        'तारों भरी रात में सुनहरे टीलों पर लोक गायकों के तराने सुनना जीवन का सबसे जादुई पल है। राजस्थान सिर्फ देखा नहीं जाता, यह दिल में बस जाता है।',
      placeEn: 'Sam Sand Dunes, Jaisalmer',
      placeHi: 'सैम सैंड ड्यून्स, जैसलमेर',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-20 px-4 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#C65D3B]/30 text-xs font-bold uppercase tracking-widest text-[#C65D3B] dark:text-[#F2A900] mb-3">
          <Sparkles size={14} />
          <span>{isHindi ? 'यात्रियों के संस्मरण' : 'VOICES OF TRAVELERS'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-black text-[#4A121E] dark:text-[#F4E3C1]">
          {isHindi ? 'राजपूताना की अनमोल स्मृतियां' : 'Echoes of Wonder'}
        </h2>
      </div>

      {/* 3D Rotating Carousel Card */}
      <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-[#C65D3B]/20 shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
        <Quote
          size={80}
          className="absolute -top-4 -left-4 text-[#C65D3B]/10 dark:text-[#F2A900]/10 pointer-events-none"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, rotateY: 40, scale: 0.95 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -40, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* 5 Golden Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#F2A900] text-[#F2A900]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-playfair text-lg sm:text-2xl md:text-3xl text-[#4A121E] dark:text-[#F4E3C1] italic leading-snug">
              "{isHindi ? current.quoteHi : current.quoteEn}"
            </p>

            {/* Author details */}
            <div className="pt-4 border-t border-[#C65D3B]/15 flex items-center justify-between">
              <div>
                <h4 className="font-playfair font-black text-base sm:text-lg text-[#6B1E2E] dark:text-[#F2A900]">
                  {current.name}
                </h4>
                <p className="text-xs opacity-75">
                  {isHindi ? current.roleHi : current.roleEn} •{' '}
                  <span className="text-[#C65D3B] dark:text-[#F2A900] font-semibold">
                    {isHindi ? current.placeHi : current.placeEn}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-end gap-3 mt-6 pt-2">
          <button
            onClick={prevTestimonial}
            className="p-2.5 rounded-full glass hover:bg-[#C65D3B]/10 dark:hover:bg-[#F2A900]/20 transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-6 bg-[#F2A900]' : 'w-2 bg-zinc-400/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-2.5 rounded-full glass hover:bg-[#C65D3B]/10 dark:hover:bg-[#F2A900]/20 transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
