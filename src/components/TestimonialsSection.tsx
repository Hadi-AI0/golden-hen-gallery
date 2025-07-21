
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
      name: isRTL ? 'أحمد المالكي - مالك مطعم الأصالة' : 'Ahmed Al-Malki - Owner, Asala Restaurant',
      business: isRTL ? 'مطعم الأصالة، الرياض' : 'Asala Restaurant, Riyadh',
      text: isRTL 
        ? 'نتعامل مع عهد اليوم منذ ثلاث سنوات، والجودة ثابتة دائماً. عملاؤنا يلاحظون الفرق في طعم الدجاج المشوي. التوصيل دقيق والأسعار تنافسية للمطاعم.'
        : 'We\'ve been working with Ahd Alyoom for three years now. The quality is consistently excellent. Our customers notice the difference in our grilled chicken dishes. Delivery is reliable and the wholesale pricing works perfectly for our restaurant margins.',
      rating: 5
    },
    {
      name: isRTL ? 'فاطمة العتيبي - مديرة مأكولات الضيافة' : 'Fatima Al-Otaibi - Catering Manager',
      business: isRTL ? 'شركة الضيافة للمأكولات' : 'Al-Diyafa Catering Company',
      text: isRTL
        ? 'نخدم أكثر من 200 حفل شهرياً، وعهد اليوم يلبي احتياجاتنا دائماً. الشاورما المتبلة توفر علينا ساعات في المطبخ. خدمة عملاء ممتازة ومرونة في الطلبات الكبيرة.'
        : 'We cater over 200 events monthly, and Ahd Alyoom never lets us down. Their seasoned shawarma saves us hours in the kitchen. Excellent customer service and flexible ordering for large quantities. They understand the catering business.',
      rating: 5
    },
    {
      name: isRTL ? 'سالم الدوسري - مدير سلسلة مطاعم النخيل' : 'Salem Al-Dosari - Chain Manager, Al-Nakheel Restaurants',
      business: isRTL ? 'سلسلة مطاعم النخيل' : 'Al-Nakheel Restaurant Chain',
      text: isRTL
        ? 'لدينا 8 فروع في الرياض، وعهد اليوم يغطي كل فروعنا بنفس مستوى الجودة. الدجاج المفروم عالي الجودة لبرغر الدجاج لدينا. شريك موثوق في نجاح أعمالنا.'
        : 'We operate 8 branches in Riyadh, and Ahd Alyoom supplies all our locations with consistent quality. Their ground chicken is perfect for our signature chicken burgers. They\'re a trusted partner in our business success.',
      rating: 5
    },
    {
      name: isRTL ? 'نورا القحطاني - مالكة متجر اللحوم الطازجة' : 'Nora Al-Qahtani - Owner, Fresh Meat Market',
      business: isRTL ? 'متجر اللحوم الطازجة' : 'Fresh Meat Market',
      text: isRTL
        ? 'زبائن المتجر يثقون في منتجات عهد اليوم. الدجاج الكامل بأحجام مختلفة يلبي طلبات كل العائلات. هامش الربح جيد والمنتجات تبقى طازجة لفترة أطول.'
        : 'Our retail customers trust Ahd Alyoom products. The whole chickens in different sizes meet every family\'s needs. Good profit margins and the products stay fresh longer, which reduces our waste significantly.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-16 bg-muted relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: `url(${testimonialbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-8 md:mb-12 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {isRTL ? 'شركاؤنا في النجاح' : 'Our Business Partners'}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'اكتشف ما يقوله شركاؤنا من أصحاب المطاعم والمتاجر عن تجربتهم معنا'
              : 'Discover what our restaurant and retail partners say about their experience with us'
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
                  <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                    <div className="bg-card rounded-lg p-4 md:p-8 shadow-lg text-center">
                      <div className="flex justify-center mb-3 md:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-golden-primary text-golden-primary" />
                        ))}
                      </div>
                      
                      <blockquote className={`text-sm md:text-lg lg:text-xl text-foreground mb-4 md:mb-6 italic leading-relaxed ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className={`${isRTL ? 'font-arabic' : 'font-latin'}`}>
                        <cite className="text-primary font-semibold text-sm md:text-base block">
                          {testimonial.name}
                        </cite>
                        <span className="text-muted-foreground text-xs md:text-sm mt-1 block">
                          {testimonial.business}
                        </span>
                      </div>
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
              className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-background/80 hover:bg-background h-8 w-8 md:h-10 md:w-10"
            >
              <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={isRTL ? prevTestimonial : nextTestimonial}
              className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-background/80 hover:bg-background h-8 w-8 md:h-10 md:w-10"
            >
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
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
