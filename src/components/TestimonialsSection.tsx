import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import testimonialbg from '@/assets/testimonial-bg.jpg';

const TestimonialsSection = () => {
  const { t, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: isRTL ? 'أحمد المالكي' : 'Ahmed Al-Malki',
      text: isRTL 
        ? 'أفضل دجاج جربته في الرياض! الجودة ممتازة والطعم لا يُضاهى. الطلب عبر واتساب سهل جداً.'
        : 'The best chicken I\'ve tried in Riyadh! Excellent quality and unmatched taste. Ordering via WhatsApp is very easy.',
      rating: 5
    },
    {
      name: isRTL ? 'فاطمة العتيبي' : 'Fatima Al-Otaibi',
      text: isRTL
        ? 'منتجات طازجة دائماً وخدمة توصيل سريعة. أثق في جودة عهد اليوم لعائلتي.'
        : 'Always fresh products and fast delivery service. I trust ahd alyoom quality for my family.',
      rating: 5
    },
    {
      name: isRTL ? 'سالم الدوسري' : 'Salem Al-Dosari',
      text: isRTL
        ? 'خدمة عملاء ممتازة ودجاج عالي الجودة. أنصح به بشدة لكل من يبحث عن الأفضل.'
        : 'Excellent customer service and high-quality chicken. Highly recommend for anyone looking for the best.',
      rating: 5
    },
    {
      name: isRTL ? 'نورا القحطاني' : 'Nora Al-Qahtani',
      text: isRTL
        ? 'الوصفات المرفقة مع المنتجات رائعة! ساعدتني في تحضير أطباق لذيذة لعائلتي.'
        : 'The recipes included with products are amazing! They helped me prepare delicious dishes for my family.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-muted relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: `url(${testimonialbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {isRTL ? 'آراء عملائنا' : 'Customer Testimonials'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'اكتشف ما يقوله عملاؤنا المميزون عن تجربتهم معنا'
              : 'Discover what our valued customers say about their experience with us'
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${isRTL ? currentIndex * 100 : -currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-card rounded-lg p-8 shadow-lg text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-golden-primary text-golden-primary" />
                        ))}
                      </div>
                      
                      <blockquote className={`text-lg md:text-xl text-foreground mb-6 italic ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                        "{testimonial.text}"
                      </blockquote>
                      
                      <cite className={`text-primary font-semibold ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                        {testimonial.name}
                      </cite>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={isRTL ? nextTestimonial : prevTestimonial}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-background/80 hover:bg-background"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={isRTL ? prevTestimonial : nextTestimonial}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-background/80 hover:bg-background"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;