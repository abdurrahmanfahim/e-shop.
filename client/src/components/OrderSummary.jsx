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
            items.map((item) => (
              <div key={item._id}>
                <ul className="font-montserrat text-sm lg:text-lg xl:text-xl text-black leading-[20px] lg:leading-[25px] xl:leading-[30px] flex justify-between items-start gap-2">
                  <li className="flex-1 line-clamp-2">
                    <p>{item.product?.title || item.title}</p>
                  </li>
                  <li className="shrink-0">
                    <b>×{item.quantity}</b>
                  </li>
                  <li className="shrink-0 text-right">
                    <b>{fmt(item.price * item.quantity)}</b>
                  </li>
                </ul>
                <hr className="w-full border-t border-t-[#C3C3C3] mt-4" />
              </div>
            ))
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
