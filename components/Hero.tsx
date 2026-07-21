import { useTranslations } from "next-intl";
import HeroReveal from "./HeroReveal";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <HeroReveal>
      <section
        id="home"
        className="relative min-h-[85vh] overflow-hidden bg-[#071B2B] px-6 flex items-center"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/Hero.jpg')" }}
        />

        {/* Main Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#071B2B] via-[#071B2B]/95 to-[#071B2B]/50" />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-linear-to-b from-transparent to-gray-50" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-3xl text-[#C8A24A]">
            <p className="text-[#C8A24A] uppercase tracking-[0.4em] text-sm mb-8">
              {t("tagline")}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              {t("title")}
            </h1>

            <h2 className="mt-8 text-3xl md:text-4xl font-light text-gray-200 leading-tight">
              {t("subtitle")}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
              
              
                href="#products"
                className="px-8 py-3 bg-[#C8A24A] text-[#071B2B] font-medium rounded-sm transition hover:bg-[#d8b65b]"
              >
                {t("productsButton")}
              </a>

              <Link
                href="/market-prices"
                className="px-8 py-3 border border-white/30 text-white rounded-sm transition hover:bg-white/10"
              >
                {t("marketButton")}
              </Link>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 text-sm tracking-wide text-white">
              Energy
              <span className="mx-3 text-[#C8A24A]">|</span>
              Petrochemicals
              <span className="mx-3 text-[#C8A24A]">|</span>
              Global Commodities
            </div>
          </div>
        </div>
      </section>
    </HeroReveal>
  );
}