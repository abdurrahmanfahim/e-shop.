import React from "react";
import Container from "../../layouts/Container";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";

const BottomHeader = () => {
  return (
    <div className="bg-[#FF624C] w-full sticky top-0 z-40 ">
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
