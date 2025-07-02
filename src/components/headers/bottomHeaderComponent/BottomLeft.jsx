/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { GrDown } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Dropdown from "../../Dropdown";

const BottomLeft = () => {
  const products = [
    "All Products",
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

  useEffect(() => {
    const handleClickOutSide = (event) => {
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

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
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

        <div className="w-54 absolute left-0 top-full border-t border-white text-sm font-medium ">
          <Dropdown
            data={categories}
            ref={categoriesRef}
            isOpen={isCatRefOpen}
            setIsOpen={setIsCatRefOpen}
            setSelected={setSelectedCategory}
          />
        </div>
      </li>

      <li className="flex gap-4 relative  " ref={productsRef && productsRef}>
        <button
          className="flex gap-2 item-center"
          onClick={() => setIsProRefOpen(true)}
        >
          {t("Products")}
          <GrDown className="text-sm self-center " />
        </button>

        <div className="w-54 bg-white absolute left-0 top-full border-t border-white text-sm font-medium z-50 ">
          <Dropdown
            data={products}
            ref={productsRef}
            isOpen={isProRefOpen}
            setIsOpen={setIsProRefOpen}
            setSelected={setSelectedProduct}
          />
        </div>
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
