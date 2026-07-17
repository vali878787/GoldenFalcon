export interface Article {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "en590-10ppm-diesel",
    title: "EN590 10ppm Diesel: Complete Buying Guide",
    description:
      "Specifications, international trade, pricing factors and practical buying guidance for ultra-low sulphur diesel.",
    image: "/diesel.png",
    date: "July 12, 2026",
    readTime: "18 min read",
    content: "",
  },
  {
    slug: "how-to-import-granular-sulphur",
    title: "How to Import Granular Sulphur to International Markets",
    description:
      "A practical guide covering sourcing, logistics, documentation and international trade considerations for buyers of granular sulphur.",

    image: "/articles/granular-sulphur.jpg",

    date: "July 8, 2026",

    readTime: "5 min read",

    content: `
Golden Falcon Energy supplies high-quality granular sulphur to international buyers.

This article explains the key factors that buyers should consider before purchasing sulphur, including origin, inspection, logistics, documentation and shipment planning.

Choosing the correct supplier can significantly reduce commercial risks and ensure long-term supply stability.
`,
  },


  {
    slug: "global-urea-market-guide",
    title: "Global Urea Market Outlook 2026",
    description:
      "Price Trends, Supply Dynamics, Trade Flows and Future Market Forecast.",
    image: "/C1.png",
    date: "July 17, 2026",
    readTime: "12 min read",
    content: "",
  },
];
