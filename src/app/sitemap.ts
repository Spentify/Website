import type { MetadataRoute } from "next";
import { helpArticles, helpTopics } from "@/lib/help-articles";

const baseUrl = "https://spentify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/help`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const topicPages: MetadataRoute.Sitemap = helpTopics.map((topic) => ({
    url: `${baseUrl}/help/topics/${topic.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = helpArticles.map((article) => ({
    url: `${baseUrl}/help/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...topicPages, ...articlePages];
}
