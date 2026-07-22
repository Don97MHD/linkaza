import React from 'react';
import { useRouter } from 'next/router';

const content = {
    en: {
        title: "Your Questions, Answered",
        sm_des: "Find clear answers about how Linkaza adapts to your specific needs, whether you are an agency, consultant, or business owner.",
        faqs: [
            { id: 1, question: "What are the best link building solutions for large agencies managing many clients?", answer: "Our link building for agencies solution is designed for scale. It includes multi-client campaign management, white-label reporting options, and dedicated support to streamline your entire fulfillment process, saving dozens of hours per week." },
            { id: 2, question: "I'm an independent SEO consultant. Can your platform help me save time?", answer: "Absolutely. Consultants love Linkaza because it automates the most time-consuming parts of link building—finding sites, negotiating, and managing orders. This allows you to deliver top-tier results without getting bogged down in administrative work." },
            { id: 3, question: "Do you offer custom link building for businesses with specific needs?", answer: "Yes. While our platform provides direct access, our support team can help you build a custom strategy. Our pay-as-you-go model ensures our solution fits any budget, from small local businesses to large enterprises." },
        ],
    },
    ar: {
        title: "أسئلة شائعة",
        sm_des: "لاقي إجابات واضحة عن كيف Linkaza بتتأقلم مع احتياجاتك المحددة، سواء كنت وكالة، مستشار، أو صاحب شركة.",
        faqs: [
            { id: 1, question: "شو أفضل حلول بناء الروابط للوكالات الكبيرة يلي بتدير عملاء كتير؟", answer: "حل بناء الروابط للوكالات تبعنا مصمّم للتوسّع. بيشمل إدارة حملات متعددة العملاء، خيارات تقارير white-label، ودعم مخصّص لتبسيط كل عملية التنفيذ، وتوفير عشرات الساعات أسبوعياً." },
            { id: 2, question: "أنا مستشار سيو مستقل. منصتكم فيها توفّرلي وقت؟", answer: "أكيد. المستشارين بيحبّوا Linkaza لأنها بتؤتمت أكتر أجزاء بناء الروابط يلي بتاخد وقت — إيجاد المواقع، التفاوض، وإدارة الطلبات. هيك فيك تقدّم نتائج ممتازة بلا ما تغرق بالشغل الإداري." },
            { id: 3, question: "بتقدّموا بناء روابط مخصّص للشركات يلي إلها احتياجات محددة؟", answer: "أيوا. منصتنا بتقدّم وصول مباشر، وفريق الدعم فيه يساعدك تبني استراتيجية مخصصة. نموذج الدفع بحسب الاستخدام بيضمن حلنا يناسب أي ميزانية، من شركات محلية صغيرة لحتى مؤسسات كبيرة." },
        ],
    },
};

const FaqArea = () => {
    const { locale } = useRouter();
    const t = content[locale] || content.en;

    return (
        <>
            <section className="inner-faq-area pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title inner-faq-title text-center mb-60">
                                <h2>{t.title}</h2>
                                <p>{t.sm_des}</p>
                            </div>

                            <div className="faq-wrapper inner-faq-wrapper">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordionExample">
                                    {t.faqs.map((item, i) => (
                                        <div key={item.id} className="accordion-items">
                                        <h2 className="accordion-header" id={`heading${item.id}`}>
                                            <button
                                            className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${item.id}`}
                                            aria-expanded={i === 0}
                                            aria-controls={`collapse${item.id}`}
                                            >
                                            {item.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${item.id}`}
                                            className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                                            aria-labelledby={`heading${item.id}`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-content">
                                            <p>{item.answer}</p>
                                            </div>
                                        </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqArea;
