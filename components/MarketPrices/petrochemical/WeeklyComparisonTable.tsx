import Watermark from "@/components/common/Watermark";

function parsePrice(value: string) {

  // اگر مقدار شامل حرف باشد، قیمت نیست
  if (/[a-zA-Z]/.test(value)) {
    return null;
  }


  const numbers = value.match(/\d+(\.\d+)?/g);


  if (!numbers) {
    return null;
  }


  const values = numbers.map(Number);


  // قیمت تک عددی
  if (values.length === 1) {
    return values[0];
  }


  // بازه قیمتی
  return (values[0] + values[1]) / 2;

}

interface WeeklyComparisonItem {
  market: string;
  previousPrice: string;
  currentPrice: string;
}

interface WeeklyComparisonTableProps {
  previousDate: string;
  currentDate: string;
  items: WeeklyComparisonItem[];
}

export default function WeeklyComparisonTable({
  previousDate,
  currentDate,
  items,
}: WeeklyComparisonTableProps) {

  return (

    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#0F2E4D]/10
        bg-white
        shadow-sm
      "
    >

      <Watermark />

<div className="overflow-x-auto">

  <table className="min-w-175 border-collapse">


        {/* Header */}

        <thead>

          <tr className="bg-[#0F2E4D] text-white">


            <th
              className="
                px-5
                py-2
                text-left
                text-xs
                font-semibold
                uppercase
                tracking-wider
                w-[40%]
              "
            >
              Market
            </th>


            <th
              className="
                px-5
                py-2
                text-center
                text-xs
                font-semibold
                uppercase
                tracking-wider
                w-[30%]
              "
            >

              Previous Week

              <div
                className="
                  mt-1
                  text-[10px]
                  opacity-70
                  font-normal
                "
              >
                {previousDate}
              </div>

            </th>



                        <th
              className="
                px-5
                py-2
                text-center
                text-xs
                font-semibold
                uppercase
                tracking-wider
                w-[25%]
              "
            >

              Current Week

              <div
                className="
                  mt-1
                  text-[10px]
                  opacity-70
                  font-normal
                "
              >
                {currentDate}
              </div>

            </th>


            <th
              className="
                px-5
                py-2
                text-center
                text-xs
                font-semibold
                uppercase
                tracking-wider
                w-[15%]
              "
            >
              Change
            </th>


          </tr>


        </thead>



        {/* Body */}

        <tbody>


          {items.map((item, index) => {

  const previous = parsePrice(item.previousPrice);

const current = parsePrice(item.currentPrice);

const change =
  previous !== null && current !== null
    ? current - previous
    : null;


  return (

            <tr
              key={index}
              className="
                border-b
                border-[#0F2E4D]/8
                hover:bg-[#0F2E4D]/3
                transition-colors
              "
            >


              <td
                className="
                  px-3
                  py-2
                  text-sm
                  text-gray-800
                "
              >
                {item.market}
              </td>



              <td
                className="
                  px-3
                  py-2
                  text-center
                  text-sm
                  text-gray-500
                "
              >
                {item.previousPrice}
              </td>



              <td
                className="
                  px-3
                  py-2
                  text-center
                  text-sm
                  font-semibold
                  text-[#0F2E4D]
                "
              >
                {item.currentPrice}
              </td>

              <td
  className={`
    px-3
    py-2
    text-center
    text-sm
    font-semibold
    ${
  change === null
    ? "text-gray-400"
    : change > 0
    ? "text-green-600"
    : change < 0
    ? "text-red-600"
    : "text-gray-500"
}
  `}
>

  {change === null ? (

  <span className="text-gray-400">
    —
  </span>

) : (

  <div className="flex items-center justify-center gap-1">

    {change !== null && change > 0 && (
      <span className="text-xs">
        ▲
      </span>
    )}

    {change !== null && change < 0 && (
      <span className="text-xs">
        ▼
      </span>
    )}

    {change === 0 && (
      <span className="text-xs">
        —
      </span>
    )}

    <span>
      {change !== null && change > 0 ? "+" : ""}
      {change !== null && change.toFixed(1)}
    </span>

  </div>

)}

</td>


            </tr>

            )
})}


        </tbody>


            </table>

    </div>

  </div>

  );

}