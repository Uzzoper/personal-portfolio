"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-context";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary } = useLanguage();

  const navLinks = [
    { href: "/", label: dictionary.header.home },
    { href: "/#projects", label: dictionary.header.projects },
    { href: "/#about", label: dictionary.header.about },
    { href: "/#contact", label: dictionary.header.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Juan Peruzzo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 border-l pl-4">
            <LanguageToggle />
            <ModeToggle />
          </div>
          <Button asChild className="w-28">
            <Link href="/#contact">{dictionary.header.hireMe}</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-6">
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 items-center mt-2 border-t pt-4">
                <LanguageToggle />
                <span className="text-sm text-muted-foreground">Select Language</span>
              </div>
              <div className="flex gap-4 items-center">
                <ModeToggle />
                <span className="text-sm text-muted-foreground">{dictionary.header.toggleTheme}</span>
              </div>
              <Button asChild className="mt-4 w-28">
                <Link href="/#contact" onClick={() => setIsOpen(false)}>{dictionary.header.hireMe}</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}