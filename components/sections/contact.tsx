"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageSquare, Phone, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/components/language-context";

export function Contact() {
    const { dictionary } = useLanguage();
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const CONTACT_EMAIL = "juanperuzzo13@gmail.com";
    const CONTACT_PHONE = "+55 (42) 99833-1363";
    const WHATSAPP_LINK = "https://wa.me/5542998331363";

    const handleCopy = async (text: string, type: 'email' | 'phone') => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === 'email') {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
                toast.success(dictionary.contact.copyEmail + "!");
            } else {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
                toast.success(dictionary.contact.copyPhone + "!");
            }
        } catch {
            toast.error("Failed to copy text.");
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container max-w-screen-xl mx-auto px-4">

                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">{dictionary.contact.title}</h2>
                    <p className="text-xl text-muted-foreground">
                        {dictionary.contact.subtitle}
                    </p>
                </div>

                <div className="max-w-2xl mx-auto space-y-8">

                    <Card>
                        <CardHeader>
                            <CardTitle>{dictionary.contact.infoTitle}</CardTitle>
                            <CardDescription>
                                {dictionary.contact.infoDesc}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">

                            {/* Email */}
                            <div className="flex items-start gap-4 p-4 rounded-lg border bg-card/40 backdrop-blur-sm shadow-sm">
                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                                    <p className="font-semibold break-all">{CONTACT_EMAIL}</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleCopy(CONTACT_EMAIL, 'email')}
                                    title={dictionary.contact.copyEmail}
                                >
                                    {copiedEmail ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>

                            {/* Phone / WhatsApp */}
                            <div className="flex items-start gap-4 p-4 rounded-lg border bg-card/40 backdrop-blur-sm shadow-sm">
                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                                    <p className="font-semibold">{CONTACT_PHONE}</p>
                                    <Link
                                        href={WHATSAPP_LINK}
                                        target="_blank"
                                        className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium mt-1"
                                    >
                                        <MessageSquare className="h-3 w-3 mr-1" />
                                        {dictionary.contact.chatWhatsApp}
                                    </Link>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleCopy(CONTACT_PHONE, 'phone')}
                                    title={dictionary.contact.copyPhone}
                                >
                                    {copiedPhone ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>

                            {/* Social Links */}
                            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Button asChild variant="outline" size="lg" className="w-full">
                                    <Link href="https://github.com/Uzzoper" target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-5 w-5" />
                                        GitHub
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="w-full">
                                    <Link href="https://www.linkedin.com/in/juan-antonio-peruzzo-10a343315/" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="mr-2 h-5 w-5" />
                                        LinkedIn
                                    </Link>
                                </Button>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Availability Status */}
                    <Card className="border-primary/20">
                        <CardContent className="flex items-center justify-center gap-4 py-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <p className="font-medium text-primary text-center">
                                {dictionary.contact.availability}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
