import NavMenu from "@components/NavMenu/NavMenu";
import { PATHS } from "@config/paths";
import Stack from "@ui/Stack";
import clsx from "clsx";
import React from "react";

interface Props {
  direction?: "row" | "column";
}
const NavMenuList = ({ direction = "row" }: Props) => {
  return (
    <Stack
      className={clsx("", {
        ["space-x-6"]: direction === "row",
        ["space-y-6"]: direction === "column",
      })}
      direction={direction}
    >
      <NavMenu title="HOME" href={PATHS.HOME} />
      <NavMenu title="PRODUCTS" href={PATHS.PRODUCTS} />
    </Stack>
  );
};

export default NavMenuList;
