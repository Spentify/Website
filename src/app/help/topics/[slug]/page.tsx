import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getHelpTopic,
  helpArticles,
  helpTopics,
} from "@/lib/help-articles";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return helpTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getHelpTopic(slug);

  if (!topic) {
    return { title: "Topic not found | Spentify" };
  }

  return {
    title: `${topic.name} | Spentify Help Center`,
    description: topic.description,
    alternates: {
      canonical: `/help/topics/${topic.slug}`,
    },
  };
}

export default async function HelpTopicPage({
  params,
}: TopicPageProps) {
  const { slug } = await params;
  const topic = getHelpTopic(slug);

  if (!topic) {
    notFound();
  }

  const articles = helpArticles.filter(
    (article) => article.category === topic.name,
  );

  return (
    <main>
      <section className="border-b border-[#e8ecf1] bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_100%)]">
        <div className="container px-5 py-12 md:px-0 md:py-16">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <Link href="/help" className="transition hover:text-[#0e76d9]">
              Help Center
            </Link>
            <span aria-hidden="true">/</span>
            <span>{topic.name}</span>
          </nav>

          <div className="mt-8 flex items-start gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0e76d9]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d={topic.iconPath}
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
                {topic.name}
              </h1>
              <p className="mt-3 text-lg text-gray-600">
                {topic.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-5 py-12 md:px-0 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
            Articles
          </h2>
          <p className="text-sm text-gray-500">
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </p>
        </div>

        <div className="mt-6 divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/help/${article.slug}`}
              className="group flex items-center justify-between gap-6 px-5 py-5 transition hover:bg-blue-50/60 md:px-6"
            >
              <span className="font-medium text-gray-950 group-hover:text-[#0e76d9]">
                {article.title}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#0e76d9]"
              >
                <path
                  d="m9 18 6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>

        <Link
          href="/help"
          className="mt-8 inline-flex text-sm font-medium text-[#0e76d9] hover:underline"
        >
          ← Back to Help Center
        </Link>
      </section>
    </main>
  );
}
