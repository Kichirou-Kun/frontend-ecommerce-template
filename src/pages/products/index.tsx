import FrontLayout from "@common/FrontLayout";
import FilterProducts from "@components/FilterProducts";
import Products from "@components/Products";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import React from "react";

const people = [
  { name: "All" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
const ProductsPage = () => {
  return (
    <section className="relative py-10">
      <Container>
        <Grid container className="gap-6">
          <Grid item className="col-span-12 lg:col-span-3">
            <div className=" w-full">
              <Typography
                variant="h5"
                className="mb-2 capitalize text-SECONDARY_DARK"
              >
                Categories
              </Typography>
              <FilterProducts zindex="50" people={people} />
            </div>
            <div className="w-full">
              <Typography
                variant="h5"
                className="mt-4 mb-2 capitalize text-SECONDARY_DARK"
              >
                Brands
              </Typography>
              <FilterProducts zindex="40" people={people} />
            </div>
            <div className="w-full">
              <Typography
                variant="h5"
                className="mt-4 mb-2 capitalize text-SECONDARY_DARK"
              >
                Price
              </Typography>
              <FilterProducts zindex="30" people={people} />
            </div>
            <div className="w-full">
              <Typography
                variant="h5"
                className="mt-4 mb-2 capitalize text-SECONDARY_DARK"
              >
                Ratings
              </Typography>
              <FilterProducts zindex="20" people={people} />
            </div>
          </Grid>
          <Grid item className="col-span-12  lg:col-span-9">
            <div className="flex flex-col ">
              <Typography variant="h5" className="mb-2">
                2 Results : <span className="text-sm">T-Shirt</span>
              </Typography>
              <div className="flex flex-row items-center justify-between rounded border bg-SECONDARY_DARK p-6">
                <div className="flex w-3/6 flex-row items-center space-x-2 rounded bg-white p-3 shadow">
                  <input
                    type="text"
                    placeholder="Search Here"
                    className="text-md w-full bg-transparent font-semibold outline-none"
                  />
                  <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer text-SECONDARY_DARK" />
                </div>
                <div className="w-2/6">
                  <FilterProducts people={people} />
                </div>
              </div>

              <Products />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductsPage;

ProductsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
