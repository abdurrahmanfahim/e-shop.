import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BottomRight = () => {
  const { t } = useTranslation();
  return (
    <ul className="flex gap-20 leading-18 ">
      <li>
        <Link className="flex gap-4 uppercase " to={"/all-products"}>
          {t("Limited_Sale")}
        </Link>
      </li>
      <li>
        <Link className="flex gap-2 items-center " to={"/all-products"}>
          {t("Best_Seller")}
        </Link>
      </li>
      <li>
        <Link to={"/all-products"}>{t("New_Arrival")}</Link>
      </li>
    </ul>
  );
};

export default BottomRight;
