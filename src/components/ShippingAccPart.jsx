import React from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const ShippingAccPart = () => {
  return (
    <>
      <div className="">
        <h2 className=" font-poppins text-4xl font-semibold leading-[46px] text-black mb-2 ">
          Shipping Details
        </h2>

        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-8 w-[870px]  ">
          <div className="w-[424px] ">
            <FormInput
              label={"Recipient Name"}
              star={true}
              placeholder={"John Doe"}
            />
          </div>

          <div className="w-[424px] ">
            <FormInput
              label={"Contact Number"}
              star={true}
              placeholder={"+123 456 7890"}
            />
          </div>

          <div className="w-full ">
            <FormInput
              label={"Shipping Address"}
              star={true}
              placeholder={"123 Main Street, Apt 4B, City, State 12345"}
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
            <FormInput
              label={"State/Province"}
              star={true}
              placeholder={"California"}
            />
          </div>

          <div className="w-[424px] ">
            <FormInput label={"City"} star={true} placeholder={"Los Angeles"} />
          </div>

          <div className="w-[424px] ">
            <FormInput
              label={"ZIP/Postal Code"}
              star={true}
              placeholder={"90210"}
            />
          </div>

          <div className="w-full ">
            <FormInput
              textAria={true}
              label={"Delivery Instructions"}
              placeholder={
                "Special delivery instructions (e.g., leave at door, ring bell, etc.)"
              }
            />
          </div>
        </div>
      </div>

      <div className="w-[594px] ">
        <div className="bg-[#F4F4F4] rounded-[25px] p-10   ">
          <h3 className="font-poppins text-2xl leading-[30px] font-semibold text-black mb-12  ">
            Shipping Options
          </h3>

          <div className="flex flex-col gap-5 ">
            <div className="bg-white p-6 rounded-10p">
              <div className="font-montserrat text-lg text-black leading-[30px] flex justify-between items-center mb-4">
                <div>
                  <h6 className="font-semibold">Standard Shipping</h6>
                  <p className="text-sm text-gray-600">5-7 business days</p>
                </div>
                <p className="font-bold">$9.99</p>
              </div>
              <hr className="w-full border-t border-t-[#C3C3C3] mb-4" />

              <div className="font-montserrat text-lg text-black leading-[30px] flex justify-between items-center mb-4">
                <div>
                  <h6 className="font-semibold">Express Shipping</h6>
                  <p className="text-sm text-gray-600">2-3 business days</p>
                </div>
                <p className="font-bold">$19.99</p>
              </div>
              <hr className="w-full border-t border-t-[#C3C3C3] mb-4" />

              <div className="font-montserrat text-lg text-black leading-[30px] flex justify-between items-center">
                <div>
                  <h6 className="font-semibold">Overnight Shipping</h6>
                  <p className="text-sm text-gray-600">Next business day</p>
                </div>
                <p className="font-bold">$39.99</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-10p relative before:content-[''] before:absolute before:-top-6 before:bg-[#F4F4F4] before:w-full before:h-1.5 before:left-0  ">
              <div className="font-montserrat font-bold text-xl text-black leading-[30px] flex justify-between items-center mb-7 ">
                <h6 className="text-base ">Selected: Standard Shipping</h6>
                <p>$9.99</p>
              </div>
              <Button
                text={"Continue to Payment"}
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

export default ShippingAccPart;
