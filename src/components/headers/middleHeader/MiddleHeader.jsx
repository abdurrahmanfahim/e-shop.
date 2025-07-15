import { IoIosSearch } from "react-icons/io";
import CartIcon from "../../../icons/CartIcon";
import UserIcon from "../../../icons/UserIcon";
import Container from "../../layouts/Container";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "../../../icons/SearchIcon";

const MiddleHeader = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = useState(true);

  const [activeSearchBar, setActiveSearchBar] = useState(false);

  const searchRef = useRef();

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActiveSearchBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [searchRef, setActiveSearchBar]);

  return (
    <>
      <Container>
        <div className="flex justify-between items-center font-['Montserrat'] py-6 px-2 lg:px-0  ">
          <div
            className={`mr-3 py-3 ${!activeSearchBar ? "block" : "hidden"} `}
          >
            <Link to={"/"}>
              <img src="images/logo.png" alt="logo" />
            </Link>
          </div>

          <div className="flex justify-center items-center ">
            <div className="relative" ref={searchRef}>
              <input
                className={`text-[#646464] font-normal font-['Montserrat'] text-xs sm:text-sm leading-5 py-[18px] px-6 rounded-[10px] border border-[#979797] w-[332px] bg-white capitalize "
                type="text sm:block  ${activeSearchBar ? "block" : "hidden"} `}
                placeholder="Search Products ..."
              />
              <span
                className={`absolute -right-5 top-1/2 -translate-y-1/2 sm:right-6 scale-170 sm:scale-100 ${
                  !activeSearchBar ? "block" : "-right-16"
                } `}
                onClick={() => setActiveSearchBar(true)}
              >
                <SearchIcon />
              </span>
            </div>

              <Link
                to={"/cart"}
                className={`relative px-6 sm:px-12 ml-14 hover:text-[#FF624C] ${!activeSearchBar ? "block" : "hidden"} `}
              >
                <span
                  className={`absolute -left-[8px] top-1/2 -translate-y-1/2 ${
                    notification &&
                    "after:content-[''] after:size-1.5 after:absolute after:bg-[#FF624C] after:rounded-full after:-right-1 after:-top-1"
                  } `}
                >
                  <CartIcon className="cart-icon" hoverColor={"#FF624C"} />
                </span>
                <p className="text-base font-normal leading-6 capitalize hidden lg:block ">
                  {t("Cart")}
                </p>
                <span className="font-bold text-base leading-6 capitalize hidden lg:block  ">
                  {t("Price")}
                </span>
              </Link>

              <Link
                to={"#"}
                className={`relative pl-6 sm:pl-12 ml-2 sm:ml-12 after:absolute after:w-[1px] after:h-6 sm:after:h-8 sm:after:bg-[#979797] sm:after:-left-12 sm:after:top-1/2 sm:after:-translate-y-1/2 after:hidden after:lg:block hover:text-[#FF624C] ${!activeSearchBar ? "block" : "hidden"} `}
              >
                <span className="absolute -left-[8px] top-1/2 -translate-y-1/2  ">
                  <UserIcon />
                </span>
                <p className="text-base font-normal leading-6 capitalize hidden lg:block ">
                  {t("User")}
                </p>
                <span className="font-bold text-base leading-6 capitalize hidden lg:block  ">
                  {t("Account")}
                </span>
              </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MiddleHeader;
