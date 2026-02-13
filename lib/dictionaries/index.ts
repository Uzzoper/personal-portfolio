import { en } from "./en";
import { pt } from "./pt";

export const dictionaries = {
    en,
    pt,
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof en;

export type ProjectTranslation = {
    title?: string;
    description: string;
};

export type Education = {
    degree: string;
    institution: string;
    period: string;
    status?: string;
    note?: string;
};
