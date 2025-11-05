import { MetadataRoute } from "next";
import { client } from "@/sanity/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.newwavetherapy.com";

  const therapistsQuery = `*[_type == "therapist" && isActive == true] {
    "slug": slug.current,
    _updatedAt
  }`;

  const therapists = await client.fetch(therapistsQuery);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const therapistPages: MetadataRoute.Sitemap = therapists.map(
    (therapist: { slug: string; _updatedAt: string }) => ({
      url: `${baseUrl}/team/${therapist.slug}`,
      lastModified: new Date(therapist._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [...staticPages, ...therapistPages];
}
