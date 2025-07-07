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
import { Link } from "react-router-dom";
import LongArrow from "../icons/LongArrow";
import ProductLayout from "./layouts/ProductLayout";
import { laptopDetails, relatedProducts } from "../productDetailsArrays";

const ProductDetailsCard = () => {
  let [activeModalSrc, setActiveModalSrc] = useState("");
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [quantity, setQuantity] = useState(1);

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

        {/* minus plus */}

        <div className="flex gap-21 items-center ">
          <div className="flex gap-12 ">
            <button
              className="size-[56px] p-4 rounded-full hover:bg-[#F4F4F4] "
              onClick={() => handleQuantity("minus")}
            >
              <MinusIcon />
            </button>
            <input
              className="countInput w-21 font-poppins text-4xl font-semibold leading-[46px] placeholder:text-black text-center outline-0 [appearance:textfield]  "
              type="number"
              value={quantity}
            />
            <button
              className="size-[56px] p-4 rounded-full hover:bg-[#F4F4F4] "
              onClick={() => handleQuantity("plus")}
            >
              <PlusIcon />
            </button>
          </div>
          <div className="flex items-center gap-4 ">
            <Button text={"Buy Now"} />
            <Link to={'/cart'} className="p-[17px] border border-orange rounded-[10px] cursor-pointer ">
              <CartIcon color="#FF624C" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[100px] ">
        <ProductDetailsAcc productData={laptopDetails} />
      </div>

      <hr className="w-full border-t border-t-[#C3C3C3] mt-20 pt-16  " />

      <div className="flex justify-between items-center w-full mb-12 ">
        <h2 className="text-[#303030] font-['Poppins'] font-semibold leading-[46px] text-4xl capitalize ">
          Related Products
        </h2>
        <button>
          <Link
            className="flex items-center gap-4 font-['Montserrat'] text-base font-bold leading-6 text-[#FF624C] capitalize "
            to={"#"}
          >
            View All <LongArrow />
          </Link>
        </button>
      </div>

      <div className="flex gap-6 mb-16  ">
        {relatedProducts.map((item) => (
          <ProductLayout
            key={item.title}
            type={item.type}
            title={item.title}
            stars={item.stars}
            rating={item.rating}
            price={item.price}
            discounted={item.discounted}
            inStoke={item.inStoke}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsCard;
