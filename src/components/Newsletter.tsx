import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: isRTL ? 'تم الاشتراك بنجاح!' : 'Successfully Subscribed!',
      description: isRTL 
        ? 'شكراً لاشتراككم في نشرتنا الإخبارية' 
        : 'Thank you for subscribing to our newsletter',
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-gradient-dark text-white">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <div className="mb-8">
            <Mail className="h-16 w-16 text-golden-light mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-golden-light">
              {t.newsletter}
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {isRTL 
                ? 'اشترك في نشرتنا الإخبارية للحصول على آخر العروض والمنتجات الجديدة مباشرة في بريدك الإلكتروني'
                : 'Subscribe to our newsletter to get the latest offers and new products delivered straight to your inbox'
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
                placeholder={t.emailPlaceholder}
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
                    {t.subscribe}
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Privacy Notice */}
          <p className={`text-sm text-white/60 mt-6 max-w-lg mx-auto ${isRTL ? 'font-arabic' : 'font-latin'}`}>
            {isRTL 
              ? 'نحن نحترم خصوصيتكم ولن نشارك بريدكم الإلكتروني مع أي طرف ثالث. يمكنكم إلغاء الاشتراك في أي وقت.'
              : 'We respect your privacy and will never share your email with third parties. You can unsubscribe at any time.'
            }
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-golden-light" />
              </div>
              <h3 className="font-semibold mb-2 text-golden-light">
                {isRTL ? 'عروض حصرية' : 'Exclusive Offers'}
              </h3>
              <p className="text-white/80 text-sm">
                {isRTL 
                  ? 'احصل على عروض خاصة للمشتركين فقط'
                  : 'Get special deals exclusive to subscribers'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-golden-light" />
              </div>
              <h3 className="font-semibold mb-2 text-golden-light">
                {isRTL ? 'منتجات جديدة' : 'New Products'}
              </h3>
              <p className="text-white/80 text-sm">
                {isRTL 
                  ? 'كن أول من يعرف عن منتجاتنا الجديدة'
                  : 'Be first to know about our new products'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-golden-light" />
              </div>
              <h3 className="font-semibold mb-2 text-golden-light">
                {isRTL ? 'نصائح الطبخ' : 'Cooking Tips'}
              </h3>
              <p className="text-white/80 text-sm">
                {isRTL 
                  ? 'وصفات ونصائح لأفضل النتائج'
                  : 'Recipes and tips for best results'
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