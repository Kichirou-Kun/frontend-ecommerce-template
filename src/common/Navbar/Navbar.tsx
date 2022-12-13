import Logo from "@components/Logo";
import NavMenuActions from "@components/NavMenuActions";
import NavMenuList from "@components/NavMenuList";
import { useUI } from "@context/UIContext/UIContext";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Container from "@ui/Container";
import IconButton from "@ui/IconButton";
import React from "react";

const Navbar = () => {
  const { setOpenSidebar } = useUI();
  return (
    <div className="z-40 bg-white py-10">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <Logo />
          <div className="hidden lg:flex">
            <NavMenuList />
          </div>
          <div className="hidden lg:flex">
            <NavMenuActions />
          </div>

          <div className="flex lg:hidden">
            <IconButton onClick={setOpenSidebar}>
              <Bars3Icon className="h-6 w-6 text-SECONDARY_DARK" />
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
