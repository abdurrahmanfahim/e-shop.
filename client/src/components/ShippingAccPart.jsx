import { useState } from "react";
import Button from "./Button";
import FormInput from "./FormInput";

const METHODS = [
  { key: "standard",  label: "Standard Shipping",  days: "5-7 business days", price: "$9.99" },
  { key: "express",   label: "Express Shipping",    days: "2-3 business days", price: "$19.99" },
  { key: "overnight", label: "Overnight Shipping",  days: "Next business day",  price: "$39.99" },
];

const REQUIRED = ["recipientName", "contactNumber", "address", "country", "state", "city"];

const ShippingAccPart = ({ shipping, setShipping, setActive, shippingCost = 9.99 }) => {
  const [errors, setErrors] = useState({});
  const set = (key, val) => {
    setShipping((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };
  const selected = METHODS.find((m) => m.key === shipping.method) || METHODS[0];

  const validate = () => {
    const newErrors = {};
    REQUIRED.forEach((key) => {
      if (!shipping[key]?.trim()) newErrors[key] = "This field is required";
    });
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
    setActive("Payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const field = (label, name, opts = {}) => (
    <div className={opts.full ? "w-full" : "w-full sm:w-[calc(50%-8px)] lg:w-[424px]"}>
      <FormInput
        label={label}
        star={REQUIRED.includes(name)}
        placeholder={opts.placeholder || ""}
        value={shipping[name] || ""}
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
          Shipping Details
        </h2>
        <div className="mt-6 lg:mt-8 flex flex-wrap gap-x-4 gap-y-6 lg:gap-y-8 w-full lg:w-[870px]">
          {field("Recipient Name", "recipientName", { placeholder: "John Doe" })}
          {field("Contact Number", "contactNumber", { placeholder: "+123 456 7890" })}
          {field("Shipping Address", "address", { placeholder: "123 Main Street", full: true })}
          {field("Country", "country", { placeholder: "United States" })}
          {field("State/Province", "state", { placeholder: "California" })}
          {field("City", "city", { placeholder: "Los Angeles" })}
          {field("ZIP/Postal Code", "zip", { placeholder: "90210" })}
          <div className="w-full">
            <FormInput textAria={true} label="Delivery Instructions" placeholder="Leave at door, ring bell, etc." value={shipping.deliveryInstructions || ""} onChange={(e) => set("deliveryInstructions", e.target.value)} name="deliveryInstructions" />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[594px]">
        <div className="bg-lightGray rounded-[25px] p-6 lg:p-10">
          <h3 className="font-poppins text-xl lg:text-2xl font-semibold text-black mb-8 lg:mb-12">Shipping Options</h3>
          <div className="flex flex-col gap-4 lg:gap-5">
            <div className="bg-white p-4 lg:p-6 rounded-10p flex flex-col gap-3">
              {METHODS.map((m, i) => (
                <div key={m.key}>
                  <button
                    onClick={() => set("method", m.key)}
                    className={`w-full font-montserrat text-base lg:text-lg text-black flex justify-between items-center p-2 rounded-10p transition-all ${shipping.method === m.key ? "bg-green/5 border border-green" : "hover:bg-lightGray"}`}
                  >
                    <div className="text-left">
                      <h6 className="font-semibold">{m.label}</h6>
                      <p className="text-xs lg:text-sm text-black/50">{m.days}</p>
                    </div>
                    <p className="font-bold">{m.price}</p>
                  </button>
                  {i < METHODS.length - 1 && <hr className="border-t border-[#C3C3C3] mt-3" />}
                </div>
              ))}
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-10p">
              <div className="font-montserrat font-bold text-base lg:text-xl text-black flex justify-between items-center mb-5 lg:mb-7">
                <h6 className="text-sm lg:text-base">Selected: {selected.label}</h6>
                <p>{selected.price}</p>
              </div>
              <Button text="Continue to Payment" className="w-full" flexGrow={true} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAccPart;
