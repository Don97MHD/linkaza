import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/router';
import error_img from "@assets/img/404/404.png";

const content = {
    en: {
        title: "Sorry We Can't Find That Page!",
        desc: "The page you are looking for was moved, removed, renamed or never existed.",
        back: "Back to home",
    },
    ar: {
        title: "معذرة، ما لقينا هالصفحة!",
        desc: "الصفحة يلي عم تدوّر عليها انتقلت، انحذفت، تغيّر اسمها، أو أصلاً ما كانت موجودة.",
        back: "ارجع للرئيسية",
    },
};

const ErrorArea = () => {
    const { locale } = useRouter();
    const t = content[locale] || content.en;
    return (
        <>
            <section className="error-404-area pt-140 pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="error-page text-center">
                                <h1>404</h1>
                                <h4>{t.title}</h4>
                                <p>{t.desc}</p>
                                <Link className="login-btn" href="/">{t.back}</Link>
                                <div className="mb-20"></div>
                                <Image src={error_img}  alt="404" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorArea;
