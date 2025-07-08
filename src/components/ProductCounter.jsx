import React, { useState } from "react";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

const ProductCounter = () => {
  let [quantity, setQuantity] = useState(0);

  const handleQuantity = (value) => {
    if (value === "minus") {
      if (quantity > 0) {
        quantity--;
        setQuantity(quantity);
      }
    } else {
      quantity++;
      setQuantity(quantity);
    }
  };
  return (
    <div className="flex items-center h-full">
      <button
        className=" size-10 flex justify-center items-center rounded-full hover:bg-[#F4F4F4] "
        onClick={() => handleQuantity("minus")}
      >
        <MinusIcon height={16} width={16} />
      </button>
      <input
        className="countInput size-10 font-poppins text-base font-bold leading-6 placeholder:text-black text-center outline-0 [appearance:textfield] bg-lightGray rounded-full "
        type="number"
        value={quantity}
      />
      <button
        className=" size-10 flex justify-center items-center rounded-full hover:bg-[#F4F4F4] "
        onClick={() => handleQuantity("plus")}
      >
        <PlusIcon height={16} width={16} />
      </button>
    </div>
  );
};

export default ProductCounter;
