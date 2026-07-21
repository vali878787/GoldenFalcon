import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomeMarketPrices() {
  const t = useTranslations("HomeMarketPrices");

  const markets = [
    {
      key: "energy",
      title: t("energy"),
      href: "/market-prices/energy",
    },
    {
      key: "urea",
      title: t("urea"),
      href: "/market-prices/petrochemical/urea",
    },
    {
      key: "sulphur",
      title: t("sulphur"),
      href: "/market-prices/petrochemical/sulphur",
    },
    {
      key: "other",
      title: t("other"),
      href: "/market-prices/petrochemical/other",
    },
  ];

  return (
    <section
      id="market-prices"
      className="bg-[#F7F8FA] py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="w-40 h-1 bg-[#C8A24A] rounded-full mb-8" />

        <h2 className="text-4xl font-bold tracking-wide text-[#0F2E4D]">
          {t("title")}
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
          {t("description")}
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {markets.map((market) => (

            <Link
              key={market.key}
              href={market.href}
              className="
                rounded-2xl
                border
                border-[#0F2E4D]/10
                bg-white
                p-8
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#C8A24A]
                hover:shadow-xl
              "
            >

              <h3 className="text-2xl font-bold text-[#0F2E4D]">
                {market.title}
              </h3>

              <p className="mt-6 text-sm font-semibold text-[#C8A24A]">
                {t("viewMarket")} →
              </p>

            </Link>

          ))}

        </div>

        <div className="mt-14 text-center">

          <Link
            href="/market-prices"
            className="
              inline-flex
              items-center
              rounded-full
              bg-[#0F2E4D]
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-[#163D63]
            "
          >
            {t("viewAll")}
          </Link>

        </div>

      </div>

    </section>
  );
}