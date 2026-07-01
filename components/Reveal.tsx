"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
  duration: 1.2,
  ease: [0.25, 0.1, 0.25, 1],
}}
    >
      {children}
    </motion.div>
  );
}