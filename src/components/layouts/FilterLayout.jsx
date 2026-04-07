import { useEffect, useState } from "react";
import ProductFilterAcc from "../ProductFilterAcc";

const FilterLayout = ({ bg = "#F4F4F4", onFilterChange, allProducts = [] }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const priceMax = allProducts.length
    ? Math.ceil(Math.max(...allProducts.map((p) => parseFloat(p.price) || 0)))
    : 10000;

  useEffect(() => {
    if (allProducts.length) setMaxPrice(priceMax);
  }, [priceMax]);

  // derive unique categories and brands from actual products
  const categories = [
    ...new Set(allProducts.map((p) => p.type).filter(Boolean)),
  ].map((name) => ({ name }));
  const brands = [
    ...new Set(allProducts.map((p) => p.brand).filter(Boolean)),
  ].map((name) => ({ name }));

  const notify = (cats, brands, min, max) => {
    onFilterChange &&
      onFilterChange({
        categories: cats,
        brands,
        minPrice: min,
        maxPrice: max,
      });
  };

  const toggleCategory = (name) => {
    const updated = selectedCategories.includes(name)
      ? selectedCategories.filter((c) => c !== name)
      : [...selectedCategories, name];
    setSelectedCategories(updated);
    notify(updated, selectedBrands, minPrice, maxPrice);
  };

  const toggleBrand = (name) => {
    const updated = selectedBrands.includes(name)
      ? selectedBrands.filter((b) => b !== name)
      : [...selectedBrands, name];
    setSelectedBrands(updated);
    notify(selectedCategories, updated, minPrice, maxPrice);
  };

  const updateSlider = (type, value) => {
    const parsed = parseInt(value);
    if (isNaN(parsed)) return;
    if (type === "min") {
      const min = Math.min(parsed, maxPrice - 10);
      setMinPrice(min);
      notify(selectedCategories, selectedBrands, min, maxPrice);
    } else {
      const max = Math.max(parsed, minPrice + 10);
      setMaxPrice(max);
      notify(selectedCategories, selectedBrands, minPrice, max);
    }
  };

  const minPercent = (minPrice / 10000) * 100;
  const maxPercent = (maxPrice / 10000) * 100;

  return (
    <div
      className="sticky top-20 p-7 xl:p-12 font-montserrat rounded-[25px] overflow-auto"
      style={{ backgroundColor: bg }}
    >
      <ProductFilterAcc
        heading="categories"
        data={categories}
        selected={selectedCategories}
        onSelect={toggleCategory}
      />

      <hr className="w-full border-t border-t-[#C3C3C3] mb-4 xl:mb-10" />

      <ProductFilterAcc
        heading="Brands"
        data={brands}
        selected={selectedBrands}
        onSelect={toggleBrand}
      />

      <hr className="w-full border-t border-t-[#C3C3C3] mb-4 xl:mb-10" />

      <ProductFilterAcc heading="Price">
        <div className="flex justify-between items-center font-montserrat text-base leading-6 text-[#030303] text-center">
          <div className="border border-[#929292] rounded-10p w-[124px] h-12 xl:h-[74px] flex justify-center items-center text-center">
            <span>$</span>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => updateSlider("min", e.target.value)}
              className="w-12 pl-1 outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="border border-[#929292] rounded-10p w-[124px] h-12 xl:h-[74px] flex justify-center items-center text-center">
            <span>$</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => updateSlider("max", e.target.value)}
              className="w-14 block pl-1 outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>

        <div className="relative w-full mt-4 xl:mt-7.5 h-5">
          <div className="absolute w-full top-2 bg-[#C3C3C3] h-0.5"></div>
          <div
            className="absolute top-2 h-0.5 bg-green rounded"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          ></div>
          <input
            type="range"
            min={0}
            max={priceMax}
            step={10}
            value={minPrice}
            className="absolute w-full bg-transparent appearance-none focus:outline-none cursor-pointer"
            onChange={(e) => updateSlider("min", e.target.value)}
          />
          <input
            type="range"
            min={0}
            max={priceMax}
            step={10}
            value={maxPrice}
            className="absolute w-full bg-transparent appearance-none focus:outline-none cursor-pointer"
            onChange={(e) => updateSlider("max", e.target.value)}
          />
        </div>
      </ProductFilterAcc>
    </div>
  );
};

export default FilterLayout;
