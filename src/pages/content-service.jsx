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
    seoTitle: "SEO Content Writing Service | Expert Articles for Backlinks",
    seoDesc: "Professional SEO content that secures publisher placements. Standard, Business, and Enterprise tiers — you own every article we write.",
    heroTitle1: "Turn Quality Content into Your",
    heroTitle2: "Competitive Advantage",
    heroDesc: "A powerful link is only as good as the content surrounding it. Our professional SEO content service creates high-quality articles that secure placements and deliver maximum SEO impact.",
    ctaOrder: "Order Content Now",
    ctaSamples: "See Samples",
    problemTitle: "Great Content Opens Doors to the Best Links.",
    problemDesc1: "Finding the perfect website for a backlink is only half the battle. High-authority publishers have strict editorial standards; they won't accept thin or poorly written articles.",
    problemStrong: "We solve this.",
    problemDesc2: "Our team of expert writers specializes in crafting articles that meet the rigorous demands of top-tier publishers, ensuring your links get placed in a natural, authoritative context.",
    guaranteeTitle: "100% Acceptance Guarantee",
    guaranteeSub: "Content written to pass publisher guidelines.",
    howTitle: "Content That Performs, Written by Professionals",
    howSub: "How Our Service Works",
    features: [
      { title: "Simple Ordering", text: "Add content to your order with one click. Just provide your URL and anchor text.", icon: "fa-mouse-pointer" },
      { title: "Expert Writers", text: "Skilled writers research your topic to create engaging, valuable articles.", icon: "fa-pen-fancy" },
      { title: "SEO Optimized", text: "Natural integration of your anchor text for maximum search engine credibility.", icon: "fa-search-plus" },
      { title: "Review & Approve", text: "Full transparency. Review the draft and request edits before we submit it.", icon: "fa-clipboard-check" },
    ],
    tiersTitle: "Choose the Quality Level That Fits Your Goal",
    tiers: [
      { name: "Standard", desc: "Perfect for general blogs and guest posts.", features: ["High-Quality Grammar", "SEO Optimized", "500+ Words"], badge: "Best Value", popular: false },
      { name: "Business", desc: "Enhanced research for authoritative sites.", features: ["In-depth Research", "Natural Link Placement", "1000+ Words"], badge: "Recommended", popular: true },
      { name: "Enterprise", desc: "Premium pieces for top-tier publications.", features: ["Subject Matter Expert", "Editorial Grade", "1500+ Words"], badge: "Top Quality", popular: false },
    ],
    mostPopular: "MOST POPULAR",
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "Why do I need a separate content service?", answer: "Publishers are selective. Our service ensures the content is well-written, non-promotional, and valuable, which dramatically increases your chances of securing the placement." },
      { question: "Can you include my specific anchor text?", answer: "Yes. You provide the anchor text and target URL, and our writers will craft the article around that topic, ensuring the link is integrated naturally." },
      { question: "Do I own the content?", answer: "Absolutely. Once the order is complete, you have full rights to the content. It is written exclusively for your order." },
    ],
    finalCtaTitle: "Don't Let Poor Content Cost You a Great Link.",
    finalCtaSub: "Elevate Your Backlink Strategy with Expertly Crafted Articles.",
    finalCtaBtn: "Place Your First Content Order",
  },
  ar: {
    seoTitle: "خدمة كتابة محتوى السيو | مقالات احترافية للباك لينك",
    seoDesc: "محتوى سيو احترافي بيؤمّن أماكن نشر عند الناشرين. باقات Standard، Business، وEnterprise — إنت بتملك كل مقال منكتبه.",
    heroTitle1: "حوّل المحتوى الجيد",
    heroTitle2: "لميزتك التنافسية",
    heroDesc: "الرابط القوي بقيمة المحتوى يلي حواليه. خدمة كتابة محتوى السيو الاحترافية تبعنا بتنتج مقالات عالية الجودة بتؤمّن أماكن النشر وبتحقّق أعلى تأثير سيو.",
    ctaOrder: "اطلب محتوى الآن",
    ctaSamples: "شوف نماذج",
    problemTitle: "المحتوى الجيد بيفتحلك أبواب أفضل الروابط.",
    problemDesc1: "إيجاد الموقع المثالي للباك لينك هو بس نص المعركة. الناشرين عالي الموثوقية عندهم معايير تحريرية صارمة؛ ما رح يقبلوا مقالات ضعيفة أو مكتوبة بشكل سيء.",
    problemStrong: "إحنا بنحلّ هالمشكلة.",
    problemDesc2: "فريقنا من الكتّاب الخبراء متخصّص بكتابة مقالات بتلبّي متطلبات الناشرين عالي المستوى الصارمة، وبتضمن إنو روابطك تنحط بسياق طبيعي وموثوق.",
    guaranteeTitle: "ضمان قبول 100%",
    guaranteeSub: "محتوى مكتوب عشان يجتاز إرشادات الناشرين.",
    howTitle: "محتوى فعّال، مكتوب من محترفين",
    howSub: "كيف بتشتغل خدمتنا",
    features: [
      { title: "طلب بسيط", text: "أضف المحتوى لطلبك بضغطة وحدة. بس قدّم رابطك والنص التشعبي.", icon: "fa-mouse-pointer" },
      { title: "كتّاب خبراء", text: "كتّاب ماهرين بيبحثوا بموضوعك عشان يكتبوا مقالات جذابة وذات قيمة.", icon: "fa-pen-fancy" },
      { title: "محسّن للسيو", text: "دمج طبيعي للنص التشعبي تبعك لأقصى مصداقية بمحركات البحث.", icon: "fa-search-plus" },
      { title: "راجع ووافق", text: "شفافية كاملة. راجع المسودة واطلب تعديلات قبل ما نسلّمها.", icon: "fa-clipboard-check" },
    ],
    tiersTitle: "اختار مستوى الجودة يلي يناسب هدفك",
    tiers: [
      { name: "Standard", desc: "مثالية للمدونات العامة ومقالات الضيف.", features: ["قواعد لغوية عالية الجودة", "محسّن للسيو", "500+ كلمة"], badge: "أفضل قيمة", popular: false },
      { name: "Business", desc: "بحث معزّز للمواقع عالية الموثوقية.", features: ["بحث متعمّق", "وضع رابط طبيعي", "1000+ كلمة"], badge: "موصى فيها", popular: true },
      { name: "Enterprise", desc: "مقالات مميزة للمنشورات عالية المستوى.", features: ["خبير بالموضوع", "مستوى تحريري", "1500+ كلمة"], badge: "أعلى جودة", popular: false },
    ],
    mostPopular: "الأكثر طلباً",
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "ليش محتاج خدمة محتوى منفصلة؟", answer: "الناشرين انتقائيين. خدمتنا بتضمن إنو المحتوى مكتوب بشكل جيد، مش ترويجي، وذو قيمة، وهيك بيزيد فرصك بتأمين مكان النشر بشكل كبير." },
      { question: "فيكم تضمّنوا النص التشعبي المحدد تبعي؟", answer: "أيوا. إنت بتقدّم النص التشعبي والرابط المستهدف، وكتّابنا بيكتبوا المقال حول هالموضوع، وبيضمنوا إنو الرابط مدمج بشكل طبيعي." },
      { question: "بملك المحتوى؟", answer: "أكيد. بمجرد ما الطلب يخلص، بيصير عندك حقوق كاملة على المحتوى. بينكتب حصرياً لطلبك." },
    ],
    finalCtaTitle: "لا تخلّي محتوى ضعيف يكلّفك رابط ممتاز.",
    finalCtaSub: "طوّر استراتيجية الباك لينك تبعك بمقالات مكتوبة باحترافية.",
    finalCtaBtn: "قدّم أول طلب محتوى تبعك",
  },
};

const ContentService = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/content-service"
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
                    {t.heroTitle1} <span style={{color: 'var(--lz-primary-alt)'}}>{t.heroTitle2}</span>
                  </h1>
                  <p className="mb-40" style={{fontSize: '18px', lineHeight: '1.7', color: '#555'}}>
                    {t.heroDesc}
                  </p>
                  <div className="hero-btn d-flex align-items-center">
                    <a href="https://app.linkaza.com/register" target="_blank" rel="noopener noreferrer" className="btn btn-gradient btn-gradient-02 mr-20" style={{borderRadius: '50px', padding: '15px 35px'}}>
                      {t.ctaOrder}
                    </a>
                    <Link href="#samples" className="btn btn-white btn-white-02" style={{borderRadius: '50px', border: '2px solid #eef0f4', padding: '15px 35px'}}>
                      {t.ctaSamples}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Content Writing Service"
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
                             border: '1px solid #eee'
                         }}>
                             <i className="fas fa-check-double fa-4x mb-30" style={{color: 'var(--lz-primary-alt)'}}></i>
                             <h3 style={{fontSize: '24px'}}>{t.guaranteeTitle}</h3>
                             <p>{t.guaranteeSub}</p>
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
                            <h2 style={{marginBottom: '15px'}}>{t.howTitle}</h2>
                            <p>{t.howSub}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {t.features.map((f, i) => (
                        <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-features mb-30 bg-white text-center" style={{padding: '40px 20px', borderRadius: '15px', height: '100%'}}>
                                <div className="icon mb-25">
                                    <i className={`fas ${f.icon} fa-3x`} style={{color: 'var(--lz-primary-alt)'}}></i>
                                </div>
                                <h3 style={{fontSize: '20px', marginBottom: '15px'}}>{f.title}</h3>
                                <p style={{fontSize: '14px', lineHeight: '1.6'}}>{f.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="tiers-area pt-100 pb-100 bg-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-60">
                            <h2 style={{marginBottom: '15px'}}>{t.tiersTitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {t.tiers.map((tier, i) => (
                        <div key={i} className="col-xl-4 col-lg-4">
                            <div className="tier-item mb-30 text-center" style={tier.popular
                                ? {border: '2px solid var(--lz-primary-alt)', borderRadius: '10px', padding: '40px', position: 'relative'}
                                : {border: '1px solid #eee', borderRadius: '10px', padding: '40px'}}>
                                {tier.popular && (
                                    <span style={{position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--lz-primary-alt)', color: '#fff', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'}}>{t.mostPopular}</span>
                                )}
                                <h4 style={{color: '#1c3354', marginBottom: '15px', fontSize: '24px'}}>{tier.name}</h4>
                                <p className="mb-30" style={{color: '#777'}}>{tier.desc}</p>
                                <ul style={{textAlign: isAr ? 'right' : 'left', marginBottom: '30px', listStyle: 'none', paddingLeft: '0', paddingRight: '0'}}>
                                    {tier.features.map((feat, fi) => (
                                        <li key={fi} className="mb-10"><i className="fas fa-check mr-10" style={{color: 'var(--lz-primary-alt)'}}></i> {feat}</li>
                                    ))}
                                </ul>
                                <span style={{display: 'block', fontWeight: 'bold', color: 'var(--lz-primary-alt)', fontSize: '18px'}}>{tier.badge}</span>
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
                            <div className="accordion" id="contentAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden', background: '#fff'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#contentAccordion">
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

export default ContentService;
