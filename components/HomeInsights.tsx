"use client";

import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/content/articles/articles";

export default function HomeInsights() {
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="insights" className="scroll-mt-24 py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4D]">
            Industry Insights
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] rounded-full mx-auto mt-5" />
          <p className="mt-6 text-gray-600 leading-7">
            Explore our latest market intelligence, international trade strategies and practical procurement guidance.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/insights"
            className="inline-block bg-[#0F2E4D] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#D4AF37] transition"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
