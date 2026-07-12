"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Article } from "@/content/articles/articles";

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/insights/${article.slug}`}>

        <div
          className="relative overflow-hidden rounded-3xl border border-white/30 backdrop-blur-xl transition-all duration-500 h-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,.75) 0%, rgba(255,255,255,.40) 100%)",
            boxShadow:
              "0 10px 40px rgba(15,46,77,.08)",
          }}
        >

          {/* Reflection */}

          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/30 blur-2xl transition-all duration-700 group-hover:left-[130%]" />

          </div>

          {/* Content */}

          <div className="p-7">

            <h2 className="text-2xl font-bold text-[#0F2E4D] leading-snug transition-colors duration-300 group-hover:text-[#D4AF37] min-h-22.5">

              {article.title}

            </h2>

          </div>

          {/* Image */}

          <div className="overflow-hidden px-5">

            <img
              src={article.image}
              alt={article.title}
              className="rounded-2xl h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

          </div>

          {/* Footer */}

          <div className="px-7 py-6">

            <div className="h-px w-full bg-[#0F2E4D]/10 mb-4"></div>

            <div className="flex items-center justify-between">

              <span className="text-sm text-gray-500">

                {article.readTime}

              </span>

              <span className="text-sm text-gray-500">

                {article.date}

              </span>

            </div>

          </div>

        </div>

      </Link>
    </motion.div>
  );
}