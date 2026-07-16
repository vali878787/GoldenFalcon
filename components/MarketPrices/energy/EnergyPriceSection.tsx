import EnergyPriceTable from "./EnergyPriceTable";

interface PriceItem {
  product: string;
  code: string;
  price: string;
}

interface PriceSectionProps {
  title: string;
  term: string;
  priceTitle: string;
  items: PriceItem[];
}

export default function PriceSection({
  title,
  term,
  priceTitle,
  items,
}: PriceSectionProps) {
  return (
    <section className="mb-16">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-[#0F2E4D]">
          {title}
        </h2>

        <p className="mt-1 text-gray-500">
          {term}
        </p>

      </div>

      <EnergyPriceTable
        items={items}
        priceTitle={priceTitle}
      />

    </section>
  );
}