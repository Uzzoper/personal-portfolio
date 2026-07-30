"use client";

import { motion } from "motion/react";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import { useLanguage } from "@/components/language-context";
import { ProjectTranslation } from "@/lib/dictionaries";
import { Reveal } from "@/components/ui/reveal";

export function Projects() {
  const { dictionary } = useLanguage();

  const translatedProjects = projects.map((project) => {
    const key = project.id as keyof typeof dictionary.projects.items;
    const dictProject = dictionary.projects.items[key] as
      | ProjectTranslation
      | undefined;

    return {
      ...project,
      title: dictProject?.title || project.title,
      description: dictProject?.description || project.description,
    };
  });

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container max-w-screen-xl mx-auto px-4">
        <Reveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {dictionary.projects.title}
            </h2>
            <p className="text-xl text-muted-foreground mt-2">
              {dictionary.projects.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
