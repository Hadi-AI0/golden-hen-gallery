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
      descriptionEn: 'Every product meets our strict quality standards',
      descriptionAr: 'كل منتج يلبي معايير الجودة الصارمة لدينا'
    },
    {
      icon: Heart,
      titleEn: 'Family Trusted',
      titleAr: 'ثقة العائلات',
      descriptionEn: 'Serving Saudi families for over a decade',
      descriptionAr: 'نخدم العائلات السعودية لأكثر من عقد'
    },
    {
      icon: Truck,
      titleEn: 'Fresh Delivery',
      titleAr: 'توصيل طازج',
      descriptionEn: 'Temperature-controlled delivery to your door',
      descriptionAr: 'توصيل مبرد إلى باب منزلك'
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
                {t.ourStory}
              </h2>
              <p className="text-lg leading-relaxed text-white/90 mb-6">
                {isRTL 
                  ? 'منذ أكثر من عقد، بدأت رحلتنا بهدف بسيط: تقديم أفضل أنواع الدجاج الطازج للعائلات في المملكة العربية السعودية. نحن نؤمن بأن الجودة لا تقبل المساومة.'
                  : 'For over a decade, our journey began with a simple goal: to provide the finest fresh poultry to families across Saudi Arabia. We believe that quality should never be compromised.'
                }
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                {isRTL 
                  ? 'من خلال شراكتنا مع أفضل المزارع المحلية والالتزام بأعلى معايير الجودة والسلامة، نحن نضمن وصول منتجات طازجة وصحية إلى مائدتكم كل يوم.'
                  : 'Through partnerships with the finest local farms and commitment to the highest quality and safety standards, we ensure fresh, healthy products reach your table every day.'
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
                  src="/lovable-uploads/4f95bf68-a406-4c23-9f4e-314b3786331a.png"
                  alt={isRTL ? 'شعارنا الذهبي' : 'Our Golden Logo'}
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