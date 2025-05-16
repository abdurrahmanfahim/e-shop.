import React from "react";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div className="p-6 bg-white border border-transparent rounded-[10px] hover:bg-[#F7F7F7] hover:border-[#C3C3C3] transition-all duration-300 ease-in-out text-[#303030] group ">
      <div className="relative ">
        <img
          className="mx-auto"
          src="./images/productimg.jpg"
          alt="productimg"
        />
        <span className="absolute -top-2 -right-2 px-5 py-1.5 bg-[#FF624C] text-white font-['Montserrat'] font-bold leading-6 rounded-md ">
          50%
        </span>{" "}
        <div className="flex absolute justify-center gap-[18px] left-1/2 -translate-x-1/2 bottom-[6px] scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out ">
          <Link
            to={"#"}
            className="size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-xl transition-all duration-300 ease-in-out border border-[#FF624C] "
          >
            <BsCart3 />
          </Link>
          <Link
            to={"#"}
            className="size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-xl transition-all duration-300 ease-in-out border border-[#FF624C] "
          >
            <GoHeart />
          </Link>
          <Link
            to={"#"}
            className="size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-xl transition-all duration-300 ease-in-out border border-[#FF624C] "
          >
            <IoShareSocialOutline />
          </Link>
        </div>
      </div>
      <div>
        <span className='font-["Montserrat"] text-sm font-normal leading-5 uppercase tracking-[5px] mt-10 mb-4 block '>
          AUDIO
        </span>
        <h4 className='font-["Poppins"] text-xl font-semibold leading-[30px] group-hover:text-[#FF624C] group-hover:underline transition-all duration-300 ease-in-out  '>
          WH-1000XM4 Wireless Headphones High Qu...
        </h4>
        <div className="flex gap-2 items-center mt-2 mb-6  ">
          <p className="flex text-[#FED550]">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </p>
          <span className='font-["Montserrat"] text-base font-normal leading-6  '>
            ( 120 )
          </span>
        </div>
        <h3 className='font-["Poppins"] font-semibold leading-[30px] text-2xl  '>
          $1,199.00
        </h3>
      </div>
    </div>
  );
};

export default ProductLayout;
