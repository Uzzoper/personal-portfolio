"use client";

import { useLanguage } from "./language-context";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
    const { locale, setLocale } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            className="font-bold text-xs"
            onClick={() => setLocale(locale === "en" ? "pt" : "en")}
            title={locale === "en" ? "Mudar para Português" : "Change to English"}
        >
            {locale === "en" ? "EN" : "PT"}
        </Button>
    );
}
