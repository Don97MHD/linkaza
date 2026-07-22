import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

import hero_img from "@assets/img/slider/slider-image.png";

const content = {
    en: {
        title_1: "The All-in-One",
        title_2: "Link Building Platform",
        title_3: "Your Business Needs",
        info: "Finally, a single, powerful platform to manage your entire link building strategy. From finding high-authority placements to creating expert content, Linkaza simplifies everything.",
        badge: "Trusted by 80,000+ publishers",
        ctaPrimary: "Get Started for Free",
        ctaGhost: "See how it works",
        stats: [
            { end: 80000, suffix: '+', label: 'Verified publishers' },
            { end: 24, suffix: '/7', label: 'Real support' },
            { end: 0, suffix: 'No fee', label: 'Subscription' },
        ],
        floatTop: { title: 'Domain Rating 78', sub: 'High-authority match' },
        floatBottom: { title: 'Link placed', sub: '2 minutes ago' },
    },
    ar: {
        title_1: "المنصة الشاملة",
        title_2: "لبناء الباك لينك",
        title_3: "يلي شركتك محتاجاها",
        info: "أخيرًا، منصة واحدة قوية تدير فيها كل استراتيجية بناء الروابط تبعتك. من إيجاد مواقع عالية الموثوقية لحتى كتابة محتوى احترافي، Linkaza بتبسّط كل شي.",
        badge: "أكتر من 80,000 ناشر بيثقوا فينا",
        ctaPrimary: "ابدأ مجانًا",
        ctaGhost: "شوف آلية العمل",
        stats: [
            { end: 80000, suffix: '+', label: 'ناشر موثّق' },
            { end: 24, suffix: '/7', label: 'دعم حقيقي' },
            { end: 0, suffix: 'بلا رسوم', label: 'اشتراك' },
        ],
        floatTop: { title: 'موثوقية دومين 78', sub: 'مطابقة عالية الموثوقية' },
        floatBottom: { title: 'الرابط اتنشر', sub: 'قبل دقيقتين' },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
    }),
};

const StatNumber = ({ end, duration = 1800 }) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!end) return;
        let frame;
        let start = null;
        const tick = (ts) => {
            if (start === null) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [end, duration]);
    if (!end) return null;
    return <>{value.toLocaleString()}</>;
};

const HeroArea = () => {
    const { locale } = useRouter();
    const t = content[locale] || content.en;
    const sectionRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const yBlobs = useTransform(scrollYProgress, [0, 1], [0, 160]);
    const yVisual = useTransform(scrollYProgress, [0, 1], [0, 110]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section className="lz-hero fix" ref={sectionRef} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <motion.div className="lz-hero__blobs" style={reduceMotion ? undefined : { y: yBlobs }}>
                <span className="lz-hero__blob lz-hero__blob--a" aria-hidden="true" />
                <span className="lz-hero__blob lz-hero__blob--b" aria-hidden="true" />
            </motion.div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                        <motion.div className="lz-hero__content" style={reduceMotion ? undefined : { opacity: contentOpacity }}>
                            <motion.span
                                className="lz-hero__badge"
                                variants={fadeUp} initial="hidden" animate="show" custom={0}
                            >
                                <span className="lz-hero__badge-dot" />
                                {t.badge}
                            </motion.span>

                            <motion.h1
                                className="lz-hero__title"
                                variants={fadeUp} initial="hidden" animate="show" custom={1}
                            >
                                {t.title_1} <span>{t.title_2}</span> {t.title_3}
                            </motion.h1>

                            <motion.p
                                className="lz-hero__info"
                                variants={fadeUp} initial="hidden" animate="show" custom={2}
                            >
                                {t.info}
                            </motion.p>

                            <motion.div
                                className="lz-hero__ctas"
                                variants={fadeUp} initial="hidden" animate="show" custom={3}
                            >
                                <a href="https://app.linkaza.com/register" target="_blank" rel="noopener noreferrer" className="x-btn">
                                    {t.ctaPrimary}
                                </a>
                                <Link href="/how-it-works" className="lz-hero__ghost-btn">
                                    {t.ctaGhost}
                                </Link>
                            </motion.div>

                            <motion.div
                                className="lz-hero__stats"
                                variants={fadeUp} initial="hidden" animate="show" custom={4}
                            >
                                {t.stats.map((s, i) => (
                                    <div key={i}>
                                        <div className="lz-hero__stat-num">
                                            <StatNumber end={s.end} />
                                            {s.suffix}
                                        </div>
                                        <div className="lz-hero__stat-label">{s.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="col-xl-6 col-lg-6 offset-xl-1">
                        <motion.div style={reduceMotion ? undefined : { y: yVisual }}>
                            <motion.div
                                className="lz-hero__visual"
                                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="lz-hero__card">
                                    <Image src={hero_img} alt="Linkaza Dashboard" priority />
                                </div>

                                <motion.div
                                    className="lz-hero__float lz-hero__float--top"
                                    initial={{ opacity: 0, y: -14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <span className="lz-hero__float-icon">DR</span>
                                    <div>
                                        <div className="lz-hero__float-title">{t.floatTop.title}</div>
                                        <div className="lz-hero__float-sub">{t.floatTop.sub}</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="lz-hero__float lz-hero__float--bottom"
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <span className="lz-hero__float-icon">✓</span>
                                    <div>
                                        <div className="lz-hero__float-title">{t.floatBottom.title}</div>
                                        <div className="lz-hero__float-sub">{t.floatBottom.sub}</div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeroArea;
