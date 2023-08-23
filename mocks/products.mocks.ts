import z from "zod";

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
});
export const productsSchema = z.array(productSchema);

export type Product = z.infer<typeof productSchema>;
export type Products = z.infer<typeof productsSchema>;

export const mockProducts: Product[] = [
  { id: 1, name: "Nike Air Max 90", price: 125 },
  { id: 2, name: "Puma Suede", price: 75 },
  { id: 3, name: "Adidas Superstar", price: 100 },
];
