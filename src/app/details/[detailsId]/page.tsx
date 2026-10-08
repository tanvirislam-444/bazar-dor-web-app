interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

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
  markets: Market[];
}

interface ProductDetailsProps {
  params: Promise<{
    detailsId: string;
  }>;
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { detailsId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${detailsId}`,
  );

  const data: Product = await res.json();

  const priceDifference = Math.abs(data.today - data.yesterday);


  const lowestPrice = Math.min(...data.markets.map((market) => market.min));

  const highestPrice = Math.max(...data.markets.map((market) => market.max));

 
  const averagePrice =
    data.markets.reduce(
      (total, market) => total + (market.min + market.max) / 2,
      0,
    ) / data.markets.length;

  return (
    <div className="mx-3 sm:mx-6 md:mx-10 lg:mx-20 mt-10 mb-10">
        {/* first card */}
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
  <div className="flex justify-between items-start gap-3 sm:gap-6">

    {/* Left Side */}
    <div className="flex items-center min-w-0 flex-1">

      <div className="text-2xl sm:text-4xl bg-gray-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl shrink-0">
        {data.image}
      </div>

      <div className="ml-2 sm:ml-3 min-w-0">

        <h1 className="text-base sm:text-2xl font-bold truncate">
          {data.nameBn}
        </h1>

        <p className="text-gray-500 mt-1 ">
          প্রতি {data.unit === "kg" ? "কেজি" : data.unit} ·{" "}
          {data.categoryNameBn}
        </p>

        <p className=" mt-3 sm:text-lg leading-5">
          গতকালের তুলনায় আজ দাম{" "}

          {data.change.dir === "up" && (
            <span className="font-bold">
              বেড়েছে
            </span>
          )}

          {data.change.dir === "down" && (
            <span className="font-bold">
              কমেছে
            </span>
          )}

          {data.change.dir === "flat" && (
            <span className="font-bold">
              অপরিবর্তিত
            </span>
          )}

          {data.change.dir !== "flat" && (
            <> · {priceDifference} টাকা</>
          )}
        </p>

      </div>
    </div>


    {/* Right Side */}
    <div className="shrink-0 bg-gray-100 px-4 py-2 rounded-2xl">

      <p className="text-gray-500">
        আজকের দাম
      </p>

      <h2 className="text-2xl sm:text-2xl font-bold ml-7 mt-1">
        {data.today}
      </h2>

      <p className="text-gray-500">
        টাকা / {data.unit === "kg" ? "কেজি" : data.unit}
      </p>

      <div
        className={`ml-7 mt-1 font-bold text-sm sm:text-base ${
          data.change.dir === "up"
            ? "text-red-600"
            : data.change.dir === "down"
              ? "text-[#05893E]"
              : "text-gray-500"
        }`}
      >
        {data.change.dir === "up" && (
          <span>▲</span>
        )}

        {data.change.dir === "down" && (
          <span>▼</span>
        )}

        <span>
          {data.change.pct}%
        </span>
      </div>

    </div>

  </div>
</div>

              {/* second card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-6">
        <h2 className="text-2xl font-bold mb-6">দামের সারসংক্ষেপ</h2>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <p >সর্বনিম্ন দাম</p>

            <p className="text-2xl font-bold mt-2 text-green-700">{lowestPrice} <span className="text-[15px]">টাকা</span></p>
            <p >সবচেয়ে কম দামের বাজার</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <p >সর্বাধিক দাম</p>

            <p className="text-2xl font-bold mt-2 text-red-700">{highestPrice} <span className="text-[15px]">টাকা</span></p>
            <p >সবচেয়ে বেশি দামের বাজার</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <p >গড় দাম</p>

            <p className="text-2xl font-bold mt-2 text-green-700">
              {averagePrice.toFixed(2)} <span className="text-[15px]">টাকা</span>
            </p>
            <p >প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>

        {/* Market Table */}
        <div className="mt-8">
          <div className="mb-4">
            <h3 className="text-xl font-bold">বাজারভিত্তিক আজকের দাম</h3>
          </div>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-4">বাজার</th>

                  <th className="text-left p-4">বিভাগ</th>

                  <th className="text-left p-4">সর্বনিম্ন</th>

                  <th className="text-left p-4">সর্বাধিক</th>

                  <th className="text-left p-4">গড়</th>
                </tr>
              </thead>

              <tbody>
                {data.markets.map((market) => {
                  const average = (market.min + market.max) / 2;

                  return (
                    <tr key={market.market} className="border-b">
                      <td className="p-4 font-medium">{market.market}</td>

                      <td className="p-4 text-gray-600">{market.division}</td>

                      <td className="p-4">{market.min} টাকা</td>

                      <td className="p-4">{market.max} টাকা</td>

                      <td className="p-4 font-bold">
                        {average.toFixed(2)} টাকা
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="md:hidden space-y-3">
            {data.markets.map((market) => {
              const average = (market.min + market.max) / 2;

              return (
                <div key={market.market} className="border rounded-xl p-4">
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="font-bold">{market.market}</p>

                      <p className="text-sm text-gray-500">{market.division}</p>
                    </div>

                    <p className="font-bold">{average.toFixed(2)} টাকা</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                    <div>
                      <p className="text-gray-500">সর্বনিম্ন</p>
                      <p className="font-semibold">{market.min} টাকা</p>
                    </div>

                    <div>
                      <p className="text-gray-500">সর্বাধিক</p>
                      <p className="font-semibold">{market.max} টাকা</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
