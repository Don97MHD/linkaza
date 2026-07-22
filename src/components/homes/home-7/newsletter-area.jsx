import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Reveal from "@/src/components/common/motion/reveal";
import shape from "@assets/img/shape/shape5.png";

const content = {
    en: {
        heading: <>Join Thousands of Marketers <br /> Building Links the Smart Way.</>,
        sub: "Stop wasting time and money on outdated, manual link building. Sign up for Linkaza today and discover how simple and effective building powerful backlinks can be.",
        cta: "Create Your Free Account Now",
    },
    ar: {
        heading: <>انضم لآلاف المسوّقين <br /> يلي بيبنوا روابط بطريقة ذكية.</>,
        sub: "بلاش تضيّع وقت ومصاري على بناء روابط يدوي وقديم. سجّل بـ Linkaza اليوم واكتشف كيف بناء باك لينك قوي فيه يكون بسيط وفعّال.",
        cta: "افتح حسابك المجاني الآن",
    },
};

const NewsletterArea = () => {
    const { locale } = useRouter();
    const t = content[locale] || content.en;
    return (
        <>
           <section className="newsletter-area pos-relative pb-100">
                <div className="shape-section">
                    <Image className="shape shape-sr " src={shape} alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <Reveal as="div" className="section-title text-center mb-50">
                                <h2>{t.heading}</h2>
                                <p className="mt-20 pl-50 pr-50">
                                    {t.sub}
                                </p>
                            </Reveal>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                            <Reveal delay={0.15} className="newsletter text-center">
                                <a
                                    href="https://app.linkaza.com/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-gradient btn-gradient-02"
                                    style={{
                                        padding: '18px 45px',
                                        fontSize: '18px',
                                        borderRadius: '50px',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {t.cta}
                                </a>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsletterArea;
