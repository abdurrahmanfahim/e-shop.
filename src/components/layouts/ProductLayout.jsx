import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductLayout = ({
  v2 = false,
  id,
  type,
  title,
  stars,
  rating,
  price,
  discounted,
  inStoke,
  image = "./images/productimg.jpg",
}) => {
  // Helper to calculate discounted price
  const getDiscountedPrice = (price, discounted) => {
    if (!discounted) return price;
    return (price - (price * discounted) / 100).toFixed(2);
  };

  const starCount = stars && !isNaN(stars) ? Math.round(Number(stars)) : 4;
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      {v2 || (
        <div className="aspect-285/496 p-4 sm:p-6 flex-1 bg-white border border-transparent rounded-10p max-md:border-[#C3C3C3] hover:border-[#C3C3C3] transition-all duration-300 ease-in-out text-black group block cursor-pointer ">
          <div className="relative ">
            <div className="w-full aspect-236/214  ">
              <img
                className=" object-contain size-full "
                src={image}
                alt={image}
              />
            </div>
            {discounted && (
              <span className="absolute -top-2 -right-2 px-3 sm:px-5 py-1 sm:py-1.5 bg-green text-white font-montserrat font-bold text-sm sm:text-base leading-6 rounded-md ">
                {discounted}%
              </span>
            )}
            <div className="flex absolute justify-center gap-3 sm:gap-[18px] left-1/2 -translate-x-1/2 -bottom-8 sm:-bottom-10 group-hover:bottom-[6px] opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-in-out  ">
              <Link
                to={"/cart"}
                className="size-10 sm:size-[50px] rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center text-lg sm:text-xl transition-all duration-300 ease-in-out border border-green "
              >
                <BsCart3 />
              </Link>
              <button
                className="size-10 sm:size-[50px] rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center text-lg sm:text-xl transition-all duration-300 ease-in-out border border-green "
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? <GoHeartFill /> : <GoHeart />}
              </button>
              <Link
                to={"#"}
                className="size-10 sm:size-[50px] rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center text-lg sm:text-xl transition-all duration-300 ease-in-out border border-green "
              >
                <IoShareSocialOutline />
              </Link>
            </div>
          </div>
          <div>
            <p className="font-montserrat text-xs sm:text-sm font-normal leading-5 uppercase tracking-[3px] sm:tracking-[5px] mt-6 sm:mt-10 mb-3 sm:mb-4 line-clamp-1">
              {type}
            </p>
            <Link
              to={`/product-details/${id}`}
              className="h-[50px] sm:h-[60px] line-clamp-2 font-['Poppins'] text-base lg:text-lg font-semibold leading-[25px] sm:leading-[30px] group-hover:text-green group-hover:underline transition-all duration-300 ease-in-out"
            >
              {title}
            </Link>
            <div className="flex gap-2 items-center mt-1 mb-3 sm:mb-5  ">
              <p className="flex text-yellow">
                {starCount > 0 &&
                  [...Array(starCount)].map((_, index) => (
                    <MdOutlineStar
                      key={index}
                      className="text-sm sm:text-base"
                    />
                  ))}
              </p>
              <span className="font-montserrat text-sm sm:text-base font-normal leading-6  ">
                ( {rating} )
              </span>
            </div>
            <div className="flex">
              {discounted ? (
                <>
                  <h3 className="font-poppins text-green font-semibold leading-[30px] text-lg sm:text-2xl inline-block ">
                    ${getDiscountedPrice(price, discounted)}
                  </h3>
                  <span className="font-montserrat text-sm sm:text-base font-normal text-[#979797] line-through ml-2.5 ">
                    ${price}
                  </span>
                </>
              ) : (
                <h3 className="font-poppins font-semibold leading-[30px] text-lg sm:text-2xl ">
                  ${price}
                </h3>
              )}
            </div>
          </div>
        </div>
      )}

      {v2 && (
        <div className="aspect-464/702 p-3 min-[450px]:p-4 min-[640px]:p-3 min-[1024px]:p-10 min-[1140px]:p-5 min-[1280px]:p-10 shrink flex-1 bg-white border border-transparent rounded-10p hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out text-black group block cursor-pointer ">
          <div className="relative ">
            <div className=" w-full aspect-384/344  ">
              <img
                className=" object-contain size-full "
                src={image}
                alt={image}
              />
            </div>

            {discounted && (
              <span className="absolute top-0 right-0 size-10 sm:size-14 md:size-16 lg:size-[72px] 2xl:size-[100px] bg-green text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-white font-montserrat font-bold leading-6 rounded-full flex justify-center items-center ">
                {discounted}%
              </span>
            )}
          </div>
          <div>
            <span className="font-montserrat text-xs lg:text-sm font-normal leading-5 uppercase tracking-[3px] lg:tracking-[5px] mt-6 lg:mt-10 mb-3 lg:mb-4 block line-clamp-1 ">
              {type}
            </span>
            <Link
              to={"#"}
              className="line-clamp-2 h-[50px] lg:h-[60px] text-green font-['Poppins'] underline text-lg lg:text-xl font-semibold leading-[25px] lg:leading-[30px] group-hover:text-black group-hover:no-underline  transition-all duration-300 ease-in-out "
            >
              {title}
            </Link>
            <div className="flex gap-2 items-center mt-1 mb-3 lg:mb-5  ">
              <p className="flex text-yellow group-hover:text-white ">
                {starCount > 0 &&
                  [...Array(starCount)].map((_, index) => (
                    <MdOutlineStar
                      key={index}
                      className="text-sm lg:text-base"
                    />
                  ))}
              </p>
              <span className="font-montserrat text-sm lg:text-base font-normal leading-6  ">
                ( {rating} )
              </span>
            </div>
            {discounted ? (
              <>
                <h3 className="font-poppins text-green font-semibold leading-[30px] text-lg lg:text-2xl inline-block ">
                  ${getDiscountedPrice(price, discounted)}
                </h3>
                <span className="font-montserrat text-sm lg:text-base font-normal text-[#979797] line-through ml-2.5 ">
                  ${price}
                </span>
              </>
            ) : (
              <h3 className="font-poppins font-semibold leading-[30px] text-lg lg:text-2xl hidden  ">
                ${price}
              </h3>
            )}

            <div
              className={` ${
                !inStoke ? "bg-green" : "bg-[#E0E0E0]"
              } relative text-white rounded-3xl mt-6 lg:mt-8  `}
            >
              <div
                className={` ${
                  inStoke < 35 ? "bg-green" : "bg-black"
                } rounded-3xl text-center h-[25px] lg:h-[30px] group-hover:bg-green `}
                style={{ width: `${inStoke < 100 ? inStoke : "100"}%` }}
              ></div>
              <p
                className={`absolute w-full text-center ${
                  inStoke > 35 || !inStoke ? "text-white" : "text-green"
                } left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 font-montserrat font-bold text-xs md:text-base leading-6 uppercase `}
              >
                {inStoke ? inStoke + " " + "available" : "not available"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductLayout;
