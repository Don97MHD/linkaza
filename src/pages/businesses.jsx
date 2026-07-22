import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import HeaderThree from "../layout/headers/header-3";
import Footer from "../layout/footers/footer";
import { faqPageSchema } from "@/src/lib/schema";

import hero_img from "@assets/img/slider/slider-image.png";
import shape_1 from "@assets/img/shape/shape-s-1.png";

const content = {
  en: {
    seoTitle: "Link Building for Businesses & In-House Teams",
    seoDesc: "Take direct control of your SEO. Pay-as-you-go access to 80,000+ vetted publishers, with no subscriptions or minimum spend.",
    heroTitle1: "The Direct Route to",
    heroTitle2: "Higher Rankings",
    heroDesc: "Take control of your website's authority. Linkaza is the platform designed for businesses that demand transparency, speed, and results.",
    ctaMarketplace: "Explore Marketplace",
    ctaFreeStrategy: "Get a Free Strategy",
    problemTitle: "Your SEO is Too Important to Outsource Blindly.",
    problemDesc1: "Agencies can be expensive and slow, while DIY outreach is a full-time job. You need a solution that gives you the control to act fast and the transparency to know what you're paying for.",
    problemStrong: "Full Control, But Never Alone.",
    problemDesc2: "Linkaza is the ideal platform for in-house marketing teams and business owners who want to manage their own SEO destiny.",
    growthTitle: "Drive Real Growth",
    growthSub: "Get the high-quality backlinks you need to outrank your competition.",
    smartTitle: "The Smartest Way to Invest in Your Growth",
    smartSub: "Powerful SEO, On Your Terms and On Your Budget",
    features: [
      { title: "Direct Access", text: "Don't just hope for good links—choose them. Direct access to 80,000+ vetted websites.", icon: "fa-shopping-cart" },
      { title: "No Subscriptions", text: "Pay-as-you-go model. Start with a single backlink or launch a full campaign. No monthly fees.", icon: "fa-coins" },
      { title: "Expert Support", text: "Our team of SEO experts is always here to help you find the right sites or build a strategy.", icon: "fa-life-ring" },
    ],
    useCasesTitle: "Perfect for Any Business Model",
    useCases: [
      { title: "E-commerce Stores", text: "Get high-authority links from product review blogs to drive relevant traffic and boost product page rankings." },
      { title: "Local Businesses", text: "Build relevance in your service area by securing placements on local news sites and industry blogs." },
      { title: "SaaS & Tech", text: "Establish your authority by placing expert content on trusted tech websites and industry journals." },
    ],
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "Can I really buy backlinks on a small budget?", answer: "Absolutely. Our pay-as-you-go model allows you to start with any budget. You can find quality placements at every price point without minimums." },
      { question: "How do I know which backlinks to buy?", answer: "Our marketplace filters help you find relevant sites easily. Plus, our free \"Strategy Builder\" tool and expert support team can provide a personalized roadmap." },
      { question: "Is this platform easy to use for non-experts?", answer: "Yes, it's incredibly intuitive. 1. Find a site. 2. Place your order. 3. We handle content and placement. No technical SEO knowledge required." },
    ],
    finalCtaTitle: "Start Building the Links Your Competitors Wish They Had.",
    finalCtaSub: "Take the first step towards dominating the search results.",
    finalCtaBtn: "Order Your First Backlink Today",
  },
  ar: {
    seoTitle: "بناء الروابط للشركات والفرق الداخلية",
    seoDesc: "خذ السيطرة المباشرة على السيو تبعك. وصول بحسب الاستخدام لأكتر من 80,000 ناشر مدقّق، بلا اشتراكات ولا حد أدنى للإنفاق.",
    heroTitle1: "الطريق المباشر لـ",
    heroTitle2: "ترتيب أعلى",
    heroDesc: "خذ السيطرة على موثوقية موقعك. Linkaza هي المنصة المصمّمة للشركات يلي بتطلب الشفافية، السرعة، والنتائج.",
    ctaMarketplace: "تصفّح السوق",
    ctaFreeStrategy: "احصل على استراتيجية مجانية",
    problemTitle: "سيو موقعك مهم كتير عشان توكّله بعشوائية.",
    problemDesc1: "الوكالات ممكن تكون غالية وبطيئة، والتواصل بنفسك شغلة دوام كامل. محتاج حل بيديك السيطرة تتحرّك بسرعة والشفافية تعرف وين بتدفع مصاريك.",
    problemStrong: "سيطرة كاملة، بس مش لحالك.",
    problemDesc2: "Linkaza هي المنصة المثالية لفرق التسويق الداخلية وأصحاب الشركات يلي بدهم يديروا مصير السيو تبعهم بنفسهم.",
    growthTitle: "حقّق نمو حقيقي",
    growthSub: "احصل على الباك لينك عالي الجودة يلي محتاجو للتفوّق على منافسينك.",
    smartTitle: "أذكى طريقة تستثمر فيها بنموّك",
    smartSub: "سيو قوي، بشروطك وبميزانيتك",
    features: [
      { title: "وصول مباشر", text: "لا تتمنى روابط جيدة فقط — اختارها. وصول مباشر لأكتر من 80,000 موقع مدقّق.", icon: "fa-shopping-cart" },
      { title: "بلا اشتراكات", text: "نموذج الدفع بحسب الاستخدام. ابدأ برابط واحد أو أطلق حملة كاملة. بلا رسوم شهرية.", icon: "fa-coins" },
      { title: "دعم خبراء", text: "فريقنا من خبراء السيو متواجد دايماً لمساعدتك تلاقي المواقع المناسبة أو تبني استراتيجية.", icon: "fa-life-ring" },
    ],
    useCasesTitle: "مثالية لأي نموذج عمل",
    useCases: [
      { title: "متاجر إلكترونية", text: "احصل على روابط عالية الموثوقية من مدونات مراجعة المنتجات لجذب ترافيك مناسب وتحسين ترتيب صفحات المنتج." },
      { title: "شركات محلية", text: "ابني حضورك بمنطقة خدمتك عبر تأمين أماكن نشر بمواقع أخبار محلية ومدونات متخصصة." },
      { title: "SaaS والتقنية", text: "أثبت موثوقيتك بنشر محتوى احترافي بمواقع تقنية موثوقة ومجلات متخصصة." },
    ],
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "فعلاً فيني أشتري باك لينك بميزانية صغيرة؟", answer: "أكيد. نموذج الدفع بحسب الاستخدام بيخلّيك تبدأ بأي ميزانية. فيك تلاقي أماكن نشر جيدة بكل مستوى سعر بلا حد أدنى." },
      { question: "كيف بعرف شو الباك لينك يلي لازم أشتريه؟", answer: "فلاتر سوقنا بتساعدك تلاقي مواقع مناسبة بسهولة. كمان، أداة \"بناء الاستراتيجية\" المجانية وفريق الدعم الخبير فيهم يقدّموا خارطة طريق مخصصة." },
      { question: "المنصة سهلة الاستخدام لغير الخبراء؟", answer: "أيوا، بديهية كتير. 1. لاقي موقع. 2. قدّم طلبك. 3. إحنا بنتولى المحتوى والنشر. بلا حاجة لخبرة تقنية بالسيو." },
    ],
    finalCtaTitle: "ابدأ ببناء الروابط يلي منافسينك بيتمنّوها.",
    finalCtaSub: "خذ الخطوة الأولى نحو السيطرة على نتائج البحث.",
    finalCtaBtn: "اطلب أول باك لينك تبعك اليوم",
  },
};

const Businesses = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/businesses"
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
                    <Link href="/marketplace" className="btn btn-gradient btn-gradient-02 mr-20" style={{borderRadius: '50px', padding: '15px 35px'}}>
                      {t.ctaMarketplace}
                    </Link>
                    <Link href="/contact" className="btn btn-white btn-white-02" style={{borderRadius: '50px', border: '2px solid #eef0f4', padding: '15px 35px'}}>
                      {t.ctaFreeStrategy}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Business SEO Dashboard"
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
                                <h2 style={{fontSize: '36px', marginBottom: '20px'}}>{t.problemTitle}</h2>
                                <p style={{fontSize: '16px', lineHeight: '1.7', color: '#555'}}>
                                    {t.problemDesc1}
                                    <br/><br/>
                                    <strong>{t.problemStrong}</strong> {t.problemDesc2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                         <div style={{
                             background: '#f4f6f9',
                             padding: '50px',
                             borderRadius: '20px',
                             textAlign: 'center'
                         }}>
                             <i className="fas fa-chart-line fa-4x mb-30" style={{color: 'var(--lz-primary-alt)'}}></i>
                             <h3 style={{fontSize: '24px'}}>{t.growthTitle}</h3>
                             <p>{t.growthSub}</p>
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
                            <h2 style={{marginBottom: '15px'}}>{t.smartTitle}</h2>
                            <p>{t.smartSub}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {t.features.map((f, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-features mb-30 bg-white text-center" style={{padding: '40px 20px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                                <div className="icon mb-25">
                                    <i className={`fas ${f.icon} fa-3x`} style={{color: 'var(--lz-primary-alt)'}}></i>
                                </div>
                                <h3 style={{fontSize: '20px', marginBottom: '15px'}}>{f.title}</h3>
                                <p style={{fontSize: '15px', lineHeight: '1.6'}}>{f.text}</p>
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
                            <h2 style={{marginBottom: '15px'}}>{t.useCasesTitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {t.useCases.map((u, i) => (
                        <div key={i} className="col-xl-4 col-lg-4">
                            <div className="case-item mb-30 p-4" style={{border: '1px solid #eee', borderRadius: '10px'}}>
                                <h4 style={{color: '#1c3354', marginBottom: '15px'}}>{u.title}</h4>
                                <p>{u.text}</p>
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
                            <div className="accordion" id="businessAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden', background: '#fff'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#businessAccordion">
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

export default Businesses;
