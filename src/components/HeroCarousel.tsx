
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CarouselSlide } from '@/types';

const slides: CarouselSlide[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    titleEn: 'ahd alyoom - Premium Poultry for Restaurants',
    titleAr: 'عهد اليوم - دواجن مميزة للمطاعم',
    subtitleEn: 'Serving restaurants, catering, and retailers across Saudi Arabia with consistent quality and reliable delivery',
    subtitleAr: 'نخدم المطاعم والمأكولات والمتاجر في جميع أنحاء المملكة بجودة ثابتة وتوصيل موثوق',
    ctaEn: 'Get Wholesale Pricing',
    ctaAr: 'احصل على أسعار الجملة',
    whatsappMessage: 'Hello! I would like to inquire about wholesale pricing for restaurants/catering business from Ahd Alyoom.'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    titleEn: 'Fresh Quality for Professional Kitchens',
    titleAr: 'جودة طازجة للمطابخ المهنية',
    subtitleEn: 'Consistent supply of premium poultry products for restaurants and catering businesses nationwide',
    subtitleAr: 'توريد ثابت لمنتجات الدواجن المميزة للمطاعم وشركات المأكولات على مستوى المملكة',
    ctaEn: 'View Product Catalog',
    ctaAr: 'عرض كتالوج المنتجات',
    whatsappMessage: 'Hi! I want to see the complete product catalog for restaurants from Ahd Alyoom.'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
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
            {/* Background Image with Enhanced Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            />
            <div className="absolute inset-0 overlay-high-contrast" />
            
            {/* Content Overlay */}
            <div className="relative h-full flex items-center justify-center">
              <div className={`container mx-auto px-4 text-center text-white ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                <div className="max-w-5xl mx-auto space-y-4 md:space-y-6 animate-fade-up">
                  <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-high-contrast">
                    {isRTL ? slide.titleAr : slide.titleEn}
                  </h1>
                  <p className="text-base md:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed text-high-contrast">
                    {isRTL ? slide.subtitleAr : slide.subtitleEn}
                  </p>
                  
                  {/* Enhanced Slogan with Golden Gradient */}
                  <div className="py-4 md:py-6">
                    <div className="golden-accent inline-block text-lg md:text-xl lg:text-2xl font-bold">
                      {isRTL ? 'عهد اليوم عهد كل يوم' : 'Today\'s Promise, Every Day\'s Promise'}
                    </div>
                  </div>
                  
                  <div className="pt-2 md:pt-4">
                    <Button
                      onClick={() => handleWhatsAppOrder(slide.whatsappMessage)}
                      className="btn-golden-intense text-sm md:text-lg px-8 md:px-10 py-4 md:py-5 hover-lift"
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
        className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-2 md:right-4' : 'left-2 md:left-4'} bg-white/30 hover:bg-white/50 text-white p-2 md:p-3 rounded-full transition-all duration-200 hover-lift z-10 backdrop-blur-sm`}
        aria-label="Previous slide"
      >
        {isRTL ? <ChevronRight className="h-4 w-4 md:h-6 md:w-6" /> : <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />}
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-2 md:left-4' : 'right-2 md:right-4'} bg-white/30 hover:bg-white/50 text-white p-2 md:p-3 rounded-full transition-all duration-200 hover-lift z-10 backdrop-blur-sm`}
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
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 backdrop-blur-sm ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-golden-primary to-golden-secondary scale-125 shadow-golden' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
