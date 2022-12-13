import FrontLayout from "@common/FrontLayout";
import BaseSeo from "@components/BaseSeo";
import { PATHS } from "@config/paths";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Typography from "@ui/Typography";
import NextLink from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <>
      <BaseSeo
        title="Page Not Found"
        description="Not Found Page : SEO Title"
      />
      <section className="flex h-screen flex-col items-center justify-center">
        <Container>
          <div className="flex flex-row items-center justify-center">
            <div className="rounded bg-white p-8 text-center">
              <Typography variant="h1" className="text-SECONDARY_DARK">
                404
              </Typography>
              <Typography variant="h5" className="textd-gray-600 my-6">
                SORRY! PAGE YOU ARE LOOKING CAN’T BE FOUND.
              </Typography>

              <NextLink href={PATHS.HOME}>
                <Button className="bg-MAIN_COLOR ">Back To Home</Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PageNotFound;

PageNotFound.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
