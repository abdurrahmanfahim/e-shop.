import React from "react";
import Container from "../components/layouts/Container";
import ProductDetailsCard from "../components/ProductDetailsCard";

const ProductDetailsPage = () => {
  return (
    <Container>
      <div className=" mt-16 ">
        <div className="flex gap-4 items-center text-black font-montserrat text-base leading-6 ">
        <span>Home</span> <span>|</span> <span>Computers & Tablets</span>
      <span>|</span> <span>Laptop</span> <span>|</span>
      <span className="font-bold ">NexSUS ROCK Strix Scar 17 Gaming Laptop</span>
      </div>
      <ProductDetailsCard />
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
