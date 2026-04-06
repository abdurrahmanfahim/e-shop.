import { useEffect, useRef, useState } from "react";
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <div className="slider-container w-full max-w-[834px]">
        <Slider asNavFor={nav2} ref={sliderRef1}>
          <div>
            <div className="w-full h-64 sm:h-80 lg:h-[542px] flex items-center justify-center bg-gray-50 rounded-lg">
              <img
                className="max-w-full max-h-full object-contain"
                src="./images/lrgTv.jpg"
                alt="productDetails"
              />
            </div>
          </div>
          <div>
            <div className="w-full h-64 sm:h-80 lg:h-[542px] flex items-center justify-center bg-gray-50 rounded-lg">
              <img
                className="max-w-full max-h-full object-contain"
                src="./images/productimg.jpg"
                alt="productDetails"
              />
            </div>
          </div>
          <div>
            <div className="w-full h-64 sm:h-80 lg:h-[542px] flex items-center justify-center bg-gray-50 rounded-lg">
              <img
                className="max-w-full max-h-full object-contain"
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
          className="w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[330px] mt-4 lg:mt-6 secondSlider"
        >
          <div className="overflow-visible px-1">
            <div
              className="w-16 h-14 sm:w-20 sm:h-16 lg:w-[94px] lg:h-[82px] flex items-center justify-center cursor-pointer"
              onClick={() => setActiveModalSrc("./images/lrgTv.jpg")}
            >
              <img
                className="object-cover size-full border border-[#AFAFAF] rounded-10p p-2 lg:p-3 focus:border-orange hover:border-orange"
                src="./images/lrgTv.jpg"
                alt="sliderSmall"
              />
            </div>
          </div>
          <div className="px-1">
            <div
              className="w-16 h-14 sm:w-20 sm:h-16 lg:w-[94px] lg:h-[82px] flex items-center justify-center cursor-pointer"
              onClick={() => setActiveModalSrc("./images/productimg.jpg")}
            >
              <img
                className="object-cover size-full border border-[#AFAFAF] rounded-10p p-2 lg:p-3 focus:border-orange hover:border-orange"
                src="./images/productimg.jpg"
                alt="productDetails"
              />
            </div>
          </div>
          <div className="px-1">
            <div
              className="w-16 h-14 sm:w-20 sm:h-16 lg:w-[94px] lg:h-[82px] flex items-center justify-center cursor-pointer"
              onClick={() => setActiveModalSrc("./images/tv.jpg")}
            >
              <img
                className="object-cover size-full border border-[#AFAFAF] rounded-10p p-2 lg:p-3 focus:border-orange hover:border-orange"
                src="./images/tv.jpg"
                alt="sliderSmall"
              />
            </div>
          </div>
        </Slider>
      </div>

      <span
        className="absolute py-2 px-2 right-2 lg:right-4 top-2 lg:top-0 cursor-pointer z-10 bg-white rounded-full shadow-md hover:shadow-lg"
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
