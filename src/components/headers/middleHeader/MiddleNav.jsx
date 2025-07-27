import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const MiddleNav = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 md:hidden">
      <div className="flex justify-between items-center mb-8">
        <img src="images/logo.png" alt="logo" className="h-8" />
        <button onClick={onClose} className="text-3xl">
          <IoClose />
        </button>
      </div>
      
      <ul className="flex flex-col space-y-6 text-lg font-['Montserrat']">
        <li>
          <Link to={"#"} onClick={onClose} className="block py-2 hover:text-[#FF624C]">All Categories</Link>
        </li>
        <li>
          <Link to={"#"} onClick={onClose} className="block py-2 hover:text-[#FF624C]">Products</Link>
        </li>
        <li>
          <Link to={"#"} onClick={onClose} className="block py-2 hover:text-[#FF624C]">Blog</Link>
        </li>
        <li>
          <Link to={"#"} onClick={onClose} className="block py-2 hover:text-[#FF624C]">Contact</Link>
        </li>
        <li>
          <Link to={"#"} onClick={onClose} className="block py-2 hover:text-[#FF624C]">LIMITED SALE 👋🏻</Link>
        </li>
        <li>
          <Link to={"#"} onClick={onClose} className="block py-2 hover:text-[#FF624C]">Best Seller</Link>
        </li>
        <li>
          <Link to={"#"} onClick={onClose} className="block py-2 hover:text-[#FF624C]">New Arrival</Link>
        </li>
      </ul>
    </div>
  );
};

export default MiddleNav;
