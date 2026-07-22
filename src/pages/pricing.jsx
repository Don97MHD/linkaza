import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import HeaderThree from "../layout/headers/header-3";
import Footer from "../layout/footers/footer";
import { faqPageSchema, serviceSchema } from "@/src/lib/schema";

import hero_img from "@assets/img/blog/img6.jpg";
import shape_1 from "@assets/img/shape/shape-s-1.png";

const content = {
  en: {
    seoTitle: "Transparent Link Building Pricing | Pay-As-You-Go",
    seoDesc: "No subscriptions, no hidden fees. Standard links start at $70, Premium at $150, Authority at $300. Pay only for the backlinks you order.",
    heroTitle1: "We're Not a SaaS Tool.",
    heroTitle2: "We Just Sell",
    heroTitle3: "Great Links.",
    heroDesc: "Tired of expensive monthly subscriptions for tools you barely use? Our pricing is simple: You only ever pay for the results you want. No hidden fees.",
    ctaSeePrices: "See Prices in Marketplace",
    ctaCustomQuote: "Get a Custom Quote",
    problemTitle: "Why Pay a Subscription Fee Before You Even Get a Link?",
    problemDesc1: "The traditional model forces you to absorb fixed costs and pressures you to \"get your money's worth.\" This leads to wasted budgets.",
    problemStrong: "We do things differently.",
    problemDesc2: "Linkaza is a service, not a subscription. Access to our powerful platform, our advanced tools, and our expert support is completely free.",
    zeroFeesTitle: "Monthly Platform Fees",
    zeroFeesSub: "Unlimited Users. Unlimited Projects.",
    philTitle: "Radical Transparency",
    philSub: "No Subscriptions. No Tiers. No Hidden Fees. Ever.",
    features: [
      { title: "Zero Platform Fees", text: "Signing up, accessing the marketplace, using analytics, and 24/7 support is 100% free.", icon: "fa-unlock-alt" },
      { title: "Pay Per Link", text: "You only pay for the individual backlinks and content you choose to order. No surprises.", icon: "fa-file-invoice-dollar" },
      { title: "You're in Control", text: "Flexible budget. Buy one link or a hundred. No minimum spends or long-term contracts.", icon: "fa-sliders-h" },
    ],
    priceFactorTitle: "What Determines the Price of a Backlink?",
    priceFactorSub: "Prices are set by publishers based on key metrics reflecting SEO value.",
    factors: [
      { title: "Domain Authority", text: "Higher DA/DR sites command higher prices." },
      { title: "Website Traffic", text: "Sites with real, organic traffic cost more." },
      { title: "Niche Relevance", text: "Highly specialized niches can be premium." },
      { title: "Editorial Standards", text: "Strict editorial guidelines often mean higher fees." },
    ],
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "So I can really sign up for free?", answer: "Yes, absolutely. You can browse the marketplace, use strategy tools, and speak with support without paying a dime. You only pay when you order a link." },
      { question: "How much does a typical backlink cost?", answer: "Prices vary widely based on metrics. You can find options for as little as $50 and premium placements for several thousand dollars." },
      { question: "Do you offer discounts for bulk orders?", answer: "Yes, we offer custom quotes and volume discounts for agencies and high-volume clients. Contact us to discuss your needs." },
    ],
    finalCtaTitle: "Have a Large or Complex Project?",
    finalCtaSub: "Let's Build a Custom Quote Tailored to Your Volume.",
    finalCtaBtn: "Contact Us for a Quote",
  },
  ar: {
    seoTitle: "أسعار بناء الروابط الشفافة | ادفع بحسب الاستخدام",
    seoDesc: "بلا اشتراكات، بلا رسوم مخفية. الروابط العادية تبدأ من $70، المميزة من $150، الموثوقة من $300. ادفع بس مقابل الروابط يلي بتطلبها.",
    heroTitle1: "إحنا مش أداة SaaS.",
    heroTitle2: "إحنا بس منبيع",
    heroTitle3: "روابط ممتازة.",
    heroDesc: "تعبت من اشتراكات شهرية غالية لأدوات بالكاد بتستخدمها؟ سعرنا بسيط: بتدفع بس مقابل النتائج يلي بدك ياها. بلا رسوم مخفية.",
    ctaSeePrices: "شوف الأسعار بالسوق",
    ctaCustomQuote: "اطلب عرض سعر مخصّص",
    problemTitle: "ليش تدفع رسوم اشتراك قبل حتى ما تاخد رابط؟",
    problemDesc1: "النموذج التقليدي بيجبرك تتحمّل تكاليف ثابتة وبيضغط عليك تستفيد لآخر قرش دفعتو. هيك بتضيع الميزانيات.",
    problemStrong: "إحنا عم نعمل الأمور بشكل مختلف.",
    problemDesc2: "Linkaza خدمة، مش اشتراك. الوصول لمنصتنا القوية، أدواتنا المتقدّمة، ودعمنا الخبير — كله مجاني بالكامل.",
    zeroFeesTitle: "رسوم منصة شهرية",
    zeroFeesSub: "مستخدمين بلا حدود. مشاريع بلا حدود.",
    philTitle: "شفافية جذرية",
    philSub: "بلا اشتراكات. بلا باقات. بلا رسوم مخفية. أبداً.",
    features: [
      { title: "صفر رسوم منصة", text: "التسجيل، الوصول للسوق، استخدام التحليلات، والدعم على مدار الساعة — كله مجاني 100%.", icon: "fa-unlock-alt" },
      { title: "ادفع لكل رابط", text: "بتدفع بس مقابل الباك لينك والمحتوى يلي بتطلبه. بلا مفاجآت.", icon: "fa-file-invoice-dollar" },
      { title: "إنت المتحكّم", text: "ميزانية مرنة. اشترِ رابط واحد أو مية. بلا حد أدنى للإنفاق ولا عقود طويلة.", icon: "fa-sliders-h" },
    ],
    priceFactorTitle: "شو يلي بيحدّد سعر الباك لينك؟",
    priceFactorSub: "الأسعار بيحدّدها الناشرين حسب مؤشرات أساسية بتعكس قيمة السيو.",
    factors: [
      { title: "قوة الدومين", text: "المواقع بقوة دومين أعلى بتفرض أسعار أعلى." },
      { title: "ترافيك الموقع", text: "المواقع بترافيك عضوي حقيقي بتكلّف أكتر." },
      { title: "ملاءمة المجال", text: "المجالات المتخصصة جداً ممكن تكون بسعر مميّز." },
      { title: "المعايير التحريرية", text: "الضوابط التحريرية الصارمة غالباً بتعني رسوم أعلى." },
    ],
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "فعلاً فيني أسجّل مجاناً؟", answer: "أيوا أكيد. فيك تتصفّح السوق، تستخدم أدوات الاستراتيجية، وتحكي مع الدعم بلا ما تدفع ولا قرش. بتدفع بس لما تطلب رابط." },
      { question: "قديش بيكلّف الباك لينك العادي؟", answer: "الأسعار بتختلف بشكل كبير حسب المؤشرات. فيك تلاقي خيارات من $50 وأماكن نشر مميزة بآلاف الدولارات." },
      { question: "بتقدّموا خصومات للطلبات الكبيرة؟", answer: "أيوا، منقدّم عروض أسعار مخصصة وخصومات كمية للوكالات والعملاء بحجم طلبات كبير. تواصل معنا لنحكي عن احتياجاتك." },
    ],
    finalCtaTitle: "عندك مشروع كبير أو معقّد؟",
    finalCtaSub: "خلّينا نبني عرض سعر مخصّص يناسب حجمك.",
    finalCtaBtn: "تواصل معنا لعرض سعر",
  },
};

const Pricing = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/pricing"
        translated={["en", "ar"]}
        schema={[
          faqPageSchema(t.faqs),
          serviceSchema({ name: "Link Building", description: "Pay-as-you-go backlink placements on vetted publisher websites.", path: "/pricing", priceFrom: 70 }),
        ]}
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
                    {t.heroTitle1} <br/> {t.heroTitle2} <span style={{color: 'var(--lz-primary-alt)'}}>{t.heroTitle3}</span>
                  </h1>
                  <p className="mb-40" style={{fontSize: '18px', lineHeight: '1.7', color: '#555'}}>
                    {t.heroDesc}
                  </p>
                  <div className="hero-btn d-flex align-items-center">
                    <a href="https://app.linkaza.com/" target="_blank" rel="noopener noreferrer" className="btn btn-gradient btn-gradient-02 mr-20" style={{borderRadius: '50px', padding: '15px 35px'}}>
                      {t.ctaSeePrices}
                    </a>
                    <Link href="#custom" className="btn btn-white btn-white-02" style={{borderRadius: '50px', border: '2px solid #eef0f4', padding: '15px 35px'}}>
                      {t.ctaCustomQuote}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Transparent Pricing"
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
                             background: '#f9f9f9',
                             padding: '50px',
                             borderRadius: '20px',
                             textAlign: 'center',
                             border: '1px dashed #ccc'
                         }}>
                             <h3 style={{fontSize: '60px', color: '#1c3354', marginBottom: '10px'}}>$0</h3>
                             <p style={{fontSize: '20px', fontWeight: 'bold', color: 'var(--lz-primary-alt)'}}>{t.zeroFeesTitle}</p>
                             <p>{t.zeroFeesSub}</p>
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
                            <h2 style={{marginBottom: '15px'}}>{t.philTitle}</h2>
                            <p>{t.philSub}</p>
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
                                <h3 style={{fontSize: '22px', marginBottom: '15px'}}>{f.title}</h3>
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
                            <h2 style={{marginBottom: '15px'}}>{t.priceFactorTitle}</h2>
                            <p>{t.priceFactorSub}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {t.factors.map((f, i) => (
                        <div key={i} className="col-xl-3 col-lg-6">
                            <div className="case-item mb-30 text-center p-3">
                                <i className={`fas ${['fa-globe','fa-users','fa-bullseye','fa-pen-alt'][i]} fa-2x mb-20`} style={{color: '#1c3354'}}></i>
                                <h4 style={{fontSize: '18px'}}>{f.title}</h4>
                                <p style={{fontSize: '14px'}}>{f.text}</p>
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
                            <div className="accordion" id="pricingAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden', background: '#fff'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#pricingAccordion">
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

        <section id="custom" className="newsletter-area pb-120 bg-white pt-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="newsletter-box text-center" style={{background: '#f4f6f9', padding: '70px', borderRadius: '20px'}}>
                            <h2 className="mb-20" style={{fontSize: '36px'}}>{t.finalCtaTitle}</h2>
                            <p className="mb-40" style={{fontSize: '18px'}}>{t.finalCtaSub}</p>
                            <Link href="/contact" className="btn btn-gradient btn-gradient-02" style={{borderRadius: '50px', padding: '18px 45px', fontSize: '18px'}}>
                                {t.finalCtaBtn}
                            </Link>
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

export default Pricing;
