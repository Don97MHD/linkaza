import React from 'react';
import { useRouter } from 'next/router';
// هنا التغيير: استدعينا مجلد home-7 بدلاً من home
import HomeSeven from '../components/homes/home-7';
import SEO from '../components/common/seo';
import Wrapper from '../layout/wrapper';
import { organizationSchema, websiteSchema } from '@/src/lib/schema';

const index = () => {
  const { locale } = useRouter();
  const isAr = locale === 'ar';
  return (
    <Wrapper>
      <SEO
        title={isAr ? 'المنصة الشاملة لبناء الباك لينك' : 'The All-in-One Link Building Platform'}
        description={isAr
          ? 'Linkaza بتجمع سوق أكتر من 80,000 ناشر، محتوى احترافي، وتحليلات قوية بمنصة وحدة. بلا اشتراكات — بتدفع بس مقابل الروابط يلي بتطلبها.'
          : 'Linkaza combines a marketplace of 80,000+ publishers, expert content, and analytics in one platform. No subscriptions — pay only for the links you order.'}
        path="/"
        translated={['en', 'ar']}
        schema={[organizationSchema(), websiteSchema()]}
      />
      {/* هنا يتم عرض Home 7 */}
      <HomeSeven />
    </Wrapper>
  );
};

export default index;