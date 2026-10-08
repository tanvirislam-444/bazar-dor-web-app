import Link from "next/link";

interface Product {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

interface AllProductsProps {
  products: Product[];
}

const AllProducts = ({ products }: AllProductsProps) => {
  return (
    <section className="mx-3 sm:mx-6 md:mx-10 lg:mx-20 mt-10">
      <h2 className="text-2xl font-bold mb-5">
        সব পণ্য
      </h2>

      <p className="mb-3 font-semibold text-gray-600">
        মোট {products.length}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Link key={product.id} href={`/details/${product.id}`}>
            <div className="bg-white rounded-2xl p-5 border border-gray-200 transition">
              <div className="flex items-center gap-3">
                <span className="text-3xl">
                  {product.image}
                </span>
                <div>
                  <h3 className="font-bold text-lg">
                    {product.nameBn}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    প্রতি{" "}
                    {product.unit === "kg"? "কেজি" : product.unit}
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

                  <div
                    className={`font-semibold ${
                      product.change.dir === "up" ? "text-red-600 bg-red-50 px-2 rounded-2xl" 
                        : product.change.dir === "down"
                        ? "text-[#05893E] bg-green-50 px-2 rounded-2xl"
                        : "text-gray-500 bg-gray-100 px-2 rounded-2xl"
                    }`}
                  >
                    {product.change.dir === "up" && "▲"}
                    {product.change.dir === "down" && "▼"}

                    <span className="ml-1">
                      {product.change.pct}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;