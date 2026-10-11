
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface TNavs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = () => {
  const [data, setData] = useState<TNavs[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");

      const categories: TNavs[] = await res.json();
      setData(categories);
    };

    getCategories();
  }, []);

return (
  <div className="flex gap-10 overflow-x-auto">
    {data.map((n) => (
      <Link
        key={n.id}
        href={`/category/${n.slug}`}
        className={`flex shrink-0 items-center gap-2 whitespace-nowrap ${
          pathname === `/category/${n.slug}`
            ? "font-bold bg-green-600 rounded-2xl px-3 py-1 text-white"
            : "text-gray-700 hover:border-b-2 border-[#05893E] hover:font-bold"
        }`}
      >
        <span>{n.icon}</span>
        <span>{n.nameBn}</span>
      </Link>
    ))}
  </div>
);
};

export default NavLinks;