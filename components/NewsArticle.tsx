"use client";

import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type { NewsArticle } from "../content/news/articles";
import { useLocale } from "./LocaleProvider";
import NewsImage from "./NewsImage";

const editorialLinkClass =
  "type-text-link text-black underline decoration-1 underline-offset-4";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={editorialLinkClass}
    >
      {children}
    </a>
  );
}

export default function NewsArticle({ article }: { article: NewsArticle }) {
  const { availableLocales, content, locale, setLocale } = useLocale();
  const localizedArticle = article.translations[locale];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F7F4] px-8 py-10 text-[#1E1E1E] min-[769px]:px-[8%] min-[769px]:py-16 lg:py-20">
      <article className="mx-auto max-w-[1040px]">
        <header>
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="type-section-label text-[#888]">
                {content.news.label}
              </p>
              <p className="type-index text-[#888]">{article.date}</p>
            </div>

            <div className="type-language-control flex shrink-0 items-center gap-2">
              {availableLocales.map((localeOption) => (
                <button
                  key={localeOption}
                  type="button"
                  onClick={() => setLocale(localeOption)}
                  aria-label={
                    content.hero.languageLabels[localeOption] ??
                    localeOption.toUpperCase()
                  }
                  aria-pressed={locale === localeOption}
                  className="cursor-pointer border-0 bg-transparent p-0 font-[inherit]"
                  style={{
                    color: locale === localeOption ? "#D7FF3F" : "#222",
                  }}
                >
                  {localeOption.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid items-start gap-8 min-[769px]:grid-cols-[minmax(0,1.7fr)_minmax(240px,0.8fr)] min-[769px]:gap-12">
            <div>
              <h1 className="text-[clamp(2.25rem,4.2vw,4rem)] leading-[0.98] font-[var(--type-weight-bold)] tracking-[-0.045em]">
                {localizedArticle.title}
              </h1>

              <p className="mt-6 text-[clamp(1.15rem,1.7vw,1.45rem)] leading-[1.4] font-[var(--type-weight-medium)] tracking-[-0.02em] text-[#444]">
                {localizedArticle.excerpt}
              </p>
            </div>

            <NewsImage
              src={article.coverImage.src}
              width={article.coverImage.width}
              height={article.coverImage.height}
              label={article.coverImage.label}
              priority
              sizes="(min-width: 769px) 320px, 100vw"
              className="block h-auto w-full min-[769px]:aspect-[5/3] min-[769px]:object-cover"
              placeholderClassName="aspect-[5/3] w-full"
            />
          </div>
        </header>

        <div className="mx-auto mt-10 max-w-[700px] min-[769px]:mt-12">
          {localizedArticle.body.map((block, blockIndex) => {
            if (block.type === "paragraph") {
              return (
                <p
                  key={blockIndex}
                  className="mt-5 text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-[#333] first:mt-0"
                >
                  {block.content.map((segment, segmentIndex) => {
                    const link = segment.linkId
                      ? article.links?.[segment.linkId]
                      : undefined;

                    return link ? (
                      <ExternalLink key={segmentIndex} href={link.href}>
                        {segment.text}
                      </ExternalLink>
                    ) : (
                      <Fragment key={segmentIndex}>{segment.text}</Fragment>
                    );
                  })}
                </p>
              );
            }

            if (block.type === "heading") {
              return (
                <h2
                  key={blockIndex}
                  className="mt-9 text-[clamp(1.35rem,2vw,1.75rem)] leading-[1.15] font-[var(--type-weight-bold)] tracking-[-0.025em]"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "image") {
              const image = article.internalImages[block.imageId];
              return image ? (
                <NewsImage
                  key={blockIndex}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  label={image.label}
                  sizes="(min-width: 769px) 680px, 100vw"
                  className="mx-auto my-8 block h-auto w-full max-w-[680px] min-[769px]:my-9"
                  placeholderClassName="mx-auto my-8 aspect-[3/2] w-full max-w-[680px] min-[769px]:my-9"
                />
              ) : null;
            }

            if (block.type === "link") {
              const link = article.links?.[block.linkId];
              return link ? (
                <p key={blockIndex} className="mt-5">
                  <ExternalLink href={link.href}>{block.label}</ExternalLink>
                </p>
              ) : null;
            }

            if (block.type === "video" && article.video) {
              return (
                <div
                  key={blockIndex}
                  className="mx-auto my-8 aspect-video w-full overflow-hidden min-[769px]:my-10"
                >
                  <iframe
                    src={article.video.embedUrl}
                    title={localizedArticle.videoTitle ?? ""}
                    className="block h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              );
            }

            return null;
          })}
        </div>

        <div className="mx-auto mt-12 max-w-[700px] border-t border-[#DDD] pt-6 min-[769px]:mt-14">
          <Link href="/#news" className={editorialLinkClass}>
            {content.news.backToNews}
          </Link>
        </div>
      </article>
    </main>
  );
}
