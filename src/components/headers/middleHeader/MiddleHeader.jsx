import { IoIosSearch } from "react-icons/io";
import CartIcon from "../../../icons/CartIcon";
import UserIcon from "../../../icons/UserIcon";
import Container from "../../layouts/Container";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "../../../icons/SearchIcon";
import { FiMenu } from "react-icons/fi";
import MiddleNav from "./MiddleNav";

const MiddleHeader = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = useState(true);

  const [activeSearchBar, setActiveSearchBar] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
        <div
          className={`flex justify-between items-center gap-2 sm:gap-4 lg:gap-6 font-['Montserrat'] py-2 sm:py-6  `}
        >
          <div
            className={`mr-3 py-3 ${activeSearchBar && 'hidden'}`}
          >
            <Link to={"/"}>
              <img src="images/logo.png" alt="logo" />
            </Link>
          </div>

          <div className="flex justify-center items-center gap-12  ">
            {/* SearchBar start here */}
            <div className="relative w-auto " ref={searchRef}>
              <input
                className={`w-[calc(100vw-1rem)] sm:max-w-[332px] text-[#646464] font-normal font-['Montserrat'] text-xs sm:text-sm leading-5 py-[18px] px-6 rounded-[10px] border border-[#979797] bg-white capitalize "
                type="text sm:block  ${
                  activeSearchBar ? "block" : "hidden"
                } `}
                placeholder="Search Products ..."
              />
              <span
                className={`absolute -right-5 top-1/2 -translate-y-1/2 sm:right-6 scale-170 sm:scale-100 block ${activeSearchBar && 'hidden'} sm:hidden `}
                onClick={() => setActiveSearchBar(true)}
              >
                <SearchIcon />
              </span>

              <span
                className={`absolute right-6 top-1/2 -translate-y-1/2 ${!activeSearchBar && 'hidden sm:block '} `}
              >
                <SearchIcon />
              </span>
            </div>

            <div className={`flex items-center gap-6 lg:gap-12 ${activeSearchBar && 'hidden'} `}>
              <Link
                to={"/cart"}
                className={`flex gap-0 lg:gap-6 justify-between items-center hover:text-[#FF624C]  `}
              >
                <span
                  className={`flex justify-center ${
                    notification &&
                    "after:content-[''] after:size-1.5 after:absolute after:bg-[#FF624C] after:rounded-full after:-right-1 after:-top-1"
                  } `}
                >
                  <CartIcon className="cart-icon" hoverColor={"#FF624C"} />
                </span>
                <span>
                  <p className="text-base font-normal leading-6 capitalize hidden lg:block ">
                    {t("Cart")}
                  </p>
                  <span className="font-bold text-base leading-6 capitalize hidden lg:block  ">
                    {t("Price")}
                  </span>
                </span>
              </Link>

              <span
                className={`w-[1px] h-6 sm:h-8 bg-[#CBCBCB] hidden sm:block `}
              ></span>

              <Link
                to={"#"}
                className={`flex gap-0 lg:gap-6 justify-between items-center hover:text-[#FF624C]  `}
              >
                <span className="flex justify-center ">
                  <UserIcon />
                </span>
                <span>
                  <p className="text-base font-normal leading-6 capitalize hidden lg:block ">
                    {t("User")}
                  </p>
                  <span className="font-bold text-base leading-6 capitalize hidden lg:block  ">
                    {t("Account")}
                  </span>
                </span>
              </Link>
            </div>

            <div className={`text-3xl block ${activeSearchBar && 'hidden'} lg:hidden `} onClick={() => setMobileNavOpen(true)}>
              <FiMenu className="hover:text-orange focus:text-orange " />
            </div>
          </div>
        </div>
      </Container>
      <MiddleNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
};

export default MiddleHeader;
