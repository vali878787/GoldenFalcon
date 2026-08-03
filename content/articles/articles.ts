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

  {
    slug: "gold-precious-metals-market-2026",
    title: "Why Gold and Precious Metals Have Become More Important in 2026",
    description:
      "An industry analysis covering gold, silver, platinum and palladium price dynamics, central bank demand, ETF flows, industrial consumption and strategic outlook for 2026.",
    image: "/content/post/D1.png",
    date: "July 25, 2026",
    readTime: "10 min read",
    content: "",
  },

  {
    slug: "crude-oil-market-trends-2026-gulf-trading",
    title: "Crude Oil and Derivatives Markets in 2026: Rebuilding Confidence in Gulf Trading",
    description:
      "An industry analysis of the 2026 crude oil and derivatives markets, covering the Strait of Hormuz crisis, OPEC+ policy, the rise of Murban, regional risk management and the outlook for Gulf commodity trading.",
    image: "/content/post/E1.png",
    date: "August 03, 2026",
    readTime: "13 min read",
    content: "",
  }
];
