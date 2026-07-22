import useSticky from '@/src/hooks/use-sticky';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import NavMenu from './nav-menu';
import MobileMenus from './mobile-menus';
import logo from "@assets/img/logo/linkaza_white.svg";

const LangSwitch = () => {
    const router = useRouter();
    const switchTo = router.locale === 'ar' ? 'en' : 'ar';
    return (
        <button
            type="button"
            className="lz-lang-switch"
            onClick={() => router.push(router.asPath, router.asPath, { locale: switchTo })}
        >
            {switchTo === 'ar' ? 'العربية' : 'EN'}
        </button>
    );
};

const HeaderThree = ({style_7}) => {
   const {sticky} = useSticky();
   const { locale } = useRouter();
   const isAr = locale === 'ar';

    return (
        <> 
            <header id="header-sticky" dir={isAr ? "rtl" : "ltr"} className={`${style_7 ? "header-transparent header-green" : "header-normal"}  ${sticky && "sticky-bar"}`}>
            <div className="header-area">
                <div className="container">
                    <div className="position-relative">
                        <div className="row align-items-center">
                            {/* Logo Section */}
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <Link href="/"> <Image src={logo} alt="Linkaza" priority /> </Link>
                                </div>
                            </div>
                            
                            {/* Menu Section */}
                            <div className="col-xl-8 col-lg-8 position-static">
                                <div className={`main-menu ${style_7 ? "" : "pink-menu"} text-center d-none d-lg-block`}>
                                    <nav id="mobile-menu">
                                        <NavMenu />  
                                    </nav>
                                </div>
                                <div className="mobile-menu mean-container d-lg-none">
                                    <div className="mean-push"></div>
                                    <div className="mean-bar">
                                     <MobileMenus />
                                    </div>
                                </div>
                            </div>

                            {/* Button Section (Linked to Dashboard) */}
                            <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                                <div className="header-btn text-right d-flex align-items-center justify-content-end">
                                    <LangSwitch />
                                    <a
                                        href="https://app.linkaza.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`x-btn btn-border ${style_7 ? "" : "btn-radius"}`}
                                    >
                                        {isAr ? 'ابدأ الآن' : 'Get Started'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default HeaderThree;