import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // Home
    {
      url: "https://www.goldenfalconenergy.com",
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },

    // Main Pages
    {
      url: "https://www.goldenfalconenergy.com/mining",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: "https://www.goldenfalconenergy.com/energy",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: "https://www.goldenfalconenergy.com/petrochemical",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Market Prices
    {
      url: "https://www.goldenfalconenergy.com/market-prices",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://www.goldenfalconenergy.com/market-prices/energy",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: "https://www.goldenfalconenergy.com/market-prices/petrochemical/urea",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: "https://www.goldenfalconenergy.com/market-prices/petrochemical/sulphur",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: "https://www.goldenfalconenergy.com/market-prices/petrochemical/other",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Industry Insights
    {
      url: "https://www.goldenfalconenergy.com/insights",
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: "https://www.goldenfalconenergy.com/insights/en590-10ppm-diesel",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://www.goldenfalconenergy.com/insights/how-to-import-granular-sulphur",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}