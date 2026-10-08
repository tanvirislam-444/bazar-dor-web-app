interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

interface CategoryProductsProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryProducts = async ({params}: CategoryProductsProps) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`
  );

  const data: Product[] = await res.json();

  const category = data[0];

  return (
    <section className="mx-3 sm:mx-6 md:mx-10 lg:mx-20 mt-10">
      <div className="bg-white border flex items-center border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="text-4xl mb-3">
          {category.categoryIcon}
        </div>
          <div>
        <h1 className="text-2xl font-bold">
          {category.categoryNameBn}
        </h1>

        <p className="text-gray-500 mt-1">
          {data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
        </p>
        </div>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
  {data.map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-2xl p-5 border border-gray-100"
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">
          {product.image}
        </span>

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

          <div
            className={`font-semibold ${
              product.change.dir === "up"
                ? "text-red-600 bg-red-50 px-2 rounded-2xl"
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
  ))}
</div>
    </section>
  );
};

export default CategoryProducts;