
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, ChefHat } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Recipe {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  prepTime: string;
  servings: string;
  difficulty: string;
  ingredients: {
    en: string[];
    ar: string[];
  };
}

const recipes: Recipe[] = [
  {
    id: '1',
    nameEn: 'Grilled Shawarma Platter',
    nameAr: 'طبق الشاورما المشوية',
    descriptionEn: 'Perfectly seasoned shawarma served with rice and vegetables',
    descriptionAr: 'شاورما متبلة بشكل مثالي تُقدم مع الأرز والخضار',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop&crop=center',
    prepTime: '25 min',
    servings: '4-6',
    difficulty: 'Easy',
    ingredients: {
      en: ['1kg Seasoned Shawarma from Ahd Alyoom', 'Basmati Rice', 'Mixed Vegetables', 'Garlic Sauce'],
      ar: ['1 كيلو شاورما متبلة من عهد اليوم', 'أرز بسمتي', 'خضار مشكلة', 'صلصة الثوم']
    }
  },
  {
    id: '2',
    nameEn: 'Herb-Crusted Whole Chicken',
    nameAr: 'دجاج كامل بالأعشاب',
    descriptionEn: 'Roasted whole chicken with Mediterranean herbs and spices',
    descriptionAr: 'دجاج كامل محمص بالأعشاب والتوابل المتوسطية',
    image: 'https://images.unsplash.com/photo-1598103442097-9c6d5b2e5d3a?w=400&h=300&fit=crop&crop=center',
    prepTime: '90 min',
    servings: '6-8',
    difficulty: 'Medium',
    ingredients: {
      en: ['1 Whole Chicken (1.2kg) from Ahd Alyoom', 'Fresh Herbs', 'Olive Oil', 'Root Vegetables'],
      ar: ['دجاج كامل (1.2 كيلو) من عهد اليوم', 'أعشاب طازجة', 'زيت زيتون', 'خضار جذرية']
    }
  },
  {
    id: '3',
    nameEn: 'Spicy Chicken Wings',
    nameAr: 'أجنحة دجاج حارة',
    descriptionEn: 'Crispy chicken wings with signature spicy glaze',
    descriptionAr: 'أجنحة دجاج مقرمشة مع الصقيل الحار المميز',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop&crop=center',
    prepTime: '45 min',
    servings: '3-4',
    difficulty: 'Easy',
    ingredients: {
      en: ['1kg Chicken Wings from Ahd Alyoom', 'Hot Sauce', 'Honey', 'Butter', 'Garlic'],
      ar: ['1 كيلو أجنحة دجاج من عهد اليوم', 'صلصة حارة', 'عسل', 'زبدة', 'ثوم']
    }
  },
  {
    id: '4',
    nameEn: 'Chicken Liver Pâté',
    nameAr: 'باتيه كبد الدجاج',
    descriptionEn: 'Smooth and rich chicken liver pâté perfect for appetizers',
    descriptionAr: 'باتيه كبد دجاج ناعم وغني مثالي للمقبلات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center',
    prepTime: '30 min',
    servings: '8-10',
    difficulty: 'Medium',
    ingredients: {
      en: ['500g Chicken Liver from Ahd Alyoom', 'Butter', 'Onions', 'Brandy', 'Cream'],
      ar: ['500 جرام كبد دجاج من عهد اليوم', 'زبدة', 'بصل', 'براندي', 'كريمة']
    }
  },
  {
    id: '5',
    nameEn: 'Chicken Burger Deluxe',
    nameAr: 'برغر الدجاج الفاخر',
    descriptionEn: 'Gourmet chicken burger made with fresh ground chicken',
    descriptionAr: 'برغر دجاج فاخر مصنوع من الدجاج المفروم الطازج',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center',
    prepTime: '20 min',
    servings: '4',
    difficulty: 'Easy',
    ingredients: {
      en: ['500g Ground Chicken from Ahd Alyoom', 'Burger Buns', 'Lettuce', 'Tomato', 'Special Sauce'],
      ar: ['500 جرام دجاج مفروم من عهد اليوم', 'خبز برغر', 'خس', 'طماطم', 'صلصة خاصة']
    }
  }
];

const RecipeCarousel = () => {
  const { isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recipes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextRecipe = () => {
    setCurrentIndex((prev) => (prev + 1) % recipes.length);
    setIsAutoPlaying(false);
  };

  const prevRecipe = () => {
    setCurrentIndex((prev) => (prev - 1 + recipes.length) % recipes.length);
    setIsAutoPlaying(false);
  };

  const goToRecipe = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleGetRecipe = (recipeName: string) => {
    const message = isRTL 
      ? `مرحباً! أريد الحصول على الوصفة الكاملة لـ ${recipeName} مع قائمة المكونات والتعليمات من عهد اليوم.`
      : `Hello! I would like to get the complete recipe for ${recipeName} with ingredients list and instructions from Ahd Alyoom.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966544062093?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 md:mb-12 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {isRTL ? 'وصفات المطاعم المميزة' : 'Signature Restaurant Recipes'}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'وصفات مجربة ومختارة بعناية لمساعدة مطعمك على تقديم أطباق مميزة باستخدام منتجاتنا الطازجة'
              : 'Carefully curated and tested recipes to help your restaurant create exceptional dishes using our fresh products'
            }
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${isRTL ? currentIndex * 100 : -currentIndex * 100}%)` }}
              >
                {recipes.map((recipe, index) => (
                  <div key={recipe.id} className="w-full flex-shrink-0 px-2">
                    <Card className="overflow-hidden shadow-lg border-0 bg-card">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <div className="aspect-[4/3] md:aspect-square overflow-hidden">
                            <img
                              src={recipe.image}
                              alt={isRTL ? recipe.nameAr : recipe.nameEn}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
                          <div>
                            <CardHeader className="p-0 mb-3 md:mb-4">
                              <CardTitle className={`text-lg md:text-2xl font-bold text-primary mb-2 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                                {isRTL ? recipe.nameAr : recipe.nameEn}
                              </CardTitle>
                              <CardDescription className={`text-sm md:text-base text-muted-foreground ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                                {isRTL ? recipe.descriptionAr : recipe.descriptionEn}
                              </CardDescription>
                            </CardHeader>

                            <div className="flex flex-wrap gap-3 md:gap-4 mb-3 md:mb-4 text-xs md:text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                                <span>{recipe.prepTime}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3 md:h-4 md:w-4" />
                                <span>{recipe.servings}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <ChefHat className="h-3 w-3 md:h-4 md:w-4" />
                                <span>{recipe.difficulty}</span>
                              </div>
                            </div>

                            <div className={`mb-4 md:mb-6 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
                              <h4 className="font-semibold text-sm md:text-base text-primary mb-2">
                                {isRTL ? 'المكونات الرئيسية:' : 'Key Ingredients:'}
                              </h4>
                              <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                                {(isRTL ? recipe.ingredients.ar : recipe.ingredients.en).slice(0, 3).map((ingredient, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-golden-primary">•</span>
                                    <span>{ingredient}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <Button
                            onClick={() => handleGetRecipe(isRTL ? recipe.nameAr : recipe.nameEn)}
                            className="btn-golden hover-lift w-full text-xs md:text-sm py-2 md:py-3"
                          >
                            <ChefHat className={`h-3 w-3 md:h-4 md:w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                            {isRTL ? 'احصل على الوصفة الكاملة' : 'Get Complete Recipe'}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={isRTL ? nextRecipe : prevRecipe}
              className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-background/90 hover:bg-background h-8 w-8 md:h-12 md:w-12 shadow-lg"
            >
              <ChevronLeft className="h-3 w-3 md:h-5 md:w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={isRTL ? prevRecipe : nextRecipe}
              className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-background/90 hover:bg-background h-8 w-8 md:h-12 md:w-12 shadow-lg"
            >
              <ChevronRight className="h-3 w-3 md:h-5 md:w-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {recipes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToRecipe(index)}
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

export default RecipeCarousel;
