import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CarouselSlide } from '@/types';

const slides: CarouselSlide[] = [
  {
    id: '1',
    image: '/lovable-uploads/ab8fe531-3541-4806-88e9-dfdf8c3f098c.png',
    titleEn: 'Premium Fresh Chicken',
    titleAr: 'دجاج طازج مميز',
    subtitleEn: 'Farm-fresh quality delivered to your doorstep',
    subtitleAr: 'جودة طازجة من المزرعة إلى باب منزلك',
    ctaEn: 'Order Now via WhatsApp',
    ctaAr: 'اطلب الآن عبر واتساب',
    whatsappMessage: 'Hello! I would like to order premium fresh chicken.'
  },
  {
    id: '2',
    image: '/lovable-uploads/b83dab92-4488-4b11-a28a-fccfb11a063f.png',
    titleEn: 'Marinated Delights',
    titleAr: 'أطباق متبلة شهية',
    subtitleEn: 'Pre-seasoned cuts ready for your convenience',
    subtitleAr: 'قطع متبلة جاهزة لراحتك',
    ctaEn: 'Explore Our Menu',
    ctaAr: 'استكشف قائمتنا',
    whatsappMessage: 'Hi! I want to know more about your marinated chicken options.'
  },
  {
    id: '3',
    image: '/lovable-uploads/4f95bf68-a406-4c23-9f4e-314b3786331a.png',
    titleEn: 'Golden Quality Promise',
    titleAr: 'وعد الجودة الذهبية',
    subtitleEn: 'Trusted by families across Saudi Arabia',
    subtitleAr: 'نثق بها العائلات في جميع أنحاء المملكة',
    ctaEn: 'Learn Our Story',
    ctaAr: 'تعرف على قصتنا',
    whatsappMessage: 'Hello! I would like to learn more about your premium poultry products.'
  }
];

const HeroCarousel = () => {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleWhatsAppOrder = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966555000000?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(11, 61, 46, 0.7), rgba(11, 61, 46, 0.5)), url(${slide.image})`
              }}
            />
            
            {/* Content Overlay */}
            <div className="relative h-full flex items-center justify-center">
              <div className={`container mx-auto px-4 text-center text-white ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {isRTL ? slide.titleAr : slide.titleEn}
                  </h1>
                  <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                    {isRTL ? slide.subtitleAr : slide.subtitleEn}
                  </p>
                  <div className="pt-4">
                    <Button
                      onClick={() => handleWhatsAppOrder(slide.whatsappMessage)}
                      className="btn-golden text-lg px-8 py-4 hover-lift"
                    >
                      {isRTL ? slide.ctaAr : slide.ctaEn}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover-lift z-10`}
        aria-label="Previous slide"
      >
        {isRTL ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-4' : 'right-4'} bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover-lift z-10`}
        aria-label="Next slide"
      >
        {isRTL ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-golden-light scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;