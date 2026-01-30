import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const skills = {
    "Backend": ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Node.js", "Docker", "JUnit"],
    "Frontend": ["React", "TypeScript", "Next.js", "TailwindCSS", "Vue.js", "Canvas API", "HTML/CSS"],
    "Tools & Others": ["Git", "GitHub", "Flyway", "Clean Architecture", "Agile", "Vercel", "Railway"],
};

const socialLinks = [
    { href: "https://github.com/Uzzoper", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/juan-antonio-peruzzo-10a343315/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:juanperuzzo13@gmail.com", icon: Mail, label: "Email" },
];

export default function AboutPage() {
    return (
        <div className="py-20">
            <div className="container max-w-screen-xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
                        <p className="text-xl text-muted-foreground">
                            Hey there! I'm Juan Peruzzo, a software developer passionate about
                            building modern digital experiences.
                        </p>
                    </div>

                    {/* Profile Picture */}
                    <div className="relative h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 shrink-0">
                        <Image
                            src="/profile.jpeg"
                            alt="Juan Peruzzo"
                            fill
                            className="rounded-full object-cover border-4 border-primary/20 shadow-xl"
                            priority
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
                            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                                <p>
                                    I'm a tech enthusiast and software developer focused on creating
                                    clean, efficient, and user-centric applications. My journey began in <strong>Electrical Engineering at UTFPR</strong> (2020–2024), where I built a 
                                    strong analytical foundation. However, I discovered my true calling in <strong>Software Engineering</strong>: 
                                    the incredible power to build virtually anything from scratch.
                                </p>
                                <p>
                                    I am driven by the fascinating possibility of <strong>transforming lines of code into high-impact solutions and scalable businesses</strong>. 
                                    For me, programming is the ultimate tool for innovation, allowing the creation of products that can 
                                    reach millions and change the way we interact with the world.
                                </p>
                                <p>
                                    I specialize in backend development with <strong>Java and Spring Boot</strong>, while also 
                                    crafting modern frontends with <strong>React and Next.js</strong>. I believe in writing 
                                    code as an engineer—prioritizing <strong>Clean Architecture</strong>, performance, 
                                    and the scalability required for the next generation of software companies.
                                </p>
                                <p>
                                  I am <strong>obsessed with technology</strong> and dedicated to learning something new every single day. 
                                  For me, it's not just about writing code; it's a constant pursuit to refine my craft and 
                                  become the best engineer I can be.
                                </p>
                            </div>
                        </section>

                        
                       {/* Education Section */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Education</h2>
                            <div className="space-y-8">
        
                        {/* Software Engineering */}
                        <div className="relative pl-6 border-l-2 border-primary">
                            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
            
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                                <h3 className="text-lg font-bold">B.S. in Software Engineering</h3>
                                <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                                    2024 — Present
                                </span>
                            </div>
                            <p className="text-foreground font-medium italic">UniCesumar</p>
                        </div>

                        {/* Electrical Engineering */}
                        <div className="relative pl-6 border-l-2 border-muted-foreground/30">
                            <div className="absolute w-3 h-3 bg-muted-foreground/30 rounded-full -left-[7px] top-2" />
            
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                                <h3 className="text-lg font-semibold text-muted-foreground">Electrical Engineering</h3>
                                <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                                    2020 — 2024
                                </span>
                            </div>
                            <p className="text-muted-foreground font-medium">UTFPR — Federal Technological University of Paraná</p>
            
                            <div className="mt-3 p-3 rounded-md bg-muted/50 border-l-4 border-yellow-500/50">
                                <p className="text-sm text-muted-foreground">
                                    <strong>Note:</strong> Coursework completed through the 6th semester. 
                                    I chose to discontinue the program to fully dedicate my career to <strong>Software Engineering</strong>, 
                                    driven by my passion for tech and building scalable digital systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                        {/* Skills Section */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {Object.entries(skills).map(([category, items]) => (
                                    <Card key={category}>
                                        <CardHeader className="pb-3">
                                            <CardTitle className="text-lg">{category}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2">
                                                {items.map((skill) => (
                                                    <Badge key={skill} variant="secondary">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">

                        <Card>
                            <CardHeader>
                                <CardTitle>Connect</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    <span>Ponta Grossa, PR - Brazil</span>
                                </div>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <Link
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            <social.icon className="h-5 w-5" />
                                            <span className="sr-only">{social.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-primary/50 bg-primary/5">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    Open for Work
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    I'm currently looking for new opportunities. If you have a
                                    project in mind or want to collaborate, let's talk!
                                </p>
                                <Link
                                    href="/contact"
                                    className="text-primary hover:underline text-sm font-medium"
                                >
                                    Get in touch →
                                </Link>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </div>
    );
}
