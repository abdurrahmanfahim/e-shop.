import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductLayout = ({
  v2 = false,
  type,
  title,
  stars,
  rating,
  price,
  discounted,
  inStoke,
}) => {
  // Helper to calculate discounted price
  const getDiscountedPrice = (price, discounted) => {
    if (!discounted) return price;
    return (price - (price * discounted) / 100).toFixed(2);
  };

  const safeStars =
    Number.isFinite(+stars) && +stars > 0 ? Math.floor(+stars) : 0;
  const [ratingStars] = useState(new Array(safeStars).fill(1));

  return (
    <>
      {v2 || (
        <div className="p-6 pb-11 flex-1 bg-white border border-transparent rounded-[10px] hover:border-[#C3C3C3] transition-all duration-300 ease-in-out text-[#303030] group block ">
          <div className="relative ">
            <img
              className="w-full"
              src="./images/productimg.jpg"
              alt="productimg"
            />
            {discounted && (
              <span className="absolute -top-2 -right-2 px-5 py-1.5 bg-[#FF624C] text-white font-['Montserrat'] font-bold leading-6 rounded-md ">
                {discounted}%
              </span>
            )}
            <div className="flex absolute justify-center gap-[18px] left-1/2 -translate-x-1/2 -bottom-10 group-hover:bottom-[6px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out delay-75 ">
              <Link
                to={"#"}
                className="size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-xl transition-all duration-300 ease-in-out border border-[#FF624C] "
              >
                <BsCart3 />
              </Link>
              <Link
                to={"#"}
                className="size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-xl transition-all duration-300 ease-in-out border border-[#FF624C] "
              >
                <GoHeart />
              </Link>
              <Link
                to={"#"}
                className="size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-xl transition-all duration-300 ease-in-out border border-[#FF624C] "
              >
                <IoShareSocialOutline />
              </Link>
            </div>
          </div>
          <div>
            <span className='font-["Montserrat"] text-sm font-normal leading-5 uppercase tracking-[5px] mt-10 mb-4 block '>
              {type}
            </span>
            <Link
              to={"#"}
              className="line-clamp-2 font-['Poppins'] text-xl font-semibold leading-[30px] group-hover:text-[#FF624C] group-hover:underline transition-all duration-300 ease-in-out"
            >
              {title}
            </Link>
            <div className="flex gap-2 items-center mt-1 mb-5  ">
              <p className="flex text-[#FED550]">
                {ratingStars.map((item, index) => (
                  <MdOutlineStar key={index} />
                ))}
              </p>
              <span className='font-["Montserrat"] text-base font-normal leading-6  '>
                ( {rating} )
              </span>
            </div>
            {discounted ? (
              <>
                <h3 className='font-["Poppins"] text-[#FF624C] font-semibold leading-[30px] text-2xl inline-block '>
                  ${getDiscountedPrice(price, discounted)}
                </h3>
                <span className="font-['Montserrat'] text-base font-normal text-[#979797] line-through ml-2.5 ">
                  {price}
                </span>
              </>
            ) : (
              <h3 className='font-["Poppins"] font-semibold leading-[30px] text-2xl  '>
                ${price}
              </h3>
            )}
          </div>
        </div>
      )}

      {v2 && (
        <div className="p-10 shrink flex-1 bg-white border border-transparent rounded-[10px] hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out text-[#303030] group block ">
          <div className="relative ">
            <img
              className="w-full "
              src="./images/productimgv2.jpg"
              alt="productimg"
            />
            {discounted && (
              <span className="absolute top-0 right-0 size-[100px] bg-[#FF624C] text-2xl text-white font-['Montserrat'] font-bold leading-6 rounded-full flex justify-center items-center ">
                {discounted}%
              </span>
            )}
          </div>
          <div>
            <span className='font-["Montserrat"] text-sm font-normal leading-5 uppercase tracking-[5px] mt-10 mb-4 block '>
              {type}
            </span>
            <Link
              to={"#"}
              className="line-clamp-2 text-[#FF624C] font-['Poppins'] underline text-xl font-semibold leading-[30px] group-hover:text-[#303030] group-hover:no-underline  transition-all duration-300 ease-in-out "
            >
              {title}
            </Link>
            <div className="flex gap-2 items-center mt-1 mb-5  ">
              <p className="flex text-[#FED550] group-hover:text-white ">
                {ratingStars.map((item, index) => (
                  <MdOutlineStar key={index} />
                ))}
              </p>
              <span className='font-["Montserrat"] text-base font-normal leading-6  '>
                ( {rating} )
              </span>
            </div>
            {discounted ? (
              <>
                <h3 className='font-["Poppins"] text-[#FF624C] font-semibold leading-[30px] text-2xl inline-block '>
                  ${getDiscountedPrice(price, discounted)}
                </h3>
                <span className="font-['Montserrat'] text-base font-normal text-[#979797] line-through ml-2.5 ">
                  ${price}
                </span>
              </>
            ) : (
              <h3 className='font-["Poppins"] font-semibold leading-[30px] text-2xl hidden  '>
                ${price}
              </h3>
            )}

            <div
              className={` ${
                !inStoke ? "bg-[#FF624C]" : "bg-[#E0E0E0]"
              } relative text-white rounded-3xl mt-8  `}
            >
              <div
                className={` ${
                  inStoke < 35 ? "bg-[#FF624C]" : "bg-black"
                } rounded-3xl text-center h-[30px] group-hover:bg-[#FF624C] `}
                style={{ width: `${inStoke}%` }}
              ></div>
              <p
                className={`absolute ${
                  inStoke > 35 || !inStoke
                    ? "text-white"
                    : "text-[#FF624C]"
                } left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 font-['Montserrat'] font-bold text-base leading-6 uppercase `}
              >
                {inStoke ? inStoke + ' ' + 'available': 'not available'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductLayout;
