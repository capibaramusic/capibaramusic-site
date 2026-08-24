import en from "./en";
import es from "./es";

export const contentByLocale = {
  en,
  es,
} as const;

export type Locale = keyof typeof contentByLocale;

export const availableLocales = Object.keys(contentByLocale) as Locale[];

export const defaultLocale: Locale = "en";
