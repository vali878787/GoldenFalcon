import Watermark from "@/components/common/Watermark";

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


      <table className="w-full border-collapse">


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
                w-[30%]
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


          </tr>


        </thead>



        {/* Body */}

        <tbody>


          {items.map((item, index) => (

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


            </tr>

          ))}


        </tbody>


      </table>


    </div>

  );

}