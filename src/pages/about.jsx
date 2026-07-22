import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import HeaderThree from "../layout/headers/header-3";
import Footer from "../layout/footers/footer";

import hero_img from "@assets/img/blog/img6.jpg";
import shape_1 from "@assets/img/shape/shape-s-1.png";

const content = {
  en: {
    seoTitle: "About Us | Our Mission to Simplify SEO",
    seoDesc: "Linkaza was built by SEOs, for SEOs, to fix the chaos of manual link building. Meet the platform behind thousands of SEO campaigns.",
    heroTitle1: "We're Here to Simplify the",
    heroTitle2: "Most Powerful Part of SEO",
    heroDesc: "Link building is the undisputed king of ranking factors, yet for decades, it has been a complex, fragmented, and frustrating process. Linkaza was founded on a simple but powerful idea: there had to be a better way.",
    storyTitle: "From a Spreadsheet Nightmare to a Global Platform",
    storyQuote: "We knew that if we were facing this problem, thousands of other agencies, consultants, and businesses were too.",
    storyDesc1: "Our story begins where many of you are right now. As founders of a digital marketing agency, we lived in a world of spreadsheets. We had one for outreach, another for vetted publishers, and a third for tracking live links. It was a chaotic, inefficient system that made scaling impossible.",
    storyDesc2Pre: "In 2020, we assembled a team of the best engineers and SEO professionals to build the solution we wished we had.",
    storyStrong: "That's how Linkaza was born.",
    storyDesc2Post: "Today, we are the engine behind thousands of successful SEO campaigns worldwide.",
    valuesTitle: "The Principles That Guide Us",
    valuesSub: "Our Mission & Values",
    values: [
      { title: "Transparency First", text: "No black boxes, no hidden fees. You should always know exactly what you're getting and what you're paying for.", icon: "fa-eye" },
      { title: "Obsess Over Quality", text: "We are relentless in our pursuit of quality, from the publishers we partner with to the support we provide.", icon: "fa-star" },
      { title: "Simplify Complexity", text: "Our job is to take the chaos of link building and turn it into a simple, streamlined process for our users.", icon: "fa-magic" },
      { title: "Succeed Together", text: "We view our users as partners. Your success is our success, and we're committed to providing the tools you need.", icon: "fa-users" },
    ],
    ctaTitle: "Want to Join Our Journey?",
    ctaSub: "We are always looking for exceptional talent.",
    ctaBtn: "Contact Us",
  },
  ar: {
    seoTitle: "من نحن | مهمتنا تبسيط السيو",
    seoDesc: "Linkaza اتبنت من خبراء سيو، لخبراء سيو، عشان تحل فوضى بناء الروابط اليدوي. تعرّف على المنصة يلي وراء آلاف حملات السيو.",
    heroTitle1: "إحنا هون عشان نبسّط",
    heroTitle2: "أقوى جزء بالسيو",
    heroDesc: "بناء الروابط هو الملك بلا منازع بعوامل الترتيب، بس لعقود، كان عملية معقّدة، مبعثرة، ومحبطة. Linkaza اتأسست على فكرة بسيطة بس قوية: لازم يكون في طريقة أفضل.",
    storyTitle: "من كابوس جداول البيانات لمنصة عالمية",
    storyQuote: "كنا متأكدين إنو إذا كنا نحنا واجهنا هالمشكلة، آلاف الوكالات، المستشارين، والشركات الغير كانوا يواجهوها كمان.",
    storyDesc1: "قصتنا بتبدأ من وين كتير منكم واقفين هلق. كمؤسسين لوكالة تسويق رقمي، كنا عايشين بعالم جداول بيانات. كان عنا واحد للتواصل، وحدة تانية للناشرين المدقّقين، وتالتة لتتبّع الروابط الحية. كان نظام فوضوي وغير فعّال بيخلّي التوسّع مستحيل.",
    storyDesc2Pre: "بسنة 2020، جمعنا فريق من أفضل المهندسين ومحترفي السيو لنبني الحل يلي كنا نتمناه.",
    storyStrong: "وهيك ولدت Linkaza.",
    storyDesc2Post: "اليوم، إحنا المحرّك وراء آلاف حملات السيو الناجحة حول العالم.",
    valuesTitle: "المبادئ يلي بتوجّهنا",
    valuesSub: "مهمتنا وقيمنا",
    values: [
      { title: "الشفافية أولاً", text: "بلا صناديق سوداء، بلا رسوم مخفية. لازم تعرف دايماً بالضبط شو عم تاخد وشو عم تدفع مقابله.", icon: "fa-eye" },
      { title: "هوس بالجودة", text: "إحنا ما بنتنازل بمتابعة الجودة، من الناشرين يلي منتشارك معهم لحتى الدعم يلي منقدّمه.", icon: "fa-star" },
      { title: "تبسيط التعقيد", text: "شغلنا هو ناخد فوضى بناء الروابط ونحوّلها لعملية بسيطة ومنظّمة لمستخدمينا.", icon: "fa-magic" },
      { title: "ننجح مع بعض", text: "منشوف مستخدمينا كشركاء. نجاحكم هو نجاحنا، ومتمسّكين نقدّملكم الأدوات يلي محتاجينها.", icon: "fa-users" },
    ],
    ctaTitle: "بدك تنضم لرحلتنا؟",
    ctaSub: "دايماً عم نبحث عن مواهب استثنائية.",
    ctaBtn: "تواصل معنا",
  },
};

const About = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/about"
        translated={["en", "ar"]}
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
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Our Team"
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
                                 padding: '50px',
                                 borderRadius: '20px',
                                 borderLeft: '5px solid #1c3354'
                             }}>
                                 <h3 style={{fontSize: '28px', marginBottom: '20px'}}>{t.storyTitle}</h3>
                                 <p style={{fontSize: '16px', fontStyle: 'italic', color: '#666'}}>
                                     "{t.storyQuote}"
                                 </p>
                             </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-content mb-30 pl-30">
                            <div className="section-title mb-40">
                                <p style={{fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '20px'}}>
                                    {t.storyDesc1}
                                </p>
                                <p style={{fontSize: '16px', lineHeight: '1.8', color: '#555'}}>
                                    {t.storyDesc2Pre} <strong>{t.storyStrong}</strong> {t.storyDesc2Post}
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
                            <h2 style={{marginBottom: '15px'}}>{t.valuesTitle}</h2>
                            <p>{t.valuesSub}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {t.values.map((v, i) => (
                        <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-features mb-30 bg-white text-center" style={{padding: '40px 20px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%'}}>
                                <div className="icon mb-25">
                                    <i className={`fas ${v.icon} fa-3x`} style={{color: 'var(--lz-primary-alt)'}}></i>
                                </div>
                                <h3 style={{fontSize: '20px', marginBottom: '15px'}}>{v.title}</h3>
                                <p style={{fontSize: '14px', lineHeight: '1.6'}}>{v.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="newsletter-area pb-120 bg-white pt-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="newsletter-box text-center" style={{background: '#f4f6f9', padding: '70px', borderRadius: '20px'}}>
                            <h2 className="mb-20" style={{fontSize: '36px'}}>{t.ctaTitle}</h2>
                            <p className="mb-40" style={{fontSize: '18px'}}>{t.ctaSub}</p>
                            <div className="d-flex justify-content-center">
                                <Link href="/contact" className="btn btn-gradient btn-gradient-02 mr-15" style={{borderRadius: '50px', padding: '15px 40px'}}>
                                    {t.ctaBtn}
                                </Link>
                            </div>
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

export default About;
