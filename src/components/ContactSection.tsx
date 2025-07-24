
import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const { t, isRTL } = useLanguage();
  
  const location = {
    id: '1',
    nameEn: 'Dammam - Main Branch',
    nameAr: 'الدمام - الفرع الرئيسي',
    addressEn: 'Ahd Alyoom District, Dammam, Saudi Arabia',
    addressAr: 'حي عهد اليوم، الدمام، المملكة العربية السعودية',
    phone: '+966 13 123 4567',
    hours: isRTL ? 'السبت - الخميس: 6:00 ص - 8:00 م' : 'Sat - Thu: 6:00 AM - 8:00 PM',
    whatsapp: '966131234567',
    email: 'info@ahd-trade.com',
    mapUrl: 'https://maps.google.com/?q=26.422185032368574,50.01926195708667'
  };

  const handleWhatsAppContact = (whatsappNumber: string, locationName: string) => {
    const message = isRTL 
      ? `مرحباً! أود الاستفسار عن أسعار الجملة وخدمات الشركاء التجاريين في ${locationName}` 
      : `Hello! I would like to inquire about wholesale pricing and business partnership services at ${locationName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {isRTL ? 'اتصل بنا' : 'Contact Us'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'زوروا فرعنا أو تواصلوا معنا عبر واتساب للاستفسار عن أسعار الجملة والشراكات التجارية' 
              : 'Visit our branch or contact us via WhatsApp for wholesale pricing and business partnership inquiries'
            }
          </p>
        </div>

        {/* Location and Map */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className={`overflow-hidden border-border/50 hover:border-golden-primary/50 transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
            <div className="grid md:grid-cols-2 gap-0">
              {/* Location Info */}
              <CardContent className="p-8">
                <CardTitle className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-golden-primary" />
                  {isRTL ? location.nameAr : location.nameEn}
                </CardTitle>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-golden-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-muted-foreground">
                        {isRTL ? location.addressAr : location.addressEn}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-golden-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{location.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-golden-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{location.email}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-golden-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{location.hours}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={() => handleWhatsAppContact(location.whatsapp, isRTL ? location.nameAr : location.nameEn)} 
                    className="w-full btn-golden hover-lift group/btn"
                  >
                    <MessageCircle className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} group-hover/btn:scale-110 transition-transform`} />
                    {isRTL ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(location.mapUrl, '_blank')} 
                    className="w-full hover:border-golden-primary hover:text-golden-primary"
                  >
                    <MapPin className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {isRTL ? 'عرض على الخريطة' : 'View on Map'}
                  </Button>
                </div>
              </CardContent>

              {/* Embedded Map */}
              <div className="bg-muted relative overflow-hidden min-h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14292.160086051024!2d50.01926195708667!3d26.422185032368574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fd0007ec3123%3A0xb0cccdb3a1c58374!2z2LnZh9ivINin2YTZitmI2YUgMg!5e0!3m2!1sen!2str!4v1752830526757!5m2!1sen!2str" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  className="absolute inset-0 w-full h-full" 
                />
              </div>
            </div>
          </Card>
        </div>

        {/* General Contact Info */}
        <div className="text-center bg-primary rounded-2xl p-8 text-white">
          <h3 className={`text-2xl font-bold mb-4 text-golden-light ${isRTL ? 'font-arabic' : 'font-latin'}`}>
            {isRTL ? 'للاستفسارات التجارية والشراكات' : 'For Business Inquiries & Partnerships'}
          </h3>
          <p className={`text-lg mb-6 text-white/90 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
            {isRTL 
              ? 'تواصل معنا مباشرة عبر واتساب للحصول على أسعار الجملة وخدمات الشركاء التجاريين' 
              : 'Contact us directly via WhatsApp for wholesale pricing and business partnership services'
            }
          </p>
          <Button 
            onClick={() => handleWhatsAppContact('966555000000', isRTL ? 'الخط التجاري' : 'Business Line')} 
            className="bg-golden-primary text-primary hover:bg-golden-light transition-colors py-3 text-lg font-semibold hover-lift px-[10px]"
          >
            <MessageCircle className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {isRTL ? 'واتساب: +966 555 000 000' : 'WhatsApp: +966 555 000 000'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
