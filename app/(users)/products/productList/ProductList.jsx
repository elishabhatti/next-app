"use client";
import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();
  console.log("inside", searchParams);
  const pages = searchParams.getAll("page");
  const category = searchParams.get("category");
  const entries = Object.fromEntries(searchParams.entries());

  console.log("inside page", pages, category);
  console.log("entries", entries);

  return (
    <>
      <h1>Client - {category}</h1>
    </>
  );
};

export default ProductList;
