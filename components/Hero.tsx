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
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 7%",
        overflow: "hidden",
      }}
    >
      {/* Idioma + Menú */}

      <div
        style={{
          position: "absolute",
          top: "48px",
          right: "7%",
          display: "flex",
          alignItems: "center",
          gap: "28px",
          zIndex: 60,
        }}
      >
        <div
          className="type-language-control"
          style={{
            display: "flex",
            gap: "14px",
          }}
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
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                color: locale === localeOption ? "#D7FF3F" : "#222",
                cursor: "pointer",
                font: "inherit",
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
          style={{
            border: "none",
            background: "transparent",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "32px",
            height: "22px",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: "100%",
              height: "2px",
              background: "#222",
            }}
          />

          <span
            style={{
              width: "100%",
              height: "2px",
              background: "#222",
            }}
          />

          <span
            style={{
              width: "100%",
              height: "2px",
              background: "#222",
            }}
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
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "72%",
          color: "#000000",
        }}
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
          className="type-hero-meta"
          style={{
            marginTop: "28px",
          }}
        >
          {hero.regions}
        </p>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "clamp(160px, 28vw, 340px)",
          height: "clamp(160px, 28vw, 340px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
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
