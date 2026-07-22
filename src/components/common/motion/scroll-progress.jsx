import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 22,
        restDelta: 0.001,
    });

    return <motion.div className="lz-scroll-progress" style={{ scaleX }} />;
};

export default ScrollProgress;
