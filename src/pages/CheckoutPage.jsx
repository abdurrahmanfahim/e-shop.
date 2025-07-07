import React, { useState } from "react";
import Container from "../components/layouts/Container";
import InformationAccPart from "../components/InformationAccPart";
import ShippingAccPart from "../components/ShippingAccPart";
import PaymentAccPart from "../components/PaymentAccPart";

const CheckoutPage = () => {
  let [active, setActive] = useState("Information");

  return (
    <Container>
      <div className=" mt-16 ">
        <div className="flex gap-4 items-center text-black font-montserrat text-base leading-6 ">
          <span>Home</span> <span>|</span> <span>Cart</span>
          <span>|</span>
          <span className="font-bold ">Checkout</span>
        </div>

        <div className="mt-12">
          <h1 className=" text-center font-poppins font-bold text-[56px] leading-17 mb-9  ">
            Checkout
          </h1>

          <div className="flex gap-16 justify-center items-center ">
            <div
              className="flex justify-center items-center gap-4 cursor-pointer "
              onClick={() => setActive("Information")}
            >
              {active === "Information" && (
                <div className=" size-[50px] flex justify-center items-center font-montserrat text-base font-bold leading-6 text-white text-center bg-orange rounded-full  ">
                  01
                </div>
              )}
              <p
                className={` text-2xl font-bold leading-[30px] font-poppins ${
                  active === "Information" ? "text-black" : "text-[#CBCBCB]"
                }  `}
              >
                Information
                <span
                  className={`h-1 w-full block mt-1 ${
                    active === "Information" ? "bg-orange" : "btransparentB]"
                  }`}
                ></span>
              </p>
            </div>

            <div
              className="flex justify-center items-center gap-4 cursor-pointer "
              onClick={() => setActive("Shipping")}
            >
              {active === "Shipping" && (
                <div className=" size-[50px] flex justify-center items-center font-montserrat text-base font-bold leading-6 text-white text-center bg-orange rounded-full  ">
                  02
                </div>
              )}
              <p
                className={` text-2xl font-bold leading-[30px] font-poppins ${
                  active === "Shipping" ? "text-black" : "text-[#CBCBCB]"
                }  `}
              >
                Shipping
                <span
                  className={`h-1 w-full block mt-1 ${
                    active === "Shipping" ? "bg-orange" : "bg-transparent"
                  }`}
                ></span>
              </p>
            </div>

            <div
              className="flex justify-center items-center gap-4 cursor-pointer "
              onClick={() => setActive("Payment")}
            >
              {active === "Payment" && (
                <div className=" size-[50px] flex justify-center items-center font-montserrat text-base font-bold leading-6 text-white text-center bg-orange rounded-full  ">
                  03
                </div>
              )}
              <p
                className={` text-2xl font-bold leading-[30px] font-poppins ${
                  active === "Payment" ? "text-black" : "text-[#CBCBCB]"
                }  `}
              >
                Payment
                <span
                  className={`h-1 w-full block mt-1 ${
                    active === "Payment" ? "bg-orange" : "bg-transparent"
                  }`}
                ></span>
              </p>
            </div>
          </div>

          <div className="flex my-20 justify-between ">
            {active === "Information" && <InformationAccPart />}
            {active === "Shipping" && <ShippingAccPart />}
            {active === "Payment" && <PaymentAccPart />}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
