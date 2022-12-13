import HotLineNavActions from "@components/HotLineNavActions";
import Container from "@ui/Container";
import React from "react";

const HotLine = () => {
  return (
    <div className="bg-MAIN_COLOR bg-opacity-20 py-2">
      <Container className="flex flex-row items-center justify-between">
        <div className="cursor-pointer font-semibold text-gray-600 transition-colors duration-150 ease-linear hover:text-SECONDARY_DARK">
          +95900800700
        </div>
        <HotLineNavActions />
      </Container>
    </div>
  );
};

export default HotLine;
