"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-context";

const skills = {
    Backend: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Node.js", "Docker", "JUnit"],
    Frontend: ["React", "TypeScript", "Next.js", "TailwindCSS", "Vue.js", "Canvas API", "HTML/CSS"],
    "Tools & Others": ["Git", "GitHub", "Flyway", "Clean Architecture", "Agile", "Vercel", "Railway"],
};

const socialLinks = [
    { href: "https://github.com/Uzzoper", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/juan-antonio-peruzzo-10a343315/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:juanperuzzo13@gmail.com", icon: Mail, label: "Email" },
];

export function About() {
    const { dictionary } = useLanguage();

    return (
        <section id="about" className="py-20 md:py-32">
            <div className="container max-w-screen-xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">{dictionary.about.title}</h2>
                        <p className="text-xl text-muted-foreground">
                            {dictionary.about.intro}
                        </p>
                    </div>

                    {/* Profile Picture */}
                    <div className="relative h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 shrink-0 mx-auto md:mx-0">
                        <Image
                            src="/juan.jpeg"
                            alt="Juan Peruzzo"
                            fill
                            sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                            className="rounded-full object-cover border-4 border-primary/20 shadow-xl"
                            priority
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Who I Am */}
                        <section>
                            <h3 className="text-2xl font-bold mb-4">{dictionary.about.whoIAmTitle}</h3>
                            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                                {dictionary.about.whoIAmContent.map((paragraph: string, index: number) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        {/* Education Section */}
                        <section>
                            <h3 className="text-2xl font-bold mb-6">{dictionary.about.educationTitle}</h3>
                            <div className="space-y-8">
                                {dictionary.about.education.map((item: any, index: number) => (
                                    <div key={index} className={`relative pl-6 border-l-2 ${index === 0 ? 'border-primary' : 'border-muted-foreground/30'}`}>
                                        <div className={`absolute w-3 h-3 rounded-full -left-[7px] top-2 ${index === 0 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                                            <h4 className={`text-lg font-bold ${index === 0 ? '' : 'text-muted-foreground font-semibold'}`}>{item.degree}</h4>
                                            <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                                                {item.period}
                                            </span>
                                        </div>
                                        <p className={`font-medium ${index === 0 ? 'text-foreground italic' : 'text-muted-foreground'}`}>{item.institution}</p>
                                        {item.note && (
                                            <div className="mt-3 p-3 rounded-md bg-muted/50 border-l-4 border-yellow-500/50">
                                                <p className="text-sm text-muted-foreground">
                                                    {item.note}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Skills Section */}
                        <section>
                            <h3 className="text-2xl font-bold mb-6">{dictionary.about.skillsTitle}</h3>
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
                                <CardTitle>{dictionary.about.connect}</CardTitle>
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
                                            className="p-2 rounded-lg border bg-card/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            <social.icon className="h-5 w-5" />
                                            <span className="sr-only">{social.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-primary/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    {dictionary.about.openForWork}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {dictionary.about.openForWorkDesc}
                                </p>
                                <Link href="/contact" className="text-primary hover:underline text-sm font-medium">
                                    {dictionary.about.getInTouch} →
                                </Link>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </section>
    );
}
