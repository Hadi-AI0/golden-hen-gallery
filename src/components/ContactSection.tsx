import React from 'react';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const { t, isRTL } = useLanguage();

  const locations = [
    {
      id: '1',
      nameEn: 'Riyadh - Al Malaz',
      nameAr: 'الرياض - الملز',
      addressEn: 'King Fahd Road, Al Malaz District',
      addressAr: 'طريق الملك فهد، حي الملز',
      phone: '+966 11 234 5678',
      hours: isRTL ? 'السبت - الخميس: 8:00 ص - 10:00 م' : 'Sat - Thu: 8:00 AM - 10:00 PM',
      whatsapp: '966112345678'
    },
    {
      id: '2',
      nameEn: 'Jeddah - Al Hamra',
      nameAr: 'جدة - الحمراء',
      addressEn: 'Prince Sultan Road, Al Hamra District',
      addressAr: 'طريق الأمير سلطان، حي الحمراء',
      phone: '+966 12 345 6789',
      hours: isRTL ? 'السبت - الخميس: 8:00 ص - 10:00 م' : 'Sat - Thu: 8:00 AM - 10:00 PM',
      whatsapp: '966123456789'
    },
    {
      id: '3',
      nameEn: 'Dammam - Al Faisaliyah',
      nameAr: 'الدمام - الفيصلية',
      addressEn: 'King Saud Road, Al Faisaliyah District',
      addressAr: 'طريق الملك سعود، حي الفيصلية',
      phone: '+966 13 456 7890',
      hours: isRTL ? 'السبت - الخميس: 8:00 ص - 10:00 م' : 'Sat - Thu: 8:00 AM - 10:00 PM',
      whatsapp: '966134567890'
    }
  ];

  const handleWhatsAppContact = (whatsappNumber: string, locationName: string) => {
    const message = isRTL 
      ? `مرحباً! أود الاستفسار عن خدماتكم في فرع ${locationName}`
      : `Hello! I would like to inquire about your services at ${locationName} branch`;
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

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location) => (
            <Card 
              key={location.id}
              className={`hover-lift group border-border/50 hover:border-golden-primary/50 transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-latin'}`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-golden-primary transition-colors flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-golden-primary" />
                  {isRTL ? location.nameAr : location.nameEn}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {isRTL ? location.addressAr : location.addressEn}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-golden-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{location.phone}</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-golden-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{location.hours}</span>
                </div>

                <Button
                  onClick={() => handleWhatsAppContact(
                    location.whatsapp, 
                    isRTL ? location.nameAr : location.nameEn
                  )}
                  className="w-full btn-golden hover-lift group/btn mt-4"
                >
                  <MessageCircle className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} group-hover/btn:scale-110 transition-transform`} />
                  {isRTL ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
                </Button>
              </CardContent>
            </Card>
          ))}
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