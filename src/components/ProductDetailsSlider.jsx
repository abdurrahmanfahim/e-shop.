import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ExpandIcon from "../icons/ExpandIcon";

const ProductDetailsSlider = ({ setActiveModalSrc, setIsModalOpen }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  var settingsTwo = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
    <div>
      <div className="slider-container w-[834px] ">
        <Slider asNavFor={nav2} ref={sliderRef1}>
          <div>
            <div className="w-[834px] h-[542px] flex items-center justify-center">
              <img
                className=" object-cover"
                src="./images/lrgTv.jpg"
                alt="productDetails"
              />
            </div>
          </div>
          <div>
            <div className="w-[834px] h-[542px] flex items-center justify-center">
              <img
                className="w-2/3 mx-auto h-auto object-cover"
                src="./images/productimg.jpg"
                alt="productDetails"
              />
            </div>
          </div>
          <div>
            <div className="w-[834px] h-[542px] flex items-center justify-center">
              <img
                className=" object-cover"
                src="./images/tv.jpg"
                alt="productDetails"
              />
            </div>
          </div>
        </Slider>

        <Slider
          {...settingsTwo}
          asNavFor={nav1}
          ref={sliderRef2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          className="w-[330px] mt-6 secondSlider"
        >
          <div className=" overflow-visible">
            <div
              className="w-[94px] h-[82px] flex items-center justify-center"
              onClick={() => setActiveModalSrc("./images/lrgTv.jpg")}
            >
              <img
                className=" object-cover size-full border border-[#AFAFAF] rounded-[10px] p-3 focus:border-orange"
                src="./images/lrgTv.jpg"
                alt="sliderSmall"
              />
            </div>
          </div>
          <div>
            <div
              className="w-[94px] h-[82px] flex items-center justify-center"
              onClick={() => setActiveModalSrc("./images/productimg.jpg")}
            >
              <img
                className="object-cover size-full border border-[#AFAFAF] rounded-[10px] p-3 focus:border-orange"
                src="./images/productimg.jpg"
                alt="productDetails"
              />
            </div>
          </div>
          <div>
            <div
              className="w-[94px] h-[82px] flex items-center justify-center"
              onClick={() => setActiveModalSrc("./images/tv.jpg")}
            >
              <img
                className=" object-cover size-full border border-[#AFAFAF] rounded-[10px] p-3 focus:border-orange"
                src="./images/tv.jpg"
                alt="sliderSmall"
              />
            </div>
          </div>
        </Slider>
      </div>

      <span
        className="absolute py-2 px-2 right-4 top-0 cursor-pointer z-0 "
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <ExpandIcon />
      </span>
    </div>
  );
};

export default ProductDetailsSlider;
