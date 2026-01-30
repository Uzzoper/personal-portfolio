import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <div className="py-20">
            <div className="container max-w-screen-xl mx-auto px-4">

                {/* Page Header */}
                <div className="max-w-2xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive list of my software engineering projects, ranging from
                        backend APIs to full-stack web applications.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>

            </div>
        </div>
    );
}
