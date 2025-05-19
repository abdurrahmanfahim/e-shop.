import { useState, useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import { GrDown } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BottomLeft = () => {
  const products = [
    "Laptops & Desktops",
    "Smartphones",
    "Smart TVs",
    "Bluetooth Speakers",
    "DSLR Cameras",
    "Gaming Consoles",
    "Microwave Ovens",
    "Wearable Devices",
    "Printers",
    "Smart Watches",
    "VR Headsets",
    "Projectors",
  ];

  const categories = [
    "Computers & Tablets",
    "Mobile & Accessories",
    "TV & Home Theater",
    "Audio & Headphones",
    "Cameras & Camcorders",
    "Gaming Equipment",
    "Home Appliances",
  ];

  const [isCatRefOpen, setIsCatRefOpen] = useState(false);
  const [isProRefOpen, setIsProRefOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);
  console.log(selectedCategory, selectedProduct);

  useEffect(() => {
    const handleHoverOutSide = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setIsCatRefOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setIsProRefOpen(false);
      }
    };

    document.addEventListener("mouseover", handleHoverOutSide);

    return () => {
      document.removeEventListener("mouseover", handleHoverOutSide);
    };
  }, []);
  const { t } = useTranslation();

  return (
    <ul className="flex gap-20  leading-18 ">
      <li className="relative " ref={categoriesRef && categoriesRef}>
        <button
          className="flex gap-4 items-center"
          onClick={() => setIsCatRefOpen(true)}
        >
          <FiMenu className="text-2xl" />
          {t("All_Categories")}
        </button>
        {isCatRefOpen && (
          <div
            className="w-54 absolute left-0 top-full border-t border-white "
            ref={categoriesRef}
          >
            <ul
              className="bg-white text-black text-sm font-medium w-full shadow-lg z-10 border-t-4 border-[#FF624C] "
              onMouseLeave={() => setIsCatRefOpen(false)}
            >
              {categories.map((item) => (
                <li
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-[#FF624C] cursor-pointer border-l-2 border-r-2 border-b border-b-gray-100 border-transparent hover:shadow-xl uppercase  hover:border-r-[#FF624C] hover:border-l-[#FF624C] "
                  key={item}
                  onClick={() => {
                    setIsCatRefOpen(false);
                    setSelectedCategory(item);
                  }}
                >
                  <Link to={"#"}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>

      <li className="flex gap-4 relative  " ref={productsRef && productsRef}>
        <button
          className="flex gap-2 item-center"
          onClick={() => setIsProRefOpen(true)}
        >
          {t("Products")}
          <GrDown className="text-sm self-center " />
        </button>
        {isProRefOpen && (
          <div
            className="w-48 absolute left-0 top-full border-t border-white"
            ref={productsRef}
          >
            <ul
              className="bg-white text-black text-sm font-medium w-full shadow-lg z-10 border-t-4 border-[#FF624C]"
              onMouseLeave={() => setIsProRefOpen(false)}
            >
              {products.map((item) => (
                <li
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-[#FF624C] cursor-pointer border-l-2 border-r-2 border-b border-b-gray-100 border-transparent hover:shadow-xl uppercase  hover:border-r-[#FF624C] hover:border-l-[#FF624C] "
                  key={item}
                  onClick={() => {
                    setIsProRefOpen(false);
                    setSelectedProduct(item);
                  }}
                >
                  <Link to={"#"}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
      <li className="">
        <Link to={"/blog"}>{t("Blog")}</Link>
      </li>
      <li className="">
        <Link to={"/contact"}>{t("Contact")}</Link>
      </li>
    </ul>
  );
};

export default BottomLeft;
