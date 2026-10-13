import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Personal Finance Blog | Spentify",
  description: "Practical guides for tracking expenses, building a budget, saving money, and making confident financial decisions.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-[70vh] bg-slate-50/50">
      <section className="container px-5 py-14 sm:py-20 md:px-0">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Spentify blog</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Make your money easier to manage</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">Practical ideas for spending thoughtfully, saving consistently, and building better money habits.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_6px_18px_rgba(15,23,42,0.05)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_4px_8px_rgba(15,23,42,0.05),0_18px_40px_rgba(15,23,42,0.10)]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">{post.category}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-700">{post.title}</Link>
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-block text-sm font-semibold text-blue-700">Read article →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
