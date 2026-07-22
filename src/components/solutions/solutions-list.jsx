import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import solutions_data from '@/src/data/solutions-data';

import service_shape_1 from "@assets/img/shape/shape-s-1.png";
import service_shape_2 from "@assets/img/shape/shape-s-2.png";

const content = {
    en: {
        heading: <>Find the Solution That's <br/> Right for You</>,
        sub: "Below are our core link building solutions. Each one is built to solve your specific challenges and streamline your workflow.",
    },
    ar: {
        heading: <>لاقي الحل يلي <br/> يناسبك</>,
        sub: "تحت في حلول بناء الروابط الأساسية تبعنا. كل وحدة مبنية عشان تحل تحدياتك المحددة وتبسّط سير عملك.",
    },
};

const SolutionsList = () => {
    const { locale } = useRouter();
    const isAr = locale === 'ar';
    const t = content[isAr ? 'ar' : 'en'];
    const items = solutions_data[isAr ? 'ar' : 'en'];
    return (
        <>
            <section className="how-work-area pos-relative pt-150 pb-120">
                <div className="shape-section">
                    <Image className="shape shape-s-1" src={service_shape_1} alt="shape" />
                    <Image className="shape shape-s-2" src={service_shape_2} alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="section-title-4 text-center mb-70">
                                <h2>{t.heading}</h2>
                                <p>{t.sub}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {items.map((item, i) =>
                            <div key={i} className="col-xl-6 col-lg-6">
                                <div className="how-work how-work-rd mb-30 text-center" style={{padding: '40px'}}>
                                    <div className="how-work-icon">
                                        <Image src={item.icon} alt="icon" />
                                    </div>
                                    <div className="how-work-text">
                                        <h3>{item.title}</h3>
                                        <p className="mb-20">{item.sm_des}</p>
                                    </div>
                                    <div className="how-work-link">
                                        <Link href={item.link} className="btn btn-border btn-radius">
                                            {item.btn_text}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SolutionsList;
