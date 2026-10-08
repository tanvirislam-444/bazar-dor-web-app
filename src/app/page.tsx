import Banner from "@/components/Banner";
import PriceIncrease from "@/components/PriceIncrease";
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

const Home = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");

  const data:Product[] = await res.json();

  const increasedProducts = data.filter(
    (product) => product.change.dir === "up"
  );

  return (
    <div>
      <Banner />
      <PriceIncrease products={increasedProducts} />
    </div>
  );
};

export default Home;
