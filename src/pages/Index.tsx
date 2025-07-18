import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import Model3D from '@/components/Model3D';
import ProductGrid from '@/components/ProductGrid';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroCarousel />
          <Model3D />
          <ProductGrid />
          <AboutSection />
          <ContactSection />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
