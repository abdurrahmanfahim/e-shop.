import { Link } from "react-router-dom";
import {
  footerCategories,
  footerContact,
  footerLinks,
  footerSocials,
  footerSupports,
} from "../../productDetailsArrays";

const FooterBottom = () => {
  return (
    <div className="mt-12 lg:mt-[100px] mb-12 lg:mb-20">
      <div className="flex justify-between flex-wrap font-montserrat text-black mb-12 lg:mb-20 gap-6 ">
        <div className="flex flex-col justify-between max-sm:text-center grow ">
          <Link to={"/"}>
            <img
              className="max-[855px]:mx-auto "
              src="./images/logo.png"
              alt="footerLogo"
            />
          </Link>
          <ul className="flex flex-col  gap-3 flex-wrap font-normal text-sm lg:text-base leading-6 ">
            {footerContact.map((item) => (
              <li key={item.label} className="relative pl-0 lg:pl-8">
                <Link
                  className="hover:text-orange flex items-center max-[855px]:justify-center lg:justify-start gap-2"
                  to={item.to}
                >
                  <span
                    className={`text-[#646464] lg:absolute lg:top-1/2 lg:-translate-1/2 lg:left-2 ${item.className}`}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between gap-8 lg:gap-24 grow ">
          <div>
            <h4 className="font-semibold leading-[30px] font-poppins mb-4 lg:mb-6 text-lg lg:text-xl">
              Links
            </h4>
            <ul className="text-black font-normal text-sm lg:text-base leading-6 flex flex-col gap-3">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-orange" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold leading-[30px] font-poppins mb-4 lg:mb-6 text-lg lg:text-xl">
              Supports
            </h4>
            <ul className="text-black font-normal text-sm lg:text-base leading-6 flex flex-col gap-3">
              {footerSupports.map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-orange" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold leading-[30px] font-poppins mb-4 lg:mb-6 text-lg lg:text-xl">
              Categories
            </h4>
            <ul className="text-black font-normal text-sm lg:text-base leading-6 flex flex-col gap-3">
              {footerCategories.map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-orange" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-center lg:text-left grow">
          <div className="mb-6 lg:mb-0">
            <h4 className="font-semibold leading-[30px] font-poppins mb-4 lg:mb-6 text-lg lg:text-xl ">
              Payments
            </h4>
            <img
              className="mx-auto lg:mx-0 w-fit"
              src="./images/payment.png"
              alt="payment gateway"
            />
          </div>
          <div>
            <h4 className="font-semibold leading-[30px] font-poppins mb-4 lg:mb-6 text-lg lg:text-xl">
              Follow Us
            </h4>
            <ul className="text-black font-normal text-sm lg:text-base leading-6 justify-center flex md:flex-col gap-3">
              {footerSocials.map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-orange" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#CBCBCB] h-[1px]" />
      <div className="flex flex-col lg:flex-row justify-between text-[#646464] font-montserrat font-normal text-xs lg:text-sm leading-5 pt-2 gap-2 lg:gap-0 text-center lg:text-left">
        <p>
          Copyright © {new Date().getFullYear()} E-Shop. All Rights Reserved.
        </p>
        <p>
          <Link className="hover:text-orange" to={"#"}>
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link className="hover:text-orange" to={"#"}>
            Terms & Condition
          </Link>{" "}
          |{" "}
          <Link className="hover:text-orange" to={"#"}>
            Sitemap
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
