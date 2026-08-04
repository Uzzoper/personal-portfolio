"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Gamepad2, Server } from "lucide-react";
import { useLanguage } from "@/components/language-context";

interface GithubRepo {
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubRepos?: GithubRepo[];
  imageUrl?: string;
}

function getProjectTheme(technologies: string[]) {
  const techStr = technologies.join(" ").toLowerCase();

  if (techStr.includes("java") && techStr.includes("spring")) {
    return {
      gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/5",
      darkGradient: "dark:from-emerald-500/15 dark:via-green-500/8 dark:to-teal-500/5",
      icon: Server,
      iconColor: "text-emerald-500",
      pattern: "radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.12) 0%, transparent 50%)",
    };
  }
  return {
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/5",
    darkGradient: "dark:from-violet-500/15 dark:via-purple-500/8 dark:to-fuchsia-500/5",
    icon: Server,
    iconColor: "text-violet-500",
    pattern: "radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)",
  };
}

export function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubRepos,
  imageUrl,
}: ProjectCardProps) {
  const { dictionary } = useLanguage();
  const isGame =
    title.toLowerCase().includes("flappy") ||
    title.toLowerCase().includes("game") ||
    title.toLowerCase().includes("vibecraft");
  const theme = getProjectTheme(technologies);
  const ThemeIcon = theme.icon;

  return (
    <TiltCard className="h-full">
      <Card className="group overflow-hidden transition-colors duration-300 hover:border-primary/50 h-full flex flex-col">
        {imageUrl ? (
          <div className="relative w-full h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-muted/25 to-muted/10" />
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw"
              quality={85}
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <div
            className={`relative w-full h-56 overflow-hidden bg-gradient-to-br ${theme.gradient} ${theme.darkGradient}`}
            style={{ backgroundImage: theme.pattern }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <ThemeIcon
                className={`h-16 w-16 ${theme.iconColor} opacity-20 transition-all duration-500 group-hover:opacity-35 group-hover:scale-110`}
                strokeWidth={1}
              />
            </div>
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div
              className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${theme.gradient} opacity-40 blur-2xl`}
            />
            <div
              className={`absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br ${theme.gradient} opacity-30 blur-xl`}
            />
          </div>
        )}

        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between min-h-[2.25rem]">
            <span>{title}</span>
            <div className="flex items-center gap-3">
              {githubRepos?.map((repo) => {
                const labelKey = repo.label.toLowerCase() as keyof typeof dictionary.projects;
                const translated = (dictionary.projects as any)[labelKey];
                const translatedLabel =
                  typeof translated === "string" ? translated : repo.label;

                return (
                  <Link
                    key={repo.label}
                    href={repo.url}
                    target="_blank"
                    title={translatedLabel}
                    aria-label={`${title} ${translatedLabel}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                );
              })}
              {demoUrl && (
                <Link
                  href={demoUrl}
                  target="_blank"
                  title={
                    isGame
                      ? dictionary.projects.playGame
                      : dictionary.projects.viewLive
                  }
                  aria-label={
                    isGame
                      ? `${title} ${dictionary.projects.playGame}`
                      : `${title} ${dictionary.projects.viewLive}`
                  }
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm group/demo relative"
                >
                  {isGame ? (
                    <Gamepad2 className="h-5 w-5" />
                  ) : (
                    <ExternalLink className="h-5 w-5" />
                  )}
                  <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                  </span>
                </Link>
              )}
            </div>
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-end pt-0">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </TiltCard>
  );
}
