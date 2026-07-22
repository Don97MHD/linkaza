import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Reveal from "@/src/components/common/motion/reveal";

import feature_icon_1 from  "@assets/img/icon/sf1.png";
import feature_icon_2 from  "@assets/img/icon/sf2.png";
import feature_icon_3 from  "@assets/img/icon/sf3.png";

const content = {
    en: {
        heading: "Built for Your Growth",
        sub: "The Best Link Building Platform for Agencies, Consultants, and Businesses.",
        items: [
            { icon: feature_icon_1, title: "For Agencies", sm_des: "Scale your link building fulfillment effortlessly. Our platform is the engine for the world's fastest-growing digital agencies.", link: "/agencies", btn: "Agency Solutions" },
            { icon: feature_icon_2, title: "For Consultants", sm_des: "Save dozens of hours each week. Execute flawless campaigns for your clients so you can focus on strategy and growth.", link: "/consultants", btn: "Consultant Benefits" },
            { icon: feature_icon_3, title: "For Businesses", sm_des: "Take direct control of your SEO. Get the high-quality links you need to dominate your niche, on any budget.", link: "/businesses", btn: "Business Solutions" },
        ],
    },
    ar: {
        heading: "مبنية عشان تكبر",
        sub: "أفضل منصة بناء باك لينك للوكالات، المستشارين، والشركات.",
        items: [
            { icon: feature_icon_1, title: "للوكالات", sm_des: "وسّع تنفيذ بناء الروابط بلا مجهود. منصتنا هي المحرّك لأسرع الوكالات الرقمية نمواً بالعالم.", link: "/agencies", btn: "حلول الوكالات" },
            { icon: feature_icon_2, title: "للمستشارين", sm_des: "وفّر عشرات الساعات كل أسبوع. نفّذ حملات مثالية لعملائك عشان تركّز على الاستراتيجية والنمو.", link: "/consultants", btn: "مزايا المستشارين" },
            { icon: feature_icon_3, title: "للشركات", sm_des: "خذ السيطرة المباشرة على السيو تبعك. احصل على روابط عالية الجودة تسيطر فيها على مجالك، بأي ميزانية.", link: "/businesses", btn: "حلول الشركات" },
        ],
    },
};

const FeatureArea = () => {
    const { locale } = useRouter();
    const t = content[locale] || content.en;
    return (
        <>
           <section className="how-work-area pos-relative pt-150 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <Reveal as="div" className="section-title text-center mb-70">
                                <h2>{t.heading}</h2>
                                <p>{t.sub}</p>
                            </Reveal>
                        </div>
                    </div>
                    <div className="row">
                        {t.items.map((item, i) =>
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <Reveal index={i} className="how-work single-features text-center mb-30" style={{padding: '40px 30px'}}>
                                    <div className="how-work-icon">
                                        <Image src={item.icon} alt="icon" />
                                    </div>
                                    <div className="how-work-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.sm_des}</p>
                                    </div>
                                    <div className="mt-20">
                                        <Link href={item.link} style={{color: 'var(--lz-primary-alt)', fontWeight: '600', textTransform: 'uppercase', fontSize: '14px'}}>
                                            {item.btn} <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </Reveal>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureArea;
