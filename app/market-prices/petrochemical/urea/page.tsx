import WeeklyComparisonSection from "@/components/MarketPrices/petrochemical/WeeklyComparisonSection";
import WeekNavigator from "@/components/MarketPrices/WeekNavigator";
import Footer from "@/components/Footer";

import {
  loadLatestComparisonPrices,
  loadComparisonHistoryPrices,
  loadComparisonHistory,
} from "@/lib/prices/loader";

interface PageProps {
  searchParams?: Promise<{
    history?: string;
  }>;
}

export default async function UreaPage({
  searchParams,
}: PageProps) {

  const params =
  (await searchParams) ?? {};

const historyFile =
  params.history;

const prices =
  !historyFile || historyFile === "latest"
    ? await loadLatestComparisonPrices(
        "petrochemical",
        "urea"
      )
    : await loadComparisonHistoryPrices(
        "petrochemical",
        historyFile,
        "urea"
      );

const history =
  await loadComparisonHistory(
    "petrochemical",
    "urea"
  );

const currentIndex =
  history.findIndex(
    item => item.file === historyFile
  );

const previousFile =
  historyFile
    ? history[currentIndex + 1]?.file
    : history[0]?.file;

const nextFile =
  !historyFile
    ? undefined
    : currentIndex === 0
      ? "latest"
      : history[currentIndex - 1]?.file;

  const sections =
    prices?.sections ?? [];

  return (
    <>
      <main className="relative overflow-hidden bg-gray-50">

        {/* Header */}

        <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          <div className="w-110 h-2 bg-[#C8A24A] rounded-full mb-10" />

          <div className="flex items-start gap-5">

            <div className="w-2 h-25 mt-2 bg-[#C8A24A] rounded-sm shrink-0" />

            <div>

              <h1 className="text-5xl font-bold tracking-wide text-[#0F2E4D]">
                UREA
              </h1>

              <p className="mt-4 text-gray-600 text-lg">
                Weekly Benchmark Price Comparison
              </p>

              <p className="text-gray-500 mt-1">
                Latest Update • {prices?.date ?? "-"}
              </p>

            </div>

          </div>

        </div>

        {/* Sections */}

        <div className="max-w-6xl mx-auto px-6">

          {sections.map((section, index) => (

            <div key={index}>

              <WeeklyComparisonSection
                title={section.title}
                previousDate={prices?.previousDate ?? "-"}
                currentDate={prices?.date ?? "-"}
                items={section.items}
              />

              {index !== sections.length - 1 && (

                <div className="my-14 border-t border-[#C8A24A]/90" />

              )}

            </div>

          ))}

        </div>

        <div className="pb-20">

          <WeekNavigator
  basePath="/market-prices/petrochemical/urea"
  date={prices?.date ?? "-"}
  previous={previousFile}
  next={nextFile}
/>

        </div>

      </main>

      <Footer />

    </>
  );

}