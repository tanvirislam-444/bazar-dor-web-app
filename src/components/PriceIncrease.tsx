interface Product {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

interface PriceIncreaseProps {
  products: Product[];
}

const PriceIncrease = ({ products }: PriceIncreaseProps) => {
  return (
    <section className="mx-3 sm:mx-6 md:mx-10 lg:mx-20 mt-10">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-red-600 text-xl">▲</span>
        <h2 className="text-2xl font-bold">আজ দাম বেড়েছে</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
<div
  key={product.id}
  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
  <div className="flex items-center gap-3">
    <span className="text-3xl">{product.image}</span>

    <div>
      <h3 className="font-bold text-lg">
        {product.nameBn}
      </h3>

      <p className="text-gray-500 text-sm">
        প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
      </p>
    </div>
  </div>
  <div className="mt-5">
    <p className="text-gray-500 text-sm">
      আজকের দাম
    </p>

    <div className="flex items-end justify-between mt-1">
      <div>
        <span className="text-2xl font-bold">
          {product.today}
        </span>

        <span className="text-gray-500 ml-1">
          টাকা
        </span>
      </div>
      <div className="flex items-center gap-1 text-red-600 font-semibold">
        <span>▲</span>
        <span>{product.change.pct}%</span>
      </div>
    </div>
  </div>
</div>
        ))}
      </div>
    </section>
  );
};

export default PriceIncrease;