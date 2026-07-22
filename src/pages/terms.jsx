import React from "react";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import HeaderThree from "../layout/headers/header-3";
import Footer from "../layout/footers/footer";

const content = {
  en: {
    seoTitle: "Terms and Conditions",
    seoDesc: "Read the terms governing your use of the Linkaza platform, marketplace, and services.",
    pageTitle: "Terms and Conditions",
    lastUpdated: "Last Updated: October 23, 2025",
    intro1: "Welcome to Linkaza.com. These Terms and Conditions (\"Terms\") govern your access to and use of the Linkaza website, platform, and services (collectively, the \"Service\"), owned and operated by Linkaza (\"we,\" \"us,\" or \"our\").",
    intro2: "Please read these Terms carefully before using our Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.",
    s1Title: "1. Definitions",
    s1: [
      { term: "\"Service\"", text: " refers to the Linkaza platform, website, and all related services." },
      { term: "\"User,\" \"You,\" or \"Your\"", text: " refers to any individual or entity who creates an account and uses the Service. This includes \"Buyers\" and \"Publishers\"." },
      { term: "\"Placement\"", text: " refers to the publication of content containing a backlink on a Publisher's website." },
      { term: "\"Content\"", text: " refers to any articles, text, images, or other materials provided or created in connection with a Placement." },
    ],
    s2Title: "2. Account Registration and Use",
    s2: [
      "To use our Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process.",
      "You are responsible for safeguarding your account password and for any activities or actions under your account. You agree to notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
      "You must be at least 18 years of age to use the Service.",
    ],
    s3Title: "3. The Service",
    s3: [
      "Linkaza provides a marketplace that connects Buyers seeking backlinks with Publishers willing to sell Placements on their websites.",
      "Linkaza may also provide an optional Content writing service to facilitate Placements.",
      "We reserve the right to refuse service to anyone for any reason at any time.",
    ],
    s4Title: "4. Payments, Credits, and Refunds",
    s4p1: "The Service operates on a pay-as-you-go basis. Buyers must fund their account wallet or pay per order to purchase Placements. All prices for Placements are set by the Publishers and are displayed clearly in the marketplace.",
    s4Strong: "Refunds:",
    s4p2: " Due to the nature of the Service, refunds are handled on a case-by-case basis. A refund may be issued if a Publisher fails to complete a Placement as ordered, if the Placement does not meet the agreed-upon requirements, or if the link is removed within a specified guarantee period (e.g., 12 months). No refunds will be issued for links that have been delivered as ordered and remain live.",
    s5Title: "5. Buyer and Publisher Obligations",
    s5BuyerTitle: "Buyers Agree:",
    s5Buyer: [
      "To provide accurate information for their orders, including target URLs and anchor text.",
      "That the final decision to publish Content rests with the Publisher.",
      "That Linkaza does not guarantee any specific SEO results, rankings, or increase in traffic.",
    ],
    s5PubTitle: "Publishers Agree:",
    s5Pub: [
      "To accurately represent their website's metrics and guidelines.",
      "To publish approved Content in a timely manner.",
      "To maintain the placed link for a minimum guaranteed period, as specified in their listing.",
    ],
    s6Title: "6. Governing Law",
    s6: "These Terms shall be governed and construed in accordance with the laws of United Kingdom, without regard to its conflict of law provisions.",
    s7Title: "7. Contact Us",
    s7Pre: "If you have any questions about these Terms, please contact us at ",
    s7Post: ".",
  },
  ar: {
    seoTitle: "الشروط والأحكام",
    seoDesc: "اقرأ الشروط التي تحكم استخدامك لمنصة Linkaza والسوق والخدمات المقدَّمة.",
    pageTitle: "الشروط والأحكام",
    lastUpdated: "آخر تحديث: 23 أكتوبر 2025",
    intro1: "مرحبًا بك في Linkaza.com. تحكم هذه الشروط والأحكام (\"الشروط\") وصولك إلى واستخدامك لموقع وموقع ومنصة وخدمات Linkaza (يُشار إليها مجتمعة بـ\"الخدمة\")، المملوكة والمُشغَّلة من قِبل Linkaza (\"نحن\" أو \"لنا\").",
    intro2: "يُرجى قراءة هذه الشروط بعناية قبل استخدام خدمتنا. باستخدامك أو وصولك إلى الخدمة، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يجوز لك الوصول إلى الخدمة.",
    s1Title: "1. التعريفات",
    s1: [
      { term: "\"الخدمة\"", text: " تشير إلى منصة Linkaza وموقعها الإلكتروني وكل الخدمات ذات الصلة." },
      { term: "\"المستخدم\" أو \"أنت\"", text: " يشير إلى أي فرد أو جهة تنشئ حسابًا وتستخدم الخدمة. يشمل ذلك \"المشترين\" و\"الناشرين\"." },
      { term: "\"مكان النشر\"", text: " يشير إلى نشر محتوى يحتوي على باك لينك على موقع أحد الناشرين." },
      { term: "\"المحتوى\"", text: " يشير إلى أي مقالات أو نصوص أو صور أو مواد أخرى مقدَّمة أو مُنشأة فيما يتعلق بمكان النشر." },
    ],
    s2Title: "2. تسجيل الحساب واستخدامه",
    s2: [
      "لاستخدام خدمتنا، يجب عليك التسجيل للحصول على حساب. أنت توافق على تقديم معلومات دقيقة وحديثة وكاملة أثناء عملية التسجيل.",
      "أنت مسؤول عن حماية كلمة مرور حسابك وعن أي أنشطة أو إجراءات تتم في إطار حسابك. توافق على إخطارنا فورًا فور علمك بأي خرق أمني أو استخدام غير مصرَّح به لحسابك.",
      "يجب أن يكون عمرك 18 عامًا على الأقل لاستخدام الخدمة.",
    ],
    s3Title: "3. الخدمة",
    s3: [
      "تقدّم Linkaza سوقًا يربط المشترين الباحثين عن باك لينك بالناشرين الراغبين ببيع أماكن نشر على مواقعهم.",
      "قد تقدّم Linkaza أيضًا خدمة كتابة محتوى اختيارية لتسهيل أماكن النشر.",
      "نحتفظ بحق رفض تقديم الخدمة لأي شخص لأي سبب وفي أي وقت.",
    ],
    s4Title: "4. المدفوعات والأرصدة والاسترجاعات",
    s4p1: "تعمل الخدمة على أساس الدفع بحسب الاستخدام. يجب على المشترين تعبئة محفظة حسابهم أو الدفع لكل طلب لشراء أماكن النشر. جميع أسعار أماكن النشر يحددها الناشرون وتُعرض بوضوح في السوق.",
    s4Strong: "الاسترجاعات:",
    s4p2: " نظرًا لطبيعة الخدمة، يتم التعامل مع الاسترجاعات على أساس كل حالة على حدة. قد يصدر استرجاع إذا فشل الناشر بإتمام مكان النشر كما طُلب، أو إذا لم يستوفِ مكان النشر المتطلبات المتفق عليها، أو إذا أُزيل الرابط خلال فترة الضمان المحددة (مثلاً 12 شهرًا). لن تصدر أي استرجاعات للروابط التي تم تسليمها كما طُلبت وما تزال منشورة.",
    s5Title: "5. التزامات المشتري والناشر",
    s5BuyerTitle: "يوافق المشترون على:",
    s5Buyer: [
      "تقديم معلومات دقيقة لطلباتهم، بما في ذلك الروابط المستهدفة والنص التشعبي.",
      "أن القرار النهائي بنشر المحتوى يعود للناشر.",
      "أن Linkaza لا تضمن أي نتائج سيو محددة، أو ترتيب، أو زيادة بالترافيك.",
    ],
    s5PubTitle: "يوافق الناشرون على:",
    s5Pub: [
      "تمثيل مؤشرات موقعهم وإرشاداته بدقة.",
      "نشر المحتوى المعتمد بشكل سريع.",
      "الحفاظ على الرابط المنشور لفترة الضمان الدنيا المحددة في إعلانهم.",
    ],
    s6Title: "6. القانون الحاكم",
    s6: "تخضع هذه الشروط وتُفسَّر وفقًا لقوانين المملكة المتحدة، بغض النظر عن أحكام تنازع القوانين فيها.",
    s7Title: "7. تواصل معنا",
    s7Pre: "إذا كان لديك أي أسئلة حول هذه الشروط، يُرجى التواصل معنا على ",
    s7Post: ".",
  },
};

const Terms = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/terms"
        translated={["en", "ar"]}
      />
      <HeaderThree />

      <main dir={isAr ? "rtl" : "ltr"}>
        <section className="page-title-area pt-150 pb-50" style={{background: '#f9f9f9'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="page-title-content">
                            <h1 style={{fontSize: '40px', fontWeight: '800', color: '#1c3354', marginBottom: '10px'}}>{t.pageTitle}</h1>
                            <p style={{fontSize: '16px', color: '#666'}}>{t.lastUpdated}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="terms-area pt-80 pb-100 bg-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-10">
                        <div className="terms-content-wrapper">

                            <div className="terms-item mb-40">
                                <p className="mb-20">{t.intro1}</p>
                                <p>{t.intro2}</p>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s1Title}</h3>
                                <ul style={{listStyle: 'disc', paddingInlineStart: '20px', color: '#555'}}>
                                    {t.s1.map((item, i) => (
                                        <li key={i} className="mb-10"><strong>{item.term}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s2Title}</h3>
                                {t.s2.map((p, i) => (
                                    <p key={i} className={i < t.s2.length - 1 ? "mb-15" : ""}>{p}</p>
                                ))}
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s3Title}</h3>
                                {t.s3.map((p, i) => (
                                    <p key={i} className={i < t.s3.length - 1 ? "mb-15" : ""}>{p}</p>
                                ))}
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s4Title}</h3>
                                <p className="mb-15">{t.s4p1}</p>
                                <p><strong>{t.s4Strong}</strong>{t.s4p2}</p>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s5Title}</h3>
                                <h5 style={{fontSize: '18px', marginBottom: '10px'}}>{t.s5BuyerTitle}</h5>
                                <ul style={{listStyle: 'disc', paddingInlineStart: '20px', marginBottom: '20px', color: '#555'}}>
                                    {t.s5Buyer.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                                <h5 style={{fontSize: '18px', marginBottom: '10px'}}>{t.s5PubTitle}</h5>
                                <ul style={{listStyle: 'disc', paddingInlineStart: '20px', color: '#555'}}>
                                    {t.s5Pub.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s6Title}</h3>
                                <p>{t.s6}</p>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s7Title}</h3>
                                <p>{t.s7Pre}<a href="mailto:legal@linkaza.com" style={{color: 'var(--lz-primary-alt)'}}>legal@linkaza.com</a>{t.s7Post}</p>
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

export default Terms;
