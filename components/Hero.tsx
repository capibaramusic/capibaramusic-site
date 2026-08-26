"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { useLocale } from "./LocaleProvider";
import NavigationOverlay from "./NavigationOverlay";

export default function Hero() {
  const { availableLocales, content, locale, setLocale } = useLocale();
  const { hero, navigation } = content;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <section
      id="inicio"
      className="relative flex max-w-full flex-col px-8 pt-24 pb-4 min-[769px]:h-screen min-[769px]:flex-row min-[769px]:items-center min-[769px]:justify-between min-[769px]:overflow-hidden min-[769px]:px-[7%] min-[769px]:py-0"
    >
      {/* Idioma + Menú */}

      <div
        className="absolute top-4 right-8 z-60 flex items-center gap-4 min-[769px]:top-12 min-[769px]:right-[7%] min-[769px]:gap-7"
      >
        <div
          className="type-language-control flex items-center gap-2 min-[769px]:gap-3.5"
        >
          {availableLocales.map((localeOption) => (
            <button
              key={localeOption}
              type="button"
              onClick={() => setLocale(localeOption)}
              aria-label={
                hero.languageLabels[localeOption] ?? localeOption.toUpperCase()
              }
              aria-pressed={locale === localeOption}
              className="flex min-h-11 min-w-8 cursor-pointer items-center justify-center border-0 bg-transparent p-0 font-[inherit] min-[769px]:min-h-0 min-[769px]:min-w-0"
              style={{
                color: locale === localeOption ? "#D7FF3F" : "#222",
              }}
            >
              {localeOption.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={
            isMenuOpen ? navigation.closeLabel : navigation.openLabel
          }
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation-overlay"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 cursor-pointer flex-col justify-between border-0 bg-transparent px-1.5 py-3 min-[769px]:h-[22px] min-[769px]:w-8 min-[769px]:p-0"
        >
          <span
            className="h-0.5 w-full bg-[#222]"
          />

          <span
            className="h-0.5 w-full bg-[#222]"
          />

          <span
            className="h-0.5 w-full bg-[#222]"
          />
        </button>
      </div>

      <NavigationOverlay
        isOpen={isMenuOpen}
        onClose={closeMenu}
        triggerRef={menuButtonRef}
      />

      {/* Contenido */}

      <div
        className="relative z-2 min-w-0 max-w-full text-black min-[769px]:max-w-[72%]"
      >
        <h1
          className="type-hero-primary"
          style={{
            margin: 0,
          }}
        >
          {hero.brand}
        </h1>

        <h2
          className="type-hero-secondary"
          style={{
            margin: "8px 0 0",
          }}
        >
          {hero.association}
        </h2>

        <p
          className="type-hero-meta mt-4 min-[769px]:mt-7"
        >
          {hero.regions}
        </p>
      </div>

      <div
        className="relative z-2 mt-4 flex h-[clamp(120px,38vw,160px)] w-[clamp(120px,38vw,160px)] shrink-0 self-center items-center justify-center min-[769px]:mt-0 min-[769px]:h-[clamp(160px,28vw,340px)] min-[769px]:w-[clamp(160px,28vw,340px)]"
      >
        <Image
          src="/logo/logo capi vectorial.svg"
          alt=""
          width={716}
          height={716}
          sizes="(max-width: 570px) 160px, (max-width: 1215px) 28vw, 340px"
          priority
          unoptimized
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "brightness(0)",
          }}
        />
      </div>
    </section>
  );
}
