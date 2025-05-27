import React from "react";
import Button from "../Button";
import { useTranslation } from "react-i18next";

const FooterTop = () => {
  
  const { t } = useTranslation();
  const btnText = t("Subscribe");

  return (
    <div
      className=" py-[114px] px-[100px] rounded-3xl  "
      style={{
        background:
          "linear-gradient(90deg,rgba(244, 244, 244, 1) 35%, rgba(217, 217, 217, 1) 50%)",
      }}
    >
      <h2 className="font-['Poppins'] text-4xl font-semibold leading-[46px]  ">
        {t("Get_Our_Updates")}
      </h2>
      <p className="font-['Montserrat'] text-xl font-normal leading-[30px] w-[490px] pt-4 pb-8  ">
        {t("Newsletter_Description")}
      </p>

      <input
        className="text-[#626262] font-['Montserrat'] font-normal text-sm leading-5 p-6 rounded-[10px] border border-[#979797] w-[494px] bg-white mb-4   "
        type="text"
        placeholder="Enter your email address ..."
      />
      <br />
      <Button text={btnText} />
    </div>
  );
};

export default FooterTop;
