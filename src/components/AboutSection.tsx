
import React from 'react';
import { Shield, Heart, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Shield,
      titleEn: 'Quality Assurance',
      titleAr: 'ضمان الجودة',
      descriptionEn: 'Every product meets strict food service standards',
      descriptionAr: 'كل منتج يلبي معايير الخدمات الغذائية الصارمة'
    },
    {
      icon: Heart,
      titleEn: 'Trusted Partner',
      titleAr: 'شريك موثوق',
      descriptionEn: 'Serving restaurants and retailers across Saudi Arabia',
      descriptionAr: 'نخدم المطاعم والمتاجر في جميع أنحاء المملكة العربية السعودية'
    },
    {
      icon: Truck,
      titleEn: 'Reliable Supply',
      titleAr: 'توريد موثوق',
      descriptionEn: 'Consistent delivery schedules for your business needs',
      descriptionAr: 'جداول توصيل ثابتة لاحتياجات عملكم'
    }
  ];

  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          {/* Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-golden-light">
                {isRTL ? 'قصتنا' : 'Our Story'}
              </h2>
              <p className="text-lg leading-relaxed text-white/90 mb-6">
                {isRTL 
                  ? 'منذ أكثر من عقد، بدأت رحلتنا بهدف بسيط: تقديم أفضل أنواع الدجاج الطازج للمطاعم والمتاجر في المملكة العربية السعودية. نحن نؤمن بأن الجودة لا تقبل المساومة في قطاع الأعمال.'
                  : 'For over a decade, our journey began with a simple goal: to provide the finest fresh poultry to restaurants and retailers across Saudi Arabia. We believe that quality should never be compromised in business.'
                }
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                {isRTL 
                  ? 'من خلال شراكتنا مع أفضل المزارع المحلية والالتزام بأعلى معايير الجودة والسلامة، نحن نضمن وصول منتجات طازجة وصحية إلى مطاعمكم ومتاجركم كل يوم.'
                  : 'Through partnerships with the finest local farms and commitment to the highest quality and safety standards, we ensure fresh, healthy products reach your restaurants and stores every day.'
                }
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-golden-light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-golden-light">
                      {isRTL ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-white/80">
                      {isRTL ? feature.descriptionAr : feature.descriptionEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`${isRTL ? 'lg:order-1' : ''}`}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-golden p-8">
                <img
                  src="/lovable-uploads/6b8f2215-fce7-4106-872a-66dbdbebf287.png"
                  alt={isRTL ? 'شعارنا المميز' : 'Our Business Mascot'}
                  className="w-full h-full object-contain animate-fade-in"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-golden-light/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-golden-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
