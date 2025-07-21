
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import SignatureProductSection from '@/components/Model3D';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProductGrid from '@/components/ProductGrid';
import RecipeCarousel from '@/components/RecipeCarousel';
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
          <SignatureProductSection />
          <ProductGrid />
          <RecipeCarousel />
          <TestimonialsSection />
          <AboutSection />
          <FAQSection />
          <ContactSection />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
