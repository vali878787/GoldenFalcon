import Watermark from "@/components/common/Watermark";

interface PriceItem {
  product: string;
  code: string;
  price: string;
}

interface PriceTableProps {
  items: PriceItem[];
  priceTitle: string;
}

export default function PriceTable({
  items,
  priceTitle,
}: PriceTableProps) {
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

        {/* Table Header */}

        <thead>

          <tr className="bg-[#0F2E4D] text-white">

            <th
              className="
                px-5
                py-3
                text-left
                text-xs
                font-semibold
                uppercase
                tracking-wider
              "
            >
              Product
            </th>

            <th
              className="
                px-5
                py-3
                text-left
                text-xs
                font-semibold
                uppercase
                tracking-wider
              "
            >
              Code
            </th>

            <th
              className="
                px-5
                py-3
                text-right
                text-xs
                font-semibold
                uppercase
                tracking-wider
              "
            >
              {priceTitle}
            </th>

          </tr>

        </thead>

        {/* Table Body */}

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
                  px-5
                  py-3
                  text-sm
                  text-gray-800
                "
              >
                {item.product}
              </td>

              <td
                className="
                  px-5
                  py-3
                  text-sm
                  text-gray-500
                "
              >
                {item.code}
              </td>

              <td
                className="
                  px-5
                  py-3
                  text-right
                  text-sm
                  font-semibold
                  text-[#0F2E4D]
                "
              >
                {item.price}
              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}