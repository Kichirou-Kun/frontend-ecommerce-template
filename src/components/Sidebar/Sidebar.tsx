import Logo from "@components/Logo";
import NavMenuActions from "@components/NavMenuActions";
import NavMenuList from "@components/NavMenuList";
import { XMarkIcon } from "@heroicons/react/24/solid";
import IconButton from "@ui/IconButton";
import React from "react";
import HotLineNavActions from "@components/HotLineNavActions";

interface Props {
  onClose?: () => void;
}
const Sidebar = ({ onClose }: Props) => {
  return (
    <aside className="relative h-full w-full">
      <div className="flex flex-row items-center justify-between border-b p-6">
        <Logo size="small" />
        <IconButton onClick={onClose}>
          <XMarkIcon className="h-6 w-6 text-SECONDARY_DARK" />
        </IconButton>
      </div>
      <div className="border-b p-6">
        <NavMenuList direction="column" />
      </div>
      <div className="space-x-6 border-b p-6">
        <NavMenuActions />
      </div>
      <div className="p-6 ">
        <HotLineNavActions />
      </div>
    </aside>
  );
};

export default Sidebar;
