import { useContext, useRef, useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "../icons/CartIcon";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";
import Shield from "../icons/Shield";
import Shipping from "../icons/Shipping";
import Transparent from "../icons/Transparent";
import Button from "./Button";
import ImageModal from "./ImageModal";
import ProductDetailsAcc from "./ProductDetailsAcc";
import ProductDetailsSlider from "./ProductDetailsSlider";
import CartContext from "../contexts/CartContext";
import FavoritesContext from "../contexts/FavoritesContext";
import AuthContext from "../contexts/AuthContext";

const ProductDetailsCard = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeModalSrc, setActiveModalSrc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const imageModalRef = useRef(null);

  const handleQuantity = (value) => {
    if (value === "minus") {
      if (quantity > 1) setQuantity((q) => q - 1);
    } else {
      setQuantity((q) => q + 1);
    }
  };

  const handleAddToCart = async () => {
    if (!user) return navigate("/login");
    setAdding(true);
    try {
      await addItem(
        { _id: product._id, price: discountedPrice ?? originalPrice, title: product.title, thumbnail: product.thumbnail },
        quantity
      );
    } finally {
      setAdding(false);
    }
  };

  const starCount = product?.rating ? Math.round(product.rating) : 5;
  const images = product?.images?.length
    ? product.images
    : product?.thumbnail
      ? [product.thumbnail]
      : [];
  const originalPrice = product?.price ?? 0;
  const discountPct = product?.discountPercentage ?? 0;
  const discountedPrice = discountPct
    ? (originalPrice - (originalPrice * discountPct) / 100).toFixed(2)
    : null;

  // Build accordion data from API product
  const productAccData = {
    Description: product?.description ?? "",
    Specification: [
      { name: "Brand", value: product?.brand ?? "N/A" },
      { name: "Category", value: product?.category ?? "N/A" },
      {
        name: "Weight",
        value: product?.weight ? `${product.weight} kg` : "N/A",
      },
      {
        name: "Dimensions",
        value: product?.dimensions
          ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`
          : "N/A",
      },
      { name: "Warranty", value: product?.warrantyInformation ?? "N/A" },
      { name: "Shipping", value: product?.shippingInformation ?? "N/A" },
      { name: "Availability", value: product?.availabilityStatus ?? "N/A" },
      { name: "Return Policy", value: product?.returnPolicy ?? "N/A" },
    ],
    Return: product?.returnPolicy ?? "N/A",
    Reviews:
      product?.reviews?.map((r) => ({
        user: r.reviewerName,
        rating: r.rating,
        comment: r.comment,
        date: new Date(r.date).toLocaleDateString(),
      })) ?? [],
  };

  return (
    <div className="mt-8 lg:mt-12">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8 w-full">
        <ImageModal
          ref={imageModalRef}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          imgSrc={activeModalSrc}
        />
        <div className="w-full lg:w-1/2 xl:w-auto">
          <ProductDetailsSlider
            images={images}
            setActiveModalSrc={setActiveModalSrc}
            setIsModalOpen={setIsModalOpen}
          />
        </div>

        <div className="w-full lg:w-1/2 xl:w-[632px]">
          <div className="flex gap-2 items-center mt-1 mb-4 lg:mb-5">
            <p className="flex text-yellow">
              {[...Array(5)].map((_, i) =>
                i < starCount ? (
                  <MdOutlineStar key={i} />
                ) : (
                  <MdOutlineStarBorder key={i} />
                ),
              )}
            </p>
            <span className="font-montserrat text-sm lg:text-base font-normal leading-5 lg:leading-6">
              ( {product?.reviews?.length ?? 0} )
            </span>
          </div>

          <h2 className="text-black font-poppins text-lg sm:text-xl lg:text-4xl font-semibold leading-7 lg:leading-[46px] mb-4 lg:mb-0">
            {product?.title}
          </h2>

          <div className="flex items-center gap-3 lg:gap-[18px] mt-3 mb-4 lg:mb-0 min-w-0">
            <h1 className="font-poppins font-bold leading-10 lg:leading-[64px] text-2xl lg:text-[56px] text-green shrink-0">
              ${discountedPrice ?? originalPrice}
            </h1>
            {discountedPrice && (
              <span className="font-montserrat text-sm lg:text-xl leading-6 lg:leading-[30px] text-black opacity-50 block mt-1 lg:mt-2.5 relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:top-1/2 truncate">
                ${originalPrice}
              </span>
            )}
          </div>

          <ul className="mt-4 lg:mt-12 flex flex-col gap-3 lg:gap-4">
            <li className="text-black text-base lg:text-xl leading-6 lg:leading-[30px] flex flex-col sm:flex-row">
              <h4 className="w-full sm:w-[170px] font-poppins capitalize font-bold mb-1 sm:mb-0">
                Brand
              </h4>
              <p className="font-montserrat">{product?.brand ?? "N/A"}</p>
            </li>
            <li className="text-black text-base lg:text-xl leading-6 lg:leading-[30px] flex flex-col sm:flex-row">
              <h4 className="w-full sm:w-[170px] font-poppins capitalize font-bold mb-1 sm:mb-0">
                Category
              </h4>
              <p className="font-montserrat capitalize">
                {product?.category ?? "N/A"}
              </p>
            </li>
            <li className="text-black text-base lg:text-xl leading-6 lg:leading-[30px] flex flex-col sm:flex-row">
              <h4 className="w-full sm:w-[170px] font-poppins capitalize font-bold mb-1 sm:mb-0">
                Stock
              </h4>
              <p className="font-montserrat">{product?.stock ?? "N/A"}</p>
            </li>
            <li className="text-black text-base lg:text-xl leading-6 lg:leading-[30px] flex flex-col sm:flex-row">
              <h4 className="w-full sm:w-[170px] font-poppins capitalize font-bold mb-1 sm:mb-0">
                Delivery
              </h4>
              <p className="font-montserrat">
                {product?.shippingInformation ?? "Worldwide"}
              </p>
            </li>
            {product?.tags?.length > 0 && (
              <li className="text-black text-base lg:text-xl leading-6 lg:leading-[30px] flex flex-col sm:flex-row sm:justify-between">
                <h4 className="w-full sm:w-[170px] font-poppins capitalize font-bold mb-2 sm:mb-0">
                  Tags
                </h4>
                <div className="w-full sm:w-auto font-montserrat text-sm lg:text-base flex flex-wrap gap-x-1 gap-y-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="py-2 px-4 font-bold border-[#979797] border bg-white rounded-[5px] capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-8 lg:mt-16 border-y border-[#EBEBEB] py-6 lg:py-10">
        <div className="grid grid-cols-3 gap-0">
          {[
            { icon: <Shipping />, title: "Free Shipping", desc: "Worldwide available" },
            { icon: <Shield />, title: "100% Guaranteed", desc: "Receive product first" },
            { icon: <Transparent />, title: "Return Available", desc: "See return policy" },
          ].map((item, i) => (
            <div key={item.title} className={`flex gap-3 items-center px-4 lg:px-8 ${i !== 0 ? "border-l border-[#EBEBEB]" : ""}`}>
              <div className="flex-shrink-0 size-9 lg:size-12 flex items-center justify-center bg-green/10 rounded-full p-2">
                {item.icon}
              </div>
              <div className="text-black font-montserrat">
                <h6 className="font-bold text-xs sm:text-sm lg:text-base leading-5">{item.title}</h6>
                <p className="font-normal text-xs lg:text-sm text-black/60 mt-0.5 hidden sm:block">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 lg:gap-12 items-center mt-6 lg:mt-10">
        <div className="flex gap-4 lg:gap-12 items-center">
          <button
            className="size-12 lg:size-[56px] p-3 lg:p-4 rounded-full hover:bg-lightGray"
            onClick={() => handleQuantity("minus")}
          >
            <MinusIcon />
          </button>
          <input
            className="countInput w-16 lg:w-21 font-poppins text-2xl lg:text-4xl font-semibold leading-8 lg:leading-[46px] placeholder:text-black text-center outline-0 [appearance:textfield]"
            type="number"
            value={quantity}
            readOnly
          />
          <button
            className="size-12 lg:size-[56px] p-3 lg:p-4 rounded-full hover:bg-lightGray"
            onClick={() => handleQuantity("plus")}
          >
            <PlusIcon />
          </button>
        </div>
        <div className="flex items-center gap-3 lg:gap-4">
          <Button text={adding ? "Adding..." : "Add to Cart"} onClick={handleAddToCart} />
          <button
            onClick={() => toggleFavorite({ id: product._id, title: product.title, price: discountedPrice ?? originalPrice, image: product.thumbnail, type: product.category })}
            className="p-3 lg:p-[17px] border border-green rounded-10p cursor-pointer hover:bg-lightGray transition-all"
          >
            {isFavorite(product._id)
              ? <GoHeartFill className="text-red-500 text-2xl" />
              : <GoHeart className="text-green text-2xl" />}
          </button>
          <Link
            to={"/cart"}
            className="p-3 lg:p-[17px] border border-green rounded-10p cursor-pointer hover:bg-lightGray transition-all"
            title="View Cart"
          >
            <CartIcon color="#023440" />
          </Link>
        </div>
      </div>

      <div className="mt-12 lg:mt-[100px]">
        <ProductDetailsAcc productData={productAccData} productId={product._id} />
      </div>
    </div>
  );
};

export default ProductDetailsCard;
