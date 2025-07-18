import React from 'react';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const { t, isRTL } = useLanguage();

  const location = {
    id: '1',
    nameEn: 'Riyadh - Main Branch',
    nameAr: 'الرياض - الفرع الرئيسي',
    addressEn: 'King Fahd Road, Al Malaz District, Riyadh 12612',
    addressAr: 'طريق الملك فهد، حي الملز، الرياض 12612',
    phone: '+966 11 234 5678',
    hours: isRTL ? 'السبت - الخميس: 8:00 ص - 10:00 م' : 'Sat - Thu: 8:00 AM - 10:00 PM',
    whatsapp: '966112345678',
    mapUrl: 'https://maps.google.com/?q=24.7136,46.6753'
  };

  const handleWhatsAppContact = (whatsappNumber: string, locationName: string) => {
    const message = isRTL 
      ? `مرحباً! أود الاستفسار عن خدمات عهد اليوم في ${locationName}`
      : `Hello! I would like to inquire about ahd alyoom services at ${locationName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.contact}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'زوروا أحد فروعنا أو تواصلوا معنا عبر واتساب للطلب والاستفسار'
              : 'Visit one of our branches or contact us via WhatsApp for orders and inquiries'
            }
          </p>
        </div>

        {/* Single Location Block */}
        <div className="max-w-4xl mx-auto mb-16">
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
                    <Clock className="h-5 w-5 text-golden-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{location.hours}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => handleWhatsAppContact(
                      location.whatsapp, 
                      isRTL ? location.nameAr : location.nameEn
                    )}
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

              {/* Map Thumbnail */}
              <div className="bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-golden">
                  <div className="text-center text-white p-8">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-golden-light" />
                    <h3 className="text-xl font-bold mb-2">
                      {isRTL ? 'موقعنا' : 'Our Location'}
                    </h3>
                    <p className="text-white/90">
                      {isRTL ? 'انقر لعرض الموقع على الخريطة' : 'Click to view location on map'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* General Contact Info */}
        <div className="text-center bg-primary rounded-2xl p-8 text-white">
          <h3 className={`text-2xl font-bold mb-4 text-golden-light ${isRTL ? 'font-arabic' : 'font-latin'}`}>
            {isRTL ? 'للطلبات والاستفسارات العامة' : 'For General Orders & Inquiries'}
          </h3>
          <p className={`text-lg mb-6 text-white/90 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
            {isRTL 
              ? 'تواصل معنا مباشرة عبر واتساب لطلب سريع وخدمة مميزة'
              : 'Contact us directly via WhatsApp for quick orders and premium service'
            }
          </p>
          <Button
            onClick={() => handleWhatsAppContact('966555000000', isRTL ? 'الخط العام' : 'General Line')}
            className="bg-golden-primary text-primary hover:bg-golden-light transition-colors px-8 py-3 text-lg font-semibold hover-lift"
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