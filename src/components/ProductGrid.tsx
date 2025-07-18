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
    descriptionEn: 'Fresh whole chicken, perfect for family meals',
    descriptionAr: 'دجاج كامل طازج، مثالي لوجبات العائلة',
    image: '/lovable-uploads/ab8fe531-3541-4806-88e9-dfdf8c3f098c.png',
    price: '25 SAR',
    whatsappMessage: 'Hi! I would like to order a whole fresh chicken.'
  },
  {
    id: '2',
    nameEn: 'Marinated Cuts',
    nameAr: 'قطع متبلة',
    descriptionEn: 'Pre-seasoned chicken cuts ready to cook',
    descriptionAr: 'قطع دجاج متبلة جاهزة للطبخ',
    image: '/lovable-uploads/b83dab92-4488-4b11-a28a-fccfb11a063f.png',
    price: '30 SAR',
    whatsappMessage: 'Hello! I am interested in your marinated chicken cuts.'
  },
  {
    id: '3',
    nameEn: 'Fresh Cuts',
    nameAr: 'قطع طازجة',
    descriptionEn: 'Premium chicken cuts for versatile cooking',
    descriptionAr: 'قطع دجاج مميزة للطبخ المتنوع',
    image: '/lovable-uploads/4f95bf68-a406-4c23-9f4e-314b3786331a.png',
    price: '28 SAR',
    whatsappMessage: 'Hi! I want to order fresh chicken cuts.'
  },
  {
    id: '4',
    nameEn: 'Premium Selection',
    nameAr: 'التشكيلة المميزة',
    descriptionEn: 'Curated mix of our finest cuts',
    descriptionAr: 'مجموعة منتقاة من أفضل القطع لدينا',
    image: '/lovable-uploads/ab8fe531-3541-4806-88e9-dfdf8c3f098c.png',
    price: '45 SAR',
    whatsappMessage: 'Hello! I would like to know more about your premium selection.'
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
            {t.products}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'اكتشف مجموعتنا المتنوعة من منتجات الدجاج الطازجة وعالية الجودة'
              : 'Discover our diverse range of fresh, high-quality poultry products'
            }
          </p>
        </div>

        {/* Products Grid - Smaller, Elegant Cards */}
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
                <CardDescription className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {isRTL ? product.descriptionAr : product.descriptionEn}
                </CardDescription>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-golden-primary">
                    {product.price}
                  </span>
                </div>

                <Button
                  onClick={() => handleWhatsAppOrder(
                    product.whatsappMessage, 
                    isRTL ? product.nameAr : product.nameEn
                  )}
                  size="sm"
                  className="w-full btn-golden hover-lift group/btn text-xs py-1"
                >
                  <MessageCircle className={`h-3 w-3 ${isRTL ? 'ml-1' : 'mr-1'} group-hover/btn:scale-110 transition-transform`} />
                  {isRTL ? 'اشترِ عبر واتساب' : 'Order via WhatsApp'}
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
            {t.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;