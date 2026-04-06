import { useRef, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import CartIcon from "../icons/CartIcon";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";
import Shield from "../icons/Shield";
import Shipping from "../icons/Shipping";
import Transparent from "../icons/Transparent";
import { laptopDetails } from "../productDetailsArrays";
import Button from "./Button";
import ImageModal from "./ImageModal";
import ProductDetailsAcc from "./ProductDetailsAcc";
import ProductDetailsSlider from "./ProductDetailsSlider";

const ProductDetailsCard = () => {
  let [activeModalSrc, setActiveModalSrc] = useState("");
  let [isModalOpen, setIsModalOpen] = useState(false);
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

  const imageModalRef = useRef(null);

  return (
    <div className="mt-8 lg:mt-12">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8 w-full">
        <ImageModal
          ref={imageModalRef}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          imgSrc={activeModalSrc}
        />
        <div className="w-full lg:w-1/2 xl:w-auto">
          <ProductDetailsSlider
            setActiveModalSrc={setActiveModalSrc}
            setIsModalOpen={setIsModalOpen}
          />
        </div>

        <div className="w-full lg:w-1/2 xl:w-[632px]">
          <div className="flex gap-2 items-center mt-1 mb-4 lg:mb-5">
            <p className="flex text-yellow">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </p>
            <span className="font-montserrat text-sm lg:text-base font-normal leading-5 lg:leading-6">
              ( {152} )
            </span>
          </div>

          <h2 className="text-black font-poppins text-lg sm:text-xl lg:text-4xl font-semibold leading-7 lg:leading-[46px] mb-4 lg:mb-0">
            NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7" 1TB SSD 16GB RAM Pro
          </h2>

          <div className="flex items-center gap-3 lg:gap-[18px] mt-3 mb-4 lg:mb-0">
            <h1 className="font-poppins font-bold leading-10 lg:leading-[64px] text-2xl lg:text-[56px] text-orange">
              $2,999.99
            </h1>
            <span className="font-montserrat text-lg lg:text-xl leading-6 lg:leading-[30px] text-black opacity-50 block mt-1 lg:mt-2.5 relative after:[''] after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:top-1/2">
              $5,499.99
            </span>
          </div>

          <ul className="mt-4 lg:mt-12 flex flex-col gap-3 lg:gap-4">
            <li className="text-black text-base lg:text-xl leading-6 lg:leading-[30px] flex flex-col sm:flex-row">
              <h4 className="w-full sm:w-[170px] font-poppins capitalize font-bold mb-1 sm:mb-0">
                Brand
              </h4>
              <p className="font-montserrat">NexSUS Tech Company</p>
            </li>

            <li className="text-black text-base lg:text-xl leading-6 lg:leading-[30px] flex flex-col sm:flex-row">
              <h4 className="w-full sm:w-[170px] font-poppins capitalize font-bold mb-1 sm:mb-0">
                Size
              </h4>
              <p className="font-montserrat">
                15.7 x 11.1 x 1.0 inches (W x D x H)
              </p>
            </li>
            <li className="text-black text-base lg:text-xl leading-6 lg:leading-[30px] flex flex-col sm:flex-row">
              <h4 className="w-full sm:w-[170px] font-poppins capitalize font-bold mb-1 sm:mb-0">
                Weight
              </h4>
              <p className="font-montserrat">6.28 pounds</p>
            </li>
            <li className="text-black text-base lg:text-xl leading-6 lg:leading-[30px] flex flex-col sm:flex-row">
              <h4 className="w-full sm:w-[170px] font-poppins capitalize font-bold mb-1 sm:mb-0">
                Delivery
              </h4>
              <p className="font-montserrat">Worldwide</p>
            </li>
            <li className="text-black text-base lg:text-xl leading-6 lg:leading-[30px] flex flex-col sm:flex-row sm:justify-between">
              <h4 className="w-full sm:w-[170px] font-poppins capitalize font-bold mb-2 sm:mb-0">
                Variant
              </h4>
              <div className="w-full sm:w-auto font-montserrat text-sm lg:text-base flex flex-wrap gap-x-1 gap-y-2">
                <button className="py-2 lg:py-4 px-4 lg:px-8 font-bold border-[#979797] border bg-white rounded-[5px] hover:border-orange hover:text-orange capitalize">
                  Off White
                </button>
                <button className="py-2 lg:py-4 px-4 lg:px-8 font-bold border-orange text-orange border bg-white rounded-[5px] capitalize">
                  Space Gray
                </button>
                <button className="py-2 lg:py-4 px-4 lg:px-8 font-bold border-[#979797] border bg-white rounded-[5px] hover:border-orange hover:text-orange capitalize">
                  Jet Black
                </button>
                <button
                  className="py-2 lg:py-4 px-4 lg:px-8 font-bold border-[#979797] border bg-white rounded-[5px] capitalize disabled:text-[#CBCBCB] disabled:border-[#CBCBCB]"
                  disabled
                >
                  Cinnamon Red
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-8 lg:mt-16 gap-6">
        <div className="flex flex-col xs:flex-row flex-wrap sm:flex-row gap-4 sm:gap-6 lg:gap-12">
          <div className="flex gap-4 lg:gap-6 items-center">
            <div>
              <Shipping />
            </div>
            <div className="text-black font-montserrat text-sm lg:text-base leading-5 lg:leading-6">
              <h6 className="font-bold">Free Shipping</h6>
              <p className="font-normal">Worldwide available</p>
            </div>
          </div>

          <div className="flex gap-4 lg:gap-6 items-center">
            <div>
              <Shield />
            </div>
            <div className="text-black font-montserrat text-sm lg:text-base leading-5 lg:leading-6">
              <h6 className="font-bold">100% Guaranteed</h6>
              <p className="font-normal">Receive product first</p>
            </div>
          </div>

          <div className="flex gap-4 lg:gap-6 items-center">
            <div>
              <Transparent />
            </div>
            <div className="text-black font-montserrat text-sm lg:text-base leading-5 lg:leading-6">
              <h6 className="font-bold">Return Available</h6>
              <p className="font-normal">See return policy</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-12 items-center sm:items-start lg:items-center">
          <div className="flex gap-4 lg:gap-12 items-center">
            <button
              className="size-12 lg:size-[56px] p-3 lg:p-4 rounded-full hover:bg-lightGray"
              onClick={() => handleQuantity("minus")}
            >
              <MinusIcon />
            </button>
            <input
              className="countInput w-16 lg:w-21 font-poppins text-2xl lg:text-4xl font-semibold leading-8 lg:leading-[46px] placeholder:text-black text-center outline-0 [appearance:textfield]"
              type="number"
              value={quantity}
            />
            <button
              className="size-12 lg:size-[56px] p-3 lg:p-4 rounded-full hover:bg-lightGray"
              onClick={() => handleQuantity("plus")}
            >
              <PlusIcon />
            </button>
          </div>
          <div className="flex items-center gap-3 lg:gap-4">
            <Button text={"Buy Now"} />
            <Link
              to={"/cart"}
              className="p-3 lg:p-[17px] border border-orange rounded-10p cursor-pointer"
            >
              <CartIcon color="#FF624C" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-[100px]">
        <ProductDetailsAcc productData={laptopDetails} />
      </div>
    </div>
  );
};

export default ProductDetailsCard;
