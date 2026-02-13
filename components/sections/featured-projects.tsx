"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { useLanguage } from "@/components/language-context";
import { ProjectTranslation } from "@/lib/dictionaries";

export function FeaturedProjects() {
  const { dictionary } = useLanguage();

  const translatedProjects = projects.slice(0, 3).map(project => {
    const key = project.id as keyof typeof dictionary.projects.items;

    const dictProject = dictionary.projects.items[key] as ProjectTranslation | undefined;

    return {
      ...project,
      title: dictProject?.title || project.title,
      description: dictProject?.description || project.description
    };
  });

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold">{dictionary.home.featuredTitle}</h2>
            <p className="text-muted-foreground mt-2">
              {dictionary.home.featuredSubtitle}
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects">
              {dictionary.home.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translatedProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}