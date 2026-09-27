export function Marquee({ text = 'MELLOW · COFFEE · БЕЗ СПЕШКИ ·' }: { text?: string }) {
  const items = new Array(8).fill(text);
  return (
    <div className="overflow-hidden bg-espresso py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className="section-heading mx-4 text-2xl md:text-4xl text-foam uppercase"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
