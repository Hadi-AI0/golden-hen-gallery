import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
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
  const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

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
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {isRTL
                ? 'هل لديكم أي استفسارات؟ نحن هنا للمساعدة. تواصلوا معنا للحصول على معلومات حول منتجاتنا وأسعار الجملة والشراكات التجارية'
                : 'Have any questions? We are here to help. Contact us for information about our products, wholesale pricing, and business partnerships'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
                </h3>
                <p className="text-gray-600 mb-8">
                  {isRTL
                    ? 'يمكنكم التواصل معنا عبر أي من القنوات التالية'
                    : 'You can reach us through any of the following channels'
                  }
                </p>
              </div>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 bg-golden-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-golden-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {isRTL ? 'البريد الإلكتروني' : 'Email'}
                    </h4>
                    <p className="text-gray-600">info@yourcompany.com</p>
                    <p className="text-gray-600">sales@yourcompany.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 bg-golden-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-golden-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {isRTL ? 'الهاتف' : 'Phone'}
                    </h4>
                    <p className="text-gray-600">+971 XX XXX XXXX</p>
                    <p className="text-gray-600">{isRTL ? 'متاح من الأحد إلى الخميس، ٩ ص - ٦ م' : 'Available Sun-Thu, 9 AM - 6 PM'}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 bg-golden-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-golden-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {isRTL ? 'العنوان' : 'Address'}
                    </h4>
                    <p className="text-gray-600">
                      {isRTL
                        ? 'دبي، الإمارات العربية المتحدة'
                        : 'Dubai, United Arab Emirates'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-gradient-dark text-white">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-golden-light mb-4">
                    {isRTL ? 'ساعات العمل' : 'Business Hours'}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{isRTL ? 'الأحد - الخميس' : 'Sunday - Thursday'}</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>{isRTL ? 'الجمعة - السبت' : 'Friday - Saturday'}</span>
                      <span>{isRTL ? 'مغلق' : 'Closed'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                    {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">
                          {isRTL ? 'الاسم *' : 'Name *'}
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
                        <Label htmlFor="email" className="text-gray-700">
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
                        <Label htmlFor="phone" className="text-gray-700">
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
                        <Label htmlFor="company" className="text-gray-700">
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
                      <Label htmlFor="subject" className="text-gray-700">
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
                      <Label htmlFor="message" className="text-gray-700">
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
