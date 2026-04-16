import { useState } from "react";
import InformationAccPart from "../components/InformationAccPart";
import Container from "../components/layouts/Container";
import PaymentAccPart from "../components/PaymentAccPart";
import ShippingAccPart from "../components/ShippingAccPart";

const CheckoutPage = () => {
  let [active, setActive] = useState("Information");

  return (
    <Container>
      <div className=" mt-8 lg:mt-16 ">
        <div className="flex gap-2 lg:gap-4 items-center text-black font-montserrat text-sm lg:text-base leading-6 ">
          <span>Home</span> <span>|</span> <span>Cart</span>
          <span>|</span>
          <span className="font-bold ">Checkout</span>
        </div>

        <div className="mt-8 lg:mt-12">
          <h1 className=" text-center font-poppins font-bold text-3xl lg:text-[56px] leading-[40px] lg:leading-17 mb-6 lg:mb-9  ">
            Checkout
          </h1>

          <div className="flex gap-4 sm:gap-8 lg:gap-16 justify-center items-center overflow-x-auto px-4 sm:px-0">
            <div
              className="flex justify-center items-center gap-1 sm:gap-2 lg:gap-4 cursor-pointer whitespace-nowrap"
              onClick={() => setActive("Information")}
            >
              {active === "Information" && (
                <div className=" size-8 sm:size-10 lg:size-[50px] flex justify-center items-center font-montserrat text-xs sm:text-sm lg:text-base font-bold leading-6 text-white text-center bg-green rounded-full  ">
                  01
                </div>
              )}
              <p
                className={` text-sm sm:text-lg lg:text-2xl font-bold leading-[20px] sm:leading-[25px] lg:leading-[30px] font-poppins ${
                  active === "Information" ? "text-black" : "text-[#CBCBCB]"
                }  `}
              >
                Information
                <span
                  className={`h-1 w-full block mt-1 ${
                    active === "Information" ? "bg-green" : "bg-transparent"
                  }`}
                ></span>
              </p>
            </div>

            <div
              className="flex justify-center items-center gap-1 sm:gap-2 lg:gap-4 cursor-pointer whitespace-nowrap"
              onClick={() => setActive("Shipping")}
            >
              {active === "Shipping" && (
                <div className=" size-8 sm:size-10 lg:size-[50px] flex justify-center items-center font-montserrat text-xs sm:text-sm lg:text-base font-bold leading-6 text-white text-center bg-green rounded-full  ">
                  02
                </div>
              )}
              <p
                className={` text-sm sm:text-lg lg:text-2xl font-bold leading-[20px] sm:leading-[25px] lg:leading-[30px] font-poppins ${
                  active === "Shipping" ? "text-black" : "text-[#CBCBCB]"
                }  `}
              >
                Shipping
                <span
                  className={`h-1 w-full block mt-1 ${
                    active === "Shipping" ? "bg-green" : "bg-transparent"
                  }`}
                ></span>
              </p>
            </div>

            <div
              className="flex justify-center items-center gap-1 sm:gap-2 lg:gap-4 cursor-pointer whitespace-nowrap"
              onClick={() => setActive("Payment")}
            >
              {active === "Payment" && (
                <div className=" size-8 sm:size-10 lg:size-[50px] flex justify-center items-center font-montserrat text-xs sm:text-sm lg:text-base font-bold leading-6 text-white text-center bg-green rounded-full  ">
                  03
                </div>
              )}
              <p
                className={` text-sm sm:text-lg lg:text-2xl font-bold leading-[20px] sm:leading-[25px] lg:leading-[30px] font-poppins ${
                  active === "Payment" ? "text-black" : "text-[#CBCBCB]"
                }  `}
              >
                Payment
                <span
                  className={`h-1 w-full block mt-1 ${
                    active === "Payment" ? "bg-green" : "bg-transparent"
                  }`}
                ></span>
              </p>
            </div>
          </div>

          <div className="flex my-12 lg:my-20 justify-between ">
            {active === "Information" && (
              <InformationAccPart setActive={setActive} />
            )}
            {active === "Shipping" && <ShippingAccPart setActive={setActive} />}
            {active === "Payment" && <PaymentAccPart setActive={setActive} />}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
