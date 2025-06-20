import React, { useState } from "react";
import FilterLayout from "../components/layouts/FilterLayout";
import Container from "../components/layouts/Container";
import Pagination from "../components/layouts/Pagination";
import ProductLayout from "../components/layouts/ProductLayout";
import DownIcon from "../icons/DownIcon";
import GridView from "../icons/GridView";
import ListView from "../icons/ListView";

const ProductListPage = () => {
  const products = Array.from({ length: 160 }, (_, index) => ({
    id: index + 1,
    name: `Product no. ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container>
      <div className="flex justify-between pt-16 pb-20">
        <div className="w-[355px]  ">
          <FilterLayout />
        </div>
        <div>
          <div>
            <h2 className="text-[#303030] font-['Poppins'] font-semibold leading-[46px] text-4xl capitalize mb-6  ">
              Products
            </h2>
            <div className="flex justify-between items-center mb-12  ">
              <div>
                <p className="font-normal font-['Montserrat'] text-base leading-6  ">
                  Showing {currentPage === 1 ? 1 : (currentPage * itemsPerPage) - (itemsPerPage - 1)} - {currentPage * itemsPerPage} of {products.length} results.
                </p>
              </div>
              <div className="flex justify-between items-center gap-6 ">
                <div className="flex justify-between items-center">
                  <span className="mr-4">Sort by</span>
                  <span className="font-['Montserrat'] font-bold text-base leading-6 text-[#FF624C] mr-12  ">
                    Popularity
                  </span>
                  <span>
                    <DownIcon />
                  </span>
                </div>
                <span className="bg-[#CBCBCB] w-[1px] h-8 block "></span>
                <div className="flex justify-between items-center">
                  <span className="font-['Montserrat'] font-bold text-base leading-6 text-[#FF624C] mr-12  ">
                    Price Low-to-High
                  </span>
                  <DownIcon />
                </div>
                <span className="bg-[#CBCBCB] w-[1px] h-8 block "></span>

                <div className="flex gap-3">
                  <GridView />
                  <ListView />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1140px] flex justify-between flex-wrap">
            {currentProducts.map((item) => (
              <div className="w-1/4" key={item.id}>
                <ProductLayout
                  type={"product test"}
                  title={item.name}
                  stars={5}
                  rating={item.price}
                  price={item.price}
                />
              </div>
            ))}
          </div>
          <Pagination
            totalItems={products.length}
            itemPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductListPage;
