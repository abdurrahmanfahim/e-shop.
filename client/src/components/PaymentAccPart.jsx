import { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import OrderSummary from "./OrderSummary";

const PaymentAccPart = ({ onSubmit, submitting }) => {
  const [payment, setPayment] = useState({
    cardholderName: "", cardNumber: "", expiry: "", cvv: "",
    billingAddress: "", country: "", zip: "", method: "card",
  });
  const set = (key, val) => setPayment((prev) => ({ ...prev, [key]: val }));

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between w-full">
      <div className="w-full lg:w-auto">
        <h2 className="font-poppins text-2xl lg:text-4xl font-semibold leading-[30px] lg:leading-[46px] text-black mb-2">
          Payment Information
        </h2>

        <div className="mt-6 lg:mt-8 flex flex-wrap gap-x-4 gap-y-6 lg:gap-y-8 w-full lg:w-[870px]">
          <div className="w-full">
            <FormInput label="Cardholder Name" star={true} placeholder="John Doe" value={payment.cardholderName} onChange={(e) => set("cardholderName", e.target.value)} name="cardholderName" />
          </div>
          <div className="w-full">
            <FormInput label="Card Number" star={true} placeholder="1234 5678 9012 3456" value={payment.cardNumber} onChange={(e) => set("cardNumber", e.target.value)} name="cardNumber" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="Expiry Date" star={true} placeholder="MM/YY" value={payment.expiry} onChange={(e) => set("expiry", e.target.value)} name="expiry" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="CVV" star={true} placeholder="123" value={payment.cvv} onChange={(e) => set("cvv", e.target.value)} name="cvv" />
          </div>
          <div className="w-full">
            <FormInput label="Billing Address" star={true} placeholder="123 Main Street, City, State 12345" value={payment.billingAddress} onChange={(e) => set("billingAddress", e.target.value)} name="billingAddress" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="Country" star={true} placeholder="United States" value={payment.country} onChange={(e) => set("country", e.target.value)} name="country" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="ZIP Code" star={true} placeholder="12345" value={payment.zip} onChange={(e) => set("zip", e.target.value)} name="zip" />
          </div>
        </div>
      </div>

      <OrderSummary>
        <Button
          text={submitting ? "Placing Order..." : "Complete Payment"}
          className="w-full"
          flexGrow={true}
          onClick={() => onSubmit(payment)}
        />
      </OrderSummary>
    </div>
  );
};

export default PaymentAccPart;
