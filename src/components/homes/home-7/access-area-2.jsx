import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Reveal from "@/src/components/common/motion/reveal";
import ScrollParallax from "@/src/components/common/motion/scroll-parallax";

import access_shape from "@assets/img/shape/shape-f-1.png";
import access_icon from "@assets/img/icon/access-icon.png";
import access_img from "@assets/img/bg/right-img.png";

const content = {
    en: {
        title: "The Platform Powering Every Solution",
        sm_des: <>
            No matter which path you choose, you get full access to the technology and support that make Linkaza the industry's most trusted platform.
            <br /><br />
            From our intelligent marketplace to our expert content services, everything is designed to help you rank higher, faster.
        </>,
        points: ["Intelligent Marketplace", "Expert Content Services", "Transparent Pricing"],
        cta: "View All Solutions",
    },
    ar: {
        title: "المنصة يلي بتشغّل كل حل",
        sm_des: <>
            مهما كان المسار يلي بتختارو، بتاخد وصول كامل للتقنية والدعم يلي بيخلّوا Linkaza أوثق منصة بالمجال.
            <br /><br />
            من سوقنا الذكي لحتى خدمات المحتوى الاحترافية، كل شي مصمّم عشان تترتّب أعلى، وبسرعة أكبر.
        </>,
        points: ["سوق ذكي", "خدمات محتوى احترافية", "أسعار شفافة"],
        cta: "شوف كل الحلول",
    },
};

const AccessAreaTwo = () => {
    const { locale } = useRouter();
    const t = content[locale] || content.en;
    return (
        <>
           <section className="access-area pos-relative fix">
                <div className="shape-section">
                    <Image className="shape shape-sf " src={access_shape} alt="shape" />
                </div>
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-xl-5 col-lg-5 pr-0">
                            <div className="acces-text pt-35 mb-30">
                                <Image src={access_icon} alt="icon" />
                                <Reveal as="h3">{t.title}</Reveal>
                                <Reveal as="p" delay={0.08}>{t.sm_des}</Reveal>

                                <Reveal as="ul" delay={0.16} style={{listStyle: 'none', padding: 0, marginTop: '20px', marginBottom: '30px'}}>
                                    {t.points.map((point, i) => (
                                        <li key={i} style={{marginBottom: '10px'}}><i className="fas fa-check" style={{color: 'var(--lz-primary-alt)', marginRight: '10px'}}></i> {point}</li>
                                    ))}
                                </Reveal>

                                <Reveal delay={0.24}>
                                    <Link href="/solutions" className="x-btn">
                                        {t.cta}
                                    </Link>
                                </Reveal>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-7 offset-xl-2">
                            <ScrollParallax speed={-50}>
                                <Reveal direction="right" className="access-img access-img-2 mb-30" duration={0.8}>
                                    <Image src={access_img} alt="Linkaza Platform" />
                                </Reveal>
                            </ScrollParallax>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AccessAreaTwo;
