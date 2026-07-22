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
    seoTitle: "Free Link Building Strategy | Custom SEO Roadmap",
    seoDesc: "Get a personalized link building strategy from Linkaza's in-house SEO analysts, 100% free — competitor analysis and a prioritized action plan.",
    heroTitle1: "The Only Backlink Strategy You'll",
    heroTitle2: "Ever Need.",
    heroDesc: "A successful campaign starts with a smart plan. Let our experts build you a personalized link building strategy to target your competitors and dominate the SERPs.",
    heroStrong: "And It's 100% Free.",
    ctaFree: "Get Your Free Strategy",
    darkTitle: "Are You Building Links in the Dark?",
    darkDesc1: "Anyone can buy a backlink. But building the right links requires a clear strategy. Without one, you're likely wasting budget on irrelevant sites or missing the key opportunities your competitors are using.",
    darkStrong: "Stop Guessing.",
    darkDesc2: "Effective link building isn't about quantity; it's about precision. It's about knowing exactly which links to build to move the needle.",
    avoidTitle: "Avoid Wasted Spend",
    avoidSub: "Don't let \"Analysis Paralysis\" or poor planning drain your budget.",
    stepsTitle: "Your Personalized Roadmap to Page One",
    stepsSub: "How Our Free Strategy Builder Works",
    steps: [
      { title: "1. Tell Us Your Goal", text: "Provide your website URL, target keywords, and top competitors.", icon: "fa-bullseye" },
      { title: "2. We Analyze Deeply", text: "Our SEO team analyzes your profile and competitors using enterprise data.", icon: "fa-microscope" },
      { title: "3. Get Your Plan", text: "Receive a clear, actionable roadmap with specific domains and anchor text.", icon: "fa-map-signs" },
    ],
    insideTitle: "What's Inside Your Free Strategy?",
    insideItems: [
      { title: "In-Depth Competitor Analysis", text: "See exactly where your competitors are getting their power from.", icon: "fa-chart-pie" },
      { title: "Curated Domain List", text: "Hand-picked domains from our marketplace perfect for your niche.", icon: "fa-list-ul" },
      { title: "Anchor Text Strategy", text: "Recommendations to ensure your profile looks natural and safe.", icon: "fa-anchor" },
      { title: "Prioritized Action Plan", text: "A step-by-step guide on which links to build first for quick wins.", icon: "fa-road" },
    ],
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "Is this really free? What's the catch?", answer: "Yes, 100% free. The catch? We hope that once you see the plan and the quality of our marketplace, you'll use Linkaza to execute it. It's our way of showing expertise upfront." },
      { question: "How is this different from Ahrefs or Semrush?", answer: "Tools provide raw data. We provide interpretation and a plan. We sift through the data to give you a simple, prioritized list of what to do next." },
      { question: "Who builds my strategy?", answer: "Your strategy is built by our in-house team of SEO analysts, not an automated bot. Real experts reviewing your site." },
    ],
    finalCtaTitle: "Stop Guessing. Start Ranking Strategically.",
    finalCtaSub: "A Winning Campaign Begins With a Winning Plan.",
    finalCtaBtn: "Get Your Free Link Building Strategy",
  },
  ar: {
    seoTitle: "استراتيجية بناء روابط مجانية | خارطة طريق سيو مخصصة",
    seoDesc: "احصل على استراتيجية بناء روابط مخصصة من محلّلي السيو الداخليين عندنا، مجانية 100% — تحليل منافسين وخطة عمل بأولويات.",
    heroTitle1: "الاستراتيجية الوحيدة للباك لينك يلي",
    heroTitle2: "رح تحتاجها.",
    heroDesc: "الحملة الناجحة بتبدأ بخطة ذكية. خلّي خبرائنا يبنولك استراتيجية بناء روابط مخصصة تستهدف منافسينك وتسيطر على نتائج البحث.",
    heroStrong: "ومجانية 100%.",
    ctaFree: "احصل على استراتيجيتك المجانية",
    darkTitle: "عم تبني روابط بالعتمة؟",
    darkDesc1: "أي حدا فيه يشتري باك لينك. بس بناء الروابط الصح بيحتاج استراتيجية واضحة. بلاها، غالباً رح تضيّع ميزانيتك على مواقع مش مناسبة أو تفوّت الفرص الأساسية يلي منافسينك مستخدمينها.",
    darkStrong: "بطّل تخمّن.",
    darkDesc2: "بناء الروابط الفعّال مش عن الكمية؛ هو عن الدقة. هو عن إنك تعرف بالضبط شو الروابط يلي لازم تبنيها لتحرّك المؤشر.",
    avoidTitle: "تجنّب هدر الميزانية",
    avoidSub: "لا تخلّي \"شلل التحليل\" أو التخطيط الضعيف يستنزف ميزانيتك.",
    stepsTitle: "خارطة طريقك المخصصة للصفحة الأولى",
    stepsSub: "كيف بتشتغل أداة بناء الاستراتيجية المجانية تبعنا",
    steps: [
      { title: "1. احكيلنا عن هدفك", text: "قدّم رابط موقعك، الكلمات المفتاحية المستهدفة، وأهم منافسينك.", icon: "fa-bullseye" },
      { title: "2. منحلّل بعمق", text: "فريق السيو تبعنا بيحلّل ملفك ومنافسيك باستخدام بيانات احترافية.", icon: "fa-microscope" },
      { title: "3. خذ خطتك", text: "استلم خارطة طريق واضحة وقابلة للتنفيذ بدومينات محددة ونص تشعبي.", icon: "fa-map-signs" },
    ],
    insideTitle: "شو جوّا استراتيجيتك المجانية؟",
    insideItems: [
      { title: "تحليل منافسين متعمّق", text: "شوف بالضبط منين منافسينك عم ياخدوا قوتهم.", icon: "fa-chart-pie" },
      { title: "قائمة دومينات مختارة", text: "دومينات مختارة يدوياً من سوقنا مثالية لمجالك.", icon: "fa-list-ul" },
      { title: "استراتيجية النص التشعبي", text: "توصيات لضمان إنو ملف روابطك يبدو طبيعي وآمن.", icon: "fa-anchor" },
      { title: "خطة عمل بأولويات", text: "دليل خطوة بخطوة على شو الروابط يلي لازم تبنيها أول للحصول على نتائج سريعة.", icon: "fa-road" },
    ],
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "فعلاً مجانية؟ شو الشرط؟", answer: "أيوا، مجانية 100%. الشرط؟ منتمنى لما تشوف الخطة وجودة سوقنا، تستخدم Linkaza لتنفيذها. هيك طريقتنا نوريك خبرتنا من البداية." },
      { question: "شو الفرق بينها وبين Ahrefs أو Semrush؟", answer: "الأدوات بتقدّم بيانات خام. إحنا منقدّم تفسير وخطة. منغربل البيانات لنقدّملك قائمة بسيطة ومرتّبة بالأولوية لشو لازم تعمل بعدين." },
      { question: "مين بيبني استراتيجيتي؟", answer: "استراتيجيتك بيبنيها فريقنا الداخلي من محلّلي السيو، مش بوت آلي. خبراء حقيقيين بيراجعوا موقعك." },
    ],
    finalCtaTitle: "بطّل تخمّن. ابلّش ترتّب بشكل استراتيجي.",
    finalCtaSub: "الحملة الرابحة بتبدأ بخطة رابحة.",
    finalCtaBtn: "احصل على استراتيجية بناء روابطك المجانية",
  },
};

const StrategyBuilder = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/strategy-builder"
        translated={["en", "ar"]}
        schema={[
          faqPageSchema(t.faqs),
          serviceSchema({ name: "Link Building Strategy", description: "Personalized link building strategy and competitor analysis, built by in-house SEO analysts.", path: "/strategy-builder", priceFrom: 0 }),
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
                    {t.heroTitle1} <span style={{color: 'var(--lz-primary-alt)'}}>{t.heroTitle2}</span>
                  </h1>
                  <p className="mb-40" style={{fontSize: '18px', lineHeight: '1.7', color: '#555'}}>
                    {t.heroDesc} <br/><strong>{t.heroStrong}</strong>
                  </p>
                  <div className="hero-btn d-flex align-items-center">
                    <Link href="/contact" className="btn btn-gradient btn-gradient-02 mr-20" style={{borderRadius: '50px', padding: '15px 35px'}}>
                      {t.ctaFree}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="SEO Strategy Roadmap"
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
                                <h2 style={{fontSize: '36px', marginBottom: '20px'}}>{t.darkTitle}</h2>
                                <p style={{fontSize: '16px', lineHeight: '1.7', color: '#555'}}>
                                    {t.darkDesc1}
                                    <br/><br/>
                                    <strong>{t.darkStrong}</strong> {t.darkDesc2}
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
                             borderLeft: '5px solid #ff4d4d'
                         }}>
                             <i className="fas fa-exclamation-triangle fa-4x mb-30" style={{color: '#ff4d4d'}}></i>
                             <h3 style={{fontSize: '24px'}}>{t.avoidTitle}</h3>
                             <p>{t.avoidSub}</p>
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
                            <h2 style={{marginBottom: '15px'}}>{t.insideTitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {t.insideItems.map((item, i) => (
                        <div key={i} className="col-xl-6 col-lg-6">
                            <div className="case-item mb-30 d-flex align-items-start p-4" style={{border: '1px solid #eee', borderRadius: '10px'}}>
                                <div className="icon mr-20"><i className={`fas ${item.icon} fa-2x`} style={{color: 'var(--lz-primary-alt)'}}></i></div>
                                <div>
                                    <h4 style={{fontSize: '18px', marginBottom: '10px'}}>{item.title}</h4>
                                    <p style={{fontSize: '14px'}}>{item.text}</p>
                                </div>
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
                            <div className="accordion" id="strategyAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden', background: '#fff'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#strategyAccordion">
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

export default StrategyBuilder;
