import ProductCard from "@components/ProductCard";
import { products } from "@config/dummyDatas";
import Grid from "@ui/Grid";
import React from "react";

const Products = () => {
  return (
    <Grid container className="mt-6 gap-4">
      {products.map((product) => (
        <Grid
          key={product.id}
          item
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
        >
          <ProductCard product={product} variants="white" />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
