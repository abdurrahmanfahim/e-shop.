import { AiOutlineDelete } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/layouts/Container";
import ProductCounter from "../components/ProductCounter";
import { cartData } from "../productDetailsArrays";

const CartPage = () => {
  return (
    <Container>
      <div className=" mt-8 lg:mt-16 ">
        <div className="flex gap-2 lg:gap-4 items-center text-black font-montserrat text-sm lg:text-base leading-6 ">
          <span>Home</span> <span>|</span>
          <span className="font-bold ">Cart</span>
        </div>
        <div className="mt-8 lg:mt-12">
          <h1 className=" font-poppins font-bold text-3xl lg:text-[56px] leading-[40px] lg:leading-17 mb-4 lg:mb-7  ">
            Your Cart
          </h1>

          <div>
            <div className="hidden lg:block">
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
                  className="flex flex-col lg:grid lg:grid-cols-[50%_16%_16%_18%] py-6 lg:py-10 px-4 lg:px-9 bg-white font-poppins text-lg lg:text-xl leading-[30px] font-semibold text-black border border-transparent rounded-10p hover:border-black/25 overflow-hidden group cursor-pointer gap-4 lg:gap-0"
                >
                  <li className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
                    <img
                      className="w-full lg:w-[237px] h-[200px] lg:h-[214px] object-cover mb-4 lg:mb-0 "
                      src="./images/productimg.jpg"
                      alt="productimg"
                    />
                    <div className="w-full lg:w-[314px] lg:mr-[100px] flex flex-col justify-center ">
                      <span className="font-montserrat text-xs lg:text-sm font-normal leading-5 uppercase tracking-[3px] lg:tracking-[5px] block ">
                        {item.category}
                      </span>
                      <h4 className="mt-2 lg:mt-4 mb-4 lg:mb-[46px] line-clamp-2 font-['Poppins'] text-lg lg:text-xl font-semibold leading-[25px] lg:leading-[30px] group-hover:text-green group-hover:underline transition-all duration-300 ease-out">
                        <Link to={"/product-details"}>{item.product}</Link>
                      </h4>
                      <p className=" font-montserrat text-sm lg:text-base leading-6 text-black font-normal flex gap-2  ">
                        <span>
                          <b>Variant:</b>
                        </span>
                        <span>{item.variant}</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex lg:items-center justify-between lg:justify-start ">
                    <span className="lg:hidden font-bold">Price:</span>
                    <span>
                      {item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </span>
                  </li>
                  <li className="flex lg:block justify-between lg:justify-start items-center lg:items-start">
                    <span className="lg:hidden font-bold">Qty:</span>
                    <ProductCounter />
                  </li>
                  <li className="flex lg:items-center justify-between ">
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <span className="lg:hidden font-bold">Total: </span>
                        <span>
                          {item.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </span>
                      </div>
                      <div className="flex lg:flex-col justify-center gap-3 lg:gap-[18px] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 ease-out  ">
                        <Link
                          to={"#"}
                          className="size-10 lg:size-[50px] rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center text-lg lg:text-xl transition-all duration-300 ease-out border border-green "
                        >
                          <IoShareSocialOutline />
                        </Link>
                        <Link
                          to={"#"}
                          className="size-10 lg:size-[50px] rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center text-lg lg:text-xl transition-all duration-300 ease-out border border-green "
                        >
                          <AiOutlineDelete />
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0 mt-7 ">
              <div className=" relative w-full lg:w-auto">
                <input
                  className=" w-full lg:w-[618px] font-montserrat text-sm lg:text-base leading-6 placeholder:text-black p-4 lg:p-9 border border-[#CBCBCB] rounded-10p  "
                  type="text"
                  placeholder="Enter coupon code (ex: FIRSTPAY)"
                  name="coupon-code"
                />
                <button className="font-poppins text-lg lg:text-xl font-semibold leading-[30px] text-black underline absolute top-1/2 right-4 lg:right-9 -translate-y-1/2 cursor-pointer ">
                  Apply Code
                </button>
              </div>
              <div className="w-full lg:w-auto">
                <div className=" w-full lg:w-[618px] p-4 lg:p-9 bg-lightGray rounded-10p font-montserrat flex justify-between items-center   ">
                  <h6 className="text-sm lg:text-base font-bold leading-6 text-black ">
                    SUB TOTAL
                  </h6>
                  <p className="flex flex-col lg:flex-row gap-2 lg:gap-6 items-end lg:items-center ">
                    <b className="font-poppins text-xl lg:text-2xl font-semibold leading-[30px] text-green ">
                      {cartData
                        .reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0,
                        )
                        .toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                    </b>
                    <p className="text-xs lg:text-base">
                      ( excl. shipping fee )
                    </p>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-4 lg:gap-0 mt-6 lg:mt-8 mb-12 lg:mb-[100px] ">
                  <Link
                    to={"/checkout"}
                    text={"Continue Shopping"}
                    bg="white"
                    color="#303030"
                  />
                  <Button text={"Update Cart"} />
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
