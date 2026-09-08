"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Ref,
  type RefCallback,
} from "react";
import {
  artists,
  type ArtistLocale,
} from "../content/artists";
import { useLocale } from "./LocaleProvider";

type RosterProject = {
  slug: string;
  title: string;
  headline: string;
  genres: readonly string[];
  bookingTerritory?: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  links: ReadonlyArray<{
    label: string;
    href: string;
  }>;
};

function getTitleSize(title: string) {
  const length = title.replace(/\s/g, "").length;

  if (length <= 12) {
    return "text-[clamp(2.25rem,4.6vw,5rem)]";
  }

  if (length <= 18) {
    return "text-[clamp(2rem,3.8vw,4rem)]";
  }

  if (length <= 24) {
    return "text-[clamp(1.7rem,3.2vw,3.25rem)]";
  }

  return "text-[clamp(1.35rem,2.6vw,2.75rem)]";
}

function HoverTitle({ project }: { project: RosterProject }) {
  return (
    <span
      className={`${getTitleSize(project.title)} block max-w-full text-center font-[var(--type-weight-extrabold)] leading-[0.92] tracking-[-0.035em] uppercase`}
    >
      {project.title}
    </span>
  );
}

type RosterModuleProps = {
  project: RosterProject;
  isExpanded: boolean;
  openLabel: string;
  closeLabel: string;
  onOpen: () => void;
  onClose: () => void;
  panelRef?: Ref<HTMLDivElement>;
  panelIdPrefix?: string;
  triggerRef: RefCallback<HTMLButtonElement>;
};

function RosterModule({
  project,
  isExpanded,
  openLabel,
  closeLabel,
  onOpen,
  onClose,
  panelRef,
  panelIdPrefix = "roster-panel",
  triggerRef,
}: RosterModuleProps) {
  const panelId = `${panelIdPrefix}-${project.slug}`;

  return (
    <article className="w-full shrink-0 border border-[#C9C9C4] bg-[#D9D9D4] text-[#1E1E1E]">
      <button
        ref={triggerRef}
        type="button"
        aria-label={`${openLabel} ${project.title}`}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={onOpen}
        className="group relative block aspect-square w-full cursor-pointer overflow-hidden border-0 bg-[#D9D9D4] p-0 text-left"
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) calc(100vw - 32px), 32vw"
          className="object-cover"
        />

        <span className="absolute inset-0 flex flex-col items-center justify-center bg-[#D7FF3F]/75 p-4 text-center opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 min-[769px]:p-6">
          <HoverTitle project={project} />
          <span
            className="mt-5 block max-w-full text-center text-[clamp(0.75rem,1vw,0.95rem)] leading-[1.25] font-[var(--type-weight-semibold)] tracking-[0.04em] text-balance text-black uppercase"
          >
            {project.genres.join(" · ")}
          </span>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-[250ms] ease-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isExpanded}
        inert={!isExpanded}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            ref={panelRef}
            id={panelId}
            className="relative border-t border-[#C9C9C4] bg-[#F7F7F4] p-5 min-[769px]:p-8"
          >
            <button
              type="button"
              aria-label={`${closeLabel} ${project.title}`}
              onClick={onClose}
              className="type-close-control absolute top-4 right-4 flex h-9 w-9 cursor-pointer items-center justify-center border-0 bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E]"
            >
              ×
            </button>

            <h3 className="type-feature-title m-0 pr-10">
              {project.headline}
            </h3>
            <p
              className="mt-4 mb-0 text-[clamp(0.75rem,1vw,0.95rem)] leading-[1.25] font-[var(--type-weight-semibold)] tracking-[0.04em] text-black uppercase"
            >
              {project.genres.join(" · ")}
            </p>
            {project.bookingTerritory && (
              <p className="mt-2 mb-0 text-xs leading-relaxed font-normal text-[#666]">
                Booking: {project.bookingTerritory}
              </p>
            )}
            <p className="type-body-small mt-7 mb-0">
              {project.description}
            </p>

            {project.links.length > 0 && (
              <div className="type-footer-label mt-8 flex flex-wrap items-center gap-2">
                {project.links.map((link, index) => (
                  <span
                    key={`${link.label}-${index}`}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    {index > 0 && <span aria-hidden="true">·</span>}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline underline-offset-4 hover:underline focus-visible:underline"
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Roster() {
  const { content, locale } = useLocale();
  const { roster } = content;
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const scrollPosition = useRef(0);
  const closeTimer = useRef<number | null>(null);
  const expandedMobilePanelRef = useRef<HTMLDivElement>(null);
  const expandedDesktopPanelRef = useRef<HTMLDivElement>(null);
  const projectTriggers = useRef(new Map<string, HTMLButtonElement>());
  const projects: RosterProject[] = artists.map((artist) => {
    const localizedContent = artist.content[locale as ArtistLocale];
    const links = artist.links.map(({ label, url }) => ({
      label,
      href: url,
    }));

    return {
      slug: artist.slug,
      title: artist.name,
      headline: localizedContent.headline,
      genres: localizedContent.genres,
      bookingTerritory: artist.bookingTerritory?.[locale as ArtistLocale],
      image: {
        src: artist.image,
        alt: localizedContent.imageAlt,
      },
      description: localizedContent.description,
      links,
    };
  });
  const columns = Array.from({ length: 3 }, (_, columnIndex) =>
    projects.filter(
      (_, projectIndex) => projectIndex % 3 === columnIndex,
    ),
  );

  useEffect(
    () => () => {
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current);
      }
    },
    [],
  );

  const closeProject = useCallback((
    projectSlug: string,
    restoreTriggerFocus = true,
    triggerKey = projectSlug,
  ) => {
    const previousScrollPosition = scrollPosition.current;

    setIsPanelOpen(false);

    if (!restoreTriggerFocus) {
      return;
    }

    closeTimer.current = window.setTimeout(() => {
      projectTriggers.current
        .get(triggerKey)
        ?.focus({ preventScroll: true });
      window.scrollTo({ top: previousScrollPosition, behavior: "auto" });
    }, 250);
  }, []);

  useEffect(() => {
    if (!isPanelOpen || !selectedSlug) {
      return;
    }

    const openProjectSlug = selectedSlug;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (
        target instanceof Node &&
        (expandedMobilePanelRef.current?.contains(target) ||
          expandedDesktopPanelRef.current?.contains(target))
      ) {
        return;
      }

      closeProject(openProjectSlug, false);
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [closeProject, isPanelOpen, selectedSlug]);

  function openProject(projectSlug: string) {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
    }

    scrollPosition.current = window.scrollY;
    setIsPanelOpen(false);
    setSelectedSlug(projectSlug);
    window.requestAnimationFrame(() => setIsPanelOpen(true));
  }

  return (
    <section
      id="roster"
      className="max-w-full border-t border-[#DDD] px-4 py-12 min-[769px]:px-[2%] min-[769px]:py-24 lg:py-28"
    >
      <h2 className="type-section-heading mb-10 px-4 min-[769px]:mb-16 min-[769px]:px-[6%]">
        {roster.heading}
      </h2>

      <div
        aria-hidden="true"
        className="type-disclosure-mark mb-2 px-4 text-right min-[769px]:hidden"
      >
        →
      </div>

      <div className="mobile-snap-carousel w-full snap-x snap-mandatory overflow-x-auto min-[769px]:hidden">
        <div className="flex w-full items-start">
          {projects.map((project) => {
            const triggerKey = `mobile:${project.slug}`;

            return (
              <div
                key={project.slug}
                className="w-full min-w-0 flex-none snap-center"
              >
                <RosterModule
                  project={project}
                  isExpanded={
                    isPanelOpen && selectedSlug === project.slug
                  }
                  openLabel={roster.openLabel}
                  closeLabel={roster.closeLabel}
                  onOpen={() => openProject(project.slug)}
                  onClose={() =>
                    closeProject(project.slug, true, triggerKey)
                  }
                  panelRef={
                    isPanelOpen && selectedSlug === project.slug
                      ? expandedMobilePanelRef
                      : undefined
                  }
                  panelIdPrefix="mobile-roster-panel"
                  triggerRef={(element) => {
                    if (element) {
                      projectTriggers.current.set(triggerKey, element);
                    } else {
                      projectTriggers.current.delete(triggerKey);
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden overflow-x-auto min-[769px]:block">
        <div className="flex min-w-[720px] items-start gap-0">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex w-1/3 flex-none flex-col gap-0 ${
                columnIndex === 1 ? "pt-[4%]" : ""
              }`}
            >
              {column.map((project) => {
                const triggerKey = `desktop:${project.slug}`;

                return (
                <RosterModule
                  key={project.slug}
                  project={project}
                  isExpanded={
                    isPanelOpen && selectedSlug === project.slug
                  }
                  openLabel={roster.openLabel}
                  closeLabel={roster.closeLabel}
                  onOpen={() => openProject(project.slug)}
                  onClose={() =>
                    closeProject(project.slug, true, triggerKey)
                  }
                  panelRef={
                    isPanelOpen && selectedSlug === project.slug
                      ? expandedDesktopPanelRef
                      : undefined
                  }
                  triggerRef={(element) => {
                    if (element) {
                      projectTriggers.current.set(triggerKey, element);
                    } else {
                      projectTriggers.current.delete(triggerKey);
                    }
                  }}
                />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
