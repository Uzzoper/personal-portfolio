"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HighlightingTypewriter } from "@/components/ui/highlighting-typewriter";
import { useLanguage } from "@/components/language-context";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  const { dictionary } = useLanguage();
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, -15]);
  const bgY = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background gradient com parallax lento */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.08),transparent)]"
        style={{ y: bgY }}
      />

      {/* Conteúdo com parallax suave */}
      <motion.div
        className="container max-w-screen-xl mx-auto px-4"
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-3xl space-y-8">
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight min-h-[200px] md:min-h-[240px]"
          >
            {dictionary.hero.headline}{" "}
            <HighlightingTypewriter
              key={dictionary.hero.typewriter[0]}
              words={dictionary.hero.typewriter}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              cursor
              cursorStyle="_"
              highlightWords={dictionary.hero.highlightWords}
              highlightClass="text-green-500"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            {dictionary.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/#projects">
                {dictionary.hero.viewProjects}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#about">{dictionary.hero.moreAboutMe}</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
