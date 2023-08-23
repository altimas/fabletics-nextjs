import { Product } from "@/mocks/products.mocks";
import Image from "next/image";

export default async function ProductsPage() {
  const resp = await fetch("http://localthost:3000/api/products");
  const products = (await resp.json()) as Product[];

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((item: Product) => {
          return <li key={item.id}>{`${item.name} : $${item.price}`}</li>;
        })}
      </ul>
    </>
  );
}
