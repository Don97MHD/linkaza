import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import footer_logo from "@assets/img/logo/linkaza_white.svg"; // تأكد من استبدال ملف الصورة في المجلد
import SocialLinks, { CopyRight } from '@/src/components/common/social-links';

// footer data - تم تحديث البيانات لتناسب Linkaza
const footer_data = [
    {
        id: 1,
        title: "Solutions",
        title_ar: "الحلول",
        links: [
            {link_title: "For Agencies", link_title_ar: "للوكالات", link: "/agencies"},
            {link_title: "For Consultants", link_title_ar: "للمستشارين", link: "/consultants"},
            {link_title: "For Businesses", link_title_ar: "للشركات", link: "/businesses"},
            {link_title: "For Publishers", link_title_ar: "للناشرين", link: "/publishers"},
        ]
    },
    {
        id: 2,
        title: "Services",
        title_ar: "الخدمات",
        links: [
            {link_title: "Marketplace", link_title_ar: "السوق", link: "/marketplace"},
            {link_title: "How It Works", link_title_ar: "آلية العمل", link: "/how-it-works"},
            {link_title: "Content Writing", link_title_ar: "كتابة المحتوى", link: "/content-service"},
            {link_title: "Strategy Builder", link_title_ar: "بناء الاستراتيجية", link: "/strategy-builder"},
            {link_title: "Analytics", link_title_ar: "التحليلات", link: "/analytics"},
        ]
    },
    {
        id: 3,
        title: "Company",
        title_ar: "الشركة",
        links: [
            {link_title: "About Us", link_title_ar: "من نحن", link: "/about"},
            {link_title: "Pricing", link_title_ar: "الأسعار", link: "/pricing"},
            {link_title: "Affiliate Program", link_title_ar: "برنامج الإحالة", link: "/affiliate"},
            {link_title: "Contact Us", link_title_ar: "تواصل معنا", link: "/contact"},
            {link_title: "Blog", link_title_ar: "المدونة", link: "/blog"},
        ]
    },
    // تم حذف العمود الرابع الزائد للحفاظ على التركيز
]

const Footer = ({home_2, style_4, footer_bg, no_style, style_footer_el}) => {
    const { locale } = useRouter();
    const isAr = locale === 'ar';

    return (
        <>
            <footer className={`${no_style ? "" : home_2 ? "footer-bg" : style_4 ? "footer-4-bg" : "gray-bg"} ${style_footer_el && "mt-50"}`}
                    style={{backgroundImage: `url(${footer_bg ? "/assets/img/bg/footer-bg.png" : ""})`}}
                    dir={isAr ? "rtl" : "ltr"}
                    >
                <div className={`footer-area ${style_4 ? "pt-100" : footer_bg ? "pt-180" : "pt-120"} pb-60`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-8">
                                <div className="footer-widget mb-40">
                                    <div className="footer-text">
                                        <Link href="/">
                                            <Image src={footer_logo} alt="Linkaza" />
                                        </Link>
                                        <p>{isAr
                                            ? 'Linkaza منصة ذكية لبناء الباك لينك، بتجمع سوق ناشرين ضخم، محتوى احترافي، وتحليلات قوية. ابدأ مجانًا.'
                                            : 'Linkaza is the intelligent link building platform that combines a massive publisher marketplace, expert content, and powerful analytics. Get started free.'}</p>
                                    </div>
                                    <div className="footer-social">
                                        <SocialLinks />
                                    </div>
                                </div>
                            </div>
                            {footer_data.map((item, i)  =>
                                <div key={i} className="col-xl-2 col-lg-3 col-md-4">
                                    <div className="footer-widget mb-40">
                                        <h3>{isAr ? item.title_ar : item.title}</h3>
                                        <ul>
                                        {item.links && item?.links?.map((link, index)  =>
                                            <li key={index}>
                                                <Link href={link?.link}>
                                                    {isAr ? link?.link_title_ar : link?.link_title}
                                                </Link>
                                            </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="copyright-border">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="copyright">
                                        <p>{isAr ? '© 2025 Linkaza. جميع الحقوق محفوظة.' : '© 2025 Linkaza. All Rights Reserved.'}</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="footer-menu text-left text-md-end text-lg-end">
                                        <ul>
                                            <li><Link href="/privacy-policy">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link></li>
                                            <li><Link href="/terms">{isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</Link></li>
                                            <li><Link href="/contact">{isAr ? 'الدعم' : 'Support'}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
