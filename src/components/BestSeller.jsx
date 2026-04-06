import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LongArrow from "../icons/LongArrow";
import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../productDetailsArrays";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} grid place-items-center`}
      style={{
        ...style,
        zIndex: "999",
        borderRadius: "50%",
        border: "1px solid #303030",
        right: "-40px",
        marginLeft: "10px",
        display: "flex",
        background: "#fff",
        width: "40px",
        height: "40px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <HiOutlineChevronRight
        size={16}
        color="#303030"
        className=" absolute top-[50%] left-[50%] -translate-[50%]"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} grid place-items-center`}
      style={{
        ...style,
        zIndex: "999",
        left: "-50px",
        marginLeft: "10px",
        display: "flex",
        background: "#fff",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid #303030",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <HiOutlineChevronLeft
        size={16}
        color="#303030 "
        className=" absolute top-[50%] left-[50%] -translate-[50%]"
      />
    </div>
  );
}

const BestSeller = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

    const currentProducts = products.slice(0, 6);


  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-2 py-12 lg:py-20">
        <div className="w-full lg:w-[902px]">
          <div className="flex  justify-between items-start sm:items-center w-full mb-8 lg:mb-12 gap-4 sm:gap-0">
            <h2 className="text-[#303030] font-['Poppins'] font-semibold leading-[30px] lg:leading-[46px] text-2xl lg:text-4xl capitalize">
              Best Seller
            </h2>
            <button>
              <Link
                className="flex items-center gap-4 font-['Montserrat'] text-sm lg:text-base font-bold leading-6 text-[#FF624C] capitalize "
                to={"/all-products"}
              >
                View All <LongArrow />
              </Link>
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-x-5.5">
            {currentProducts.map((item, index) => (
              <div key={item.price + index}>
                <ProductLayout
                  type={item.type}
                  title={item.title}
                  stars={item.stars}
                  rating={item.rating}
                  price={item.price}
                  image={item.image}
                  discounted={item.discounted}
                  inStoke={item.inStoke}
                />
              </div>
            ))}
          </div>
        </div>
        <Link to={"/all-products"} className="w-full lg:w-[544px]">
          <img className="w-full h-auto" src="./images/playcard/buyonegetone.png" alt="buyonegetone" />
        </Link>
      </div>
    </Container>
  );
};

export default BestSeller;
