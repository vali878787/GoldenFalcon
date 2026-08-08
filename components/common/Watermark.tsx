export default function Watermark() {
  const line =
    "GOLDEN FALCON ENERGY • GOLDENFALCONENERGY.COM • ";

  return (
    <div
      className="
        absolute
        inset-0
        pointer-events-none
        select-none
        overflow-hidden
        z-0
        flex
        flex-col
        justify-around
        py-6
      "
    >
      {Array.from({ length: 100 }).map((_, row) => (
        <p
          key={row}
          className="
            whitespace-nowrap
            text-[12px]
            font-semibold
            tracking-[0.35em]
            uppercase
            text-[#C8A24A]/8
          "
        >
          {line.repeat(20)}
        </p>
      ))}
    </div>
  );
}
