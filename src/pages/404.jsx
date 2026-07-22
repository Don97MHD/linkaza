import React from 'react';
import { useRouter } from 'next/router';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Error from '../components/error';

const indx = () => {
    const { locale } = useRouter();
    const isAr = locale === 'ar';
    return (
        <Wrapper>
            <SEO
                title={isAr ? 'الصفحة غير موجودة' : 'Page Not Found'}
                description={isAr
                    ? 'الصفحة يلي عم تدوّر عليها مش موجودة. ارجع لصفحة Linkaza الرئيسية.'
                    : "The page you're looking for doesn't exist. Head back to the Linkaza homepage."}
                noindex
            />
            <Error />
        </Wrapper>
    );
};

export default indx;
