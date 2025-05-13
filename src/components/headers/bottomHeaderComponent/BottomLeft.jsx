import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import { GrDown } from "react-icons/gr";
import { Link } from "react-router-dom";

const BottomLeft = () => {
  return (
    <ul className="flex gap-20 ">
      <li>
        <Link className="flex gap-4 " to={"/product-list"}>
          <FiMenu className="text-2xl" /> 
          All Categories
        </Link>
      </li>
      <li>
        <Link className="flex gap-2 items-center " to={"/product-list"}>
          Products
          <GrDown className="text-sm " />
        </Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
};

export default BottomLeft;
