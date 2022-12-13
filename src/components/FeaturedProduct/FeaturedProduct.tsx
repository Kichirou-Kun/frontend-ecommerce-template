import ProductCard from "@components/ProductCard";
import Title from "@components/Title";
import { products } from "@config/dummyDatas";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import React from "react";

const FeaturedProduct = () => {
  return (
    <section className="bg-white py-10">
      <Container>
        <Title title="Featured Products" />
        <Grid container className="">
          {products.map((product) => (
            <Grid
              key={product.id}
              item
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default FeaturedProduct;
