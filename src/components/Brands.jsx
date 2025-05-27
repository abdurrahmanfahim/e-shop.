import React from "react";
import Samsung from "../icons/brands/Samsung";
import OpenAi from "../icons/brands/OpenAi";
import Amazon from "../icons/brands/Amazon";
import Tencent from "../icons/brands/Tencent";
import Spotify from "../icons/brands/Spotify";
import Container from "./layouts/Container";
import Slider from "react-slick";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <Container>
      <Slider {...settings} className="py-[100px] brand ">
        <div>
          <Samsung />
        </div>

        <div>
          <OpenAi />
        </div>

        <div>
          <Amazon />
        </div>

        <div>
          <Tencent />
        </div>

        <div>
          <Spotify />
        </div>
        <div>
          <Samsung />
        </div>

        <div>
          <OpenAi />
        </div>

        <div>
          <Amazon />
        </div>

        <div>
          <Tencent />
        </div>

        <div>
          <Spotify />
        </div>
      </Slider>
    </Container>
  );
};

export default Brands;
