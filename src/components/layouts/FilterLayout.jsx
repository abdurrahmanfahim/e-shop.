import { useState } from "react";
import { brandData, filterCategories } from "../../productDetailsArrays";
import ProductFilterAcc from "../ProductFilterAcc";

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
      className="sticky top-20 p-7 xl:p-12 font-montserrat rounded-[25px] overflow-auto "
      style={{ backgroundColor: bg }}
    >
      <ProductFilterAcc heading={"categories"} data={filterCategories} />

      <hr className="w-full border-t border-t-[#C3C3C3] mb-4 xl:mb-10   " />

      <ProductFilterAcc heading={"Brands"} data={brandData} />

      <hr className="w-full border-t border-t-[#C3C3C3] mb-4 xl:mb-10   " />
      <div>
        <ProductFilterAcc heading={"Price"}>
          <div className="flex justify-between items-center font-montserrat text-base leading-6 text-[#030303] text-center ">
            <div className="border border-[#929292] rounded-10p w-[124px] h-12 xl:h-[74px] flex justify-center items-center text-center ">
              <span>$</span>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-12 pl-1 outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            <div className="border border-[#929292] rounded-10p w-[124px] h-12 xl:h-[74px] flex justify-center items-center text-center ">
              <span>$</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-14 block pl-1 outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>

          <div className="relative w-full mt-4 xl:mt-7.5 h-5 overflow-hidden  ">
            <div className="absolute w-full top-2 bg-[#C3C3C3] h-0.5 "></div>
            <div
              className="absolute left-0 top-2 h-0.5 bg-orange rounded  "
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
        </ProductFilterAcc>
      </div>
    </div>
  );
};

export default FilterLayout;
