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
        flex
        flex-col
        justify-center
        gap-6
        px-4
        z-0
      "
    >
      {Array.from({ length: 8 }).map((_, row) => (
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
          {line.repeat(8)}
        </p>
      ))}
    </div>
  );
}