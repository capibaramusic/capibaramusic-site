"use client";

import { useEffect, useRef, type RefObject } from "react";
import { siteFeatures } from "../config/siteFeatures";
import { useLocale } from "./LocaleProvider";

type NavigationOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

export default function NavigationOverlay({
  isOpen,
  onClose,
  triggerRef,
}: NavigationOverlayProps) {
  const { content } = useLocale();
  const { navigation } = content;
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const overlay = overlayRef.current;
    const triggerElement = triggerRef.current;
    const firstLink = overlay?.querySelector<HTMLElement>("a[href]");
    const focusFrame = window.requestAnimationFrame(() => firstLink?.focus());

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !overlay) {
        return;
      }

      const overlayElements = Array.from(
        overlay.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const focusableElements = triggerElement
        ? [triggerElement, ...overlayElements]
        : overlayElements;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus({ preventScroll: true });
    };
  }, [isOpen, onClose, triggerRef]);

  function navigateTo(target: string) {
    const destination = document.getElementById(target);

    onClose();
    window.requestAnimationFrame(() => {
      destination?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div
      ref={overlayRef}
      id="site-navigation-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={navigation.label}
      aria-hidden={!isOpen}
      inert={!isOpen}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className={`fixed inset-0 z-50 flex h-[100dvh] max-w-full items-center overflow-y-auto bg-[#F7F7F4] px-8 py-20 transition-[opacity,visibility] duration-300 ease-out min-[769px]:px-[7%] ${
        isOpen
          ? "visible pointer-events-auto opacity-100"
          : "invisible pointer-events-none opacity-0"
      }`}
    >
      <nav
        aria-label={navigation.label}
        className={`w-full transition-[transform,opacity] duration-300 ease-out ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <ul className="m-0 flex list-none flex-col gap-3 p-0 min-[769px]:gap-5">
          {navigation.items
            .filter(
              (item) => item.target !== "news" || siteFeatures.news,
            )
            .map((item) => (
            <li key={item.target}>
              <a
                href={`#${item.target}`}
                className="type-section-heading inline-block text-[#1E1E1E] no-underline transition-opacity duration-200 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E1E1E]"
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(item.target);
                }}
              >
                {item.label}
              </a>
            </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
