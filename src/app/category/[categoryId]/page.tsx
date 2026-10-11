
import { notFound } from "next/navigation";
import ProductShorting from "./productShorting";


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
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
  );

  const data: Product[] = await res.json();
  

  const category = data[0];
  if (!category){
    notFound()
  }

  return (
    <section className="mx-3 sm:mx-6 md:mx-10 lg:mx-20 mt-10">
      <div className="bg-[#F0F5F0] border flex items-center border-gray-100 rounded-2xl p-6 shadow-sm">
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

      <ProductShorting products={data} />
    </section>
  );
};

export default CategoryProducts;