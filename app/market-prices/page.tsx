import Link from "next/link";
import Image from "next/image";

const marketCards = [
  {
    title: "Energy",
    description:
      "Weekly benchmark pricing across global energy markets.",
    href: "/market-prices/energy",
  },

  {
    title: "Sulphur",
    description:
      "International sulphur market intelligence and price movements.",
    href: "/market-prices/petrochemical/sulphur",
  },

  {
    title: "Urea",
    description:
      "Global urea benchmark assessments and weekly trends.",
    href: "/market-prices/petrochemical/urea",
  },

  {
    title: "Other",
    description:
      "Additional commodity benchmark prices and market updates.",
    href: "/market-prices/petrochemical/other",
  },
];

export default function MarketPricesPage() {

  return (

    <main className="min-h-screen bg-gray-50">

      {/* Header */}

      <section className="max-w-6xl mx-auto px-5 md:px-6 pt-14 md:pt-20 pb-10 md:pb-14">

        <div className="w-53 h-1 bg-[#C8A24A] rounded-full mb-8" />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#0F2E4D]">

          MARKET PRICES

        </h1>

        <div>

  <p className="mt-4 text-lg text-gray-600">
    Weekly Benchmark Prices
  </p>

  <div className="mt-6 w-120 h-1 bg-[#C8A24A] rounded-full mb-1" />

</div>

      </section>



      {/* Cards */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-8">

          {marketCards.map((card) => (

            <Link
              key={card.title}
              href={card.href}
              className="
                group
                relative
                overflow-hidden

                rounded-3xl

                border
                border-[#0F2E4D]/10

                bg-white

                p-8

                shadow-sm

                transition-all
                duration-300

                hover:bg-[#C8A24A]
                hover:border-[#C8A24A]
                hover:shadow-2xl
                hover:-translate-y-2
              "
            >

              {/* Watermark */}

              <Image
                src="/logo.png"
                alt=""
                width={220}
                height={220}
                className="
                  absolute
                  right-0
                  bottom-0
                  w-44
                  opacity-[0.06]
                  transition-all
                  duration-300
                  group-hover:opacity-[0.12]
                "
              />



              <div className="relative z-10">

                <h2
                  className="
                    text-3xl
                    font-bold

                    text-[#0F2E4D]

                    transition-colors
                    duration-300

                    group-hover:text-[#0F2E4D]
                  "
                >

                  {card.title}

                </h2>



                <p
                  className="
                    mt-4

                    leading-relaxed

                    text-gray-600

                    transition-colors
                    duration-300

                    group-hover:text-[#0F2E4D]/90
                  "
                >

                  {card.description}

                </p>



                <div
                  className="
                    mt-8

                    font-semibold

                    text-[#C8A24A]

                    transition-all
                    duration-300

                    group-hover:text-[#0F2E4D]
                    group-hover:translate-x-2
                  "
                >

                  View Market →

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>

  );

}