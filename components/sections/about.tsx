"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Github as GithubIcon, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-context";
import { Education } from "@/lib/dictionaries";
import { IconType } from "react-icons";
import {
  FaJava,
  FaPython,
  FaBrain,
  FaBolt,
  FaCode,
  FaExternalLinkAlt,
  FaRobot,
  FaPlug,
  FaDatabase,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  SiSpring,
  SiPostgresql,
  SiSqlite,
  SiNodedotjs,
  SiDocker,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiGithub,
  SiVercel,
  SiRailway,
  SiRender,
  SiLinux,
  SiIntellijidea,
  SiPostman,
  SiDbeaver,
  SiAnthropic,
  SiLangchain,
  SiUpstash,
  SiSupabase,
  SiVitest,
  SiJest,
} from "react-icons/si";
import { Reveal } from "@/components/ui/reveal";

const skillIcons: Record<string, IconType> = {
  Java: FaJava,
  "Spring Boot": SiSpring,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  "Node.js": SiNodedotjs,
  Docker: SiDocker,
  React: SiReact,
  TypeScript: SiTypescript,
  "Next.js": SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  "Vue.js": SiVuedotjs,
  "HTML/CSS": SiHtml5,
  JavaScript: SiJavascript,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Railway: SiRailway,
  Render: SiRender,
  Linux: SiLinux,
  Intellij: SiIntellijidea,
  VSCode: VscCode,
  Postman: SiPostman,
  DBeaver: SiDbeaver,
  Python: FaPython,
  "LLMs & RAG": FaBrain,
  OpenCode: FaCode,
  "Claude Code": SiAnthropic,
  Ollama: FaBolt,
  "OpenRouter API": FaExternalLinkAlt,
  "AI Agents": SiLangchain,
  "Agent Skills": FaRobot,
  MCPs: FaPlug,
  Neon: FaDatabase,
  Upstash: SiUpstash,
  Supabase: SiSupabase,
  Vitest: SiVitest,
  Jest: SiJest,
};

const skills = {
  Backend: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "SQLite",
    "Node.js",
    "REST APIs",
    "JUnit",
    "Vitest",
    "Jest",
  ],
  Frontend: [
    "React",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "Vue.js",
    "HTML/CSS",
    "JavaScript",
    "Canvas API",
  ],
  DevOps: ["Docker", "Linux", "Vercel", "Railway", "Render", "CI/CD", "Neon", "Upstash", "Supabase"],
  "AI/ML": [
    "Python",
    "LLMs & RAG",
    "OpenCode",
    "Claude Code",
    "Ollama",
    "OpenRouter API",
    "AI Agents",
    "Agent Skills",
    "MCPs",
  ],
  "Tools & Others": [
    "Git",
    "GitHub",
    "Intellij",
    "VSCode",
    "Postman",
    "DBeaver",
    "Clean Architecture",
    "Agile",
    "pgAdmin",
    "Antigravity",
    "Kanban",
  ],
};

const socialLinks = [
  {
    href: "https://github.com/Uzzoper",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/juan-antonio-peruzzo-10a343315/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:juanperuzzo.dev@gmail.com", icon: Mail, label: "Email" },
];

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const timelineVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export function About() {
  const { dictionary } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="max-w-2xl">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {dictionary.about.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground"
            >
              {dictionary.about.intro}
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 shrink-0 mx-auto md:mx-0"
          >
            <Image
              src="/juan.jpeg"
              alt="Juan Peruzzo"
              fill
              sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              className="rounded-full object-cover border-4 border-primary/20 shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <section>
                <h3 className="text-2xl font-bold mb-4">
                  {dictionary.about.whoIAmTitle}
                </h3>
                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                  {dictionary.about.whoIAmContent.map(
                    (paragraph: string, index: number) => (
                      <p key={index}>{paragraph}</p>
                    ),
                  )}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.1}>
              <section>
                <h3 className="text-2xl font-bold mb-6">
                  {dictionary.about.educationTitle}
                </h3>
                <div className="space-y-8">
                  {dictionary.about.education.map(
                    (item: Education, index: number) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={timelineVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className={`relative pl-6 border-l-2 ${
                          index === 0
                            ? "border-primary"
                            : "border-muted-foreground/30"
                        }`}
                      >
                        <div
                          className={`absolute w-3 h-3 rounded-full -left-[7px] top-2 ${
                            index === 0
                              ? "bg-primary"
                              : "bg-muted-foreground/30"
                          }`}
                        />
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                          <h4
                            className={`text-lg font-bold ${
                              index === 0
                                ? ""
                                : "text-muted-foreground font-semibold"
                            }`}
                          >
                            {item.degree}
                          </h4>
                          <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                            {item.period}
                          </span>
                        </div>
                        <p
                          className={`font-medium ${
                            index === 0
                              ? "text-foreground italic"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.institution}
                        </p>
                        {item.note && (
                          <div className="mt-3 p-3 rounded-md bg-muted/50 border-l-4 border-yellow-500/50">
                            <p className="text-sm text-muted-foreground">
                              {item.note}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    ),
                  )}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.2}>
              <section>
                <h3 className="text-2xl font-bold mb-6">
                  {dictionary.about.skillsTitle}
                </h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {Object.entries(skills).map(([category, items], i) => (
                    <motion.div
                      key={category}
                      custom={i}
                      variants={skillCategoryVariants}
                    >
                      <Card className="h-full">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-xl">
                            {category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <motion.div
                            className="flex flex-wrap gap-2.5"
                            variants={{
                              hidden: {},
                              show: {
                                transition: {
                                  staggerChildren: 0.03,
                                  delayChildren: 0.1,
                                },
                              },
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                          >
                            {items.map((skill) => {
                              const Icon = skillIcons[skill];
                              return (
                                <motion.div
                                  key={skill}
                                  variants={{
                                    hidden: { opacity: 0, scale: 0.85 },
                                    show: {
                                      opacity: 1,
                                      scale: 1,
                                      transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                      },
                                    },
                                  }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="gap-1.5 text-sm px-3 py-1.5"
                                  >
                                    {Icon && <Icon className="h-4 w-4" />}
                                    {skill}
                                  </Badge>
                                </motion.div>
                              );
                            })}
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal delay={0.3}>
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
            </Reveal>

            <Reveal delay={0.4}>
              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    {dictionary.about.openForWork}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {dictionary.about.openForWorkDesc}
                  </p>
                  <Link
                    href="/#contact"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    {dictionary.about.getInTouch} →
                  </Link>
                </CardContent>
              </Card>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
