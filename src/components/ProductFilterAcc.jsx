import React, { useEffect, useState } from "react";
import { GrDown } from "react-icons/gr";
import CustomCheckBox from "./CustomCheckBox";

const ProductFilterAcc = ({ data, heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  console.log(data)

  return (
    !children ?
      <div className="pb-10 cursor-pointer ">
      <div
        className="flex justify-between items-start mb-5  "
        onClick={() => setIsOpen(!isOpen)}
      >
        <h5 className="text-xl font-bold leading-[30px] capitalize ">
          {heading}
        </h5>
        <GrDown
          className={`text-xs self-center  transition-all duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          } `}
        />
      </div>
      <ul
        className={`flex flex-col gap-3 overflow-hidden ${
          isOpen ? "max-h-full" : "h-0"
        }`}
      >
        {data.map((item, index) => (
          <li key={index * index + 5*3}>
            <CustomCheckBox text={item.name} itemCount={item.value} />
          </li>
        ))}
      </ul>
    </div>
      : 
      
      <div className="pb-10 cursor-pointer ">
        
      <div
        className="flex justify-between items-start mb-5  "
          onClick={() => setIsOpen(!isOpen)}
          
      >
        <h5 className="text-xl font-bold leading-[30px] capitalize ">
          {heading}
        </h5>
        <GrDown
          className={`text-xs self-center  transition-all duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          } `}
        />
        </div>
        <div
          className={`flex flex-col gap-3 overflow-hidden ${
          isOpen ? "max-h-full" : "h-0"
        }`}
          
        >
      {children}
      </div>
    </div>
  );
};

export default ProductFilterAcc;
