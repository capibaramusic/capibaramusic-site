"use client";

import { useLocale } from "./LocaleProvider";

export default function About() {
  const { content } = useLocale();
  const { about } = content;

  return (
    <section
      id="quienes-somos"
      className="px-8 py-10 min-[769px]:px-[8%] min-[769px]:py-24 lg:py-28"
    >
      <div className="grid grid-cols-1 gap-8 min-[769px]:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-20">
        <div>
          <p className="type-section-label mb-[18px] text-[#888]">
            {about.label}
          </p>

          <h2 className="type-hero-secondary m-0 max-w-4xl text-black">
            {about.heading}
          </h2>
        </div>

        <div className="w-full max-w-xl lg:pt-8">
          <p className="type-body m-0 text-[#333]">{about.paragraphs[0]}</p>

          <p className="type-body-small mt-5 mb-0 text-[#555] min-[769px]:mt-7">
            {about.paragraphs[1]}
          </p>

          <div className="type-text-link mt-7 flex flex-wrap gap-x-5 gap-y-3 font-[var(--type-weight-semibold)] min-[769px]:mt-9 min-[769px]:gap-x-7">
            {about.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className="underline decoration-1 underline-offset-4 hover:no-underline focus-visible:no-underline"
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 border-t border-l border-[#DDD] min-[769px]:mt-20 min-[769px]:grid-cols-3">
        {about.capabilities.map((capability) => (
          <article
            key={capability.title}
            className="border-r border-b border-[#DDD] p-5 min-[769px]:p-7 lg:p-8"
          >
            <h3 className="type-item-title m-0 font-[var(--type-weight-bold)] text-black">
              {capability.title}
            </h3>

            <p className="type-body-small mt-4 mb-0 text-[#555] min-[769px]:mt-6">
              {capability.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
