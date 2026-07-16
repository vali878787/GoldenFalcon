import WeeklyComparisonTable from "./WeeklyComparisonTable";

interface WeeklyComparisonItem {
  market: string;
  previousPrice: string;
  currentPrice: string;
}

interface WeeklyComparisonSectionProps {
  title: string;
  previousDate: string;
  currentDate: string;
  items: WeeklyComparisonItem[];
}

export default function WeeklyComparisonSection({
  title,
  previousDate,
  currentDate,
  items,
}: WeeklyComparisonSectionProps) {

  return (

    <section
      className="
        mb-14
      "
    >

      <h2
        className="
          mb-6
          text-3xl
          font-bold
          tracking-wide
          text-[#0F2E4D]
        "
      >
        {title}
      </h2>


      <WeeklyComparisonTable
        previousDate={previousDate}
        currentDate={currentDate}
        items={items}
      />

    </section>

  );

}