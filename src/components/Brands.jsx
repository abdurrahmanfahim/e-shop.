import React from "react";
import Samsung from "../icons/brands/Samsung";
import OpenAi from "../icons/brands/OpenAi";
import Amazon from "../icons/brands/Amazon";
import Tencent from "../icons/brands/Tencent";
import Spotify from "../icons/brands/Spotify";
import Container from "./layouts/Container";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <Container>
      <Marquee speed={60}>
        <div className="flex items-center py-6 sm:py-10 lg:py-[100px]">
          {[Samsung, OpenAi, Amazon, Tencent, Spotify, Samsung, OpenAi, Amazon, Tencent, Spotify].map((Brand, i) => (
            <div key={i} className="mx-6 sm:mx-12 lg:mx-[100px] flex items-center">
              <Brand className="w-16 sm:w-24 lg:w-auto h-auto" />
            </div>
          ))}
        </div>
      </Marquee>
    </Container>
  );
};

export default Brands;