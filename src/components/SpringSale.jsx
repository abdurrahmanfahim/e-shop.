import React, { useContext, useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import ProductLayout from "../components/layouts/ProductLayout";
import Button from "../components/Button";
import Slider from "react-slick";
import NextArrow from "../icons/NextArrow";
import langContext from "../contexts/LangContext";
import { fetchProducts, springProductDetails } from "../productDetailsArrays";

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
  };

  // eslint-disable-next-line no-unused-vars
  const { springSaleEnd } = useContext(langContext);

  const [timerLeft, setTimerLeft] = useState("");

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const saleEndDate = new Date("May 31, 2025 10:00 AM +06").getTime();

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
    <div className="bg-[#F4F4F4] py-16 ">
      <Container>
        <div className="flex justify-between gap-32 relative ">
          <div className="mt-43">
            <h1 className="text-[#303030] font-['Poppins'] font-bold leading-[68px] text-[56px] ">
              Spring Sale
            </h1>
            <div>
              <div className="font-['Poppins'] font-semibold leading-[46px] text-4xl text-[#FF624C] flex gap-6 text-center pt-10 pb-18 ">
                <p>
                  <span>
                    {timerLeft.days <= 9
                      ? `0${timerLeft.days}`
                      : timerLeft.days}
                  </span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
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
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
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
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
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
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
                    Seconds
                  </span>
                </p>
              </div>
            </div>
            <div>
              <Button text={"Shop Now"} />
            </div>
          </div>
          <div className="max-w-[992px] pr-7.5 ">
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
          <div className=" absolute bottom-0 left-0 ">
            <img src="./images/shapes/dots_two.svg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpringSale;
