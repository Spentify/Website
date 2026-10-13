import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/markdown-content";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return { title: "Post not found | Spentify" };

  return {
    title: `${post.title} | Spentify`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.date, url: `/blog/${post.slug}` },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  const articleUrl = `https://spentify.app/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Spentify", logo: { "@type": "ImageObject", url: "https://spentify.app/logo.png" } },
    mainEntityOfPage: articleUrl,
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className="container px-5 py-12 sm:py-20 md:px-0">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-blue-700 transition hover:text-blue-900">← All articles</Link>
          <header className="mt-8 border-b border-slate-200 pb-9">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">{post.category}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl sm:leading-[1.12]">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{post.description}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <span>By {post.author}</span><span aria-hidden="true">·</span>
              <time dateTime={post.date}>{new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${post.date}T00:00:00Z`))}</time>
            </div>
          </header>
          <MarkdownContent content={post.content} />
        </div>
      </article>
    </main>
  );
}
