import React from "react";
import { orderSummary } from "../productDetailsArrays";
import FormInput from "./FormInput";
import Button from "./Button";

const InformationAccPart = () => {
  return (
    <>
      <div className="">
        <h2 className=" font-poppins text-4xl font-semibold leading-[46px] text-black mb-2 ">
          Billing Details
        </h2>

        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-8 w-[870px]  ">
          <div className="w-[424px] ">
            <FormInput
              label={"First Name"}
              star={true}
              placeholder={"Amelia Robert"}
            />
          </div>

          <div className="w-[424px] ">
            <FormInput label={"Last Name"} star={true} placeholder={"Watson"} />
          </div>

          <div className="w-[424px] ">
            <FormInput
              label={"Phone Number"}
              star={true}
              placeholder={"+123 456 7890"}
            />
          </div>

          <div className="w-[424px] ">
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

          <div className="w-[424px] ">
            <FormInput
              label={"Country"}
              star={true}
              placeholder={"Indonesia"}
            />
          </div>

          <div className="w-[424px] ">
            <FormInput
              label={"State"}
              star={true}
              placeholder={"Kalimantan Timur"}
            />
          </div>

          <div className="w-[424px] ">
            <FormInput label={"City"} star={true} placeholder={"Samarinda"} />
          </div>

          <div className="w-[424px] ">
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
              <Button text={"Order Now"} className={"w-full"} py="24px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationAccPart;
