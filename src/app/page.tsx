import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import PriceDecrease from "@/components/PriceDecrease";
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

  const increasedProducts = data
  .filter((product) => product.change.dir === "up")
  .sort((a, b) => b.change.pct - a.change.pct)
  .slice(0, 6);

const decreasedProducts = data
  .filter((product) => product.change.dir === "down")
  .sort((a, b) => a.change.pct - b.change.pct)
  .slice(0, 6);


  return (
    <div>
      <Banner />
      <PriceIncrease products={increasedProducts} />
      <PriceDecrease products={decreasedProducts}/>
      <AllProducts products={data}/>
    </div>
  );
};

export default Home;
