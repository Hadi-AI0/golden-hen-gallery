import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  // Replace with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxDRvJRvKw-bWVeM7747MBzpWToMEMCf6_NNhGQeOY8k0f93gpd6QzqmYQIY0orh-4/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: isRTL ? 'خطأ' : 'Error',
        description: isRTL ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: isRTL ? 'خطأ' : 'Error',
        description: isRTL ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to Google Sheets via Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      toast({
        title: isRTL ? 'تم الإرسال بنجاح!' : 'Message Sent Successfully!',
        description: isRTL
          ? 'شكراً لتواصلكم معنا. سنرد عليكم في أقرب وقت ممكن'
          : 'Thank you for contacting us. We will get back to you as soon as possible',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: isRTL ? 'خطأ' : 'Error',
        description: isRTL
          ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى'
          : 'An error occurred while sending your message. Please try again',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-[#0B3D2E] to-[#0a2f24]">      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {isRTL
                ? 'هل لديكم أي استفسارات؟ نحن هنا للمساعدة. تواصلوا معنا للحصول على معلومات حول منتجاتنا وأسعار الجملة والشراكات التجارية'
                : 'Have any questions? We are here to help. Contact us for information about our products, wholesale pricing, and business partnerships'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">

              <Card className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2 text-lg">
                    {isRTL ? 'جودة لا تضاهى' : 'Unmatched Quality'}
                  </h4>
                  <p className="text-white/80">
                    {isRTL
                      ? 'كل منتج يخضع لعمليات فحص دقيقة لضمان أعلى المعايير التجارية.'
                      : 'Every product undergoes rigorous quality checks to ensure the highest commercial standards.'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2 text-lg">
                    {isRTL ? 'توريد يومي منتظم' : 'Regular Daily Supply'}
                  </h4>
                  <p className="text-white/80">
                    {isRTL
                      ? 'جداول توصيل ثابتة من المزارع المحلية'
                      : 'Consistent delivery schedules from local farms'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2 text-lg">
                    {isRTL ? 'معايير تجارية صارمة' : 'Strict Commercial Standards'}
                  </h4>
                  <p className="text-white/80">
                    {isRTL
                      ? 'فحوصات جودة شاملة للمطاعم والمتاجر'
                      : 'Comprehensive quality checks for restaurants and retailers'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2 text-lg">
                    {isRTL ? 'أسعار الجملة' : 'Wholesale Pricing'}
                  </h4>
                  <p className="text-white/80">
                    {isRTL
                      ? 'أسعار تنافسية للشركاء التجاريين'
                      : 'Competitive pricing for business partners.'
                    }
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-white">
                    {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white/90">                          {isRTL ? 'الاسم *' : 'Name *'}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={isRTL ? 'الاسم الكامل' : 'Full Name'}
                          className={isRTL ? 'text-right' : 'text-left'}
                          dir={isRTL ? 'rtl' : 'ltr'}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/90">
                          {isRTL ? 'البريد الإلكتروني *' : 'Email *'}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                          className={isRTL ? 'text-right' : 'text-left'}
                          dir={isRTL ? 'rtl' : 'ltr'}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white/90">
                          {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={isRTL ? 'رقم الهاتف' : 'Phone Number'}
                          className={isRTL ? 'text-right' : 'text-left'}
                          dir={isRTL ? 'rtl' : 'ltr'}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white/90">
                          {isRTL ? 'اسم الشركة' : 'Company Name'}
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={isRTL ? 'اسم الشركة' : 'Company Name'}
                          className={isRTL ? 'text-right' : 'text-left'}
                          dir={isRTL ? 'rtl' : 'ltr'}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white/90">
                        {isRTL ? 'الموضوع' : 'Subject'}
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={isRTL ? 'موضوع الرسالة' : 'Message Subject'}
                        className={isRTL ? 'text-right' : 'text-left'}
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white/90">
                        {isRTL ? 'الرسالة *' : 'Message *'}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
                        className={`min-h-[150px] ${isRTL ? 'text-right' : 'text-left'}`}
                        dir={isRTL ? 'rtl' : 'ltr'}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-golden hover-lift py-6 text-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>{isRTL ? 'جاري الإرسال...' : 'Sending...'}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          <span>{isRTL ? 'إرسال الرسالة' : 'Send Message'}</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
