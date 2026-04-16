import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";
import CartIcon from "../../../icons/CartIcon";
import SearchIcon from "../../../icons/SearchIcon";
import UserIcon from "../../../icons/UserIcon";
import Container from "../../layouts/Container";
import MiddleNav from "./MiddleNav";
import AuthContext from "../../../contexts/AuthContext";
import CartContext from "../../../contexts/CartContext";
import FavoritesContext from "../../../contexts/FavoritesContext";

const MiddleHeader = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const { itemCount } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);
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
          className={`flex justify-between items-center gap-3 sm:gap-4 lg:gap-6 font-montserrat py-2 sm:py-6  `}
        >
          <div className={`mr-3 py-3 ${activeSearchBar && "hidden"}`}>
            <Link to={"/"}>
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>

          <div className="flex justify-center items-center gap-6 md:gap-12  ">
            {/* SearchBar start here */}
            <div className="relative w-auto " ref={searchRef}>
              <input
                className={`w-[calc(100vw-2rem)] sm:max-w-[280px] lg:max-w-[332px] text-[#646464] font-normal font-montserrat text-xs sm:text-sm leading-5 py-2.5 lg:py-4.5 px-3.5 lg:px-6 rounded-10p border border-[#979797] bg-white capitalize "
                type="text sm:block  ${activeSearchBar ? "block" : "hidden"} `}
                placeholder="Search Products ..."
              />
              <span
                className={`absolute -right-0 top-1/2 -translate-y-1/2 sm:right-6 scale-170 sm:scale-100 block ${
                  activeSearchBar && "hidden"
                } sm:hidden `}
                onClick={() => setActiveSearchBar(true)}
              >
                <SearchIcon />
              </span>

              <span
                className={`absolute right-6 top-1/2 -translate-y-1/2 ${
                  !activeSearchBar && "hidden sm:block "
                } `}
              >
                <SearchIcon />
              </span>
            </div>

            <div
              className={`flex items-center gap-6 lg:gap-12 ${
                activeSearchBar && "hidden"
              } `}
            >
              <Link
                to={"/cart"}
                className={`flex gap-0 lg:gap-6 justify-between items-center hover:text-green relative`}
              >
                <span className="flex justify-center relative">
                  <CartIcon className="cart-icon" hoverColor={"#023440"} />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 size-4 bg-green text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </span>
                <span>
                  <p className="text-base font-normal leading-6 capitalize hidden lg:block">{t("Cart")}</p>
                  <span className="font-bold text-base leading-6 capitalize hidden lg:block">{t("Price")}</span>
                </span>
              </Link>

              <span className={`w-[1px] h-6 sm:h-8 bg-[#CBCBCB] hidden sm:block`}></span>

              <Link
                to="/favorites"
                className={`flex gap-0 lg:gap-6 justify-between items-center hover:text-green relative ${activeSearchBar && "hidden"}`}
              >
                <span className="flex justify-center relative">
                  <GoHeartFill className="text-xl" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 size-4 bg-green text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {favorites.length}
                    </span>
                  )}
                </span>
              </Link>

              <span className={`w-[1px] h-6 sm:h-8 bg-[#CBCBCB] hidden sm:block`}></span>

              <Link
                to={user ? "/profile" : "/login"}
                className={`flex gap-0 lg:gap-6 justify-between items-center hover:text-green`}
              >
                <span className="flex justify-center">
                  <UserIcon />
                </span>
                <span>
                  <p className="text-base font-normal leading-6 capitalize hidden lg:block">
                    {user ? user.name.split(' ')[0] : t("User")}
                  </p>
                  <span className="font-bold text-base leading-6 capitalize hidden lg:block">
                    {user ? 'Profile' : t("Account")}
                  </span>
                </span>
              </Link>
            </div>

            <div
              className={`text-3xl block ${
                activeSearchBar && "hidden"
              } lg:hidden `}
              onClick={() => setMobileNavOpen(true)}
            >
              <FiMenu className="hover:text-green focus:text-green " />
            </div>
          </div>
        </div>
      </Container>
      <MiddleNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
};

export default MiddleHeader;
