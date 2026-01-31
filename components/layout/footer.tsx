"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/language-context";

export function Footer() {
  const { dictionary } = useLanguage();

  const footerLinks = [
    { href: "/", label: dictionary.header.home },
    { href: "/projects", label: dictionary.header.projects },
    { href: "/about", label: dictionary.header.about },
    { href: "/contact", label: dictionary.header.contact },
  ];

  const socialLinks = [
    { href: "https://github.com/Uzzoper", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/juan-antonio-peruzzo-10a343315/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:juanperuzzo13@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Juan Peruzzo</h3>
            <p className="text-sm text-muted-foreground">
              {dictionary.hero.subtitle.split('.')[0]}.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">{dictionary.header.home}</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">{dictionary.about.connect}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Juan Peruzzo. {dictionary.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}