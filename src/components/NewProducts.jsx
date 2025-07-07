import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import { GrDown } from "react-icons/gr";
import Button from "./Button";
import { Link } from "react-router-dom";
import { productDetails } from "../productDetailsArrays";

const NewProducts = () => {
  const categories = [
    "Computers & Tablets",
    "Mobile & Accessories",
    "TV & Home Theater",
    "Audio & Headphones",
    "Cameras & Camcorders",
    "Gaming Equipment",
    "Home Appliances",
  ];

  const categoriesRef = useRef(null);
  const [isCatRefOpen, setIsCatRefOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("All Categories");

  useEffect(() => {
    const handleHoverOutSide = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setIsCatRefOpen(false);
      }
    };

    document.addEventListener("mouseover", handleHoverOutSide);

    return () => {
      document.removeEventListener("mouseover", handleHoverOutSide);
    };
  }, []);

  return (
    <Container>
      <div className="flex justify-between gap-6 items-center w-full mb-12 ">
        <h2 className="text-[#303030] font-['Poppins'] font-semibold leading-[46px] text-4xl ">
          New Products
        </h2>
        <div className="relative">
          <button
            className="flex items-center gap-4 font-['Montserrat'] text-base font-bold text-[#FF624C] cursor-pointer leading-11 "
            onClick={() => {
              setIsCatRefOpen(true);
              console.log(isCatRefOpen);
            }}
            ref={categoriesRef && categoriesRef}
          >
            <span className="text-[#303030] font-normal text-base leading-6 pr-4 ">
              Sort by
            </span>
            <span className="w-[218px] text-left">{selectedProduct}</span>
            <GrDown className="text-xs text-[#303030] " />
          </button>

          {isCatRefOpen && (
            <div
              className="w-61 absolute right-0 top-full border-t border-white z-50 "
              ref={categoriesRef && categoriesRef}
            >
              <ul
                className="bg-white text-black text-sm font-medium w-full shadow-2xl z-10 border-t-4 border-[#FF624C] "
                onClick={() => setIsCatRefOpen(false)}
              >
                {categories.map((item) => (
                  <li
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-[#FF624C] cursor-pointer border-l-2 border-r-2 border-b border-b-gray-100 border-transparent hover:shadow-xl uppercase  hover:border-r-[#FF624C] hover:border-l-[#FF624C] "
                    key={item}
                    onClick={() => {
                      setIsCatRefOpen(false);
                      setSelectedProduct(item);
                    }}
                  >
                    <Link to={"#"}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex mb-16 gap-6 ">
        {productDetails.map((item, index) => (
          <ProductLayout
            key={index}
            type={item.type}
            title={item.title}
            stars={item.stars}
            rating={item.rating}
            price={item.price}
            discounted={item.discounted}
            inStoke={item.inStoke}
          />
        ))}
      </div>
      <div className="flex justify-center pb-20 ">
        <Button
          text="Load More"
          border="#FF624C 1px solid "
          bg="transparent"
          color="#FF624C"
        />
      </div>
    </Container>
  );
};

export default NewProducts;
