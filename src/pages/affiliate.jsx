import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import HeaderThree from "../layout/headers/header-3";
import Footer from "../layout/footers/footer";
import { faqPageSchema } from "@/src/lib/schema";

import hero_img from "@assets/img/blog/img6.jpg";
import shape_1 from "@assets/img/shape/shape-s-1.png";

const content = {
  en: {
    seoTitle: "Link Building Affiliate Program | Earn Recurring Commissions",
    seoDesc: "Earn recurring commissions for every client you refer to Linkaza. Free to join, paid monthly, no application fees.",
    heroTitle1: "Partner With a Leader.",
    heroTitle2: "Earn Like an Expert.",
    heroDesc: "Join the Linkaza Affiliate Program and earn a generous, recurring commission by introducing your audience to the smartest way to build high-quality backlinks.",
    ctaApply: "Apply to Become a Partner",
    whyTitle: "You Already Recommend Great SEO Solutions. Why Not Get Paid for It?",
    whyDesc1: "As an expert, your audience trusts you. High-quality link building is a huge challenge for businesses. When you recommend Linkaza, you're providing the solution.",
    whyStrong: "More than a referral link.",
    whyDesc2: "It's a partnership. By promoting a service you can stand behind (high retention, real results), you add value to your audience while building a significant revenue stream.",
    revenueTitle: "Recurring Revenue",
    revenueSub: "Earn on every purchase your referral makes, forever.",
    stepsTitle: "Earning with Linkaza is Simple",
    stepsSub: "A Simple Path to Passive Income",
    steps: [
      { title: "1. Apply to Join", text: "Submit a quick application. We review to ensure we build a network of quality partners.", icon: "fa-user-plus" },
      { title: "2. Share Your Link", text: "Access your dashboard, get your unique link and banners, and share them with your audience.", icon: "fa-share-alt" },
      { title: "3. Earn Commissions", text: "Earn not just on the first purchase, but on every single order for the lifetime of the account.", icon: "fa-coins" },
    ],
    advTitle: "The Linkaza Affiliate Advantage",
    benefits: [
      { title: "Lifetime Commissions", text: "Get paid as long as your referral stays active.", icon: "fa-infinity" },
      { title: "High Conversions", text: "Essential service with transparent pricing converts easily.", icon: "fa-percentage" },
      { title: "Real-Time Tracking", text: "Monitor clicks and earnings instantly from your dashboard.", icon: "fa-tachometer-alt" },
      { title: "Dedicated Manager", text: "Direct contact to help you maximize your earnings.", icon: "fa-user-friends" },
    ],
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "What is the commission rate?", answer: "We offer highly competitive recurring commissions. Because we tailor partnerships, we discuss specific rates during the application process." },
      { question: "Is it free to join?", answer: "Yes, our program is completely free. No application fees or hidden charges." },
      { question: "How and when do I get paid?", answer: "We provide reliable monthly payouts through secure payment platforms (like PayPal). Full details are available in your dashboard." },
    ],
    finalCtaTitle: "Ready to Build a New Revenue Stream?",
    finalCtaSub: "Partner with a Brand Your Audience Will Thank You for Recommending.",
    finalCtaBtn: "Apply Now to Get Started",
  },
  ar: {
    seoTitle: "برنامج إحالة بناء الروابط | اكسب عمولات متكرّرة",
    seoDesc: "اكسب عمولات متكرّرة عن كل عميل بتحيله لـLinkaza. الانضمام مجاني، دفعات شهرية، بلا رسوم تقديم.",
    heroTitle1: "اشتركّ مع رائد بالمجال.",
    heroTitle2: "اكسب متل الخبراء.",
    heroDesc: "انضم لبرنامج إحالة Linkaza واكسب عمولة سخية ومتكرّرة عبر تعريف جمهورك على أذكى طريقة لبناء باك لينك عالي الجودة.",
    ctaApply: "قدّم لتصير شريك",
    whyTitle: "إنت أصلاً بتنصح بحلول سيو ممتازة. ليش ما تاخد مقابلها؟",
    whyDesc1: "كخبير، جمهورك بيثق فيك. بناء روابط عالي الجودة تحدّي كبير للشركات. لما بتنصح بـLinkaza، إنت عم تقدّم الحل.",
    whyStrong: "أكتر من مجرد رابط إحالة.",
    whyDesc2: "هي شراكة. بترويج خدمة فيك تقف وراها (احتفاظ عالي، نتائج حقيقية)، إنت بتضيف قيمة لجمهورك وبتبني مصدر دخل مهم.",
    revenueTitle: "دخل متكرّر",
    revenueSub: "اكسب من كل عملية شراء يعملها المُحال، للأبد.",
    stepsTitle: "الكسب مع Linkaza بسيط",
    stepsSub: "طريق بسيط لدخل سلبي",
    steps: [
      { title: "1. قدّم للانضمام", text: "قدّم طلب سريع. منراجعه لنضمن نبني شبكة شركاء بجودة عالية.", icon: "fa-user-plus" },
      { title: "2. شارك رابطك", text: "ادخل للوحة تحكمك، خذ رابطك المميز وبانراتك، وشاركهم مع جمهورك.", icon: "fa-share-alt" },
      { title: "3. اكسب عمولات", text: "اكسب مش بس من أول عملية شراء، بس من كل طلب طول عمر الحساب.", icon: "fa-coins" },
    ],
    advTitle: "ميزة الإحالة عند Linkaza",
    benefits: [
      { title: "عمولات مدى الحياة", text: "اقبض طول ما المُحال نشيط.", icon: "fa-infinity" },
      { title: "تحويلات عالية", text: "خدمة أساسية بأسعار شفافة بتتحوّل بسهولة.", icon: "fa-percentage" },
      { title: "تتبّع لحظي", text: "راقب النقرات والأرباح فوراً من لوحة تحكمك.", icon: "fa-tachometer-alt" },
      { title: "مدير مخصّص", text: "تواصل مباشر يساعدك تعظّم أرباحك.", icon: "fa-user-friends" },
    ],
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "شو معدّل العمولة؟", answer: "منقدّم عمولات متكرّرة منافسة كتير. لأننا منخصّص الشراكات، منحكي عن المعدّلات المحددة خلال عملية التقديم." },
      { question: "الانضمام مجاني؟", answer: "أيوا، برنامجنا مجاني بالكامل. بلا رسوم تقديم ولا رسوم مخفية." },
      { question: "كيف وإيمتى بقبض؟", answer: "منقدّم دفعات شهرية موثوقة عبر منصات دفع آمنة (متل PayPal). التفاصيل الكاملة متوفرة بلوحة تحكمك." },
    ],
    finalCtaTitle: "جاهز تبني مصدر دخل جديد؟",
    finalCtaSub: "اشتركّ مع علامة تجارية جمهورك رح يشكرك على التوصية فيها.",
    finalCtaBtn: "قدّم الآن وابدأ",
  },
};

const Affiliate = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/affiliate"
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
                      {t.ctaApply}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Affiliate Program"
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
                        <div className="about-content mb-30 pr-30">
                            <div className="section-title mb-40">
                                <h2 style={{fontSize: '36px', marginBottom: '20px'}}>{t.whyTitle}</h2>
                                <p style={{fontSize: '16px', lineHeight: '1.7', color: '#555'}}>
                                    {t.whyDesc1}
                                    <br/><br/>
                                    <strong>{t.whyStrong}</strong> {t.whyDesc2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                         <div style={{
                             background: '#f9f9f9',
                             padding: '50px',
                             borderRadius: '20px',
                             textAlign: 'center',
                             border: '1px solid #eee'
                         }}>
                             <i className="fas fa-hand-holding-usd fa-4x mb-30" style={{color: 'var(--lz-primary-alt)'}}></i>
                             <h3 style={{fontSize: '24px'}}>{t.revenueTitle}</h3>
                             <p>{t.revenueSub}</p>
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
                            <h2 style={{marginBottom: '15px'}}>{t.stepsTitle}</h2>
                            <p>{t.stepsSub}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {t.steps.map((s, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-features mb-30 bg-white text-center" style={{padding: '40px 20px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                                <div className="icon mb-25">
                                    <i className={`fas ${s.icon} fa-3x`} style={{color: 'var(--lz-primary-alt)'}}></i>
                                </div>
                                <h3 style={{fontSize: '20px', marginBottom: '15px'}}>{s.title}</h3>
                                <p style={{fontSize: '15px', lineHeight: '1.6'}}>{s.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="use-cases-area pt-100 pb-100 bg-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-60">
                            <h2 style={{marginBottom: '15px'}}>{t.advTitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {t.benefits.map((b, i) => (
                        <div key={i} className="col-xl-3 col-lg-6">
                            <div className="case-item mb-30 text-center p-3">
                                <i className={`fas ${b.icon} fa-2x mb-20`} style={{color: '#1c3354'}}></i>
                                <h4 style={{fontSize: '18px'}}>{b.title}</h4>
                                <p style={{fontSize: '14px'}}>{b.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="faq-area pt-100 pb-100 gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-60">
                            <h2 style={{marginBottom: '15px'}}>{t.faqTitle}</h2>
                        </div>
                        <div className="faq-wrapper">
                            <div className="accordion" id="affiliateAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden', background: '#fff'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#affiliateAccordion">
                                            <div className="accordion-body" style={{color: '#555'}}>
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

        <section className="newsletter-area pb-120 bg-white pt-100">
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

export default Affiliate;
