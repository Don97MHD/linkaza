import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import Reveal from "@/src/components/common/motion/reveal";
import price_icon from "@assets/img/icon/price-icon.png";

const content = {
    en: {
        heading: "Transparent Pricing",
        sub: "No subscriptions. No hidden fees. Pay only for the links you build.",
        startsFrom: "*Starts from",
        cta: "Explore Marketplace",
        plans: [
            { active: "", category: "Standard Links", price: 70, features: ["DA 20 - 35", "Organic Traffic: 1k+", "Permanent Link", "Dofollow", "Google Indexed", "Content Included"] },
            { active: "active", category: "Premium Links", price: 150, features: ["DA 36 - 50", "Organic Traffic: 5k+", "High Editorial Standards", "Dofollow", "Niche Relevant", "Content Included"] },
            { active: "", category: "Authority Links", price: 300, features: ["DA 50+", "Organic Traffic: 20k+", "Premium Publications", "Dofollow", "High Trust Flow", "Content Included"] },
            { active: "", category: "Content Service", price: 40, features: ["1000 Words Article", "SEO Optimized", "Native Writers", "Copyscape Passed", "Unlimited Revisions", "Fast Turnaround"] },
        ],
    },
    ar: {
        heading: "أسعار شفافة",
        sub: "بلا اشتراكات. بلا رسوم مخفية. ادفع بس مقابل الروابط يلي بتبنيها.",
        startsFrom: "*يبدأ من",
        cta: "تصفّح السوق",
        plans: [
            { active: "", category: "روابط عادية", price: 70, features: ["قوة دومين 20 - 35", "ترافيك عضوي: 1000+", "رابط دائم", "Dofollow", "مفهرس بجوجل", "المحتوى مشمول"] },
            { active: "active", category: "روابط مميزة", price: 150, features: ["قوة دومين 36 - 50", "ترافيك عضوي: 5000+", "معايير تحريرية عالية", "Dofollow", "مطابق للمجال", "المحتوى مشمول"] },
            { active: "", category: "روابط موثوقة", price: 300, features: ["قوة دومين 50+", "ترافيك عضوي: 20,000+", "منشورات مميزة", "Dofollow", "ثقة عالية", "المحتوى مشمول"] },
            { active: "", category: "خدمة المحتوى", price: 40, features: ["مقال 1000 كلمة", "محسّن للسيو", "كتّاب أصليين", "خالي من الانتحال", "تعديلات غير محدودة", "تسليم سريع"] },
        ],
    },
};

const PriceAreaHomeSeven = ({style_price}) => {
    const { locale } = useRouter();
    const t = content[locale] || content.en;
    return (
        <>
            <section className={`price-area pos-relative ${style_price ? "" : "pt-150"} pb-120`}>
                <div className="shape-section">
                    <img className="shape shape-p " src="assets/img/shape/shape-f-1.png" alt="shape" />
                </div>
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
                        {t.plans.map((item, i) =>
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                <Reveal index={i} className={`price-box ${item.active} text-center mb-30`}>
                                    <div className="price-header mb-35">
                                        <Image src={price_icon} alt="icon" />
                                        <h3>{item.category}</h3>
                                        <div className="price-text">
                                            <h4>${item.price}<span>/link*</span></h4>
                                            <p style={{fontSize:'12px', marginTop:'5px', color:'#777'}}>{t.startsFrom}</p>
                                        </div>
                                    </div>
                                    <div className="price-plan-list">
                                        <ul>
                                            {item.features.map((feature, index) =>
                                                <li key={index}>{feature}</li>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="price-link">
                                        <a href="https://app.linkaza.com/register" target="_blank" rel="noopener noreferrer">
                                            {t.cta}
                                        </a>
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

export default PriceAreaHomeSeven;
