import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { OptimizedImage } from './OptimizedImage';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';

interface Experience {
  id: string;
  titleEn: string;
  titleHi: string;
  cityEn: string;
  cityHi: string;
  descEn: string;
  descHi: string;
  imageUrl: string;
  badge: string;
}

export const ExperiencesSection = () => {
  const { isHindi } = useLanguage();

  const experiences: Experience[] = [
    {
      id: 'camel-safari',
      titleEn: 'Sunset Camel Safari',
      titleHi: 'थार मरुस्थल ऊंट सफारी',
      cityEn: 'Sam Dunes, Jaisalmer',
      cityHi: 'सैम सैंड ड्यून्स, जैसलमेर',
      descEn: 'Traverse golden rippled dunes as the desert horizon ignites in shades of vermilion and gold.',
      descHi: 'सुनहरी रेत की लहरों पर ऊंट की सवारी और ढलते सूरज की मनमोहक लाली का दीदार।',
      imageUrl: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&auto=format&fit=crop&q=80',
      badge: 'Iconic',
    },
    {
      id: 'hot-air-balloon',
      titleEn: 'Hot Air Balloon Flight',
      titleHi: 'गर्म हवा के गुब्बारे की उड़ान',
      cityEn: 'Amer, Jaipur',
      cityHi: 'आमेर, जयपुर',
      descEn: 'Float gently over hilltop palaces, ancient stepwells, and the rugged Aravalli ridges at dawn.',
      descHi: 'सुबह की पहली किरण के साथ आमेर किले और अरावली की पहाड़ियों के ऊपर विहंगम उड़ान।',
      imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&auto=format&fit=crop&q=80',
      badge: 'Thrilling',
    },
    {
      id: 'folk-dance',
      titleEn: 'Kalbelia & Ghoomar Dance',
      titleHi: 'कालबेलिया एवं घूमर लोकनृत्य',
      cityEn: 'Bagore Ki Haveli, Udaipur',
      cityHi: 'बागोर की हवेली, उदयपुर',
      descEn: 'Witness hypnotic spins, flaming brass pots, and the rhythmic beats of traditional nagadas under stars.',
      descHi: 'नगाड़ों की थाप पर घूमर और कालबेलिया नृत्यांगनाओं के हैरतअंगेज पारंपरिक करतब।',
      imageUrl: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?w=1200&auto=format&fit=crop&q=80',
      badge: 'Cultural',
    },
    {
      id: 'desert-camping',
      titleEn: 'Luxury Starlit Glamping',
      titleHi: 'रेगिस्तानी लग्जरी कैंपिंग',
      cityEn: 'Thar Desert, Jaisalmer',
      cityHi: 'थार मरुस्थल, जैसलमेर',
      descEn: 'Royal Swiss tents with folk melodies around cozy campfires beneath a billion glittering desert stars.',
      descHi: 'तारों की छांव में शाही टेंट, अलाव की गर्माहट और लोक गायकों के सुरीले तराने।',
      imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&auto=format&fit=crop&q=80',
      badge: 'Magical',
    },
    {
      id: 'palace-stays',
      titleEn: 'Maharaja Palace Stays',
      titleHi: 'शाही महल में राजसी प्रवास',
      cityEn: 'Lake Palace, Udaipur',
      cityHi: 'लेक पैलेस, उदयपुर',
      descEn: 'Sleep in authentic suites once occupied by Rajput royalty with personal butler hospitality.',
      descHi: 'महाराजाओं के निजी महलों में ठहरने का शाही अनुभव और राजसी आतिथ्य।',
      imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80',
      badge: 'Royal',
    },
    {
      id: 'pushkar-fair',
      titleEn: 'Pushkar Camel & Cultural Fair',
      titleHi: 'विश्व प्रसिद्ध पुष्कर मेला',
      cityEn: 'Pushkar Desert Plains',
      cityHi: 'पुष्कर के रेतीले मैदान',
      descEn: 'A kaleidoscopic explosion of turban competitions, decorated camels, folk music, and holy dip devotion.',
      descHi: 'रंग-बिरंगी पगड़ियां, सजे-धजे ऊंट और भक्ति-रस से सराबोर एशिया का सबसे बड़ा मेला।',
      imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=80',
      badge: 'Spectacle',
    },
  ];

  return (
    <section id="experiences" className="relative py-24 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#C65D3B]/30 dark:border-[#F2A900]/30 text-xs font-bold uppercase tracking-widest text-[#C65D3B] dark:text-[#F2A900] mb-4"
        >
          <Compass size={14} />
          <span>{isHindi ? 'रोमांचक यात्राएं' : 'UNFORGETTABLE ADVENTURES'}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-playfair font-black text-[#4A121E] dark:text-[#F4E3C1] mb-5"
        >
          {isHindi ? 'अद्वितीय राजस्थानी अनुभव' : 'Quintessential Royal Experiences'}
        </motion.h2>

        <p className="text-sm sm:text-base opacity-80 font-light leading-relaxed">
          {isHindi
            ? 'केवल देखना नहीं, बल्कि राजस्थान की धड़कन और संस्कृति को साक्षात जीना।'
            : 'Beyond sightseeing—immerse yourself in the living rhythm and soul of the desert kingdom.'}
        </p>
      </div>

      {/* Grid of Experiences with Hover Zoom */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden glass-card border border-[#C65D3B]/20 shadow-xl flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-64 w-full overflow-hidden">
                <OptimizedImage
                  src={exp.imageUrl}
                  alt={exp.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F2A900] text-black shadow-md">
                  {exp.badge}
                </span>

                {/* City Location */}
                <span className="absolute bottom-4 left-4 text-xs font-semibold text-[#F2A900] flex items-center gap-1 drop-shadow">
                  <Sparkles size={13} />
                  <span>{isHindi ? exp.cityHi : exp.cityEn}</span>
                </span>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-[#4A121E] dark:text-[#F4E3C1] mb-2 group-hover:text-[#C65D3B] dark:group-hover:text-[#F2A900] transition-colors">
                    {isHindi ? exp.titleHi : exp.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-light mb-6">
                    {isHindi ? exp.descHi : exp.descEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C65D3B]/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C65D3B] dark:text-[#F2A900]">
                    {isHindi ? 'अनुभव आरक्षित करें' : 'Reserve Journey'}
                  </span>
                  <div className="w-8 h-8 rounded-full glass border border-[#C65D3B]/30 flex items-center justify-center text-[#C65D3B] dark:text-[#F2A900] group-hover:bg-[#F2A900] group-hover:text-black transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
