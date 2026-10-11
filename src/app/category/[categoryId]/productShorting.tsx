
"use client";

import { useState } from "react";

interface Product {
  id: number;
  nameBn: string;
  unit: string;
  image: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

interface ProductShortingProps {
  products: Product[];
}


const ProductShorting = ({ products }: ProductShortingProps) => {
  const [sortBy, setSortBy] = useState<"default" | "upprice" | "downprice">("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "upprice") {
      return a.today - b.today;
    }

    if (sortBy === "downprice") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <>
      {/* Sorting dropdown */}
      <div className="flex justify-end items-center gap-2 mt-5 w-40 ml-auto">
          <label className=" mr-1">
           সাজান
      </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "default" | "upprice" | "downprice")}
          className="select select-neutral"
        >
          <option value="default">ডিফল্ট</option>
          <option value="upprice">দাম: কম থেকে বেশি</option>
          <option value="downprice">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      {/* Sorted product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#F0F5F0] rounded-2xl p-5 border hover:border-green-600 hover:border-2 border-gray-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{product.image}</span>

              <div>
                <h3 className="font-bold text-lg">{product.nameBn}</h3>

                <p className="text-gray-500 text-sm">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-gray-500 text-sm">আজকের দাম</p>

              <div className="flex items-end justify-between mt-1">
                <div>
                  <span className="text-2xl font-bold">
                    {product.today}
                  </span>
                  <span className="text-gray-500 ml-1">টাকা</span>
                </div>

                <div
                  className={`font-semibold  ${
                    product.change.dir === "up"
                      ? "text-red-600 bg-red-50 px-2 rounded-2xl"
                      : product.change.dir === "down"
                      ? "text-[#05893E] bg-green-50 px-2 rounded-2xl"
                      : "text-gray-500 bg-gray-100 px-2 rounded-2xl"
                  }`}
                >
                  {product.change.dir === "up" && "▲"}
                  {product.change.dir === "down" && "▼"}
                  <span className="ml-1">{product.change.pct}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductShorting;





