"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("about");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto relative">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4D] text-center mb-12">
          {t("title")}
        </h2>

        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/world-map.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

        <div className="relative z-10 bg-white/60 backdrop-blur-[0.5px] p-8 md:p-12 rounded-3xl border border-white/30 shadow-sm">
          <div className="text-gray-700 text-base md:text-lg leading-8 space-y-6 text-justify">
            {/* پاراگراف اول همیشه نمایش داده می‌شود */}
            <p>{t("paragraph1")}</p>

            {/* بقیه‌ی پاراگراف‌ها پشت انیمیشن باز/بسته شدن */}
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-in-out"
              style={{
                gridTemplateRows: isExpanded ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <div className="space-y-6 pt-6">
                  <p>{t("paragraph2")}</p>
                  <p>{t("paragraph3")}</p>
                  <p>{t("paragraph4")}</p>
                  <p>{t("paragraph5")}</p>
                  <p>{t("paragraph6")}</p>
                  <p>{t("paragraph7")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* دکمه‌ی نمایش بیشتر / کمتر */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#0F2E4D]/20 text-[#0F2E4D] font-medium hover:bg-[#0F2E4D] hover:text-white transition-colors duration-300"
            >
              {isExpanded ? t("showLess") : t("showMore")}
              <span
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}