const Products = async ({ searchParams }) => {
  let searchParam = await searchParams;
  //   console.log(searchParams);

  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;

  return (
    <div>
      Showing {category} Products, sorted By {sort} , page {page}
    </div>
  );
};

export default Products;
