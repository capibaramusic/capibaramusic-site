"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  availableLocales,
  contentByLocale,
  defaultLocale,
  type Locale,
} from "../content";
import type { SiteContent } from "../content/types";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: SiteContent;
  availableLocales: readonly Locale[];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      content: contentByLocale[locale],
      availableLocales,
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}
