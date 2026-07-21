"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/content/articles/articles";

export default function HomeInsights() {
  const t = useTranslations("insights");

  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="insights" className="scroll-mt-24 py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4D]">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] rounded-full mx-auto mt-5" />
          <p className="mt-6 text-gray-600 leading-7">
            {t("subtitle")}
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
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}