import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { useUI } from "@context/UIContext/UIContext";
interface Props {
  className?: string;
  size?: "medium" | "small" | "large";
}
const Logo = ({ className, size = "medium" }: Props) => {
  const { setCloseSidebar } = useUI();
  return (
    <NextLink href={`/`}>
      <div
        onClick={setCloseSidebar}
        className={clsx(
          "cursor-pointer font-bold capitalize text-MAIN_COLOR",
          {
            ["text-3xl"]: size === "small",
            ["text-4xl"]: size === "medium",
            ["text-5xl"]: size === "large",
          },
          className
        )}
      >
        Shopify
      </div>
    </NextLink>
  );
};

export default Logo;
