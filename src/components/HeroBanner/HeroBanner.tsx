import { NEXT_IMAGE_QUALITY } from "@config/app";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import NextImage from "next/image";
import { useRouter } from "next/router";
import React from "react";
import img from "../../../public/assets/products/Men-TShirt-Black-Back__57266.1603748348.png";

const HeroBanner = () => {
  const router = useRouter();
  return (
    <section className="bg-PRIMARY_WHITE py-10 lg:py-0">
      <Container>
        <Grid container className="gap-6 lg:gap-4">
          <Grid
            item
            className="col-span-12 flex flex-col justify-center lg:col-span-6"
          >
            <Typography variant="h1" className="text-SECONDARY_DARK">
              T-Shirt
            </Typography>
            <Typography className="my-6 text-lg font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              nulla, ut error velit enim vel quae reprehenderit delectus?
              Temporibus ullam veniam, porro placeat repellendus eveniet neque
              quaerat suscipit fugiat voluptatem.
            </Typography>
            <Typography className="text-MAIN_COLOR" variant="h5">
              $ 66
            </Typography>
            <div className="mt-6 flex flex-row items-center space-x-6">
              <Button className="border border-SECONDARY_DARK transition-all duration-150 ease-linear hover:bg-SECONDARY_DARK hover:text-white">
                Add To Cart
              </Button>
              <Button
                onClick={() => router.push(`/product/${1}`)}
                className="border border-SECONDARY_DARK transition-all duration-150 ease-linear hover:border-MAIN_COLOR hover:bg-MAIN_COLOR hover:text-white"
              >
                More Detail
              </Button>
            </div>
          </Grid>
          <Grid item className="col-span-12 lg:col-span-6">
            <NextImage src={img} alt="Banner Image" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroBanner;
