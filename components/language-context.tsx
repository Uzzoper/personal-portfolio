"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Locale, Dictionary } from "@/lib/dictionaries";

interface LanguageContextType {
    locale: Locale;
    dictionary: Dictionary;
    setLocale: (locale: Locale) => void;
}

const DEFAULT_LOCALE: Locale = "en";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getBrowserLocale(): Locale {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved === "en" || saved === "pt") {
        return saved;
    }
    return navigator.language.startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // Always start with the default locale so server and client HTML match.
    // The browser locale is only readable after hydration, so we keep a single
    // piece of state and derive the dictionary from it.
    const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
    const dictionary = dictionaries[locale];

    // After hydration, sync to the user's real locale
    useEffect(() => {
        const browserLocale = getBrowserLocale();
        if (browserLocale !== DEFAULT_LOCALE) {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- One-time post-hydration sync: the browser locale must be read after mount (reading it during render would cause a hydration mismatch with the SSR HTML), and this effect only runs once on mount.
            setLocaleState(browserLocale);
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("locale", newLocale);
    };

    return (
        <LanguageContext.Provider value={{ locale, dictionary, setLocale }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}