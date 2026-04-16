import { useContext, useEffect, useRef, useState } from "react";
import { GrDown } from "react-icons/gr";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductsContext from "../contexts/ProductsContext";
import { filterCategories } from "../productDetailsArrays";
import Button from "./Button";
import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";

const NewProducts = () => {
  const categoriesRef = useRef(null);
  const [isCatRefOpen, setIsCatRefOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("All Categories");

  useEffect(() => {
    const handleHoverOutSide = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setIsCatRefOpen(false);
      }
    };

    document.addEventListener("mouseover", handleHoverOutSide);

    return () => {
      document.removeEventListener("mouseover", handleHoverOutSide);
    };
  }, []);

  const products = useContext(ProductsContext);
  const currentProducts = products.slice(0, 5);

  return (
    <Container>
      <div className="flex justify-between gap-6 items-center w-full mb-6 lg:mb-12 ">
        <h2 className="text-black font-['Poppins'] font-semibold leading-[46px] text-2xl md:text-4xl capitalize ">
          New Products
        </h2>
        <div className="relative">
          <button
            className="flex flex-col md:flex-row items-center md:gap-4 font-montserrat text-base font-bold text-green cursor-pointer leading-11 "
            onClick={() => {
              setIsCatRefOpen(true);
              console.log(isCatRefOpen);
            }}
            ref={categoriesRef && categoriesRef}
          >
            <span className="text-black font-normal text-base leading-6 pr-4 hidden md:block">
              Sort by
            </span>
            <span className="md:w-[218px] text-left">{selectedProduct}</span>
            <GrDown className="hidden md:block text-xs text-black " />
          </button>

          {isCatRefOpen && (
            <div
              className="w-61 absolute right-0 top-full border-t border-white z-50 "
              ref={categoriesRef && categoriesRef}
            >
              <ul
                className="bg-white text-black text-sm font-medium w-full shadow-2xl z-10 border-t-4 border-green "
                onClick={() => setIsCatRefOpen(false)}
              >
                {filterCategories.map((item) => (
                  <li
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-green cursor-pointer border-l-2 border-r-2 border-b border-b-gray-100 border-transparent hover:shadow-xl uppercase  hover:border-r-green hover:border-l-green "
                    key={item.name}
                    onClick={() => {
                      setIsCatRefOpen(false);
                      setSelectedProduct(item.name);
                    }}
                  >
                    <Link to={"#"}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 lg:gap-x-5.5 mb-6 md:mb-12 lg:mb-16">
        {currentProducts.map((item, index) => (
          <ProductLayout
            key={index}
            id={item.id}
            image={item.image}
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
      <div className="flex justify-center pb-6 md:pb-12 lg:pb-20 ">
        <Link to="/all-products">
          <Button
            text="Load More"
            border="#023440 1px solid "
            bg="transparent"
            color="#023440"
          />
        </Link>
      </div>
    </Container>
  );
};

export default NewProducts;
