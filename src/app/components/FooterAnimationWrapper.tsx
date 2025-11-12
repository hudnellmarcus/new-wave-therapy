"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FooterAnimationWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FooterAnimationWrapper({
  children,
  delay = 0,
  className = "",
}: FooterAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
