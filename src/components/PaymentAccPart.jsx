import React from "react";
import { orderSummary } from "../productDetailsArrays";
import FormInput from "./FormInput";
import Button from "./Button";

const PaymentAccPart = () => {
  return (
    <>
      <div className="">
        <h2 className=" font-poppins text-4xl font-semibold leading-[46px] text-black mb-2 ">
          Payment Information
        </h2>

        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-8 w-[870px]  ">
          <div className="w-full ">
            <FormInput
              label={"Cardholder Name"}
              star={true}
              placeholder={"John Doe"}
            />
          </div>

          <div className="w-full ">
            <FormInput
              label={"Card Number"}
              star={true}
              placeholder={"1234 5678 9012 3456"}
            />
          </div>

          <div className="w-[424px] ">
            <FormInput
              label={"Expiry Date"}
              star={true}
              placeholder={"MM/YY"}
            />
          </div>

          <div className="w-[424px] ">
            <FormInput label={"CVV"} star={true} placeholder={"123"} />
          </div>

          <div className="w-full ">
            <FormInput
              label={"Billing Address"}
              star={true}
              placeholder={"123 Main Street, City, State 12345"}
            />
          </div>

          <div className="w-[424px] ">
            <FormInput
              label={"Country"}
              star={true}
              placeholder={"United States"}
            />
          </div>

          <div className="w-[424px] ">
            <FormInput label={"ZIP Code"} star={true} placeholder={"12345"} />
          </div>
        </div>
      </div>

      <div className="w-[594px] ">
        <div className="bg-[#F4F4F4] rounded-[25px] p-10   ">
          <h3 className="font-poppins text-2xl leading-[30px] font-semibold text-black mb-12  ">
            Order Summary
          </h3>

          <div className="flex flex-col gap-5 ">
            {orderSummary.map((product) => (
              <>
                <ul className="font-montserrat text-xl text-black leading-[30px] flex justify-between items-start  ">
                  <li className="w-[250px] ">
                    <p>{product.item}</p>
                  </li>
                  <li>
                    <b>{product.quantity}</b>
                  </li>
                  <li className="w-32 ">
                    <b>
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </b>
                  </li>
                </ul>

                <hr className="w-full border-t border-t-[#C3C3C3]  " />
              </>
            ))}

            <div className="bg-white p-6 rounded-10p relative before:content-[''] before:absolute before:-top-6 before:bg-[#F4F4F4] before:w-full before:h-1.5 before:left-0  ">
              <div className="font-montserrat font-bold text-xl text-black leading-[30px] flex justify-between items-center mb-7 ">
                <h6 className="text-base ">Total</h6>
                <p>$4,999.00</p>
              </div>
              <Button
                text={"Complete Payment"}
                className={"w-full"}
                py="24px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentAccPart;
