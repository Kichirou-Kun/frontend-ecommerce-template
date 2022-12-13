import { StarIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import IconButton from "@ui/IconButton";
import Typography from "@ui/Typography";
import clsx from "clsx";
import NextImage from "next/image";
import NextLink from "next/link";
import React from "react";
import placeholderImage from "../../../public/assets/product-image-placeholder.svg";

interface Props {
  product: any;
  variants?: "slate" | "white" | string;
}
const ProductCard = ({ product, variants = "slate" }: Props) => {
  return (
    <div
      className={clsx("cursor-pointer overflow-hidden rounded", {
        ["bg-PRIMARY_WHITE"]: variants === "slate",
        ["bg-white"]: variants === "white",
      })}
    >
      <NextLink href={`/product/${product.id}`}>
        <NextImage
          src={product.images[3].originalSrc || placeholderImage}
          alt={product.title || "product image"}
          className="object-contain transition-transform duration-150 ease-linear hover:scale-110"
        />
      </NextLink>
      <div className="p-3">
        <Typography variant="h5" className="text-SECONDARY_DARK">
          {product.title}
        </Typography>
        <div className="my-2 flex flex-row items-center">
          <StarIcon className=" h-6 w-6 text-orange-500" />
          <StarIcon className=" h-6 w-6 text-orange-500" />
          <StarIcon className=" h-6 w-6 text-orange-500" />
          <StarIcon className=" h-6 w-6 text-orange-500" />
          <StarIcon className=" h-6 w-6 text-orange-500" />
        </div>
        <div className=" flex flex-row items-center justify-between">
          <Typography variant="h6" className="font-semibold text-MAIN_COLOR">
            {product.price.amount} <span>{product.price.currencyCode}</span>
          </Typography>

          <IconButton>
            <ShoppingBagIcon className="h-6 w-6 text-SECONDARY_DARK" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
