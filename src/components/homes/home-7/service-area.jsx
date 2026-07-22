import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';
import Reveal from "@/src/components/common/motion/reveal";

import service_shape_1 from "@assets/img/shape/shape-s-1.png";
import service_shape_2 from "@assets/img/shape/shape-s-2.png";
import service_icon_1 from "@assets/img/icon/icon.png";
import service_icon_2 from "@assets/img/icon/icon2.png";
import service_icon_3 from "@assets/img/icon/icon3.png";

const content = {
    en: {
        heading: <>Everything You Need, <br/> All in One Place</>,
        sub: "Our all-in-one link building solution integrates every tool you need to build a powerful backlink profile.",
        items: [
            { icon: service_icon_1, title: "Intelligent Marketplace", sm_des: "Instantly access over 80,000+ vetted publishers. Our advanced filters let you find the perfect placement by niche, traffic, and DA.", link: "/marketplace", btn_text: "Explore Marketplace" },
            { icon: service_icon_2, title: "Expert Content Creation", sm_des: "Let our professional team handle content creation. We write high-quality, SEO-optimized articles that seamlessly integrate your links.", link: "/content-service", btn_text: "View Content Services" },
            { icon: service_icon_3, title: "Powerful Analytics", sm_des: "Track your campaign performance and ROI from a single dashboard. Monitor live link statuses and key SEO metrics.", link: "/analytics", btn_text: "Discover Analytics" },
        ],
    },
    ar: {
        heading: <>كل شي محتاجو، <br/> بمكان واحد</>,
        sub: "حل بناء الروابط الشامل تبعنا بيجمع كل أداة محتاجها لبناء ملف باك لينك قوي.",
        items: [
            { icon: service_icon_1, title: "سوق ذكي", sm_des: "وصول فوري لأكتر من 80,000 ناشر مدقّق. الفلاتر المتقدّمة بتخلّيك تلاقي أفضل مكان حسب المجال، الترافيك، وقوة الدومين.", link: "/marketplace", btn_text: "تصفّح السوق" },
            { icon: service_icon_2, title: "كتابة محتوى احترافية", sm_des: "خلّي فريقنا المحترف يكتبلك المحتوى. منكتب مقالات عالية الجودة ومحسّنة للسيو بتدمج روابطك بطريقة طبيعية.", link: "/content-service", btn_text: "شوف خدمات المحتوى" },
            { icon: service_icon_3, title: "تحليلات قوية", sm_des: "تابع أداء حملتك والعائد من لوحة تحكم وحدة. راقب حالة الروابط الحية ومؤشرات السيو الأساسية.", link: "/analytics", btn_text: "اكتشف التحليلات" },
        ],
    },
};

const ServiceArea = ({style_fancy}) => {
    const { locale } = useRouter();
    const t = content[locale] || content.en;
    return (
        <>
            <section className={`how-work-area pos-relative ${style_fancy ? "" : "pt-150"} pb-120`}>
                <div className="shape-section">
                    <Image className="shape shape-s-1" src={service_shape_1} alt="shape" />
                    <Image className="shape shape-s-2" src={service_shape_2} alt="shape" />
                </div>
                <div className="container">
                    {style_fancy?  null :
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <Reveal as="div" className="section-title text-center mb-70">
                                    <h2>{t.heading}</h2>
                                    <p>{t.sub}</p>
                                </Reveal>
                            </div>
                        </div>
                    }
                    <div className="row">
                    {t.items.map((item, i) =>
                        <div key={i} className="col-xl-4 col-lg-4">
                            <Reveal index={i} className="how-work mb-30 lz-hover-card">
                                <div className="how-work-icon">
                                    <Image src={item.icon} alt="icon" />
                                </div>
                                <div className="how-work-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.sm_des}</p>
                                </div>
                                <div className="how-work-link">
                                    <Link href={item.link}>{item.btn_text}</Link>
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

export default ServiceArea;
