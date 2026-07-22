import React from 'react';
import { useRouter } from 'next/router';
import HeroArea from './hero-area';
import HeaderThree from '@/src/layout/headers/header-3';
import ServiceArea from './service-area'; // هذا أصبح قسم Toolkit
import AccessArea from './access-area';   // هذا سيصبح قسم Old vs New Way
import FeatureArea from './feature-area';
import AccessAreaTwo from './access-area-2';
import PriceAreaHomeSeven from './price-area-home-7';
import TestimonialArea from './testimonial-area';
import BrandArea from './brand-area';
import NewsletterArea from './newsletter-area';
import Footer from '@/src/layout/footers/footer';

const HomeSeven = () => {
    const { locale } = useRouter();
    return (
        <>
        <HeaderThree style_7={true} />
        <main dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <HeroArea /> 
            
            {/* قمت بتبديل الترتيب هنا */}
            <AccessArea />  {/* Section 2: Old Way vs Linkaza Way */}
            <ServiceArea /> {/* Section 3: The Toolkit */}
            
            <FeatureArea /> 
            <AccessAreaTwo />
            <PriceAreaHomeSeven />
            <TestimonialArea />
            <BrandArea />
            <NewsletterArea />
        </main>  
        <Footer home_2={true} footer_bg={true}/>         
        </>
    );
};

export default HomeSeven;