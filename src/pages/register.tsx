import FrontLayout from "@common/FrontLayout";
import Button from "@ui/Button";
import Container from "@ui/Container";
import PasswordTextField from "@ui/PasswordTextField";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import React from "react";
import NextLink from "next/link";

const RegisterPage = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <Container>
        <Typography
          variant="h4"
          className="mb-6 text-center uppercase text-SECONDARY_DARK"
        >
          SignUp
        </Typography>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <form className="w-full md:w-3/6 lg:w-2/6">
            <div className=" flex flex-col gap-6 rounded bg-white p-4 shadow">
              <div>
                <Typography variant="h5" className="mb-2 text-SECONDARY_DARK">
                  Name
                </Typography>
                <TextField fullWidth type={"text"} placeholder="Name" />
              </div>
              <div>
                <Typography variant="h5" className="mb-2 text-SECONDARY_DARK">
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  type={"email"}
                  placeholder="Email Address"
                />
              </div>
              <div>
                <Typography variant="h5" className="mb-2 text-SECONDARY_DARK">
                  Password
                </Typography>
                <PasswordTextField />
              </div>

              <Button
                size="large"
                className="bg-MAIN_COLOR  text-white transition-opacity duration-150 ease-linear hover:bg-opacity-90"
              >
                Create Account
              </Button>

              <div>
                <Typography
                  component="span"
                  className="
                text-md mr-2 font-semibold text-gray-600"
                >
                  Already have an account ?
                </Typography>
                <NextLink href={`/login`} legacyBehavior>
                  <a className="font-bold text-MAIN_COLOR">SignIn</a>
                </NextLink>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
