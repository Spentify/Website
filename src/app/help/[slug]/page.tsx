import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HelpArticleStep, {
  FormattedHelpText,
} from "@/components/help-article-step";
import {
  getHelpArticle,
  helpArticles,
  helpTopics,
} from "@/lib/help-articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return helpArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getHelpArticle(slug);

  if (!article) {
    return { title: "Article not found | Spentify" };
  }

  return {
    title: `${article.title} | Spentify Help Center`,
    description: article.description,
    alternates: {
      canonical: `/help/${article.slug}`,
    },
  };
}

export default async function HelpArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getHelpArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = helpArticles
    .filter(
      (candidate) =>
        candidate.category === article.category &&
        candidate.slug !== article.slug,
    )
    .slice(0, 3);
  const topic = helpTopics.find(
    (candidate) => candidate.name === article.category,
  );

  return (
    <main>
      <article className="container px-5 py-10 md:px-0 md:py-16">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-gray-500"
        >
          <Link href="/help" className="transition hover:text-[#0e76d9]">
            Help Center
          </Link>
          <span aria-hidden="true">/</span>
          {topic ? (
            <Link
              href={`/help/topics/${topic.slug}`}
              className="transition hover:text-[#0e76d9]"
            >
              {topic.name}
            </Link>
          ) : (
            <span>{article.category}</span>
          )}
        </nav>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#0e76d9]">
              {article.category}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              {article.title}
            </h1>

            <div className="mt-8 border-t border-gray-200 pt-8">
              {article.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-5 text-lg leading-8 text-gray-700"
                >
                  <FormattedHelpText text={paragraph} />
                </p>
              ))}

              {article.steps && (
                <ol className="mt-8 space-y-5">
                  {article.steps.map((step, index) => (
                    <HelpArticleStep
                      key={typeof step === "string" ? step : step.text}
                      number={index + 1}
                      step={step}
                    />
                  ))}
                </ol>
              )}

              {article.note && (
                <aside className="mt-8 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4">
                  <p className="text-sm font-semibold text-[#0e76d9]">
                    Good to know
                  </p>
                  <p className="mt-1.5 leading-7 text-gray-700">
                    <FormattedHelpText text={article.note} />
                  </p>
                </aside>
              )}
            </div>

            <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="font-semibold text-gray-950">
                Was this article helpful?
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                If you still need help, email our support team and we&apos;ll
                get back to you.
              </p>
              <a
                href="mailto:spentify.app@gmail.com"
                className="mt-4 inline-flex rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Contact support
              </a>
            </div>
          </div>

          <aside className="lg:border-l lg:border-gray-200 lg:pl-8">
            <h2 className="text-sm font-semibold text-gray-950">
              {relatedArticles.length > 0
                ? "Related articles"
                : "More help"}
            </h2>
            {relatedArticles.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {relatedArticles.map((relatedArticle) => (
                  <li key={relatedArticle.slug}>
                    <Link
                      href={`/help/${relatedArticle.slug}`}
                      className="text-sm leading-6 text-gray-600 transition hover:text-[#0e76d9]"
                    >
                      {relatedArticle.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <Link
                href="/help"
                className="mt-4 inline-block text-sm text-[#0e76d9] hover:underline"
              >
                Browse all help articles
              </Link>
            )}
          </aside>
        </div>
      </article>
    </main>
  );
}
