import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Reveal from "@/src/components/common/motion/reveal";
import ScrollParallax from "@/src/components/common/motion/scroll-parallax";

import access_shape_1 from "@assets/img/shape/shape6.png";
import access_img from "@assets/img/bg/social-bg.png";
import access_icon from "@assets/img/icon/access-icon.png";

const content = {
  en: {
    title: <> A Smarter Way to Build <br /> High-Quality Backlinks </>,
    sm_des: <>
      Effective link building is the cornerstone of SEO, but the process is broken.
      You're tired of endless outreach emails, vetting questionable sites, and managing complex spreadsheets.
      <br /><br />
      Linkaza was built by SEOs, for SEOs, to fix this. We provide all the tools, services,
      and support you need in one unified, intelligent dashboard.
    </>,
    features_list: [
      { title: "No Subscriptions, Ever", text: "Pay only for the backlinks you order." },
      { title: "24/7 Expert Support", text: "Our dedicated team is always online to help." },
      { title: "Guaranteed Quality", text: "Every publisher is meticulously vetted." },
    ],
    cta: "Get Started Now",
  },
  ar: {
    title: <> طريقة أذكى لبناء <br /> باك لينك عالي الجودة </>,
    sm_des: <>
      بناء الروابط هو حجر الأساس بالسيو، بس الطريقة التقليدية مكسورة.
      تعبت من إيميلات التواصل يلي ما بتخلص، فحص مواقع مشكوك فيها، وإدارة جداول بيانات معقّدة.
      <br /><br />
      Linkaza اتبنت من خبراء سيو، لخبراء سيو، لحل هالمشكلة. بنقدّملك كل الأدوات، الخدمات،
      والدعم يلي محتاجو بلوحة تحكم واحدة ذكية.
    </>,
    features_list: [
      { title: "بلا اشتراكات، أبداً", text: "ادفع بس مقابل الباك لينك يلي بتطلبه." },
      { title: "دعم خبراء 24/7", text: "فريقنا المخصّص متواجد دايماً للمساعدة." },
      { title: "جودة مضمونة", text: "كل ناشر بينفحص بدقّة." },
    ],
    cta: "ابدأ الآن",
  },
};

const AccessArea = () => {
  const { locale } = useRouter();
  const t = content[locale] || content.en;
  return (
    <>
      <section className="access-area pos-relative">
        <div className="shape-section">
          <Image
            className="shape shape-a "
            src={access_shape_1}
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-xl-7 col-lg-12">
              <ScrollParallax speed={50}>
                <Reveal direction="left" className="access-img" duration={0.8}>
                  <Image src={access_img} alt="Comparision" />
                </Reveal>
              </ScrollParallax>
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="acces-text pt-35">
                <Image src={access_icon} alt="icon" />

                <Reveal as="h3">{t.title}</Reveal>
                <Reveal as="p" delay={0.08}>{t.sm_des}</Reveal>

                <div className="access-features mt-30 mb-30">
                    {t.features_list.map((item, index) => (
                        <Reveal key={index} index={index} delay={0.15} className="feature-item mb-15 d-flex align-items-start">
                            <div className="icon mr-15">
                                <i className="fas fa-check-circle" style={{color: 'var(--lz-primary-alt)', marginTop: '5px'}}></i>
                            </div>
                            <div className="text">
                                <h5 style={{fontSize: '16px', marginBottom: '5px', fontWeight: 'bold'}}>{item.title}</h5>
                                <p style={{fontSize: '14px', marginBottom: '0'}}>{item.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.5}>
                  <a
                    href="https://app.linkaza.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="x-btn"
                  >
                    {t.cta}
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessArea;
