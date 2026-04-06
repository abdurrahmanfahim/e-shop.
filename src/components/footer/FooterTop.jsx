import { useTranslation } from "react-i18next";
import Button from "../Button";

const FooterTop = () => {
  const { t } = useTranslation();
  const btnText = t("Subscribe");

  return (
    <div
      className=" py-12 lg:py-[114px] px-6 lg:px-[100px] rounded-2xl lg:rounded-3xl text-center lg:text-left  "
      style={{
        background:
          "linear-gradient(90deg,rgba(244, 244, 244, 1) 35%, rgba(217, 217, 217, 1) 50%)",
      }}
    >
      <h2 className="font-['Poppins'] text-2xl lg:text-4xl font-semibold leading-[30px] lg:leading-[46px]  ">
        {t("Get_Our_Updates")}
      </h2>
      <p className="font-montserrat text-lg lg:text-xl font-normal leading-[26px] lg:leading-[30px] w-full lg:w-[490px] pt-3 lg:pt-4 pb-6 lg:pb-8 mx-auto lg:mx-0  ">
        {t("Newsletter_Description")}
      </p>

      <input
        className="text-[#626262] font-montserrat font-normal text-sm leading-5 p-4 lg:p-6 rounded-10p border border-[#979797] w-full lg:w-[494px] bg-white mb-4   "
        type="text"
        placeholder="Enter your email address ..."
      />
      <br />
      <div className="flex justify-center lg:justify-start">
        <Button text={btnText} />
      </div>
    </div>
  );
};

export default FooterTop;
