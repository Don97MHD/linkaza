import React from "react";
import { useRouter } from "next/router";
import Header from "@/src/layout/headers/header-3";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import SolutionsList from "./solutions-list";
import AccessAreaTwo from "../homes/home-7/access-area-2";
import Footer from "@/src/layout/footers/footer";
import FaqArea from "../faq/faq-area";

const Solutions = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";

  return (
    <>
      <Header />

      <main dir={isAr ? "rtl" : "ltr"}>
        <Breadcrumb
            top_title={isAr ? "حلول بناء الروابط" : "Link Building Solutions"}
            title={isAr ? "الحلول" : "Solutions"}
        />

        <SolutionsList />

        <AccessAreaTwo />

        <FaqArea />
      </main>

      <Footer home_2={true} footer_bg={true} />
    </>
  );
};

export default Solutions;
