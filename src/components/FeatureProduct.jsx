import React from "react";
import ProductLayout from "./layouts/ProductLayout";
import Container from "./layouts/Container";

const FeatureProduct = () => {
  return (
    <Container>
      <div className="flex gap-1 mb-20 ">
        <ProductLayout />
        <ProductLayout />
        <ProductLayout />
        <ProductLayout />
        <ProductLayout />
      </div>
    </Container>
  );
};

export default FeatureProduct;
