import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Header from "../layout/headers/header-3";
import Footer from "../layout/footers/footer";
import { faqPageSchema } from "@/src/lib/schema";

import hero_img from "@assets/img/slider/slide-thumb.png";
import shape_1 from "@assets/img/shape/shape-s-1.png";

const content = {
  en: {
    seoTitle: "Scalable Link Building for Agencies",
    seoDesc: "Deliver client results without sacrificing margins. Centralized management, white-label fulfillment, and vetted publishers built to scale.",
    heroTitle1: "Your Agency's New Engine for",
    heroTitle2: "Scalable Link Building",
    heroDesc: "Deliver exceptional client results without sacrificing your margins. Linkaza is the platform designed to help your agency scale fulfillment and streamline operations.",
    ctaDemo: "Book a Free Demo",
    ctaPricing: "See Pricing",
    featTitle: "The Tools You Need to",
    featTitle2: "Outperform the Competition",
    featSub: "Linkaza removes the bottleneck of manual outreach.",
    features: [
      { title: "Centralized Management", text: "Manage your entire client portfolio from a single dashboard without touching a spreadsheet.", icon: "fa-users-cog" },
      { title: "White-Label Ready", text: "Designed to fit your workflow. Fulfill orders under your own brand seamlessly.", icon: "fa-tag" },
      { title: "Consistent Quality", text: "Give your clients the best. Our marketplace is filled with vetted, high-quality publishers.", icon: "fa-shield-check" },
      { title: "Dedicated Support", text: "Think of us as an extension of your team. Expert support is always available.", icon: "fa-headset" },
    ],
    roiTitle: "The ROI of Efficiency",
    roiSub: "Spend Less Time on Fulfillment, More Time on Growth.",
    comparison: "Comparison",
    oldWay: "The Old Way",
    linkazaWay: "The Linkaza Way",
    rows: [
      { label: "Time per Campaign", old: "10-15 Hours", lz: "1-2 Hours" },
      { label: "Publisher Quality", old: "Inconsistent", lz: "Vetted & High-Quality" },
      { label: "Management", old: "Spreadsheets & Emails", lz: "Centralized Dashboard" },
      { label: "Costs", old: "Unpredictable", lz: "Transparent Pay-As-You-Go" },
    ],
    roiCta: "Start Saving Time Today",
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "What makes Linkaza the best platform for agency link building?", answer: "Linkaza is built specifically for scale. Our centralized multi-client management and vetted publisher quality mean you can deliver better results efficiently than any other solution." },
      { question: "Do you offer white-label backlink services?", answer: "Yes. While we are a platform, our services are inherently white-label friendly. You manage the client relationship and strategy; we provide the powerful backend for fulfillment, allowing you to maintain your brand's authority." },
      { question: "How do I manage link building for multiple clients?", answer: "Our agency dashboard is designed for this. You can create separate campaigns for each client, allocate budgets individually, and use our marketplace's powerful filters to find the perfect niche-relevant publishers for each one." },
    ],
    finalCtaTitle: "Ready to Build a More Profitable Agency?",
    finalCtaSub: "See Why the Fastest-Growing Agencies Run on Linkaza.",
    finalCtaBtn: "Book Your Free Agency Demo",
  },
  ar: {
    seoTitle: "بناء روابط قابل للتوسّع للوكالات",
    seoDesc: "قدّم نتائج لعملائك بلا ما تضحّي بهامش ربحك. إدارة مركزية، تنفيذ white-label، وناشرين مدقّقين مبنيين للتوسّع.",
    heroTitle1: "محرّك وكالتك الجديد",
    heroTitle2: "لبناء روابط قابل للتوسّع",
    heroDesc: "قدّم نتائج استثنائية لعملائك بلا ما تضحّي بهامش ربحك. Linkaza هي المنصة المصمّمة لمساعدة وكالتك توسّع التنفيذ وتبسّط العمليات.",
    ctaDemo: "احجز عرض تجريبي مجاني",
    ctaPricing: "شوف الأسعار",
    featTitle: "الأدوات يلي محتاجها",
    featTitle2: "لتتفوّق على المنافسين",
    featSub: "Linkaza بتشيل عائق التواصل اليدوي.",
    features: [
      { title: "إدارة مركزية", text: "أدر كل محفظة عملائك من لوحة تحكم واحدة بلا ما تلمس جدول بيانات.", icon: "fa-users-cog" },
      { title: "جاهزة لـ White-Label", text: "مصمّمة تناسب سير عملك. نفّذ الطلبات تحت علامتك التجارية بسلاسة.", icon: "fa-tag" },
      { title: "جودة ثابتة", text: "قدّم لعملائك الأفضل. سوقنا مليان بناشرين مدقّقين وعالي الجودة.", icon: "fa-shield-check" },
      { title: "دعم مخصّص", text: "اعتبرنا امتداد لفريقك. الدعم الخبير متوفّر دايماً.", icon: "fa-headset" },
    ],
    roiTitle: "عائد الكفاءة",
    roiSub: "اصرف وقت أقل على التنفيذ، ووقت أكتر على النمو.",
    comparison: "المقارنة",
    oldWay: "الطريقة القديمة",
    linkazaWay: "طريقة Linkaza",
    rows: [
      { label: "الوقت لكل حملة", old: "10-15 ساعة", lz: "1-2 ساعة" },
      { label: "جودة الناشرين", old: "غير ثابتة", lz: "مدقّقة وعالية الجودة" },
      { label: "الإدارة", old: "جداول بيانات وإيميلات", lz: "لوحة تحكم مركزية" },
      { label: "التكاليف", old: "غير متوقّعة", lz: "شفافة وبحسب الاستخدام" },
    ],
    roiCta: "ابلّش توفّر وقتك اليوم",
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "شو يلي بيخلّي Linkaza أفضل منصة لبناء روابط للوكالات؟", answer: "Linkaza مبنية خصيصاً للتوسّع. إدارتنا المركزية لعملاء متعددين وجودة الناشرين المدقّقين بتعني إنك بتقدّم نتائج أفضل وبكفاءة أكتر من أي حل تاني." },
      { question: "بتقدّموا خدمات باك لينك White-Label؟", answer: "أيوا. رغم إحنا منصة، خدماتنا صديقة لـwhite-label بطبيعتها. إنت بتدير علاقة العميل والاستراتيجية؛ إحنا منقدّم البنية القوية للتنفيذ، وهيك بتحافظ على موثوقية علامتك." },
      { question: "كيف بقدر أدير بناء الروابط لعملاء متعددين؟", answer: "لوحة تحكم الوكالة تبعنا مصمّمة لهيك. فيك تنشئ حملات منفصلة لكل عميل، توزّع الميزانيات بشكل فردي، وتستخدم فلاتر سوقنا القوية عشان تلاقي أفضل ناشرين مطابقين لمجال كل عميل." },
    ],
    finalCtaTitle: "جاهز تبني وكالة أكتر ربحية؟",
    finalCtaSub: "شوف ليش أسرع الوكالات نمواً بتشتغل على Linkaza.",
    finalCtaBtn: "احجز عرضك التجريبي المجاني",
  },
};

const Agencies = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/agencies"
        translated={["en", "ar"]}
        schema={faqPageSchema(t.faqs)}
      />
      <Header />

      <main dir={isAr ? "rtl" : "ltr"}>
        <section className="hero-area pos-rel pt-20 pb-20 fix gray-bg">

          <div className="shape-s-1"><Image src={shape_1} alt="shape" /></div>
          <div className="shape-s-2"><Image src={shape_1} alt="shape" /></div>

          <div className="container">
            <div className="row align-items-center">

              <div className="col-xl-6 col-lg-6">
                <div className="hero-content mb-30">
                  <h1 className="hero-title mb-30" style={{fontSize: '52px', lineHeight: '1.2', fontWeight: '800', color: '#1c3354'}}>
                    {t.heroTitle1} <span style={{color: 'var(--lz-primary-alt)'}}>{t.heroTitle2}</span>
                  </h1>
                  <p className="mb-40" style={{fontSize: '18px', lineHeight: '1.7', color: '#555'}}>
                    {t.heroDesc}
                  </p>

                  <div className="hero-btn d-flex align-items-center">
                    <Link href="/contact" className="btn btn-gradient btn-gradient-02 mr-20" style={{borderRadius: '50px', padding: '15px 35px'}}>
                      {t.ctaDemo}
                    </Link>
                    <Link href="/pricing" className="btn btn-white btn-white-02" style={{borderRadius: '50px', border: '2px solid #eef0f4', padding: '15px 35px'}}>
                      {t.ctaPricing}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Agency Dashboard"
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

        <section className="features-area pt-120 pb-90 bg-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-70">
                            <h2 style={{marginBottom: '15px'}}>{t.featTitle} <br/> {t.featTitle2}</h2>
                            <p>{t.featSub}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {t.features.map((f, i) => (
                        <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-features text-center mb-30" style={{padding: '40px 25px', border: '1px solid #f0f0f0', borderRadius: '15px', transition: '0.3s'}}>
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

        <section className="roi-area pt-100 pb-120 gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-50">
                            <h2 style={{marginBottom: '15px'}}>{t.roiTitle}</h2>
                            <p>{t.roiSub}</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="table-responsive bg-white p-5 rounded shadow-sm" style={{borderRadius: '20px'}}>
                            <table className="table table-borderless mb-0">
                                <thead>
                                    <tr style={{borderBottom: '2px solid #f0f0f0'}}>
                                        <th style={{width: '40%', padding: '20px', fontSize: '20px', fontWeight: '700'}}>{t.comparison}</th>
                                        <th style={{width: '30%', padding: '20px', fontSize: '20px', color: '#777'}}>{t.oldWay}</th>
                                        <th style={{width: '30%', padding: '20px', fontSize: '20px', color: 'var(--lz-primary-alt)', fontWeight: '700'}}>{t.linkazaWay}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {t.rows.map((r, i) => (
                                        <tr key={i} style={i < t.rows.length - 1 ? {borderBottom: '1px solid #f9f9f9'} : undefined}>
                                            <td style={{padding: '25px 20px', fontWeight: '600', fontSize: '16px'}}>{r.label}</td>
                                            <td style={{padding: '25px 20px', fontSize: '16px'}}>{r.old}</td>
                                            <td style={{padding: '25px 20px', color: 'var(--lz-primary-alt)', fontWeight: '700', fontSize: '16px'}}>{r.lz}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="text-center mt-50">
                             <a href="https://app.linkaza.com/register" target="_blank" rel="noopener noreferrer" className="btn btn-gradient btn-gradient-02" style={{borderRadius: '50px', padding: '15px 40px'}}>
                                {t.roiCta}
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
                            <div className="accordion" id="agencyAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700', fontSize: '18px', padding: '20px 25px'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#agencyAccordion">
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

export default Agencies;
