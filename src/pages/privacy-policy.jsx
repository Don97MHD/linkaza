import React from "react";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import HeaderThree from "../layout/headers/header-3";
import Footer from "../layout/footers/footer";

const content = {
  en: {
    seoTitle: "Privacy Policy | Data Protection",
    seoDesc: "Learn how Linkaza collects, uses, and protects your data, including your GDPR and CCPA rights.",
    pageTitle: "Privacy & Cookie Policy",
    lastUpdated: "Last Updated: October 23, 2025",
    intro1: "Linkaza (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website Linkaza.com and use our platform and services.",
    intro2: "Please read this policy carefully. By using our Service, you consent to the data practices described in this statement.",
    s1Title: "1. Information We Collect",
    s1Intro: "We may collect information about you in a variety of ways. The information we may collect via the Service includes:",
    s1: [
      { term: "Personal Data:", text: " Personally identifiable information, such as your name, email address, company name, and payment information." },
      { term: "Derivative Data:", text: " Information our servers automatically collect when you access the Service, such as your IP address, browser type, and operating system." },
      { term: "Financial Data:", text: " Financial information related to your payment method. We store only very limited financial information; otherwise, all financial information is stored by our payment processor." },
    ],
    s2Title: "2. How We Use Your Information",
    s2Intro: "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:",
    s2: ["Create and manage your account.", "Process your transactions and deliver the services you have requested.", "Email you regarding your account or orders.", "Monitor and analyze usage and trends to improve your experience.", "Prevent fraudulent transactions and monitor against theft."],
    s3Title: "3. Disclosure of Your Information",
    s3Intro: "We do not sell, trade, or rent your personally identifiable information to others. We may share information we have collected about you in certain situations:",
    s3: [
      { term: "By Law:", text: " If we believe the release of information is necessary to respond to legal process." },
      { term: "Third-Party Service Providers:", text: " We may share your information with third parties that perform services for us (e.g., payment processing, hosting)." },
    ],
    s4Title: "4. Use of Cookies",
    s4: "We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Service to help customize the Service and improve your experience. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Service.",
    s5Title: "5. Data Security",
    s5: "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.",
    s6Title: "6. Your Data Protection Rights (GDPR / CCPA)",
    s6Intro: "Depending on your location, you may have the following rights:",
    s6: ["The right to access and request copies of your personal data.", "The right to rectification of inaccurate information.", "The right to erasure (The right to be forgotten).", "The right to restrict processing."],
    s7Title: "7. Changes to This Policy",
    s7: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date.",
    s8Title: "8. Contact Us",
    s8Pre: "If you have questions or comments about this Privacy Policy, please contact us at ",
    s8Post: ".",
  },
  ar: {
    seoTitle: "سياسة الخصوصية | حماية البيانات",
    seoDesc: "تعرّف على كيفية جمع Linkaza لبياناتك واستخدامها وحمايتها، بما في ذلك حقوقك بموجب GDPR وCCPA.",
    pageTitle: "سياسة الخصوصية وملفات تعريف الارتباط",
    lastUpdated: "آخر تحديث: 23 أكتوبر 2025",
    intro1: "تلتزم Linkaza (\"نحن\" أو \"لنا\") بحماية خصوصيتك. توضّح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك واستخدامها والإفصاح عنها وحمايتها عند زيارتك لموقعنا Linkaza.com واستخدامك لمنصتنا وخدماتنا.",
    intro2: "يُرجى قراءة هذه السياسة بعناية. باستخدامك لخدمتنا، فإنك توافق على ممارسات البيانات الموضحة في هذا البيان.",
    s1Title: "1. المعلومات التي نجمعها",
    s1Intro: "قد نجمع معلومات عنك بطرق مختلفة. تشمل المعلومات التي قد نجمعها عبر الخدمة:",
    s1: [
      { term: "البيانات الشخصية:", text: " معلومات تعريف شخصية، مثل اسمك وبريدك الإلكتروني واسم شركتك ومعلومات الدفع." },
      { term: "البيانات المشتقة:", text: " معلومات تجمعها خوادمنا تلقائيًا عند وصولك للخدمة، مثل عنوان IP ونوع المتصفح ونظام التشغيل." },
      { term: "البيانات المالية:", text: " معلومات مالية متعلقة بطريقة الدفع. نخزّن فقط معلومات مالية محدودة جدًا؛ وبخلاف ذلك، تُخزَّن كل المعلومات المالية لدى معالج الدفع الخاص بنا." },
    ],
    s2Title: "2. كيف نستخدم معلوماتك",
    s2Intro: "امتلاك معلومات دقيقة عنك يتيح لنا تقديم تجربة سلسة وفعّالة ومخصّصة لك. على وجه التحديد، قد نستخدم المعلومات المجموعة عنك عبر الخدمة من أجل:",
    s2: ["إنشاء حسابك وإدارته.", "معالجة معاملاتك وتقديم الخدمات التي طلبتها.", "مراسلتك بخصوص حسابك أو طلباتك.", "مراقبة وتحليل الاستخدام والاتجاهات لتحسين تجربتك.", "منع المعاملات الاحتيالية ومراقبة السرقة."],
    s3Title: "3. الإفصاح عن معلوماتك",
    s3Intro: "لا نبيع أو نتاجر أو نؤجّر معلوماتك التعريفية الشخصية للغير. قد نشارك المعلومات التي جمعناها عنك في حالات معينة:",
    s3: [
      { term: "بموجب القانون:", text: " إذا اعتقدنا أن الإفصاح عن المعلومات ضروري للاستجابة لإجراء قانوني." },
      { term: "مزوّدو خدمات الطرف الثالث:", text: " قد نشارك معلوماتك مع أطراف ثالثة تؤدي خدمات لنا (مثل معالجة الدفع أو الاستضافة)." },
    ],
    s4Title: "4. استخدام ملفات تعريف الارتباط",
    s4: "قد نستخدم ملفات تعريف الارتباط وإشارات الويب وبكسلات التتبّع وتقنيات تتبّع أخرى بالخدمة للمساعدة بتخصيص الخدمة وتحسين تجربتك. معظم المتصفحات مضبوطة لقبول ملفات تعريف الارتباط افتراضيًا. فيك تزيل أو ترفض ملفات تعريف الارتباط، بس انتبه إنو هيك إجراء ممكن يأثّر على توفّر ووظائف الخدمة.",
    s5Title: "5. أمان البيانات",
    s5: "نستخدم إجراءات أمان إدارية وتقنية ومادية للمساعدة بحماية معلوماتك الشخصية. رغم إننا اتخذنا خطوات معقولة لتأمين المعلومات الشخصية يلي بتقدّمها لنا، يُرجى العلم إنو بالرغم من جهودنا، ما في إجراءات أمان كاملة أو منيعة تمامًا.",
    s6Title: "6. حقوقك بحماية البيانات (GDPR / CCPA)",
    s6Intro: "حسب موقعك، ممكن يكون عندك الحقوق التالية:",
    s6: ["الحق بالوصول لبياناتك الشخصية وطلب نسخ منها.", "الحق بتصحيح المعلومات غير الدقيقة.", "الحق بالمحو (الحق بالنسيان).", "الحق بتقييد المعالجة."],
    s7Title: "7. تغييرات على هذه السياسة",
    s7: "قد نحدّث سياسة الخصوصية هذه من فترة لفترة. رح نعلمك بأي تغييرات عبر نشر سياسة الخصوصية الجديدة بهالصفحة وتحديث تاريخ \"آخر تحديث\".",
    s8Title: "8. تواصل معنا",
    s8Pre: "إذا كان عندك أسئلة أو ملاحظات حول سياسة الخصوصية هذه، يُرجى التواصل معنا على ",
    s8Post: ".",
  },
};

const PrivacyPolicy = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  const t = content[isAr ? "ar" : "en"];

  return (
    <Wrapper>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        path="/privacy-policy"
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
                                <p className="mb-15">{t.s1Intro}</p>
                                <ul style={{listStyle: 'disc', paddingInlineStart: '20px', color: '#555'}}>
                                    {t.s1.map((item, i) => <li key={i} className="mb-10"><strong>{item.term}</strong>{item.text}</li>)}
                                </ul>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s2Title}</h3>
                                <p className="mb-15">{t.s2Intro}</p>
                                <ul style={{listStyle: 'disc', paddingInlineStart: '20px', color: '#555'}}>
                                    {t.s2.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s3Title}</h3>
                                <p className="mb-15">{t.s3Intro}</p>
                                <ul style={{listStyle: 'disc', paddingInlineStart: '20px', color: '#555'}}>
                                    {t.s3.map((item, i) => <li key={i}><strong>{item.term}</strong>{item.text}</li>)}
                                </ul>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s4Title}</h3>
                                <p>{t.s4}</p>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s5Title}</h3>
                                <p>{t.s5}</p>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s6Title}</h3>
                                <p className="mb-15">{t.s6Intro}</p>
                                <ul style={{listStyle: 'disc', paddingInlineStart: '20px', color: '#555'}}>
                                    {t.s6.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s7Title}</h3>
                                <p>{t.s7}</p>
                            </div>

                            <div className="terms-item mb-40">
                                <h3 style={{fontSize: '24px', marginBottom: '20px', color: '#1c3354'}}>{t.s8Title}</h3>
                                <p>{t.s8Pre}<a href="mailto:legal@linkaza.com" style={{color: 'var(--lz-primary-alt)'}}>legal@linkaza.com</a>{t.s8Post}</p>
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

export default PrivacyPolicy;
