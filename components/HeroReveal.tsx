"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroRevealProps {
  children: ReactNode;
}

export default function HeroReveal({ children }: HeroRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}