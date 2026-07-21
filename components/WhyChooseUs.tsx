import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("about");

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
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
            <p>{t("paragraph3")}</p>
            <p>{t("paragraph4")}</p>
            <p>{t("paragraph5")}</p>
            <p>{t("paragraph6")}</p>
            <p>{t("paragraph7")}</p>
          </div>
        </div>

      </div>
    </section>
  );
}