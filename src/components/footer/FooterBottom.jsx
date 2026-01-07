import React from "react";
import { Link } from "react-router-dom";
import PhoneFooter from "../../icons/PhoneFooter";
import EnvelopeFooter from "../../icons/EnvelopeFooter";
import LocationFooter from "../../icons/LocationFooter";

const FooterBottom = () => {
  return (
    <div className="mt-12 lg:mt-[100px] mb-12 lg:mb-20">
      <div className='flex flex-col lg:flex-row justify-between font-["Montserrat"] text-[#303030] mb-12 lg:mb-20 gap-8 lg:gap-0'>
        <div className="flex flex-col justify-between text-center lg:text-left">
          <div className="mb-6 lg:mb-0">
            <Link to={"/"}>
              <img className="mx-auto lg:mx-0" src="./images/logo.png" alt="footerLogo" />
            </Link>
          </div>
          <ul className="font-normal text-sm lg:text-base leading-6 flex flex-col gap-3 ">
            <li className="relative pl-0 lg:pl-8 ">
              <Link className="hover:text-[#FF624C] flex items-center justify-center lg:justify-start gap-2" to={"tel:161352163"}>
                <span className="text-[#646464] lg:absolute lg:top-1/2 lg:-translate-1/2 lg:left-2">
                  <PhoneFooter />
                </span>{" "}
                +1 (555) 123-4567
              </Link>
            </li>
            <li className="relative pl-0 lg:pl-8 ">
              <Link
                className="hover:text-[#FF624C] flex items-center justify-center lg:justify-start gap-2"
                to={"mailto:fahimahmad123go@gmail.com"}
              >
                <span className="text-[#646464] lg:absolute lg:top-1/2 lg:-translate-1/2 lg:left-2">
                  <EnvelopeFooter />
                </span>
                information@eshop.com
              </Link>
            </li>
            <li className="relative pl-0 lg:pl-8 ">
              <Link
                className="hover:text-[#FF624C] flex items-center justify-center lg:justify-start gap-2"
                to={"https://maps.app.goo.gl/GLKtcy2x3Lo6XxJq5"}
              >
                <span className="text-[#646464] text-xl lg:absolute lg:top-1/2 lg:-translate-1/2 lg:left-2">
                  <LocationFooter />
                </span>
                123 Main Street, Suite 105, Anytown USA
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-8 lg:gap-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-24 lg:flex">
            <div className="text-center lg:text-left">
              <h4 className='font-semibold leading-[30px] font-["Poppins"] mb-4 lg:mb-6 text-lg lg:text-xl '>
                Links
              </h4>
              <ul className="text-[#303030] font-normal text-sm lg:text-base leading-6 flex flex-col gap-3 ">
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"/product-list"}>
                    {" "}
                    Products List
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Order Tracking
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Products Guide
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Tech Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <h4 className='font-semibold leading-[30px] font-["Poppins"] mb-4 lg:mb-6 text-lg lg:text-xl '>
                Supports
              </h4>
              <ul className="text-[#303030] font-normal text-sm lg:text-base leading-6 flex flex-col gap-3 ">
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    About Us
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Return Policy
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Help Centre
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Store Locations
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-20 lg:flex">
            <div className="text-center lg:text-left">
              <h4 className='font-semibold leading-[30px] font-["Poppins"] mb-4 lg:mb-6 text-lg lg:text-xl '>
                Categories
              </h4>
              <ul className="text-[#303030] font-normal text-sm lg:text-base leading-6 flex flex-col gap-3 ">
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Computers & Tablets
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Mobile Phones & Accessories
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    TV & Home Theater
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Audio & Headphones
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Cameras & Camcorders
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Gaming Equipment
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#FF624C]" to={"#"}>
                    {" "}
                    Home Appliances
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between text-center lg:text-left">
              <div className="mb-6 lg:mb-0">
                <h4 className='font-semibold leading-[30px] font-["Poppins"] mb-4 lg:mb-6 text-lg lg:text-xl '>
                  Payments
                </h4>
                <img className="mx-auto lg:mx-0" src="./images/payment.png" alt="payment gateway" />
              </div>
              <div>
                <h4 className='font-semibold leading-[30px] font-["Poppins"] mb-4 lg:mb-6 text-lg lg:text-xl '>
                  Follow Us
                </h4>
                <ul className="text-[#303030] font-normal text-sm lg:text-base leading-6 flex flex-col gap-3 ">
                  <li>
                    {" "}
                    <Link className="hover:text-[#FF624C]" to={"#"}>
                      {" "}
                      Twitter
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="hover:text-[#FF624C]" to={"#"}>
                      {" "}
                      Instagram
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="hover:text-[#FF624C]" to={"#"}>
                      {" "}
                      Facebook
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-[#CBCBCB] h-[1px]" />
      <div className="flex flex-col lg:flex-row justify-between text-[#646464] font-['Montserrat'] font-normal text-xs lg:text-sm leading-5 pt-2 gap-2 lg:gap-0 text-center lg:text-left">
        <p>Copyright © 2023 E-Shop. All Rights Reserved.</p>
        <p>
          <Link className="hover:text-[#FF624C]" to={"#"}>
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link className="hover:text-[#FF624C]" to={"#"}>
            Terms & Condition
          </Link>{" "}
          |{" "}
          <Link className="hover:text-[#FF624C]" to={"#"}>
            Sitemap
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
