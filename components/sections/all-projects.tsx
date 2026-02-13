"use client";

import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import { useLanguage } from "@/components/language-context";

export function AllProjects() {
    const { dictionary } = useLanguage();

    const translatedProjects = projects.map(project => {
        const key = project.id as keyof typeof dictionary.projects.items;
        const dictProject = dictionary.projects.items[key];

        return {
            ...project,
            title: (dictProject as any)?.title || project.title,
            description: dictProject?.description || project.description
        };
    });

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">{dictionary.projects.title}</h2>
                    <p className="text-xl text-muted-foreground mt-2">
                        {dictionary.projects.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {translatedProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
