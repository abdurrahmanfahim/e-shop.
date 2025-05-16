import { useState, useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import { GrDown } from "react-icons/gr";
import { Link } from "react-router-dom";

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
      if (!categoriesRef.current.contains(event.target)) {
        setIsCatRefOpen(false);
      }
      if (!productsRef.current.contains(event.target)) {
        setIsProRefOpen(false);
      }
    };

    document.addEventListener("mouseover", handleHoverOutSide);

    return () => {
      document.removeEventListener("mouseover", handleHoverOutSide);
    };
  }, []);

  return (
    <ul className="flex gap-20  leading-15 ">
      <li className="relative " ref={categoriesRef}>
        <button
          className="flex gap-4 items-center"
          onMouseOver={() => setIsCatRefOpen(true)}
        >
          <FiMenu className="text-2xl" />
          All Categories
        </button>
        {isCatRefOpen && (
          <div className="w-53 absolute left-0 top-full " ref={categoriesRef}>
            <ul
              className="bg-white text-black text-sm font-medium w-full shadow-lg z-10 "
              onMouseLeave={() => setIsCatRefOpen(false)}
            >
              {categories.map((item) => (
                <li
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-[#FF624C] cursor-pointer border-b border-gray-100 uppercase "
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
      <li className="flex gap-4 relative  " ref={productsRef}>
        <button
          className="flex gap-2 item-center"
          onMouseOver={() => setIsProRefOpen(true)}
        >
          Products
          <GrDown className="text-sm align-middle mt-5 " />
        </button>
        {isProRefOpen && (
          <div className="w-47 absolute left-0 top-full" ref={productsRef}>
            <ul
              className="bg-white text-black text-sm font-medium w-full shadow-lg z-10 "
              onMouseLeave={() => setIsProRefOpen(false)}
            >
              {products.map((item) => (
                <li
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-[#FF624C] cursor-pointer border-b border-gray-100 uppercase "
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
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li className="">
        <Link to={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
};

export default BottomLeft;
