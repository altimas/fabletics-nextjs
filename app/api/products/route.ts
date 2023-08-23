import { mockProducts } from "@/mocks/products.mocks";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(mockProducts);
}