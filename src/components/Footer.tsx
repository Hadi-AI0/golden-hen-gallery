import React from 'react';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'products', href: '#products' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  const handleWhatsAppContact = () => {
    const message = isRTL 
      ? 'مرحباً! أود الاستفسار عن منتجاتكم'
      : 'Hello! I would like to inquire about your products';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966555000000?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/4f95bf68-a406-4c23-9f4e-314b3786331a.png" 
                alt="ahd alyoom Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-golden-light">
                {isRTL ? 'عهد اليوم' : 'ahd alyoom'}
              </span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              {isRTL 
                ? 'نحن نقدم أفضل أنواع الدجاج الطازج من مزارع محلية مختارة بعناية، مع الالتزام بأعلى معايير الجودة والسلامة لضمان رضا عملائنا.'
                : 'We provide the finest fresh poultry from carefully selected local farms, committed to the highest quality and safety standards to ensure customer satisfaction.'
              }
            </p>
            <button
              onClick={handleWhatsAppContact}
              className="inline-flex items-center gap-2 bg-golden-primary text-primary px-6 py-3 rounded-lg hover:bg-golden-light transition-colors font-semibold hover-lift"
            >
              <MessageCircle className="h-5 w-5" />
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-golden-light">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-golden-light transition-colors"
                  >
                    {t[link.key as keyof typeof t]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-golden-light">
              {isRTL ? 'معلومات التواصل' : 'Contact Info'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-golden-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">+966 555 000 000</p>
                  <p className="text-sm text-white/60">
                    {isRTL ? 'الخط الساخن' : 'Hotline'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-golden-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">info@ahdalyoom.sa</p>
                  <p className="text-sm text-white/60">
                    {isRTL ? 'البريد الإلكتروني' : 'Email'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-golden-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">
                    {isRTL ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
                  </p>
                  <p className="text-sm text-white/60">
                    {isRTL ? 'فروع متعددة' : 'Multiple Locations'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-white/60 text-sm ${isRTL ? 'font-arabic' : 'font-latin'}`}>
              {isRTL 
                ? `© ${new Date().getFullYear()} عهد اليوم. جميع الحقوق محفوظة.`
                : `© ${new Date().getFullYear()} ahd alyoom. All rights reserved.`
              }
            </p>
            
            <div className={`flex items-center gap-6 text-sm ${isRTL ? 'font-arabic' : 'font-latin'}`}>
              <a href="#" className="text-white/60 hover:text-golden-light transition-colors">
                {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-white/60 hover:text-golden-light transition-colors">
                {isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;