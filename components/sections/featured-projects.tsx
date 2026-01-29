import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Flappy Naruu",
    description: "A fun Flappy Bird-style game built from zero with modern web technologies.",
    technologies: ["React", "TypeScript", "Canvas API", "Java", "Spring", "Postgres", "Docker", "JUnit", "Vercel", "Railway"],
    githubRepos: [
      { label: "Frontend", url: "https://github.com/Uzzoper/flappynaruu-frontend" },
      { label: "Backend", url: "https://github.com/Uzzoper/flappynaruu-backend" },
    ],
    demoUrl: "https://flappynaruu.vercel.app/",
  },
  {
    title: "EventClean",
    description: "API for event and venue management using clean architecture principles.",
    technologies: ["Java 17", "Spring", "Docker", "Flyway", "Clean Architecture", "Postgres"],
    githubRepos: [
      { label: "Repository", url: "https://github.com/Uzzoper/eventclean" },
    ],
  },
  {
    title: "MovieFlix",
    description: "A REST API for movie catalog management.",
    technologies: ["Java", "Spring Boot", "REST API", "Postgres", "Docker", "Flyway"],
    githubRepos: [
      { label: "Repository", url: "https://github.com/Uzzoper/movieflix" },
    ],
  },
  {
    title: "Thermometer of Ponta Grossa",
    description: "A weather website showing real-time temperature for Ponta Grossa.",
    technologies: ["JavaScript", "Weather API", "HTML", "CSS", "Vercel"],
    githubRepos: [
      { label: "Repository", url: "https://github.com/Uzzoper/termometro-pg" },
    ],
    demoUrl: "https://otermometrodepg.vercel.app",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
    githubRepos: [
      { label: "Repository", url: "https://github.com/Uzzoper/personal-portfolio" },
    ],
  },
];

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