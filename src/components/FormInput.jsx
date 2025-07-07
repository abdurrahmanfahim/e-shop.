import React from "react";

const FormInput = ({
  inpType = "text",
  label,
  placeholder,
  star = false,
  textAria = false,
}) => {
  return (
    <>
      <label className=" font-montserrat text-xl font-bold leading-[30px] text-black ">
        {label} <span className="text-orange">{star && "*"}</span>
      </label>
      {textAria ? (
        <textarea
          className="h-[174px] font-montserrat text-xl leading-[30px] text-black rounded-[10px] px-8 py-6 w-full border border-[#CBCBCB] mt-3  "
          type={inpType}
          placeholder={placeholder}
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
