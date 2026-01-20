import { Variants } from "framer-motion";

export const EASE = {
    premium: [0.22, 1, 0.36, 1] as const,
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: EASE.premium
        }
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: EASE.premium
        }
    },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const scaleDown: Variants = {
    initial: { scale: 1 },
    scrolled: {
        scale: 0.96,
        transition: {
            duration: 1.0,
            ease: EASE.premium
        }
    }
};
