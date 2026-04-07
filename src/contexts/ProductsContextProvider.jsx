import { useEffect, useState } from "react";
import { fetchProducts } from "../productDetailsArrays";
import ProductsContext from "./ProductsContext";

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
