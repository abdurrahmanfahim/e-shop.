import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const ProductCounter = () => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (value) => {
    if (value === "minus") { if (quantity > 0) setQuantity((q) => q - 1); }
    else setQuantity((q) => q + 1);
  };

  return (
    <div className="flex items-center h-full">
      <button className="size-10 flex justify-center items-center rounded-full hover:bg-lightGray" onClick={() => handleQuantity("minus")}>
        <HiMinus className="text-base" />
      </button>
      <input
        className="countInput size-10 font-poppins text-base font-bold leading-6 placeholder:text-black text-center outline-0 [appearance:textfield] bg-lightGray rounded-full"
        type="number"
        value={quantity}
        readOnly
      />
      <button className="size-10 flex justify-center items-center rounded-full hover:bg-lightGray" onClick={() => handleQuantity("plus")}>
        <HiPlus className="text-base" />
      </button>
    </div>
  );
};

export default ProductCounter;
