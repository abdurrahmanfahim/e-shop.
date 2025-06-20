import React from "react";
import FilterLayout from "../components/layouts/FilterLayout";
import Container from "../components/layouts/Container";

const ProductListPage = () => {
  return (
    <Container>
      <div className="w-[355px] pt-16 pb-20  ">
        <FilterLayout />
      </div>
    </Container>
  );
};

export default ProductListPage;
