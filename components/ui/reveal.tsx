"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section";
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 40,
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const MotionComponent = Tag === "section" ? motion.section : motion.div;
  return (
    <MotionComponent
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}
