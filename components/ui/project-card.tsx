"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Gamepad2 } from "lucide-react";
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

export function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubRepos
}: ProjectCardProps) {
  const { dictionary } = useLanguage();
  const isGame = title.toLowerCase().includes("flappy") || title.toLowerCase().includes("game");

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <div className="flex items-center gap-3">
            {githubRepos?.map((repo) => (
              <Link
                key={repo.label}
                href={repo.url}
                target="_blank"
                title={repo.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            ))}
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                title={isGame ? dictionary.projects.playGame : dictionary.projects.viewLive}
                className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm group/demo relative"
              >
                {isGame ? (
                  <Gamepad2 className="h-5 w-5" />
                ) : (
                  <ExternalLink className="h-5 w-5" />
                )}
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
              </Link>
            )}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}