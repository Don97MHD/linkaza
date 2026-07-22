import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import { useRouter } from 'next/router';
import Reveal from "@/src/components/common/motion/reveal";
import ScrollParallax from "@/src/components/common/motion/scroll-parallax";

import bg_img from "@assets/img/bg/test.png";
import shape_img from "@assets/img/shape/shape6.png";

const content = {
    en: {
        heading: <>What our <br /> partners are saying</>,
        testimonials: [
            { name: "James Anderson", job_title: "Agency Founder", info: <>"Linkaza has completely transformed how we handle link building for our clients. The ability to filter by traffic and DA instantly saved us hours of manual outreach. Highly recommended for any agency looking to scale."</> },
            { name: "Sarah Mitchell", job_title: "SEO Consultant", info: <>"I used to spend days negotiating with webmasters. With Linkaza, I just select the site, order the content, and it's done. The quality of the links is consistently top-notch and my clients are seeing real ranking improvements."</> },
            { name: "David Ross", job_title: "SaaS Marketing Manager", info: <>"Finally, a link building platform that is transparent about pricing and metrics. No more guessing games. We've built over 50 links through Linkaza and the ROI has been incredible for our organic traffic."</> },
        ],
    },
    ar: {
        heading: <>شو بيقول <br /> شركاؤنا</>,
        testimonials: [
            { name: "James Anderson", job_title: "مؤسس وكالة", info: <>"Linkaza غيّرت بالكامل طريقة تعاملنا مع بناء الروابط لعملائنا. إمكانية الفلترة حسب الترافيك وقوة الدومين وفّرت علينا ساعات من التواصل اليدوي. أنصح فيها بقوة لأي وكالة بدها توسّع."</> },
            { name: "Sarah Mitchell", job_title: "مستشارة سيو", info: <>"كنت أقضي أيام أفاوض مع أصحاب المواقع. مع Linkaza، بس بختار الموقع، بطلب المحتوى، وخلص. جودة الروابط دايماً ممتازة وعملائي عم يشوفوا تحسّن حقيقي بالترتيب."</> },
            { name: "David Ross", job_title: "مدير تسويق SaaS", info: <>"أخيرًا منصة بناء روابط شفافة بالأسعار والمقاييس. بلا تخمين. بنينا أكتر من 50 رابط عبر Linkaza والعائد كان رائع لترافيكنا العضوي."</> },
        ],
    },
};

const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
}

const TestimonialArea = () => {
    const { locale } = useRouter();
    const t = content[locale] || content.en;
    const sliderRef = useRef(null)

    return (
        <>
            <section className="testimonial-area pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <ScrollParallax speed={45}>
                                <Reveal direction="left" className="testimonial-img mb-30" duration={0.8}>
                                    <Image src={bg_img} alt="Testimonial Background" />
                                </Reveal>
                            </ScrollParallax>
                        </div>
                        <div className="col-xl-5 col-lg-9 offset-xl-1 pr-0 pos-relative">
                            <div className="shape-section">
                                <Image className="shape shape-t " src={shape_img} alt="shape" />
                            </div>
                            <Reveal className="section-title title-black pt-80">
                                <h2>{t.heading}</h2>
                            </Reveal>
                            <Slider {...setting} ref={sliderRef}  className="testimonial-text-active dot-style dot-color mb-30">
                                {t.testimonials.map((item, i) =>
                                    <div key={i} className="single-testimonial">
                                        <p>{item.info}</p>
                                        <span><b>{item.name},</b> {item.job_title}</span>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialArea;
