import FrontLayout from "@common/FrontLayout";
import BaseSeo from "@components/BaseSeo";
import { NEXT_IMAGE_QUALITY } from "@config/app";
import { products } from "@config/dummyDatas";
import { useUI } from "@context/UIContext/UIContext";
import { StarIcon } from "@heroicons/react/24/solid";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import NextImage from "next/image";
import React from "react";

const ProductDetail = () => {
  const { setOpenCart } = useUI();
  const addToCartHandler = () => {
    setOpenCart();
  };
  return (
    <>
      <BaseSeo
        title="Lightweight-Jacket"
        description="Product Deatil Page : SEO Title"
      />
      <section className="py-10">
        <Container>
          {products.map((product) => (
            <Grid container className="gap-6" key={product.id}>
              <Grid item className="col-span-12 lg:col-span-6">
                <div className="relative flex h-[540px] w-full flex-row items-center justify-center rounded bg-MAIN_COLOR ">
                  <NextImage
                    src={product.images[3].originalSrc}
                    alt="product detail"
                    className="h-full w-full object-contain"
                    quality={NEXT_IMAGE_QUALITY}
                  />
                  <Typography
                    variant="h6"
                    className="absolute top-0 left-0 p-3 text-SECONDARY_DARK"
                  >
                    {product.price.amount} {product.price.currencyCode}
                  </Typography>
                </div>
              </Grid>
              <Grid item className="col-span-12 lg:col-span-6">
                <Typography variant="h1" className="text-SECONDARY_DARK">
                  {product.title}
                </Typography>
                <Typography className="mt-6 text-lg font-semibold text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet enim explicabo molestiae. Dignissimos sapiente,
                  possimus nostrum id consequuntur totam expedita sequi, tenetur
                  nisi enim, beatae odit suscipit doloremque quam repellat.
                </Typography>
                <div className="my-6 flex flex-row items-center space-x-1">
                  <StarIcon className="h-6 w-6 cursor-pointer text-orange-500" />
                  <StarIcon className="h-6 w-6 cursor-pointer text-orange-500" />
                  <StarIcon className="h-6 w-6 cursor-pointer text-orange-500" />
                  <StarIcon className="h-6 w-6 cursor-pointer text-orange-500" />
                  <StarIcon className="h-6 w-6 cursor-pointer text-orange-500" />
                </div>

                <div className="flex flex-row items-center space-x-6">
                  <Button
                    onClick={addToCartHandler}
                    className="border bg-SECONDARY_DARK text-white transition-opacity duration-150 ease-linear hover:bg-opacity-90"
                  >
                    Add To Cart
                  </Button>
                  <Button className="border bg-MAIN_COLOR text-white transition-opacity duration-150 ease-linear hover:bg-opacity-90">
                    Buy Now
                  </Button>
                </div>
              </Grid>
            </Grid>
          ))}
        </Container>
      </section>
    </>
  );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
