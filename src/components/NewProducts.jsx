import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import { GrDown } from "react-icons/gr";
import Button from "./Button";
import { Link } from "react-router-dom";

const NewProducts = () => {
  const productDetails = [
    {
      type: "laptop",
      title:
        "UltraBook Pro 15 Slim Lightweight Laptop with 11th Gen Intel Core i7 Processor and 16GB RAM",
      stars: 4,
      rating: 85,
      price: "1,299.00",
    },
    {
      type: "camera",
      title:
        "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
      stars: 5,
      rating: 45,
      price: "799.00",
      discounted: 30,
      inStoke: 10,
    },
    {
      type: "headphones",
      title:
        "Noise Cancelling Wireless Headphones with 40-Hour Battery Life and Hi-Res Audio Support",
      stars: 3,
      rating: 200,
      price: "199.00",
      discounted: 50,
      inStoke: 50,
    },
    {
      type: "watch",
      title:
        "SmartWatch Series 7 Fitness Tracker with Heart Rate Monitor, GPS, and 1.8-inch AMOLED Display",
      stars: 4,
      rating: 150,
      price: "299.00",
    },
    {
      type: "camera",
      title:
        "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
      stars: 5,
      rating: 45,
      price: "799.00",
      discounted: 30,
      inStoke: 10,
    },
  ];

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
            All Categories
            <GrDown className="text-xs text-[#303030] ml-[100px] " />
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
