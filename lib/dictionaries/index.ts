import { en } from "./en";
import { pt } from "./pt";

export const dictionaries = {
    en,
    pt,
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof en;
