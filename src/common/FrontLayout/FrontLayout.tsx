import Footer from "@common/Footer";
import HotLine from "@common/HotLine";
import Navbar from "@common/Navbar";
import CartSidebar from "@components/CartSidebar";
import Sidebar from "@components/Sidebar";
import { useUI } from "@context/UIContext/UIContext";
import Drawer from "@ui/Drawer";
import React, { PropsWithChildren } from "react";

const SidebarUI = () => {
  const { openSidebar, setCloseSidebar } = useUI();

  return openSidebar ? (
    <Drawer onClose={setCloseSidebar} position="left">
      <Sidebar onClose={setCloseSidebar} />
    </Drawer>
  ) : null;
};

const CartSidebarUI = () => {
  const { setCloseCart, openCartSidebar } = useUI();
  return openCartSidebar ? (
    <Drawer onClose={setCloseCart} position="right">
      <CartSidebar />
    </Drawer>
  ) : null;
};
const FrontLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex h-screen flex-col justify-between bg-PRIMARY_WHITE">
      <header className="">
        <HotLine />
        <Navbar />
      </header>

      <main>{children}</main>
      <Footer />
      <SidebarUI />
      <CartSidebarUI />
    </div>
  );
};

export default FrontLayout;
