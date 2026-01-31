"use client";

import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import { useLanguage } from "@/components/language-context";

export default function ProjectsPage() {
    const { dictionary } = useLanguage();

    const translatedProjects = projects.map(project => {
        const key = project.id as keyof typeof dictionary.projects.items;
        const dictProject = dictionary.projects.items[key];

        return {
            ...project,
            description: dictProject?.description || project.description
        };
    });

    return (
        <div className="py-20">
            <div className="container max-w-screen-xl mx-auto px-4">

                {/* Page Header */}
                <div className="max-w-2xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{dictionary.projects.title}</h1>
                    <p className="text-xl text-muted-foreground">
                        {dictionary.projects.subtitle}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {translatedProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>

            </div>
        </div>
    );
}
