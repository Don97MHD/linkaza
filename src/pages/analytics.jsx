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
    seoTitle: "Backlink Analytics & SEO Insights | Track ROI",
    seoDesc: "Track live link status, DA/DR, traffic, and keyword impact in one dashboard. Export white-label reports and prove your SEO ROI.",
    heroTitle1: "Discover the Future of",
    heroTitle2: "Link Building Innovation",
    heroDesc: "Building links is only the beginning. Our powerful backlink analytics dashboard turns raw data into actionable SEO insights, giving you the clarity to prove your ROI.",
    ctaDemo: "Request a Live Demo",
    ctaFeatures: "See Features",
    problemTitle: "Stop Drowning in Dashboards. Start Making Decisions.",
    problemDesc1: "You check Ahrefs for profiles, Moz for DA, and Google Search Console for indexing. This data fragmentation is a strategic liability.",
    problemStrong: "The High Cost of Scattered Data:",
    problemDesc2: "Wasted time manually collating spreadsheets, missed insights connecting cause and effect, and difficulty proving ROI to clients.",
    truthTitle: "Single Source of Truth",
    truthSub: "A unified command center for your entire backlink strategy.",
    commandTitle: "All Your Critical Data, All in One Place",
    commandSub: "Your Command Center for Link Building Performance",
    features: [
      { title: "Unified Dashboard", text: "Real-time metrics from Ahrefs, Moz, and Semrush alongside your campaign data.", icon: "fa-tachometer-alt" },
      { title: "Live Monitoring", text: "Automatic alerts if a link goes down, changes to nofollow, or isn't indexed.", icon: "fa-satellite-dish" },
      { title: "Rank Tracking", text: "Visually connect the dots between acquiring a new link and keyword jumps.", icon: "fa-chart-line" },
      { title: "Anchor Analysis", text: "Visualize anchor text distribution to ensure your profile looks organic.", icon: "fa-font" },
    ],
    outmaneuverTitle: "Use Powerful Insights to Outmaneuver the Competition",
    benefits: [
      { title: "Data-Driven Decisions", text: "Identify which links have the biggest impact and double down on what works.", icon: "fa-brain" },
      { title: "Prove ROI with Confidence", text: "Generate professional reports demonstrating the value of your work to clients.", icon: "fa-file-invoice-dollar" },
      { title: "Competitor Benchmarking", text: "Understand how your performance stacks up against the competition.", icon: "fa-crosshairs" },
    ],
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "Does this replace Ahrefs or Semrush?", answer: "We are not a replacement for deep research tools. We unify the most important performance and monitoring data specifically for your link building campaigns to make tracking easier." },
      { question: "What kind of metrics can I track?", answer: "You can track live status, index status, DA/DR, estimated traffic, anchor text distribution, and direct keyword ranking impact." },
      { question: "Can I export reports for clients?", answer: "Yes. Our dashboard allows you to generate and export clean, white-label reports to share with your clients or stakeholders." },
    ],
    finalCtaTitle: "Stop Building Links. Start Building Intelligence.",
    finalCtaSub: "See Your Entire Link Building Universe in a Single View.",
    finalCtaBtn: "Request a Personalized Demo",
  },
  ar: {
    seoTitle: "تحليلات الباك لينك ومؤشرات السيو | تتبّع العائد",
    seoDesc: "تابع حالة الروابط الحية، قوة الدومين، الترافيك، وتأثير الكلمات المفتاحية بلوحة تحكم وحدة. صدّر تقارير white-label وأثبت عائد السيو.",
    heroTitle1: "اكتشف مستقبل",
    heroTitle2: "ابتكار بناء الروابط",
    heroDesc: "بناء الروابط هو بس البداية. لوحة تحليلات الباك لينك القوية تبعنا بتحوّل البيانات الخام لرؤى سيو قابلة للتنفيذ، وبتديك وضوح لإثبات عائدك.",
    ctaDemo: "اطلب عرض تجريبي حي",
    ctaFeatures: "شوف المزايا",
    problemTitle: "بطّل تغرق بلوحات التحكم. ابلّش تاخد قرارات.",
    problemDesc1: "بتفحص Ahrefs لملفات الروابط، Moz لقوة الدومين، وGoogle Search Console للفهرسة. تشتّت البيانات هالشي هو عبء استراتيجي.",
    problemStrong: "التكلفة العالية للبيانات المتفرّقة:",
    problemDesc2: "وقت ضايع بتجميع جداول البيانات يدوياً، رؤى فايتة بربط السبب بالنتيجة، وصعوبة إثبات العائد للعملاء.",
    truthTitle: "مصدر واحد للحقيقة",
    truthSub: "مركز قيادة موحّد لكامل استراتيجية الباك لينك تبعك.",
    commandTitle: "كل بياناتك الأساسية، بمكان واحد",
    commandSub: "مركز قيادتك لأداء بناء الروابط",
    features: [
      { title: "لوحة تحكم موحّدة", text: "مؤشرات لحظية من Ahrefs، Moz، وSemrush جنب بيانات حملتك.", icon: "fa-tachometer-alt" },
      { title: "مراقبة حية", text: "تنبيهات تلقائية إذا رابط توقف، تحوّل لـnofollow، أو ما انفهرس.", icon: "fa-satellite-dish" },
      { title: "تتبّع الترتيب", text: "اربط بصرياً بين الحصول على رابط جديد وقفزات الكلمات المفتاحية.", icon: "fa-chart-line" },
      { title: "تحليل النص التشعبي", text: "صوّر توزيع النص التشعبي عشان تضمن إنو ملف روابطك يبدو طبيعي.", icon: "fa-font" },
    ],
    outmaneuverTitle: "استخدم رؤى قوية للتفوّق على المنافسة",
    benefits: [
      { title: "قرارات مبنية على البيانات", text: "حدّد شو الروابط يلي إلها أكبر تأثير وضاعف عليها.", icon: "fa-brain" },
      { title: "أثبت العائد بثقة", text: "أنشئ تقارير احترافية بتوضّح قيمة شغلك لعملائك.", icon: "fa-file-invoice-dollar" },
      { title: "مقارنة مع المنافسين", text: "افهم كيف أداءك مقارنة بالمنافسة.", icon: "fa-crosshairs" },
    ],
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "هل هاد بديل لـAhrefs أو Semrush؟", answer: "إحنا مش بديل لأدوات البحث المتعمّق. منوحّد أهم بيانات الأداء والمراقبة المخصصة لحملات بناء الروابط تبعك عشان نسهّل المتابعة." },
      { question: "شو نوع المؤشرات يلي فيني أتابعها؟", answer: "فيك تتابع الحالة الحية، حالة الفهرسة، قوة الدومين، الترافيك المقدّر، توزيع النص التشعبي، وتأثير مباشر على ترتيب الكلمات المفتاحية." },
      { question: "فيني أصدّر تقارير للعملاء؟", answer: "أيوا. لوحة التحكم تبعنا بتخليك تنشئ وتصدّر تقارير white-label نظيفة لمشاركتها مع عملائك أو أصحاب المصلحة." },
    ],
    finalCtaTitle: "بطّل تبني روابط بس. ابلّش تبني ذكاء.",
    finalCtaSub: "شوف كامل كون بناء الروابط تبعك بنظرة وحدة.",
    finalCtaBtn: "اطلب عرض تجريبي مخصّص",
  },
};

const Analytics = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/analytics"
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
                    <Link href="/contact" className="btn btn-gradient btn-gradient-02 mr-20" style={{borderRadius: '50px', padding: '15px 35px'}}>
                      {t.ctaDemo}
                    </Link>
                    <Link href="#features" className="btn btn-white btn-white-02" style={{borderRadius: '50px', border: '2px solid #eef0f4', padding: '15px 35px'}}>
                      {t.ctaFeatures}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Analytics Dashboard"
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
                             borderLeft: '5px solid #1c3354'
                         }}>
                             <i className="fas fa-chart-pie fa-4x mb-30" style={{color: '#1c3354'}}></i>
                             <h3 style={{fontSize: '24px'}}>{t.truthTitle}</h3>
                             <p>{t.truthSub}</p>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" className="features-area pt-100 pb-90 gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-70">
                            <h2 style={{marginBottom: '15px'}}>{t.commandTitle}</h2>
                            <p>{t.commandSub}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {t.features.map((f, i) => (
                        <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-features mb-30 bg-white text-center" style={{padding: '40px 20px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%'}}>
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

        <section className="use-cases-area pt-100 pb-100 bg-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-60">
                            <h2 style={{marginBottom: '15px'}}>{t.outmaneuverTitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {t.benefits.map((b, i) => (
                        <div key={i} className="col-xl-4 col-lg-4">
                            <div className="case-item mb-30 p-4 text-center" style={{border: '1px solid #eee', borderRadius: '10px'}}>
                                <i className={`fas ${b.icon} fa-2x mb-20`} style={{color: '#1c3354'}}></i>
                                <h4 style={{fontSize: '18px', marginBottom: '15px'}}>{b.title}</h4>
                                <p>{b.text}</p>
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
                            <div className="accordion" id="analyticsAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden', background: '#fff'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#analyticsAccordion">
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

export default Analytics;
