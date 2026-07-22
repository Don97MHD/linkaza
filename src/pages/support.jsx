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
    seoTitle: "24/7 SEO Support | Expert Help for Link Building",
    seoDesc: "Real humans, not bots. Live chat response under two minutes, 24/7 platform access, and dedicated managers for high-volume clients.",
    heroTitle1: "Whatever You Need,",
    heroTitle2: "We're Here for You.",
    heroTitle3: "24/7.",
    heroDesc: "In the fast-paced world of SEO, waiting 24 hours for an email response isn't an option. Linkaza offers world-class, human-powered support whenever you need it.",
    ctaChat: "Chat With a Specialist",
    ctaTeam: "Meet the Team",
    ticketTitle: "You Don't Need a Ticket Number. You Need an Answer.",
    ticketDesc1: "We've all been there. You submit a support ticket to a faceless system and get an automated reply: \"We'll respond within 48 hours.\"",
    ticketStrong: "This model is broken.",
    ticketDesc2: "At Linkaza, we don't have a \"support department.\" We have a Customer Success team empowered to solve problems immediately, not just log them.",
    fastTitle: "Real Humans, Fast Answers",
    fastSub: "Average response time under 2 minutes via live chat.",
    teamTitle: "Meet Your Dedicated Success Team",
    teamSub: "More than just technical support.",
    roles: [
      { title: "Account Managers", text: "Strategic partners for agencies. They understand your goals and help build custom strategies.", icon: "fa-user-tie" },
      { title: "Content Specialists", text: "Editorial experts who ensure every article meets your standards and publisher guidelines.", icon: "fa-pen-nib" },
      { title: "Platform Experts", text: "Available 24/7 via live chat to resolve technical queries or order issues in minutes.", icon: "fa-headset" },
    ],
    capsTitle: "We're Here to Help With... Everything.",
    caps: [
      { title: "Strategic Guidance", text: "Advice on which sites fit your niche best." },
      { title: "Order Management", text: "Expediting orders for time-sensitive campaigns." },
      { title: "Content Revisions", text: "Direct communication with writers for edits." },
      { title: "Publisher Comms", text: "Checking live dates and negotiation." },
    ],
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "Is support handled by bots or humans?", answer: "100% human. We believe in the power of real conversations with real experts. No frustrating chatbots." },
      { question: "What is the typical response time?", answer: "For live chat during business hours, response time is typically under two minutes. Emails are answered within a few hours." },
      { question: "Do I need a specific plan for an account manager?", answer: "Dedicated managers are for high-volume clients/agencies, but every user has 24/7 access to our expert platform team." },
    ],
    finalCtaTitle: "Don't Settle for Anything Less Than a True Partner.",
    finalCtaSub: "Experience the Confidence That Comes With Expert Support.",
    finalCtaBtn: "Start a Chat With Our Team",
  },
  ar: {
    seoTitle: "دعم سيو على مدار الساعة | مساعدة خبراء لبناء الروابط",
    seoDesc: "بشر حقيقيين، مش بوتات. رد على الشات الحي بأقل من دقيقتين، وصول للمنصة 24/7، ومدراء حسابات مخصصين للعملاء بحجم طلبات كبير.",
    heroTitle1: "أي شي محتاجو،",
    heroTitle2: "إحنا هون لأجلك.",
    heroTitle3: "24/7.",
    heroDesc: "بعالم السيو السريع، انتظار 24 ساعة لرد إيميل مش خيار. Linkaza بتقدّم دعم بمستوى عالمي وبشري وقتما تحتاجه.",
    ctaChat: "تحدّث مع مختص",
    ctaTeam: "تعرّف على الفريق",
    ticketTitle: "مش محتاج رقم تذكرة. محتاج جواب.",
    ticketDesc1: "كلنا مرّينا فيها. بتقدّم تذكرة دعم لنظام بلا وجه وبتاخد رد آلي: \"رح نرد خلال 48 ساعة.\"",
    ticketStrong: "هالنموذج مكسور.",
    ticketDesc2: "بـLinkaza، ما عنا \"قسم دعم\". عنا فريق نجاح عملاء مخوّل يحل المشاكل فوراً، مش بس يسجّلها.",
    fastTitle: "بشر حقيقيين، إجابات سريعة",
    fastSub: "متوسط وقت الرد أقل من دقيقتين عبر الشات الحي.",
    teamTitle: "تعرّف على فريق نجاحك المخصّص",
    teamSub: "أكتر من مجرد دعم تقني.",
    roles: [
      { title: "مدراء الحسابات", text: "شركاء استراتيجيين للوكالات. بيفهموا أهدافك ويساعدوا ببناء استراتيجيات مخصصة.", icon: "fa-user-tie" },
      { title: "متخصّصو المحتوى", text: "خبراء تحرير بيضمنوا كل مقال يطابق معاييرك وإرشادات الناشرين.", icon: "fa-pen-nib" },
      { title: "خبراء المنصة", text: "متوفرين 24/7 عبر الشات الحي لحل الاستفسارات التقنية أو مشاكل الطلبات بدقائق.", icon: "fa-headset" },
    ],
    capsTitle: "إحنا هون عشان نساعد بـ... كل شي.",
    caps: [
      { title: "إرشاد استراتيجي", text: "نصائح عن شو المواقع يلي بتناسب مجالك أكتر." },
      { title: "إدارة الطلبات", text: "تسريع الطلبات للحملات الحساسة بالوقت." },
      { title: "تعديلات المحتوى", text: "تواصل مباشر مع الكتّاب للتعديلات." },
      { title: "تواصل مع الناشرين", text: "التحقق من تواريخ النشر والتفاوض." },
    ],
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "الدعم بيتعامل معه بوتات أو بشر؟", answer: "بشر 100%. منؤمن بقوة المحادثات الحقيقية مع خبراء حقيقيين. بلا شات بوتات مزعجة." },
      { question: "شو متوسط وقت الرد؟", answer: "بالشات الحي خلال ساعات العمل، وقت الرد عادة أقل من دقيقتين. الإيميلات بينرد عليها خلال ساعات قليلة." },
      { question: "لازم باقة معينة لمدير حساب؟", answer: "المدراء المخصصين للعملاء/الوكالات بحجم طلبات كبير، بس كل مستخدم عندو وصول 24/7 لفريق المنصة الخبير." },
    ],
    finalCtaTitle: "لا تكتفي بأقل من شريك حقيقي.",
    finalCtaSub: "جرّب الثقة يلي بتيجي مع دعم الخبراء.",
    finalCtaBtn: "ابدأ محادثة مع فريقنا",
  },
};

const Support = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/support"
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
                    <Link href="/contact" className="btn btn-gradient btn-gradient-02 mr-20" style={{borderRadius: '50px', padding: '15px 35px'}}>
                      {t.ctaChat}
                    </Link>
                    <Link href="#team" className="btn btn-white btn-white-02" style={{borderRadius: '50px', border: '2px solid #eef0f4', padding: '15px 35px'}}>
                      {t.ctaTeam}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Support Team"
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
                                <h2 style={{fontSize: '36px', marginBottom: '20px'}}>{t.ticketTitle}</h2>
                                <p style={{fontSize: '16px', lineHeight: '1.7', color: '#555'}}>
                                    {t.ticketDesc1}
                                    <br/><br/>
                                    <strong>{t.ticketStrong}</strong> {t.ticketDesc2}
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
                             borderLeft: '5px solid var(--lz-primary-alt)'
                         }}>
                             <i className="fas fa-comments fa-4x mb-30" style={{color: 'var(--lz-primary-alt)'}}></i>
                             <h3 style={{fontSize: '24px'}}>{t.fastTitle}</h3>
                             <p>{t.fastSub}</p>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="team" className="features-area pt-100 pb-90 gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center mb-70">
                            <h2 style={{marginBottom: '15px'}}>{t.teamTitle}</h2>
                            <p>{t.teamSub}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {t.roles.map((r, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-features mb-30 bg-white text-center" style={{padding: '40px 20px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%'}}>
                                <div className="icon mb-25">
                                    <i className={`fas ${r.icon} fa-3x`} style={{color: 'var(--lz-primary-alt)'}}></i>
                                </div>
                                <h3 style={{fontSize: '20px', marginBottom: '15px'}}>{r.title}</h3>
                                <p style={{fontSize: '14px', lineHeight: '1.6'}}>{r.text}</p>
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
                            <h2 style={{marginBottom: '15px'}}>{t.capsTitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {t.caps.map((c, i) => (
                        <div key={i} className="col-xl-6 col-lg-6">
                            <div className="case-item mb-20 p-3" style={{borderBottom: '1px solid #eee'}}>
                                <h4 style={{fontSize: '18px', marginBottom: '5px'}}><i className="fas fa-check mr-10" style={{color: 'var(--lz-primary-alt)'}}></i> {c.title}</h4>
                                <p style={{fontSize: '14px', marginLeft: '30px'}}>{c.text}</p>
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
                            <div className="accordion" id="supportAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden', background: '#fff'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#supportAccordion">
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

export default Support;
