"use client";

import Link from "next/link";
import { useState } from "react";
import { helpArticles, helpTopics } from "@/lib/help-articles";

const commonArticleSlugs = [
  "how-do-i-add-a-transaction",
  "how-do-budgets-work",
  "what-are-the-free-plan-limits",
  "can-i-edit-a-default-category",
  "can-i-use-the-same-account-on-multiple-devices",
];

const commonArticles = commonArticleSlugs
  .map((slug) => helpArticles.find((article) => article.slug === slug))
  .filter((article): article is (typeof helpArticles)[number] =>
    Boolean(article),
  );

export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredArticles = normalizedQuery
    ? helpArticles.filter((article) =>
        `${article.category} ${article.title} ${article.description} ${article.paragraphs.join(" ")}`
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : commonArticles;

  return (
    <>
      <section className="border-b border-[#e8ecf1] bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_100%)]">
        <div className="container px-5 py-16 text-center md:px-0 md:py-20">
          <p className="mb-3 text-sm font-semibold tracking-wide text-[#0e76d9]">
            SPENTIFY HELP CENTER
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
            How can we help?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Find quick answers and learn how to get the most out of Spentify.
          </p>

          <div className="relative mx-auto mt-8 max-w-2xl text-left">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            >
              <path
                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for help..."
              aria-label="Search help articles"
              className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-13 pr-5 text-base text-gray-900 shadow-[0_10px_35px_rgba(15,23,42,0.08)] outline-none transition placeholder:text-gray-400 focus:border-[#0e76d9] focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>
      </section>

      <section className="container px-5 py-12 md:px-0 md:py-16">
        {!normalizedQuery && (
          <>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
              Browse by topic
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {helpTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/help/topics/${topic.slug}`}
                  className="group rounded-2xl border border-gray-200 p-6 text-left transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0e76d9]">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path d={topic.iconPath} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="mt-5 font-semibold text-gray-950 group-hover:text-[#0e76d9]">
                    {topic.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{topic.description}</p>
                </Link>
              ))}
            </div>
          </>
        )}

        <div id="common-questions" className={normalizedQuery ? "" : "mt-16"}>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
            {normalizedQuery ? "Search results" : "Common questions"}
          </h2>
          <div className="mt-6 divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/help/${article.slug}`}
                className="group flex items-center justify-between gap-6 px-5 py-5 transition hover:bg-blue-50/60 md:px-6"
              >
                <span>
                  <span className="block font-medium text-gray-950 group-hover:text-[#0e76d9]">
                    {article.title}
                  </span>
                  <span className="mt-1 block text-sm text-gray-500">
                    {article.category}
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#0e76d9]"
                >
                  <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
            {filteredArticles.length === 0 && (
              <div className="px-6 py-10 text-center">
                <p className="font-medium text-gray-950">No answers found</p>
                <p className="mt-2 text-sm text-gray-600">
                  Try a different search, or contact our support team below.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="container px-5 pb-16 md:px-0 md:pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-semibold text-gray-950">Still need help?</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Send us a message and we&apos;ll help you find the answer.
            </p>
          </div>
          <a
            href="mailto:spentify.app@gmail.com"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Contact support
          </a>
        </div>
      </section>
    </>
  );
}
