import { useRouter } from "next/router";
import Footer from "@/src/layout/footers/footer";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import HeaderTwo from "./../../layout/headers/header-3";
import ContactFormArea from "./contact-form-area";

const Contact = () => {
  const { locale } = useRouter();
  const isAr = locale === "ar";
  return (
    <>
      <HeaderTwo />
      <main dir={isAr ? "rtl" : "ltr"}>
        <Breadcrumb top_title={isAr ? "تواصل معنا" : "Contact us"} title={isAr ? "تواصل" : "Contact"} />
        <ContactFormArea />
      </main>
      <Footer home_2={true} />
    </>
  );
};

export default Contact;
