import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { ArrowRight } from "lucide-react";

import { projects } from "@/lib/data";

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">
              Some of my recent work
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}