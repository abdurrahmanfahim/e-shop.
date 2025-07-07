import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LongArrow from "../icons/LongArrow";
import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import { Link } from "react-router-dom";
import { productDetails } from '../productDetailsArrays'

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

  return (
    <Container>
      <div className="flex justify-between items-start py-20">
        <div className="w-[902px]">
          <div className="flex justify-between items-center w-full mb-12 ">
            <h2 className="text-[#303030] font-['Poppins'] font-semibold leading-[46px] text-4xl capitalize">
              Best Seller
            </h2>
            <button>
              <Link
                className="flex items-center gap-4 font-['Montserrat'] text-base font-bold leading-6 text-[#FF624C] capitalize "
                to={"#"}
              >
                View All <LongArrow />
              </Link>
            </button>
          </div>
          <div className="flex flex-wrap gap-x-6 ">
            {productDetails.map((item, index) => (
              <div className="flex-1/4" key={item.price + index}>
                <ProductLayout
                  type={item.type}
                  title={item.title}
                  stars={item.stars}
                  rating={item.rating}
                  price={item.price}
                  discounted={item.discounted}
                  inStoke={item.inStoke}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[544px] ">
          <img src="./images/playcard/buyonegetone.png" alt="buyonegetone" />
        </div>
      </div>
    </Container>
  );
};

export default BestSeller;
