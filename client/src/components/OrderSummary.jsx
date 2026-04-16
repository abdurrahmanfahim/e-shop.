import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const OrderSummary = ({ title = "Order Summary", children, shippingCost = 0 }) => {
  const { cart, subtotal } = useContext(CartContext);
  const items = cart?.items || [];
  const fmt = (n) => Number(n).toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="w-full lg:w-[594px]">
      <div className="bg-lightGray rounded-[25px] p-6 lg:p-10">
        <h3 className="font-poppins text-xl lg:text-2xl leading-[25px] lg:leading-[30px] font-semibold text-black mb-8 lg:mb-12">
          {title}
        </h3>

        <div className="flex flex-col gap-4 lg:gap-5">
          {items.length === 0 ? (
            <p className="font-montserrat text-sm text-black/50">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-0">
              {/* header row */}
              <div className="grid grid-cols-[1fr_3rem_6rem] gap-x-3 font-montserrat text-xs font-bold uppercase text-black/40 pb-3 border-b border-[#C3C3C3] mb-2">
                <span>Item</span>
                <span className="text-center">Qty</span>
                <span className="text-right">Price</span>
              </div>
              {items.map((item) => (
                <div key={item._id} className="grid grid-cols-[1fr_3rem_6rem] gap-x-3 items-start py-4 border-b border-[#C3C3C3] font-montserrat text-base lg:text-lg text-black">
                  <p className="line-clamp-2 leading-6">{item.product?.title || item.title}</p>
                  <p className="text-center font-bold">{item.quantity}</p>
                  <p className="text-right font-bold">{fmt(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
          )}

          <div className="bg-white p-4 lg:p-6 rounded-10p relative before:content-[''] before:absolute before:-top-6 before:bg-lightGray before:w-full before:h-1.5 before:left-0">
            {shippingCost > 0 && (
              <div className="font-montserrat text-sm lg:text-base text-black flex justify-between items-center mb-3">
                <span>Shipping</span>
                <span>{fmt(shippingCost)}</span>
              </div>
            )}
            <div className="font-montserrat font-bold text-lg lg:text-xl text-black leading-[25px] lg:leading-[30px] flex justify-between items-center mb-5 lg:mb-7">
              <h6 className="text-sm lg:text-base">Total</h6>
              <p className="text-green">{fmt(subtotal + shippingCost)}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
