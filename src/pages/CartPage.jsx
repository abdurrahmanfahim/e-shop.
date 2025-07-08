import { cartData } from "../productDetailsArrays";
import Container from "../components/layouts/Container";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import ProductCounter from "../components/ProductCounter";
import Button from "../components/Button";
import { IoShareSocialOutline } from "react-icons/io5";

const CartPage = () => {
  
  return (
    <Container>
      <div className=" mt-16 ">
        <div className="flex gap-4 items-center text-black font-montserrat text-base leading-6 ">
          <span>Home</span> <span>|</span>
          <span className="font-bold ">Cart</span>
        </div>
        <div className="mt-12">
          <h1 className=" font-poppins font-bold text-[56px] leading-17 mb-7  ">
            Your Cart
          </h1>

          <div>
            <div>
              <ul className="grid grid-cols-[50%_16%_16%_18%] py-8 px-14 bg-lightGray rounded-15p font-montserrat text-base leading-6 font-bold text-black uppercase ">
                <li className="">Product</li>
                <li className="">Price</li>
                <li className="">Qty</li>
                <li className="">Total</li>
              </ul>
            </div>

            <div className="py-8 ">
              {cartData.map((item) => (
                <ul
                  key={item.product + item.price}
                  className="grid grid-cols-[50%_16%_16%_18%] py-10 px-9 bg-white font-poppins text-xl leading-[30px] font-semibold text-black border border-transparent rounded-10p hover:border-black/25 overflow-hidden group cursor-pointer "
                >
                  <li className="flex justify-between items-center ">
                    <img
                      className="w-[237px] h-[214px] object-cover  "
                      src="./images/productimg.jpg"
                      alt=""
                    />
                    <div className="w-[314px] mr-[100px] flex flex-col justify-center ">
                      <span className='font-["Montserrat"] text-sm font-normal leading-5 uppercase tracking-[5px] block '>
                        {item.category}
                      </span>
                      <h4 className="mt-4 mb-[46px] line-clamp-2 font-['Poppins'] text-xl font-semibold leading-[30px] group-hover:text-[#FF624C] group-hover:underline transition-all duration-300 ease-out">
                        <Link to={"/product-details"}>{item.product}</Link>
                      </h4>
                      <p className=" font-montserrat text-base leading-6 text-black font-normal flex gap-2  ">
                        <span>
                          <b>Variant:</b>
                        </span>
                        <span>{item.variant}</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center ">
                    {item.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </li>
                  <li className="">
                    <ProductCounter />
                  </li>
                  <li className="flex items-center justify-between ">
                    <p>
                      {item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                    <div className="flex flex-col justify-center gap-[18px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out  ">
                      <Link
                        to={"#"}
                        className="size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-xl transition-all duration-300 ease-out border border-[#FF624C] "
                      >
                        <IoShareSocialOutline />
                      </Link>
                      <Link
                        to={"#"}
                        className="size-[50px] rounded-full text-[#FF624C] bg-white hover:text-white hover:bg-[#FF624C] flex items-center justify-center text-xl transition-all duration-300 ease-out border border-[#FF624C] "
                      >
                        <AiOutlineDelete />
                      </Link>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
            <div className="flex justify-between items-start mt-7 ">
              <div className=" relative">
                <input className=" w-[618px] font-montserrat text-base leading-6 placeholder:text-black p-9 border border-[#CBCBCB] rounded-10p  " type="text" placeholder="Enter coupon code (ex: FIRSTPAY)" name="coupon-code" />
                <button className="font-poppins text-xl font-semibold leading-[30px] text-black underline absolute top-1/2 right-9 -translate-y-1/2 cursor-pointer ">Apply Code</button>
              </div>
              <div className="">
                <div className=" w-[618px] p-9 bg-lightGray rounded-10p font-montserrat flex justify-between items-center   ">
                  <h6 className="text-base font-bold leading-6 text-black ">SUB TOTAL</h6>
                  <p className="flex gap-6 items-center ">
                    <b className="font-poppins text-2xl font-semibold leading-[30px] text-orange ">{cartData.reduce((acc, item) => acc + (item.price * item.quantity), 0).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}</b>
                    <p>( excl. shipping fee )</p>
                  </p>
                </div>
                <div className="flex justify-end mt-8 mb-[100px] ">
                  <Button text={'Continue Shopping'} bg="white" color="#303030" />
                  <Button text={'Update Cart'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
