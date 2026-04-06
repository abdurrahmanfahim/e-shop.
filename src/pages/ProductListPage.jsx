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
  const sortOneOptions = ["Newest", "Rating", "Discount", "Popularity"];

  const priceOptions = ["Price Low-to-High", "Price High-to-Low"];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  console.log(products);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const [isSortOneOpen, setIsSortOneOpen] = useState(false);
  const [isSortTwoOpen, setIsSortTwoOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sortedItemOne, setSortedItemOne] = useState("Newest");
  const [sortedItemTwo, setSortedItemTwo] = useState("Price Low-to-High");

  const sortOneRef = useRef();
  const sortTwoRef = useRef();

  return (
    <Container>
      <div className="flex flex-col lg:flex-row lg:justify-between pt-6 lg:pt-16 pb-12 lg:pb-20 gap-6 ">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="lg:hidden fixed bottom-4 right-4 bg-[#FF624C] text-white px-4 py-3 rounded-full shadow-lg z-40 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
          </svg>
          Filter
        </button>

        {/* Mobile Filter Overlay */}
        {isFilterOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsFilterOpen(false)}>
            <div className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} className="text-2xl">&times;</button>
              </div>
              <div className="p-4">
                <FilterLayout />
              </div>
            </div>
          </div>
        )}

        {/* Desktop Filter */}
        <div className="hidden lg:block w-[355px]">
          <FilterLayout />
        </div>
        
        <div className="w-full lg:w-auto">
          <div>
            <h2 className="text-[#303030] font-['Poppins'] font-semibold leading-8 lg:leading-[46px] text-2xl lg:text-4xl capitalize mb-4 lg:mb-6">
              Products
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 lg:mb-12 gap-4 sm:gap-0">
              <div>
                <p className="font-normal font-['Montserrat'] text-sm lg:text-base leading-5 lg:leading-6">
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
              <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 lg:gap-6">
                <div
                  className="flex justify-between items-center relative cursor-pointer"
                  onClick={() => setIsSortOneOpen(!isSortOneOpen)}
                >
                  <span className="text-[#303030] font-normal text-sm lg:text-base leading-5 lg:leading-6 pr-2 lg:pr-4">
                    Sort by
                  </span>
                  <span className="font-['Montserrat'] font-bold text-sm lg:text-base leading-5 lg:leading-6 text-[#FF624C] mr-6 lg:mr-12 text-left">
                    {sortedItemOne}
                  </span>
                  <div className="absolute left-17 top-full z-50 text-sm font-medium">
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
                <span className="bg-[#CBCBCB] w-[1px] h-6 lg:h-8 hidden sm:block"></span>
                <div
                  className="flex justify-between items-center relative cursor-pointer"
                  onClick={() => setIsSortTwoOpen(!isSortTwoOpen)}
                >
                  <span>
                    <span className="font-['Montserrat'] font-bold text-sm lg:text-base leading-5 lg:leading-6 text-[#FF624C] mr-6 lg:mr-12 text-left">
                      {sortedItemTwo}
                    </span>
                    <div className="absolute left-0 top-full z-50 text-sm font-medium">
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
                <span className="bg-[#CBCBCB] w-[1px] h-6 lg:h-8 hidden sm:block"></span>

                <div className="flex gap-2 lg:gap-3">
                  <GridView />
                  <ListView />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-100 rounded-[15px] h-72" />
                ))
              : currentProducts.map((item) => (
                  <div key={item.id}>
                    <ProductLayout
                      type={item.type}
                      title={item.title}
                      stars={item.stars}
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
