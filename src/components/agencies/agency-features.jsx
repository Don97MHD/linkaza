import React from 'react';
import Image from 'next/image';

// أيقونات تعبيرية
import icon_1 from "@assets/img/icon/sf1.png";
import icon_2 from "@assets/img/icon/sf2.png";
import icon_3 from "@assets/img/icon/sf3.png";
import icon_4 from "@assets/img/icon/p2.png"; 

const features_data = [
    {
        id: 1,
        icon: icon_1,
        title: "Centralized Client Management",
        text: "Manage your entire client portfolio from a single dashboard. Organize campaigns and track orders without touching a spreadsheet."
    },
    {
        id: 2,
        icon: icon_2,
        title: "White-Label Ready",
        text: "Our platform is designed to fit your workflow. Use our marketplace and content engine to fulfill orders under your own brand."
    },
    {
        id: 3,
        icon: icon_3,
        title: "Consistent, High-Quality Placements",
        text: "Give your clients the best. Our marketplace is filled with thousands of high-quality, vetted publishers."
    },
    {
        id: 4,
        icon: icon_4,
        title: "Dedicated Agency Support",
        text: "Think of us as an extension of your team. Our expert support is always available to help you with strategy."
    }
]

const AgencyFeatures = () => {
    return (
        <section className="how-work-area pos-relative pt-150 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="section-title text-center mb-70">
                            <h2>The Tools You Need to <br/> Outperform the Competition</h2>
                            <p>Linkaza removes the bottleneck of manual outreach.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {features_data.map((item, i) => 
                        <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="how-work single-features text-center mb-30" style={{padding: '30px 20px'}}>
                                <div className="how-work-icon">
                                    <Image src={item.icon} alt="icon" />
                                </div>
                                <div className="how-work-text">
                                    <h3 style={{fontSize: '18px'}}>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>  
                    )} 
                </div>
            </div>
        </section> 
    );
};

export default AgencyFeatures;