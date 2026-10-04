import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Sparkles, Send, CheckCircle2, Camera, Globe, Rss, Video, Heart } from 'lucide-react';

export const Footer = () => {
  const { isHindi } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg(isHindi ? 'कृपया एक वैध ईमेल पता दर्ज करें' : 'Please enter a valid royal email address');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <footer className="relative mt-20 pt-16 bg-[#12132B] text-[#F4E3C1] overflow-hidden">
      {/* Dune Wave Divider SVG */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[98%] pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-[#12132B]"
          preserveAspectRatio="none"
        >
          <path d="M0,40 Q360,110 720,50 Q1080,-10 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Top Newsletter & Grand Greeting Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Greeting */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#C65D3B] to-[#F2A900] text-white flex items-center justify-center font-playfair font-bold text-base shadow">
                र
              </span>
              <h3 className="font-playfair text-3xl font-black tracking-wide text-white">
                Rangeela Rajasthan
              </h3>
            </div>

            <p className="text-sm opacity-80 max-w-md leading-relaxed font-light">
              {isHindi
                ? 'राजाओं और शूरवीरों की पावन धरा का डिजिटल द्वार। महलों की भव्यता और मरुस्थल का जादू हमेशा आपके साथ रहे।'
                : 'The definitive cinematic travel portal dedicated to preserving and celebrating the timeless architecture, flavors, and folk grandeur of Rajasthan, India.'}
            </p>

            {/* Padharo Mhare Des Royal Callout */}
            <div className="p-4 rounded-2xl bg-white/5 border border-[#F2A900]/30 inline-block">
              <span className="text-xl md:text-2xl font-playfair font-black text-[#F2A900] block">
                पधारो म्हारे देश
              </span>
              <span className="text-xs uppercase tracking-widest opacity-80">
                Welcome to the Land of Eternal Kings
              </span>
            </div>
          </div>

          {/* Royal Newsletter Subscription Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-[#F2A900]/20 bg-[#1A1C3A]/70">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F2A900] mb-2">
                <Sparkles size={14} />
                <span>{isHindi ? 'शाही संदेश पत्रिका' : 'ROYAL POST DISPATCH'}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-playfair font-bold text-white mb-2">
                {isHindi ? 'अनदेखे रहस्यों की डाक प्राप्त करें' : 'Subscribe to Untold Desert Chronicles'}
              </h4>
              <p className="text-xs opacity-75 mb-6">
                {isHindi
                  ? 'विशेष यात्रा मार्गदर्शिकाएं, त्यौहारों की तिथियां और शाही छूट सीधे अपने इनबॉक्स में पाएं।'
                  : 'Receive handpicked heritage routes, seasonal festival calendars, and palace access guides.'}
              </p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-2xl bg-[#0F6B6B]/30 border border-[#0F6B6B] flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 size={24} className="text-[#F2A900] shrink-0" />
                    <div>
                      <p className="font-bold text-sm">
                        {isHindi ? 'शाही अभिनंदन! आपका स्वागत है।' : 'Royal Salutations! You are Subscribed.'}
                      </p>
                      <p className="text-xs opacity-80">
                        {isHindi
                          ? 'पहली राजस्थान यात्रा मार्गदर्शिका जल्द आपके इनबॉक्स में होगी।'
                          : 'Your first royal desert edition has been dispatched.'}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={isHindi ? 'अपना ईमेल दर्ज करें...' : 'Enter your royal email address...'}
                        className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-[#F2A900] transition-colors"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C65D3B] to-[#F2A900] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(242,169,0,0.5)] transition-all shrink-0"
                      >
                        <span>{isHindi ? 'जुड़ें' : 'Join Gazette'}</span>
                        <Send size={14} />
                      </button>
                    </div>
                    {errorMsg && <p className="text-xs text-rose-400 pl-1">{errorMsg}</p>}
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Links & Socials Row */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h5 className="font-playfair font-bold text-sm text-[#F2A900] uppercase tracking-wider mb-4">
              {isHindi ? 'प्रमुख शहर' : 'Imperial Cities'}
            </h5>
            <ul className="space-y-2 opacity-80 font-light">
              <li><a href="#places" className="hover:text-[#F2A900] transition-colors">Jaipur (Pink City)</a></li>
              <li><a href="#places" className="hover:text-[#F2A900] transition-colors">Udaipur (City of Lakes)</a></li>
              <li><a href="#places" className="hover:text-[#F2A900] transition-colors">Jodhpur (Sun & Blue City)</a></li>
              <li><a href="#places" className="hover:text-[#F2A900] transition-colors">Jaisalmer (Golden Thar)</a></li>
              <li><a href="#places" className="hover:text-[#F2A900] transition-colors">Pushkar & Mount Abu</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-playfair font-bold text-sm text-[#F2A900] uppercase tracking-wider mb-4">
              {isHindi ? 'शाही व्यंजन' : 'Royal Banquets'}
            </h5>
            <ul className="space-y-2 opacity-80 font-light">
              <li><a href="#food" className="hover:text-[#F2A900] transition-colors">Dal Baati Churma</a></li>
              <li><a href="#food" className="hover:text-[#F2A900] transition-colors">Fiery Laal Maas</a></li>
              <li><a href="#food" className="hover:text-[#F2A900] transition-colors">Ker Sangri Desert Herb</a></li>
              <li><a href="#food" className="hover:text-[#F2A900] transition-colors">Honeycomb Malai Ghevar</a></li>
              <li><a href="#food" className="hover:text-[#F2A900] transition-colors">Jodhpuri Mirchi Vada</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-playfair font-bold text-sm text-[#F2A900] uppercase tracking-wider mb-4">
              {isHindi ? 'अनुभव' : 'Experiences'}
            </h5>
            <ul className="space-y-2 opacity-80 font-light">
              <li><a href="#experiences" className="hover:text-[#F2A900] transition-colors">Sam Dunes Camel Safaris</a></li>
              <li><a href="#experiences" className="hover:text-[#F2A900] transition-colors">Dawn Hot Air Ballooning</a></li>
              <li><a href="#experiences" className="hover:text-[#F2A900] transition-colors">Heritage Palace Living</a></li>
              <li><a href="#experiences" className="hover:text-[#F2A900] transition-colors">Pushkar Desert Fair</a></li>
              <li><a href="#planner" className="hover:text-[#F2A900] transition-colors">Smart Trip Planner</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-playfair font-bold text-sm text-[#F2A900] uppercase tracking-wider mb-4">
              {isHindi ? 'सामाजिक संपर्क' : 'Royal Connection'}
            </h5>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-[#F2A900] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Camera size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-[#F2A900] hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <Globe size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-[#F2A900] hover:text-black transition-colors"
                aria-label="Twitter / X"
              >
                <Rss size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-[#F2A900] hover:text-black transition-colors"
                aria-label="YouTube"
              >
                <Video size={16} />
              </a>
            </div>
            <p className="text-[11px] opacity-70">
              Department of Tourism, Government of Rajasthan Inspired Initiative.
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] opacity-60">
          <p>© {new Date().getFullYear()} Rangeela Rajasthan. Crafted with devotion for travelers worldwide.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            <span>Made with</span>
            <Heart size={12} className="fill-rose-500 text-rose-500" />
            <span>for Incredible India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
