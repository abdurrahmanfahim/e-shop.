import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import ProductLayout from "../components/layouts/ProductLayout";
import Button from "../components/Button";
import Slider from "react-slick";
import { HiOutlineChevronRight } from "react-icons/hi";
import NextArrow from "../icons/NextArrow";



function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} grid place-items-center mr-5`}
      onClick={onClick}
    >
      <NextArrow />
    </div>
  );
}


const SpringSale = () => {
  const productDetails = [
    {
      type: "television",
      title:
        "LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ..",
      stars: 4,
      rating: 85,
      price: "4599.00",
      discounted: 50,
      inStoke: 20,
    },
    {
      type: "camera",
      title:
        "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
      stars: 5,
      rating: 45,
      price: "3799.00",
      discounted: 30,
      inStoke: 10,
    },
    {
      type: "watch",
      title:
        "SmartWatch Series 7 Fitness Tracker with Heart Rate Monitor, GPS, and 1.8-inch AMOLED Display",
      stars: 4,
      rating: 150,
      price: "299.00",
      discounted: 80,
      inStoke: 30,
    },
    {
      type: "camera",
      title:
        "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
      stars: 5,
      rating: 45,
      price: "799.00",
      discounted: 30,
      inStoke: 10,
    },
    {
      type: "headphones",
      title:
        "Noise Cancelling Wireless Headphones with 40-Hour Battery Life and Hi-Res Audio Support",
      stars: 3,
      rating: 200,
      price: "199.00",
      discounted: 50,
      inStoke: 50,
    },
    {
      type: "watch",
      title:
        "SmartWatch Series 7 Fitness Tracker with Heart Rate Monitor, GPS, and 1.8-inch AMOLED Display",
      stars: 4,
      rating: 150,
      price: "299.00",
      discounted: 20,
      inStoke: 0,
    },
    {
      type: "camera",
      title:
        "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
      stars: 5,
      rating: 45,
      price: "799.00",
      discounted: 30,
      inStoke: 10,
    },
  ];

    var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    pauseOnHover: true,
  };

  const [timerLeft, setTimerLeft] = useState('')

  function calculateTimeLeft() {
    const saleEndDate = new Date('May 29, 2025 10:00 AM +06').getTime()
    const now = new Date().getTime()

    const different = saleEndDate - now

    if (different < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0}
    }

    const pad = (num) => String(num).padStart(2, '0');
    return {
      days: pad(Math.floor(different / (1000 * 60 * 60 * 24))),
      hours: pad(Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))),
      minutes: pad(Math.floor(different % (1000 * 60 * 60) / (1000 * 60))),
      seconds: pad(Math.floor(different % (1000 * 60) / 1000)),
    }
    
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerLeft(calculateTimeLeft())
    }, 1000);
  
    return () => clearInterval(timer)
    
  }, [])
  
  return (
    <div className="bg-[#F4F4F4] py-16 ">
      <Container>
        <div className="flex justify-between items-center gap-32 ">
          <div className="">
            <h1 className="text-[#303030] font-['Poppins'] font-bold leading-[68px] text-[56px] ">
              Spring Sale
            </h1>

            <div>
              <div className="font-['Poppins'] font-semibold leading-[46px] text-4xl text-[#FF624C] flex gap-6 text-center pt-10 pb-18 ">
                <p>
                  <span>{timerLeft.days}</span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
                    Days
                  </span>
                </p>
                :
                <p>
                  <span>{timerLeft.hours}</span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
                    Hours
                  </span>
                </p>
                :
                <p>
                  <span>{timerLeft.minutes}</span>
                  <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-6 block ">
                    Minutes
                  </span>
                </p>
                :
                <p>
                  <span>{timerLeft.seconds}</span>
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
          <div className="w-[992px] mr-10 ">
            <Slider className="spring_sale " {...settings}>
            {productDetails.map((item) => (
              <ProductLayout v2={true} title={item.title} stars={item.stars} type={item.type}rating={item.rating} price={item.price} discounted={item.discounted} inStoke={item.inStoke} />
            ))}
          </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpringSale;
