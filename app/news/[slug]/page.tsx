import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsArticle from "../../../components/NewsArticle";
import {
  getNewsArticle,
  newsArticles,
} from "../../../content/news/articles";
import { defaultLocale } from "../../../content";

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    return {};
  }

  const localizedArticle = article.translations[defaultLocale];

  return {
    title: `${localizedArticle.title} | Capibara Music`,
    description: localizedArticle.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return <NewsArticle article={article} />;
}
