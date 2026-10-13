import "server-only";

import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  content: string;
};

const blogDirectory = path.join(process.cwd(), "content/blog");

function parsePost(slug: string, source: string): BlogPost {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    throw new Error(`Missing front matter in blog post: ${slug}`);
  }

  const metadata = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const separator = line.indexOf(":");
      const key = line.slice(0, separator).trim();
      const value = line
        .slice(separator + 1)
        .trim()
        .replace(/^['"]|['"]$/g, "");
      return [key, value];
    }),
  );

  for (const field of ["title", "description", "date", "author", "category"]) {
    if (!metadata[field]) {
      throw new Error(`Missing ${field} in blog post: ${slug}`);
    }
  }

  return {
    slug,
    title: metadata.title,
    description: metadata.description,
    date: metadata.date,
    author: metadata.author,
    category: metadata.category,
    content: match[2].trim(),
  };
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) return [];

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      return parsePost(slug, fs.readFileSync(path.join(blogDirectory, file), "utf8"));
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}
