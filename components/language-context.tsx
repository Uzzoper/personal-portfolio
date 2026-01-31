"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { dictionaries, Locale, Dictionary } from "@/lib/dictionaries";

interface LanguageContextType {
    locale: Locale;
    dictionary: Dictionary;
    setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");
    const [dictionary, setDictionary] = useState<Dictionary>(dictionaries.en);

    useEffect(() => {
        const savedLocale = localStorage.getItem("locale") as Locale;
        const browserLocale = navigator.language.startsWith("pt") ? "pt" : "en";
        const initialLocale = savedLocale || browserLocale;

        setLocaleState(initialLocale);
        setDictionary(dictionaries[initialLocale]);
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        setDictionary(dictionaries[newLocale]);
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
