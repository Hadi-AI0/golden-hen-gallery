
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      'Hello! I would like to get in touch with Ahd Alyoom for business inquiries. Please provide more information about your services.'
    );
    window.open(`https://wa.me/966544062093?text=${message}`, '_blank');
  };

  const handleEmailContact = () => {
    window.open('mailto:info@ahd-trade.com?subject=Business Inquiry - Ahd Alyoom', '_blank');
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-12 md:py-20 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <div className="scroll-reveal">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? 'نحن هنا لخدمتكم وتلبية احتياجاتكم التجارية. تواصلوا معنا اليوم'
                : 'We\'re here to serve you and meet your business needs. Contact us today'
              }
            </p>
            <div className="mt-4">
              <span className="text-golden-gradient text-sm md:text-base font-bold">
                {isRTL ? 'عهد اليوم عهد كل يوم' : 'Today\'s Promise, Every Day\'s Promise'}
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className={`space-y-6 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
            <div className="scroll-reveal">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
                {isRTL ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-card rounded-lg border border-border/50 hover:border-golden-primary/50 transition-colors hover:shadow-golden">
                  <div className="p-2 bg-gradient-to-r from-golden-primary to-golden-secondary rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      {isRTL ? 'الهاتف' : 'Phone'}
                    </h4>
                    <p className="text-muted-foreground">+966 54 406 2093</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-card rounded-lg border border-border/50 hover:border-golden-primary/50 transition-colors hover:shadow-golden">
                  <div className="p-2 bg-gradient-to-r from-golden-primary to-golden-secondary rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      {isRTL ? 'البريد الإلكتروني' : 'Email'}
                    </h4>
                    <p className="text-muted-foreground">info@ahd-trade.com</p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-card rounded-lg border border-border/50 hover:border-golden-primary/50 transition-colors hover:shadow-golden">
                  <div className="p-2 bg-gradient-to-r from-golden-primary to-golden-secondary rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      {isRTL ? 'الموقع' : 'Location'}
                    </h4>
                    <p className="text-muted-foreground">
                      {isRTL ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                    </p>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-card rounded-lg border border-border/50 hover:border-golden-primary/50 transition-colors hover:shadow-golden">
                  <div className="p-2 bg-gradient-to-r from-golden-primary to-golden-secondary rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      {isRTL ? 'ساعات العمل' : 'Business Hours'}
                    </h4>
                    <p className="text-muted-foreground">
                      {isRTL ? 'الأحد - الخميس: 8:00 ص - 6:00 م' : 'Sunday - Thursday: 8:00 AM - 6:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Buttons */}
            <div className="scroll-reveal flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsAppContact}
                className="btn-golden-intense hover-lift flex-1 py-3 md:py-4"
              >
                <MessageCircle className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {isRTL ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
              </Button>
              
              <Button
                onClick={handleEmailContact}
                variant="outline"
                className="hover-lift flex-1 py-3 md:py-4 border-golden-primary text-golden-primary hover:bg-golden-primary hover:text-primary"
              >
                <Mail className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {isRTL ? 'إرسال بريد إلكتروني' : 'Send Email'}
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="scroll-reveal">
            <div className="h-96 md:h-[500px] rounded-xl overflow-hidden shadow-elegant border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.1950788616857!2d46.7249!3d24.6408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02b35e5b7f3b%3A0x3b5f5e5b7e3f7f3b!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1697000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={isRTL ? 'موقعنا على الخريطة' : 'Our Location'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
