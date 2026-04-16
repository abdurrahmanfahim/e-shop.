import { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import OrderSummary from "./OrderSummary";

const REQUIRED = ["firstName", "lastName", "phone", "email", "address", "country", "state", "city"];

const InformationAccPart = ({ billing, setBilling, setActive, shippingCost = 0 }) => {
  const [errors, setErrors] = useState({});
  const set = (key, val) => {
    setBilling((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    REQUIRED.forEach((key) => {
      if (!billing[key]?.trim()) newErrors[key] = "This field is required";
    });
    if (billing.email && !/\S+@\S+\.\S+/.test(billing.email)) newErrors.email = "Invalid email address";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      const firstKey = REQUIRED.find((k) => newErrors[k]);
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    setActive("Shipping");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const field = (label, name, opts = {}) => (
    <div className={opts.full ? "w-full" : "w-full sm:w-[calc(50%-8px)] lg:w-[424px]"}>
      <FormInput
        label={label}
        star={REQUIRED.includes(name)}
        placeholder={opts.placeholder || ""}
        inpType={opts.type || "text"}
        value={billing[name] || ""}
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
          Billing Details
        </h2>
        <div className="mt-6 lg:mt-8 flex flex-wrap gap-x-4 gap-y-6 lg:gap-y-8 w-full lg:w-[870px]">
          {field("First Name", "firstName", { placeholder: "Amelia" })}
          {field("Last Name", "lastName", { placeholder: "Watson" })}
          {field("Phone Number", "phone", { placeholder: "+123 456 7890", type: "tel" })}
          {field("Email Address", "email", { placeholder: "amelia@eshop.com", type: "email" })}
          {field("Address", "address", { placeholder: "Home Address, St. 12345", full: true })}
          {field("Country", "country", { placeholder: "United States" })}
          {field("State", "state", { placeholder: "California" })}
          {field("City", "city", { placeholder: "Los Angeles" })}
          {field("ZIP Code", "zip", { placeholder: "90210" })}
          <div className="w-full">
            <FormInput textAria={true} label="Order Notes" placeholder="Enter your order notes ..." height="173px" value={billing.notes || ""} onChange={(e) => set("notes", e.target.value)} name="notes" />
          </div>
        </div>
      </div>
      <OrderSummary shippingCost={shippingCost}>
        <Button text="Continue to Shipping" className="w-full" flexGrow={true} onClick={handleNext} />
      </OrderSummary>
    </div>
  );
};

export default InformationAccPart;
