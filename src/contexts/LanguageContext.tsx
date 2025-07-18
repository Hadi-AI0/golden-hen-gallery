import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationKeys } from '@/types';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: TranslationKeys;
  isRTL: boolean;
}

const languages: Language[] = [
  { code: 'ar', name: 'العربية', direction: 'rtl' },
  { code: 'en', name: 'English', direction: 'ltr' }
];

const translations: Record<string, TranslationKeys> = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    products: 'المنتجات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    
    // Hero Section
    heroTitle: 'دجاج طازج وعالي الجودة',
    heroSubtitle: 'من المزرعة إلى مائدتك، نقدم أفضل أنواع الدجاج الطازج',
    orderWhatsApp: 'اطلب عبر واتساب',
    
    // Products
    wholeDhicken: 'دجاج كامل',
    marinatedCuts: 'قطع متبلة',
    freshCuts: 'قطع طازجة',
    premiumSelection: 'التشكيلة المميزة',
    
    // About
    ourStory: 'قصتنا',
    quality: 'الجودة',
    sourcing: 'المصدر',
    
    // Contact
    locations: 'فروعنا',
    workingHours: 'ساعات العمل',
    
    // Newsletter
    newsletter: 'النشرة الإخبارية',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    subscribe: 'اشترك',
    subscribeSuccess: 'تم الاشتراك بنجاح!',
    
    // General
    learnMore: 'اعرف أكثر',
    viewAll: 'عرض الكل'
  },
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    about: 'About Us',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Fresh, Premium Quality Poultry',
    heroSubtitle: 'From farm to table, we deliver the finest fresh poultry',
    orderWhatsApp: 'Order via WhatsApp',
    
    // Products
    wholeDhicken: 'Whole Chicken',
    marinatedCuts: 'Marinated Cuts',
    freshCuts: 'Fresh Cuts',
    premiumSelection: 'Premium Selection',
    
    // About
    ourStory: 'Our Story',
    quality: 'Quality',
    sourcing: 'Sourcing',
    
    // Contact
    locations: 'Our Locations',
    workingHours: 'Working Hours',
    
    // Newsletter
    newsletter: 'Newsletter',
    emailPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    subscribeSuccess: 'Successfully subscribed!',
    
    // General
    learnMore: 'Learn More',
    viewAll: 'View All'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[1]); // Default to English

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.direction;
  };

  useEffect(() => {
    // Set initial language attributes
    document.documentElement.lang = currentLanguage.code;
    document.documentElement.dir = currentLanguage.direction;
  }, []);

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t: translations[currentLanguage.code],
    isRTL: currentLanguage.direction === 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { languages };