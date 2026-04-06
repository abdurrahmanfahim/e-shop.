import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ExpandIcon from "../icons/ExpandIcon";

const ProductDetailsSlider = ({ setActiveModalSrc, setIsModalOpen, images = [] }) => {
  const [nav1, setNav1] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef1 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
  }, []);

  return (
    <div className="relative">
      <div className="slider-container w-full max-w-[834px]">
        <Slider ref={sliderRef1} afterChange={(i) => setCurrentIndex(i)}>
          {images.map((src, i) => (
            <div key={i}>
              <div className="w-full h-64 sm:h-80 lg:h-[542px] flex items-center justify-center bg-gray-50 rounded-lg">
                <img
                  className="max-w-full max-h-full object-contain"
                  src={src}
                  alt={`product-${i}`}
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex gap-6 mt-4 lg:mt-6">
          {images.slice(0, 3).map((src, i) => (
            <div
              key={i}
              className="w-16 h-14 sm:w-20 sm:h-16 lg:w-[94px] lg:h-[82px] shrink-0 flex items-center justify-center cursor-pointer"
              onClick={() => {
                setActiveModalSrc(src);
                setIsModalOpen(true);
                sliderRef1.current?.slickGoTo(i);
                setCurrentIndex(i);
              }}
            >
              <img
                className={`object-cover size-full border rounded-10p p-2 lg:p-3 hover:border-orange ${
                  currentIndex === i ? "border-2 border-orange" : "border border-[#AFAFAF]"
                }`}
                src={src}
                alt={`thumb-${i}`}
              />
            </div>
          ))}
        </div>
      </div>

      <span
        className="absolute py-2 px-2 right-2 lg:right-4 top-2 lg:top-0 cursor-pointer z-10 bg-white rounded-full shadow-md hover:shadow-lg"
        onClick={() => {
          setActiveModalSrc(images[currentIndex]);
          setIsModalOpen(true);
        }}
      >
        <ExpandIcon />
      </span>
    </div>
  );
};

export default ProductDetailsSlider;
