
import React, { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Product } from '@/types';

const products: Product[] = [
  {
    id: '1',
    nameEn: 'Whole Chicken',
    nameAr: 'دجاج كامل',
    descriptionEn: 'Fresh whole chicken, perfect for restaurants',
    descriptionAr: 'دجاج كامل طازج، مثالي للمطاعم',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=400&fit=crop&crop=center',
    whatsappMessage: 'Hi! I would like to inquire about wholesale pricing for whole fresh chicken.'
  },
  {
    id: '2',
    nameEn: 'Marinated Cuts',
    nameAr: 'قطع متبلة',
    descriptionEn: 'Pre-seasoned chicken cuts ready to cook',
    descriptionAr: 'قطع دجاج متبلة جاهزة للطبخ',
    image: 'https://images.unsplash.com/photo-1598103442097-9c6d5b2e5d3a?w=400&h=400&fit=crop&crop=center',
    whatsappMessage: 'Hello! I am interested in bulk orders for marinated chicken cuts.'
  },
  {
    id: '3',
    nameEn: 'Fresh Cuts',
    nameAr: 'قطع طازجة',
    descriptionEn: 'Premium chicken cuts for versatile cooking',
    descriptionAr: 'قطع دجاج مميزة للطبخ المتنوع',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop&crop=center',
    whatsappMessage: 'Hi! I want to order fresh chicken cuts for my restaurant.'
  },
  {
    id: '4',
    nameEn: 'Shawarma Cuts',
    nameAr: 'لحم الشاورما',
    descriptionEn: 'Specially prepared chicken for shawarma',
    descriptionAr: 'دجاج محضر خصيصاً للشاورما',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=400&fit=crop&crop=center',
    whatsappMessage: 'Hello! I would like to know about shawarma chicken wholesale pricing.'
  },
  {
    id: '5',
    nameEn: 'Premium Selection',
    nameAr: 'التشكيلة المميزة',
    descriptionEn: 'Curated mix of our finest cuts for restaurants',
    descriptionAr: 'مجموعة منتقاة من أفضل القطع للمطاعم',
    image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=400&h=400&fit=crop&crop=center',
    whatsappMessage: 'Hello! I would like to know more about your premium selection for restaurants.'
  }
];

const ProductGrid = () => {
  const { t, isRTL } = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);

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
  }, []);

  const handleWhatsAppOrder = (message: string, productName: string) => {
    const fullMessage = `${message} Product: ${productName}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/966555000000?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {isRTL ? 'منتجاتنا' : 'Our Products'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'اكتشف مجموعتنا المتنوعة من منتجات الدجاج الطازجة وعالية الجودة المخصصة للمطاعم والمتاجر'
              : 'Discover our diverse range of fresh, high-quality poultry products designed for restaurants and retailers'
            }
          </p>
        </div>

        {/* Products Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className={`scroll-reveal hover-lift group cursor-pointer border-border/50 hover:border-golden-primary/50 transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-latin'} relative overflow-hidden`}
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
                {/* WhatsApp Order Ribbon */}
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MessageCircle className="h-3 w-3 inline mr-1" />
                  {isRTL ? 'واتساب' : 'WhatsApp'}
                </div>
              </CardHeader>
              <CardContent className="p-3">
                <CardTitle className="text-sm font-bold text-primary mb-1 group-hover:text-golden-primary transition-colors line-clamp-1">
                  {isRTL ? product.nameAr : product.nameEn}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {isRTL ? product.descriptionAr : product.descriptionEn}
                </CardDescription>

                <Button
                  onClick={() => handleWhatsAppOrder(
                    product.whatsappMessage, 
                    isRTL ? product.nameAr : product.nameEn
                  )}
                  size="sm"
                  className="w-full btn-golden hover-lift group/btn text-xs py-1"
                >
                  <MessageCircle className={`h-3 w-3 ${isRTL ? 'ml-1' : 'mr-1'} group-hover/btn:scale-110 transition-transform`} />
                  {isRTL ? 'استفسار تجاري' : 'Business Inquiry'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover-lift border-golden-primary text-golden-primary hover:bg-golden-primary hover:text-primary"
          >
            {isRTL ? 'عرض كافة المنتجات' : 'View All Products'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
