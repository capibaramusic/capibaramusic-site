"use client";

import type { NewsContent } from "../content/types";
import { useLocale } from "./LocaleProvider";

type NewsItem = NewsContent["items"][number];

const moduleClassName =
  "h-44 min-w-0 border-r border-b border-[#DDD] bg-[#F7F7F4] p-5 text-black transition-colors duration-200 hover:bg-[#D7FF3F] md:h-48 md:p-6";

function NewsBox({ item }: { item: NewsItem }) {
  const content = (
    <>
      <span className="type-index text-[#888]">{item.date}</span>
      <h3 className="mt-5 text-[clamp(1.1rem,1.3vw,1.4rem)] leading-[1.12] font-[var(--type-weight-bold)] tracking-[-0.02em] text-black">
        {item.title}
      </h3>
    </>
  );
  const className = `${moduleClassName} flex flex-col`;

  if (item.href) {
    return (
      <a href={item.href} className={className}>
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}

function AllNewsLink({ cta }: { cta: NewsContent["allNewsCta"] }) {
  const content = (
    <>
      <span>{cta.label}</span>
      <span aria-hidden="true">+</span>
    </>
  );
  const className =
    "type-text-link inline-flex items-center gap-2 text-black underline decoration-1 underline-offset-4";

  if (cta.href) {
    return (
      <a href={cta.href} className={className}>
        {content}
      </a>
    );
  }

  return <span className={className}>{content}</span>;
}

export default function News() {
  const { content } = useLocale();
  const { news } = content;

  return (
    <section
      id="news"
      className="border-t border-[#DDD] px-[8%] py-14 md:py-16 lg:py-20"
    >
      <p className="type-section-label text-[#888]">{news.label}</p>

      <h2 className="type-section-heading mt-5 mb-10 md:mb-12">
        {news.heading}
      </h2>

      <div className="grid grid-cols-1 border-t border-l border-[#DDD] md:grid-cols-2 lg:grid-cols-4">
        {news.items.map((item) => (
          <NewsBox key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-6">
        <AllNewsLink cta={news.allNewsCta} />
      </div>
    </section>
  );
}
