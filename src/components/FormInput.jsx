import React from "react";

const FormInput = ({
  inpType = "text",
  label,
  placeholder,
  star = false,
  textAria = false,
  height
}) => {
  return (
    <>
      <label className=" font-montserrat text-xl font-bold leading-[30px] text-black ">
        {label} <span className="text-orange">{star && "*"}</span>
      </label>
      {textAria ? (
        <textarea
          className="font-montserrat text-xl leading-[30px] text-black rounded-[10px] px-8 py-6 w-full border border-[#CBCBCB] mt-3  "
          type={inpType}
          placeholder={placeholder}
          style={{height: height }}
        />
      ) : (
        <input
          className=" font-montserrat text-xl leading-[30px] text-black rounded-[10px] px-8 py-6 w-full border border-[#CBCBCB] mt-3  "
          type={inpType}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default FormInput;
