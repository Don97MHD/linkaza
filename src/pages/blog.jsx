import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import HeaderThree from "../layout/headers/header-3";
import Footer from "../layout/footers/footer";

import blog_1 from "@assets/img/blog/b1.jpg";
import blog_2 from "@assets/img/blog/b2.jpg";
import blog_3 from "@assets/img/blog/b3.jpg";
import blog_4 from "@assets/img/blog/b4.jpg";
import blog_5 from "@assets/img/blog/b5.jpg";
import blog_6 from "@assets/img/blog/b6.jpg";
import shape_1 from "@assets/img/shape/shape-s-1.png";

const content = {
  en: {
    seoTitle: "SEO Blog | Expert Link Building Tips & Guides",
    seoDesc: "Actionable link building strategies, SEO guides, and expert insights from the Linkaza team.",
    heroTitle1: "Stay Ahead of the Curve with the",
    heroTitle2: "Linkaza Knowledge Hub",
    heroDesc: "Welcome to the forefront of SEO. Your dedicated resource for cutting-edge strategies, actionable link building tips, and expert insights.",
    filters: ["All", "Link Building 101", "For Agencies", "Advanced SEO"],
    comingSoon: "Coming Soon",
    posts: [
      { img: blog_1, category: "Link Building 101", title: "The Anatomy of a Perfect Backlink: A 2025 Checklist", excerpt: "Before you build your next link, read this. We break down the 7 essential components that separate a powerful link from a worthless one." },
      { img: blog_2, category: "For Agencies", title: "How to Scale Link Building Without Scaling Your Headcount", excerpt: "Discover the systems and platforms top agencies are using to deliver hundreds of high-quality links per month, without burning out their teams." },
      { img: blog_3, category: "Advanced SEO", title: "Beyond Anchor Text: A Deep Dive into Topical Authority", excerpt: "Anchor text is just the beginning. Learn how Google evaluates the contextual relevance of your backlinks and how to build links that establish trust." },
      { img: blog_4, category: "Case Studies", title: "How Strategic Link Building Moves Organic Traffic", excerpt: "A look at how a focused link building strategy compounds over months, and how to measure the impact on your own site." },
      { img: blog_5, category: "Industry News", title: "Google's Latest Core Update: What It Means for Link Builders", excerpt: "Google is getting smarter at detecting spam. Here is how to ensure your backlink profile remains safe and effective in 2025." },
      { img: blog_6, category: "Tips & Tricks", title: "5 Outreach Templates That Actually Get Replies", excerpt: "Stop sending generic emails. Use these proven templates to connect with high-authority publishers and secure placements." },
    ],
    newsletterTitle: "Get a Competitive Edge, Delivered Weekly.",
    newsletterSub: "Get our best link building guides straight to your inbox. No spam, just value.",
    emailPlaceholder: "Enter your email address",
    subscribe: "Subscribe",
    ctaTitle: "The Theory is Great. The Practice is Better.",
    ctaSub: "See how the strategies discussed in our blog are made simple with the Linkaza platform.",
    ctaBtn: "Explore the Marketplace",
  },
  ar: {
    seoTitle: "مدونة السيو | نصائح ودلائل خبراء بناء الروابط",
    seoDesc: "استراتيجيات بناء روابط قابلة للتنفيذ، دلائل سيو، ورؤى خبراء من فريق Linkaza.",
    heroTitle1: "ابقَ بالمقدمة مع",
    heroTitle2: "مركز معرفة Linkaza",
    heroDesc: "أهلاً بيك بطليعة السيو. مصدرك المخصّص لاستراتيجيات متطورة، نصائح بناء روابط قابلة للتنفيذ، ورؤى خبراء.",
    filters: ["الكل", "أساسيات بناء الروابط", "للوكالات", "سيو متقدّم"],
    comingSoon: "قريباً",
    posts: [
      { img: blog_1, category: "أساسيات بناء الروابط", title: "تشريح الباك لينك المثالي: قائمة تحقّق 2025", excerpt: "قبل ما تبني رابطك الجاي، اقرأ هاد. منشرح 7 مكوّنات أساسية بتفرّق بين الرابط القوي والرابط عديم القيمة." },
      { img: blog_2, category: "للوكالات", title: "كيف توسّع بناء الروابط بلا ما توسّع فريقك", excerpt: "اكتشف الأنظمة والمنصات يلي أفضل الوكالات مستخدماها لتسليم مئات الروابط عالية الجودة شهرياً، بلا ما تحرق فرقها." },
      { img: blog_3, category: "سيو متقدّم", title: "أبعد من النص التشعبي: غوص عميق بالموثوقية الموضوعية", excerpt: "النص التشعبي هو بس البداية. تعلّم كيف جوجل بيقيّم الصلة السياقية لروابطك وكيف تبني روابط بتأسس ثقة." },
      { img: blog_4, category: "دراسات حالة", title: "كيف بناء الروابط الاستراتيجي بيحرّك الترافيك العضوي", excerpt: "نظرة على كيف استراتيجية بناء روابط مركّزة بتتراكم تأثيرها عبر أشهر، وكيف تقيس التأثير على موقعك." },
      { img: blog_5, category: "أخبار الصناعة", title: "آخر تحديث أساسي من جوجل: شو بيعنيه لبناة الروابط", excerpt: "جوجل عم يصير أذكى باكتشاف السبام. هيك تضمن إنو ملف روابطك يضل آمن وفعّال بـ2025." },
      { img: blog_6, category: "نصائح وحيل", title: "5 قوالب تواصل بترد فعلاً عليها", excerpt: "بطّل تبعت إيميلات عامة. استخدم هالقوالب المجرّبة للتواصل مع ناشرين عالي الموثوقية وتأمين أماكن نشر." },
    ],
    newsletterTitle: "احصل على ميزة تنافسية، توصلك أسبوعياً.",
    newsletterSub: "احصل على أفضل دلائل بناء الروابط مباشرة لبريدك. بلا سبام، بس قيمة.",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    subscribe: "اشترك",
    ctaTitle: "النظرية حلوة. التطبيق أحلى.",
    ctaSub: "شوف كيف الاستراتيجيات يلي منحكي عنها بمدونتنا بتصير بسيطة مع منصة Linkaza.",
    ctaBtn: "تصفّح السوق",
  },
};

const Blog = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/blog"
        translated={["en", "ar"]}
      />

      <HeaderThree />

      <main dir={isAr ? "rtl" : "ltr"}>
        <section className="hero-area pos-rel pt-200 pb-80 fix gray-bg">
          <div className="shape-s-1"><Image src={shape_1} alt="shape" /></div>

          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-8">
                <div className="hero-content mb-30">
                  <h1 className="hero-title mb-30" style={{fontSize: '50px', lineHeight: '1.2', fontWeight: '800', color: '#1c3354'}}>
                    {t.heroTitle1} <span style={{color: 'var(--lz-primary-alt)'}}>{t.heroTitle2}</span>
                  </h1>
                  <p className="mb-40" style={{fontSize: '18px', lineHeight: '1.7', color: '#555'}}>
                    {t.heroDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-area pt-100 pb-100 bg-white">
            <div className="container">

                <div className="row mb-50">
                    <div className="col-12 text-center">
                        <div className="blog-filter">
                            {t.filters.map((f, i) => (
                                <button key={i} className={`btn btn-sm mr-10 ${i === 0 ? 'btn-light active' : 'btn-white'}`} style={i === 0 ? {background: 'var(--lz-primary-alt)', color: '#fff'} : {border: '1px solid #eee'}}>{f}</button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row">
                    {t.posts.map((item, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="blog-item mb-30" style={{
                                border: '1px solid #eee',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                transition: '0.3s',
                                height: '100%'
                            }}>
                                <div className="blog-thumb" style={{position: 'relative'}}>
                                    <Image src={item.img} alt={item.title} style={{width: '100%', height: '250px', objectFit: 'cover'}} />
                                    <span style={{position: 'absolute', top: '12px', [isAr ? 'left' : 'right']: '12px', background: '#1c3354', color: '#fff', fontSize: '11px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase'}}>{t.comingSoon}</span>
                                </div>
                                <div className="blog-content p-4">
                                    <div className="blog-meta mb-10" style={{fontSize: '12px', color: '#777', textTransform: 'uppercase', fontWeight: 'bold'}}>
                                        <span style={{color: 'var(--lz-primary-alt)'}}>{item.category}</span>
                                    </div>
                                    <h3 className="blog-title" style={{fontSize: '20px', marginBottom: '15px', lineHeight: '1.4', color: '#1c3354'}}>
                                        {item.title}
                                    </h3>
                                    <p style={{fontSize: '14px', lineHeight: '1.6', color: '#555', marginBottom: '0'}}>
                                        {item.excerpt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="newsletter-area pb-120 pt-100 gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="newsletter-box text-center" style={{background: '#fff', padding: '70px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                            <h2 className="mb-20" style={{fontSize: '36px'}}>{t.newsletterTitle}</h2>
                            <p className="mb-40" style={{fontSize: '18px'}}>{t.newsletterSub}</p>

                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <form onClick={(e) => e.preventDefault()} className="d-flex">
                                        <input type="email" placeholder={t.emailPlaceholder} style={{
                                            width: '100%',
                                            padding: '20px',
                                            borderRadius: isAr ? '0 50px 50px 0' : '50px 0 0 50px',
                                            border: '1px solid #eee',
                                            outline: 'none'
                                        }} />
                                        <button type="submit" className="btn btn-gradient btn-gradient-02" style={{borderRadius: isAr ? '50px 0 0 50px' : '0 50px 50px 0', padding: '0 40px'}}>
                                            {t.subscribe}
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta-area pt-100 pb-100 bg-white">
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-xl-8">
                        <h2 style={{fontSize: '30px', marginBottom: '20px'}}>{t.ctaTitle}</h2>
                        <p className="mb-30">{t.ctaSub}</p>
                        <a href="https://app.linkaza.com/" target="_blank" rel="noopener noreferrer" className="btn btn-border btn-radius">
                            {t.ctaBtn}
                        </a>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <Footer home_2={true} footer_bg={true} />
    </Wrapper>
  );
};

export default Blog;
