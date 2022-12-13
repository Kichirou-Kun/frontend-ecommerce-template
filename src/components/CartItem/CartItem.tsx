import React from "react";
import NextImage from "next/image";
import img from "../../../public/assets/products/Men-TShirt-White-Front__99616.1603284781.png";
import Typography from "@ui/Typography";
import IconButton from "@ui/IconButton";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import NextLink from "next/link";
import { useUI } from "@context/UIContext/UIContext";
import s from "./CartItem.module.css";

const CartItem = () => {
  const { setCloseCart } = useUI();
  return (
    <li className="relative flex flex-row space-x-8 py-8">
      <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded bg-MAIN_COLOR">
        <NextImage
          src={img}
          alt="cartItem Image"
          width={150}
          height={150}
          unoptimized
        />
      </div>
      <div className="flex-1 ">
        <NextLink
          onClick={setCloseCart}
          href={`/product/${1}`}
          className="text-lg font-semibold transition-colors duration-150 ease-linear hover:text-MAIN_COLOR"
        >
          T-Shirt
        </NextLink>
      </div>

      <div className="flex flex-row items-center space-x-2">
        <IconButton>
          <PlusIcon className="h-5 w-5" />
        </IconButton>
        <input type="number" min={0} max={99} className={s.quantity} />
        <IconButton>
          <MinusIcon className="h-5 w-5" />
        </IconButton>
      </div>
      <Typography variant="h6">15000MMK</Typography>

      <IconButton className="absolute top-0 right-0 ">
        <TrashIcon className="h-4 w-4 text-red-600" />
      </IconButton>
    </li>
  );
};

export default CartItem;
