import { MetadataRoute } from "next";
import { posts } from "@/content/posts";

const BASE_URL = "https://www.goldenfalconenergy.com";

// Add "ar" here once the Arabic routes/pages are fully wired and deployed.
const locales = ["en", "zh"] as const;
type Locale = (typeof locales)[number];

// Builds { en: "...", zh: "..." } for a given path, used for hreflang alternates.
function buildAlternates(path: string): Record<Locale, string> {
  return locales.reduce((acc, locale) => {
    acc[locale] = `${BASE_URL}/${locale}${path}`;
    return acc;
  }, {} as Record<Locale, string>);
}

type StaticPage = {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly";
  priority: number;
};

const staticPages: StaticPage[] = [
  { path: "", changeFrequency: "daily", priority: 1.0 },
  { path: "/mining", changeFrequency: "weekly", priority: 0.8 },
  { path: "/energy", changeFrequency: "weekly", priority: 0.8 },
  { path: "/petrochemical", changeFrequency: "weekly", priority: 0.8 },
  { path: "/market-prices", changeFrequency: "weekly", priority: 0.9 },
  { path: "/market-prices/energy", changeFrequency: "weekly", priority: 0.8 },
  { path: "/market-prices/petrochemical/urea", changeFrequency: "weekly", priority: 0.8 },
  { path: "/market-prices/petrochemical/sulphur", changeFrequency: "weekly", priority: 0.8 },
  { path: "/market-prices/petrochemical/other", changeFrequency: "weekly", priority: 0.8 },
  { path: "/insights", changeFrequency: "daily", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPages.map(({ path, changeFrequency, priority }) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: buildAlternates(path),
      },
    }))
  );

  const articleEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    posts.map((post) => {
      // Use the article's own publish date for lastModified instead of "now",
      // falling back to today only if the date can't be parsed.
      const parsedDate = new Date(post.date);
      const lastModified = isNaN(parsedDate.getTime()) ? now : parsedDate;

      return {
        url: `${BASE_URL}/${locale}/insights/${post.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: buildAlternates(`/insights/${post.slug}`),
        },
      };
    })
  );

  return [...staticEntries, ...articleEntries];
}