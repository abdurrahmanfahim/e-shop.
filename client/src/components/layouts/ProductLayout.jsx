import { useContext, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import FavoritesContext from "../../contexts/FavoritesContext";
import AuthContext from "../../contexts/AuthContext";

const ProductLayout = ({
  v2 = false,
  list = false,
  id,
  type,
  title,
  stars,
  rating,
  price,
  discounted,
  inStoke,
  image = "/images/sliderSmall.png",
}) => {
  const { addItem } = useContext(CartContext);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [adding, setAdding] = useState(false);

  const getDiscountedPrice = (p, d) =>
    d ? (p - (p * d) / 100).toFixed(2) : p;

  const starCount = stars && !isNaN(stars) ? Math.round(Number(stars)) : 4;
  const finalPrice = getDiscountedPrice(price, discounted);
  const productObj = { _id: id, price: Number(finalPrice), title, thumbnail: image };

  const handleAddToCart = async (e) => {
    e.preventDefault(); e.stopPropagation();
    if (!user) return navigate("/login");
    setAdding(true);
    try { await addItem(productObj); } finally { setAdding(false); }
  };

  const handleFavorite = (e) => {
    e.preventDefault(); e.stopPropagation();
    toggleFavorite({ id, title, price: finalPrice, image, type });
  };

  // ── LIST VIEW ──────────────────────────────────────────────
  if (list) return (
    <Link
      to={`/product-details/${id}`}
      className="flex gap-4 lg:gap-6 p-4 lg:p-6 bg-white border border-transparent rounded-10p hover:border-[#C3C3C3] transition-all duration-300 text-black group"
    >
      <div className="relative shrink-0 w-28 sm:w-36 lg:w-44 aspect-square">
        <img className="object-contain size-full" src={image} alt={title} />
        {discounted && (
          <span className="absolute -top-1 -right-1 px-2 py-0.5 bg-green text-white font-montserrat font-bold text-xs rounded-md">
            {discounted}%
          </span>
        )}
      </div>
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <p className="font-montserrat text-xs font-normal uppercase tracking-[3px] text-black/50 mb-1 line-clamp-1">{type}</p>
          <span className="font-poppins text-base lg:text-lg font-semibold leading-[25px] group-hover:text-green group-hover:underline transition-all line-clamp-2 block">
            {title}
          </span>
          <div className="flex gap-1 items-center mt-1">
            <p className="flex text-yellow">
              {[...Array(starCount)].map((_, i) => <MdOutlineStar key={i} className="text-sm" />)}
            </p>
            <span className="font-montserrat text-xs text-black/50">( {rating} )</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {discounted ? (
              <>
                <h3 className="font-poppins text-green font-semibold text-lg lg:text-2xl">${finalPrice}</h3>
                <span className="font-montserrat text-sm text-[#979797] line-through">${price}</span>
              </>
            ) : (
              <h3 className="font-poppins font-semibold text-lg lg:text-2xl">${price}</h3>
            )}
          </div>
          <div className="flex gap-2">
            <button onClick={handleAddToCart} className={`size-9 rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center border border-green transition-all ${adding ? 'opacity-50' : ''}`}>
              <BsCart3 />
            </button>
            <button onClick={handleFavorite} className="size-9 rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center border border-green transition-all">
              {isFavorite(id) ? <GoHeartFill className="text-red-500" /> : <GoHeart />}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );

  // ── GRID V2 (Spring Sale) ──────────────────────────────────
  if (v2) return (
    <Link
      to={`/product-details/${id}`}
      className="aspect-464/702 p-3 min-[450px]:p-4 min-[640px]:p-3 min-[1024px]:p-10 min-[1140px]:p-5 min-[1280px]:p-10 shrink flex-1 bg-white border border-transparent rounded-10p hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out text-black group block cursor-pointer"
    >
      <div className="w-full aspect-384/344 relative">
        <img className="object-contain size-full" src={image} alt={title} />
        {discounted && (
          <span className="absolute top-0 right-0 size-10 sm:size-14 md:size-16 lg:size-[72px] 2xl:size-[100px] bg-green text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-white font-montserrat font-bold leading-6 rounded-full flex justify-center items-center">
            {discounted}%
          </span>
        )}
      </div>
      <div>
        <span className="font-montserrat text-xs lg:text-sm font-normal leading-5 uppercase tracking-[3px] lg:tracking-[5px] mt-6 lg:mt-10 mb-3 lg:mb-4 block line-clamp-1">{type}</span>
        <span className="line-clamp-2 h-[50px] lg:h-[60px] text-green font-poppins underline text-lg lg:text-xl font-semibold leading-[25px] lg:leading-[30px] group-hover:text-black group-hover:no-underline transition-all block">{title}</span>
        <div className="flex gap-2 items-center mt-1 mb-3 lg:mb-5">
          <p className="flex text-yellow group-hover:text-white">
            {[...Array(starCount)].map((_, i) => <MdOutlineStar key={i} className="text-sm lg:text-base" />)}
          </p>
          <span className="font-montserrat text-sm lg:text-base font-normal leading-6">( {rating} )</span>
        </div>
        {discounted ? (
          <>
            <h3 className="font-poppins text-green font-semibold leading-[30px] text-lg lg:text-2xl inline-block">${finalPrice}</h3>
            <span className="font-montserrat text-sm lg:text-base font-normal text-[#979797] line-through ml-2.5">${price}</span>
          </>
        ) : (
          <h3 className="font-poppins font-semibold leading-[30px] text-lg lg:text-2xl hidden">${price}</h3>
        )}
        <div className={`${!inStoke ? "bg-green" : "bg-[#E0E0E0]"} relative text-white rounded-3xl mt-6 lg:mt-8`}>
          <div
            className={`${inStoke < 35 ? "bg-green" : "bg-black"} rounded-3xl text-center h-[25px] lg:h-[30px] group-hover:bg-green`}
            style={{ width: `${inStoke < 100 ? inStoke : "100"}%` }}
          />
          <p className={`absolute w-full text-center ${inStoke > 35 || !inStoke ? "text-white" : "text-green"} left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 font-montserrat font-bold text-xs md:text-base leading-6 uppercase`}>
            {inStoke ? `${inStoke} available` : "not available"}
          </p>
        </div>
      </div>
    </Link>
  );

  // ── GRID V1 (default) ──────────────────────────────────────
  return (
    <Link
      to={`/product-details/${id}`}
      className="aspect-285/496 p-4 sm:p-6 flex-1 bg-white border border-transparent rounded-10p max-md:border-[#C3C3C3] hover:border-[#C3C3C3] transition-all duration-300 ease-in-out text-black group block cursor-pointer"
    >
      <div className="relative">
        <div className="w-full aspect-236/214 relative">
          <img className="object-contain size-full" src={image} alt={title} />
          {discounted && (
            <span className="absolute -top-2 -right-2 px-3 sm:px-5 py-1 sm:py-1.5 bg-green text-white font-montserrat font-bold text-sm sm:text-base leading-6 rounded-md">
              {discounted}%
            </span>
          )}
        </div>
        <div className="flex absolute justify-center gap-3 sm:gap-[18px] left-1/2 -translate-x-1/2 -bottom-8 sm:-bottom-10 group-hover:bottom-[6px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <button onClick={handleAddToCart} className={`size-10 sm:size-[50px] rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center text-lg sm:text-xl transition-all border border-green ${adding ? 'opacity-50' : ''}`}>
            <BsCart3 />
          </button>
          <button onClick={handleFavorite} className="size-10 sm:size-[50px] rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center text-lg sm:text-xl transition-all border border-green">
            {isFavorite(id) ? <GoHeartFill className="text-red-500" /> : <GoHeart />}
          </button>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); }} className="size-10 sm:size-[50px] rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center text-lg sm:text-xl transition-all border border-green">
            <IoShareSocialOutline />
          </button>
        </div>
      </div>
      <div>
        <p className="font-montserrat text-xs sm:text-sm font-normal leading-5 uppercase tracking-[3px] sm:tracking-[5px] mt-1 lg:mt-10 mb-1 md:mb-4 line-clamp-1">{type}</p>
        <span className="h-[50px] sm:h-[60px] line-clamp-2 font-poppins text-base lg:text-lg font-semibold leading-[25px] sm:leading-[30px] group-hover:text-green group-hover:underline transition-all block">{title}</span>
        <div className="flex gap-2 items-center mt-1 mb-1 md:mb-3 lg:mb-5">
          <p className="flex text-yellow">
            {[...Array(starCount)].map((_, i) => <MdOutlineStar key={i} className="text-sm sm:text-base" />)}
          </p>
          <span className="font-montserrat text-sm sm:text-base font-normal leading-6">( {rating} )</span>
        </div>
        <div className="flex">
          {discounted ? (
            <>
              <h3 className="font-poppins text-green font-semibold leading-[30px] text-lg sm:text-2xl inline-block">${finalPrice}</h3>
              <span className="font-montserrat text-xs sm:text-base font-normal text-[#979797] line-through ml-2.5">${price}</span>
            </>
          ) : (
            <h3 className="font-poppins font-semibold leading-[30px] text-lg sm:text-2xl">${price}</h3>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductLayout;
