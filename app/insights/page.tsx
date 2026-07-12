"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/content/articles/articles";

export default function InsightsPage() {
  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return (
    <>
      <main className="relative min-h-screen overflow-hidden">

        {/* ================= BACKGROUND ================= */}

        {/* Blue Glow */}
        <div className="fixed inset-0 pointer-events-none -z-40">

          <div
            className="
            absolute
            -left-40
            -top-40
            h-175
            w-175
            rounded-full
            bg-[#0F2E4D]/6
            blur-[180px]
            "
          />

          <div
            className="
            absolute
            -right-37.5
            -bottom-37.5
            h-125
            w-125
            rounded-full
            bg-[#D4AF37]/5
            blur-[170px]
            "
          />

        </div>

        {/* Center Glow */}

        <div
          className="
          fixed
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-175
          w-175
          rounded-full
          bg-[#0F2E4D]/5
          blur-[200px]
          pointer-events-none
          -z-30
          "
        />

        {/* Watermark */}

        <div className="fixed inset-0 flex items-center justify-center pointer-events-none -z-20">

          <img
            src="/LOGO-WATERMARK.png"
            alt=""
            className="
            w-[70vw]
            max-w-225
            opacity-[0.3]
            select-none
            "
          />

        </div>

        {/* Noise */}

        <div
          className="
          fixed
          inset-0
          opacity-[0.025]
          pointer-events-none
          -z-10
          "
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(15,46,77,.22) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* ================= HERO ================= */}

        <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9 }}
          >

            <h1 className="text-5xl md:text-6xl font-bold text-[#0F2E4D]">

              Industry Insights

            </h1>

            <div className="w-24 h-1 bg-[#D4AF37] rounded-full mt-6" />

            <p className="mt-8 max-w-3xl text-lg text-gray-600 leading-8">

              Explore expert insights, commodity market
              intelligence, international trade strategies,
              logistics updates and practical procurement
              knowledge from Golden Falcon Energy.

            </p >

          </motion.div>

        </section>

        {/* ================= ARTICLES ================= */}

        <section className="max-w-6xl mx-auto px-6 pb-24">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {sortedArticles.map((article) => (

              <ArticleCard
                key={article.slug}
                article={article}
              />

            ))}

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}