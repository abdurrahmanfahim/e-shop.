import { IoIosSearch } from "react-icons/io";
import CartIcon from "../../icons/CartIcon";
import UserIcon from "../../icons/UserIcon";
import Container from "../layouts/Container";
import { Link } from "react-router-dom";
import { useState } from "react";

const MiddleHeader = () => {
  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = useState(true)
  return (
    <>
      <Container>
        <div className="flex justify-between items-center font-['montserrat'] py-6  ">
          <Link to={'/'}>
            <img src="images/logo.png" alt="logo" />
          </Link>

          <div className="flex justify-center items-center ">
            <div className="relative">
              <input
                className="text-[#646464] font-normal text-sm leading-5 py-[18px] px-6 rounded-[10px] border border-[#979797] w-[332px] bg-white  "
                type="text"
                placeholder="Search Products ..."
              />
              <div className="absolute text-base right-6 top-1/2 -translate-y-1/2 ">
                <IoIosSearch className="text-xl" />
              </div>
            </div>
            <Link to={'#'} className="relative px-12  ml-14 ">
              <div className={`absolute -left-[8px] top-1/2 -translate-y-1/2 ${notification && "after:content-[''] after:size-1.5 after:absolute after:bg-[#FF624C] after:rounded-full after:-right-1 after:-top-1" } `}>
                <CartIcon />
              </div>
              <p className="text-base font-normal leading-6 capitalize ">
                Cart
              </p>
              <span className="font-bold text-base leading-6 capitalize  ">
                $ 150,00
              </span>
            </Link>

            <Link to={'#'} className="relative pl-12 ml-12 after:absolute after:w-[1px] after:h-8 after:bg-[#979797] after:-left-12 after:top-1/2 after:-translate-y-1/2    ">
              <div className="absolute -left-[8px] top-1/2 -translate-y-1/2  ">
                <UserIcon />
              </div>
              <p className="text-base font-normal leading-6 capitalize ">
                User
              </p>
              <span className="font-bold text-base leading-6 capitalize  ">
                Account
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MiddleHeader;
