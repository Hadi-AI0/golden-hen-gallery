
import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Newsletter = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: isRTL ? 'خطأ' : 'Error',
        description: isRTL ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        throw error;
      }

      toast({
        title: isRTL ? 'تم الاشتراك بنجاح!' : 'Successfully Subscribed!',
        description: isRTL 
          ? 'شكراً لاشتراككم في نشرتنا الإخبارية للشركاء' 
          : 'Thank you for subscribing to our business partner newsletter',
      });
      
      setEmail('');
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      
      if (error.code === '23505') {
        toast({
          title: isRTL ? 'مشترك بالفعل' : 'Already Subscribed',
          description: isRTL 
            ? 'هذا البريد الإلكتروني مشترك بالفعل في نشرتنا الإخبارية'
            : 'This email is already subscribed to our newsletter',
          variant: 'destructive'
        });
      } else {
        toast({
          title: isRTL ? 'خطأ' : 'Error',
          description: isRTL 
            ? 'حدث خطأ أثناء الاشتراك. يرجى المحاولة مرة أخرى'
            : 'An error occurred while subscribing. Please try again',
          variant: 'destructive'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-dark text-white">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <div className="mb-8">
            <Mail className="h-16 w-16 text-golden-light mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-golden-light">
              {isRTL ? 'نشرة الشركاء التجارية' : 'Business Partner Newsletter'}
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {isRTL 
                ? 'اشترك في نشرتنا الإخبارية للحصول على أحدث العروض التجارية وأسعار الجملة والمنتجات الجديدة المخصصة للمطاعم والمتاجر'
                : 'Subscribe to our newsletter for the latest wholesale offers, bulk pricing, and new products designed for restaurants and retailers'
              }
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isRTL ? 'البريد الإلكتروني للشركة' : 'Business Email Address'}
                className={`flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-golden-light ${isRTL ? 'text-right' : 'text-left'}`}
                disabled={isSubmitting}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-golden hover-lift whitespace-nowrap px-6"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                ) : (
                  <>
                    <Check className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {isRTL ? 'اشتراك' : 'Subscribe'}
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Privacy Notice */}
          <p className={`text-sm text-white/60 mt-6 max-w-lg mx-auto ${isRTL ? 'font-arabic' : 'font-latin'}`}>
            {isRTL 
              ? 'نحن نحترم خصوصية شركتكم ولن نشارك بريدكم الإلكتروني مع أي طرف ثالث. يمكنكم إلغاء الاشتراك في أي وقت.'
              : 'We respect your business privacy and will never share your email with third parties. You can unsubscribe at any time.'
            }
          </p>

          {/* B2B Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-golden-light" />
              </div>
              <h3 className="font-semibold mb-2 text-golden-light">
                {isRTL ? 'أسعار الجملة' : 'Wholesale Pricing'}
              </h3>
              <p className="text-white/80 text-sm">
                {isRTL 
                  ? 'أسعار خاصة للمطاعم والمتاجر'
                  : 'Special pricing for restaurants and retailers'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-golden-light" />
              </div>
              <h3 className="font-semibold mb-2 text-golden-light">
                {isRTL ? 'توريد منتظم' : 'Regular Supply'}
              </h3>
              <p className="text-white/80 text-sm">
                {isRTL 
                  ? 'ضمان التوريد المستمر لعملكم'
                  : 'Guaranteed consistent supply for your business'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-golden-light" />
              </div>
              <h3 className="font-semibold mb-2 text-golden-light">
                {isRTL ? 'خدمة الشركاء' : 'Partner Support'}
              </h3>
              <p className="text-white/80 text-sm">
                {isRTL 
                  ? 'دعم مخصص للشركاء التجاريين'
                  : 'Dedicated support for business partners'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
