import React from "react";
import ProductLayout from "./layouts/ProductLayout";
import Container from "./layouts/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

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

const FeatureProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: true,

  };
  const productDetails = [
    {
      type: "laptop",
      title: "UltraBook Pro 15 Slim Lightweight Laptop",
      stars: 4,
      rating: 85,
      price: "1,299.00",
    },
    {
      type: "laptop",
      title: "UltraBook Pro 15 Slim Lightweight Laptop",
      stars: 4,
      rating: 85,
      price: "1,299.00",
    },
    {
      type: "camera",
      title: "ProShot DSLR 24MP Camera Bundle",
      stars: 5,
      rating: 45,
      price: "799.00",
      discounted: 30,
      inStoke: 10,
    },
    {
      type: "watch",
      title: "SmartWatch Series 7 Fitness Tracker",
      stars: 4,
      rating: 150,
      price: "299.00",
    },
    {
      type: "headphones",
      title: "Noise Cancelling Wireless Headphones",
      stars: 3,
      rating: 200,
      price: "199.00",
      discounted: 50,
      inStoke: 50,
    },
    {
      type: "watch",
      title: "SmartWatch Series 7 Fitness Tracker",
      stars: 4,
      rating: 150,
      price: "299.00",
    },
    // {
    //   type: "tablet",
    //   title: "TabX 10.5\" HD Display Tablet",
    //   stars: 3.5,
    //   rating: 60,
    //   price: "399.00",
    // },
    {
      type: "camera",
      title: "ProShot DSLR 24MP Camera Bundle",
      stars: 5,
      rating: 45,
      price: "799.00",
      discounted: 30,
      inStoke: 10,
    },
    {
      type: "camera",
      title: "ProShot DSLR 24MP Camera Bundle",
      stars: 5,
      rating: 45,
      price: "799.00",
      discounted: 30,
      inStoke: 10,
    },
  ];
  return (
    <Container>
      <Slider className="pb-20" {...settings}>
        {productDetails.map((item, index) => (
          <ProductLayout
            key={index}
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
