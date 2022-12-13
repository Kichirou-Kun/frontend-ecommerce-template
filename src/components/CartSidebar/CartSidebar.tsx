import CartItem from "@components/CartItem";
import { useUI } from "@context/UIContext/UIContext";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import NextLink from "next/link";
import { FC } from "react";

const CartSidebar: FC = () => {
  const { setCloseCart } = useUI();
  const isEmpty = true;

  return (
    <div
      className={clsx("flex h-full flex-col", {
        ["bg-black text-white"]: isEmpty,
      })}
    >
      <header className="px-4 pt-6 pb-4 sm:px-6">
        <div className="flex items-start justify-between space-x-3">
          <div className="flex h-7 items-center">
            <button
              onClick={setCloseCart}
              className="transition duration-150 ease-in-out hover:text-gray-500"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {isEmpty ? (
        <div className="flex flex-1 flex-col items-center justify-center px-4">
          <span className="border-primary bg-secondary text-secondary flex h-16 w-16 items-center justify-center rounded-full border border-dashed p-12">
            <ShoppingBagIcon className="absolute h-6 w-6" />
          </span>
          <h2 className="pt-6 text-center text-2xl font-bold tracking-wide">
            Your cart is empty
          </h2>
          <p className="text-accents-3 px-10 pt-2 text-center">
            Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
          </p>
        </div>
      ) : (
        <>
          <div className="flex-1 px-4 sm:px-6">
            <h2 className="inline-block pt-1 pb-4 text-2xl font-bold leading-7 tracking-wide">
              My Cart
            </h2>
            <ul className="sm:divide-accents-3 border-accents-3 space-y-6 border-t py-6 sm:space-y-0 sm:divide-y sm:py-0">
              <CartItem />
              <CartItem />
            </ul>
          </div>
          <div className="flex-shrink-0 px-4  py-5 sm:px-6">
            <div className="border-t">
              <ul className="py-3">
                <li className="flex justify-between py-1">
                  <span>Subtotal</span>
                  <span>455</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Estimated Shipping</span>
                  <span className="font-bold tracking-wide">FREE</span>
                </li>
              </ul>
              <div className="mb-10 flex justify-between border-t py-3 font-bold">
                <span>Total</span>
                <span>455</span>
              </div>
            </div>
            <NextLink href={`/`}>
              <div className="rounded bg-SECONDARY_DARK py-3 px-6 text-center text-lg font-semibold uppercase text-white transition-opacity duration-150 ease-linear hover:bg-opacity-95">
                Proceed to Checkout
              </div>
            </NextLink>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
