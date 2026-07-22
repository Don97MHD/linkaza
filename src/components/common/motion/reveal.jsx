import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const OFFSETS = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
    fade: { x: 0, y: 0 },
};

const EASE = [0.16, 1, 0.3, 1];

/**
 * Scroll-reveal wrapper. Animates once when it enters the viewport.
 * `index` staggers siblings automatically (index * stagger delay).
 */
const Reveal = ({
    children,
    as = 'div',
    direction = 'up',
    index = 0,
    stagger = 0.12,
    delay = 0,
    duration = 0.7,
    scale = true,
    className,
    ...rest
}) => {
    const reduceMotion = useReducedMotion();
    const offset = OFFSETS[direction] || OFFSETS.up;
    const MotionTag = motion[as] || motion.div;

    if (reduceMotion) {
        const Tag = as;
        return <Tag className={className} {...rest}>{children}</Tag>;
    }

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, x: offset.x, y: offset.y, scale: scale ? 0.96 : 1 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration, delay: delay + index * stagger, ease: EASE }}
            {...rest}
        >
            {children}
        </MotionTag>
    );
};

export default Reveal;
