export default function SliderDots() {
  const items = ["01", "02", "03", "04", "05"];

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">
      {items.map((n, i) => (
        <span
          key={n}
          className={`text-sm ${i === 0 ? "opacity-100" : "opacity-40"}`}
        >
          {n}
        </span>
      ))}
      <div className="w-40 h-[1px] bg-white/40"></div>
    </div>
  );
}
