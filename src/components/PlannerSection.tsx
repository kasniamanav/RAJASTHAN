import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { places } from '../data/places';
import { foods } from '../data/foods';
import { OptimizedImage } from './OptimizedImage';
import { Calendar, Utensils, Lightbulb, MapPin, Check } from 'lucide-react';

export const PlannerSection = () => {
  const { isHindi } = useLanguage();
  const [selectedDays, setSelectedDays] = useState<number>(5);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Heritage', 'Food']);

  const dayOptions = [3, 5, 7];

  const interestOptions = [
    { key: 'Heritage', labelEn: 'Royal Heritage', labelHi: 'शाही धरोहर' },
    { key: 'Food', labelEn: 'Culinary Trails', labelHi: 'शाही खानपान' },
    { key: 'Adventure', labelEn: 'Desert Safari', labelHi: 'रेगिस्तानी रोमांच' },
    { key: 'Photography', labelEn: 'Fort Photography', labelHi: 'फोटोग्राफी' },
  ];

  const toggleInterest = (key: string) => {
    setSelectedInterests((prev) =>
      prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key]
    );
  };

  // Rule-based timeline generator based on selected days and interests
  const generateTimeline = () => {
    const timeline = [];

    // Day 1: Always starts at Jaipur (Pink City)
    const jaipur = places.find((p) => p.id === 'jaipur') || places[0];
    const dalBaati = foods.find((f) => f.id === 'dal-baati-churma') || foods[0];
    timeline.push({
      day: 1,
      city: isHindi ? 'जयपुर: गुलाबी नगर का वैभव' : 'Jaipur: The Pink City Awakening',
      stops: isHindi
        ? ['आमेर किले की हाथी चढ़ाई', 'हवा महल के 953 झरोखे', 'सिटी पैलेस संग्रहालय']
        : ['Amer Fort Elephant Path', 'Hawa Mahal 953 Windows', 'City Palace Royal Museum'],
      foodPick: dalBaati,
      tip: isHindi
        ? 'हवा महल के सामने स्थित कैफे से शाम की रोशनी में सबसे शानदार तस्वीर मिलती है।'
        : 'Visit the cafe opposite Hawa Mahal at golden hour for iconic framed balcony shots.',
      place: jaipur,
    });

    // Day 2: Jodhpur or Pushkar
    const jodhpur = places.find((p) => p.id === 'jodhpur') || places[2];
    const pyaazKachori = foods.find((f) => f.id === 'pyaaz-kachori') || foods[4];
    timeline.push({
      day: 2,
      city: isHindi ? 'जोधपुर: मेहरानगढ़ और नीली गलियां' : 'Jodhpur: The Blue Citadel & Ramparts',
      stops: isHindi
        ? ['मेहरानगढ़ किले से जिपलाइन', 'नीले घरों की गलियों में पदयात्रा', 'उम्मेद भवन पैलेस']
        : ['Flying Fox Zipline at Mehrangarh', 'Blue City Walking Tour', 'Umaid Bhawan Art Deco'],
      foodPick: pyaazKachori,
      tip: isHindi
        ? 'कचोरी सुबह 8 से 10 बजे के बीच ताज़ा और गरमा-गरम खाने का सबसे अच्छा समय है।'
        : 'Grab piping hot Pyaaz Kachoris fresh off the kadhai between 8 AM and 10 AM.',
      place: jodhpur,
    });

    // Day 3: Jaisalmer (Desert / Adventure) or Udaipur
    if (selectedInterests.includes('Adventure') || selectedDays >= 5) {
      const jaisalmer = places.find((p) => p.id === 'jaisalmer') || places[3];
      const bajraRoti = foods.find((f) => f.id === 'bajre-ki-roti') || foods[8];
      timeline.push({
        day: 3,
        city: isHindi ? 'जैसलमेर: थार के सुनहरे टीले' : 'Jaisalmer: Golden Sands of the Thar',
        stops: isHindi
          ? ['सैम सैंड ड्यून्स पर ऊंट सफारी', 'जीवंत सोनार किले का भ्रमण', 'पटवों की हवेली की नक्काशी']
          : ['Sunset Camel Trek in Sam Dunes', 'Sonar Qila Living Fort', 'Patwon Ki Haveli Filigree'],
        foodPick: bajraRoti,
        tip: isHindi
          ? 'रेगिस्तान में रात में तारे देखने के लिए गर्म शॉल अवश्य साथ रखें।'
          : 'Carry a pashmina shawl for chilly starlit midnight sessions over desert dunes.',
        place: jaisalmer,
      });
    } else {
      const udaipur = places.find((p) => p.id === 'udaipur') || places[1];
      const rabdi = foods.find((f) => f.id === 'rabdi') || foods[10];
      timeline.push({
        day: 3,
        city: isHindi ? 'उदयपुर: झीलों की नगरी का सौंदर्य' : 'Udaipur: Lake Palace Serenity',
        stops: isHindi
          ? ['पिछोला झील पर नाव की सवारी', 'जग मंदिर द्वीप का भ्रमण', 'सहेलियों की बाड़ी के फव्वारे']
          : ['Sunset Boat Cruise Lake Pichola', 'Jag Mandir Island', 'Saheliyon Ki Bari Fountains'],
        foodPick: rabdi,
        tip: isHindi
          ? 'शाम के समय पिछोला झील पर बोट क्रूज पहले से बुक कर लें।'
          : 'Reserve your Lake Pichola sunset cruise early to catch the palaces glowing in amber.',
        place: udaipur,
      });
    }

    if (selectedDays >= 5) {
      // Day 4: Udaipur
      const udaipur = places.find((p) => p.id === 'udaipur') || places[1];
      const laalMaas = foods.find((f) => f.id === 'laal-maas') || foods[1];
      timeline.push({
        day: 4,
        city: isHindi ? 'उदयपुर: शाही विलास और पिछोला' : 'Udaipur: Royal Reflections & Marble Splendor',
        stops: isHindi
          ? ['विशाल सिटी पैलेस का आंतरिक संग्रहालय', 'बागोर की हवेली में शाम का लोक नृत्य', 'अमराई घाट पर दीपदान']
          : ['City Palace Grand Galleries', 'Bagore Ki Haveli Dharohar Folk Dance', 'Ambrai Ghat Lanterns'],
        foodPick: laalMaas,
        tip: isHindi
          ? 'बागोर की हवेली में 7 बजे शाम को होने वाला पारंपरिक राजस्थानी घूमर नृत्य कभी न चूकें।'
          : 'Do not miss the 7 PM Dharohar folk dance at Bagore Ki Haveli on the lake edge.',
        place: udaipur,
      });

      // Day 5: Pushkar
      const pushkar = places.find((p) => p.id === 'pushkar') || places[4];
      const malpua = foods.find((f) => f.id === 'malpua') || foods[9];
      timeline.push({
        day: 5,
        city: isHindi ? 'पुष्कर: पवित्र सरोवर और आध्यात्मिक शांति' : 'Pushkar: Sacred Lotus Waters & Mystic Ghats',
        stops: isHindi
          ? ['जगतपिता ब्रह्मा मंदिर दर्शन', '52 पवित्र घाटों पर संध्या महाआरती', 'सावित्री मंदिर की पहाड़ी से सूर्यास्त']
          : ['Ancient Brahma Temple Darshan', 'Sunset Maha Aarti on 52 Ghats', 'Savitri Hilltop Ropeway'],
        foodPick: malpua,
        tip: isHindi
          ? 'सावित्री मंदिर जाने के लिए सूर्यास्त से 1 घंटा पहले रोपवे लें।'
          : 'Take the ropeway up to Savitri Temple 1 hour before twilight for 360-degree desert panoramas.',
        place: pushkar,
      });
    }

    if (selectedDays >= 7) {
      // Day 6: Bikaner
      const bikaner = places.find((p) => p.id === 'bikaner') || places[6];
      const kerSangri = foods.find((f) => f.id === 'ker-sangri') || foods[3];
      timeline.push({
        day: 6,
        city: isHindi ? 'बीकानेर: जूनागढ़ किला और ऊंट अनुसंधान' : 'Bikaner: The Untamed Citadel & Camel Sanctuary',
        stops: isHindi
          ? ['जूनागढ़ किले के स्वर्ण कक्ष', 'करणी माता का चमत्कारिक मंदिर', 'राष्ट्रीय ऊंट अनुसंधान केंद्र']
          : ['Junagarh Fort Gilded Chambers', 'Karni Mata Sanctuary', 'National Camel Research Institute'],
        foodPick: kerSangri,
        tip: isHindi
          ? 'बीकानेर के रामपुरिया हवेलियों की लाल बलुआ पत्थर की वास्तुकला की तस्वीरें सुबह-सुबह बेहतरीन आती हैं।'
          : 'Early mornings in Rampuria Haveli alleys offer breathtaking soft-lit sandstone texture photos.',
        place: bikaner,
      });

      // Day 7: Chittorgarh
      const chittor = places.find((p) => p.id === 'chittorgarh') || places[7];
      const ghevar = foods.find((f) => f.id === 'ghevar') || foods[6];
      timeline.push({
        day: 7,
        city: isHindi ? 'चित्तौड़गढ़: शौर्य और अमर बलिदान की धरती' : 'Chittorgarh: The Epic Throne of Rajput Valor',
        stops: isHindi
          ? ['विजय स्तम्भ की 9 मंजिलें', 'रानी पद्मिनी का ऐतिहासिक जल महल', 'गौमुख कुंड का प्राकृतिक जलस्रोत']
          : ['Vijay Stambha Victory Spire', 'Rani Padmini Island Palace', 'Gaumukh Reservoir Spring'],
        foodPick: ghevar,
        tip: isHindi
          ? 'चित्तौड़गढ़ किला 700 एकड़ में फैला है, इसलिए एक अनुभवी स्थानीय गाइड साथ रखना सबसे उत्तम है।'
          : 'Chittorgarh spans 700 acres; hire a government-approved heritage guide to decipher every tale.',
        place: chittor,
      });
    }

    return timeline;
  };

  const timeline = generateTimeline();

  return (
    <section id="planner" className="relative py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#C65D3B]/30 dark:border-[#F2A900]/30 text-xs font-bold uppercase tracking-widest text-[#C65D3B] dark:text-[#F2A900] mb-4"
        >
          <Calendar size={14} />
          <span>{isHindi ? 'यात्रा निर्माता' : 'AI SMART ITINERARY BUILDER'}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-playfair font-black text-[#4A121E] dark:text-[#F4E3C1] mb-5"
        >
          {isHindi ? 'अपनी शाही यात्रा तैयार करें' : 'Tailor Your Royal Expedition'}
        </motion.h2>

        <p className="text-sm sm:text-base opacity-80 font-light leading-relaxed">
          {isHindi
            ? 'अपनी सुविधानुसार दिन और रुचियां चुनें, और स्वतः तैयार दिन-प्रतिदिन का मार्ग देखें।'
            : 'Select your journey duration and passions to craft a bespoke day-by-day royal expedition.'}
        </p>
      </div>

      {/* Control Panel: Days & Interests */}
      <div className="glass-card p-6 md:p-8 rounded-3xl mb-16 shadow-xl border border-[#C65D3B]/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Pick Duration */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#C65D3B] dark:text-[#F2A900] mb-3">
              {isHindi ? '१. यात्रा की अवधि चुनें' : '1. Choose Expedition Duration'}
            </label>
            <div className="flex items-center gap-3">
              {dayOptions.map((days) => (
                <button
                  key={days}
                  onClick={() => setSelectedDays(days)}
                  className={`flex-1 py-3 px-4 rounded-2xl font-playfair font-bold text-lg md:text-xl transition-all ${
                    selectedDays === days
                      ? 'bg-gradient-to-r from-[#C65D3B] to-[#F2A900] text-white shadow-lg scale-105'
                      : 'glass hover:bg-black/5 dark:hover:bg-white/5 opacity-80'
                  }`}
                >
                  {days} {isHindi ? 'दिन' : 'Days'}
                </button>
              ))}
            </div>
          </div>

          {/* Pick Interests */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#C65D3B] dark:text-[#F2A900] mb-3">
              {isHindi ? '२. अपनी रुचियां चुनें' : '2. Select Your Passions'}
            </label>
            <div className="flex flex-wrap gap-2.5">
              {interestOptions.map((opt) => {
                const isChecked = selectedInterests.includes(opt.key);
                return (
                  <button
                    key={opt.key}
                    onClick={() => toggleInterest(opt.key)}
                    className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 transition-all ${
                      isChecked
                        ? 'bg-[#C65D3B] text-white shadow'
                        : 'glass hover:bg-black/5 dark:hover:bg-white/5 opacity-80'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] ${
                        isChecked ? 'bg-white text-[#C65D3B]' : 'border border-current'
                      }`}
                    >
                      {isChecked && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span>{isHindi ? opt.labelHi : opt.labelEn}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Generated Vertical Timeline with Animated Connecting Line */}
      <div className="relative pl-6 sm:pl-10 md:pl-16 space-y-12">
        {/* Animated Connecting Line that draws vertically */}
        <div className="absolute top-4 bottom-4 left-3 sm:left-5 md:left-8 w-1 bg-gradient-to-b from-[#C65D3B] via-[#F2A900] to-[#0F6B6B] rounded-full shadow-[0_0_10px_rgba(242,169,0,0.5)]" />

        {timeline.map((step, idx) => (
          <motion.div
            key={step.day}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative glass-card p-6 md:p-8 rounded-3xl border border-[#C65D3B]/20 shadow-lg"
          >
            {/* Step Day Pin Marker on the vertical line */}
            <div className="absolute -left-9 sm:-left-11 md:-left-14 top-7 w-8 h-8 rounded-full bg-gradient-to-tr from-[#C65D3B] to-[#F2A900] text-white font-playfair font-black text-sm flex items-center justify-center shadow-lg border-2 border-white dark:border-[#12132B]">
              {step.day}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C65D3B] dark:text-[#F2A900]">
                  <MapPin size={14} />
                  <span>
                    {isHindi ? `दिन ${step.day}` : `Day ${step.day}`} • {step.place.name}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#4A121E] dark:text-[#F4E3C1]">
                  {step.city}
                </h3>

                {/* Stops */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider opacity-75 mb-2">
                    {isHindi ? 'मुख्य पड़ाव एवं दर्शनीय स्थल:' : 'Planned Exploration Stops:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {step.stops.map((stop, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-2 rounded-xl bg-white/40 dark:bg-white/5 text-xs font-medium border border-[#C65D3B]/10 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F2A900]" />
                        <span>{stop}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Food Pick */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-[#F2A900]/30 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                    <OptimizedImage
                      src={step.foodPick.imageUrl}
                      alt={step.foodPick.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#C65D3B] dark:text-[#F2A900] flex items-center gap-1">
                      <Utensils size={11} />
                      <span>{isHindi ? 'शाही भोजन की सिफारिश' : 'Curated Royal Dining Pick'}</span>
                    </div>
                    <span className="font-playfair font-bold text-sm">
                      {isHindi ? step.foodPick.nameHi : step.foodPick.name}
                    </span>
                  </div>
                </div>

                {/* Insider Tip */}
                <div className="flex items-start gap-2 text-xs opacity-85 italic pt-1">
                  <Lightbulb size={16} className="text-[#F2A900] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold not-italic">
                      {isHindi ? 'शाही गुप्त टिप:' : 'Insider Secret:'}
                    </strong>{' '}
                    {step.tip}
                  </span>
                </div>
              </div>

              {/* Photo Card */}
              <div className="lg:col-span-4 h-48 lg:h-64 w-full rounded-2xl overflow-hidden shadow-md border border-[#C65D3B]/20 relative">
                <OptimizedImage
                  src={step.place.imageUrl}
                  alt={step.place.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white font-playfair font-bold text-base drop-shadow">
                    {isHindi ? step.place.taglineHi : step.place.tagline}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
