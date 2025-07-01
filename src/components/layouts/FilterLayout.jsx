import React, { useState } from "react";
import { GrDown } from "react-icons/gr";
import ProductFilterAcc from "../ProductFilterAcc";
import CustomCheckBox from "../CustomCheckBox";

const FilterLayout = ({ bg = "#F4F4F4" }) => {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(5000);

  const updateSlider = (type, price) => {
    const parseValue = parseInt(price);

    if (isNaN(parseValue)) return;

    if (type === "min") {
      if (parseValue > maxPrice) {
        setMinPrice(maxPrice);
      } else {
        setMinPrice(parseValue);
      }
    } else {
      if (parseValue < minPrice) {
        setMaxPrice(minPrice);
      } else {
        setMaxPrice(parseValue);
      }
    }
  };

  const minPercent = (minPrice / 10000) * 100;
  const maxPercent = (maxPrice / 10000) * 100;

const categories = [
  { name: "Computers & Tablets" },
  { name: "Mobile & Accessories" },
  { name: "TV & Home Theater" },
  { name: "Audio & Headphones" },
  { name: "Cameras & Camcorders" },
  { name: "Gaming Equipment" },
  { name: "Home Appliances" }
];



  return (
    <div
      className='p-12 font-["Montserrat"] rounded-[25px]'
      style={{ backgroundColor: bg }}
    >

      <ProductFilterAcc heading={'categories'} data={categories} />

      <hr className="w-full border-t border-t-[#C3C3C3] mb-10   " />

      <ProductFilterAcc heading={'Brands'} data={categories} />

      <hr className="w-full border-t border-t-[#C3C3C3] mb-10   " />
      <div>
        <div className="flex justify-between items-start  mb-5  ">
          <h5 className="text-xl font-bold leading-[30px] capitalize ">
            Price
          </h5>
          <GrDown className="text-xs self-center rotate-180  " />
        </div>
        <div className="flex justify-between items-center font-['Montserrat'] text-base leading-6 text-[#030303] text-center ">
          <div className="border border-[#929292] rounded-[10px] w-[124px] h-[74px] flex justify-center items-center text-center ">
            <span>$</span>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-12 pl-1 outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>

          <div className="border border-[#929292] rounded-[10px] w-[124px] h-[74px] flex justify-center items-center text-center ">
            <span>$</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-14 block pl-1 outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>

        <div className="relative w-full mt-[30px] h-5 overflow-hidden  ">
          <div className="absolute w-full top-2 bg-[#C3C3C3] h-0.5 "></div>
          <div
            className="absolute left-0 top-2 h-0.5 bg-[#FF624C] rounded  "
            style={{
              left: `${minPercent}%`,
              width: `${
                maxPercent - minPercent > 100 ? 100 : maxPercent - minPercent
              }%`,
            }}
          ></div>
          <input
            type="range"
            min={0}
            max={10000}
            step={10}
            value={minPrice}
            className="absolute w-full bg-transparent pointer-events-none appearance-none overflow-visible focus:outline-none  "
            onChange={(e) => updateSlider("min", e.target.value)}
          />
          <input
            type="range"
            min={0}
            max={10000}
            step={10}
            value={maxPrice}
            className="absolute w-full bg-transparent pointer-events-none appearance-none overflow-visible focus:outline-none  "
            onChange={(e) => updateSlider("max", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterLayout;
