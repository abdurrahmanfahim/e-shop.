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
        <div className="flex items-center justify-between py-[100px] ">
          <div className="ml-[200px] " >
            <Samsung />
          </div>

          <div className="ml-[200px] " >
            <OpenAi />
          </div>

          <div className="ml-[200px] " >
            <Amazon />
          </div>

          <div className="ml-[200px] " >
            <Tencent />
          </div>

          <div className="ml-[200px] " >
            <Spotify />
          </div>
          <div className="ml-[200px] " >
            <Samsung />
          </div>

          <div className="ml-[200px] " >
            <OpenAi />
          </div>

          <div className="ml-[200px] " >
            <Amazon />
          </div>

          <div className="ml-[200px] " >
            <Tencent />
          </div>

          <div className="ml-[200px] " >
            <Spotify />
          </div>
        </div>
      </Marquee>
    </Container>
  );
};

export default Brands;
