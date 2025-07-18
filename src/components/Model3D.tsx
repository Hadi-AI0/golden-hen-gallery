import React, { Suspense, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Model3D = () => {
  const { t, isRTL } = useLanguage();
  const [modelLoaded, setModelLoaded] = useState(false);
  const [fallbackImage] = useState('/lovable-uploads/4f95bf68-a406-4c23-9f4e-314b3786331a.png');

  // Fallback for when 3D model isn't available or fails to load
  const ModelFallback = () => (
    <div className="model-container aspect-square max-w-md mx-auto p-8 flex items-center justify-center">
      <img 
        src={fallbackImage}
        alt={isRTL ? 'شعار الدجاجة الذهبية' : 'Golden Hen Logo'}
        className="w-full h-full object-contain animate-fade-in hover:scale-105 transition-transform duration-300"
      />
    </div>
  );

  // Placeholder for actual 3D model integration
  const Model3DViewer = () => {
    return (
      <div className="model-container aspect-square max-w-md mx-auto relative">
        {/* This would be replaced with actual model-viewer or Three.js component */}
        <div className="w-full h-full bg-gradient-dark rounded-lg flex items-center justify-center">
          <div className="text-center text-white space-y-4 p-8">
            <div className="animate-pulse">
              <img 
                src={fallbackImage}
                alt={isRTL ? 'نموذج ثلاثي الأبعاد' : '3D Model Preview'}
                className="w-32 h-32 mx-auto object-contain mb-4"
              />
            </div>
            <p className={`text-sm opacity-75 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
              {isRTL ? 'نموذج ثلاثي الأبعاد تفاعلي' : 'Interactive 3D Model'}
            </p>
          </div>
        </div>
        
        {/* Loading indicator */}
        {!modelLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/20 rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-golden-light"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {isRTL ? 'اكتشف منتجاتنا المميزة' : 'Discover Our Premium Products'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'تفاعل مع نموذج ثلاثي الأبعاد لمنتجاتنا الطازجة وعالية الجودة'
              : 'Interact with our 3D model showcasing our fresh, high-quality products'
            }
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* 3D Model */}
          <div className="flex-1">
            <Suspense fallback={<ModelFallback />}>
              <Model3DViewer />
            </Suspense>
          </div>

          {/* Content */}
          <div className={`flex-1 space-y-6 ${isRTL ? 'font-arabic text-right' : 'font-latin text-left'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              {isRTL ? 'جودة لا تُضاهى' : 'Unmatched Quality'}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isRTL 
                ? 'نحن نفخر بتقديم أفضل أنواع الدجاج الطازج من مزارع محلية مختارة بعناية. كل منتج يمر بفحوصات جودة صارمة لضمان وصول أفضل ما لديكم.'
                : 'We take pride in delivering the finest fresh poultry from carefully selected local farms. Every product undergoes rigorous quality checks to ensure you receive only the best.'
              }
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-golden-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {isRTL ? 'طازج يومياً' : 'Fresh Daily'}
                  </h4>
                  <p className="text-muted-foreground">
                    {isRTL 
                      ? 'توريد يومي من المزارع المحلية المختارة'
                      : 'Daily supply from selected local farms'
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-golden-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {isRTL ? 'فحوصات جودة' : 'Quality Inspections'}
                  </h4>
                  <p className="text-muted-foreground">
                    {isRTL 
                      ? 'معايير صارمة للجودة والسلامة'
                      : 'Strict quality and safety standards'
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-golden-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {isRTL ? 'توصيل سريع' : 'Fast Delivery'}
                  </h4>
                  <p className="text-muted-foreground">
                    {isRTL 
                      ? 'خدمة توصيل سريعة ومبردة'
                      : 'Quick and refrigerated delivery service'
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

export default Model3D;