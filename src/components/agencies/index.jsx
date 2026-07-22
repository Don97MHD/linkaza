import React from 'react';
import Header from "@/src/layout/headers/header"; 
import Footer from "@/src/layout/footers/footer";
import AgencyHero from './agency-hero';
import AgencyFeatures from './agency-features';
import RoiComparison from './roi-comparison';
import NewsletterArea from '../homes/home-7/newsletter-area'; // إعادة استخدام الـ CTA النهائي

const Agencies = () => {
    return (
        <>
            <Header />
            <main>
                <AgencyHero />
                <AgencyFeatures />
                <RoiComparison />
                
                {/* FAQ Section - مخصص للوكالات */}
                <section className="faq-area pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center mb-60">
                                    <h2>Your Questions, Answered</h2>
                                </div>
                                <div className="faq-wrapper inner-faq-wrapper">
                                    <div className="accordion" id="agencyAccordion">
                                        
                                        <div className="accordion-items">
                                            <h2 className="accordion-header" id="h1">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#c1" aria-expanded="true">
                                                    What makes Linkaza the best platform for agency link building?
                                                </button>
                                            </h2>
                                            <div id="c1" className="accordion-collapse collapse show" data-bs-parent="#agencyAccordion">
                                                <div className="accordion-content">
                                                    <p>Linkaza is built specifically for scale. Our centralized multi-client management and vetted publisher quality mean you can deliver better results efficiently.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-items">
                                            <h2 className="accordion-header" id="h2">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c2">
                                                    Do you offer white-label backlink services?
                                                </button>
                                            </h2>
                                            <div id="c2" className="accordion-collapse collapse" data-bs-parent="#agencyAccordion">
                                                <div className="accordion-content">
                                                    <p>Yes. You manage the client relationship and strategy; we provide the powerful backend for fulfillment, allowing you to maintain your brand's authority.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-items">
                                            <h2 className="accordion-header" id="h3">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c3">
                                                    How do I manage link building for multiple clients?
                                                </button>
                                            </h2>
                                            <div id="c3" className="accordion-collapse collapse" data-bs-parent="#agencyAccordion">
                                                <div className="accordion-content">
                                                    <p>Our agency dashboard is designed for this. You can create separate campaigns for each client and allocate budgets individually.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <NewsletterArea />
            </main>
            <Footer home_2={true} footer_bg={true} />
        </>
    );
};

export default Agencies;