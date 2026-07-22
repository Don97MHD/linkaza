import React from "react";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Contact from "../components/contact";

const index = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  return (
    <Wrapper>
      <SEO
        title={isAr ? "تواصل معنا | خلّينا نسمعك" : "Contact Us | Get in Touch"}
        description={isAr
          ? "عندك سؤال عن بناء الروابط، الأسعار، أو حسابك؟ تواصل مع فريق Linkaza وبنرجعلك."
          : "Have a question about link building, pricing, or your account? Reach the Linkaza team and we'll get back to you."}
        path="/contact"
        translated={["en", "ar"]}
      />
      <Contact />
    </Wrapper>
  );
};

export default index;
