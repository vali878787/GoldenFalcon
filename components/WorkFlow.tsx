"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Workflow() {
  const t = useTranslations("workflow");
  const steps = t.raw("steps") as string[];

  return (
    <section id="workflow" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4D] text-center mb-16">
          {t("title")}
        </h2>

        <div className="relative flex flex-col items-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex items-center justify-between w-full mb-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="w-full md:w-5/12 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition text-center">
                <span className="text-[#D4AF37] font-bold text-lg">0{index + 1}</span>
                <h3 className="text-xl font-semibold text-[#0F2E4D] mt-1">{step}</h3>
              </div>

              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#0F2E4D] rounded-full border-4 border-white shadow-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}