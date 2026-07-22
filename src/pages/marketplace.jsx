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
    seoTitle: "Link Building Marketplace | Buy Guest Posts & Backlinks",
    seoDesc: "Browse 80,000+ vetted publishers and buy guest post backlinks with transparent pricing. Filter by DA, DR, traffic, and niche — no hidden fees.",
    heroTitle1: "The Intelligent",
    heroTitle2: "Marketplace to",
    heroTitle3: "Buy Backlinks",
    heroDesc: "Stop wasting countless hours on outreach and vetting. Get instant access to over 80,000+ vetted publishers ready to provide high-quality guest posts.",
    ctaExplore: "Explore the Marketplace",
    ctaFreeAccount: "Create Free Account",
    section2Title: "From Guesswork and Grind to Speed and Precision.",
    section2Desc1: "The old way of building links is broken. Sifting through endless lists, sending hundreds of emails, and negotiating prices is inefficient.",
    section2Strong: "The Linkaza Marketplace is the solution.",
    section2Desc2: "It's a single, powerful platform where you can find and buy guest posts on high-authority websites with complete transparency.",
    statTitle: "80,000+ Websites",
    statSub: "Vetted for traffic, authority, and quality.",
    stepsTitle: "Find and Secure Placements in 3 Steps",
    stepsSub: "A Simple Path to Powerful Links",
    steps: [
      { title: "1. Search & Filter", text: "Define your ideal placement. Filter by DA, DR, Traffic, Niche, and Country to find the perfect match." },
      { title: "2. Place Order", text: "See pricing upfront. Select your website, add content writing if needed, and order in clicks." },
      { title: "3. Track & Approve", text: "Monitor progress from your dashboard. We handle the publisher. You verify the live link." },
    ],
    fullProcess: "See the full order process",
    advTitle: "The Linkaza Marketplace Advantage",
    advantages: [
      { title: "Massive Inventory", text: "80,000+ websites across every niche." },
      { title: "Data-Driven", text: "Integrated with Ahrefs, Moz, and Semrush metrics." },
      { title: "Price Transparency", text: "The price you see is the price you pay. No hidden fees." },
      { title: "Quality Control", text: "Every publisher is manually reviewed for quality." },
    ],
    faqTitle: "Your Questions, Answered",
    faqs: [
      { question: "What kind of sites can I find?", answer: "Our marketplace includes a diverse range of high-quality websites, from niche blogs and business sites to major news outlets and industry publications." },
      { question: "Are the links permanent and \"dofollow\"?", answer: "Yes, the vast majority of our placements offer permanent, dofollow links. The link type is clearly indicated on every listing in the marketplace for full transparency." },
      { question: "Can I buy guest posts for specific niches?", answer: "Yes. Our advanced filters make it easy to find publishers in any specific category like Tech, Finance, Health, Travel, and hundreds more." },
    ],
    ctaTitle: "Stop Searching. Start Ranking.",
    ctaSub: "Your Perfect Backlink is Just a Few Clicks Away.",
    ctaBrowse: "Browse Websites Now",
  },
  ar: {
    seoTitle: "سوق بناء الروابط | اشترِ مقالات ضيف وباك لينك",
    seoDesc: "تصفّح أكتر من 80,000 ناشر مدقّق واشترِ باك لينك بأسعار شفافة. فلتر حسب قوة الدومين، الترافيك، والمجال — بلا رسوم مخفية.",
    heroTitle1: "السوق الذكي",
    heroTitle2: "لشراء",
    heroTitle3: "الباك لينك",
    heroDesc: "بلاش تضيّع ساعات بالتواصل والفحص. احصل على وصول فوري لأكتر من 80,000 ناشر مدقّق جاهزين يقدّموا مقالات ضيف عالية الجودة.",
    ctaExplore: "تصفّح السوق",
    ctaFreeAccount: "افتح حساب مجاني",
    section2Title: "من التخمين والتعب لحتى السرعة والدقة.",
    section2Desc1: "الطريقة القديمة لبناء الروابط مكسورة. تصفّح قوائم بلا نهاية، بعت مئات الإيميلات، والتفاوض على الأسعار — كله غير فعّال.",
    section2Strong: "سوق Linkaza هو الحل.",
    section2Desc2: "منصة واحدة قوية فيها تلاقي وتشتري مقالات ضيف على مواقع عالية الموثوقية بشفافية كاملة.",
    statTitle: "أكتر من 80,000 موقع",
    statSub: "مدقّقين من ناحية الترافيك، الموثوقية، والجودة.",
    stepsTitle: "لاقي وأمّن أماكن نشر بـ3 خطوات",
    stepsSub: "طريق بسيط لروابط قوية",
    steps: [
      { title: "1. ابحث وفلتر", text: "حدّد المكان المثالي لطلبك. فلتر حسب قوة الدومين، الترافيك، المجال، والدولة عشان تلاقي أفضل تطابق." },
      { title: "2. قدّم الطلب", text: "شوف السعر مقدّماً. اختر موقعك، أضف كتابة محتوى إذا محتاج، واطلب بضغطات بسيطة." },
      { title: "3. تابع ووافق", text: "راقب التقدّم من لوحة التحكم. إحنا منتعامل مع الناشر. إنت بتتحقق من الرابط الحي." },
    ],
    fullProcess: "شوف آلية الطلب كاملة",
    advTitle: "ميزة سوق Linkaza",
    advantages: [
      { title: "مخزون ضخم", text: "أكتر من 80,000 موقع بكل المجالات." },
      { title: "مبني على البيانات", text: "متكامل مع مؤشرات Ahrefs، Moz، وSemrush." },
      { title: "شفافية بالسعر", text: "السعر يلي بتشوفو هو يلي بتدفعو. بلا رسوم مخفية." },
      { title: "ضبط الجودة", text: "كل ناشر بينفحص يدويًا للتأكد من الجودة." },
    ],
    faqTitle: "أسئلة شائعة",
    faqs: [
      { question: "شو نوع المواقع يلي فيني ألاقيها؟", answer: "سوقنا فيه مجموعة متنوعة من المواقع عالية الجودة، من مدونات متخصصة ومواقع أعمال لحتى منافذ إخبارية كبيرة ومنشورات متخصصة." },
      { question: "الروابط دائمة و\"Dofollow\"؟", answer: "أيوا، الغالبية العظمى من أماكن النشر عنّا بتقدّم روابط دائمة وDofollow. نوع الرابط موضّح بوضوح بكل إعلان بالسوق لشفافية كاملة." },
      { question: "فيني أشتري مقالات ضيف لمجالات محددة؟", answer: "أيوا. فلاترنا المتقدّمة بتسهّل عليك لقاء ناشرين بأي تصنيف محدد متل التقنية، المال، الصحة، السفر، ومئات غيرهم." },
    ],
    ctaTitle: "بطّل تدوّر. ابلّش ترتّب.",
    ctaSub: "الباك لينك المثالي تبعك بعيد بس بضغطات قليلة.",
    ctaBrowse: "تصفّح المواقع الآن",
  },
};

const Marketplace = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/marketplace"
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
                    <a href="https://app.linkaza.com/" target="_blank" rel="noopener noreferrer" className="btn btn-gradient btn-gradient-02 mr-20" style={{borderRadius: '50px', padding: '15px 35px'}}>
                      {t.ctaExplore}
                    </a>
                    <a href="https://app.linkaza.com/register" target="_blank" rel="noopener noreferrer" className="btn btn-white btn-white-02" style={{borderRadius: '50px', border: '2px solid #eef0f4', padding: '15px 35px'}}>
                      {t.ctaFreeAccount}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="hero-thumb mb-30 text-center wow fadeInRight" data-wow-delay=".3s">
                  <Image
                    src={hero_img}
                    alt="Linkaza Marketplace Interface"
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
                                <h2 style={{fontSize: '36px', marginBottom: '20px'}}>{t.section2Title}</h2>
                                <p style={{fontSize: '16px', lineHeight: '1.7', color: '#555'}}>
                                    {t.section2Desc1}
                                    <br/><br/>
                                    <strong>{t.section2Strong}</strong> {t.section2Desc2}
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
                             <i className="fas fa-search-dollar fa-4x mb-30" style={{color: 'var(--lz-primary-alt)'}}></i>
                             <h3 style={{fontSize: '24px'}}>{t.statTitle}</h3>
                             <p>{t.statSub}</p>
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
                                    <i className={`fas ${i === 0 ? 'fa-filter' : i === 1 ? 'fa-cart-plus' : 'fa-tasks'} fa-3x`} style={{color: 'var(--lz-primary-alt)'}}></i>
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
                    {t.advantages.map((a, i) => (
                        <div key={i} className="col-xl-3 col-lg-6">
                            <div className="case-item mb-30 text-center">
                                <i className={`fas ${['fa-globe','fa-chart-bar','fa-eye','fa-check-double'][i]} fa-2x mb-20`} style={{color: '#1c3354'}}></i>
                                <h4 style={{fontSize: '18px'}}>{a.title}</h4>
                                <p style={{fontSize: '14px'}}>{a.text}</p>
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
                            <div className="accordion" id="marketplaceAccordion">
                                {t.faqs.map((f, i) => (
                                    <div key={i} className="accordion-item mb-20" style={{border: '1px solid #e5e5e5', borderRadius: '10px', overflow: 'hidden', background: '#fff'}}>
                                        <h2 className="accordion-header" id={`h${i+1}`}>
                                            <button className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#c${i+1}`} style={{fontWeight: '700'}}>
                                                {f.question}
                                            </button>
                                        </h2>
                                        <div id={`c${i+1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#marketplaceAccordion">
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
                            <h2 className="mb-20" style={{fontSize: '36px'}}>{t.ctaTitle}</h2>
                            <p className="mb-40" style={{fontSize: '18px'}}>{t.ctaSub}</p>
                            <a href="https://app.linkaza.com/" target="_blank" rel="noopener noreferrer" className="btn btn-gradient btn-gradient-02" style={{borderRadius: '50px', padding: '18px 45px', fontSize: '18px'}}>
                                {t.ctaBrowse}
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

export default Marketplace;
