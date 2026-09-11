import en from "./en";
import es from "./es";

// Controls discovery on Home and Navigation; direct article routes stay available.
export const NEWS_VISIBLE = false;

export const contentByLocale = {
  en,
  es,
} as const;

export type Locale = keyof typeof contentByLocale;

export const availableLocales = Object.keys(contentByLocale) as Locale[];

export const defaultLocale: Locale = "en";
