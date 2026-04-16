import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import InformationAccPart from "../components/InformationAccPart";
import Container from "../components/layouts/Container";
import PaymentAccPart from "../components/PaymentAccPart";
import ShippingAccPart from "../components/ShippingAccPart";
import CartContext from "../contexts/CartContext";
import api from "../api/api";

const STEPS = ["Information", "Shipping", "Payment"];
const SHIPPING_COSTS = { standard: 9.99, express: 19.99, overnight: 39.99 };

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);
  const [active, setActive] = useState("Information");
  const [completed, setCompleted] = useState([]);
  const [billing, setBilling] = useState({});
  const [shipping, setShipping] = useState({ method: "standard" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const shippingCost = SHIPPING_COSTS[shipping.method] ?? 9.99;

  const goToStep = (step) => {
    const order = ["Information", "Shipping", "Payment"];
    const targetIdx = order.indexOf(step);
    const activeIdx = order.indexOf(active);
    // can go back freely, can only go forward if current step completed
    if (targetIdx <= activeIdx || completed.includes(active)) {
      setActive(step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSetActive = (step) => {
    setCompleted((prev) => prev.includes(active) ? prev : [...prev, active]);
    setActive(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!cart?.items?.length) {
    return (
      <Container>
        <div className="py-20 text-center">
          <p className="font-montserrat text-lg mb-6">Your cart is empty.</p>
          <button onClick={() => navigate("/all-products")} className="font-montserrat font-bold text-green underline">
            Browse Products
          </button>
        </div>
      </Container>
    );
  }

  const handlePlaceOrder = async (paymentData) => {
    setSubmitting(true);
    setError("");
    try {
      await api.post("/orders", {
        billing,
        shipping,
        payment: { method: paymentData.method || "card" },
      });
      await clearCart();
      navigate("/orders");
    } catch (err) {
      setError(err.response?.data?.message || "Order failed. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <div className="mt-8 lg:mt-16">
        <div className="flex gap-2 lg:gap-4 items-center text-black font-montserrat text-sm lg:text-base leading-6">
          <span>Home</span> <span>|</span>
          <span>Cart</span> <span>|</span>
          <span className="font-bold">Checkout</span>
        </div>

        <div className="mt-8 lg:mt-12">
          <h1 className="text-center font-poppins font-bold text-3xl lg:text-[56px] leading-[40px] lg:leading-17 mb-6 lg:mb-9">
            Checkout
          </h1>

          {/* Step tabs */}
          <div className="flex gap-4 sm:gap-8 lg:gap-16 justify-center items-center overflow-x-auto px-4 sm:px-0">
            {STEPS.map((step, i) => {
              const order = ["Information", "Shipping", "Payment"];
              const targetIdx = order.indexOf(step);
              const activeIdx = order.indexOf(active);
              const isClickable = targetIdx <= activeIdx || completed.includes(active);
              return (
                <div
                  key={step}
                  className={`flex justify-center items-center gap-1 sm:gap-2 lg:gap-4 whitespace-nowrap ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
                  onClick={() => isClickable && goToStep(step)}
                >
                  {active === step && (
                    <div className="size-8 sm:size-10 lg:size-[50px] flex justify-center items-center font-montserrat text-xs sm:text-sm lg:text-base font-bold text-white bg-green rounded-full">
                      0{i + 1}
                    </div>
                  )}
                  {completed.includes(step) && active !== step && (
                    <div className="size-8 sm:size-10 lg:size-[50px] flex justify-center items-center font-montserrat text-xs sm:text-sm lg:text-base font-bold text-white bg-green/50 rounded-full">
                      ✓
                    </div>
                  )}
                  <p className={`text-sm sm:text-lg lg:text-2xl font-bold font-poppins ${active === step ? "text-black" : completed.includes(step) ? "text-green/70" : "text-[#CBCBCB]"}`}>
                    {step}
                    <span className={`h-1 w-full block mt-1 ${active === step ? "bg-green" : "bg-transparent"}`} />
                  </p>
                </div>
              );
            })}
          </div>

          {error && (
            <p className="font-montserrat text-sm text-red-500 mt-4 text-center p-3 bg-red-50 rounded-10p max-w-lg mx-auto">
              {error}
            </p>
          )}

          <div className="flex my-12 lg:my-20 justify-between">
            {active === "Information" && (
              <InformationAccPart billing={billing} setBilling={setBilling} setActive={handleSetActive} shippingCost={shippingCost} />
            )}
            {active === "Shipping" && (
              <ShippingAccPart shipping={shipping} setShipping={setShipping} setActive={handleSetActive} shippingCost={shippingCost} />
            )}
            {active === "Payment" && (
              <PaymentAccPart onSubmit={handlePlaceOrder} submitting={submitting} shippingCost={shippingCost} />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
