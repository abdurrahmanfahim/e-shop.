import React from "react";
import Container from "../components/layouts/Container";
import ProductDetailsCard from "../components/ProductDetailsCard";

const ProductDetailsPage = () => {
  return (
    <Container>
      <div className="mt-8 lg:mt-16">
        <div className="flex flex-wrap gap-2 lg:gap-4 items-center text-black font-montserrat text-sm lg:text-base leading-5 lg:leading-6">
          <span>Home</span> <span>|</span> 
          <span className="hidden sm:inline">Computers & Tablets</span>
          <span className="hidden sm:inline">|</span> 
          <span className="hidden sm:inline">Laptop</span> 
          <span className="hidden sm:inline">|</span>
          <span className="font-bold">
            <span className="sm:hidden">Gaming Laptop</span>
            <span className="hidden sm:inline">NexSUS ROCK Strix Scar 17 Gaming Laptop</span>
          </span>
        </div>
        <ProductDetailsCard />
      </div>
    </Container>
  );
};

export default ProductDetailsPage;