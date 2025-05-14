import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="mt-[100px] mb-20">
      <div className='flex justify-between font-["Montserrat"] text-[#303030] mb-20 '>
        <div className="flex flex-col justify-between">
          <div>
            <img src="./images/logo.png" alt="footerLogo" />
          </div>
          <ul className="font-normal text-base leading-6 flex flex-col gap-3 ">
            <li className="relative pl-8 ">
              <span className="absolute top-1/2 -translate-1/2 left-2 ">
                <ImPhone />
              </span>{" "}
              +1 (555) 123-4567
            </li>
            <li className="relative pl-8 ">
              <span className="absolute top-1/2 -translate-1/2 left-2 ">
                <BsFillEnvelopeFill />
              </span>
              information@eshop.com
            </li>
            <li className="relative pl-8 ">
              <span className="absolute top-1/2 -translate-1/2 left-2 text-xl ">
                <MdLocationPin />
              </span>
              123 Main Street, Suite 105, Anytown USA
            </li>
          </ul>
        </div>
        <div className="flex gap-24">
          <div className="flex gap-24">
            <div>
              <h4 className='font-semibold leading-[30px] font-["Poppins"] mb-6 text-xl '>
                Links
              </h4>
              <ul className="text-[#303030] font-normal text-base leading-6 flex flex-col gap-3 ">
                <li>
                  {" "}
                  <Link to={"/product-list"}> Products List</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Order Tracking</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Products Guide</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Shopping Cart</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Tech Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold leading-[30px] font-["Poppins"] mb-6 text-xl '>
                Supports
              </h4>
              <ul className="text-[#303030] font-normal text-base leading-6 flex flex-col gap-3 ">
                <li>
                  {" "}
                  <Link to={"#"}> About Us</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Privacy Policy</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Return Policy</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Help Centre</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Store Locations</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Careers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-20 ">
            <div>
              <h4 className='font-semibold leading-[30px] font-["Poppins"] mb-6 text-xl '>
                Categories
              </h4>
              <ul className="text-[#303030] font-normal text-base leading-6 flex flex-col gap-3 ">
                <li>
                  {" "}
                  <Link to={"#"}> Computers & Tablets</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Mobile Phones & Accessories</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> TV & Home Theater</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Audio & Headphones</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Cameras & Camcorders</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Gaming Equipment</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"#"}> Home Appliances</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className='font-semibold leading-[30px] font-["Poppins"] mb-6 text-xl '>
                  Payments
                </h4>
                <img src="./images/payment.png" alt="payment gateway" />
              </div>
              <div>
                <h4 className='font-semibold leading-[30px] font-["Poppins"] mb-6 text-xl '>
                  Follow Us
                </h4>
                <ul className="text-[#303030] font-normal text-base leading-6 flex flex-col gap-3 ">
                  <li>
                    {" "}
                    <Link to={"#"}> Twitter</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"#"}> Instagram</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"#"}> Facebook</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-[#CBCBCB] h-[1px]" />
      <div className="flex justify-between text-[#646464] font-['Montserrat'] font-normal text-sm leading-5 pt-2 ">
        <p>Copyright © 2023 E-Shop. All Rights Reserved.</p>
        <p>
          <Link to={"#"}>Privacy Policy</Link> |{" "}
          <Link to={"#"}>Terms & Condition</Link> |{" "}
          <Link to={"#"}>Sitemap</Link>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
