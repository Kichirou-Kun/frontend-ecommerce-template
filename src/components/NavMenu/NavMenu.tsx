import { useUI } from "@context/UIContext/UIContext";
import NextLink from "next/link";
import React from "react";

interface Props {
  title: string;
  href: string;
}
const NavMenu = ({ title, href }: Props) => {
  const { setCloseSidebar } = useUI();
  return (
    <NextLink href={href} legacyBehavior>
      <a
        onClick={setCloseSidebar}
        className="font-semibold uppercase leading-snug text-SECONDARY_DARK"
      >
        {title}
      </a>
    </NextLink>
  );
};

export default NavMenu;
