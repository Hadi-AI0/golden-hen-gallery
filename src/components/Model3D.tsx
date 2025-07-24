
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import spatchcockedChicken from '@/assets/spatchcocked-chicken.png';

const SignatureProductSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {isRTL ? 'منتجنا المميز للمطاعم' : 'Our Signature Product for Restaurants'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'دجاج مسطح عالي الجودة، مُحضّر بعناية فائقة للمطاعم والمتاجر'
              : 'Premium spatchcocked chicken, carefully prepared for restaurants and retailers'
            }
          </p>
        </div>

        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Product Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative max-w-lg w-full">
              <img 
                src={spatchcockedChicken}
                alt={isRTL ? 'دجاج مسطح - منتج عهد اليوم المميز' : 'Spatchcocked Chicken - ahd alyoom Signature Product'}
                className="w-full h-auto object-contain animate-fade-in hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-golden-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                {isRTL ? 'طازج يومياً' : 'Fresh Daily'}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`flex-1 space-y-6 ${isRTL ? 'font-arabic text-right' : 'font-latin text-left'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              {isRTL ? 'جودة تجارية لا تُضاهى' : 'Unmatched Commercial Quality'}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isRTL 
                ? 'نحن نفخر بتقديم أفضل أنواع الدجاج الطازج من مزارع محلية مختارة بعناية للمطاعم والمتاجر. كل منتج يمر بفحوصات جودة صارمة لضمان أعلى المعايير التجارية.'
                : 'We take pride in delivering the finest fresh poultry from carefully selected local farms to restaurants and retailers. Every product undergoes rigorous quality checks to ensure the highest commercial standards.'
              }
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-golden-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {isRTL ? 'توريد يومي منتظم' : 'Regular Daily Supply'}
                  </h4>
                  <p className="text-muted-foreground">
                    {isRTL 
                      ? 'جداول توصيل ثابتة من المزارع المحلية'
                      : 'Consistent delivery schedules from local farms'
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-golden-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {isRTL ? 'معايير تجارية صارمة' : 'Strict Commercial Standards'}
                  </h4>
                  <p className="text-muted-foreground">
                    {isRTL 
                      ? 'فحوصات جودة شاملة للمطاعم والمتاجر'
                      : 'Comprehensive quality checks for restaurants and retailers'
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-golden-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {isRTL ? 'أسعار الجملة' : 'Wholesale Pricing'}
                  </h4>
                  <p className="text-muted-foreground">
                    {isRTL 
                      ? 'أسعار تنافسية للشركاء التجاريين'
                      : 'Competitive pricing for business partners'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureProductSection;
