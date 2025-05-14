import React from "react";
import Button from "../Button";

const FooterTop = () => {
  return (
    <div
      className=" py-[114px] px-[100px] rounded-3xl  "
      style={{
        background:
          "linear-gradient(90deg,rgba(244, 244, 244, 1) 35%, rgba(217, 217, 217, 1) 50%)",
      }}
    >
      <h2 className="font-['Poppins'] text-4xl font-semibold leading-[46px]  ">
        Get Our Updates
      </h2>
      <p className="font-['Montserrat'] text-xl font-normal leading-[30px] w-[490px] pt-4 pb-8  ">
        Browse our wide selection of electronics and find the perfect promo for
        you from newsletter.
      </p>

      <input
        className="text-[#646464] font-normal text-sm leading-5 p-6 rounded-[10px] border border-[#979797] w-[494px] bg-white mb-4   "
        type="text"
        placeholder="Enter your email address ..."
      />
      <br />
      <Button text={'Subscribe'} />
    </div>
  );
};

export default FooterTop;
