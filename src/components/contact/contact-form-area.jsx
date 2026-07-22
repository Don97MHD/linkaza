import  Image  from 'next/image';
import { useRouter } from 'next/router';
import ContactForm from '../forms/contact-form';

import email_icon from "@assets/img/icon/c-icon.png";

const content = {
    en: {
        title: "Have a question? Talk to us.",
        sub_title: "We usually reply within one business day.",
        contact_title: "Get in touch",
        contact_des: "Send us a message and we'll get back to you, or email us directly.",
        email_label: "Email",
    },
    ar: {
        title: "عندك سؤال؟ احكينا.",
        sub_title: "بنرد عادة خلال يوم عمل واحد.",
        contact_title: "تواصل معنا",
        contact_des: "ابعتلنا رسالة وبنرجعلك، أو راسلنا مباشرة بالإيميل.",
        email_label: "الإيميل",
    },
};

const ContactFormArea = () => {
    const { locale } = useRouter();
    const t = content[locale] || content.en;

    return (
        <>
            <div className="contact-form-area pt-140 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                            <div className="section-title-2 text-center mb-70">
                                <h2 className="mb-20">{t.title}</h2>
                                <p>{t.sub_title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 offset-xl-1">
                            <div className="contact-info mb-30">
                                <h3>{t.contact_title}</h3>
                                <p>{t.contact_des}</p>

                                <ul className="mt-40">
                                    <li>
                                        <div className="c-info-icon">
                                            <Image src={email_icon} alt="theme-pure" />
                                        </div>
                                        <div className="c-info-text">
                                            <h4>{t.email_label}</h4>
                                            <p>support@linkaza.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="contact-form mb-30">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactFormArea;
