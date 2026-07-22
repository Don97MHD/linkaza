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
    seoTitle: "Monetize Your Website | Join Our Publisher Network",
    seoDesc: "Turn your website into a revenue stream. Join the Linkaza publisher network free, set your own price, and get paid instantly per placement.",
    heroTitle1: "The Easiest Income",
    heroTitle2: "Your Website Will",
    heroTitle3: "Ever Generate",
    heroDesc: "Your website is a valuable asset. Join the Linkaza Publisher Network and turn that asset into a reliable, effortless revenue stream by accepting high-quality guest content.",
    ctaJoin: "Join as a Publisher",
    ctaLearn: "Learn How it Works",
    trustTitle: "No Hassle, Full Control, Consistent Payouts",
    trustDesc: "We know you're tired of constant, low-quality pitches flooding your inbox. Linkaza changes the game. We act as your trusted partner, bringing you relevant, professionally written content from vetted buyers.",
    stepsTitle: "Start Earning in Just a Few Clicks",
    steps: [
      { num: 1, title: "You Set the Rules", text: "List your website. You determine your own price, content guidelines, and accepted categories. You have 100% control.", icon: "fa-sliders-h" },
      { num: 2, title: "Review & Approve", text: "Receive professionally written articles. Review the content—if it meets your standards, you approve it.", icon: "fa-check-circle" },
      { num: 3, title: "Publish & Get Paid", text: "Publish the article and we process your payment instantly. No chasing invoices, no delays.", icon: "fa-money-bill-wave" },
    ],
    fullProcess: "See the full publisher process",
    benefitsTitle: "Why Top Publishers Work With Us",
    benefits: [
      { title: "Steady Stream of Orders", text: "Consistent flow of high-quality opportunities from thousands of agencies.", icon: "fa-stream" },
      { title: "Full Transparency", text: "Complete overview of your orders, earnings, and performance.", icon: "fa-eye" },
      { title: "High-Quality Content", text: "We enforce strict quality standards ensuring content adds value to your site.", icon: "fa-pen-nib" },
    ],
    monetizeTitle: "Ready to monetize?",
    monetizeSub: "Join over 80,000+ websites in our network.",
    monetizeBtn: "Sign Up Now",
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "Is it free to join the network?", answer: "Yes, it is completely free to list your website. We make money by charging a service fee to the buyers, not our publishers." },
      { question: "How do I get paid?", answer: "Once you publish an article and submit the live link, we verify it and process your payment instantly to your wallet, which you can withdraw via PayPal or Bank Transfer." },
      { question: "Do I have to accept every order?", answer: "Not at all. You have the final say. You can reject any content that doesn't fit your audience or editorial standards." },
    ],
    finalCtaTitle: "Ready to Turn Your Authority into Revenue?",
    finalCtaSub: "Join a Network of Thousands of Premium Publishers.",
    finalCtaBtn: "Apply to the Network Now",
  },
  ar: {
    seoTitle: "حوّل موقعك لمصدر دخل | انضم لشبكة الناشرين",
    seoDesc: "حوّل موقعك لمصدر دخل. انضم لشبكة ناشري Linkaza مجاناً، حدّد سعرك الخاص، واقبض فوراً لكل مكان نشر.",
    heroTitle1: "أسهل دخل",
    heroTitle2: "موقعك رح",
    heroTitle3: "يحقّقه أبداً",
    heroDesc: "موقعك أصل ثمين. انضم لشبكة ناشري Linkaza وحوّل هالأصل لمصدر دخل موثوق وبلا مجهود عبر قبول محتوى ضيف عالي الجودة.",
    ctaJoin: "انضم كناشر",
    ctaLearn: "تعرّف كيف بتشتغل",
    trustTitle: "بلا تعقيد، سيطرة كاملة، دفعات ثابتة",
    trustDesc: "منعرف إنك تعبت من عروض متكررة ومنخفضة الجودة بتغرق بريدك. Linkaza بتغيّر اللعبة. منكون شريكك الموثوق، ومنجيبلك محتوى مناسب ومكتوب باحترافية من مشترين مدقّقين.",
    stepsTitle: "ابدأ تكسب بس بضغطات قليلة",
    steps: [
      { num: 1, title: "إنت بتحدّد القواعد", text: "سجّل موقعك. إنت بتحدّد سعرك، إرشادات المحتوى، والتصنيفات المقبولة. عندك سيطرة 100%.", icon: "fa-sliders-h" },
      { num: 2, title: "راجع ووافق", text: "استلم مقالات مكتوبة باحترافية. راجع المحتوى — إذا بيطابق معاييرك، وافق عليه.", icon: "fa-check-circle" },
      { num: 3, title: "انشر واقبض", text: "انشر المقال ومنعالج دفعتك فوراً. بلا ملاحقة فواتير، بلا تأخير.", icon: "fa-money-bill-wave" },
    ],
    fullProcess: "شوف آلية الناشر كاملة",
    benefitsTitle: "ليش أفضل الناشرين بيشتغلوا معنا",
    benefits: [
      { title: "تدفّق ثابت من الطلبات", text: "تدفّق مستمر من فرص عالية الجودة من آلاف الوكالات.", icon: "fa-stream" },
      { title: "شفافية كاملة", text: "نظرة شاملة على طلباتك، أرباحك، وأدائك.", icon: "fa-eye" },
      { title: "محتوى عالي الجودة", text: "منفرض معايير جودة صارمة لضمان إنو المحتوى بيضيف قيمة لموقعك.", icon: "fa-pen-nib" },
    ],
    monetizeTitle: "جاهز تحوّل موقعك لدخل؟",
    monetizeSub: "انضم لأكتر من 80,000 موقع بشبكتنا.",
    monetizeBtn: "سجّل الآن",
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "الانضمام للشبكة مجاني؟", answer: "أيوا، تسجيل موقعك مجاني بالكامل. إحنا بنربح من رسوم خدمة عند المشترين، مش من الناشرين." },
      { question: "كيف بقبض مصاريي؟", answer: "لما تنشر المقال وتبعت الرابط الحي، منتحقق منّو ومنعالج دفعتك فوراً لمحفظتك، وفيك تسحبها عبر PayPal أو تحويل بنكي." },
      { question: "لازم أوافق على كل طلب؟", answer: "أبداً. القرار النهائي إلك. فيك ترفض أي محتوى ما بيناسب جمهورك أو معاييرك التحريرية." },
    ],
    finalCtaTitle: "جاهز تحوّل موثوقيتك لدخل؟",
    finalCtaSub: "انضم لشبكة فيها آلاف الناشرين المميزين.",
    finalCtaBtn: "قدّم للشبكة الآن",
  },
};

const Publishers = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/publishers"
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
                    {t.heroTitle1} <br/> {t.heroTitle2} <span style={{color: 'var(--lz-primary-alt)'}}>{t.heroTitle3}</span>
                  </h1>
                  <p className="mb-40" style={{fontSize: '18px', lineHeight: '1.7', color: '#555'}}>
                    {t.heroDesc}
                  </p>
                  <div className="hero-btn d-flex align-items-center">
                    <a href="https://app.linkaza.com/register" target="_blank" rel="noopener noreferrer" className="btn btn-gradient btn-gradient-02 mr-20" style={{borderRadius: '50px', padding: '15px 35px'}}>
                      {t.ctaJoin}
                    </a>
                    <Link href="#how-it-works" className="btn btn-white btn-white-02" style={{borderRadius: '50px', border: '2px solid #eef0f4', padding: '15px 35px'}}>
                      {t.ctaLearn}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Publisher Dashboard"
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
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-xl-8">
                        <div className="section-title mb-40">
                            <h2 style={{fontSize: '36px', marginBottom: '20px'}}>{t.trustTitle}</h2>
                            <p style={{fontSize: '18px', lineHeight: '1.7', color: '#555'}}>
                                {t.trustDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="how-it-works" className="features-area pt-100 pb-90 gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-70">
                            <h2 style={{marginBottom: '15px'}}>{t.stepsTitle}</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {t.steps.map((s, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-features mb-30 bg-white text-center" style={{padding: '50px 30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                                <div className="icon mb-25">
                                    <span style={{
                                        display: 'inline-block',
                                        width: '50px',
                                        height: '50px',
                                        lineHeight: '50px',
                                        background: 'var(--lz-primary-alt)',
                                        color: '#fff',
                                        borderRadius: '50%',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        marginBottom: '20px'
                                    }}>{s.num}</span>
                                    <br/>
                                    <i className={`fas ${s.icon} fa-3x`} style={{color: '#1c3354'}}></i>
                                </div>
                                <h3 style={{fontSize: '20px', marginBottom: '15px'}}>{s.title}</h3>
                                <p style={{fontSize: '15px', lineHeight: '1.6'}}>{s.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-20">
                    <Link href="/how-it-works" style={{color: 'var(--lz-primary)', fontWeight: '600'}}>
                        {t.fullProcess} <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>

        <section className="benefits-area pt-100 pb-100 bg-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="section-title mb-40">
                            <h2 style={{marginBottom: '30px'}}>{t.benefitsTitle}</h2>

                            {t.benefits.map((b, i) => (
                                <div key={i} className="benefit-item d-flex align-items-start mb-30">
                                    <div className="icon mr-20"><i className={`fas ${b.icon} fa-2x`} style={{color: 'var(--lz-primary-alt)'}}></i></div>
                                    <div className="text">
                                        <h4 style={{fontSize: '18px', fontWeight: 'bold'}}>{b.title}</h4>
                                        <p>{b.text}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="col-xl-6">
                         <div style={{background: '#f4f6f9', padding: '60px', borderRadius: '20px', textAlign: 'center'}}>
                             <h3 style={{fontSize: '24px', marginBottom: '20px'}}>{t.monetizeTitle}</h3>
                             <p className="mb-30">{t.monetizeSub}</p>
                             <a href="https://app.linkaza.com/register" className="btn btn-gradient btn-gradient-02" style={{borderRadius: '30px'}}>
                                 {t.monetizeBtn}
                             </a>
                         </div>
                    </div>
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
                            <div className="accordion" id="publisherAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden', background: '#fff'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#publisherAccordion">
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

export default Publishers;
