
import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Product } from '@/types';

const products: Product[] = [
  {
    id: '1',
    nameEn: 'Whole Chicken',
    nameAr: 'دجاج كامل',
    descriptionEn: 'Fresh whole chicken (700g-1400g), perfect for restaurants and catering',
    descriptionAr: 'دجاج كامل طازج (700-1400 جرام)، مثالي للمطاعم والمأكولات',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Hello! I would like to inquire about wholesale pricing for whole fresh chicken (700g-1400g) for my restaurant/catering business.'
  },
  {
    id: '2',
    nameEn: 'Chicken Liver',
    nameAr: 'كبد الدجاج',
    descriptionEn: 'Fresh chicken liver, ideal for traditional dishes and restaurants',
    descriptionAr: 'كبد دجاج طازج، مثالي للأطباق التقليدية والمطاعم',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Hi! I want to order fresh chicken liver for my restaurant. Please provide wholesale rates.'
  },
  {
    id: '3',
    nameEn: 'Chicken Wings',
    nameAr: 'أجنحة الدجاج',
    descriptionEn: 'Premium chicken wings, perfect for appetizers and main courses',
    descriptionAr: 'أجنحة دجاج مميزة، مثالية للمقبلات والأطباق الرئيسية',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Hello! I would like to know about bulk pricing for chicken wings for my restaurant.'
  },
  {
    id: '4',
    nameEn: 'Chicken Thighs',
    nameAr: 'أفخاذ الدجاج',
    descriptionEn: 'Juicy chicken thighs, excellent for grilling and traditional cooking',
    descriptionAr: 'أفخاذ دجاج طرية، ممتازة للشواء والطبخ التقليدي',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Hi! I am interested in wholesale chicken thighs for my catering business.'
  },
  {
    id: '5',
    nameEn: 'Drumsticks',
    nameAr: 'أرجل الدجاج',
    descriptionEn: 'Fresh drumsticks, popular choice for restaurants and catering',
    descriptionAr: 'أرجل دجاج طازجة، خيار شائع للمطاعم والمأكولات',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Hello! I want to order drumsticks for my restaurant. What are your wholesale prices?'
  },
  {
    id: '6',
    nameEn: 'Chicken Breasts',
    nameAr: 'صدور الدجاج',
    descriptionEn: 'Premium chicken breasts, ideal for healthy menu options',
    descriptionAr: 'صدور دجاج مميزة، مثالية لخيارات القائمة الصحية',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Hi! I need chicken breasts for my restaurant menu. Please provide wholesale pricing.'
  },
  {
    id: '7',
    nameEn: 'Ground Chicken',
    nameAr: 'دجاج مفروم',
    descriptionEn: 'Fresh ground chicken, perfect for burgers, meatballs and specialty dishes',
    descriptionAr: 'دجاج مفروم طازج، مثالي للبرغر وكرات اللحم والأطباق المتخصصة',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Hello! I would like to inquire about ground chicken for my restaurant kitchen.'
  },
  {
    id: '8',
    nameEn: 'Seasoned Shawarma',
    nameAr: 'شاورما متبلة',
    descriptionEn: 'Ready-to-cook seasoned shawarma, specially prepared for restaurants',
    descriptionAr: 'شاورما متبلة جاهزة للطبخ، محضرة خصيصاً للمطاعم',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    whatsappMessage: 'Hi! I want to know about your seasoned shawarma for my restaurant. What are the wholesale rates?'
  }
];

const ProductGrid = () => {
  const { t, isRTL } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const gridRef = useRef<HTMLDivElement>(null);

  // Show first 4 products initially, all when expanded
  useEffect(() => {
    setVisibleProducts(isExpanded ? products.length : 4);
  }, [isExpanded]);

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

    const cards = gridRef.current?.querySelectorAll('.scroll-reveal');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [visibleProducts]);

  const handleWhatsAppOrder = (message: string, productName: string) => {
    const fullMessage = `${message} Product: ${productName}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/966544062093?text=${encodedMessage}`, '_blank');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="products" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {isRTL ? 'منتجاتنا للمطاعم والمتاجر' : 'Our Products for Restaurants & Retailers'}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'اكتشف مجموعتنا المتنوعة من منتجات الدجاج الطازجة وعالية الجودة المخصصة للمطاعم والمتاجر والمأكولات'
              : 'Discover our diverse range of fresh, high-quality poultry products designed specifically for restaurants, retailers, and catering businesses'
            }
          </p>
          <div className="mt-4">
            <span className="text-golden-gradient text-sm md:text-base font-bold">
              {isRTL ? 'عهد اليوم عهد كل يوم' : 'Today\'s Promise, Every Day\'s Promise'}
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
        >
          {products.slice(0, visibleProducts).map((product, index) => (
            <Card 
              key={product.id}
              className={`scroll-reveal hover-lift group cursor-pointer border-border/50 hover:border-golden-primary/70 transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-latin'} relative overflow-hidden bg-card shadow-lg hover:shadow-golden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0 relative">
                <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={product.image}
                    alt={isRTL ? product.nameAr : product.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Enhanced WhatsApp Order Ribbon */}
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <MessageCircle className="h-3 w-3 inline mr-1" />
                  {isRTL ? 'واتساب' : 'WhatsApp'}
                </div>
              </CardHeader>
              <CardContent className="p-2 md:p-3">
                <CardTitle className="text-xs md:text-sm font-bold text-primary mb-1 group-hover:text-golden-primary transition-colors line-clamp-1">
                  {isRTL ? product.nameAr : product.nameEn}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground mb-2 md:mb-3 line-clamp-2 leading-tight">
                  {isRTL ? product.descriptionAr : product.descriptionEn}
                </CardDescription>

                <Button
                  onClick={() => handleWhatsAppOrder(
                    product.whatsappMessage, 
                    isRTL ? product.nameAr : product.nameEn
                  )}
                  size="sm"
                  className="w-full btn-golden hover-lift group/btn text-xs py-1 h-7 md:h-8"
                >
                  <MessageCircle className={`h-3 w-3 ${isRTL ? 'ml-1' : 'mr-1'} group-hover/btn:scale-110 transition-transform`} />
                  <span className="hidden sm:inline">
                    {isRTL ? 'استفسار تجاري' : 'Business Inquiry'}
                  </span>
                  <span className="sm:hidden">
                    {isRTL ? 'استفسار' : 'Inquiry'}
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Expandable Button */}
        <div className="text-center mt-8 md:mt-12">
          <Button 
            onClick={toggleExpanded}
            size="lg"
            className="btn-golden-intense hover-lift px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold"
          >
            {isExpanded ? (
              <>
                <Minus className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {isRTL ? 'إخفاء المنتجات' : 'Show Less'}
              </>
            ) : (
              <>
                <Plus className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {isRTL ? 'عرض كافة المنتجات' : 'View Complete Catalog'}
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
