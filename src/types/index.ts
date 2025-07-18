export interface Language {
  code: 'ar' | 'en';
  name: string;
  direction: 'rtl' | 'ltr';
}

export interface TranslationKeys {
  // Navigation
  home: string;
  products: string;
  about: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  orderWhatsApp: string;
  
  // Products
  wholeDhicken: string;
  marinatedCuts: string;
  freshCuts: string;
  premiumSelection: string;
  
  // About
  ourStory: string;
  quality: string;
  sourcing: string;
  
  // Contact
  locations: string;
  workingHours: string;
  
  // Newsletter
  newsletter: string;
  emailPlaceholder: string;
  subscribe: string;
  subscribeSuccess: string;
  
  // General
  learnMore: string;
  viewAll: string;
}

export interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  price?: string;
  whatsappMessage: string;
}

export interface CarouselSlide {
  id: string;
  image: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  ctaEn: string;
  ctaAr: string;
  whatsappMessage: string;
}