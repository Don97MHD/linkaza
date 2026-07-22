import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import HeaderThree from "../layout/headers/header-3";
import Footer from "../layout/footers/footer";
import Reveal from "@/src/components/common/motion/reveal";
import { faqPageSchema, breadcrumbSchema } from "@/src/lib/schema";

const content = {
    en: {
        dir: "ltr",
        seoTitle: "How It Works | Buying & Selling Backlinks",
        seoDescription: "See exactly how Linkaza works: how buyers order backlinks with escrow protection, and how publishers list sites and get paid.",
        eyebrow: "How It Works",
        title: "One Platform, Two Sides, Full Transparency",
        subtitle: "Whether you're buying backlinks or selling space on your website, here is exactly what happens at every step — no guesswork.",
        buyerTitle: "For Buyers",
        buyerIntro: "Order a backlink and know exactly where your money is at every stage.",
        buyerSteps: [
            { title: "Browse the marketplace", text: "Filter thousands of vetted websites by niche, category, country, language, price, and Authority Score to find the right fit." },
            { title: "Place your order", text: "Pick a site, add your target URL and anchor text. If the site offers Linkaza's content service, you can add that too." },
            { title: "Your payment is held, not spent", text: "Funds are deducted from your balance and held by Linkaza — not released to the publisher until the job is done." },
            { title: "The publisher accepts or declines", text: "The site owner reviews your order. If they decline, you're refunded automatically — no back-and-forth needed." },
            { title: "Your link goes live", text: "Once accepted, the publisher writes or places your content and submits the live URL." },
            { title: "We verify, then settle", text: "Our team checks the published link meets your order's requirements before releasing funds. If it doesn't, you get refunded." },
        ],
        publisherTitle: "For Publishers",
        publisherIntro: "List your website, set your terms, and get paid for the orders you accept.",
        publisherSteps: [
            { title: "Submit your website", text: "Add your domain, base price, language, and the categories or niches you cover — each niche can carry its own price." },
            { title: "We review and approve", text: "Our team verifies your site and adds SEO stats before it appears in the marketplace." },
            { title: "Orders start coming in", text: "Accept the orders that fit your site, or decline them — declined orders are refunded to the buyer automatically." },
            { title: "Publish and confirm", text: "Once you accept an order, publish the article and submit the live URL from your dashboard." },
            { title: "Get paid", text: "After we verify the published link, funds move from your pending balance to your available balance for withdrawal." },
        ],
        protectionTitle: "Built-in protection, both ways",
        protectionText: "Every order is held in escrow until it's verified complete. Buyers are refunded automatically if a publisher declines or a published link doesn't pass review — so nobody pays for work that never happened.",
        ctaTitle: "Ready to see it in action?",
        ctaBuyer: "Browse the Marketplace",
        ctaPublisher: "List Your Website",
        faqTitle: "Common Questions",
        faqs: [
            { question: "How is a publisher's payment protected before I approve their site?", answer: "Your payment is deducted and held by Linkaza the moment you place an order — it is not paid out to the publisher until the link is published and verified." },
            { question: "What happens if a publisher declines my order?", answer: "You're refunded automatically. There's no need to contact support or negotiate — the held funds return to your balance." },
            { question: "Can I supply my own content instead of using Linkaza's writers?", answer: "Yes. Anchor text is always required, but content is optional unless the specific site you choose requires Linkaza's content service." },
            { question: "When do publishers actually get paid?", answer: "Once an order is accepted, its value shows in the publisher's pending balance. After the published link passes verification, funds move to the available balance for withdrawal." },
        ],
    },
    ar: {
        dir: "rtl",
        seoTitle: "كيف تعمل المنصة | شراء وبيع الباك لينك",
        seoDescription: "تعرّف بالضبط كيف تعمل Linkaza: كيف يطلب المشترون باك لينك بحماية ضمان الدفع، وكيف يسجّل الناشرون مواقعهم ويحصلون على أرباحهم.",
        eyebrow: "آلية العمل",
        title: "منصة واحدة، طرفان، وشفافية كاملة",
        subtitle: "سواء كنت بتشتري باك لينك أو بتبيع مساحة بموقعك، هون بالضبط شو بيصير بكل خطوة — بلا تخمين.",
        buyerTitle: "للمشترين",
        buyerIntro: "اطلب باك لينك واعرف بالضبط وين مصاري بكل مرحلة.",
        buyerSteps: [
            { title: "تصفّح السوق", text: "فلتر آلاف المواقع المدقّقة حسب المجال، التصنيف، الدولة، اللغة، السعر، ومؤشر الموثوقية (AS) للقاك الموقع المناسب." },
            { title: "قدّم طلبك", text: "اختر موقع، وحط رابطك المستهدف والنص التشعبي (Anchor Text). إذا الموقع بيقدّم خدمة المحتوى من Linkaza، فيك تضيفها كمان." },
            { title: "مصاريك محجوزة، مش مصروفة", text: "المبلغ بينخصم من رصيدك وبيضل محجوز عند Linkaza — ما بيوصل للناشر إلا بعد ما الشغل يخلص." },
            { title: "الناشر بيوافق أو يرفض", text: "صاحب الموقع بيراجع طلبك. إذا رفض، بترجعلك مصاريك أوتوماتيكياً — بلا أي نقاش." },
            { title: "رابطك بيصير حي (Live)", text: "بعد الموافقة، الناشر بيكتب أو يضيف المحتوى وبيبعت رابط المقال المنشور." },
            { title: "نتحقق، وبعدين نسوّي الحساب", text: "فريقنا بيتأكد إنو الرابط المنشور مطابق لمتطلبات طلبك قبل ما نحرر المبلغ. إذا مش مطابق، برجعلك مصاريك." },
        ],
        publisherTitle: "للناشرين",
        publisherIntro: "سجّل موقعك، حدد شروطك، واقبض مقابل الطلبات يلي بتوافق عليها.",
        publisherSteps: [
            { title: "سجّل موقعك", text: "أضف الدومين، السعر الأساسي، لغة المقال، والتصنيفات أو المجالات يلي بتغطّيها — كل مجال فيه ممكن يكون إلو سعر خاص." },
            { title: "نراجع ونوافق", text: "فريقنا بيدقّق موقعك ويضيف إحصائيات السيو قبل ما يظهر بالسوق." },
            { title: "الطلبات بتبلّش توصل", text: "وافق على الطلبات يلي بتناسب موقعك، أو ارفضها — الطلبات المرفوضة بترجع مصاريها للمشتري أوتوماتيكياً." },
            { title: "انشر وأكّد", text: "بعد ما توافق على طلب، انشر المقال وابعت رابط المقال المنشور من لوحة التحكم." },
            { title: "اقبض أرباحك", text: "بعد ما نتحقق من الرابط المنشور، المبلغ بينتقل من رصيدك المعلّق للرصيد المتاح للسحب." },
        ],
        protectionTitle: "حماية مبنية بالنظام، بالاتجاهين",
        protectionText: "كل طلب بيضل محجوز (Escrow) لحد ما يتأكد إنو خلص فعلاً. المشتري بيرجعلو مصاريه أوتوماتيكياً إذا الناشر رفض أو الرابط المنشور ما اجتاز المراجعة — هيك حدا ما بيدفع مقابل شغل ما صار.",
        ctaTitle: "جاهز تجرّب بنفسك؟",
        ctaBuyer: "تصفّح السوق",
        ctaPublisher: "سجّل موقعك",
        faqTitle: "أسئلة شائعة",
        faqs: [
            { question: "كيف تكون مصاريي محمية قبل ما أوافق على نشر الرابط؟", answer: "مصاريك بتنخصم وبتضل محجوزة عند Linkaza لحظة ما تقدّم الطلب — ما بتوصل للناشر إلا بعد ما الرابط ينشر ويتحقق منه." },
            { question: "شو بيصير إذا الناشر رفض طلبي؟", answer: "بترجعلك مصاريك أوتوماتيكياً. ما في داعي تتواصل مع الدعم أو تفاوض — المبلغ المحجوز بيرجع لرصيدك." },
            { question: "فيني قدّم محتوى خاص فيني بدل ما أستخدم كتّاب Linkaza؟", answer: "أيوا. النص التشعبي (Anchor Text) مطلوب دايماً، بس المحتوى اختياري إلا إذا الموقع يلي اخترتو بيتطلّب خدمة المحتوى من Linkaza." },
            { question: "إيمتى الناشرين فعلياً بيقبضوا؟", answer: "لما الطلب ينوافق عليه، قيمته بتظهر برصيد الناشر المعلّق. بعد ما الرابط المنشور يجتاز التحقق، المبلغ بينتقل للرصيد المتاح للسحب." },
        ],
    },
};

const HowItWorks = () => {
    const router = useRouter();
    const locale = content[router.locale] ? router.locale : "en";
    const t = content[locale];

    return (
        <Wrapper>
            <SEO
                title={t.seoTitle}
                description={t.seoDescription}
                path="/how-it-works"
                translated={["en", "ar"]}
                schema={[
                    faqPageSchema(t.faqs),
                    breadcrumbSchema([
                        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
                        { name: t.eyebrow, path: "/how-it-works" },
                    ]),
                ]}
            />
            <HeaderThree />

            <main dir={t.dir} className="lz-hiw">
                <section className="lz-hiw__hero">
                    <div className="container">
                        <Reveal className="lz-hiw__hero-inner text-center">
                            <span className="lz-hiw__eyebrow">{t.eyebrow}</span>
                            <h1>{t.title}</h1>
                            <p>{t.subtitle}</p>
                        </Reveal>
                    </div>
                </section>

                <section className="lz-hiw__flow">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Reveal direction={locale === "ar" ? "right" : "left"} className="lz-hiw__col">
                                    <h2>{t.buyerTitle}</h2>
                                    <p className="lz-hiw__col-intro">{t.buyerIntro}</p>
                                    <ol className="lz-hiw__steps">
                                        {t.buyerSteps.map((step, i) => (
                                            <li key={i}>
                                                <span className="lz-hiw__step-num">{i + 1}</span>
                                                <div>
                                                    <h3>{step.title}</h3>
                                                    <p>{step.text}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                    <Link href="/marketplace" className="x-btn">{t.ctaBuyer}</Link>
                                </Reveal>
                            </div>
                            <div className="col-lg-6">
                                <Reveal direction={locale === "ar" ? "left" : "right"} className="lz-hiw__col">
                                    <h2>{t.publisherTitle}</h2>
                                    <p className="lz-hiw__col-intro">{t.publisherIntro}</p>
                                    <ol className="lz-hiw__steps">
                                        {t.publisherSteps.map((step, i) => (
                                            <li key={i}>
                                                <span className="lz-hiw__step-num">{i + 1}</span>
                                                <div>
                                                    <h3>{step.title}</h3>
                                                    <p>{step.text}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                    <Link href="/publishers" className="x-btn btn-border">{t.ctaPublisher}</Link>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="lz-hiw__protection">
                    <div className="container">
                        <Reveal className="lz-hiw__protection-box text-center">
                            <h2>{t.protectionTitle}</h2>
                            <p>{t.protectionText}</p>
                        </Reveal>
                    </div>
                </section>

                <section className="lz-hiw__faq">
                    <div className="container">
                        <Reveal as="h2" className="text-center">{t.faqTitle}</Reveal>
                        <div className="lz-hiw__faq-list">
                            {t.faqs.map((f, i) => (
                                <Reveal as="div" key={i} index={i} className="lz-hiw__faq-item">
                                    <h3>{f.question}</h3>
                                    <p>{f.answer}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="lz-hiw__cta">
                    <div className="container text-center">
                        <Reveal>
                            <h2>{t.ctaTitle}</h2>
                            <div className="lz-hiw__cta-btns">
                                <Link href="/marketplace" className="x-btn">{t.ctaBuyer}</Link>
                                <Link href="/publishers" className="x-btn btn-border">{t.ctaPublisher}</Link>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>

            <Footer home_2={true} footer_bg={true} />
        </Wrapper>
    );
};

export default HowItWorks;
