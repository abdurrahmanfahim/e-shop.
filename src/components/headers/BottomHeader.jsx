import React from "react";
import Container from "../layouts/Container";
import BottomLeft from "./bottomHeaderComponent/BottomLeft";
import BottomRight from "./bottomHeaderComponent/BottomRight";

const BottomHeader = () => {
  return (
    <div className="bg-[#FF624C] w-full ">
      <Container>
        <div className="flex justify-between font-['montserrat'] text-base font-semibold leading-6 text-white capitalize ">
          <BottomLeft />
          <BottomRight />
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
