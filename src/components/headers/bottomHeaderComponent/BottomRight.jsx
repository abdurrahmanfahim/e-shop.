import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { navLinks } from "../../../productDetailsArrays";

const BottomRight = () => {
  const { t } = useTranslation();
  return (
    <ul className="flex gap-14 xl:gap-20 leading-18">
      {navLinks.map((item) => (
        <li key={item.label}>
          <Link className={`flex gap-2 items-center hover:text-[#FF624C] ${item.className || ""}`} to={item.to}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BottomRight;
