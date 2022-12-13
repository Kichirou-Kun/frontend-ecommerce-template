import React from "react";
import clsx from "clsx";
interface Props {
  size?: "small" | "medium" | "large";
  className?: string;
  title: string;
}
const Title = ({ size = "medium", title, className }: Props) => {
  return (
    <>
      <div
        className={clsx(
          "mb-10 text-center font-semibold uppercase text-SECONDARY_DARK",
          {
            ["text-2xl"]: size === "small",
            ["text-3xl"]: size === "medium",
            ["text-4xl"]: size === "large",
          },
          className
        )}
      >
        {title}
      </div>
    </>
  );
};

export default Title;
