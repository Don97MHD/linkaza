import HeaderTwo from "@/src/layout/headers/header-3";
import React from "react";
import { useRouter } from "next/router";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ErrorArea from "./error-area";
import Footer from "@/src/layout/footers/footer";

const Error = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  return (
    <>
      <HeaderTwo />
      <main dir={isAr ? "rtl" : "ltr"}>
        <Breadcrumb top_title={isAr ? "صفحة خطأ 404" : "404 Error Page"} title={isAr ? "خطأ 404" : "404 Error"} />
        <ErrorArea />
      </main>
      <Footer />
    </>
  );
};

export default Error;
