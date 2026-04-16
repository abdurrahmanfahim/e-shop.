import { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/layouts/Container";
import CartContext from "../contexts/CartContext";
import api from "../api/api";

const CartPage = () => {
  const { cart, updateItem, removeItem, subtotal, loading } = useContext(CartContext);
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [couponMsg, setCouponMsg] = useState("");
  const [couponErr, setCouponErr] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = async () => {
    setCouponMsg(""); setCouponErr("");

    try {
      const { data } = await api.post("/coupon/validate", { code: coupon });
      const amt = data.type === "percent" ? (subtotal * data.discount) / 100 : data.discount;
      setDiscount(amt);
      setCouponMsg(`${data.message} — You save $${amt.toFixed(2)}`);
    } catch (err) {
      setCouponErr(err.response?.data?.message || "Invalid coupon");
      setDiscount(0);
    }
  };

  const fmt = (n) => Number(n).toLocaleString("en-US", { style: "currency", currency: "USD" });

  if (loading) return (
    <Container>
      <div className="mt-8 lg:mt-16 flex flex-col gap-4">
        {[...Array(3)].map((_, i) => <div key={i} className="animate-pulse h-32 bg-lightGray rounded-15p" />)}
      </div>
    </Container>
  );

  return (
    <Container>
      <div className="mt-8 lg:mt-16">
        <div className="flex gap-2 lg:gap-4 items-center text-black font-montserrat text-sm lg:text-base leading-6">
          <Link to="/" className="hover:text-green">Home</Link> <span>|</span>
          <span className="font-bold">Cart</span>
        </div>

        <div className="mt-8 lg:mt-12">
          <h1 className="font-poppins font-bold text-3xl lg:text-[56px] leading-[40px] lg:leading-17 mb-4 lg:mb-7">
            Your Cart
          </h1>

          {!cart.items?.length ? (
            <div className="text-center py-20">
              <p className="font-montserrat text-lg mb-6">Your cart is empty.</p>
              <Button text="Start Shopping" onClick={() => navigate("/all-products")} />
            </div>
          ) : (
            <>
              <div className="hidden lg:block">
                <ul className="grid grid-cols-[50%_16%_16%_18%] py-8 px-14 bg-lightGray rounded-15p font-montserrat text-base leading-6 font-bold text-black uppercase">
                  <li>Product</li><li>Price</li><li>Qty</li><li>Total</li>
                </ul>
              </div>

              <div className="py-4 flex flex-col gap-2">
                {cart.items.map((item) => (
                  <ul
                    key={item._id}
                    className="flex flex-col lg:grid lg:grid-cols-[50%_16%_16%_18%] py-6 lg:py-10 px-4 lg:px-9 bg-white font-poppins text-lg lg:text-xl leading-[30px] font-semibold text-black border border-transparent rounded-10p hover:border-black/25 group gap-4 lg:gap-0"
                  >
                    <li className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <img
                        className="w-full lg:w-[120px] h-[160px] lg:h-[100px] object-contain rounded-10p bg-lightGray"
                        src={item.product?.thumbnail || "/images/sliderSmall.png"}
                        alt={item.product?.title}
                      />
                      <div>
                        <span className="font-montserrat text-xs font-normal uppercase tracking-[3px] block mb-1 text-black/50">
                          {item.product?.category}
                        </span>
                        <Link
                          to={`/product-details/${item.product?._id}`}
                          className="line-clamp-2 font-poppins text-base font-semibold hover:text-green hover:underline"
                        >
                          {item.product?.title || item.title}
                        </Link>
                        {item.variant && (
                          <p className="font-montserrat text-sm font-normal mt-1">
                            <b>Variant:</b> {item.variant}
                          </p>
                        )}
                      </div>
                    </li>

                    <li className="flex lg:items-center justify-between lg:justify-start">
                      <span className="lg:hidden font-bold">Price:</span>
                      <span>{fmt(item.price)}</span>
                    </li>

                    <li className="flex lg:items-center justify-between lg:justify-start gap-3">
                      <span className="lg:hidden font-bold">Qty:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => item.quantity > 1 && updateItem(item._id, item.quantity - 1)}
                          className="size-8 rounded-full border border-green text-green hover:bg-green hover:text-white flex items-center justify-center font-bold"
                        >−</button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateItem(item._id, item.quantity + 1)}
                          className="size-8 rounded-full border border-green text-green hover:bg-green hover:text-white flex items-center justify-center font-bold"
                        >+</button>
                      </div>
                    </li>

                    <li className="flex lg:items-center justify-between">
                      <div>
                        <span className="lg:hidden font-bold">Total: </span>
                        <span>{fmt(item.price * item.quantity)}</span>
                      </div>
                      <button
                        onClick={() => removeItem(item._id)}
                        className="size-10 lg:size-[50px] rounded-full text-green bg-white hover:text-white hover:bg-green flex items-center justify-center text-lg border border-green transition-all"
                      >
                        <AiOutlineDelete />
                      </button>
                    </li>
                  </ul>
                ))}
              </div>

              {/* Coupon + Subtotal */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mt-7">
                <div className="relative w-full lg:w-auto">
                  <input
                    className="w-full lg:w-[618px] font-montserrat text-sm lg:text-base leading-6 placeholder:text-black/40 p-4 lg:p-6 border border-[#CBCBCB] rounded-10p"
                    type="text"
                    placeholder="Enter coupon code (ex: FIRSTPAY)"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="font-poppins text-base lg:text-xl font-semibold text-black underline absolute top-1/2 right-4 lg:right-6 -translate-y-1/2 cursor-pointer"
                  >
                    Apply
                  </button>
                  {couponMsg && <p className="font-montserrat text-xs text-green mt-1">{couponMsg}</p>}
                  {couponErr && <p className="font-montserrat text-xs text-red-500 mt-1">{couponErr}</p>}
                </div>

                <div className="w-full lg:w-auto">
                  <div className="w-full lg:w-[618px] p-4 lg:p-9 bg-lightGray rounded-10p font-montserrat flex justify-between items-center">
                    <h6 className="text-sm lg:text-base font-bold text-black">SUB TOTAL</h6>
                    <div className="text-right">
                      {discount > 0 && (
                        <p className="font-montserrat text-xs text-green mb-1">-{fmt(discount)} discount</p>
                      )}
                      <b className="font-poppins text-xl lg:text-2xl font-semibold text-green">
                        {fmt(subtotal - discount)}
                      </b>
                      <p className="text-xs lg:text-sm text-black/50">( excl. shipping fee )</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6 lg:mt-8 mb-12 lg:mb-[100px]">
                    <Button
                      text="Continue Shopping"
                      bg="white"
                      color="#023440"
                      border="1px solid #023440"
                      onClick={() => navigate("/all-products")}
                    />
                    <Button text="Checkout" onClick={() => navigate("/checkout")} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
