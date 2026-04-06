import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import ProductLayout from "../components/layouts/ProductLayout";
import Button from "../components/Button";
import Slider from "react-slick";
import NextArrow from "../icons/NextArrow";
import { fetchProducts } from "../productDetailsArrays";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} grid place-items-center mr-5 !top-[46.5%]`}
      onClick={onClick}
    >
      <NextArrow />
    </div>
  );
}

const SpringSale = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  // const { springSaleEnd } = useContext(langContext);

  const [timerLeft, setTimerLeft] = useState("");

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const saleEndDate = new Date("Feb 31, 2026 10:00 AM +06").getTime();

    const different = saleEndDate - now;

    if (different < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(different / (1000 * 60 * 60 * 24)),
      hours: Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((different % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((different % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="bg-[#F4F4F4] py-6 lg:py-16 ">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-32 relative ">
          <div className="mt-8 lg:mt-43 text-center lg:text-left">
            <h1 className="text-[#303030] font-['Poppins'] font-bold leading-[40px] lg:leading-[68px] text-3xl lg:text-[56px] ">
              Spring Sale
            </h1>
            <div>
              <div className="font-['Poppins'] font-semibold leading-[30px] lg:leading-[46px] text-2xl lg:text-4xl text-[#FF624C] flex gap-3 lg:gap-6 text-center pt-6 lg:pt-10 pb-8 lg:pb-18 justify-center lg:justify-start ">
                <p>
                  <span>
                    {timerLeft.days <= 9
                      ? `0${timerLeft.days}`
                      : timerLeft.days}
                  </span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-sm lg:text-base leading-6 block ">
                    Days
                  </span>
                </p>
                :
                <p>
                  <span>
                    {timerLeft.hours <= 9
                      ? `0${timerLeft.hours}`
                      : timerLeft.hours}
                  </span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-sm lg:text-base leading-6 block ">
                    Hours
                  </span>
                </p>
                :
                <p>
                  <span>
                    {timerLeft.minutes <= 9
                      ? `0${timerLeft.minutes}`
                      : timerLeft.minutes}
                  </span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-sm lg:text-base leading-6 block ">
                    Minutes
                  </span>
                </p>
                :
                <p>
                  <span>
                    {timerLeft.seconds <= 9
                      ? `0${timerLeft.seconds}`
                      : timerLeft.seconds}
                  </span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-sm lg:text-base leading-6 block ">
                    Seconds
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button text={"Shop Now"} />
            </div>
          </div>

          <div className="w-full lg:max-w-[992px] lg:pr-7.5 ">
            <Slider className="spring_sale " {...settings}>
              {products.map((item) => (
                <ProductLayout
                  v2={true}
                  title={item.title}
                  stars={item.stars}
                  type={item.type}
                  rating={item.rating}
                  price={item.price}
                  image={item.image}
                  discounted={20}
                  inStoke={100}
                />
              ))}
            </Slider>
          </div>
          <div className=" absolute bottom-0 left-0 hidden lg:block ">
            <img src="./images/shapes/dots_two.svg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpringSale;
