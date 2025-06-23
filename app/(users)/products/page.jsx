import ProductList from "./productList/ProductList";

const Products = async ({ searchParams }) => {
  let searchParam = await searchParams;
  
  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;
  
  console.log("outer", searchParam);
  return (
    <div>
      <ProductList />
      Showing {category} Products, sorted By {sort} , page {page}
    </div>
  );
};

export default Products;
