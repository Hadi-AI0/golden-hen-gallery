
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Award, Truck, ShieldCheck } from 'lucide-react';

const SignatureProductSection = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      'Hello! I would like to inquire about your signature spatchcocked chicken for my restaurant/catering business. Please provide wholesale pricing and availability.'
    );
    window.open(`https://wa.me/966544062093?text=${message}`, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Side */}
          <div className={`space-y-6 md:space-y-8 ${isRTL ? 'lg:order-2 font-arabic' : 'lg:order-1 font-latin'}`}>
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {isRTL ? 'منتجنا المميز للمطاعم' : 'Our Signature Product for Restaurants'}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {isRTL 
                  ? 'دجاج مفلطح مُحضر بطريقة خاصة للمطاعم والمأكولات، يوفر طبخاً متساوياً ووقتاً أقل في المطبخ'
                  : 'Specially prepared spatchcocked chicken for restaurants and catering, ensuring even cooking and reduced kitchen time'
                }
              </p>
            </div>
            
            {/* Features */}
            <div className="scroll-reveal space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="p-2 bg-gradient-to-r from-golden-primary to-golden-secondary rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    {isRTL ? 'جودة مضمونة' : 'Guaranteed Quality'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? 'مُحضر وفق أعلى معايير الجودة' : 'Prepared to the highest quality standards'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="p-2 bg-gradient-to-r from-golden-primary to-golden-secondary rounded-lg">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    {isRTL ? 'توصيل سريع' : 'Fast Delivery'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? 'توصيل طازج لمطبخك' : 'Fresh delivery to your kitchen'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="p-2 bg-gradient-to-r from-golden-primary to-golden-secondary rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    {isRTL ? 'معايير السلامة' : 'Safety Standards'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? 'مُطابق لمعايير السلامة الغذائية' : 'Compliant with food safety standards'}
                  </p>
                </div>
              </div>
            </div>

            {/* Slogan */}
            <div className="scroll-reveal">
              <div className="golden-accent inline-block text-sm md:text-base font-bold">
                {isRTL ? 'عهد اليوم عهد كل يوم' : 'Today\'s Promise, Every Day\'s Promise'}
              </div>
            </div>

            {/* CTA Button */}
            <div className="scroll-reveal">
              <Button
                onClick={handleWhatsAppOrder}
                className="btn-golden-intense hover-lift px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold"
              >
                <MessageCircle className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {isRTL ? 'استفسار تجاري' : 'Business Inquiry'}
              </Button>
            </div>
          </div>

          {/* Image Side - New Unique Image */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} scroll-reveal`}>
            <div className="relative">
              <div className="model-container aspect-square rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt={isRTL ? 'منتجنا المميز للمطاعم' : 'Our Signature Product for Restaurants'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-golden-primary to-golden-secondary text-primary px-4 py-2 rounded-full shadow-golden font-bold text-sm">
                {isRTL ? 'منتج مميز' : 'Signature'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureProductSection;
