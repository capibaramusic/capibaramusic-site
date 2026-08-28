"use client";

import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "../content/news/articles";
import { useLocale } from "./LocaleProvider";

export default function News() {
  const { content, locale } = useLocale();
  const { news } = content;
  const orderedArticles = [...newsArticles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <section
      id="news"
      className="border-t border-[#DDD] px-8 py-10 min-[769px]:px-[8%] min-[769px]:py-16 lg:py-20"
    >
      <p className="type-section-label text-[#888]">{news.label}</p>

      <h2 className="type-section-heading mt-5 mb-10 min-[769px]:mb-12">
        {news.heading}
      </h2>

      <div className="grid grid-cols-1 border-t border-l border-[#DDD] min-[769px]:grid-cols-2 lg:grid-cols-4">
        {orderedArticles.map((article) => {
          const localizedArticle = article.translations[locale];

          return (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group flex min-w-0 flex-col border-r border-b border-[#DDD] bg-[#F7F7F4] text-black transition-colors duration-200 hover:bg-[#D7FF3F]"
            >
              <Image
                src={article.coverImage.src}
                alt=""
                width={article.coverImage.width}
                height={article.coverImage.height}
                sizes="(min-width: 1024px) 21vw, (min-width: 769px) 42vw, 100vw"
                className="block aspect-[4/3] w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-5 min-[769px]:p-6">
                <span className="type-index text-[#888]">{article.date}</span>
                <h3 className="mt-5 text-[clamp(1.15rem,1.5vw,1.4rem)] leading-[1.12] font-[var(--type-weight-bold)] tracking-[-0.02em] text-black">
                  {localizedArticle.title}
                </h3>
                <p className="type-body-small mt-4 line-clamp-3 text-[#666]">
                  {localizedArticle.excerpt}
                </p>
                <span className="type-text-link mt-6 inline-flex items-center gap-2 self-start text-black underline decoration-1 underline-offset-4">
                  {news.readMore} <span aria-hidden="true">+</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
