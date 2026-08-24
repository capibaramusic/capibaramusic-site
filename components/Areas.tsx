"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "./LocaleProvider";

export default function Areas() {
  const { content } = useLocale();
  const { areas } = content;
  const [activeArea, setActiveArea] = useState<number | null>(null);
  const areasGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !areasGridRef.current?.contains(event.target)
      ) {
        setActiveArea(null);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, []);

  return (
    <section
      id="areas-de-accion"
      className="px-[8%] py-20 md:py-24 lg:py-28"
    >
      <p className="type-section-label mb-[18px] text-[#888]">
        {areas.label}
      </p>

      <h2 className="type-section-heading mb-14 md:mb-16">
        {areas.heading[0]}
        <br />
        {areas.heading[1]}
      </h2>

      <div
        ref={areasGridRef}
        className="grid grid-cols-1 items-start border-t border-l border-[#DDD] md:grid-cols-2 lg:grid-cols-4"
      >
        {areas.items.map((area, index) => {
          const isExpanded = activeArea === index;
          const panelId = `area-panel-${index}`;

          return (
            <article key={area.title} className="min-w-0">
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() =>
                  setActiveArea((current) =>
                    current === index ? null : index,
                  )
                }
                className="relative flex h-44 w-full cursor-pointer flex-col border-0 border-r border-b border-[#DDD] bg-transparent p-6 text-left text-black focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1E1E1E] md:h-48 md:p-7 lg:p-8"
              >
                <span className="type-index text-[#999]">0{index + 1}</span>

                <span className="type-item-title mt-6 max-w-[85%] font-[var(--type-weight-bold)]">
                  {area.title}
                </span>

                <span
                  aria-hidden="true"
                  className="type-disclosure-mark absolute right-6 bottom-5 md:right-7 md:bottom-6 lg:right-8"
                >
                  {isExpanded ? "−" : "+"}
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
                    id={panelId}
                    className="border-r border-b border-l border-[#DDD] bg-[#F7F7F4] p-6 md:p-7 lg:p-8"
                  >
                    {area.status && (
                      <p className="type-section-label mt-0 mb-6 text-[#888]">
                        {area.status}
                      </p>
                    )}

                    <ul className="type-body-small m-0 list-none space-y-2 p-0 text-[#333]">
                      {area.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>

                    <div className="type-text-link mt-10 font-[var(--type-weight-semibold)]">
                      {area.cta.href ? (
                        <a
                          href={area.cta.href}
                          className="underline decoration-1 underline-offset-4 hover:no-underline focus-visible:no-underline"
                        >
                          {area.cta.label}
                        </a>
                      ) : (
                        <span className="underline decoration-1 underline-offset-4">
                          {area.cta.label}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
