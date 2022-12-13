import React from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import IconButton from "@ui/IconButton";
import { useUI } from "@context/UIContext/UIContext";
const NavMenuActions = () => {
  const { setCloseSidebar, setOpenCart } = useUI();

  const cartHandler = () => {
    setOpenCart();
    setCloseSidebar();
  };
  return (
    <div className="flex flex-row items-center space-x-6">
      <IconButton onClick={cartHandler}>
        <ShoppingBagIcon className="h-6 w-6 text-SECONDARY_DARK" />
      </IconButton>
      <IconButton onClick={setCloseSidebar}>
        <HeartIcon className="h-6 w-6 text-SECONDARY_DARK" />
      </IconButton>
    </div>
  );
};

export default NavMenuActions;
