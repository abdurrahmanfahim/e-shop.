import React from "react";
import { Link } from "react-router-dom";

const MiddleNav = () => {
  return (
    <ul>
      <li>
        <Link to={"#"}>All Categories</Link>
      </li>
      <li>
        <Link to={"#"}>Products</Link>
      </li>
      <li>
        <Link to={"#"}>Blog</Link>
      </li>
      <li>
        <Link to={"#"}>Contact</Link>
      </li>
      <li>
        <Link to={"#"}>LIMITED SALE 👋🏻</Link>
      </li>
      <li>
        <Link to={"#"}>Best Seller</Link>
      </li>
      <li>
        <Link to={"#"}>New Arrival</Link>
      </li>
    </ul>
  );
};

export default MiddleNav;
