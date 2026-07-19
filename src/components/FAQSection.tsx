import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const { t, isRTL } = useLanguage();

  const faqs = [
    {
      question: isRTL ? 'كيف أطلب عبر واتساب؟' : 'How do I order via WhatsApp?',
      answer: isRTL 
        ? 'انقر على زر "اشترِ عبر واتساب" في أي منتج أو تواصل معنا مباشرة على رقم واتساب. سنرد عليك فوراً لتأكيد طلبك وتحديد موعد التوصيل.'
        : 'Click the "Order via WhatsApp" button on any product or contact us directly on WhatsApp. We\'ll respond immediately to confirm your order and schedule delivery.'
    },
    {
      question: isRTL ? 'كيف أحفظ الدجاج الطازج؟' : 'How should I store fresh chicken?',
      answer: isRTL
        ? 'احفظ الدجاج في الثلاجة عند درجة حرارة أقل من 4 درجات مئوية. استخدمه خلال 1-2 يوم من الشراء. للتجميد، يمكن حفظه لمدة تصل إلى 6 أشهر.'
        : 'Store chicken in the refrigerator below 4°C. Use within 1-2 days of purchase. For freezing, it can be stored for up to 6 months.'
    },
    {
      question: isRTL ? 'ما هي أفضل طرق الطهي؟' : 'What are the best cooking methods?',
      answer: isRTL
        ? 'دجاجنا مثالي للشوي، القلي، أو الطبخ في الفرن. تأكد من وصول درجة الحرارة الداخلية إلى 75 درجة مئوية. استخدم البهارات والأعشاب لأفضل نكهة.'
        : 'Our chicken is perfect for grilling, frying, or oven cooking. Ensure internal temperature reaches 75°C. Use spices and herbs for the best flavor.'
    },
    {
      question: isRTL ? 'هل تقدمون خدمة التوصيل؟' : 'Do you offer delivery service?',
      answer: isRTL
        ? 'نعم، نقدم خدمة توصيل سريعة ومبردة في جميع أنحاء المنطقة. التوصيل مجاني للطلبات فوق 100 ريال.'
        : 'Yes, we offer fast refrigerated delivery throughout the region. Free delivery for orders above 100 SAR.'
    },
    {
      question: isRTL ? 'ما فوائد الاشتراك في النشرة الإخبارية؟' : 'What are the benefits of newsletter subscription?',
      answer: isRTL
        ? 'احصل على عروض حصرية، وصفات جديدة، ونصائح طبخ أسبوعية. بالإضافة إلى خصم 10% على أول طلب.'
        : 'Get exclusive offers, new recipes, and weekly cooking tips. Plus 10% discount on your first order.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'أجوبة على أكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا'
              : 'Answers to the most common questions about our products and services'
            }
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className={`${isRTL ? 'font-arabic text-right' : 'font-latin text-left'} text-lg hover:text-primary transition-colors`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={`${isRTL ? 'font-arabic text-right' : 'font-latin text-left'} text-muted-foreground leading-relaxed`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;