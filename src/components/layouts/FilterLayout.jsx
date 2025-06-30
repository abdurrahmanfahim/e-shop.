import React, { useState } from "react";
import { GrDown } from "react-icons/gr";
import CheckBoxRect from "../../icons/CheckBoxRect";
import CheckBoxChecked from "../../icons/CheckBoxChecked";

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

  return (
    <div
      className='p-12 font-["Montserrat"] rounded-[25px]'
      style={{ backgroundColor: bg }}
    >
      <div>
        <div className="flex justify-between items-start mb-5  ">
          <h5 className="text-xl font-bold leading-[30px] capitalize ">
            categories
          </h5>
          <GrDown className="text-xs self-center rotate-180  " />
        </div>
        <ul className="flex flex-col gap-3 ">
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            <CheckBoxRect />
            <CheckBoxChecked />
            Computers & Tablets
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            Mobile & Accessories
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            TV & Home Theater
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            Audio & Headphones
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            Cameras & Camcorders
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            Gaming Equipment
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            Home Appliances
          </li>
        </ul>
      </div>
      <hr className="w-full border-t border-t-[#C3C3C3] my-10   " />

      <div>
        <div className="flex justify-between items-start  mb-5  ">
          <h5 className="text-xl font-bold leading-[30px] capitalize ">
            Brands
          </h5>
          <GrDown className="text-xs self-center rotate-180  " />
        </div>
        <ul className="flex flex-col gap-3 ">
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            <CheckBoxRect />
            <CheckBoxChecked />
            Computers & Tablets
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            Mobile & Accessories
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            TV & Home Theater
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            Audio & Headphones
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            Cameras & Camcorders
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            Gaming Equipment
          </li>
          <li className="flex gap-2 items-center  ">
            <input type="checkbox" className="accent-[#ff624c] size-4 " />
            Home Appliances
          </li>
        </ul>
      </div>
      <hr className="w-full border-t border-t-[#C3C3C3] my-10   " />
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
              className="w-12 pl-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>

          <div className="border border-[#929292] rounded-[10px] w-[124px] h-[74px] flex justify-center items-center text-center ">
            <span>$</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-13 pl-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>

        <div className="relative w-full mt-[30px] h-5 overflow-hidden  ">
          <div className="absolute w-full top-2 bg-[#C3C3C3] h-0.5 "></div>
          <div
            className="absolute left-0 top-2 h-0.5 bg-[#FF624C] rounded  "
            style={{
              left: `${minPercent}%`,
              width: `${(maxPercent - minPercent) > 100 ? 100 : (maxPercent - minPercent)}%`,
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
