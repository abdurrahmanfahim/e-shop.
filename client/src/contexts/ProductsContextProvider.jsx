import { useEffect, useState } from "react";
import ProductsContext from "./ProductsContext";
import api from "../api/api";

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products?limit=160")
      .then(({ data }) => {
        const mapped = data.products.map((p) => ({
          id: p._id,
          type: p.category,
          brand: p.brand,
          title: p.title,
          stars: Math.round(p.rating),
          rating: p.stock,
          price: p.price.toFixed(2),
          discounted: p.discountPercentage ? Math.round(p.discountPercentage) : null,
          inStoke: p.stock,
          image: p.thumbnail,
        }));
        setProducts(mapped);
      })
      .catch(() => setProducts([]));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
