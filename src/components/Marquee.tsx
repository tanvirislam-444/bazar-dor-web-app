import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Product {
  id: number;
  slug: string;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");

  const data: Product[] = await res.json();

  return (
    <MarqueeText direction="right" duration={10} className="">
    <div className="mt-5 py-2 border border-gray-300">
<div className="flex gap-10">
  {data.map((h) => (
    <div key={h.id} className="flex items-center gap-2 whitespace-nowrap">
      <span className="text-xl">{h.image}</span>
      <span>{h.nameBn}</span>
      <span>
        {h.today} টাকা/{h.unit === "kg" ? "কেজি" : h.unit}
      </span>
      <span
        className={
          h.change.dir === "up"
            ? "text-red-600 font-semibold"
            : "text-green-600 font-semibold"
        }
      >
        {h.change.dir === "up" ? "▲" : "▼"} {h.change.pct}%
      </span>
    </div>
  ))}
</div>
    </div>
    </MarqueeText>
  );
};

export default Marquee;