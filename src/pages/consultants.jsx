import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import HeaderThree from "../layout/headers/header-3";
import Footer from "../layout/footers/footer";
import { faqPageSchema } from "@/src/lib/schema";

import hero_img from "@assets/img/slider/slide-thumb.png";
import shape_1 from "@assets/img/shape/shape-s-1.png";

const content = {
  en: {
    seoTitle: "Link Building for Consultants",
    seoDesc: "Linkaza handles placements, content, and campaign management so independent SEO consultants can focus on strategy, not admin work.",
    heroTitle1: "Deliver Top-Tier Results.",
    heroTitle2: "In Half the Time.",
    heroDesc: "As an SEO consultant, your expertise is your greatest asset. Linkaza is the execution platform that frees you to focus on what truly matters: your clients' success.",
    ctaTrial: "Start Your Free Trial",
    ctaHow: "See How It Works",
    dilemmaTitle: "The Consultant's Dilemma",
    dilemmaQuote: "You're an expert at SEO strategy, but the day-to-day tasks of finding publishers, negotiating placements, and managing content can consume your entire schedule.",
    growthTitle: "More Clients Should Mean More Growth, Not More Paperwork.",
    growthDesc1: "This administrative grind is the biggest obstacle to scaling your consultancy.",
    growthStrong: "Linkaza automates the execution.",
    growthDesc2: "We provide the tools to manage the entire fulfillment process efficiently, turning hours of tedious work into a few simple clicks.",
    assistantTitle: "Your Personal Link Building Assistant",
    assistantSub: "How Linkaza Empowers Your Consultancy",
    features: [
      { title: "Access a High-Quality Network", text: "Forget cold outreach. Get immediate access to our marketplace of 80,000+ vetted publishers. Find niche-relevant sites in minutes.", icon: "fa-search" },
      { title: "Streamline Your Workflow", text: "Manage all client campaigns from one dashboard. Track orders, monitor live links, and handle payments effortlessly.", icon: "fa-sync-alt" },
      { title: "Impress Clients with Reports", text: "Easily track progress and ROI. Provide your clients with the data they need to see the value you're delivering.", icon: "fa-chart-line" },
      { title: "Flexible Pricing", text: "Pay-as-you-go model means zero overhead. No subscriptions. You only pay for the links you order for your clients.", icon: "fa-wallet" },
    ],
    ctaHours: "What Will You Do With an Extra 10 Hours a Week?",
    ctaHoursDesc: "By offloading link building to Linkaza, our consultants save an average of 10-15 hours per week. Reinvest that time into onboarding new clients and growing your brand.",
    ctaSaveTime: "Start Saving Time",
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "How exactly does Linkaza help with link building for consultants?", answer: "Linkaza acts as your execution partner. We provide the platform to find placements, order content, and manage campaigns efficiently. This removes the administrative burden, allowing you to focus on strategy." },
      { question: "Can I manage campaigns for multiple clients at once?", answer: "Yes. The platform is designed for you to create and manage separate campaigns for each of your clients within a single account, keeping everything organized." },
      { question: "As a freelancer, I'm worried about costs. Is this affordable?", answer: "Definitely. Our pay-as-you-go model is perfect for consultants. There are no subscription fees, so you have no fixed costs. You only pay for the links you order." },
    ],
    finalCtaTitle: "Ready to Scale Your Consulting Business?",
    finalCtaSub: "Become the Strategist, Not Just the Executor.",
    finalCtaBtn: "Try Linkaza Completely Free",
  },
  ar: {
    seoTitle: "بناء الروابط للمستشارين",
    seoDesc: "Linkaza بتتولى أماكن النشر، المحتوى، وإدارة الحملات عشان مستشاري السيو المستقلين يركّزوا على الاستراتيجية مش الشغل الإداري.",
    heroTitle1: "قدّم نتائج من الطراز الأول.",
    heroTitle2: "بنصف الوقت.",
    heroDesc: "كمستشار سيو، خبرتك هي أثمن أصولك. Linkaza هي منصة التنفيذ يلي بتحرّرك للتركيز على يلي فعلاً مهم: نجاح عملائك.",
    ctaTrial: "ابدأ تجربتك المجانية",
    ctaHow: "شوف كيف بيشتغل",
    dilemmaTitle: "معضلة المستشار",
    dilemmaQuote: "إنت خبير باستراتيجية السيو، بس المهام اليومية متل إيجاد الناشرين، التفاوض على أماكن النشر، وإدارة المحتوى فيها تاخد كل وقتك.",
    growthTitle: "عملاء أكتر لازم يعني نمو أكتر، مش أوراق أكتر.",
    growthDesc1: "هالروتين الإداري هو أكبر عائق أمام توسيع استشارتك.",
    growthStrong: "Linkaza بتؤتمت التنفيذ.",
    growthDesc2: "بنقدّملك الأدوات لإدارة كامل عملية التنفيذ بكفاءة، وبنحوّل ساعات الشغل الممل لبضع ضغطات بسيطة.",
    assistantTitle: "مساعدك الشخصي لبناء الروابط",
    assistantSub: "كيف Linkaza بتقوّي استشارتك",
    features: [
      { title: "وصول لشبكة عالية الجودة", text: "انسى التواصل البارد. احصل على وصول فوري لسوقنا يلي فيه أكتر من 80,000 ناشر مدقّق. لاقي مواقع مطابقة لمجالك بدقائق.", icon: "fa-search" },
      { title: "بسّط سير عملك", text: "أدر كل حملات عملائك من لوحة تحكم وحدة. تابع الطلبات، راقب الروابط الحية، وأدر المدفوعات بسهولة.", icon: "fa-sync-alt" },
      { title: "خلّي عملاءك معجبين بالتقارير", text: "تابع التقدّم والعائد بسهولة. قدّم لعملائك البيانات يلي محتاجينها ليشوفوا القيمة يلي عم تقدّمها.", icon: "fa-chart-line" },
      { title: "أسعار مرنة", text: "نموذج الدفع بحسب الاستخدام يعني صفر تكاليف ثابتة. بلا اشتراكات. بتدفع بس مقابل الروابط يلي بتطلبها لعملائك.", icon: "fa-wallet" },
    ],
    ctaHours: "شو رح تعمل بـ10 ساعات إضافية بالأسبوع؟",
    ctaHoursDesc: "بتحويل بناء الروابط لـLinkaza، مستشارينا بيوفّروا بالمعدّل 10-15 ساعة أسبوعياً. أعد استثمار هالوقت باستقطاب عملاء جدد وتنمية علامتك.",
    ctaSaveTime: "ابلّش توفّر وقتك",
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "كيف بالضبط Linkaza بتساعد ببناء الروابط للمستشارين؟", answer: "Linkaza بتعمل كشريك تنفيذ إلك. بنقدّم منصة لإيجاد أماكن النشر، طلب المحتوى، وإدارة الحملات بكفاءة. هيك بيزول العبء الإداري وبتقدر تركّز على الاستراتيجية." },
      { question: "فيني أدير حملات لعملاء متعددين بنفس الوقت؟", answer: "أيوا. المنصة مصمّمة عشان تنشئ وتدير حملات منفصلة لكل عميل بحساب واحد، وكل شي منظّم." },
      { question: "كفريلانسر، قلقان من التكاليف. هل هالشي ميسور؟", answer: "أكيد. نموذج الدفع بحسب الاستخدام مثالي للمستشارين. بلا رسوم اشتراك، فما في تكاليف ثابتة. بتدفع بس مقابل الروابط يلي بتطلبها." },
    ],
    finalCtaTitle: "جاهز توسّع أعمالك الاستشارية؟",
    finalCtaSub: "صير الاستراتيجي، مش بس المنفّذ.",
    finalCtaBtn: "جرّب Linkaza مجاناً بالكامل",
  },
};

const Consultants = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/consultants"
        translated={["en", "ar"]}
        schema={faqPageSchema(t.faqs)}
      />

      <HeaderThree />

      <main dir={isAr ? "rtl" : "ltr"}>
        <section className="hero-area pos-rel pt-20 pb-20 fix gray-bg">
          <div className="shape-s-1"><Image src={shape_1} alt="shape" /></div>

          <div className="container">
            <div className="row align-items-center">

              <div className="col-xl-6 col-lg-6">
                <div className="hero-content mb-30">
                  <h1 className="hero-title mb-30" style={{fontSize: '50px', lineHeight: '1.2', fontWeight: '800', color: '#1c3354'}}>
                    {t.heroTitle1} <br/> <span style={{color: 'var(--lz-primary-alt)'}}>{t.heroTitle2}</span>
                  </h1>
                  <p className="mb-40" style={{fontSize: '18px', lineHeight: '1.7', color: '#555'}}>
                    {t.heroDesc}
                  </p>
                  <div className="hero-btn d-flex align-items-center">
                    <a href="https://app.linkaza.com/register" target="_blank" rel="noopener noreferrer" className="btn btn-gradient btn-gradient-02 mr-20" style={{borderRadius: '50px', padding: '15px 35px'}}>
                      {t.ctaTrial}
                    </a>
                    <Link href="/marketplace" className="btn btn-white btn-white-02" style={{borderRadius: '50px', border: '2px solid #eef0f4', padding: '15px 35px'}}>
                      {t.ctaHow}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Consultant Dashboard"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '20px',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="about-area pt-120 pb-90 bg-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img mb-30">
                             <div style={{
                                 background: '#f9f9f9',
                                 padding: '40px',
                                 borderRadius: '20px',
                                 borderLeft: '5px solid var(--lz-primary-alt)'
                             }}>
                                 <h3 style={{fontSize: '24px', marginBottom: '20px'}}>{t.dilemmaTitle}</h3>
                                 <p style={{fontSize: '16px', fontStyle: 'italic', color: '#666'}}>
                                     "{t.dilemmaQuote}"
                                 </p>
                             </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-content mb-30 pl-30">
                            <div className="section-title mb-40">
                                <h2 style={{fontSize: '36px', marginBottom: '20px'}}>{t.growthTitle}</h2>
                                <p style={{fontSize: '16px', lineHeight: '1.7'}}>
                                    {t.growthDesc1}
                                    <br/><br/>
                                    <strong>{t.growthStrong}</strong> {t.growthDesc2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="features-area pt-100 pb-90 gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-70">
                            <h2 style={{marginBottom: '15px'}}>{t.assistantTitle}</h2>
                            <p>{t.assistantSub}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {t.features.map((f, i) => (
                        <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                            <div className="single-features mb-30 bg-white" style={{padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                                <div className="icon mb-25">
                                    <i className={`fas ${f.icon} fa-2x`} style={{color: 'var(--lz-primary-alt)'}}></i>
                                </div>
                                <h3 style={{fontSize: '22px', marginBottom: '15px'}}>{f.title}</h3>
                                <p style={{fontSize: '15px', lineHeight: '1.6'}}>{f.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="cta-area pt-100 pb-100" style={{background: '#1c3354'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="cta-content">
                            <h2 style={{color: '#fff', fontSize: '36px', marginBottom: '20px'}}>{t.ctaHours}</h2>
                            <p style={{color: '#e0e0e0', fontSize: '18px'}}>
                                {t.ctaHoursDesc}
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="cta-btn text-lg-end">
                            <a href="https://app.linkaza.com/register" target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{borderRadius: '50px', padding: '15px 40px', color: '#1c3354', fontWeight: 'bold'}}>
                                {t.ctaSaveTime}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="faq-area pt-120 pb-100 bg-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-60">
                            <h2 style={{marginBottom: '15px'}}>{t.faqTitle}</h2>
                        </div>
                        <div className="faq-wrapper">
                            <div className="accordion" id="consultantAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700', fontSize: '18px', padding: '20px 25px'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#consultantAccordion">
                                            <div className="accordion-body" style={{padding: '0 25px 25px', color: '#555', lineHeight: '1.7'}}>
                                                {f.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="newsletter-area pb-120 bg-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="newsletter-box text-center" style={{background: '#f4f6f9', padding: '70px', borderRadius: '20px'}}>
                            <h2 className="mb-20" style={{fontSize: '36px'}}>{t.finalCtaTitle}</h2>
                            <p className="mb-40" style={{fontSize: '18px'}}>{t.finalCtaSub}</p>
                            <a href="https://app.linkaza.com/register" target="_blank" rel="noopener noreferrer" className="btn btn-gradient btn-gradient-02" style={{borderRadius: '50px', padding: '18px 45px', fontSize: '18px'}}>
                                {t.finalCtaBtn}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <Footer home_2={true} footer_bg={true} />
    </Wrapper>
  );
};

export default Consultants;
