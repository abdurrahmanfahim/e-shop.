import React from "react";
import { orderSummary } from "../productDetailsArrays";

const OrderSummary = ({ title = "Order Summary", children }) => {
  return (
    <div className="w-full lg:w-[594px] ">
      <div className="bg-[#F4F4F4] rounded-[25px] p-6 lg:p-10   ">
        <h3 className="font-poppins text-xl lg:text-2xl leading-[25px] lg:leading-[30px] font-semibold text-black mb-8 lg:mb-12  ">
          {title}
        </h3>

        <div className="flex flex-col gap-4 lg:gap-5 ">
          {orderSummary.map((product) => (
            <>
              <ul className="font-montserrat text-sm lg:text-lg xl:text-xl text-black leading-[20px] lg:leading-[25px] xl:leading-[30px] flex justify-between items-start  ">
                <li className="w-[150px] lg:w-[200px] xl:w-[250px] ">
                  <p>{product.item}</p>
                </li>
                <li>
                  <b>{product.quantity}</b>
                </li>
                <li className="w-16 lg:w-24 xl:w-32 ">
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

          <div className="bg-white p-4 lg:p-6 rounded-10p relative before:content-[''] before:absolute before:-top-6 before:bg-[#F4F4F4] before:w-full before:h-1.5 before:left-0  ">
            <div className="font-montserrat font-bold text-lg lg:text-xl text-black leading-[25px] lg:leading-[30px] flex justify-between items-center mb-5 lg:mb-7 ">
              <h6 className="text-sm lg:text-base ">Total</h6>
              <p>$4,999.00</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;