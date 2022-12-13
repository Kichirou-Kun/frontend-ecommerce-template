import { AUTHS } from "@config/paths";
import React from "react";
import NextLink from "next/link";
import { useUI } from "@context/UIContext/UIContext";

const HotLineNavActions = () => {
  const { setCloseSidebar } = useUI();
  return (
    <div className="flex flex-row items-center space-x-6">
      <NextLink href={AUTHS.LOGIN}>
        <div
          onClick={setCloseSidebar}
          className="text-base font-semibold text-gray-600 transition-colors duration-150 ease-linear hover:text-SECONDARY_DARK"
        >
          LOGIN
        </div>
      </NextLink>
      <NextLink href={AUTHS.REGISTER}>
        <div
          onClick={setCloseSidebar}
          className="text-base font-semibold text-gray-600 transition-colors duration-150 ease-linear hover:text-SECONDARY_DARK"
        >
          REGISTER
        </div>
      </NextLink>
    </div>
  );
};

export default HotLineNavActions;
