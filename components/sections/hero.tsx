"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HighlightingTypewriter } from "@/components/ui/highlighting-typewriter";
import { useLanguage } from "@/components/language-context";

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background gradient parallax via CSS */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.08),transparent)] bg-fixed"
      />

      {/* Conteúdo com stagger de entrada via CSS animation */}
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="max-w-3xl space-y-8">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight min-h-[200px] md:min-h-[240px] animate-fade-in-up [animation-delay:300ms] [animation-fill-mode:both]">
            {dictionary.hero.headline}{" "}
            <HighlightingTypewriter
              key={dictionary.hero.typewriter[0]}
              words={dictionary.hero.typewriter}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              cursor
              cursorStyle="_"
              highlightWord="software"
              highlightClass="text-green-500"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up [animation-delay:450ms] [animation-fill-mode:both]">
            {dictionary.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:both]">
            <Button asChild size="lg">
              <Link href="/#projects">
                {dictionary.hero.viewProjects}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#about">{dictionary.hero.moreAboutMe}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
