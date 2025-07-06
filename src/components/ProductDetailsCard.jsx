import React, { useRef, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import ImageModal from "./ImageModal";
import ProductDetailsSlider from "./ProductDetailsSlider";

const ProductDetailsCard = () => {
  let [activeModalSrc, setActiveModalSrc] = useState("");
  let [isModalOpen, setIsModalOpen] = useState(false);

  const imageModalRef = useRef(null);

  return (
    <div className="flex justify-between mt-12 ">
      <ImageModal
        ref={imageModalRef}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        imgSrc={activeModalSrc}
      />
      <div className="relative  ">
        <ProductDetailsSlider
          setActiveModalSrc={setActiveModalSrc}
          setIsModalOpen={setIsModalOpen}
        />
      </div>

      <div className="w-[632px] ">
        <div className="flex gap-2 items-center mt-1 mb-5  ">
          <p className="flex text-[#FED550]">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </p>
          <span className='font-["Montserrat"] text-base font-normal leading-6  '>
            ( {152} )
          </span>
        </div>

        <h2 className="text-black font-poppins text-4xl font-semibold leading-[46px] ">
          NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro
        </h2>

        <div className="flex items-center gap-[18px] ">
          <h1 className="font-poppins font-bold leading-[64px] text-[56px] text-orange ">
            $2,999.99
          </h1>
          <span className="font-montserrat text-xl leading-[30px] text-black  opacity-50 block mt-2.5 relative after:[''] after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:top-1/2 ">
            $5,499.99
          </span>
        </div>

        <ul className=" mt-12 flex flex-col gap-4 ">
          <li className=" text-black text-xl leading-[30px] flex ">
            <h4 className="w-[170px] font-poppins capitalize ">
              <b>Brand</b>
            </h4>
            <p className="font-montserrat ">NexSUS Tech Company</p>
          </li>

          <li className=" text-black text-xl leading-[30px] flex ">
            <h4 className="w-[170px] font-poppins capitalize ">
              <b>Size</b>
            </h4>
            <p className="font-montserrat ">
              15.7 x 11.1 x 1.0 inches (W x D x H)
            </p>
          </li>
          <li className=" text-black text-xl leading-[30px] flex ">
            <h4 className="w-[170px] font-poppins capitalize ">
              <b>Weight</b>
            </h4>
            <p className="font-montserrat ">6.28 pounds</p>
          </li>
          <li className=" text-black text-xl leading-[30px] flex ">
            <h4 className="w-[170px] font-poppins capitalize ">
              <b>Delivery</b>
            </h4>
            <p className="font-montserrat ">Worldwide</p>
          </li>
          <li className=" text-black text-xl leading-[30px] flex justify-between  ">
            <h4 className="w-[170px] font-poppins capitalize ">
              <b>Variant</b>
            </h4>
            <div className="w-[462px] font-montserrat text-base flex flex-wrap gap-x-1 gap-y-2  ">
              <button className="py-4 px-8 font-bold border-[#979797] border bg-white rounded-[5px] hover:border-orange hover:text-orange capitalize ">
                Off White
              </button>
              <button className="py-4 px-8 font-bold border-orange text-orange border bg-white rounded-[5px] capitalize ">
                Space Gray
              </button>
              <button className="py-4 px-8 font-bold border-[#979797] border bg-white rounded-[5px] hover:border-orange hover:text-orange capitalize ">
                Jet Black
              </button>
              <button
                className={`py-4 px-8 font-bold border-[#979797] border bg-white rounded-[5px]  capitalize disabled:text-[#CBCBCB] disabled:border-[#CBCBCB]  `}
                disabled
              >
                Cinnamon Red
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
