import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Wraps children in an element whose vertical position is tied directly
 * to scroll progress (moves continuously while the page scrolls, not
 * just once on viewport entry). Positive `speed` = moves slower than
 * scroll (drifts up relative to page); negative = drifts down.
 */
const ScrollParallax = ({ children, speed = 40, className, as = 'div', ...rest }) => {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

    if (reduceMotion) {
        const Tag = as;
        return <Tag ref={ref} className={className} {...rest}>{children}</Tag>;
    }

    const MotionTag = motion[as] || motion.div;
    return (
        <MotionTag ref={ref} className={className} style={{ y }} {...rest}>
            {children}
        </MotionTag>
    );
};

export default ScrollParallax;
