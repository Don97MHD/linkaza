import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

// سنستخدم صورة تعبر عن "فريق" أو "نمو"
import hero_shape from "@assets/img/shape/shape-s-1.png"; 
import hero_img from "@assets/img/slider/slide-6.jpg"; // يفضل تغييرها لصورة داشبورد الوكالات لاحقاً

const AgencyHero = () => {
    return (
        <section className="hero-area hero-padding pos-rel pt-200 pb-200 fix" style={{ backgroundImage: `url(/assets/img/bg/bg-1.jpg)` }}>
            <div className="shape-s-1">
                <Image src={hero_shape} alt="shape" />
            </div>
            <div className="shape-s-2">
                <Image src={hero_shape} alt="shape" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-content hero-content-7 mb-30">
                            <h1 className="hero-title mb-30">
                                Your Agency's New Engine for <span className="gn-text">Scalable Link Building</span>
                            </h1>
                            <p>
                                Deliver exceptional client results without sacrificing your margins. 
                                Linkaza is designed to help your agency scale fulfillment, streamline operations, and become more profitable.
                            </p>
                            <div className="hero-btn mt-40">
                                <Link href="/contact" className="btn btn-gradient btn-gradient-02 mr-15">
                                    Book a Free Agency Demo
                                </Link>
                                <Link href="/pricing" className="btn btn-white btn-white-02">
                                    See Our Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-thumb-7 mb-30">
                            <Image src={hero_img} alt="Agency Dashboard" priority />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgencyHero;