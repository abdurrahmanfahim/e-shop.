import React, { useState } from "react";
import FilterLayout from "../components/layouts/FilterLayout";
import Container from "../components/layouts/Container";
import Pagination from "../components/layouts/Pagination";
import ProductLayout from "../components/layouts/ProductLayout";

const ProductListPage = () => {
  const products = Array.from({ length: 160 }, (_, index) => ({
    id: index + 1,
    name: `Product no. ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));

  let [currentPage, setCurrentPage] = useState(1)

  console.log(products);

  return (
    <Container>
      <div className="flex justify-between pt-16 pb-20">
        <div className="w-[355px]  ">
          <FilterLayout />
        </div>
        <div>
          <div className="w-[1140px] flex justify-between flex-wrap">
            {products.map((item) => (
              <div className="w-1/4">
                <ProductLayout key={item.id+10}
                type={"product test"}
                title={item.name}
                stars={5}
                  rating={item.price}
                  price={item.price}
              />
              </div>
            ))}
          </div>
          <Pagination totalItems={products.length} itemPerPage={16} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </div>
    </Container>
  );
};

export default ProductListPage;
