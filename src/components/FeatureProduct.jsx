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
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !flex !items-center !justify-center !w-10 !h-10 !bg-white !border !border-gray-800 !rounded-full !cursor-pointer !z-10 hover:!bg-gray-50 !-right-5`}
      onClick={onClick}
    >
      <HiOutlineChevronRight size={16} color="#303030" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !flex !items-center !justify-center !w-10 !h-10 !bg-white !border !border-gray-800 !rounded-full !cursor-pointer !z-10 hover:!bg-gray-50 !-left-5`}
      onClick={onClick}
    >
      <HiOutlineChevronLeft size={16} color="#303030" />
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
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }
    ]
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
        <h2 className="text-[#303030] font-['Poppins'] font-semibold leading-[46px] text-2xl md:text-4xl capitalize ">
          Featured Products
        </h2>
        <button>
          <Link
            className="flex items-center gap-4 font-['Montserrat'] text-base font-bold leading-6 text-[#FF624C] capitalize "
            to={"/all-products"}
          >
            View All <LongArrow />
          </Link>
        </button>
      </div>
      <div className="relative">
        <Slider className="w-full pb-20 feature_product_slide" {...settings}>
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
      </div>
    </Container>
  );
};

export default FeatureProduct;
