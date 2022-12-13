import FrontLayout from "@common/FrontLayout";
import BaseSeo from "@components/BaseSeo";
import FeaturedProduct from "@components/FeaturedProduct";
import HeroBanner from "@components/HeroBanner";
import React from "react";

const HomePage = () => {
  return (
    <>
      <BaseSeo />
      <HeroBanner />
      <FeaturedProduct />
    </>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
