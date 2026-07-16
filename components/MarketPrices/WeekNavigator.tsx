import Link from "next/link";

interface WeekNavigatorProps {
  date: string;
  previous?: string;
  next?: string;
  basePath: string;
}

export default function WeekNavigator({
  date,
  previous,
  next,
  basePath,
}: WeekNavigatorProps) {
  return (
    <div className="mt-12 flex items-center justify-center gap-10">

      {/* Next Report - Left */}

      {next ? (
        <Link
          href={
            next === "latest"
              ? basePath
              : `${basePath}?history=${next}`
          }
          className="
            text-sm
            font-medium
            text-[#0F2E4D]
            hover:text-[#C8A24A]
            transition
          "
        >
         Next report →
        </Link>
      ) : (
        <span className="text-sm text-gray-300">
          Next Report
        </span>
      )}


      {/* Date */}

      <span
        className="
          px-6
          py-2
          rounded-full
          border
          border-[#0F2E4D]/10
          text-sm
          font-semibold
          text-[#0F2E4D]
          bg-[#e0bb65]
        "
      >
        {date}
      </span>


      {/* Previous Report - Right */}

      {previous ? (
        <Link
          href={`${basePath}?history=${previous}`}
          className="
            text-sm
            font-medium
            text-[#0F2E4D]
            hover:text-[#C8A24A]
            transition
          "
        >
          Previous Report
        </Link>
      ) : (
        <span className="text-sm text-gray-300">
           Previous Report
        </span>
      )}

    </div>
  );
}