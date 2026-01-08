import React from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import OrderSummary from "./OrderSummary";

const InformationAccPart = ({ setActive}) => {
  const handleOrderNow = () => {
    setActive("Shipping");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between">
      <div className="w-full lg:w-auto">
        <h2 className=" font-poppins text-2xl lg:text-4xl font-semibold leading-[30px] lg:leading-[46px] text-black mb-2 ">
          Billing Details
        </h2>

        <div className="mt-6 lg:mt-8 flex flex-wrap gap-x-4 gap-y-6 lg:gap-y-8 w-full lg:w-[870px]  ">
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput
              label={"First Name"}
              star={true}
              placeholder={"Amelia Robert"}
            />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput label={"Last Name"} star={true} placeholder={"Watson"} />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput
              label={"Phone Number"}
              star={true}
              placeholder={"+123 456 7890"}
            />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput
              label={"Email Address"}
              star={true}
              placeholder={"amelia.watson@eshop.com"}
            />
          </div>

          <div className="w-full ">
            <FormInput
              label={"Address"}
              star={true}
              placeholder={"Home Address, Auxiliary St. 12345, Anywhere State"}
            />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput
              label={"Country"}
              star={true}
              placeholder={"Indonesia"}
            />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput
              label={"State"}
              star={true}
              placeholder={"Kalimantan Timur"}
            />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput label={"City"} star={true} placeholder={"Samarinda"} />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px] ">
            <FormInput label={"ZIP Code"} placeholder={"555555"} />
          </div>

          <div className="w-full ">
            <FormInput
              textAria={true}
              label={"Order Notes"}
              placeholder={"Enter your order notes ..."}
              height={'173px'}
            />
          </div>
        </div>
      </div>

      <OrderSummary>
        <Button text={"Order Now"} className={"w-full"} py="24px" flexGrow={true} onClick={handleOrderNow} />
      </OrderSummary>
    </div>
  );
};

export default InformationAccPart;
