import React, { useState } from "react";

const ProductDetailsAcc = ({ productData }) => {
  const [activeAccordion, setActiveAccordion] = useState("specification");

  return (
    <div>
      <ul className="flex gap-12 font-poppins text-2xl font-semibold leading-[30px] ">
        <li
          className={` cursor-pointer ${
            activeAccordion === "description" ? "text-black" : "text-[#CBCBCB] "
          }`}
          onClick={() => setActiveAccordion("description")}
        >
          Description
          <span
            className={`w-full h-1 ${
              activeAccordion === "description" ? "bg-orange" : "bg-transparent"
            } block mt-2 `}
          ></span>
        </li>
        <li
          className={` cursor-pointer ${
            activeAccordion === "specification"
              ? "text-black"
              : "text-[#CBCBCB] "
          }`}
          onClick={() => setActiveAccordion("specification")}
        >
          Specification
          <span
            className={`w-full h-1 ${
              activeAccordion === "specification"
                ? "bg-orange"
                : "bg-transparent"
            } block mt-2 `}
          ></span>
        </li>
        <li
          className={` cursor-pointer ${
            activeAccordion === "return" ? "text-black" : "text-[#CBCBCB] "
          }`}
          onClick={() => setActiveAccordion("return")}
        >
          Return
          <span
            className={`w-full h-1 ${
              activeAccordion === "return" ? "bg-orange" : "bg-transparent"
            } block mt-2 `}
          ></span>
        </li>
        <li
          className={` cursor-pointer ${
            activeAccordion === "reviews" ? "text-black" : "text-[#CBCBCB] "
          }`}
          onClick={() => setActiveAccordion("reviews")}
        >
          Reviews
          <span
            className={`w-full h-1 ${
              activeAccordion === "reviews" ? "bg-orange" : "bg-transparent"
            } block mt-2 `}
          ></span>
        </li>
      </ul>
      <div className="flex pt-12 ">
        {activeAccordion === "description" && (
          <p className=" text-black text-xl leading-[30px] font-montserrat capitalize ">
            {productData.Description}
          </p>
        )}

        {activeAccordion === "specification" && (
          <ul className="flex flex-col flex-wrap gap-8 h-[430px]  ">
            {productData.Specification.map((item) => (
              <li
                key={item.name}
                className=" text-black text-xl leading-[30px] flex "
              >
                <h4 className="w-[170px] capitalize ">
                  <b>{item.name}</b>
                </h4>
                <p className="font-montserrat w-[560px] ">{item.value}</p>
              </li>
            ))}
          </ul>
        )}

        {activeAccordion === "return" && (
          <div className="">
            <h2 className="text-xl font-semibold mb-4 font-poppins">
              Return Policy
            </h2>
            <div className="rounded-lg text-black text-xl leading-[30px] font-montserrat">
              {productData.Return}
            </div>
          </div>
        )}

        {activeAccordion === "reviews" && (
          <div className="flex">
            <div className="w-full">
              <h2 className="text-xl font-semibold mb-4 font-poppins">
                Reviews
              </h2>
              {productData.Reviews && productData.Reviews.length > 0 ? (
                <ul className="space-y-6">
                  {productData.Reviews.map((review, idx) => (
                    <li
                      key={idx}
                      className="p-6 rounded-lg shadow"
                    >
                      <div className="flex items-center mb-2">
                        <span className="font-semibold text-lg text-black mr-4">
                          {review.user}
                        </span>
                        <span className="text-orange font-bold">
                          {"★".repeat(review.rating)}
                        </span>
                        <span className="text-[#CBCBCB] ">
                          {"★".repeat(5 - review.rating)}
                        </span>
                      </div>
                      <p className="text-black text-xl leading-[30px] font-montserrat">
                        {review.comment}
                      </p>
                      <span className="text-sm text-gray-400">
                        {review.date}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-gray-500 text-lg">No reviews yet.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsAcc;
