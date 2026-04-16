import { useContext, useRef, useState } from "react";
import Dropdown from "../components/Dropdown";
import Container from "../components/layouts/Container";
import FilterLayout from "../components/layouts/FilterLayout";
import Pagination from "../components/layouts/Pagination";
import ProductLayout from "../components/layouts/ProductLayout";
import ProductsContext from "../contexts/ProductsContext";
import DownIcon from "../icons/DownIcon";
import GridView from "../icons/GridView";
import ListView from "../icons/ListView";

const sortOneOptions = ["Newest", "Rating", "Discount", "Popularity"];
const priceOptions = ["Price Low-to-High", "Price High-to-Low"];

const ProductListPage = () => {
  const allProducts = useContext(ProductsContext);
  const loading = allProducts.length === 0;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    minPrice: 0,
    maxPrice: 99999,
  });
  const [sortedItemOne, setSortedItemOne] = useState("Newest");
  const [sortedItemTwo, setSortedItemTwo] = useState("Price Low-to-High");
  const [isSortOneOpen, setIsSortOneOpen] = useState(false);
  const [isSortTwoOpen, setIsSortTwoOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState(() => localStorage.getItem('viewMode') || 'grid');

  const handleViewMode = (mode) => {
    setViewMode(mode);
    localStorage.setItem('viewMode', mode);
  };

  const sortOneRef = useRef();
  const sortTwoRef = useRef();

  // filter
  const filtered = allProducts.filter((p) => {
    const price = parseFloat(p.price);
    const inPrice = price >= filters.minPrice && price <= filters.maxPrice;
    const inCategory =
      filters.categories.length === 0 ||
      filters.categories.some((c) => p.type?.toLowerCase() === c.toLowerCase());
    const inBrand =
      filters.brands.length === 0 ||
      filters.brands.some((b) => p.brand?.toLowerCase() === b.toLowerCase());
    return inPrice && inCategory && inBrand;
  });

  // sort
  const sorted = [...filtered]
    .sort((a, b) => {
      if (sortedItemTwo === "Price Low-to-High")
        return parseFloat(a.price) - parseFloat(b.price);
      if (sortedItemTwo === "Price High-to-Low")
        return parseFloat(b.price) - parseFloat(a.price);
      return 0;
    })
    .sort((a, b) => {
      if (sortedItemOne === "Rating") return b.stars - a.stars;
      if (sortedItemOne === "Discount")
        return (b.discounted ?? 0) - (a.discounted ?? 0);
      return 0;
    });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sorted.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSortOne = (val) => {
    setSortedItemOne(val);
    setCurrentPage(1);
  };

  const handleSortTwo = (val) => {
    setSortedItemTwo(val);
    setCurrentPage(1);
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row lg:justify-between pt-6 lg:pt-16 pb-12 lg:pb-20 gap-6">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="lg:hidden fixed bottom-4 right-4 bg-green text-white px-4 py-3 rounded-full shadow-lg z-40 flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
            />
          </svg>
          Filter
        </button>

        {/* Mobile Filter Overlay */}
        {isFilterOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsFilterOpen(false)}
          >
            <div
              className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-2xl"
                >
                  &times;
                </button>
              </div>
              <div className="p-4">
                <FilterLayout
                  onFilterChange={handleFilterChange}
                  allProducts={allProducts}
                />
              </div>
            </div>
          </div>
        )}

        {/* Desktop Filter */}
        <div className="hidden lg:block w-[355px]">
          <FilterLayout
            onFilterChange={handleFilterChange}
            allProducts={allProducts}
          />
        </div>

        <div className="w-full lg:flex-1 min-w-0">
          <div>
            <h2 className="text-black font-['Poppins'] font-semibold leading-8 lg:leading-[46px] text-2xl lg:text-4xl capitalize mb-4 lg:mb-6">
              Products
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 lg:mb-12 gap-4 sm:gap-0">
              <p className="font-normal font-montserrat text-sm lg:text-base leading-5 lg:leading-6">
                Showing {sorted.length === 0 ? 0 : startIndex + 1} -{" "}
                {Math.min(startIndex + itemsPerPage, sorted.length)} of{" "}
                {sorted.length} results.
              </p>
              <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 lg:gap-6">
                <div
                  className="flex justify-between items-center relative cursor-pointer"
                  onClick={() => setIsSortOneOpen(!isSortOneOpen)}
                >
                  <span className="text-black font-normal text-sm lg:text-base leading-5 lg:leading-6 pr-2 lg:pr-4">
                    Sort by
                  </span>
                  <span className="font-montserrat font-bold text-sm lg:text-base leading-5 lg:leading-6 text-green mr-6 lg:mr-12 text-left">
                    {sortedItemOne}
                  </span>
                  <div className="absolute left-17 top-full z-50 text-sm font-medium">
                    <Dropdown
                      data={sortOneOptions}
                      ref={sortOneRef}
                      isOpen={isSortOneOpen}
                      setIsOpen={setIsSortOneOpen}
                      setSelected={handleSortOne}
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
                    <span className="font-montserrat font-bold text-sm lg:text-base leading-5 lg:leading-6 text-green mr-6 lg:mr-12 text-left">
                      {sortedItemTwo}
                    </span>
                    <div className="absolute left-0 top-full z-50 text-sm font-medium">
                      <Dropdown
                        data={priceOptions}
                        ref={sortTwoRef}
                        isOpen={isSortTwoOpen}
                        setIsOpen={setIsSortTwoOpen}
                        setSelected={handleSortTwo}
                      />
                    </div>
                  </span>
                  <DownIcon />
                </div>
                <span className="bg-[#CBCBCB] w-[1px] h-6 lg:h-8 hidden sm:block"></span>
                <div className="flex gap-2 lg:gap-3">
                  <button onClick={() => handleViewMode("grid")}>
                    <GridView color={viewMode === "grid" ? "#023440" : "#303030"} />
                  </button>
                  <button onClick={() => handleViewMode("list")}>
                    <ListView color={viewMode === "list" ? "#023440" : "#303030"} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={viewMode === "list" ? "w-full flex flex-col gap-3" : "w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"}>
            {loading ? (
              Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-100 rounded-15p h-72"
                />
              ))
            ) : currentProducts.length > 0 ? (
              currentProducts.map((item) => (
                <ProductLayout
                  key={item.id}
                  id={item.id}
                  type={item.type}
                  title={item.title}
                  stars={item.stars}
                  rating={item.rating}
                  price={item.price}
                  image={item.image}
                  discounted={item.discounted}
                  inStoke={item.inStoke}
                  list={viewMode === "list"}
                />
              ))
            ) : (
              <p className="col-span-4 text-center font-montserrat text-lg py-12 text-[#979797]">
                No products found.
              </p>
            )}
          </div>

          <Pagination
            totalItems={sorted.length}
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
