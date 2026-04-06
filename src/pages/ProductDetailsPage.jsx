import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { Link } from "react-router-dom";
import LongArrow from "../icons/LongArrow";
import ProductLayout from "../components/layouts/ProductLayout";
import { fetchProducts } from "../productDetailsArrays";

const ProductDetailsPage = () => {
    const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setRelatedProducts(data.slice(0, 5)));
  }, []);
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
        <hr className="w-full border-t border-t-[#C3C3C3] mt-12 lg:mt-20 pt-8 lg:pt-16" />

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-6 lg:mb-12 gap-4 sm:gap-0">
        <h2 className="text-black font-['Poppins'] font-semibold leading-8 lg:leading-[46px] text-2xl lg:text-4xl capitalize">
          Related Products
        </h2>
        <button>
          <Link
            className="flex items-center gap-3 lg:gap-4 font-montserrat text-sm lg:text-base font-bold leading-5 lg:leading-6 text-orange capitalize"
            to={"/all-products"}
          >
            View All <LongArrow />
          </Link>
        </button>
      </div>

      <div
        className="
      grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 lg:gap-x-5.5 mb-6 md:mb-12 lg:mb-16
      "
      >
        {relatedProducts.map((item) => (
          <ProductLayout
            key={item.title}
            type={item.type}
            title={item.title}
            stars={item.stars}
            rating={item.rating}
            image={item.image}
            price={item.price}
            discounted={item.discounted}
            inStoke={item.inStoke}
          />
        ))}
      </div>
      </div>
    </Container>
  );
};

export default ProductDetailsPage;