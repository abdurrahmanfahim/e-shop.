import React, { useRef, useState, useEffect } from "react";
import FilterLayout from "../components/layouts/FilterLayout";
import Container from "../components/layouts/Container";
import Pagination from "../components/layouts/Pagination";
import ProductLayout from "../components/layouts/ProductLayout";
import DownIcon from "../icons/DownIcon";
import GridView from "../icons/GridView";
import ListView from "../icons/ListView";
import Dropdown from "../components/Dropdown";
import { fetchProducts } from "../productDetailsArrays";

const ProductListPage = () => {
  const sortOneOptions = ["Popularity", "Newest", "Rating", "Discount"];

  const priceOptions = ["Price Low-to-High", "Price High-to-Low"];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  console.log(products);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const [isSortOneOpen, setIsSortOneOpen] = useState(false);
  const [isSortTwoOpen, setIsSortTwoOpen] = useState(false);

  const [sortedItemOne, setSortedItemOne] = useState("Popularity");
  const [sortedItemTwo, setSortedItemTwo] = useState("Price Low-to-High");

  const sortOneRef = useRef();
  const sortTwoRef = useRef();

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
                  <span className="mr-1">Showing</span>
                  {currentPage === 1
                    ? 1
                    : currentPage * itemsPerPage - (itemsPerPage - 1)}
                  <span className="ml-1">- </span>
                  {products.length < currentPage * itemsPerPage
                    ? products.length
                    : currentPage * itemsPerPage}
                  <span className="ml-1">of </span>
                  {products.length} results.
                </p>
              </div>
              <div className="flex justify-between items-center gap-6 ">
                <div
                  className="flex justify-between items-center relative cursor-pointer "
                  onClick={() => setIsSortOneOpen(!isSortOneOpen)}
                >
                  <span className="text-[#303030] font-normal text-base leading-6 pr-4 ">
                    Sort by
                  </span>
                  <span className="font-['Montserrat'] font-bold text-base leading-6 text-[#FF624C] mr-12 text-left">
                    {sortedItemOne}
                  </span>
                  <div className="absolute left-17 top-full z-50 text-sm font-medium ">
                    <Dropdown
                      data={sortOneOptions}
                      ref={sortOneRef}
                      isOpen={isSortOneOpen}
                      setIsOpen={setIsSortOneOpen}
                      setSelected={setSortedItemOne}
                    />
                  </div>
                  <span>
                    <DownIcon />
                  </span>
                </div>
                <span className="bg-[#CBCBCB] w-[1px] h-8 block "></span>
                <div
                  className="flex justify-between items-center relative cursor-pointer "
                  onClick={() => setIsSortTwoOpen(!isSortTwoOpen)}
                >
                  <span>
                    <span className="font-['Montserrat'] font-bold text-base leading-6 text-[#FF624C] mr-12 text-left">
                      {sortedItemTwo}
                    </span>
                    <div className="absolute left-0 top-full z-50 text-sm font-medium ">
                      <Dropdown
                        data={priceOptions}
                        ref={sortTwoRef}
                        isOpen={isSortTwoOpen}
                        setIsOpen={setIsSortTwoOpen}
                        setSelected={setSortedItemTwo}
                      />
                    </div>
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
          <div className="w-[1140px] flex justify-start flex-wrap">
            {currentProducts.map((item) => (
              <div className="w-1/4" key={item.id}>
                <ProductLayout
                  type={item.type}
                  title={item.title}
                  stars={item.star}
                  rating={item.rating}
                  price={item.price}
                  image={item.image}
                />
              </div>
            ))}
          </div>
          <Pagination
            totalItems={products.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductListPage;
