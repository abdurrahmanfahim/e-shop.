import React, { useRef, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import ImageModal from "./ImageModal";
import ProductDetailsSlider from "./ProductDetailsSlider";
import Shipping from "../icons/Shipping";
import Transparent from "../icons/Transparent";
import Shield from "../icons/Shield";
import Button from "./Button";
import CartIcon from "../icons/CartIcon";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";
import ProductDetailsAcc from "./ProductDetailsAcc";

const ProductDetailsCard = () => {
  let [activeModalSrc, setActiveModalSrc] = useState("");
  let [isModalOpen, setIsModalOpen] = useState(false);

  const imageModalRef = useRef(null);

  const laptopDetails = {
  Specification: [
    { name: "Brand", value: "NexSUS Tech Company" },
    { name: "Display", value: "17.3-inch Full HD (1920 x 1080), 144Hz IPS panel with 100% sRGB, Adaptive-Sync, anti-glare" },
    { name: "Processor", value: "Intel Core i9-10980HK (8 cores, 16 threads, up to 5.3GHz turbo)" },
    { name: "Graphics", value: "NVIDIA GeForce RTX 3080 (16GB GDDR6)" },
    { name: "Memory", value: "32GB DDR4-3200 RAM" },
    { name: "Storage", value: "1TB PCIe NVMe M.2 SSD" },
    { name: "Audio", value: "2 x 4W speakers, Smart Amp tech" },
    { name: "Connection", value: "Wi-Fi 6, BT 5.1, Ethernet, HDMI 2.0b, USB-C with DP 1.4 & PD, 3x USB-A, 3.5mm audio" },
    { name: "Keyboard", value: "RGB Backlit Chiclet, N-key rollover, Aura Sync" },
    { name: "Battery", value: "4-cell 90Wh (up to 8 hrs)" },
    { name: "Dimensions", value: "15.7 x 11.1 x 1.0 in" },
    { name: "Weight", value: "6.28 lbs" }
  ],

  Description: `Power through any task with the NexSUS 17.3-inch gaming laptop, designed for creators and gamers alike. Featuring an ultra-fast Intel Core i9, RTX 3080 graphics, and a vivid 144Hz display with 100% sRGB accuracy, this machine delivers immersive visuals and unmatched performance. Advanced cooling, premium audio, and RGB lighting complete the premium package.`,

  Return: `Returns are accepted within 10 days of delivery. Product must be unused, in original packaging, and include all accessories. A restocking fee may apply. Customer is responsible for return shipping unless the item is defective or incorrect.`,

  Reviews: [
    {
      user: "Zahid H.",
      rating: 5,
      comment: "An absolute beast! Handles my 3D rendering and AAA games effortlessly. Highly recommend!"
    },
    {
      user: "Tanisha R.",
      rating: 4,
      comment: "Fantastic performance and screen. A bit heavy, but expected for this power."
    },
    {
      user: "Mehedi A.",
      rating: 5,
      comment: "Best laptop I’ve ever used. The RGB keyboard and build quality are top notch."
    }
  ]
};



  return (
    <div className=" mt-12 ">
      <div className="flex justify-between">
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

      <div className="flex justify-between items-center mt-16 ">
        <div className="flex gap-12 ">
          <div className="flex gap-6 items-center ">
            <div>
              <Shipping />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-base leading-6'>
              <h6 className=" font-bold  ">Free Shipping</h6>
              <p className="font-normal">Worldwide available</p>
            </div>
          </div>

          <div className="flex gap-6 items-center ">
            <div>
              <Shield />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-base leading-6'>
              <h6 className=" font-bold  ">100% Guaranteed</h6>
              <p className="font-normal">Receive product first</p>
            </div>
          </div>

          <div className="flex gap-6 items-center ">
            <div>
              <Transparent />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-base leading-6'>
              <h6 className=" font-bold  ">Return Available</h6>
              <p className="font-normal">See return policy</p>
            </div>
          </div>
        </div>
        <div className="flex gap-21 items-center ">
          <div className="flex gap-12 ">
            <button className="size-[56px] p-4 rounded-full hover:bg-[#F4F4F4] ">
              <MinusIcon />
            </button>
            <input className="countInput w-21 font-poppins text-4xl font-semibold leading-[46px] placeholder:text-black text-center outline-0 [appearance:textfield]  " type="number" placeholder="1" />
            <button className="size-[56px] p-4 rounded-full hover:bg-[#F4F4F4] ">
              <PlusIcon />
            </button>
          </div>
          <div className="flex items-center gap-4 ">
            <Button text={"Buy Now"} />
            <button className="p-[17px] border border-orange rounded-[10px] cursor-pointer ">
              <CartIcon color="#FF624C" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[100px] ">
        <ProductDetailsAcc productData={laptopDetails} />
      </div>

    </div>
  );
};

export default ProductDetailsCard;
