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
  image="./images/productimg.jpg"
}) => {
  // Helper to calculate discounted price
  const getDiscountedPrice = (price, discounted) => {
    if (!discounted) return price;
    return (price - (price * discounted) / 100).toFixed(2);
  };

  const starCount = stars && !isNaN(stars) ? Math.round(Number(stars)) : 4;

  return (
    <>
      {v2 || (
        <div className="min-h-[400px] sm:h-[496px] p-4 sm:p-6 pb-8 sm:pb-11 flex-1 bg-white border border-transparent rounded-[10px] hover:border-[#C3C3C3] transition-all duration-300 ease-in-out text-[#303030] group block cursor-pointer ">
          <div className="relative ">
            <div className="w-full h-[180px] sm:h-[214px] ">
              <img
              className=" object-contain size-full "
              src={image}
              alt={image}
            />
            </div>
            {discounted && (
              <span className="absolute -top-2 -right-2 px-3 sm:px-5 py-1 sm:py-1.5 bg-[#FF624C] text-white font-['Montserrat'] font-bold text-sm sm:text-base leading-6 rounded-md ">
                {discounted}%
              </span>
            )}
            <div className="flex absolute justify-center gap-3 sm:gap-[18px] left-1/2 -translate-x-1/2 -bottom-8 sm:-bottom-10 group-hover:bottom-[6px] opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-in-out  ">
              <Link
                to={"#"}
                className="size-10 sm:size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-lg sm:text-xl transition-all duration-300 ease-in-out border border-[#FF624C] "
              >
                <BsCart3 />
              </Link>
              <Link
                to={"#"}
                className="size-10 sm:size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-lg sm:text-xl transition-all duration-300 ease-in-out border border-[#FF624C] "
              >
                <GoHeart />
              </Link>
              <Link
                to={"#"}
                className="size-10 sm:size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-lg sm:text-xl transition-all duration-300 ease-in-out border border-[#FF624C] "
              >
                <IoShareSocialOutline />
              </Link>
            </div>
          </div>
          <div>
            <span className='font-["Montserrat"] text-xs sm:text-sm font-normal leading-5 uppercase tracking-[3px] sm:tracking-[5px] mt-6 sm:mt-10 mb-3 sm:mb-4 block '>
              {type}
            </span>
            <Link
              to={"/product-details"}
              className="h-[50px] sm:h-[60px] line-clamp-2 font-['Poppins'] text-lg sm:text-xl font-semibold leading-[25px] sm:leading-[30px] group-hover:text-[#FF624C] group-hover:underline transition-all duration-300 ease-in-out"
            >
              {title}
            </Link>
            <div className="flex gap-2 items-center mt-1 mb-3 sm:mb-5  ">
              <p className="flex text-[#FED550]">
                {starCount > 0 && [...Array(starCount)].map((_, index) => (
                  <MdOutlineStar key={index} className="text-sm sm:text-base" />
                ))}
              </p>
              <span className='font-["Montserrat"] text-sm sm:text-base font-normal leading-6  '>
                ( {rating} )
              </span>
            </div>
            {discounted ? (
              <>
                <h3 className='font-["Poppins"] text-[#FF624C] font-semibold leading-[30px] text-xl sm:text-2xl inline-block '>
                  ${getDiscountedPrice(price, discounted)}
                </h3>
                <span className="font-['Montserrat'] text-sm sm:text-base font-normal text-[#979797] line-through ml-2.5 ">
                  ${price}
                </span>
              </>
            ) : (
              <h3 className='font-["Poppins"] font-semibold leading-[30px] text-xl sm:text-2xl  '>
                ${price}
              </h3>
            )}
          </div>
        </div>
      )}

      {v2 && (
        <div className="min-h-[500px] lg:h-[702px] p-6 lg:p-10 shrink flex-1 bg-white border border-transparent rounded-[10px] hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out text-[#303030] group block cursor-pointer ">
          <div className="relative ">

            <div className=" w-full h-[250px] lg:h-[345px] ">
              <img
                className=" object-contain size-full "
                src={image}
                alt={image}
              />
            </div>
            
            {discounted && (
              <span className="absolute top-0 right-0 size-16 lg:size-[100px] bg-[#FF624C] text-lg lg:text-2xl text-white font-['Montserrat'] font-bold leading-6 rounded-full flex justify-center items-center ">
                {discounted}%
              </span>
            )}
          </div>
          <div>
            <span className='font-["Montserrat"] text-xs lg:text-sm font-normal leading-5 uppercase tracking-[3px] lg:tracking-[5px] mt-6 lg:mt-10 mb-3 lg:mb-4 block '>
              {type}
            </span>
            <Link
              to={"#"}
              className="line-clamp-2 h-[50px] lg:h-[60px] text-[#FF624C] font-['Poppins'] underline text-lg lg:text-xl font-semibold leading-[25px] lg:leading-[30px] group-hover:text-[#303030] group-hover:no-underline  transition-all duration-300 ease-in-out "
            >
              {title}
            </Link>
            <div className="flex gap-2 items-center mt-1 mb-3 lg:mb-5  ">
              <p className="flex text-[#FED550] group-hover:text-white ">
                {starCount > 0 && [...Array(starCount)].map((_, index) => (
                  <MdOutlineStar key={index} className="text-sm lg:text-base" />
                ))}
              </p>
              <span className='font-["Montserrat"] text-sm lg:text-base font-normal leading-6  '>
                ( {rating} )
              </span>
            </div>
            {discounted ? (
              <>
                <h3 className='font-["Poppins"] text-[#FF624C] font-semibold leading-[30px] text-xl lg:text-2xl inline-block '>
                  ${getDiscountedPrice(price, discounted)}
                </h3>
                <span className="font-['Montserrat'] text-sm lg:text-base font-normal text-[#979797] line-through ml-2.5 ">
                  ${price}
                </span>
              </>
            ) : (
              <h3 className='font-["Poppins"] font-semibold leading-[30px] text-xl lg:text-2xl hidden  '>
                ${price}
              </h3>
            )}

            <div
              className={` ${
                !inStoke ? "bg-[#FF624C]" : "bg-[#E0E0E0]"
              } relative text-white rounded-3xl mt-6 lg:mt-8  `}
            >
              <div
                className={` ${
                  inStoke < 35 ? "bg-[#FF624C]" : "bg-black"
                } rounded-3xl text-center h-[25px] lg:h-[30px] group-hover:bg-[#FF624C] `}
                style={{ width: `${inStoke < 100 ? inStoke : '100'}%` }}
              ></div>
              <p
                className={`absolute ${
                  inStoke > 35 || !inStoke ? "text-white" : "text-[#FF624C]"
                } left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 font-['Montserrat'] font-bold text-sm lg:text-base leading-6 uppercase `}
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
