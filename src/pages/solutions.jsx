import React from "react";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Solutions from "../components/solutions";

const index = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  return (
    <Wrapper>
      <SEO
        title={isAr ? "حلول وإستراتيجيات بناء الروابط" : "Link Building Solutions & Strategies"}
        description={isAr
          ? "استكشف حلول Linkaza لبناء الروابط للوكالات، المستشارين، الشركات، والناشرين — مبنية لحل تحدياتك المحددة."
          : "Explore Linkaza's link building solutions for agencies, consultants, businesses, and publishers — built to solve your specific challenges."}
        path="/solutions"
        translated={["en", "ar"]}
      />
      <Solutions />
    </Wrapper>
  );
};

export default index;
