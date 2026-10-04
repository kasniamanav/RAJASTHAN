import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { LanguageProvider } from './components/LanguageContext';
import { FavoritesProvider } from './components/FavoritesContext';
import { CustomCursor } from './components/CustomCursor';
import { GrainOverlay } from './components/GrainOverlay';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlacesSection } from './components/PlacesSection';
import { FoodSection } from './components/FoodSection';
import { PlannerSection } from './components/PlannerSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { SocialProof } from './components/SocialProof';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { FavoritesDrawer } from './components/FavoritesDrawer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <FavoritesProvider>
          {/* Custom Royal Cursor */}
          <CustomCursor />

          {/* Desert Grain Texture Overlay */}
          <GrainOverlay />

          {/* Slide-in Saved Favorites Drawer */}
          <FavoritesDrawer />

          {/* Animated Drawing Splash Screen */}
          {showSplash ? (
            <SplashScreen onComplete={() => setShowSplash(false)} />
          ) : (
            <div className="relative w-full min-h-screen flex flex-col justify-between selection:bg-[#F2A900] selection:text-black">
              {/* Sticky Glass Navbar with Progress Bar */}
              <Navbar />

              {/* Multi-layered Parallax Hero Section */}
              <Hero />

              {/* Main Content Sections */}
              <main className="relative z-10 w-full overflow-hidden">
                {/* 1. Best Places Section */}
                <PlacesSection />

                {/* Decorative Pattern Divider */}
                <div className="w-full h-8 rajasthani-border opacity-20 my-10" />

                {/* 2. Royal Thali Best Food Section */}
                <FoodSection />

                {/* Decorative Pattern Divider */}
                <div className="w-full h-8 rajasthani-border opacity-20 my-10" />

                {/* 3. Smart Trip Planner Section */}
                <PlannerSection />

                {/* 4. Royal Experiences Marquee */}
                <ExperiencesSection />

                {/* 5. Social Proof / 3D Testimonial Carousel */}
                <SocialProof />

                {/* 6. High-Definition Masonry Gallery with Lightbox */}
                <GallerySection />
              </main>

              {/* Royal Footer with Dune Wave & Newsletter */}
              <Footer />
            </div>
          )}
        </FavoritesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
