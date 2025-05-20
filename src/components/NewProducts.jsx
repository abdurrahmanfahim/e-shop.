import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import { GrDown } from "react-icons/gr";
import Button from "./Button";

const NewProducts = () => {
  const productDetails = [
    {
      type: "laptop",
      title: "UltraBook Pro 15 Slim Lightweight Laptop with 11th Gen Intel Core i7 Processor and 16GB RAM",
      stars: 4,
      rating: 85,
      price: "1,299.00",
    },
    {
      type: "camera",
      title: "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
      stars: 5,
      rating: 45,
      price: "799.00",
      discounted: 30,
      inStoke: 10,
    },
    {
      type: "headphones",
      title: "Noise Cancelling Wireless Headphones with 40-Hour Battery Life and Hi-Res Audio Support",
      stars: 3,
      rating: 200,
      price: "199.00",
      discounted: 50,
      inStoke: 50,
    },
    {
      type: "watch",
      title: "SmartWatch Series 7 Fitness Tracker with Heart Rate Monitor, GPS, and 1.8-inch AMOLED Display",
      stars: 4,
      rating: 150,
      price: "299.00",
    },
    {
      type: "camera",
      title: "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
      stars: 5,
      rating: 45,
      price: "799.00",
      discounted: 30,
      inStoke: 10,
    },
  ];
  return (
    <Container>
      <div className="flex justify-between gap-6 items-center w-full mb-12 ">
        <h2 className="text-[#303030] font-['Poppins'] font-semibold leading-[46px] text-4xl ">
          New Products
        </h2>
        <button className="flex items-center gap-4 font-['Montserrat'] text-base font-bold leading-6 text-[#FF624C] cursor-pointer ">
          <span className="text-[#303030] font-normal text-base leading-6 pr-4 ">
            Sort by
          </span>
          All Categories
          <GrDown className="text-xs text-[#303030] ml-[100px] " />
        </button>
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
