
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CarouselSlide } from '@/types';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';

const slides: CarouselSlide[] = [
  {
    id: '1',
    image: heroBg1,
    titleEn: 'ahd alyoom - Premium Poultry for Restaurants',
    titleAr: 'عهد اليوم - دواجن مميزة للمطاعم',
    subtitleEn: 'Today\'s Promise, Every Day\'s Promise - Serving restaurants, catering, and retailers across Saudi Arabia',
    subtitleAr: 'عهد اليوم عهد كل يوم - نخدم المطاعم والمأكولات والمتاجر في جميع أنحاء المملكة',
    ctaEn: 'Get Wholesale Pricing',
    ctaAr: 'احصل على أسعار الجملة',
    whatsappMessage: 'Hello! I would like to inquire about wholesale pricing for restaurants/catering business from Ahd Alyoom.'
  },
  {
    id: '2',
    image: heroBg2,
    titleEn: 'Fresh Quality for Professional Kitchens',
    titleAr: 'جودة طازجة للمطابخ المهنية',
    subtitleEn: 'Consistent supply of premium poultry products for restaurants and catering businesses',
    subtitleAr: 'توريد ثابت لمنتجات الدواجن المميزة للمطاعم وشركات المأكولات',
    ctaEn: 'View Product Catalog',
    ctaAr: 'عرض كتالوج المنتجات',
    whatsappMessage: 'Hi! I want to see the complete product catalog for restaurants from Ahd Alyoom.'
  },
  {
    id: '3',
    image: heroBg3,
    titleEn: 'Trusted Partner for Food Service',
    titleAr: 'شريك موثوق لخدمات الطعام',
    subtitleEn: 'Reliable delivery, competitive pricing, and consistent quality for your business success',
    subtitleAr: 'توصيل موثوق وأسعار تنافسية وجودة ثابتة لنجاح أعمالكم',
    ctaEn: 'Become a Partner',
    ctaAr: 'كن شريكاً معنا',
    whatsappMessage: 'Hello! I would like to become a business partner with Ahd Alyoom for my restaurant/retail business.'
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
    }, 6000);

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
    window.open(`https://wa.me/966544062093?text=${encodedMessage}`, '_blank');
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
                <div className="max-w-5xl mx-auto space-y-4 md:space-y-6 animate-fade-up">
                  <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
                    {isRTL ? slide.titleAr : slide.titleEn}
                  </h1>
                  <p className="text-base md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                    {isRTL ? slide.subtitleAr : slide.subtitleEn}
                  </p>
                  
                  {/* Slogan */}
                  <div className="py-2 md:py-4">
                    <span className={`text-golden-light text-sm md:text-lg lg:text-xl font-semibold ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                      {isRTL ? 'عهد اليوم عهد كل يوم' : 'Today\'s Promise, Every Day\'s Promise'}
                    </span>
                  </div>
                  
                  <div className="pt-2 md:pt-4">
                    <Button
                      onClick={() => handleWhatsAppOrder(slide.whatsappMessage)}
                      className="btn-golden text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 hover-lift"
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
        className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-2 md:right-4' : 'left-2 md:left-4'} bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200 hover-lift z-10`}
        aria-label="Previous slide"
      >
        {isRTL ? <ChevronRight className="h-4 w-4 md:h-6 md:w-6" /> : <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />}
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-2 md:left-4' : 'right-2 md:right-4'} bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200 hover-lift z-10`}
        aria-label="Next slide"
      >
        {isRTL ? <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" /> : <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
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
