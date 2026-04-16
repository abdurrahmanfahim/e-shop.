import React from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import OrderSummary from "./OrderSummary";

const PaymentAccPart = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between">
      <div className="w-full lg:w-auto">
        <h2 className=" font-poppins text-2xl lg:text-4xl font-semibold leading-[30px] lg:leading-[46px] text-black mb-2 ">
          Payment Information
        </h2>

        <div className="mt-6 lg:mt-8 flex flex-wrap gap-x-4 gap-y-6 lg:gap-y-8 w-full lg:w-[870px]  ">
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

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput
              label={"Expiry Date"}
              star={true}
              placeholder={"MM/YY"}
            />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput label={"CVV"} star={true} placeholder={"123"} />
          </div>

          <div className="w-full ">
            <FormInput
              label={"Billing Address"}
              star={true}
              placeholder={"123 Main Street, City, State 12345"}
            />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput
              label={"Country"}
              star={true}
              placeholder={"United States"}
            />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput label={"ZIP Code"} star={true} placeholder={"12345"} />
          </div>
        </div>
      </div>

      <OrderSummary>
        <Button
          text={"Complete Payment"}
          className={"w-full"}
          py="24px"
          flexGrow={true}
        />
      </OrderSummary>
    </div>
  );
};

export default PaymentAccPart;
