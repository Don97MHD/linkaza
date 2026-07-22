import React from 'react';
import InnerBrandArea from './../../common/inner-brand-area';
import Reveal from '@/src/components/common/motion/reveal';

const BrandArea = () => {
    return (
        <>
           <section className="brand-area pos-relative pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <Reveal direction="fade" className="brand-active owl-carousel">
                                <InnerBrandArea />
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BrandArea;