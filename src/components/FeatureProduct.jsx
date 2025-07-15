import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LongArrow from "../icons/LongArrow";
import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import { Link } from "react-router-dom";
import { fetchProducts } from "../productDetailsArrays";
import { useEffect, useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} grid place-items-center`}
      style={{
        ...style,
        zIndex: "2",
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
        zIndex: "2",
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

const FeatureProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: true,
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <Container>
      <div className="flex justify-between items-center w-full mb-12 ">
        <h2 className="text-[#303030] font-['Poppins'] font-semibold leading-[46px] text-4xl capitalize ">
          Featured Products
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
      <Slider className="pb-20 mx-10 feature_product_slide" {...settings}>
        {products.map((item, index) => (
          <ProductLayout
            key={index}
            image={item.image}
            type={item.type}
            title={item.title}
            stars={item.stars}
            rating={item.rating}
            price={item.price}
            discounted={item.discounted}
            inStoke={item.inStoke}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default FeatureProduct;
