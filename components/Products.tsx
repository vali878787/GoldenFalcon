import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";

export default function Products() {
  const t = useTranslations("products");

  return (
    <Reveal>
      <section id="products" className="py-24 px-6 bg-gray-50">

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(28,65,101)]">
            {t("title")}
          </h2>
          <p className="mt-4 text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* ENERGY */}
          <Link href="/energy">
            <div className="border rounded-xl p-6 text-center hover:shadow-lg hover:border-[#D4AF37] transition cursor-pointer">
              <h3 className="text-xl font-semibold text-[#0F2E4D]">
                {t("energy.title")}
              </h3>
              <p className="mt-3 text-gray-600">
                {t("energy.description")}
              </p>
            </div>
          </Link>

          {/* MINING */}
          <Link href="/mining">
            <div className="border rounded-xl p-6 text-center hover:shadow-lg hover:border-[#D4AF37] transition cursor-pointer">
              <h3 className="text-xl font-semibold text-[#0F2E4D]">
                {t("mining.title")}
              </h3>
              <p className="mt-3 text-gray-600">
                {t("mining.description")}
              </p>
            </div>
          </Link>

          {/* PETROCHEMICAL */}
          <Link href="/petrochemical">
            <div className="border rounded-xl p-6 text-center hover:shadow-lg hover:border-[#D4AF37] transition">
              <h3 className="text-xl font-semibold text-[#0F2E4D]">
                {t("petrochemical.title")}
              </h3>
              <p className="mt-3 text-gray-600">
                {t("petrochemical.description")}
              </p>
            </div>
          </Link>

        </div>

      </section>
    </Reveal>
  );
}