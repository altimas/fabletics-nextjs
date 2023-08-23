import { Product, productsSchema } from "@/mocks/products.mocks";
import Image from "next/image";

export default async function ProductsPage() {
  const resp = await fetch("http://localhost:3000/api/products");
  const products = productsSchema.parse(await resp.json());

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
