import { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import OrderSummary from "./OrderSummary";

const REQUIRED = ["cardholderName", "cardNumber", "expiry", "cvv", "billingAddress"];

const PaymentAccPart = ({ onSubmit, submitting, shippingCost = 0 }) => {
  const [payment, setPayment] = useState({
    cardholderName: "", cardNumber: "", expiry: "", cvv: "",
    billingAddress: "", country: "", zip: "", method: "card",
  });
  const [errors, setErrors] = useState({});

  const set = (key, val) => {
    setPayment((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    REQUIRED.forEach((key) => {
      if (!payment[key]?.trim()) newErrors[key] = "This field is required";
    });
    if (payment.cardNumber && payment.cardNumber.replace(/\s/g, "").length < 16)
      newErrors.cardNumber = "Card number must be 16 digits";
    if (payment.cvv && payment.cvv.length < 3)
      newErrors.cvv = "CVV must be 3-4 digits";
    if (payment.expiry && !/^\d{2}\/\d{2}$/.test(payment.expiry))
      newErrors.expiry = "Format: MM/YY";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      const firstKey = REQUIRED.find((k) => newErrors[k]);
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit(payment);
  };

  const field = (label, name, opts = {}) => (
    <div className={opts.full ? "w-full" : "w-full sm:w-[calc(50%-8px)] lg:w-[424px]"}>
      <FormInput
        label={label}
        star={REQUIRED.includes(name)}
        placeholder={opts.placeholder || ""}
        value={payment[name]}
        onChange={(e) => set(name, e.target.value)}
        name={name}
      />
      {errors[name] && <p className="font-montserrat text-xs text-red-500 mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between w-full">
      <div className="w-full lg:w-auto">
        <h2 className="font-poppins text-2xl lg:text-4xl font-semibold leading-[30px] lg:leading-[46px] text-black mb-2">
          Payment Information
        </h2>
        <div className="mt-6 lg:mt-8 flex flex-wrap gap-x-4 gap-y-6 lg:gap-y-8 w-full lg:w-[870px]">
          {field("Cardholder Name", "cardholderName", { placeholder: "John Doe", full: true })}
          {field("Card Number", "cardNumber", { placeholder: "1234 5678 9012 3456", full: true })}
          {field("Expiry Date", "expiry", { placeholder: "MM/YY" })}
          {field("CVV", "cvv", { placeholder: "123" })}
          {field("Billing Address", "billingAddress", { placeholder: "123 Main Street, City, State 12345", full: true })}
          {field("Country", "country", { placeholder: "United States" })}
          {field("ZIP Code", "zip", { placeholder: "12345" })}
        </div>
      </div>
      <OrderSummary shippingCost={shippingCost}>
        <Button
          text={submitting ? "Placing Order..." : "Complete Payment"}
          className="w-full"
          flexGrow={true}
          onClick={handleSubmit}
        />
      </OrderSummary>
    </div>
  );
};

export default PaymentAccPart;
